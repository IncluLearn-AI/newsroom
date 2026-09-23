---
translationKey: prep-2026-09-service-priorities
locale: en
sourceLang: de
sourceVersionHash: "9742aac03e61197d601135746006e06a5d4a4fe7"
translationStatus: machine
slug: which-services-could-emerge-from-the-research
title: "Which IncluLearn.AI services could emerge from the research"
summary: "From the needs hypotheses, we derived a first solution hypothesis: five core components with high strategic value, five subsequent production and integration services, and three specialised later options."
publishedAt: 2026-09-23T07:47:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-16
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "P1 is not a one-click generator but a chain of semantic preprocessing, STEM interpretation, expert review, multi-format output and quality checking."
  - "P2 addresses professional production: batch processing, semantic diff, reuse, output profiles and API/LMS integration."
  - "P3 contains specialised options such as a secure examination mode, tactile layout optimisation and interactive semantic exploration."
  - "The entire prioritisation is a solution hypothesis and has not yet been validated with media centres."
openQuestions:
  - "Which P1 components provide the greatest practical value per unit of saved expert time?"
  - "Should a secure examination mode be implemented productively in the current project or first prepared as an architecture and requirements concept?"
partnerQuestions:
  - "Which three services would you want to test first in an early prototype?"
  - "Which interfaces, catalogues or existing production systems would need to be considered for a realistic pilot?"
related:
  - prep-2026-09-media-centre-bottlenecks
  - prep-2026-09-needs-hypotheses
  - prep-2026-09-requirements
dossiers:
  - prep-2026-09
tags:
  - Services
  - Prioritisation
  - Semantic first
  - Expert review
  - Multi-format
authors: []
evidence: editorial-analysis
sources:
  - title: "Accessible educational media in focus – Landesmedienzentrum Baden-Württemberg"
    url: "https://www.lmz-bw.de/statische-newsroom-seiten/barrierefreie-bildungsmedien-im-blick"
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

The research suggests that a useful IncluLearn.AI workflow for professional accessible-media production will not consist of a single AI model. It needs several clearly separated components: machine preprocessing, domain-specific semantics, expert review, output generation and quality control.

From this, we derived an initial prioritisation of possible services. This is **not yet a product roadmap**. It is a solution hypothesis to be validated with media centres and other partners.

## P1: five core components with high strategic value

### 1. Semantic preprocessing of complete documents

PDF, Office, scan or image material should not simply pass through OCR. The goal would be a reviewable working state containing document structure, reading order, tables, formulae, figures, task relationships and metadata.

The expected value is to reduce frequently repeated mechanical preparation.

### 2. STEM graphics and diagram interpreter

For selected diagram classes, subject structure should become explicit: for example classes and relationships in UML, components and nodes in circuits, or axes, data and trends in plots.

This component matters because it distinguishes IncluLearn.AI from generic OCR or generic image description.

### 3. Expert review cockpit

Specialists should be able to inspect the original, extracted semantics, generated representations, uncertainty, corrections and approval status together.

The guiding idea is that "one click" may apply to **machine preprocessing**, but subject approval remains human-in-the-loop.

### 4. Multi-format compiler

Several representations could be generated from one reviewed semantic source: structured text, HTML, mathematical representations, audio or sonification, tactile templates, or visual versions.

This would avoid repeating the same subject review independently for every output format.

### 5. Quality and consistency checking

Automated checks could flag missing elements, contradictions, unresolved uncertainty or inconsistencies between representations. They do not replace subject approval, but may help focus it.

## P2: production and integration services after a stable core

Five additional services address professional operation:

- **batch and job processing** for large material packages,
- **semantic diff** for targeted comparison of new editions,
- **reuse and catalogue services** for existing conversions,
- **user and output profiles** for notation, level of detail and assistive-technology context,
- **API and LMS integration** for institutional workflows.

Reuse and version comparison follow directly from current practice: organisations already search for existing conversions, and catalogues such as Sehkon are intended to reduce duplicated production.

## P3: specialised or later services

Three options are attractive but bring additional complexity:

- a **particularly protected examination mode**,
- **semantics-based tactile layout optimisation**,
- **interactive semantic exploration** of complex learning objects.

These services may offer substantial long-term value but should not delay the establishment of a robust semantic core.

## How priority should later be evaluated

The central question is not only whether outputs "look good". We need to know whether specialists can work more productively while maintaining or improving quality.

Possible measures include:

- processing time per page, graphic or task,
- proportion of automatically accepted elements,
- number of required corrections,
- subject error rate,
- time to approval,
- reuse rate,
- specialist satisfaction,
- comprehensibility for blind and visually impaired learners.

The core research question is therefore not simply: **Can AI convert a document?** It is: **Can semantic AI preprocessing measurably reduce the effort of professional accessible-media production without degrading correctness, didactic equivalence or accessibility?**

## What we need from practice partners

The prioritisation is intentionally open to correction. Particularly useful feedback would be which P1 components would genuinely save time, where current tools are already sufficient, and which conditions an early prototype would need to satisfy before it could be tested in a realistic production workflow.
