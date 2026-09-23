---
translationKey: prep-2026-09-diagram-ai
locale: en
sourceLang: de
sourceVersionHash: "d7af61edb76c76471894b6f87c5187dea1fdbad1"
translationStatus: machine
slug: what-current-diagram-ai-can-do-and-where-it-still-fails
title: "What current diagram AI can already do — and where it still fails"
summary: "Recent VLM research shows progress on charts, UML and scientific diagrams. At the same time, many benchmarks measure question answering rather than complete reconstruction — a crucial distinction for accessible STEM representations."
publishedAt: 2026-09-23T08:12:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: research-radar
format: article
keyFindings:
  - "Chart research shows that converting a visual representation into structured data can be a powerful intermediate format."
  - "A 2026 UML preprint reports strong gains from domain-specific LoRA fine-tuning over general VLM baselines on its UML VQA benchmark."
  - "SciGram scales scientific-diagram instruction data substantially, but still mainly operates in a diagram-QA and multimodal-reasoning paradigm."
  - "For IncluLearn.AI, the central gap is that correct answers to questions do not guarantee complete, reviewable reconstruction of all relevant entities and relations."
openQuestions:
  - "Which diagram classes can already be reconstructed reliably with general VLMs plus structured schemas?"
  - "How large is the gap between VQA performance and complete entity/relation reconstruction?"
  - "Which negative cases and uncertainties need explicit training or rule-based validation?"
partnerQuestions:
  - "Which diagram errors would be most critical in your teaching or media-conversion workflow: missing objects, wrong relations, wrong values, or something else?"
related:
  - prep-2026-09-document-ai-semantics
  - prep-2026-09-research-evaluation
  - prep-2026-09-alt-text-not-enough
dossiers:
  - prep-2026-09
tags:
  - VLM
  - Diagrams
  - UML
  - Charts
  - Benchmarks
authors: []
evidence: editorial-analysis
sources:
  - title: "ChartQA: A Benchmark for Question Answering about Charts with Visual and Logical Reasoning"
    url: "https://aclanthology.org/2022.findings-acl.177/"
    kind: peer-reviewed
    doi: "10.18653/v1/2022.findings-acl.177"
  - title: "DePlot: One-shot visual language reasoning by plot-to-table translation"
    url: "https://aclanthology.org/2023.findings-acl.660/"
    kind: peer-reviewed
    doi: "10.18653/v1/2023.findings-acl.660"
  - title: "UniChart: A Universal Vision-language Pretrained Model for Chart Comprehension and Reasoning"
    url: "https://aclanthology.org/2023.emnlp-main.906/"
    kind: peer-reviewed
    doi: "10.18653/v1/2023.emnlp-main.906"
  - title: "Unlocking UML Class Diagram Understanding in Vision Language Models"
    url: "https://arxiv.org/abs/2605.11634"
    kind: preprint
  - title: "From Terminology to Diagrams: Visual-Instruction Generation for Scientific Diagram Understanding"
    url: "https://arxiv.org/abs/2609.00948"
    kind: preprint
aiAssisted: true
featured: true
draft: false
---

## In brief

Diagram AI is making visible progress. Chart research in particular shows that a model does not necessarily need to answer a question directly. It can first convert a visual chart into a structured form and then perform reasoning over that representation.

That principle is highly relevant to IncluLearn.AI. At the same time, one important problem remains: **A model can answer many questions correctly without having reconstructed the whole diagram completely and reliably.**

## Charts: structure before reasoning

ChartQA established a benchmark for visual and logical questions about charts. Later work goes a step further.

DePlot converts a plot into a linearised table before question answering. UniChart combines several tasks around chart structure, comprehension and reasoning.

For IncluLearn.AI, the important point is less the precise QA score than the architectural principle: **visual form is converted into structured data before further processing**.

That resembles the project's semantic-first approach.

## UML: domain specialisation can matter

A 2026 preprint by Naboichenko and Peinl introduces a specialised benchmark for UML class diagrams and about 16,000 image-question-answer training examples.

The authors report that LoRA-based fine-tuning on their UML task substantially outperforms general VLM baselines. For IncluLearn.AI, this is an important signal that technical diagrams may be specialised enough that general visual-language capability alone is insufficient.

The evidence status must remain clear: the work is currently available as a **preprint**, and its main focus is visual question answering.

## Scientific diagrams: large synthetic instruction datasets

Also in 2026, the SciGram preprint introduces more than 194,000 scientific diagrams and around 1.4 million synthetic visual instructions. The authors report improvements on diagram-centric benchmarks including TQA, ScienceQA and AI2D.

The scale of synthetic training data built from scientific terminology and web diagrams is particularly interesting.

For IncluLearn.AI, however, it remains open how well such methods transfer to technical artefacts such as UML, circuits or Karnaugh maps — and whether synthetic QA data promotes the kind of complete structure reconstruction we need.

## The central distinction: QA versus reconstruction

For accessibility, one correct answer can be too little.

Suppose a model correctly answers which class inherits from another. It may still miss a second inheritance relation, a cardinality or an attribute. The answer to the specific question would be correct, while the accessible representation would remain incomplete.

IncluLearn.AI therefore also needs metrics for:

- entities and attributes,
- relations and direction,
- numbers, units and symbols,
- negative cases,
- structure-relevant grouping,
- correctly recognised uncertainty or abstention.

## Where current diagram AI becomes especially interesting

The research points to three promising directions:

1. **structured intermediate representations** instead of free-form answers,
2. **domain-specific data and model adaptation** for difficult diagram classes,
3. **combined validation** using model output, schema/domain rules and human review.

These approaches are not mutually exclusive. A robust workflow will likely combine several of them.

## Consequence for IncluLearn.AI

The project should not ask only: "Which VLM understands diagrams best?"

The more important question is: **Which system design produces complete, reviewable semantics with an acceptable review effort — and reliably recognises when it does not know something?**
