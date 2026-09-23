---
translationKey: prior-work-textual-representations
locale: de
sourceLang: de
translationStatus: source
slug: plantuml-netlists-und-strukturierter-text-in-der-technischen-lehre
title: "PlantUML, Netlists und strukturierter Text: Vorarbeiten aus der technischen Lehre"
summary: "Eine 2025 veröffentlichte Arbeit beschreibt, wie visuelle Artefakte aus Software Engineering und Technischer Informatik durch textbasierte Repräsentationen zugänglich und gemeinsam bearbeitbar werden können – darunter UML, elektronische Schaltungen und KV-Diagramme."
publishedAt: 2026-09-23T08:46:00+02:00
event:
  start: 2025-05-18
  end: 2025-05-22
projectPhase: prior-work
retroactive: true
category: publications-events
format: article
keyFindings:
  - "Für UML-Klassendiagramme, elektronische Schaltungen und KV-Diagramme können textuelle Repräsentationen fachliche Struktur explizit und screenreader-nutzbar machen."
  - "PlantUML und Netlists zeigen ein besonders interessantes Prinzip: dieselbe textuelle Struktur kann von Menschen gelesen und wieder in eine visuelle Darstellung gerendert werden."
  - "Die Lösungen entstanden aus konkreten Lehrsituationen mit blinden Studierenden und zielen auf gemeinsames Arbeiten statt getrennte Sondermaterialien."
  - "Textuelle Repräsentation ist nicht für jedes Artefakt ausreichend; räumliche oder freie Grafiken können taktile, auditive oder kombinierte Zugänge benötigen."
openQuestions:
  - "Welche textuellen Fachsprachen eignen sich als menschlich lesbare Zielrepräsentation und welche nur als maschinelles Austauschformat?"
  - "Wie kann KI aus einem Bild zuverlässig eine textuelle Struktur rekonstruieren, ohne Relationen oder Werte zu erfinden?"
partnerQuestions:
  - "Nutzen Sie heute bereits textbasierte Fachformate wie PlantUML, Netlists, LaTeX oder strukturierte Tabellen in der barrierefreien Aufbereitung?"
related:
  - prior-work-pattern-collection
  - prep-2026-09-alt-text-not-enough
  - prep-2026-09-diagram-ai
dossiers:
  - prep-2026-09
tags:
  - Publikation
  - PlantUML
  - Netlists
  - UML
  - Schaltungen
  - KV-Diagramme
authors:
  - Diethelm Bienhaus
  - Michael Kreutzer
  - Florian von Zabiensky
evidence: peer-reviewed
sources:
  - title: "Accessible Representations of Visual Artifacts in Technical Informatics Education"
    url: "https://personales.upv.es/thinkmind/SMART_ACCESSIBILITY/SMART_ACCESSIBILITY_2025/smart_accessibility_2025_1_10_88001.html"
    kind: peer-reviewed
    published: 2025-05-18
aiAssisted: true
featured: true
draft: true
---

## Ausgangspunkt: gemeinsame Lehrveranstaltungen statt separater Sonderwege

Die Arbeit entstand aus einer konkreten Herausforderung an der THM: In Veranstaltungen zu Programmierung, Software Engineering und Technischer Informatik werden visuelle Artefakte wie UML-Klassendiagramme, elektronische Schaltungen und Karnaugh-Veitch-Diagramme selbstverständlich eingesetzt.

Mit blinden Studierenden wurde sichtbar, dass nicht nur der **Zugang** zum fertigen Diagramm problematisch ist. Auch Erstellen, Ändern und gemeinsames Diskutieren müssen ohne rein visuelle Werkzeuge möglich sein.

Die 2025 auf der SMART ACCESSIBILITY veröffentlichte Arbeit untersucht deshalb textbasierte Repräsentationen für mehrere typische Artefaktklassen.

## UML: Struktur textuell modellieren und visuell rendern

Bei UML-Klassendiagrammen ist die räumliche Zeichnung nur eine Darstellung eines strukturierten Modells.

Werkzeuge wie PlantUML erlauben, Klassen, Attribute, Methoden und Beziehungen in einer textuellen Sprache zu formulieren. Aus demselben Text kann anschließend wieder ein visuelles Diagramm erzeugt werden.

Für inklusive Zusammenarbeit ist das besonders interessant: Blinde und sehende Studierende können **am selben fachlichen Modell** arbeiten, auch wenn sie unterschiedliche Darstellungen davon verwenden.

## Elektronische Schaltungen: Netlists als fachliche Repräsentation

Bei Schaltungen beschreiben Netlists Bauteile und ihre elektrischen Verbindungen textuell. Damit wird ein Teil der fachlichen Struktur unabhängig von der gezeichneten Position im Schaltplan zugänglich.

Die Publikation zeigt, dass vereinfachte textuelle Repräsentationen in der Lehre eine Alternative oder Ergänzung zum rein grafischen Schaltplan sein können.

Für IncluLearn.AI folgt daraus eine wichtige Forschungsfrage: Ein Modell müsste aus einem visuellen Schaltplan nicht nur Bauteile erkennen, sondern die **korrekten elektrischen Beziehungen** rekonstruieren.

## KV-Diagramme und digitale Logik

Auch KV-Diagramme und Logikschaltungen enthalten Struktur, die in geeigneten textuellen oder tabellarischen Formen ausdrückbar ist.

Solche Repräsentationen können den Fokus von visueller Anordnung auf die fachlich relevante Boolesche Struktur verschieben. Gleichzeitig bleibt zu prüfen, welche räumlichen Informationen für Verständnis und Aufgabenbearbeitung zusätzlich benötigt werden.

## Warum das für Semantic first wichtig ist

Die Beispiele zeigen ein Grundprinzip, das heute im Zentrum von IncluLearn.AI steht:

**Eine zugängliche Repräsentation muss nicht bloß eine Beschreibung des Bildes sein. Sie kann eine alternative Darstellung desselben fachlichen Modells sein.**

Das ist ein stärkerer Anspruch. Er verlangt, dass Entitäten, Relationen, Werte und Regeln korrekt erfasst werden.

## Grenzen textbasierter Ansätze

Textuelle Modellierung löst nicht jedes Accessibility-Problem.

Für freie Grafiken, räumliche Modelle oder quantitative Verläufe können taktile, haptische oder auditive Darstellungen besser geeignet sein. Außerdem müssen textuelle Fachsprachen selbst verständlich, lernbar und mit Assistenztechnologien gut nutzbar sein.

Die Vorarbeit liefert deshalb kein Argument für „alles als Text“, sondern für **mehrere äquivalente Darstellungen auf Basis derselben fachlichen Struktur**.
