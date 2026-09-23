---
translationKey: prep-2026-09-research-evaluation
locale: en
sourceLang: de
sourceVersionHash: "540978563979cef10b876353dd1566f3a218ea3f"
translationStatus: machine
slug: how-we-compare-models-before-deciding-on-fine-tuning
title: "How we compare models before deciding on fine-tuning"
summary: "IncluLearn.AI does not want to reduce model quality to a single benchmark. Reference data, preprocessing, structured output, rules and review paths should first be compared under the same conditions; fine-tuning remains a targeted option for clearly identified error classes."
publishedAt: 2026-09-22T17:06:00+02:00
updatedAt: 2026-09-23T08:10:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: research-radar
format: article
keyFindings:
  - "A single F1 or VQA score is insufficient for IncluLearn.AI: syntax, semantics, subject equivalence, accessibility and task performance must be considered separately."
  - "Before fine-tuning, baseline, preprocessing, structured output, domain-specific rules and the review path should be compared under the same conditions."
  - "Reference data are split by source groups so that variants of the same source do not leak across development and test sets."
  - "Fine-tuning remains explicitly possible, but should address a concrete recurring error class or research question rather than become an end in itself."
openQuestions:
  - "Which artefact classes require early domain-specific model adaptation, and where are structured prompts, parsers and validation rules sufficient?"
  - "How strongly do technical structure metrics later correlate with actual comprehension and task performance for blind and visually impaired learners?"
partnerQuestions:
  - "Which error classes would be so critical in your practice that a technically strong average score would still be unacceptable?"
related:
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-diagram-ai
  - prep-2026-09-document-ai-semantics
dossiers:
  - prep-2026-09
tags:
  - Evaluation
  - AI strategy
  - Fine-tuning
  - Benchmarks
  - Human review
authors: []
evidence: project-source
sources:
  - title: "ChartQA: A Benchmark for Question Answering about Charts with Visual and Logical Reasoning"
    url: "https://aclanthology.org/2022.findings-acl.177/"
    kind: peer-reviewed
    doi: "10.18653/v1/2022.findings-acl.177"
  - title: "Unlocking UML Class Diagram Understanding in Vision Language Models"
    url: "https://arxiv.org/abs/2605.11634"
    kind: preprint
aiAssisted: true
featured: true
draft: false
---

## In brief

For IncluLearn.AI, the question is not simply: **Which model achieves the highest score?** What matters is whether a method reconstructs relevant subject structure reliably, exposes uncertainty, can be reviewed efficiently, and ultimately supports useful accessible representations.

We therefore plan a multi-level evaluation and a deliberately restrained training strategy: first compare **where** improvements come from. Fine-tuning can then be used as a targeted method rather than as the default first step.

## Why classic benchmarks answer only part of the question

Benchmarks such as ChartQA measure how well models answer questions about charts. Such tests are valuable for visual and logical reasoning. For accessible reconstruction, however, correct question answering is not necessarily enough.

A model may answer many questions correctly while still missing a relation, unit or label that matters for a complete accessible representation.

IncluLearn.AI therefore separates five levels:

1. **syntactic correctness** – can the generated structure be parsed and validated?
2. **structural/semantic correctness** – are entities, relations, values and relevant ordering correct?
3. **subject equivalence** – does the representation carry the same subject content?
4. **accessibility and usability** – is it usable with screen readers, Braille or other output forms?
5. **task and learning performance** – can learners understand and solve the intended task with it?

These levels should not disappear into a single global score.

## Critical errors matter differently from average errors

In technical STEM content, individual mistakes can have especially serious consequences: an invented relation, wrong cardinality, a swapped mathematical symbol, an incorrect numerical value, or an output that unintentionally reveals the answer to an examination task.

For that reason, we do not want to report only precision, recall or F1. Critical error classes, schema errors, value and unit errors, appropriate abstention and required human review time should be reported separately.

## Comparison and ablation before unnecessary training scale-up

For early experiments, the default sequence is:

- an existing model as a simple baseline,
- improved preprocessing or better document/image input,
- schema-validated structured output,
- domain-specific rules, parsers or multi-stage processing,
- targeted model adaptation if a recurring model-specific error class remains.

This helps avoid attributing an improvement to fine-tuning when it may actually come from better input data, a clearer output schema or a parser.

## When fine-tuning may still be useful

A recent 2026 preprint on UML class diagrams reports that domain-specific LoRA fine-tuning substantially outperforms general VLM baselines on the authors' specialised UML benchmark.

For IncluLearn.AI, this is an important signal: specialisation can be valuable. It does not yet answer whether a model can reconstruct a complete, reviewable diagram structure reliably.

Fine-tuning becomes especially interesting when:

- a clearly defined error class recurs,
- enough robust reference data exist,
- baselines and simpler pipeline improvements have been exhausted,
- the benefit over additional training, operating and maintenance effort can be measured.

## Reference data are a research artefact in their own right

Ground truth itself must be reviewable. The first reference sets record entities, relations, values, units, visible ambiguity and didactically relevant statements separately.

Variants of the same source — such as crops, translations or rerenderings — should be treated as source groups so they are not split carelessly across development and test data.

Model output must not automatically become the reference. Subject-critical claims require human review.

## Why user quality must be evaluated separately

A technically perfect data model can still be difficult or inefficient to use. Conversely, a representation that works well for a particular task may deliberately omit information.

Technical extraction quality and actual use by blind and visually impaired learners therefore need separate evaluation. Early formative tests can reveal barriers and error sources, but they do not replace later formal evaluation.

## Consequence for the project

The lasting value of IncluLearn.AI should not depend on one particular model. More durable assets are reviewable semantics, good reference data, reproducible tests, accessible representations and an efficient human review path.

Models may change. The subject-matter inspectability of the system should remain.
