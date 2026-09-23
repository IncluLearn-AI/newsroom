---
translationKey: prior-work-pattern-collection
locale: en
sourceLang: de
sourceVersionHash: "35701e0395f31ca0a0f128013c7e050c6a533cb3"
translationStatus: machine
slug: five-design-patterns-for-accessible-stem-learning-materials
title: "Five design patterns for accessible STEM learning materials"
summary: "The Pattern Collection published in 2026 by Diethelm Bienhaus and Michael Kreutzer turns practical teaching experience into five reusable patterns — from text-first core content and diagrams to tactile output, sonification and human-in-the-loop explanations."
publishedAt: 2026-09-23T08:31:00+02:00
event:
  start: 2026-05-01
projectPhase: prior-work
retroactive: true
category: publications-events
format: article
keyFindings:
  - "The Pattern Collection translates several years of practical teaching with blind students into five reusable solution patterns rather than one specialised tool."
  - "A shared principle is to separate subject-matter core content from its concrete visual, textual, tactile or auditory representation."
  - "Textually modelled diagrams, tactile/haptic workflows, sonification and AI-assisted explanations are treated as complementary approaches."
  - "The work is open access and forms a direct subject-matter foundation for IncluLearn.AI's semantic-first approach."
openQuestions:
  - "Which of the five patterns can be automated particularly well through a shared semantic intermediate representation?"
  - "Which patterns will continue to require predominantly human or craft-based work?"
partnerQuestions:
  - "Which of these five solution directions best matches the current workflows in your organisation?"
  - "Where do you see the greatest opportunity for automation without losing subject or didactic quality?"
related:
  - prior-work-textual-representations
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-service-priorities
dossiers: []
tags:
  - Publication
  - Design patterns
  - STEM
  - Text-first
  - Tactile graphics
  - Sonification
authors:
  - Diethelm Bienhaus
  - Michael Kreutzer
evidence: peer-reviewed
sources:
  - title: "A Pattern Collection for Generating Accessible Teaching Materials for Blind and Visually Impaired Students in Computer Science and Electrical Engineering"
    url: "https://doi.org/10.1007/978-3-032-19157-1_12"
    kind: peer-reviewed
    published: 2026-05-01
    doi: "10.1007/978-3-032-19157-1_12"
aiAssisted: true
featured: true
draft: false
---

## What the publication is about

STEM teaching uses diagrams, circuits, Karnaugh maps, time series and other visual representations as carriers of subject structure, not as decoration. For blind and visually impaired learners, adding one short description to an existing visual artefact is therefore often insufficient.

The Pattern Collection captures practical solutions as **five design patterns**. This turns individual teaching techniques into a transferable repertoire that educators and technical systems can apply to different kinds of material.

The contribution originated in the EuroPLoP 2025 context and was published as an open-access LNCS chapter on 1 May 2026.

## Pattern 1: Core of Content

The first pattern starts with the source material. Subject-matter core content should be separated from one particular visual layout and maintained in a transformable textual form where possible.

Markdown is one example: the same structured core can be directly usable with screen readers and Braille while also being rendered into visually designed outputs with tools such as Pandoc.

For IncluLearn.AI, this contains a central idea: **not every output format should maintain its own independent truth.**

## Pattern 2: Accessibility of Diagrams

Formally defined diagrams often already have an underlying structure. UML class diagrams or electronic circuits, for example, can be expressed in textual model or netlist formats.

The publication therefore proposes treating these textual representations not only as technical exchange formats but also as accessibility tools.

This directly informs the question of which semantic structures IncluLearn.AI would need to reconstruct from a visual diagram.

## Pattern 3: Accessibility of Graphics

Not every graphic follows a formal specification. For free-form drawings, spatial structures or complex illustrations, tactile and haptic representations may be more suitable.

The pattern therefore makes an important boundary visible: **text is not automatically the best accessible representation for every type of information.**

## Pattern 4: Sonification of Time Series

Quantitative trends can additionally be made accessible through sound. Sonification maps data properties to acoustic parameters so that trends or changes in time series can be perceived auditorily.

For IncluLearn.AI, the important point is that one reviewed data structure can support several representations: a visual chart, structured table, spoken explanation or sonification.

## Pattern 5: Graphics with Generated Explanation

Generated explanations can support access to unstructured graphics. The publication explicitly places them in a **human-in-the-loop** context: generative AI may prepare suggestions, while subject plausibility and equivalence must remain reviewable.

This idea is reflected today in IncluLearn.AI's governance and review architecture.

## What IncluLearn.AI takes from this — and what does not automatically follow

The publication is prior work, not an already validated blueprint for the new system.

IncluLearn.AI adopts three ideas in particular:

- a transformable core instead of isolated output formats,
- different modalities for different kinds of information,
- human review at subject-critical points.

What remains open is how far current AI methods can automate these patterns, which semantic intermediate representation is required, and how generated outputs can be evaluated reliably with blind and visually impaired learners.
