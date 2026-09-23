---
translationKey: prior-work-textual-representations
locale: en
sourceLang: de
sourceVersionHash: "07275863b0b2c44e662a97861f72ac3c9a752675"
translationStatus: machine
slug: plantuml-netlists-and-structured-text-in-technical-education
title: "PlantUML, netlists and structured text: prior work from technical education"
summary: "A 2025 publication describes how visual artefacts from software engineering and technical informatics can become accessible and collaboratively editable through textual representations, including UML, electronic circuits and Karnaugh maps."
publishedAt: 2026-09-23T08:46:00+02:00
event:
  start: 2025-05-18
  end: 2025-05-22
projectPhase: prior-work
retroactive: true
category: publications-events
format: article
keyFindings:
  - "For UML class diagrams, electronic circuits and Karnaugh maps, textual representations can make subject structure explicit and usable with screen readers."
  - "PlantUML and netlists demonstrate a particularly useful principle: the same textual structure can be read by people and rendered back into a visual representation."
  - "The approaches emerged from concrete teaching situations with blind students and aim at shared work rather than separate special materials."
  - "Textual representation is not sufficient for every artefact; spatial or free-form graphics may require tactile, auditory or combined access."
openQuestions:
  - "Which textual domain languages are suitable as human-readable target representations and which are useful only as machine exchange formats?"
  - "How can AI reconstruct textual structure reliably from an image without inventing relations or values?"
partnerQuestions:
  - "Do you already use text-based technical formats such as PlantUML, netlists, LaTeX or structured tables in accessible-media production?"
related:
  - prior-work-pattern-collection
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-diagram-ai
dossiers:
  - prep-2026-09
tags:
  - Publication
  - PlantUML
  - Netlists
  - UML
  - Circuits
  - Karnaugh maps
authors:
  - Diethelm Bienhaus
  - Michael Kreutzer
  - Florian von Zabiensky
evidence: peer-reviewed
sources:
  - title: "Accessible Representations of Visual Artifacts in Technical Informatics Education"
    url: "https://www.thinkmind.org/index.php?view=article&articleid=smart_accessibility_2025_1_10_88001"
    kind: peer-reviewed
    published: 2025-05-18
aiAssisted: true
featured: true
draft: true
---

## Starting point: shared teaching rather than separate special workflows

The work grew from a concrete challenge at THM. Courses in programming, software engineering and technical informatics routinely use visual artefacts such as UML class diagrams, electronic circuits and Karnaugh maps.

With blind students, it became clear that the problem is not only **accessing** a finished diagram. Creating, changing and discussing the same subject artefact together also needs to work without requiring purely visual tools.

The paper published at SMART ACCESSIBILITY 2025 therefore examines textual representations for several common artefact classes.

## UML: model the structure in text and render it visually

For UML class diagrams, the spatial drawing is one representation of a structured model.

Tools such as PlantUML allow classes, attributes, methods and relationships to be written in a textual language. A visual diagram can then be generated again from the same source.

For inclusive collaboration, this is especially interesting: blind and sighted students can **work on the same subject model** even when they use different representations of it.

## Electronic circuits: netlists as subject representations

Netlists describe components and their electrical connections in text. They therefore expose part of the subject structure independently of the drawn position in a circuit schematic.

The publication shows that simplified textual representations can become an alternative or complement to a purely graphical schematic in teaching.

For IncluLearn.AI, this leads to a demanding research question: a model would need not only to recognise components in an image but to reconstruct the **correct electrical relationships**.

## Karnaugh maps and digital logic

Karnaugh maps and logic circuits also contain structures that can be expressed in suitable textual or tabular forms.

Such representations can shift attention from visual arrangement towards the relevant Boolean structure. At the same time, it still needs to be tested which spatial information is additionally important for understanding and solving tasks.

## Why this matters to semantic first

The examples illustrate a principle that now sits at the centre of IncluLearn.AI:

**An accessible representation does not have to be merely a description of an image. It can be an alternative representation of the same subject model.**

That is a stronger requirement. It requires entities, relationships, values and rules to be captured correctly.

## Limits of textual approaches

Textual modelling does not solve every accessibility problem.

Free-form graphics, spatial models or quantitative trends may be better served by tactile, haptic or auditory representations. Textual domain languages themselves also need to be understandable, learnable and usable with assistive technologies.

The prior work is therefore not an argument for "everything as text", but for **multiple equivalent representations based on the same subject structure**.
