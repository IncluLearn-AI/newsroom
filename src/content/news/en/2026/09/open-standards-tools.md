---
translationKey: prep-2026-09-open-standards-tools
locale: en
sourceLang: de
sourceVersionHash: "e2e0d31adf0493842fdce61745c9f7d64e14f67b"
translationStatus: machine
slug: which-open-standards-and-tools-matter-for-transfer
title: "Which open standards and tools are interesting for transfer"
summary: "IncluLearn.AI does not need to reinvent every target format and transformation. MathML, EPUB Accessibility, DAISY Pipeline, Pandoc and PlantUML illustrate different building blocks for open, interoperable and reusable workflows — without implying a final tool choice."
publishedAt: 2026-09-23T08:47:00+02:00
event:
  start: 2026-09-23
projectPhase: preparation
retroactive: false
category: tools-transfer
format: article
keyFindings:
  - "MathML addresses structured mathematics and is being further developed by W3C with an explicit accessibility focus."
  - "EPUB Accessibility 1.1 connects accessibility conformance with machine-readable discoverability of accessible properties."
  - "DAISY Pipeline demonstrates a production-oriented open-source model for standards-based transformations and a single-source master approach."
  - "Pandoc and PlantUML illustrate how textual sources can be transformed into multiple output formats or visual diagrams."
  - "These technologies are candidates and reference points; this post does not claim that they are already part of the productive IncluLearn.AI pipeline."
openQuestions:
  - "Which standards should IncluLearn.AI support at its public interfaces?"
  - "Where is an established exchange format sufficient, and where does the project need its own semantic intermediate layer?"
partnerQuestions:
  - "Which formats must enter or leave your existing production or LMS workflows?"
  - "Which open tools do you already use, and where are reliable interfaces currently missing?"
related:
  - prep-2026-09-service-priorities
  - prior-work-pattern-collection
  - prior-work-textual-representations
dossiers:
  - prep-2026-09
tags:
  - Open source
  - Standards
  - MathML
  - EPUB
  - DAISY
  - Pandoc
  - PlantUML
authors: []
evidence: editorial-analysis
sources:
  - title: "Math Working Group Charter 2026"
    url: "https://www.w3.org/Math/Documents/Charter2026.html"
    kind: standard-specification
  - title: "EPUB Accessibility 1.1"
    url: "https://www.w3.org/TR/epub-a11y-11/"
    kind: standard-specification
    published: 2024-10-17
  - title: "DAISY Pipeline"
    url: "https://daisy.org/activities/software/pipeline/"
    kind: vendor-project
  - title: "Pandoc User's Guide"
    url: "https://pandoc.org/MANUAL.html"
    kind: official-primary
  - title: "PlantUML"
    url: "https://plantuml.com/"
    kind: vendor-project
aiAssisted: true
featured: true
draft: true
---

## In brief

Transfer for IncluLearn.AI should not mean placing a finished research application next to existing systems and expecting other organisations to replace their complete workflows.

A more sustainable approach is to use **open standards at boundaries**, reuse established tools where they already solve a problem well, and concentrate project-specific development on the genuinely new task: reviewable semantics for complex STEM content.

Five examples show how different these building blocks can be.

## MathML: mathematics as structure rather than image

MathML encodes mathematical notation and structure in machine-readable form. The W3C Math Working Group charter that started in 2026 explicitly identifies improved accessibility as a goal.

Its planned work includes accessibility annotations and open-source example implementations for MathML-to-speech and MathML-to-braille.

For IncluLearn.AI, MathML is therefore an obvious reference point for **mathematical output and interoperability**. It does not automatically solve the upstream task of reconstructing mathematics correctly from arbitrary PDFs or images.

## EPUB Accessibility: making accessibility discoverable

EPUB Accessibility 1.1 has been a W3C Recommendation since October 2024. It defines requirements for evaluating the accessibility of EPUB publications as well as metadata for making accessible properties discoverable.

This matters for transfer because an accessible result must not only be generated; it also needs to be **described, checked and integrated into established publishing ecosystems**.

This does not yet decide whether EPUB itself will become a central IncluLearn.AI output format.

## DAISY Pipeline: transformation as a modular production process

DAISY Pipeline is an open-source framework for automated transformations between accessible digital formats. The DAISY Consortium explicitly describes a single-source master approach, reusable modules and integration through command-line and web APIs.

For IncluLearn.AI, the goal is not to rebuild such a pipeline. More useful are lessons from its production model:

- standards as stable boundaries,
- reusable transformation modules,
- automatable workflows,
- separation of processing from a particular user interface.

The novel IncluLearn.AI question sits upstream: how can complex visual STEM material first be turned into sufficiently reliable subject semantics?

## Pandoc: turn text-first sources into multiple formats

Pandoc converts between many markup and document formats, including Markdown, HTML, LaTeX and DOCX.

The project's own Pattern Collection uses Pandoc as an example of how a structured textual core can be transformed into a visually designed output.

For IncluLearn.AI, this illustrates an important distinction: **a renderer or converter does not also need to infer subject meaning.** Once semantics are correct and structured, established tools may handle parts of output generation.

## PlantUML: one model, several perceptual paths

PlantUML creates diagrams from a textual language. The project's teaching-related prior work has used this approach for UML class diagrams.

The useful part is not only the renderer but the shared source: one person can edit the textual structure with a screen reader or Braille display while another views the same source as a visual diagram.

This principle fits IncluLearn.AI's semantic-first goal closely.

## Architectural implication

These five examples solve different problems and should not be treated as interchangeable.

A plausible layering is:

1. **reconstruct and review subject semantics** — core IncluLearn.AI research,
2. **use open representations and standards** — for example MathML or structured web formats,
3. **reuse proven converters and renderers** — where they already work reliably,
4. **connect existing production systems** — rather than forcing parallel island workflows.

This keeps the semantic source as independent as possible from individual tools.

## No final tool selection yet

This post describes reference technologies and transfer options, not a decided product architecture.

Before integration, the project needs to examine accessibility in the actual clients, licensing, maintainability, format coverage, performance and fit with real partner workflows.

That is why early feedback matters: **Which formats and tools are actually part of everyday work in media centres, universities and learning platforms?**
