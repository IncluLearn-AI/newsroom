---
translationKey: prep-2026-09-alt-text-not-enough
locale: en
sourceLang: de
sourceVersionHash: "ea625c41fada01f4e6c1d3c342f06a8285f08e12"
translationStatus: machine
slug: why-alt-text-is-not-enough-for-stem
title: "Why alt text is not enough for STEM"
summary: "Technical diagrams, mathematics, circuits and quantitative graphics carry structure and relationships that often cannot be represented meaningfully in one short image description. IncluLearn.AI therefore considers structured, textual, tactile and auditory representations."
publishedAt: 2026-09-23T08:11:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-16
projectPhase: preparation
retroactive: true
category: research-radar
format: article
keyFindings:
  - "UML, circuits, Karnaugh maps, mathematics and plots carry subject structure that goes beyond a generic image description."
  - "Our prior work shows that textual diagram models such as PlantUML, netlists or structured tables can support shared work between blind and sighted learners."
  - "Not every content type needs the same modality: tactile/haptic representations and sonification address different tasks from structured text."
  - "A shared reviewed semantic basis can support several representations instead of interpreting the same content independently for every output form."
openQuestions:
  - "Which representation works best for which artefact class and learning task?"
  - "How much semantic structure must be modelled explicitly for several output forms to remain consistent?"
partnerQuestions:
  - "For which STEM artefacts do today's alt texts or linear descriptions fail most often in your practice?"
  - "Which combination of text, tactile representation and audio is especially useful for your users?"
related:
  - prep-2026-09-document-ai-semantics
  - prep-2026-09-diagram-ai
  - prep-2026-09-research-evaluation
dossiers:
  - prep-2026-09
tags:
  - STEM
  - Accessibility
  - Diagrams
  - MathML
  - Tactile graphics
  - Sonification
authors: []
evidence: editorial-analysis
sources:
  - title: "A Pattern Collection for Generating Accessible Teaching Materials for Blind and Visually Impaired Students in Computer Science and Electrical Engineering"
    url: "https://doi.org/10.1007/978-3-032-19157-1_12"
    kind: peer-reviewed
    doi: "10.1007/978-3-032-19157-1_12"
  - title: "Accessible Representations of Visual Artifacts in Technical Informatics Education"
    url: "https://personales.upv.es/thinkmind/SMART_ACCESSIBILITY/SMART_ACCESSIBILITY_2025/smart_accessibility_2025_1_10_88001.html"
    kind: peer-reviewed
  - title: "Math Working Group Charter 2026"
    url: "https://www.w3.org/Math/Documents/Charter2026.html"
    kind: standard-specification
aiAssisted: true
featured: true
draft: false
---

## In brief

For STEM learning materials, the central question is rarely only: **"What is shown in the image?"** Often we need to know which objects exist, how they relate, which values and units matter, which structure carries the subject meaning, and how that structure can be made accessible in a form that fits the learning task.

That is why one short alt text is often insufficient for complex technical artefacts.

## Technical diagrams are structured subject models

A UML class diagram is not simply boxes and lines. It represents classes, attributes, methods and typed relationships. A circuit schematic represents components, nodes and electrical connections. A Karnaugh map encodes Boolean structure through a spatial arrangement.

Our 2025 paper on visual artefacts in technical informatics therefore presents textual representations such as PlantUML, netlists and structured Markdown forms as alternatives that make subject relationships explicit and can support shared work.

The key idea is not to "turn everything into text", but to **represent subject structure so that it is not available visually only**.

## Different tasks require different representations

The 2026 pattern collection brings together five recurring approaches for accessible STEM education:

- transformable text-first core content,
- textually modelled diagrams,
- tactile and haptic workflows,
- sonification of quantitative data,
- human-in-the-loop explanations.

These patterns are complementary. They address different types of information.

A time series may be well suited to sonification. A spatial model may work better tactually. A UML model can be represented very precisely in a textual DSL. A complex figure may additionally need spoken orientation.

## Mathematics shows why structure matters

Mathematical content is also more than a visual sequence of symbols. MathML provides structured encoding for mathematical notation. The W3C Math Working Group charter launched in 2026 explicitly includes accessibility goals, work on accessibility annotations, and example open-source implementations for MathML-to-speech and MathML-to-braille.

For IncluLearn.AI, two tasks therefore need to be separated:

1. recognise and reconstruct mathematical content correctly,
2. make that structure usable through screen readers, Braille and other access modes.

## From replacement descriptions to a shared semantic basis

The more interesting long-term approach is not to generate each target modality independently.

Instead, IncluLearn.AI is exploring whether an artefact can first be converted into a **reviewed semantic intermediate representation**. Several representations could then be derived from it — structured text, mathematical formats, audio, tactile templates or a visual form.

This could offer two advantages:

- subject interpretation would not need to be repeated completely for every modality,
- inconsistencies between different output forms could be detected more easily.

## Accessibility becomes a subject-design question

Alt text remains important for many web contexts. For complex STEM artefacts, however, it is often only one part of a larger solution space.

IncluLearn.AI therefore does not assume one universal "best format". The central question is: **Which semantic information must be preserved, and which representation best supports the concrete learning task?**
