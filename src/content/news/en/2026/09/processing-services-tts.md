---
translationKey: prep-2026-09-processing-tts
locale: en
sourceLang: de
sourceVersionHash: "4c6a085967b99461df39b3f1973c60b7a4e2114e"
translationStatus: machine
slug: service-architecture-and-first-tts-contract-prepared
title: "TTS from architecture building block to public test path: six profiles and VoiceDesign on the target VM"
summary: "The TTS path has moved well beyond the first September state: the engine-neutral API now runs with Qwen3-TTS-1.7B, six neutral preset profiles and VoiceDesign on the target VM and is reachable through the public test demo. This is real integration, but not yet an audio-quality or production approval."
publishedAt: 2026-09-22T17:08:00+02:00
updatedAt: 2026-10-06T12:30:00+02:00
event:
  start: 2026-09-22
  end: 2026-09-29
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "The HTTP contract remains engine-neutral: legacy requests continue to work, while the additive advanced path supports presets with optional instructions and VoiceDesign without exposing Qwen model names or sampling parameters in the public contract."
  - "The active reference runtime now uses the pinned Qwen3-TTS-1.7B models for CustomVoice and VoiceDesign; six service-owned neutral preset profiles are exposed."
  - "The single-resident lifecycle keeps at most one large model worker in memory at a time and switches serially between preset and design mode."
  - "The TTS service was deployed to the target VM through processing-services and verified with real synthetic German/English inference through the public demo's same-origin path."
  - "The runtime qualification is deliberately limited: human listening evaluation and an actual rollback were not performed, and the qualified container path remains CPU/FP32 rather than GPU/CUDA."
openQuestions:
  - "How reliably are technical terms, numbers, units, variable names and mathematically prepared speech rendered intelligibly for learners?"
  - "Which navigation functions do learners actually need for longer audio versions – for example segmentation, synchronous highlighting or controlled interruption?"
  - "Does VoiceDesign provide relevant value in the application context, or are a highly reliable voice and consistent technical terminology more important?"
partnerQuestions:
  - "Which pronunciation errors involving technical terms, numbers, units or formulas would be particularly critical in your practice?"
  - "Which audio-navigation functions do learners actually need for longer STEM texts?"
  - "Is voice choice or voice design important in your use case, or do intelligibility and reliability clearly matter more?"
related:
  - prep-2026-09-infrastructure
  - prep-2026-09-service-priorities
  - prep-2026-09-vision-prototype
dossiers:
  - prep-2026-09
tags:
  - Processing services
  - Text to speech
  - API
  - Qwen3-TTS
  - VoiceDesign
  - Privacy by default
authors: []
evidence: project-source
sources:
  - title: "Qwen3-TTS"
    url: "https://github.com/QwenLM/Qwen3-TTS"
    kind: vendor-project
  - title: "Qwen3-TTS-12Hz-1.7B-CustomVoice"
    url: "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice"
    kind: vendor-project
  - title: "Qwen3-TTS-12Hz-1.7B-VoiceDesign"
    url: "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-VoiceDesign"
    kind: vendor-project
  - title: "IncluLearn.AI Vision Prototype"
    url: "https://inclulearn-test.owli-ai.com/"
    kind: official-primary
aiAssisted: true
featured: false
draft: false
---

## In brief

Text to speech remains the first independent processing service through which IncluLearn.AI is testing its modular service model in practice. The state has changed substantially since the first September version.

The prepared API and adapter building block has become a **real integrated test path**: the active runtime uses Qwen3-TTS-1.7B, provides six neutral preset profiles plus VoiceDesign and runs on the target VM through `processing-services`. Real, exclusively synthetic German/English cases were exercised through the public test demo all the way to generated WAV output.

This is an important integration step – but it is **not yet an audio-quality or production approval**.

## The API contract remains engine-neutral despite new capabilities

The central architectural decision is unchanged: the platform should be able to use TTS capabilities without coupling itself to specific model names or provider-specific sampling parameters.

Legacy requests using text, language and a neutral voice profile continue to work. The same v1 path now also supports a structured advanced contract:

- preset voice with a service-owned profile ID,
- an optional bounded voice instruction,
- VoiceDesign with a textual description.

Model choice remains internal. This allows the runtime to evolve without forcing the platform to understand Qwen-specific parameters everywhere.

## Six neutral profiles and two 1.7B modes

The active Qwen adapter now uses two immutable pinned 1.7B models:

- CustomVoice for preset voices,
- VoiceDesign for textually described voice characteristics.

Externally, presets appear as neutral profiles `standard-a` through `standard-f`. Qwen speaker IDs remain an implementation detail.

A **single-resident lifecycle** applies to the two large models: the service keeps at most one model worker resident at any one time. When switching between preset and design mode, the old worker is terminated and reaped before the new one starts. This limits memory use and makes the operating boundary explicit.

## Integrated on the target VM and tested through the public demo

The TTS service was deployed to the actual target VM through the `processing-services` integration layer. The service itself receives no public host port and remains inside the internal processing network.

The web platform calls it through an engine-neutral same-origin path. The public boundary therefore remains the IncluLearn.AI web application rather than a raw TTS API.

During the six-profile runtime gate on 29 September, four real internal jobs and three short public same-origin cases completed successfully. The exercised paths included legacy simple, German/English presets and VoiceDesign. Jobs passed through the intended lifecycle and produced valid WAV files.

These tests use synthetic inputs only.

## Privacy by default remains part of the service contract

The existing privacy and operational boundaries remain in force with the expanded runtime:

- input texts and voice descriptions are processed ephemerally,
- jobs and audio are not intended as durable storage,
- audio expires after a limited period,
- standard logs should not contain complete input texts or audio data,
- model weights are provisioned separately and are not embedded in the repository or container image,
- the normal service runs offline with a read-only model cache.

The technical integration has therefore advanced without giving up the privacy-by-default design.

## What the successful test explicitly does not prove

The current final classification is effectively **"PASS WITH FINDINGS"**.

What has been shown is that the integrated CPU/FP32 path works on the target VM and that preset and VoiceDesign modes can produce real audio through the intended platform path.

What has not been shown is:

- that the voices are already sufficiently intelligible for STEM learning content,
- that technical terms, numbers, units and formulas are pronounced reliably,
- that VoiceDesign provides an actual benefit to learners,
- that a real runtime rollback succeeds,
- that a GPU/CUDA path is qualified.

Human listening evaluation was deliberately **not** inferred from a valid WAV file. Technical functionality and perceived audio quality remain separate forms of evidence.

## For STEM, the next evaluation stage is decisive

For IncluLearn.AI, the basic question "Can the service generate audio?" is now largely answered. The more important next question is: **Is the output reliably intelligible and navigable for technical teaching?**

This includes in particular:

- German and English technical terminology,
- numbers and units,
- variable names and abbreviations,
- mathematically prepared speech,
- stability over longer passages,
- segmentation and navigation,
- human listening assessment.

For STEM material, natural-sounding but technically ambiguous pronunciation would not be an adequate result.

## Why this matters to the overall architecture

TTS now demonstrates in practice that the intended service model can work across several layers:

**web platform → engine-neutral contract → processing integration → specialised service → replaceable model runtime**

TTS is therefore no longer only an architectural design. It is a limited, qualified real test path – with continued clear boundaries between technical integration, subject-level quality and later production operation.
