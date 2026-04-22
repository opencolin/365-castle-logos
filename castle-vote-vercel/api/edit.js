// Vercel serverless function
// Generates an AI-edited castle image via Gemini, stores result in Supabase, returns immediately.

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';

const GEMINI_MODEL = 'nano-banana-pro-preview';
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

// GitHub CDN base for fetching original logo images
const GITHUB_CDN = 'https://raw.githubusercontent.com/opencolin/365-castle-logos/master/logos/';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { parentLogoId, sessionId, prompt, imageUrl } = req.body;
  if (!parentLogoId || !sessionId || !prompt || !imageUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
  }

  const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

  // 1. Insert job row immediately as 'processing'
  const { data: jobRow, error: insertErr } = await sb
    .from('castle_edits')
    .insert({
      parent_logo_id: parentLogoId,
      session_id: sessionId,
      prompt,
      source_image_url: imageUrl,
      status: 'processing',
      image_data_url: null,
      up_votes: 0,
      down_votes: 0,
    })
    .select('id')
    .single();

  if (insertErr) {
    console.error('Supabase insert error:', insertErr);
    return res.status(500).json({ error: insertErr.message });
  }

  const jobId = jobRow.id;

  // 2. Fetch the source image (from GitHub CDN or data URL)
  let imageB64;
  let imageMime = 'image/png';
  try {
    if (imageUrl.startsWith('data:')) {
      // It's already a data URL (an edited image used as source for "Edit again")
      const [header, b64] = imageUrl.split(',');
      imageB64 = b64;
      imageMime = header.match(/data:([^;]+)/)[1];
    } else {
      // Fetch from URL
      const imgRes = await fetch(imageUrl, { headers: { 'User-Agent': 'CastleVoteBot/1.0' } });
      if (!imgRes.ok) throw new Error(`Image fetch failed: ${imgRes.status}`);
      const arrayBuf = await imgRes.arrayBuffer();
      const buf = Buffer.from(arrayBuf);
      // Downscale if > 4MB to stay within Gemini limits
      imageB64 = buf.toString('base64');
    }
  } catch (err) {
    await sb.from('castle_edits').update({ status: 'error', error_msg: `Image fetch: ${err.message}` }).eq('id', jobId);
    return res.status(200).json({ jobId, status: 'error', error: err.message });
  }

  // 3. Call Gemini nano-banana-pro-preview for image editing
  let resultDataUrl;
  try {
    const geminiPayload = {
      contents: [{
        parts: [
          { inline_data: { mime_type: imageMime, data: imageB64 } },
          { text: prompt }
        ]
      }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'] }
    };

    const geminiRes = await fetch(
      `${GEMINI_BASE}/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      throw new Error(`Gemini API error ${geminiRes.status}: ${errText.slice(0, 300)}`);
    }

    const geminiData = await geminiRes.json();
    const parts = geminiData?.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData);

    if (!imagePart) {
      const textPart = parts.find(p => p.text);
      throw new Error(textPart?.text?.slice(0, 200) || 'No image returned by Gemini');
    }

    const { data: outB64, mimeType: outMime } = imagePart.inlineData;
    resultDataUrl = `data:${outMime};base64,${outB64}`;
  } catch (err) {
    console.error('Gemini error:', err.message);
    await sb.from('castle_edits').update({ status: 'error', error_msg: err.message.slice(0, 500) }).eq('id', jobId);
    return res.status(200).json({ jobId, status: 'error', error: err.message });
  }

  // 4. Store result in Supabase
  const { error: updateErr } = await sb
    .from('castle_edits')
    .update({ status: 'done', image_data_url: resultDataUrl, error_msg: null })
    .eq('id', jobId);

  if (updateErr) {
    console.error('Supabase update error:', updateErr);
    return res.status(500).json({ error: updateErr.message });
  }

  return res.status(200).json({ jobId, status: 'done' });
}
