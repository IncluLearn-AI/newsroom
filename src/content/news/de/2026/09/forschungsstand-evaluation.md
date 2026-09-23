---
translationKey: prep-2026-09-research-evaluation
locale: de
sourceLang: de
translationStatus: source
slug: wie-wir-modelle-vergleichen-bevor-wir-fine-tuning-entscheiden
title: "Wie wir Modelle vergleichen, bevor wir Fine-Tuning entscheiden"
summary: "IncluLearn.AI will Modellqualität nicht an einem einzelnen Benchmark festmachen. Zuerst sollen Referenzdaten, Preprocessing, strukturierte Ausgabe, Regeln und Reviewpfad vergleichbar getestet werden; Fine-Tuning bleibt eine gezielte Option für klar identifizierte Fehlerklassen."
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
  - "Ein einzelner F1- oder VQA-Score reicht für IncluLearn.AI nicht aus: Syntax, Semantik, fachliche Äquivalenz, Accessibility und Aufgabenleistung müssen getrennt betrachtet werden."
  - "Vor Fine-Tuning sollen Baseline, Preprocessing, strukturierte Ausgabe, domänenspezifische Regeln und Reviewpfad unter denselben Bedingungen verglichen werden."
  - "Referenzdaten werden nach Herkunftsgruppen getrennt, damit Varianten derselben Quelle nicht unkontrolliert in Entwicklung und Test landen."
  - "Fine-Tuning bleibt ausdrücklich möglich, soll aber eine konkrete wiederkehrende Fehlerklasse oder Forschungsfrage adressieren statt Selbstzweck zu sein."
openQuestions:
  - "Welche Artefaktklassen brauchen früh domänenspezifische Modellanpassung, und wo reichen strukturierte Prompts, Parser und Validierungsregeln?"
  - "Wie stark korrelieren technische Strukturmetriken später mit tatsächlicher Verständlichkeit und Aufgabenleistung blinder und sehbehinderter Lernender?"
partnerQuestions:
  - "Welche Fehlerklassen wären aus Ihrer Praxis so kritisch, dass ein technisch guter Durchschnittsscore trotzdem nicht akzeptabel wäre?"
related:
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-diagram-ai
  - prep-2026-09-document-ai-semantics
dossiers:
  - prep-2026-09
tags:
  - Evaluation
  - KI-Strategie
  - Fine-Tuning
  - Benchmarks
  - Human Review
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

## Kurz gesagt

Für IncluLearn.AI ist die Frage nicht einfach: **Welches Modell erzielt den höchsten Score?** Entscheidend ist, ob ein Verfahren fachlich relevante Struktur zuverlässig rekonstruiert, Unsicherheit sichtbar macht, effizient geprüft werden kann und am Ende zu nutzbaren Repräsentationen führt.

Deshalb planen wir eine mehrstufige Evaluation und eine bewusst zurückhaltende Trainingsstrategie: Erst vergleichen wir, **woher** Verbesserungen kommen. Fine-Tuning ist danach eine gezielte Methode – nicht automatisch der erste Schritt.

## Warum klassische Benchmarks nur einen Teil der Frage beantworten

Benchmarks wie ChartQA messen, wie gut Modelle Fragen zu Charts beantworten können. Solche Tests sind wertvoll für visuelles und logisches Reasoning. Für barrierefreie Rekonstruktion reicht korrekte Fragebeantwortung aber nicht automatisch aus.

Ein Modell kann beispielsweise viele Fragen richtig beantworten und trotzdem eine Relation, Einheit oder Beschriftung übersehen, die für eine vollständige zugängliche Repräsentation wichtig ist.

IncluLearn.AI trennt deshalb fünf Ebenen:

1. **syntaktische Korrektheit** – lässt sich die erzeugte Struktur überhaupt validieren?
2. **strukturelle/semantische Korrektheit** – stimmen Entitäten, Relationen, Werte und relevante Reihenfolgen?
3. **fachliche Äquivalenz** – trägt die Repräsentation denselben fachlichen Inhalt?
4. **Accessibility und Usability** – ist sie mit Screenreader, Braille oder anderen Ausgaben sinnvoll nutzbar?
5. **Aufgaben- und Lernleistung** – können Lernende damit die fachlich intendierte Aufgabe verstehen und lösen?

Diese Ebenen dürfen nicht in einem einzigen globalen Score verschwinden.

