---
translationKey: prep-2026-09-alt-text-not-enough
locale: de
sourceLang: de
translationStatus: source
slug: warum-alt-text-fuer-mint-nicht-reicht
title: "Warum Alt-Text für MINT nicht reicht"
summary: "Technische Diagramme, Mathematik, Schaltungen und quantitative Grafiken transportieren Struktur und Beziehungen, die sich häufig nicht sinnvoll in einer einzigen kurzen Bildbeschreibung abbilden lassen. Für IncluLearn.AI folgt daraus ein Repertoire aus strukturierten, textuellen, taktilen und auditiven Repräsentationen."
publishedAt: 2026-09-23T08:11:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-16
projectPhase: preparation
retroactive: true
category: research-radar
format: article
keyFindings:
  - "UML, Schaltungen, KV-Diagramme, Mathematik und Plots tragen fachliche Struktur, die über eine allgemeine Bildbeschreibung hinausgeht."
  - "Eigene Vorarbeiten zeigen, dass textuell modellierte Diagramme wie PlantUML, Netlists oder strukturierte Tabellen gemeinsames Arbeiten zwischen blinden und sehenden Lernenden unterstützen können."
  - "Nicht jeder Inhalt braucht dieselbe Modalität: taktile/haptische Darstellungen und Sonifikation adressieren andere Aufgaben als strukturierter Text."
  - "Eine gemeinsame geprüfte Semantik kann als Ausgangspunkt für mehrere Repräsentationen dienen, statt für jede Ausgabeform unabhängig neu zu interpretieren."
openQuestions:
  - "Welche Repräsentation ist für welche Artefaktklasse und Lernaufgabe am wirksamsten?"
  - "Wie viel semantische Struktur muss explizit modelliert werden, damit mehrere Ausgaben konsistent bleiben?"
partnerQuestions:
  - "Bei welchen MINT-Artefakten scheitern heutige Alt-Texte oder lineare Beschreibungen in Ihrer Praxis besonders häufig?"
  - "Welche Kombination aus Text, taktiler Darstellung und Audio ist für Ihre Nutzer*innen besonders hilfreich?"
related:
  - prep-2026-09-document-ai-semantics
  - prep-2026-09-diagram-ai
  - prep-2026-09-research-evaluation
dossiers:
  - prep-2026-09
tags:
  - MINT
  - Barrierefreiheit
  - Diagramme
  - MathML
  - Taktile Grafiken
  - Sonifikation
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

## Kurz gesagt

Bei MINT-Lehrmaterialien ist die entscheidende Frage selten nur: **„Was ist auf dem Bild zu sehen?“** Häufig muss beantwortet werden: Welche Objekte gibt es, wie hängen sie zusammen, welche Werte und Einheiten sind relevant, welche Struktur trägt die fachliche Aussage und wie lässt sich diese Struktur in einer für die Lernaufgabe geeigneten Form zugänglich machen?

Genau deshalb reicht ein einzelner kurzer Alt-Text für viele technische Artefakte nicht aus.

## Technische Diagramme sind strukturierte Fachmodelle

Ein UML-Klassendiagramm besteht nicht nur aus Rechtecken und Linien, sondern aus Klassen, Attributen, Methoden und typisierten Beziehungen. Ein Schaltplan beschreibt Bauteile, Knoten und elektrische Verbindungen. Ein KV-Diagramm kodiert Boolesche Struktur in einer räumlichen Anordnung.

Unsere 2025 veröffentlichte Arbeit zu technischen Informatik-Artefakten zeigt deshalb textbasierte Repräsentationen wie PlantUML, Netlists und strukturierte Markdown-Formen als Alternativen, die fachliche Beziehungen explizit machen und auch gemeinsame Bearbeitung ermöglichen können.

Die wichtige Idee ist dabei nicht „alles in Text verwandeln“, sondern **fachliche Struktur so repräsentieren, dass sie nicht ausschließlich visuell verfügbar ist**.

## Unterschiedliche Aufgaben brauchen unterschiedliche Repräsentationen

Die 2026 erschienene Pattern Collection bündelt fünf wiederkehrende Lösungsrichtungen für barrierefreie MINT-Lehre:

- transformierbare text-first Kerninhalte,
- textuell modellierte Diagramme,
- taktile und haptische Workflows,
- Sonifikation quantitativer Daten,
- Human-in-the-loop-Erklärungen.

Diese Muster widersprechen sich nicht. Sie adressieren unterschiedliche Arten von Information.

Ein zeitlicher Verlauf kann sich beispielsweise gut sonifizieren lassen. Ein räumliches Modell kann taktil sinnvoller sein. Ein UML-Modell kann in einer textuellen DSL besonders präzise zugänglich werden. Eine komplexe Darstellung kann zusätzlich eine sprachliche Orientierung benötigen.

## Mathematik zeigt, warum Struktur entscheidend ist

Auch mathematische Inhalte sind mehr als die optische Folge von Symbolen. MathML dient dazu, mathematische Notation strukturiert zu kodieren. Der 2026 neu gestartete W3C Math Working Group Charter nennt Accessibility ausdrücklich als Ziel und sieht unter anderem Arbeit an Accessibility-Annotationen sowie Open-Source-Beispielcode für MathML-to-speech und MathML-to-braille vor.

Für IncluLearn.AI müssen deshalb zwei Aufgaben getrennt betrachtet werden:

1. mathematische Inhalte korrekt erkennen und rekonstruieren,
2. diese Struktur für Screenreader, Braille und andere Zugänge sinnvoll nutzbar machen.

## Von der Ersatzbeschreibung zur gemeinsamen semantischen Grundlage

Der langfristig interessantere Ansatz ist nicht, für jede Zielmodalität unabhängig eine neue Beschreibung zu generieren.

Stattdessen soll IncluLearn.AI prüfen, ob sich ein Artefakt zunächst in eine **geprüfte semantische Zwischenrepräsentation** überführen lässt. Aus dieser könnten anschließend unterschiedliche Darstellungen erzeugt werden – etwa strukturierter Text, Mathematikrepräsentationen, Audio, taktile Vorlagen oder eine visuelle Fassung.

Das hätte zwei Vorteile:

- fachliche Interpretation müsste nicht für jede Modalität vollständig wiederholt werden,
- Inkonsistenzen zwischen verschiedenen Ausgaben könnten leichter erkannt werden.

## Barrierefreiheit ist damit eine fachliche Designfrage

Alt-Text bleibt für viele Webinhalte wichtig. Für komplexe MINT-Artefakte ist er aber oft nur ein Teil eines größeren Lösungsraums.

IncluLearn.AI setzt deshalb nicht auf ein einziges „Bestformat“, sondern auf die Frage: **Welche semantische Information muss erhalten bleiben – und welche Repräsentation unterstützt die konkrete Lernaufgabe am besten?**
