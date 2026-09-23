---
translationKey: prep-2026-09
locale: en
sourceLang: de
sourceVersionHash: "a96eb6c5772a5fbac75e6d79c9c9835df23792d1"
translationStatus: machine
slug: preparation-phase-september-2026
title: "Preparation phase September 2026: Executive Summary"
summary: "Status 23 September: before the funded project starts, requirements, research questions, the vision prototype, governance and technical foundations were prepared. This dossier summarises the main findings, open hypotheses and next steps for the project team, advisory board and practice partners."
from: 2026-09-09
to: 2026-09-23
projectPhase: preparation
updatedAt: 2026-09-23T08:31:45+02:00
tags:
  - Preparation
  - Project setup
  - Executive Summary
featuredItems:
  - prep-2026-09-media-centre-bottlenecks
  - prep-2026-09-needs-hypotheses
  - prep-2026-09-service-priorities
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-research-evaluation
  - prep-2026-09-vision-prototype
aiAssisted: true
draft: false
---

## Executive Summary

The funded IncluLearn.AI project period starts on **1 October 2026**. Work up to and including 23 September is therefore not presented as early funded-project results. It is a **preparation phase** in which central assumptions, working methods and technical foundations were made concrete enough for the project not to start from zero.

Six points are particularly important for the project team and advisory board:

1. **The practical problem is larger than OCR.** Public descriptions of media-centre workflows show high manual effort, long lead times, subject-specific transformations and established reuse practices. Individual organisations report, for example, 20 minutes to one hour per textbook page, four to eight weeks of lead time, or at least three months of preparation for centrally set examinations. These figures are organisation-specific, but they reveal the scale and process complexity.

2. **The research produced twelve needs hypotheses — not yet validated requirements.** They include semantic preprocessing, STEM-diagram understanding, expert review, multi-format output, batch processing, reuse, edition comparison, examination workflows, standards, provenance, individual output profiles and inclusive collaboration.

3. **The subject core is treated as a semantic-first problem.** Complex STEM artefacts should not merely be described. Entities, relationships, values and subject structure need to be reconstructed. A reviewed semantic basis could then support several representations, such as structured text, mathematical formats, audio or tactile output.

4. **Current AI benchmarks answer only part of the quality question.** Strong visual-question-answering performance does not automatically mean complete and correct reconstruction. IncluLearn.AI therefore plans to separate technical structure metrics, critical error classes, subject equivalence, accessibility, review effort and later user performance. Fine-tuning remains an option, but not the automatic first step.

5. **The vision prototype is a product and UX hypothesis, not a finished platform.** It already demonstrates a user-goal-oriented, accessibility-first DE/EN interface for materials, review and approval. The visible content, however, is synthetic demo data; productive persistence, authentication and the complete processing architecture are not yet integrated.

6. **Governance and technical architecture are intended to keep human responsibility visible.** AI may prepare content but may not classify its own output as verified or approved. Technical services are designed as modular components behind stable contracts; TTS is the first concrete processing service. Demo operation and later production operation are deliberately separated.

## What was prepared in September

### Project and working structure

Separate paths were prepared for tasks, authoritative decisions, subject documentation, open exchange and public communication. The central idea is that discussion should remain low-threshold, while actionable outcomes must subsequently move into a traceable subject source.

The newsroom follows the same principle: internal activity is not automatically published as progress. Posts are expected to explain concrete results, evidence, uncertainty and open questions.

### Needs and requirements analysis

Public research on media centres and conversion services was transformed from a collection of observations into a traceable chain:

**source/evidence → target group → need → use case → requirement → acceptance criterion → implementation → evaluation**

The twelve needs hypotheses and the resulting service prioritisation are a basis for discussion and planning. They still need to be tested, changed or rejected with media centres, teachers, blind and visually impaired learners, and other practice partners.

### Research and evaluation strategy

The research state was structured so that different evidence types remain visible: peer review, preprints, standards, project information and prior work are not treated as equivalent.

A multi-level view was also prepared for technical evaluation: syntactic correctness, semantic reconstruction, subject equivalence, accessibility/usability and actual task performance are different quality dimensions.

### Vision prototype and platform architecture

The public vision prototype already provides a shared object for discussing navigation, terminology, status models, review and accessibility.

In parallel, the target architecture has been prepared so that the web platform, host infrastructure and specialised processing services have separate responsibilities. Models and engines should remain replaceable as long as their subject-level contracts stay stable.

### Governance and quality assurance

AI involvement and human review status are treated as separate dimensions. Plausibility checking, verification and approval have different purposes and levels of scrutiny.

Personal accessibility and output preferences are not modelled as permission roles or automatically as medical diagnoses. Data classification and provenance should later help determine suitable processing paths and review requirements.

### Transfer and open interoperability

MathML, EPUB Accessibility, DAISY Pipeline, Pandoc and PlantUML have been examined as initial reference points for open standards and tools. **No final tool selection has been made.**

The central transfer question is instead: which existing formats, tools and production systems can connect to a reviewed semantic intermediate layer without creating parallel island workflows?

## What we have already learned

The preparation phase has produced a clearer view of the actual problem:

- Professional accessible-media production is a **production and quality process**, not a single conversion step.
- **Alt text alone is insufficient for many STEM artefacts** because relationships, values, spatial or logical structures and task context need to be preserved.
- **Reuse, version comparison and provenance** are subject-relevant functions rather than mere technical conveniences.
- **Human review needs deliberate support.** The value of AI depends not only on automatic accuracy but also on how efficiently specialists can detect uncertainty, correct it and approve results.
- **User quality and technical model quality are not the same.** A correct data structure is not automatically understandable, efficiently navigable or didactically appropriate.
- **Modularity is both a research and transfer factor.** Models, TTS engines and analysis components should remain replaceable while semantics, evaluation data and interfaces become more stable.

## What has not yet been validated

Several important points deliberately remain open:

- The twelve needs hypotheses have **not yet been confirmed through our own interviews or systematic user tests**.
- The P1/P2/P3 prioritisation of possible services is a **solution hypothesis**, not an approved product roadmap.
- The vision prototype demonstrates a plausible workflow but not yet productive end-to-end operation with real user data.
- The first TTS service has become technically more concrete but is not yet product-integrated or fully qualified on the actual target hardware.
- Current VLM and diagram benchmarks still need to be tested for how well they correspond to complete structure reconstruction and actual accessibility.
- It remains open which representation works best for which STEM artefact class and learning task.

These uncertainties are not shortcomings of the preparation phase. They identify the questions that the funded project is intended to investigate systematically.

## What starts only on 1 October

The **funded project period** starts on 1 October. Only then do the prepared hypotheses, artefacts and technical foundations continue as regular project work.

Immediate next tasks include:

- validating needs and workflows with practice partners and target groups,
- building a suitable corpus and reference data for STEM artefacts,
- refining requirements and acceptance criteria from this evidence,
- evaluating baselines for document and diagram understanding under comparable conditions,
- connecting the vision prototype step by step to real backend and processing components,
- testing evaluation and review processes for accessibility and subject correctness.

The preparation phase should **not later be relabelled as already achieved funded-project results**. It is the baseline against which later progress and course corrections can be traced.

## What we particularly need from the advisory board now

Feedback is especially valuable where internal project assumptions meet real practice: actual bottlenecks in media production, prioritisation of the twelve needs hypotheses, critical error types, necessary human-review steps, existing formats and interfaces, and the comprehensibility of the vision prototype.

The newsroom also collects such questions on the **“Advisory board & partners”** page and links each one back to its subject context.
