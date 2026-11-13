#!/usr/bin/env python3
"""
Bhagavatam Stories — Canto 1 Summary Narration Generator
Uses Kokoro TTS (same voices as Krishna's Life Compass).

Run from the terminal:
  python3 make_narration.py

Output: audio/canto1_en.wav and audio/canto1_hi.wav
Then bake into the video with:
  ffmpeg -i canto1-summary.mp4 -i audio/canto1_en.wav \
    -c:v copy -map 0:v -map 1:a -shortest canto1-summary-narrated.mp4
"""

import os, sys, pathlib, json

# ── Script text ────────────────────────────────────────────────────────────────
# English — warm Indian female, 0.9× speed (same as Life Compass)
EN_SCRIPT = (
    "Canto One sets the stage for the whole Bhāgavatam. "
    "In the Naimiṣāraṇya forest, thousands of sages ask Sūta Gosvāmī "
    "what is truly best for people in the age of Kali. "
    "Sūta tells how Vyāsadeva, guided by Nārada, wrote the Bhāgavatam. "
    "He then describes the days after the Kurukṣetra war: "
    "Krishna saves the unborn Parīkṣit. "
    "Queen Kuntī and Bhīṣma glorify Him. "
    "He returns to Dvārakā, and finally leaves this world. "
    "As the age of Kali begins, King Parīkṣit holds Kali back, "
    "is cursed to die in seven days, "
    "and asks Śukadeva what a person should do before death. "
    "The rest of the Bhāgavatam is the answer."
)

# Hindi — Hindi female voice (same as Life Compass)
HI_SCRIPT = (
    "प्रथम स्कंध संपूर्ण भागवत की नींव रखता है। "
    "नैमिषारण्य वन में हज़ारों ऋषि सूत गोस्वामी से पूछते हैं — "
    "कलियुग में मनुष्य के लिए सबसे अच्छा क्या है? "
    "सूत जी बताते हैं कि नारद की प्रेरणा से व्यासदेव ने भागवत की रचना की। "
    "फिर वे कुरुक्षेत्र युद्ध के बाद के दिनों का वर्णन करते हैं: "
    "कृष्ण ने अजन्मे परीक्षित की रक्षा की। "
    "रानी कुंती और भीष्म ने उनकी स्तुति की। "
    "वे द्वारका लौटे, और अंत में इस लोक से चले गए। "
    "जब कलियुग का आरंभ हुआ, राजा परीक्षित ने कलि को रोका, "
    "उन्हें सात दिनों में मृत्यु का शाप मिला, "
    "और उन्होंने शुकदेव से पूछा — मृत्यु से पहले मनुष्य क्या करे? "
    "शेष सारा भागवत उसी प्रश्न का उत्तर है।"
)

# ── Kokoro setup ───────────────────────────────────────────────────────────────
try:
    from kokoro import KPipeline
except ImportError:
    try:
        from kokoro_onnx import Kokoro
        USE_ONNX = True
    except ImportError:
        print("❌ Kokoro not found. Install with: pip install kokoro-onnx")
        sys.exit(1)
    USE_ONNX = False
else:
    USE_ONNX = False

import soundfile as sf
import numpy as np

out_dir = pathlib.Path("audio")
out_dir.mkdir(exist_ok=True)

# ── English narration ──────────────────────────────────────────────────────────
print("Generating English narration (warm Indian female, 0.9×)…")
try:
    if USE_ONNX:
        kokoro = Kokoro("kokoro-v1.0.onnx", "voices.bin")
        samples, sr = kokoro.create(EN_SCRIPT, voice="af_sarah", speed=0.9, lang="en-us")
        sf.write(out_dir / "canto1_en.wav", samples, sr)
    else:
        pipeline = KPipeline(lang_code="a")  # 'a' = American English
        audio_parts = []
        for _, _, audio in pipeline(EN_SCRIPT, voice="af_sarah", speed=0.9):
            audio_parts.append(audio)
        combined = np.concatenate(audio_parts)
        sf.write(out_dir / "canto1_en.wav", combined, 24000)
    print("✅ Saved audio/canto1_en.wav")
except Exception as e:
    print(f"❌ English failed: {e}")

# ── Hindi narration ────────────────────────────────────────────────────────────
print("Generating Hindi narration (Hindi female)…")
try:
    if USE_ONNX:
        kokoro = Kokoro("kokoro-v1.0.onnx", "voices.bin")
        samples, sr = kokoro.create(HI_SCRIPT, voice="hf_alpha", speed=0.9, lang="hi")
        sf.write(out_dir / "canto1_hi.wav", samples, sr)
    else:
        pipeline = KPipeline(lang_code="h")  # 'h' = Hindi
        audio_parts = []
        for _, _, audio in pipeline(HI_SCRIPT, voice="hf_alpha", speed=0.9):
            audio_parts.append(audio)
        combined = np.concatenate(audio_parts)
        sf.write(out_dir / "canto1_hi.wav", combined, 24000)
    print("✅ Saved audio/canto1_hi.wav")
except Exception as e:
    print(f"❌ Hindi failed: {e}")

print()
print("── Next step ───────────────────────────────────────────────────────────")
print("Bake English narration into the video:")
print("  ffmpeg -i canto1-summary.mp4 -i audio/canto1_en.wav \\")
print("    -c:v copy -map 0:v -map 1:a -shortest canto1-summary-en.mp4")
print()
print("Bake Hindi narration into the video:")
print("  ffmpeg -i canto1-summary.mp4 -i audio/canto1_hi.wav \\")
print("    -c:v copy -map 0:v -map 1:a -shortest canto1-summary-hi.mp4")
