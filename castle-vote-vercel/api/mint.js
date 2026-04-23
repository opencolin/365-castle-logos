// api/mint.js — Mint Icon: remove background, return clean transparent PNG
// Uses Gemini image editing to strip the background, then serves the result
// back to the client as a base64 PNG for immediate in-browser download.

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';
const STORAGE_BUCKET = 'edit-images';

const GEMINI_MODEL = 'nano-banana-pro-preview';
const GEMINI_BASE  = 'https://generativelanguage.googleapis.com/v1beta/models';

const MINT_PROMPT = `Remove the background completely, making it fully transparent. 
Keep only the castle logo graphic — all castle elements, text, crests, and decorative details. 
Do NOT add any new background color or fill. 
Output a clean PNG with a transparent background suitable for use as an app icon or sticker. 
Do not change the colors, style, or design of the castle illustration itself.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { logoId, imageUrl, sessionId } = req.body;
  if (!logoId || !imageUrl) {
    return res.status(400).json({ error: 'Missing logoId or imageUrl' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });

  const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

  // 1. Fetch the source image
  let imageB64, imageMime = 'image/png';
  try {
    const imgRes = await fetch(imageUrl, { headers: { 'User-Agent': 'CastleVoteBot/1.0' } });
    if (!imgRes.ok) throw new Error(`Image fetch failed: ${imgRes.status}`);
    const buf = await imgRes.arrayBuffer();
    imageB64 = Buffer.from(buf).toString('base64');
    const ct = imgRes.headers.get('content-type');
    if (ct && ct.includes('jpeg')) imageMime = 'image/jpeg';
  } catch (err) {
    return res.status(500).json({ error: `Image fetch: ${err.message}` });
  }

  // 2. Call Gemini with background-removal prompt
  let resultMime, resultBuffer;
  try {
    const payload = {
      contents: [{
        parts: [
          { inline_data: { mime_type: imageMime, data: imageB64 } },
          { text: MINT_PROMPT }
        ]
      }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'] }
    };

    const geminiRes = await fetch(
      `${GEMINI_BASE}/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      throw new Error(`Gemini ${geminiRes.status}: ${errText.slice(0, 300)}`);
    }

    const data = await geminiRes.json();
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData);
    if (!imagePart) {
      const textPart = parts.find(p => p.text);
      throw new Error(textPart?.text?.slice(0, 200) || 'No image returned by Gemini');
    }

    resultMime   = imagePart.inlineData.mimeType || 'image/png';
    resultBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
  } catch (err) {
    console.error('Gemini mint error:', err.message);
    return res.status(500).json({ error: err.message });
  }

  // 3. Upload to Supabase Storage (mint- prefix to distinguish from edits)
  let publicUrl;
  try {
    const ext      = resultMime.includes('jpeg') ? 'jpg' : 'png';
    const filename = `mint-${logoId}-${Date.now()}.${ext}`;

    const { error: uploadErr } = await sb.storage
      .from(STORAGE_BUCKET)
      .upload(filename, resultBuffer, { contentType: resultMime, upsert: false });

    if (uploadErr) throw new Error(`Storage upload: ${uploadErr.message}`);

    const { data: urlData } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(filename);
    publicUrl = urlData.publicUrl;
  } catch (err) {
    console.error('Storage error:', err.message);
    return res.status(500).json({ error: err.message });
  }

  // 4. Also save into castle_edits so it persists and shows in the card collection
  try {
    await sb.from('castle_edits').insert({
      parent_logo_id: logoId,
      session_id: sessionId || 'mint',
      prompt: MINT_PROMPT,
      source_image_url: imageUrl,
      status: 'done',
      image_data_url: publicUrl,
      up_votes: 0,
      down_votes: 0,
      is_mint: true,
    });
  } catch (_) {
    // Non-fatal — we still return the URL
  }

  return res.status(200).json({ status: 'done', url: publicUrl, mime: resultMime });
}
