---
translationKey: prior-work-pattern-collection
locale: de
sourceLang: de
translationStatus: source
slug: fuenf-design-patterns-fuer-barrierefreie-mint-lehrmaterialien
title: "Fünf Design Patterns für barrierefreie MINT-Lehrmaterialien"
summary: "Die 2026 veröffentlichte Pattern Collection von Diethelm Bienhaus und Michael Kreutzer bündelt praktische Erfahrungen aus der Lehre in fünf wiederverwendbare Muster – von text-first Kerninhalten über Diagramme und taktile Ausgaben bis zu Sonifikation und Human-in-the-loop-Erklärungen."
publishedAt: 2026-09-23T08:45:00+02:00
event:
  start: 2026-05-01
projectPhase: prior-work
retroactive: true
category: publications-events
format: article
keyFindings:
  - "Die Pattern Collection übersetzt mehrere Jahre praktische Lehre mit blinden Studierenden in fünf wiederverwendbare Lösungsmuster statt in ein einzelnes Spezialwerkzeug."
  - "Ein gemeinsames Prinzip ist die Trennung von fachlichem Kerninhalt und seiner konkreten visuellen, textuellen, taktilen oder auditiven Darstellung."
  - "Textuell modellierte Diagramme, taktile/haptische Workflows, Sonifikation und KI-gestützte Erklärungen werden als komplementäre Ansätze behandelt."
  - "Die Arbeit ist Open Access und bildet eine direkte fachliche Vorarbeit für den Semantic-first-Ansatz von IncluLearn.AI."
openQuestions:
  - "Welche der fünf Muster lassen sich durch eine gemeinsame semantische Zwischenrepräsentation besonders gut automatisieren?"
  - "Welche Muster benötigen auch künftig überwiegend menschliche oder handwerkliche Arbeit?"
partnerQuestions:
  - "Welche dieser fünf Lösungsrichtungen entspricht am ehesten den heutigen Arbeitsabläufen Ihrer Einrichtung?"
  - "Wo sehen Sie den größten Hebel für Automatisierung, ohne fachliche oder didaktische Qualität zu verlieren?"
related:
  - prior-work-textual-representations
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-service-priorities
dossiers:
  - prep-2026-09
tags:
  - Publikation
  - Design Patterns
  - MINT
  - Text-first
  - Taktile Grafiken
  - Sonifikation
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
draft: true
---

## Worum es in der Publikation geht

MINT-Lehre nutzt Diagramme, Schaltungen, KV-Diagramme, Zeitreihen und andere visuelle Darstellungen nicht nur dekorativ. Sie transportieren fachliche Struktur. Für blinde und sehbehinderte Lernende reicht es deshalb häufig nicht, einen bestehenden visuellen Inhalt nachträglich mit einer kurzen Beschreibung zu versehen.

Die Pattern Collection fasst praktische Lösungen als **fünf Design Patterns** zusammen. Dadurch wird aus einzelnen Lehrtricks ein übertragbares Repertoire, das Lehrende und technische Systeme auf unterschiedliche Materialarten anwenden können.

Der Beitrag entstand im Kontext der EuroPLoP 2025 und erschien am 1. Mai 2026 als Open-Access-Kapitel in der LNCS-Reihe.

## Pattern 1: Core of Content

Das erste Muster setzt beim Ausgangsmaterial an. Fachlicher Kerninhalt soll von einer bestimmten visuellen Gestaltung getrennt und möglichst in einem transformierbaren textuellen Format gepflegt werden.

Markdown ist ein Beispiel dafür: Derselbe strukturierte Kern kann für Screenreader und Braille direkt nutzbar sein und gleichzeitig mit Werkzeugen wie Pandoc in visuell gestaltete Ausgaben überführt werden.

Für IncluLearn.AI steckt darin eine zentrale Idee: **Nicht jede Ausgabeform sollte ihre eigene Wahrheit besitzen.**

## Pattern 2: Accessibility of Diagrams

Formal definierte Diagramme besitzen häufig ohnehin eine zugrunde liegende Struktur. UML-Klassendiagramme oder elektronische Schaltungen lassen sich beispielsweise in textuellen Modell- oder Netzlistenformaten ausdrücken.

Die Publikation schlägt deshalb vor, solche textuellen Repräsentationen nicht nur als technische Austauschformate, sondern auch als Accessibility-Werkzeug zu betrachten.

Das ist eine direkte Vorarbeit für die Frage, welche semantischen Strukturen IncluLearn.AI aus einem visuellen Diagramm rekonstruieren müsste.

## Pattern 3: Accessibility of Graphics

Nicht jede Grafik folgt einer formalen Spezifikation. Für freie Zeichnungen, räumliche Strukturen oder komplexe Illustrationen können taktile und haptische Darstellungen sinnvoller sein.

Das Muster macht damit eine wichtige Grenze deutlich: **Text ist nicht automatisch die beste zugängliche Repräsentation für jede Art von Information.**

## Pattern 4: Sonification of Time Series

Quantitative Verläufe können zusätzlich auditiv zugänglich gemacht werden. Sonifikation nutzt akustische Parameter, um beispielsweise Trends oder Veränderungen in Zeitreihen wahrnehmbar zu machen.

Für IncluLearn.AI ist daran besonders interessant, dass eine geprüfte Datenstruktur mehrere Darstellungen speisen kann: visuelle Grafik, strukturierte Tabelle, sprachliche Erklärung oder Sonifikation.

## Pattern 5: Graphics with Generated Explanation

Generierte Erklärungen können den Zugang zu unstrukturierten Grafiken unterstützen. Die Publikation behandelt sie ausdrücklich im **Human-in-the-loop**-Kontext: Generative KI kann Vorschläge erstellen, fachliche Plausibilität und Äquivalenz müssen aber prüfbar bleiben.

Dieser Gedanke findet sich heute in der Governance und Review-Architektur von IncluLearn.AI wieder.

## Was IncluLearn.AI daraus übernimmt – und was nicht automatisch folgt

Die Publikation ist eine fachliche Vorarbeit, kein bereits validierter Bauplan für das neue System.

IncluLearn.AI übernimmt insbesondere drei Leitideen:

- transformierbarer Kern statt isolierter Ausgabeformate,
- unterschiedliche Modalitäten für unterschiedliche Informationsarten,
- menschliche Prüfung an fachlich kritischen Stellen.

Offen ist dagegen, wie weit aktuelle KI-Verfahren diese Muster automatisieren können, welche semantische Zwischenrepräsentation dafür benötigt wird und wie sich die resultierenden Ausgaben mit blinden und sehbehinderten Lernenden verlässlich evaluieren lassen.