## Kritische Fehler zählen anders als Durchschnittsfehler

Bei technischen MINT-Inhalten können einzelne Fehler besonders schwer wiegen: eine erfundene Relation, eine falsche Kardinalität, ein vertauschtes mathematisches Symbol, ein falscher Zahlenwert oder eine Ausgabe, die bei einer Prüfungsaufgabe unbeabsichtigt die Lösung verrät.

Deshalb sollen nicht nur Precision, Recall oder F1 berichtet werden. Kritische Fehlerklassen, Schemafehler, Werte- und Einheitenfehler, sinnvolle Enthaltung sowie notwendige menschliche Reviewzeit werden separat betrachtet.

## Vergleich und Ablation vor unnötiger Trainingsskalierung

Für frühe Experimente ist folgende Reihenfolge vorgesehen:

- vorhandenes Modell als einfache Baseline,
- verbessertes Preprocessing bzw. bessere Dokument-/Bildzuführung,
- schema-validierte strukturierte Ausgabe,
- domänenspezifische Regeln, Parser oder mehrstufige Verarbeitung,
- gezielte Modellanpassung, wenn danach eine wiederkehrende modellbedingte Fehlerklasse übrig bleibt.

Diese Reihenfolge soll verhindern, dass ein Erfolg vorschnell „dem Fine-Tuning“ zugeschrieben wird, obwohl er vielleicht durch bessere Eingabedaten, ein klareres Ausgabeschema oder einen Parser entstanden ist.

## Wann Fine-Tuning trotzdem sinnvoll sein kann

Aktuelle Arbeit zu UML-Klassendiagrammen zeigt, dass domänenspezifisches LoRA-Fine-Tuning ein allgemeines VLM auf einem spezialisierten Diagramm-Benchmark deutlich übertreffen kann. Die Arbeit ist derzeit ein **Preprint** und misst primär visuelle Fragebeantwortung.

Für IncluLearn.AI ist das ein wichtiges Signal: Spezialisierung kann sich lohnen. Sie beantwortet aber noch nicht die Frage, ob ein Modell eine vollständige, prüfbare Diagrammstruktur zuverlässig rekonstruiert.

Fine-Tuning wird daher besonders interessant, wenn:

- eine klar definierte Fehlerklasse wiederholt auftritt,
- genug belastbare Referenzdaten vorhanden sind,
- Baselines und einfachere Pipelineverbesserungen ausgereizt sind,
- der Nutzen gegenüber zusätzlichem Trainings-, Betriebs- und Wartungsaufwand messbar ist.

## Referenzdaten sind selbst ein Forschungsartefakt

Auch die Ground Truth muss überprüfbar sein. Für die ersten Referenzmengen werden Entitäten, Relationen, Werte, Einheiten, sichtbare Unklarheiten und didaktisch relevante Aussagen getrennt dokumentiert.

Varianten derselben Quelle – etwa Ausschnitte, Übersetzungen oder Renderings – sollen als Herkunftsgruppe behandelt werden, damit sie nicht unkontrolliert auf Entwicklungs- und Testdaten verteilt werden.

Wichtig ist außerdem: Modelloutput wird nicht automatisch zur Referenz. Fachlich kritische Aussagen benötigen menschliche Prüfung.

## Warum Nutzerqualität separat gemessen werden muss

Ein technisch perfektes Datenmodell kann trotzdem unverständlich oder ineffizient zugänglich sein. Umgekehrt kann eine für eine bestimmte Aufgabe gut nutzbare Darstellung einzelne Informationen bewusst reduzieren.

Deshalb wollen wir technische Extraktionsqualität und tatsächliche Nutzung mit blinden und sehbehinderten Lernenden getrennt evaluieren. Frühe formative Tests dienen dazu, Barrieren und Fehlerquellen zu finden; sie ersetzen keine spätere formale Evaluation.

## Konsequenz für das Projekt

Der dauerhafte Wert von IncluLearn.AI soll nicht an ein bestimmtes Modell gebunden sein. Besonders wichtig sind überprüfbare Semantik, gute Referenzdaten, reproduzierbare Tests, zugängliche Repräsentationen und ein effizienter menschlicher Reviewpfad.

Modelle dürfen sich ändern. Die fachliche Prüfbarkeit des Systems sollte bleiben.
