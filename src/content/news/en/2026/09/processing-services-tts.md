---
translationKey: prep-2026-09-processing-tts
locale: en
sourceLang: de
sourceVersionHash: "a1ecd77e0e944fef84bfbcc2b464c8f44b990606"
translationStatus: machine
slug: service-architecture-and-first-tts-contract-prepared
title: "Service architecture and first TTS contract prepared"
summary: "An integration layer was created for independent processing services; the first TTS service already has an engine-neutral API contract but is not yet productively integrated."
publishedAt: 2026-09-22T17:08:00+02:00
event:
  start: 2026-09-22
projectPhase: preparation
retroactive: true
category: project-progress
format: article
dossiers:
  - prep-2026-09
tags:
  - Processing services
  - Text to speech
  - API
authors: []
evidence: project-source
sources: []
aiAssisted: true
featured: false
draft: false
---

## Modular processing services

A dedicated integration and organisational layer was prepared for later IncluLearn.AI processing steps. Individual services are intended to live in separate repositories with clear API and responsibility boundaries.

This separation is intended to avoid tightly coupling the web interface, host infrastructure and individual AI or media-processing services too early.

## First service: text to speech

A TTS service was prepared as the first independent service. It contains a Python 3.12 baseline and an engine-neutral FastAPI v1 contract with ephemeral jobs. The API is deliberately not tied to a specific language model or TTS engine.

Privacy by default is part of the service principles: input text and generated audio are not intended to be stored permanently or logged in full by default.

## What is not yet present

The service does **not** yet include a production TTS engine, a production Qwen3-TTS container or model weights. The cross-service integration layer also does not yet contain a productively integrated processing stack.

The preparation therefore defines interfaces and responsibility boundaries rather than claiming that TTS functionality is complete.
