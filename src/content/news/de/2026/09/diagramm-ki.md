---
translationKey: prep-2026-09-diagram-ai
locale: de
sourceLang: de
translationStatus: source
slug: was-aktuelle-diagramm-ki-kann-und-wo-sie-scheitert
title: "Was aktuelle Diagramm-KI bereits kann – und wo sie noch scheitert"
summary: "Aktuelle VLM-Forschung zeigt Fortschritte bei Charts, UML und wissenschaftlichen Diagrammen. Gleichzeitig messen viele Benchmarks Fragebeantwortung statt vollständiger Rekonstruktion – ein entscheidender Unterschied für barrierefreie MINT-Repräsentationen."
publishedAt: 2026-09-23T08:12:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: research-radar
format: article
keyFindings:
  - "Chart-Forschung zeigt, dass die Rückführung visueller Darstellung in strukturierte Daten ein leistungsfähiges Zwischenformat sein kann."
  - "Ein 2026er UML-Preprint berichtet deutliche Vorteile domänenspezifischen LoRA-Fine-Tunings gegenüber allgemeinen VLM-Baselines auf seinem UML-VQA-Benchmark."
  - "SciGram skaliert wissenschaftliche Diagramminstruktionen stark, bleibt aber ebenfalls vor allem im Paradigma Diagramm-QA und multimodalem Reasoning."
  - "Für IncluLearn.AI ist die zentrale Lücke: richtige Antworten auf Fragen garantieren keine vollständige, prüfbare Rekonstruktion aller relevanten Entitäten und Relationen."
openQuestions:
  - "Welche Diagrammklassen lassen sich mit allgemeinen VLMs plus Schema bereits zuverlässig rekonstruieren?"
  - "Wie groß ist die Lücke zwischen VQA-Leistung und vollständiger Relations-/Entitätenrekonstruktion?"
  - "Welche Negativfälle und Unsicherheiten müssen explizit trainiert oder regelbasiert geprüft werden?"
partnerQuestions:
  - "Welche Diagrammfehler wären in Ihrer Lehre oder Medienaufbereitung besonders kritisch: fehlende Objekte, falsche Relationen, falsche Werte oder etwas anderes?"
related:
  - prep-2026-09-document-ai-semantics
  - prep-2026-09-research-evaluation
  - prep-2026-09-alt-text-not-enough
dossiers:
  - prep-2026-09
tags:
  - VLM
  - Diagramme
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
draft: true
---

## Kurz gesagt

Diagramm-KI macht deutliche Fortschritte. Besonders bei Charts zeigen Forschungsarbeiten, dass ein Modell nicht zwingend direkt auf eine Frage antworten muss: Es kann die visuelle Darstellung zunächst in eine strukturierte Form zurückführen und Reasoning anschließend auf dieser Struktur ausführen.

Für IncluLearn.AI ist genau dieses Prinzip interessant. Gleichzeitig bleibt ein wichtiges Problem offen: **Ein Modell kann viele Fragen korrekt beantworten, ohne das gesamte Diagramm vollständig und zuverlässig verstanden zu haben.**

## Charts: Struktur vor Reasoning

ChartQA etablierte einen Benchmark für visuelle und logische Fragen zu Charts. Spätere Arbeiten gehen einen Schritt weiter.

DePlot übersetzt einen Plot zunächst in eine linearisierte Tabelle und führt die eigentliche Fragebeantwortung anschließend auf dieser Zwischenrepräsentation aus. UniChart kombiniert mehrere Aufgaben rund um Chartstruktur, Verständnis und Reasoning.

Für IncluLearn.AI ist daran weniger der konkrete QA-Score entscheidend als das Architekturprinzip: **Visuelle Form wird in strukturierte Daten zurückgeführt, bevor weitere Verarbeitung erfolgt.**

Das ähnelt dem Semantic-first-Ansatz des Projekts.

## UML: Domänenspezialisierung kann einen Unterschied machen

Ein 2026 veröffentlichter Preprint von Naboichenko und Peinl führt einen spezialisierten Benchmark für UML-Klassendiagramme sowie rund 16.000 Bild-Frage-Antwort-Trainingsbeispiele ein.

Die Autoren berichten, dass ein LoRA-basiertes Fine-Tuning auf ihrer UML-Aufgabe allgemeine VLM-Baselines deutlich übertrifft. Das ist für IncluLearn.AI ein wichtiges Signal: Technische Diagramme können so domänenspezifisch sein, dass allgemeines visuelles Sprachverständnis allein nicht genügt.

Der Status muss aber klar bleiben: Die Arbeit ist derzeit als **Preprint** verfügbar, und der Schwerpunkt liegt auf Visual Question Answering.

## Wissenschaftliche Diagramme: große synthetische Datensätze

Ebenfalls 2026 stellt der SciGram-Preprint einen Datensatz mit mehr als 194.000 wissenschaftlichen Diagrammen und rund 1,4 Millionen synthetischen visuellen Instruktionen vor. Die Autoren berichten Verbesserungen auf diagrammbezogenen Benchmarks wie TQA, ScienceQA und AI2D.

Spannend ist hier insbesondere die Skalierung synthetischer Trainingsdaten aus fachlicher Terminologie und Webdiagrammen.

Für IncluLearn.AI bleibt aber offen, wie gut solche Methoden auf technische Artefakte wie UML, Schaltungen oder KV-Diagramme übertragen werden können – und ob synthetische Frage-Antwort-Daten die Art von vollständiger Strukturrekonstruktion fördern, die wir benötigen.

## Der zentrale Unterschied: QA versus Rekonstruktion

Für Accessibility kann eine einzelne richtige Antwort zu wenig sein.

Angenommen, ein Modell beantwortet korrekt, welche Klasse von Person erbt. Trotzdem könnte es eine zweite Vererbungsbeziehung, eine Kardinalität oder ein Attribut übersehen. Für die konkrete Frage wäre die Antwort richtig, die barrierefreie Repräsentation aber unvollständig.

IncluLearn.AI benötigt deshalb zusätzlich Metriken für:

- Entitäten und Attribute,
- Relationen und Richtungen,
- Zahlen, Einheiten und Symbole,
- Negativfälle,
- strukturrelevante Gruppierungen,
- korrekt erkannte Unsicherheit oder Enthaltung.

## Wo aktuelle Diagramm-KI besonders interessant wird

Aus dem Forschungsstand ergeben sich drei vielversprechende Richtungen:

1. **strukturierte Zwischenrepräsentationen** statt freier Antworten,
2. **domänenspezifische Daten und Modellanpassung** für schwierige Diagrammklassen,
3. **kombinierte Validierung** aus Modellausgabe, Schema-/Fachregeln und menschlichem Review.

Diese Richtungen schließen sich nicht aus. Wahrscheinlich wird ein belastbarer Workflow mehrere davon kombinieren.

## Konsequenz für IncluLearn.AI

Das Projekt sollte nicht nur fragen: „Welches VLM versteht Diagramme am besten?“

Die wichtigere Frage lautet: **Welcher Aufbau liefert eine vollständige, überprüfbare Semantik mit vertretbarem Reviewaufwand – und erkennt zuverlässig, wenn er etwas nicht weiß?**
