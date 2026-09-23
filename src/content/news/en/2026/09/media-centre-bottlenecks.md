---
translationKey: prep-2026-09-media-centre-bottlenecks
locale: en
sourceLang: de
sourceVersionHash: "e5540b1f2058bd2bc7418370f6f7f6d2456e4f14"
translationStatus: machine
slug: what-slows-media-centres-down
title: "What slows media centres down: five findings from public research"
summary: "Public workflow descriptions point to high manual effort, long lead times, subject-specific transformation, established reuse practices and special examination requirements. For IncluLearn.AI, these are concrete signals of where semantic AI support may be useful."
publishedAt: 2026-09-23T07:45:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-16
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Landesmedienzentrum Baden-Württemberg reports 20 minutes to one hour of work per textbook page in its text service, depending on subject and material."
  - "Friedberg specifies four to eight weeks of lead time; Mediablis recommends at least three months for centrally set examinations."
  - "The work goes far beyond OCR and includes structure, mathematics, graphics, tactile media, standards, didactic adaptation and quality review."
  - "Reuse is already a dedicated process: existing or planned conversions are searched to reduce duplicated work."
  - "Examinations combine time pressure with particularly high requirements for confidentiality, subject equivalence and human approval."
openQuestions:
  - "Which workflow step actually consumes the most staff time across different media centres?"
  - "How do bottlenecks differ between ongoing teaching, complete textbooks and centrally set examinations?"
partnerQuestions:
  - "Which of these five observations best matches your daily work, and what is missing?"
  - "Where does duplicated work occur today even though converted content or preparatory work already exists?"
related:
  - prep-2026-09-needs-hypotheses
  - prep-2026-09-service-priorities
  - prep-2026-09-requirements
dossiers:
  - prep-2026-09
tags:
  - Media centres
  - Workload
  - Examinations
  - Reuse
  - STEM
authors: []
evidence: editorial-analysis
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
  - title: "Standards – Mediablis Bayern"
    url: "https://mediablis-bayern.de/standards/"
    kind: official-primary
  - title: "Media Centre of Carl-Strehl-Schule – blista"
    url: "https://www.blista.de/carl-strehl-schule/medienzentrum"
    kind: official-primary
  - title: "The media centre at LBZB Hannover"
    url: "https://www.lbzb.niedersachsen.de/startseite/medienzentrale/medienzentrale_im_lbzb_hannover/die-medienzentrale-des-lbzb-hannover-stellt-sich-vor-153706.html"
    kind: official-primary
  - title: "Sehkon – catalogue of accessible literature"
    url: "https://ub.tu-dortmund.de/services-information/service-fuer-blinde-und-sehbehinderte/sehkon/"
    kind: official-primary
aiAssisted: true
featured: true
draft: false
---

## In brief

Our research into German media centres and conversion services reveals a recurring pattern: bottlenecks do not primarily arise from extracting text. They arise where **subject structure, multiple target media, quality review and limited time** meet.

This matters to IncluLearn.AI because these are precisely the points where a semantic-first approach may help, provided that it reduces preparatory work without displacing subject-matter review.

## Finding 1: Manual conversion can require substantial effort per page

Landesmedienzentrum Baden-Württemberg describes its text service as a labour-intensive process and reports **20 minutes to one hour per textbook page**, depending on subject and material.

This is a strong indication that a PDF with recognised text is not yet accessible learning material. Reading order, headings, formulae, figures and subject relationships still need meaningful structure.

For IncluLearn.AI, this leads to a concrete research question: **How much of this structural and semantic preparation can be machine-assisted without weakening subject review?**

## Finding 2: Lead times reveal real capacity constraints

The media centre at Johann-Peter-Schäfer-Schule in Friedberg specifies **four to eight weeks of lead time**. It also reports additional constraints during examination periods, strongly increased demand with stable staffing, and textbooks that may be converted section by section.

Mediablis Bayern recommends registration for centrally set examinations **at least three months before the first examination date**.

These figures are institution-specific and must not be read as averages across all media centres. They do show that throughput, prioritisation and predictable preprocessing are practically relevant issues.

## Finding 3: Accessible media production is a subject transformation

The organisations we reviewed produce a wide range of target media: Braille, accessible e-books, large print, tactile graphics, swell paper, thermoform models, 3D models and in some cases audio or DAISY formats.

Mediablis also publishes binding conversion standards for Braille, e-books, mathematics, physics and chemistry. Blista describes developing models and teaching materials in cooperation with subject teachers and improving them based on learner feedback.

This makes the difference to generic image description clear: the task is to **capture subject meaning so that suitable and consistent representations can be produced from it**.

## Finding 4: Reuse is already part of the workflow

LBZB Hannover describes checking its own holdings and then searching across the German-speaking region before a new conversion is started. If another media centre already has suitable data, this work can be reused.

Sehkon likewise records existing and planned accessible conversions. TU Dortmund reports more than 14,000 records and explicitly describes avoiding expensive duplicated production as one of its purposes.

For IncluLearn.AI, this is an important signal: a future system should not only support better new conversions, but also **recognise, reference and — where legally and technically possible — reuse existing work**.

## Finding 5: Examinations form a distinct use case

For examinations, speed is not enough. Adaptations must remain subject-equivalent, avoid disclosing answers, and be produced through controlled processes.

Mediablis refers to binding standards and long lead times for centrally set examinations. Friedberg describes examination periods as a prioritised production phase.

For IncluLearn.AI, this means examinations are not simply another upload workflow. They combine **confidentiality, auditability, controlled approval and particularly strict human-in-the-loop review**.

## What we cannot conclude yet

Public research shows real processes at specific organisations. It does not yet establish which bottlenecks are most important across Germany or which forms of automation media centres would actually accept.

We therefore treat these findings as **evidence for the next questions**, not as a finished requirements list. These points now need to be tested with media centres, conversion services and other partners.
