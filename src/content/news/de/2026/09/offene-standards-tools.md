---
translationKey: prep-2026-09-open-standards-tools
locale: de
sourceLang: de
translationStatus: source
slug: welche-offenen-standards-und-tools-fuer-den-transfer-interessant-sind
title: "Welche offenen Standards und Tools für den Transfer interessant sind"
summary: "IncluLearn.AI muss nicht jedes Zielformat und jede Transformation neu erfinden. MathML, EPUB Accessibility, DAISY Pipeline, Pandoc und PlantUML zeigen unterschiedliche Bausteine für offene, interoperable und wiederverwendbare Workflows – ohne dass damit bereits eine endgültige Toolauswahl getroffen ist."
publishedAt: 2026-09-23T08:31:40+02:00
event:
  start: 2026-09-23
projectPhase: preparation
retroactive: false
category: tools-transfer
format: article
keyFindings:
  - "MathML adressiert strukturierte Mathematik und wird vom W3C mit explizitem Accessibility-Fokus weiterentwickelt."
  - "EPUB Accessibility 1.1 verbindet Zugänglichkeitsanforderungen mit maschinenlesbarer Auffindbarkeit barrierefreier Eigenschaften."
  - "DAISY Pipeline zeigt ein produktionsnahes Open-Source-Modell für standardbasierte Transformationen und einen Single-Source-Master-Ansatz."
  - "Pandoc und PlantUML sind Beispiele dafür, wie textbasierte Quellen in unterschiedliche Ausgabeformen bzw. visuelle Diagramme überführt werden können."
  - "Diese Technologien sind Kandidaten und Referenzpunkte; der Beitrag behauptet nicht, dass sie bereits Bestandteil der produktiven IncluLearn.AI-Pipeline sind."
openQuestions:
  - "Welche Standards sollten an den öffentlichen Schnittstellen von IncluLearn.AI verbindlich unterstützt werden?"
  - "Wo ist ein etabliertes Austauschformat ausreichend und wo benötigt das Projekt eine eigene semantische Zwischenschicht?"
partnerQuestions:
  - "Welche Formate müssen in Ihren bestehenden Produktions- oder LMS-Workflows zwingend hinein- oder herausgeführt werden?"
  - "Welche offenen Werkzeuge setzen Sie heute bereits ein und an welchen Stellen fehlen verlässliche Schnittstellen?"
related:
  - prep-2026-09-service-priorities
  - prior-work-pattern-collection
  - prior-work-textual-representations
dossiers:
  - prep-2026-09
tags:
  - Open Source
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
draft: false
---

## Kurz gesagt

Transfer bedeutet für IncluLearn.AI nicht, eine abgeschlossene Forschungssoftware neben bestehende Systeme zu stellen und von anderen Einrichtungen die komplette Umstellung ihrer Arbeitsweise zu erwarten.

Ein nachhaltigerer Weg ist, **offene Standards an den Grenzen** zu nutzen, etablierte Werkzeuge dort wiederzuverwenden, wo sie ein Problem bereits gut lösen, und projektspezifische Entwicklung auf die tatsächlich neue Aufgabe zu konzentrieren: überprüfbare Semantik komplexer MINT-Inhalte.

Fünf Beispiele zeigen, wie unterschiedlich solche Bausteine sein können.

## MathML: Mathematik als Struktur, nicht als Bild

MathML kodiert mathematische Notation und Struktur maschinenlesbar. Der 2026 gestartete W3C Math Working Group Charter nennt bessere Accessibility ausdrücklich als Ziel.

Geplant sind unter anderem Arbeiten an Accessibility-Annotationen sowie Open-Source-Beispielimplementierungen für MathML-to-speech und MathML-to-braille.

Für IncluLearn.AI ist MathML damit ein naheliegender Referenzpunkt für **mathematische Ausgabe und Interoperabilität**. Es löst aber nicht automatisch die vorgelagerte Aufgabe, Mathematik aus beliebigen PDFs oder Bildern korrekt zu rekonstruieren.

## EPUB Accessibility: Zugänglichkeit auch auffindbar machen

