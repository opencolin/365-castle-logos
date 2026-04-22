# CLI Commands

All media commands run via bash. Accept JSON params as a single argument. Use a separate bash tool call for each media command — do not chain multiple media commands in a single bash call. This allows parallel execution and correct UI rendering.

Every media bash call must include the correct `api_credentials` — see examples below.

## asi-generate-image

Generate images from text prompts. Supports img2img with reference images.

```json
{
  "command": "asi-generate-image '{\"prompt\": \"A sunset over mountains\", \"filename\": \"sunset\", \"aspect_ratio\": \"16:9\"}'",
  "api_credentials": ["llm-api:image"]
}
```

| Parameter      | Required | Default           | Description                                                                            |
| -------------- | -------- | ----------------- | -------------------------------------------------------------------------------------- |
| `prompt`       | yes      | —                 | Detailed description of the image                                                      |
| `filename`     | yes      | —                 | Output filename without extension (adds .png)                                          |
| `aspect_ratio` | no       | `"1:1"`           | `"1:1"`, `"3:4"`, `"4:3"`, `"9:16"`, `"16:9"`                                          |
| `model`        | no       | `"nano_banana_2"` | `"nano_banana_2"`, `"nano_banana_pro"`, `"gpt_image_1_5"` — default to `nano_banana_2` |
| `images`       | no       | —                 | List of absolute image paths for img2img (max 10, PNG/JPEG/WebP)                       |
| `background`   | no       | —                 | `"transparent"`, `"opaque"`, or `"auto"` (only for `gpt_image_1_5`)                    |

Good for: photos, illustrations, artistic images, decorative graphics, AI-powered edits.
Bad for: charts, graphs, timelines, infographics — AI hallucinates text/numbers. Use Python scripts for programmatic visuals.

## asi-generate-video

Generate short video clips from text prompts. Optionally animate from a starting frame. For complex video productions (storyboarding, frame chaining, multi-scene), read `video-production/guide.md` in this skill's workspace directory.

```json
{
  "command": "asi-generate-video '{\"prompt\": \"A wave crashing on shore at sunset\", \"filename\": \"wave\", \"duration\": 8}'",
  "api_credentials": ["llm-api:video"]
}
```

| Parameter      | Required | Default    | Description                                                                     |
| -------------- | -------- | ---------- | ------------------------------------------------------------------------------- |
| `prompt`       | yes      | —          | Scene description including action, camera movement, style                      |
| `filename`     | yes      | —          | Output filename without extension (adds .mp4)                                   |
| `aspect_ratio` | no       | `"16:9"`   | `"16:9"` (landscape) or `"9:16"` (portrait)                                     |
| `duration`     | no       | `8`        | Sora: 4, 8, 12 seconds. Veo: 4, 6, 8 seconds                                    |
| `model`        | no       | `"sora_2"` | `"sora_2"`, `"sora_2_pro"`, `"veo_3_1"`, `"veo_3_1_fast"` — default to `sora_2` |
| `image_path`   | no       | —          | Absolute path to starting frame image                                           |

## asi-text-to-speech

Convert text to speech audio. Read `speech/guide.md` for voices, delivery control tags, and multi-speaker dialogue format.

```json
{
  "command": "asi-text-to-speech '{\"file_path\": \"/home/user/workspace/script.txt\", \"voice\": \"charon\"}'",
  "api_credentials": ["llm-api:audio"]
}
```

| Parameter   | Required | Default                | Description                                                              |
| ----------- | -------- | ---------------------- | ------------------------------------------------------------------------ |
| `file_path` | yes      | —                      | Absolute path to .txt (single speaker) or .json (multi-speaker dialogue) |
| `voice`     | no       | `"kore"`               | Voice name for single-speaker .txt files. Ignored for .json dialogue     |
| `model`     | no       | `"gemini_2_5_pro_tts"` | `"gemini_2_5_pro_tts"` or `"elevenlabs_tts_v3"`                          |

## asi-transcribe-audio

Transcribe audio/video files to text with optional speaker diarization and timestamps.

```json
{
  "command": "asi-transcribe-audio '{\"file_path\": \"/home/user/workspace/meeting.mp3\"}'",
  "api_credentials": ["llm-api:audio"]
}
```

| Parameter       | Required | Default  | Description                                                      |
| --------------- | -------- | -------- | ---------------------------------------------------------------- |
| `file_path`     | yes      | —        | Absolute path to audio/video file                                |
| `diarize`       | no       | `false`  | Identify speakers (up to 32)                                     |
| `num_speakers`  | no       | —        | Hint for expected number of speakers (1-32)                      |
| `timestamps`    | no       | `"none"` | `"none"` (plain txt), `"word"`, `"character"` (json with timing) |
| `language_code` | no       | —        | ISO 639-1 code (e.g. `"en"`, `"es"`). Auto-detected if omitted   |

Supported formats: mp3, wav, m4a, ogg, flac, mp4, webm. Max 3 GB.

## Gotchas

**Choosing a model** — Use the defaults. `nano_banana_2` handles img2img natively — do not switch to `gpt_image_1_5` for photo editing or style transfer. Load `model-catalog` for full guidance on all models.

## Troubleshooting

**Missing or broken SDK** (`ModuleNotFoundError: No module named 'pplx'` or `AttributeError: module 'ddtrace' has no attribute 'Tracer'`)

Install or reinstall the media SDK, then retry:

```bash
pip install --force-reinstall pplx-python-sdks-llm-api
```