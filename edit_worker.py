#!/usr/bin/env python3
"""
Edit Job Worker — runs in the sandbox.
Polls Supabase for pending edit jobs, generates images with nano_banana_pro,
uploads result back to Supabase.
"""

import asyncio
import base64
import json
import os
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

from pplx.python.sdks.llm_api import (
    Client,
    Conversation,
    Identity,
    ImageBlock,
    ImageGenAspectRatio,
    ImageGenParams,
    ImageSource,
    ImageSourceType,
    LLMAPIClient,
    MediaGenParams,
    SamplingParams,
    TextBlock,
)
from supabase import create_client

SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI'
POLL_INTERVAL = 3  # seconds
MAX_IMAGE_SIZE = 7 * 1024 * 1024  # 7MB


def fetch_image_as_base64(url: str) -> tuple[str, str]:
    """Download image from URL and return (base64_data, media_type)."""
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
    if len(data) > MAX_IMAGE_SIZE:
        # Resize down using PIL if too large
        from PIL import Image
        import io
        img = Image.open(io.BytesIO(data)).convert('RGB')
        img.thumbnail((1024, 1024))
        buf = io.BytesIO()
        img.save(buf, format='PNG')
        data = buf.getvalue()
    content_type = 'image/png'
    if url.lower().endswith('.jpg') or url.lower().endswith('.jpeg'):
        content_type = 'image/jpeg'
    return base64.b64encode(data).decode(), content_type


async def generate_image(prompt: str, image_b64: str, media_type: str) -> bytes:
    """Call nano_banana_pro with img2img and return raw PNG bytes."""
    client = LLMAPIClient()
    convo = Conversation()
    convo.add_user([
        ImageBlock(source=ImageSource(
            type=ImageSourceType.BASE64,
            media_type=media_type,
            data=image_b64,
        )),
        TextBlock(text=prompt),
    ])
    result = await client.messages.create(
        model='nano_banana_pro',
        convo=convo,
        identity=Identity(client=Client.ASI, use_case='image_generation'),
        sampling_params=SamplingParams(max_tokens=1),
        media_gen_params=MediaGenParams(
            image=ImageGenParams(number_of_images=1, aspect_ratio=ImageGenAspectRatio.RATIO_1_1)
        ),
    )
    if not result.images:
        raise RuntimeError('No image returned from model')
    return base64.b64decode(result.images[0].b64_data)


async def process_job(sb, job: dict) -> None:
    job_id = job['id']
    print(f'[worker] Processing job {job_id}: "{job["prompt"]}"')

    # Mark as processing
    sb.table('castle_edits').update({'status': 'processing'}).eq('id', job_id).execute()

    try:
        # Download source image
        image_b64, media_type = fetch_image_as_base64(job['source_image_url'])

        # Generate with nano_banana_pro
        img_bytes = await generate_image(job['prompt'], image_b64, media_type)

        # Convert to data URL
        result_b64 = base64.b64encode(img_bytes).decode()
        data_url = f'data:image/png;base64,{result_b64}'

        # Update Supabase with result
        sb.table('castle_edits').update({
            'status': 'done',
            'image_data_url': data_url,
            'error_msg': None,
        }).eq('id', job_id).execute()

        print(f'[worker] Job {job_id} done — {len(img_bytes)} bytes')

    except Exception as e:
        print(f'[worker] Job {job_id} FAILED: {e}')
        sb.table('castle_edits').update({
            'status': 'error',
            'error_msg': str(e),
        }).eq('id', job_id).execute()


async def main():
    print('[worker] Starting edit job worker...')
    sb = create_client(SUPABASE_URL, SUPABASE_KEY)

    while True:
        try:
            # Fetch one pending job
            resp = sb.table('castle_edits') \
                .select('id, parent_logo_id, session_id, prompt, source_image_url') \
                .eq('status', 'pending') \
                .order('created_at') \
                .limit(1) \
                .execute()

            jobs = resp.data
            if jobs:
                await process_job(sb, jobs[0])
            else:
                await asyncio.sleep(POLL_INTERVAL)

        except Exception as e:
            print(f'[worker] Poll error: {e}')
            await asyncio.sleep(POLL_INTERVAL)


if __name__ == '__main__':
    asyncio.run(main())
