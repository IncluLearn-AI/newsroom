---
translationKey: prep-2026-09-processing-tts
locale: en
sourceLang: de
sourceVersionHash: "db7faf94c6781c30618dc7f55ce567354483ac82"
translationStatus: machine
slug: service-architecture-and-first-tts-contract-prepared
title: "TTS as the first modular service: API and Qwen adapter exist, product integration does not yet"
summary: "The first independent processing service demonstrates IncluLearn.AI's architectural principle: an engine-neutral TTS API with ephemeral jobs, privacy by default and a fixed-version Qwen3-TTS adapter. This is not yet a product-integrated speech service or GPU-qualified operation."
publishedAt: 2026-09-22T17:08:00+02:00
updatedAt: 2026-09-23T08:33:00+02:00
event:
  start: 2026-09-22
  end: 2026-09-22
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "The HTTP contract remains engine-neutral: clients submit text, language and optionally a neutral voice profile, but no model names, speaker IDs or sampling parameters."
  - "A Qwen3-TTS CustomVoice adapter now exists and is pinned to a fixed model revision; model weights are not stored in the repository and network downloads are not enabled silently."
  - "Jobs and audio are deliberately ephemeral in the current v1 design; request text and audio should not be stored permanently or logged in full by default."
  - "The service is not yet product-integrated: there is no approved public service operation, no productive authentication and no CUDA configuration qualified on the real project GPU."
  - "TTS quality should be measured not only by naturalness but also by technical terms, numbers, units, variable names and prepared technical speech text."
openQuestions:
  - "Which TTS engine offers the best combination of intelligibility, reproducibility and operating effort for German/English STEM content?"
  - "How should mathematics, variable names, units and technical terminology be semantically prepared for speech synthesis?"
  - "Which audio functions do learners actually need: linear playback, navigation, segmented playback or combinations with structured text?"
partnerQuestions:
  - "Which pronunciation errors in technical learning content are particularly disruptive in your practice?"
  - "Is a particular voice important for your use case, or are intelligibility, navigation and consistent terminology clearly more important?"
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
  - Privacy by default
authors: []
evidence: project-source
sources:
  - title: "Qwen3-TTS"
    url: "https://github.com/QwenLM/Qwen3-TTS"
    kind: vendor-project
  - title: "Qwen3-TTS-12Hz-0.6B-CustomVoice"
    url: "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice"
    kind: vendor-project
aiAssisted: true
featured: false
draft: false
---

## In brief

Text to speech is the first independent processing service on which IncluLearn.AI is testing its planned service model.

The important point is not only that a speech model can be connected. The architectural goal is to separate a stable subject-level API contract from a replaceable engine.

Both the engine-neutral v1 API and an adapter for Qwen3-TTS CustomVoice now exist. That is more than the earlier contract-only state, but it is not yet a product-integrated speech service.

## The API should not need to know which model is behind it

The service contract uses neutral inputs:

- text,
- explicit language,
- optionally a neutral voice profile.

The HTTP contract does not contain model names, Qwen speaker IDs, sampling parameters, voice prompts or engine-specific options.

This is deliberate. If another TTS system later proves more suitable, the platform should not have to change model-specific details everywhere.

## Ephemeral jobs rather than unnoticed data collection

Speech synthesis can take longer than a normal HTTP request, so the v1 contract uses jobs: a request is accepted, its status can be polled, and completed WAV audio can be retrieved later.

The current design is deliberately **non-persistent**:

- input text remains in process only as long as necessary for processing,
- the job record does not permanently store the text,
- audio expires after a limited time,
- a restart discards jobs and results,
- responses and audio are marked not to be cached,
- error responses do not expose input text or engine exceptions.

Privacy by default is therefore already part of the service contract.

## Qwen3-TTS is the first engine, not the identity of the service

The current adapter targets **Qwen3-TTS-12Hz-0.6B-CustomVoice**.

The model source and revision are pinned. Model weights are not committed to Git, and service startup does not silently download them. A local cache is expected by default; network download must be explicitly enabled.

Speaker choices are also hidden behind neutral service-level voice profiles.

This makes it possible to reproduce which model revision produced a benchmark or result without hard-coding that model into the long-term API.

## What must not yet be presented as productive

The current state does **not** mean:

- TTS is already integrated into the platform,
- the service should be publicly exposed,
- productive authentication and authorisation exist,
- CUDA has been qualified on the actual project GPU,
- voice cloning or free-form voice design are in scope,
- the current engine has already won a quality comparison.

CUDA is technically configurable, but current documentation explicitly states that it has not yet been qualified on real GPU hardware for this work item.

## For STEM, "sounds natural" is not enough

A TTS system can sound pleasant and still be poor for technical learning content.

Quality planning therefore includes:

- German prose,
- English technical terms embedded in German,
- numbers and units,
- abbreviations,
- variable names,
- technically or mathematically prepared speech text,
- stability across longer segments,
- consistent voice and prosody,
- understandable error behaviour.

Later benchmarks should also record engine version, hardware context, input class, cold/warm run, synthesis time, audio duration, resource use and relevant inference parameters.

## Why the service matters to the wider architecture

TTS is a small but concrete test of a larger principle:

**The platform orchestrates user goals; specialised processing services sit behind stable contracts.**

If this works, future services for document analysis, diagram interpretation or output generation can follow the same modular pattern.

The present TTS state is therefore mainly an **architecture and quality building block**, not a finished product feature.
