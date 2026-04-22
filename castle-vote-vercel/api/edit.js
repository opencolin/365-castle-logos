// Vercel serverless function
// Inserts an edit job into Supabase. The sandbox worker polls and runs the generation.

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';

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

  const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

  const { data, error } = await sb
    .from('castle_edits')
    .insert({
      parent_logo_id: parentLogoId,
      session_id: sessionId,
      prompt,
      source_image_url: imageUrl,
      status: 'pending',
      image_data_url: null,
      up_votes: 0,
      down_votes: 0,
    })
    .select('id')
    .single();

  if (error) {
    console.error('Supabase insert error:', error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ jobId: data.id });
}
