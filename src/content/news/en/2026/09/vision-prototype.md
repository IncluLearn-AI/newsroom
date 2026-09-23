---
translationKey: prep-2026-09-vision-prototype
locale: en
sourceLang: de
sourceVersionHash: "5652db430eefbb0535652827db4f693cfbc3eae1"
translationStatus: machine
slug: vision-prototype-and-accessible-de-en-demo-expanded
title: "What the IncluLearn.AI vision prototype actually shows today"
summary: "The public prototype is not the finished AI pipeline. It is an early working model for materials, review, release and accessible use. The important foundations are user goals, accessibility-first design, DE/EN and a clear distinction between demo and real functionality."
publishedAt: 2026-09-22T17:07:00+02:00
updatedAt: 2026-09-23T08:30:00+02:00
event:
  start: 2026-09-17
  end: 2026-09-22
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "The interface is organised around user goals such as working on material, reviewing, sharing and finding content, not around OCR, VLM or model names."
  - "Accessibility and DE/EN are technical foundations: semantic HTML, keyboard use, visible focus, reflow and localised UI text are designed in from the beginning."
  - "The current public version uses synthetic demo data; productive processing, real persistence, authentication and the planned backend/worker architecture are not yet connected."
  - "The prototype is evolutionary: navigation, domain language and UI components should carry forward into the later platform if validation supports them."
openQuestions:
  - "Do media-centre staff, teachers and learners understand the terminology and next steps without technical background knowledge?"
  - "Which parts of today's demo workflow should be simplified or changed before backend integration?"
partnerQuestions:
  - "Which information must be immediately visible on a material page so that you know what has been reviewed and what should happen next?"
  - "Which terms from your daily work should we use, and which currently feel too technical?"
related:
  - prep-2026-09-ai-governance
  - prep-2026-09-infrastructure
  - prep-2026-09-processing-tts
dossiers:
  - prep-2026-09
tags:
  - Vision prototype
  - Accessibility
  - Internationalisation
  - UX
  - Human review
authors: []
evidence: project-source
sources:
  - title: "IncluLearn.AI Vision Prototype"
    url: "https://inclulearn-test.owli-ai.com/"
    kind: official-primary
aiAssisted: true
featured: true
draft: false
---

## In brief

The vision prototype is intended to show early **how IncluLearn.AI might feel to people** before the full AI and data infrastructure is connected.

It is neither a static mock-up collection nor the finished product. The interface is being built as an evolutionary foundation: navigation, terminology, accessibility building blocks, the DE/EN structure and reusable components should be retained where validation shows that they work.

At the same time, the boundary is explicit: the currently visible materials, jobs, users and subject results are demo data. The prototype must not be read as if the full processing chain were already productive.

## Not "which AI model?", but "what do I want to do with my material?"

A central product decision is to keep technical pipeline language out of the primary navigation.

Users should not need to choose between OCR, VLMs, embeddings, sonification or individual model names. The interface should focus on tasks such as:

- opening and continuing work on materials,
- reviewing subject results,
- making reviewed versions available,
- finding shared content,
- later generating suitable outputs.

Technical detail may be important for specialists, but it should be progressively disclosed rather than become an entry requirement.

## Three status dimensions should remain separate

The UX concept distinguishes three important states:

1. **processing** – has the material been technically processed?
2. **subject review** – has the recognised meaning actually been checked?
3. **access/provision** – who may see or use which version?

These should not collapse into one green "done" state.

An automatically generated result can be technically complete while still being unreviewed. A subject-approved version is not automatically published or available to everyone.

This distinction directly connects the platform to the project's AI governance.

## Accessibility is not a later retrofit

Accessibility is treated as a technical baseline for the web prototype. This includes:

- semantic HTML before additional ARIA,
- complete keyboard operability,
- visible, unobscured focus,
- status information that does not rely on colour alone,
- reflow and zoom without loss of core functionality,
- reduced motion,
- clear and localised system terminology.

German is the reference language, while English is structurally maintained in core views.

## A synthetic workflow instead of isolated screens

The demo now connects several views into one example flow. A concrete semantic demo slice shows how recognised structure could later become reviewable.

The wording "could" matters: the visible workflow is a **product and UX hypothesis** that enables feedback. It is not a claim that the entire subject-processing pipeline is already implemented.

The underlying UX concept goes further, describing a guided "prepare material" flow, clear next steps, review tasks and a material page as the stable point of return. Parts of that remain target design rather than implemented functionality.

## What is not yet productive

The platform documentation explicitly lists several components as **planned**:

- FastAPI backend,
- asynchronous worker,
- PostgreSQL and object storage,
- productive authentik/OIDC integration,
- versioned semantic schemas,
- productive processing-service orchestration.

The current web application also still consumes demo fixtures more directly than planned for the later product platform.

## Why this matters to the advisory board and partners

Because backend functionality is not yet fixed, navigation, terminology and workflow can still be changed relatively cheaply.

Useful feedback is therefore not only whether the demo "looks good", but questions such as:

- Is it always clear what has already been reviewed?
- Is the next useful step understandable?
- Does the interface assume unnecessary technical knowledge?
- Can review be performed fully non-visually?
- Are sharing, subject approval and publication clearly separated?

Such feedback can still shape the platform before backend and production data models make changes more expensive.
