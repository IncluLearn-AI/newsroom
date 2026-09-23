---
translationKey: prep-2026-09-requirements
locale: en
sourceLang: de
sourceVersionHash: "b0388ed5f8e9b2c45dab94beafede4c8847c7dc9"
translationStatus: machine
slug: from-research-to-validated-requirements
title: "From research to validated requirements: how IncluLearn.AI works with hypotheses"
summary: "Public descriptions of media-centre workflows already provide concrete evidence about effort, bottlenecks and quality requirements. IncluLearn.AI nevertheless treats the resulting needs as hypotheses until they have been validated with practice partners and users."
publishedAt: 2026-09-22T17:05:00+02:00
updatedAt: 2026-09-23T07:50:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Public sources already reveal concrete bottlenecks, but they do not replace our own needs validation with media centres and users."
  - "Twelve needs hypotheses are linked to use cases and requirements and remain explicitly draft until validation."
  - "Traceability is intended to show which evidence led to which requirement, implementation and evaluation."
openQuestions:
  - "Which of the twelve needs hypotheses do media centres consider especially relevant, and which should be rejected or reprioritised?"
  - "Which differences emerge between school media centres, higher-education conversion services and teacher self-service?"
partnerQuestions:
  - "Which steps in your current conversion workflow actually consume the most time?"
  - "Which tasks would you like to automate, and which should in your view remain explicitly human?"
related:
  - prep-2026-09-media-centre-bottlenecks
  - prep-2026-09-needs-hypotheses
  - prep-2026-09-service-priorities
dossiers:
  - prep-2026-09
tags:
  - Requirements
  - Validation
  - Media centres
  - Traceability
authors: []
evidence: project-source
sources:
  - title: "Accessible educational media in focus – Landesmedienzentrum Baden-Württemberg"
    url: "https://www.lmz-bw.de/statische-newsroom-seiten/barrierefreie-bildungsmedien-im-blick"
    kind: official-primary
  - title: "Media centre – Johann-Peter-Schäfer-Schule Friedberg"
    url: "https://www.blindenschule-friedberg.de/JPSS-Blindenschule/bereiche/medienzentrum/medienzentrum"
    kind: official-primary
  - title: "Examinations – Mediablis Bayern"
    url: "https://mediablis-bayern.de/pruefungen/"
    kind: official-primary
aiAssisted: true
featured: false
draft: false
---

## In brief

The first IncluLearn.AI requirements analysis does not start with a feature list. It starts with observable workflows: How are textbooks, examinations, graphics and other materials adapted today? Where do time costs, duplicated work and particular quality risks occur?

Public sources already provide concrete signals. For us, however, these signals are the **starting point for hypotheses**, not a substitute for interviews, user tests and subject-matter validation.

## What the public research already shows

Several organisations describe substantial manual and subject-specific effort. Landesmedienzentrum Baden-Württemberg reports that its text service can require **20 minutes to one hour per textbook page**, depending on subject and material. The Friedberg media centre specifies **four to eight weeks of lead time** and describes additional bottlenecks during examination periods. Mediablis recommends registration for centrally set examinations **at least three months before the first examination date**.

These figures are not universal productivity measures for every organisation. They do show that accessible adaptation cannot be reduced to OCR or a single export step.

## From observations to needs hypotheses

The research has therefore been mapped into a traceable chain:

**Source/evidence → target group → need → use case → requirement → acceptance criterion → implementation → evaluation**

Twelve needs hypotheses are currently documented. They range from semantic document preparation and STEM-diagram understanding to expert review, multi-format output, reuse, examination workflows, provenance and individual output profiles.

The status matters: these needs have **not yet been validated through our own interviews**. A plausible inference from publicly documented processes is not yet a confirmed user requirement.

## How validation is planned

An interview guide has been prepared for discussions with media centres. It starts by asking openly about real workflows: What materials arrive? Where do media breaks occur? Which steps are particularly time-consuming? How is quality reviewed? Which errors would be especially problematic in STEM or examinations?

Only afterwards are concrete IncluLearn.AI ideas such as semantic pre-analysis, a diagram interpreter, expert review or version comparison introduced for assessment. This is intended to avoid presenting our own solution concept as if it were already a user need.

Requirements will also be linked to later acceptance criteria, implementation and evaluation. Early formative tests with blind and visually impaired learners are intended to reveal concrete barriers and preferences without prematurely generalising to the entire target population.

## Why this matters to the advisory board and practice partners

In requirements work, disagreement is valuable. If a hypothesis derived from public research does not hold in practice, that is not a failure of the analysis; it is an important result.

For media centres and other partners, this means that we do not merely want to ask whether a proposed feature sounds "interesting". The key questions are whether it fits real workflows, addresses relevant time or quality risks, and preserves human subject-matter judgement at the right points.

## Next step

The public research is therefore being unpacked into three deeper posts: observed bottlenecks, the twelve resulting needs hypotheses, and the first prioritisation of possible IncluLearn.AI services. These three levels — **finding, needs hypothesis and solution hypothesis** — should remain visibly separate throughout the project.