EPUB Accessibility 1.1 ist seit Oktober 2024 eine W3C Recommendation. Die Spezifikation definiert Anforderungen zur Prüfung der Zugänglichkeit von EPUB-Publikationen und Metadaten, mit denen zugängliche Eigenschaften auffindbar werden.

Das ist für Transfer interessant, weil ein barrierefreies Ergebnis nicht nur erzeugt, sondern auch **beschrieben, geprüft und in bestehende Publikationsökosysteme eingebettet** werden muss.

Ob EPUB selbst ein zentrales IncluLearn.AI-Ausgabeformat wird, ist damit noch nicht entschieden.

## DAISY Pipeline: Transformation als modularer Produktionsprozess

Die DAISY Pipeline ist ein Open-Source-Framework für automatisierte Transformationen zwischen zugänglichen digitalen Formaten. Der DAISY Consortium beschreibt ausdrücklich einen Single-Source-Master-Ansatz, modulare wiederverwendbare Komponenten und Integration über Kommandozeile bzw. Web-API.

Für IncluLearn.AI ist weniger interessant, eine solche Pipeline nachzubauen, als von ihrer Produktionslogik zu lernen:

- Standards als stabile Grenzen,
- wiederverwendbare Transformationsmodule,
- automatisierbare Workflows,
- Trennung zwischen Verarbeitung und konkreter Bedienoberfläche.

Die neuartige Projektfrage liegt davor: Wie entsteht aus komplexem visuellem MINT-Material zunächst eine ausreichend zuverlässige fachliche Semantik?

## Pandoc: text-first Quellen in viele Formate überführen

Pandoc konvertiert zwischen zahlreichen Markup- und Dokumentformaten, darunter Markdown, HTML, LaTeX und DOCX.

In der eigenen Pattern Collection dient Pandoc als Beispiel dafür, wie ein strukturierter textueller Kern in eine visuell gestaltete Ausgabe transformiert werden kann.

Für IncluLearn.AI ist das ein gutes Beispiel für das Prinzip: **Ein Renderer oder Konverter muss nicht zugleich die fachliche Bedeutung erschließen.** Wenn die Semantik bereits korrekt und strukturiert vorliegt, können etablierte Werkzeuge Teile der Ausgabe übernehmen.

## PlantUML: ein Modell, mehrere Wahrnehmungswege

PlantUML erzeugt Diagramme aus einer textuellen Sprache. In den eigenen Lehrvorarbeiten wurde dieser Ansatz für UML-Klassendiagramme genutzt.

Das Interessante ist nicht nur der Renderer, sondern die gemeinsame Quelle: Eine Person kann die textuelle Struktur mit Screenreader oder Braille bearbeiten, während andere dieselbe Quelle als visuelles Diagramm betrachten.

Genau dieser Gedanke passt zum Semantic-first-Ziel von IncluLearn.AI.

## Was daraus architektonisch folgt

Die fünf Beispiele erfüllen unterschiedliche Aufgaben. Sie sollten nicht in einen Topf geworfen werden.

Eine plausible Schichtung ist:

1. **fachliche Semantik rekonstruieren und prüfen** – Kernforschung von IncluLearn.AI,
2. **offene Repräsentationen und Standards verwenden** – etwa MathML oder strukturierte Webformate,
3. **bewährte Konverter und Renderer nutzen** – wo sie bereits zuverlässig arbeiten,
4. **bestehende Produktionssysteme anbinden** – statt parallele Inselworkflows zu erzwingen.

Damit bleibt die semantische Quelle möglichst unabhängig von einzelnen Tools.

## Noch keine endgültige Toolauswahl

Dieser Beitrag beschreibt Referenztechnologien und Transferoptionen, keine bereits beschlossene Produktarchitektur.

Vor einer Integration müssen unter anderem Accessibility in den tatsächlich verwendeten Clients, Lizenzbedingungen, Wartbarkeit, Formatabdeckung, Performance und Anschlussfähigkeit an reale Partnerworkflows geprüft werden.

Gerade deshalb ist frühes Feedback wichtig: **Welche Formate und Werkzeuge sind in Medienzentren, Hochschulen und Lernplattformen tatsächlich Teil des Alltags?**
