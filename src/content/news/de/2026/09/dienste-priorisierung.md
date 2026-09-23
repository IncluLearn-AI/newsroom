---
translationKey: prep-2026-09-service-priorities
locale: de
sourceLang: de
translationStatus: source
slug: welche-dienste-aus-der-recherche-entstehen-koennten
title: "Welche IncluLearn.AI-Dienste aus der Recherche entstehen könnten"
summary: "Aus den Bedarfshypothesen haben wir eine erste Lösungshypothese abgeleitet: fünf Kernbausteine mit hohem strategischem Wert, fünf anschließende Produktions- und Integrationsdienste sowie drei spezialisierte spätere Optionen."
publishedAt: 2026-09-23T07:47:00+02:00
event:
  start: 2026-09-16
  end: 2026-09-16
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "P1 ist kein One-Click-Generator, sondern eine Kette aus semantischer Voraufbereitung, MINT-Interpretation, Expert Review, Multiformat-Ausgabe und Qualitätsprüfung."
  - "P2 adressiert professionelle Produktion: Batch-Verarbeitung, Semantic Diff, Wiederverwendung, Ausgabeprofile und API/LMS-Integration."
  - "P3 enthält besonders spezialisierte Optionen wie sicheren Prüfungsmodus, taktile Layoutoptimierung und interaktive semantische Exploration."
  - "Die gesamte Priorisierung ist eine Lösungshypothese und noch nicht mit Medienzentren validiert."
openQuestions:
  - "Welche P1-Bausteine erzeugen in der Praxis den größten Nutzen pro eingesparter Facharbeitszeit?"
  - "Soll der sichere Prüfungsmodus innerhalb des laufenden Projekts produktiv umgesetzt oder zunächst als Architektur- und Anforderungskonzept vorbereitet werden?"
partnerQuestions:
  - "Welche drei Dienste würden Sie in einem frühen Prototyp zuerst testen wollen?"
  - "Welche Schnittstellen, Kataloge oder bestehenden Produktionssysteme müssten für einen realistischen Pilot berücksichtigt werden?"
related:
  - prep-2026-09-media-centre-bottlenecks
  - prep-2026-09-needs-hypotheses
  - prep-2026-09-requirements
dossiers:
  - prep-2026-09
tags:
  - Dienste
  - Priorisierung
  - Semantic first
  - Expert Review
  - Multiformat
authors: []
evidence: editorial-analysis
sources:
  - title: "Barrierefreie Bildungsmedien im Blick – Landesmedienzentrum Baden-Württemberg"
    url: "https://www.lmz-bw.de/statische-newsroom-seiten/barrierefreie-bildungsmedien-im-blick"
    kind: official-primary
  - title: "Standards – Mediablis Bayern"
    url: "https://mediablis-bayern.de/standards/"
    kind: official-primary
  - title: "Medienzentrum der Carl-Strehl-Schule – blista"
    url: "https://www.blista.de/carl-strehl-schule/medienzentrum"
    kind: official-primary
  - title: "Die Medienzentrale des LBZB Hannover stellt sich vor"
    url: "https://www.lbzb.niedersachsen.de/startseite/medienzentrale/medienzentrale_im_lbzb_hannover/die-medienzentrale-des-lbzb-hannover-stellt-sich-vor-153706.html"
    kind: official-primary
  - title: "Sehkon – Sehgeschädigtengerechter Katalog Online"
    url: "https://ub.tu-dortmund.de/services-information/service-fuer-blinde-und-sehbehinderte/sehkon/"
    kind: official-primary
aiAssisted: true
featured: true
draft: false
---

## Kurz gesagt

Die Recherche legt nahe, dass ein nützlicher IncluLearn.AI-Workflow für professionelle Medienaufbereitung nicht aus einem einzigen KI-Modell besteht. Er braucht mehrere klar getrennte Bausteine: maschinelle Vorverarbeitung, domänenspezifische Semantik, fachliche Prüfung, Ausgabeerzeugung und Qualitätskontrolle.

Daraus haben wir eine erste Priorisierung möglicher Dienste abgeleitet. Auch sie ist **noch keine Produkt-Roadmap**, sondern eine Lösungshypothese für die Validierung mit Medienzentren und weiteren Partnern.

## P1: Fünf Kernbausteine mit hohem strategischem Wert

### 1. Semantische Voraufbereitung kompletter Dokumente

PDF, Office, Scan oder Bild sollen nicht nur durch OCR laufen. Ziel wäre ein überprüfbarer Arbeitsstand mit Dokumentstruktur, Lesereihenfolge, Tabellen, Formeln, Abbildungen, Aufgabenbezügen und Metadaten.

Der erwartete Nutzen liegt darin, häufig wiederkehrende mechanische Vorarbeit zu reduzieren.

### 2. MINT-Grafik- und Diagramm-Interpreter

Für priorisierte Diagrammklassen soll fachliche Struktur explizit werden: etwa Klassen und Relationen bei UML, Bauteile und Knoten bei Schaltungen oder Achsen, Daten und Trends bei Plots.

Dieser Baustein ist besonders wichtig, weil er IncluLearn.AI von generischem OCR oder allgemeiner Bildbeschreibung unterscheidet.

### 3. Expert Review Cockpit

Fachpersonal soll Original, extrahierte Semantik, erzeugte Repräsentationen, Unsicherheiten, Korrekturen und Freigabestatus gemeinsam prüfen können.

Die Leitidee lautet: „One Click“ darf höchstens die **maschinelle Vorverarbeitung** betreffen. Die fachliche Freigabe bleibt Human-in-the-loop.

### 4. Multiformat-Compiler

Aus einer geprüften semantischen Quelle könnten mehrere Darstellungen entstehen: strukturierter Text, HTML, Mathematikrepräsentationen, Audio/Sonifikation, taktile Vorlagen oder visuelle Fassungen.

Damit würde eine fachliche Prüfung nicht für jedes Ausgabeformat von vorne beginnen.

### 5. Qualitäts- und Konsistenzprüfung

Automatische Checks könnten fehlende Elemente, Widersprüche, ungeklärte Unsicherheiten oder Inkonsistenzen zwischen Repräsentationen markieren. Sie ersetzen keine fachliche Freigabe, könnten sie aber gezielter machen.

## P2: Produktions- und Integrationsdienste nach stabilem Kern

Fünf weitere Dienste adressieren den professionellen Betrieb:

- **Batch- und Auftragsverarbeitung** für umfangreiche Materialpakete,
- **Semantic Diff** zum gezielten Vergleich neuer Auflagen,
- **Wiederverwendungs- und Katalogdienst** für vorhandene Umsetzungen,
- **Nutzer- und Ausgabeprofile** für Notation, Detailtiefe und Hilfsmittelkontext,
- **API- und LMS-Integration** für institutionelle Workflows.

Gerade Wiederverwendung und Versionsvergleich folgen direkt aus heutigen Prozessen: Einrichtungen recherchieren bereits vorhandene Umsetzungen, und Kataloge wie Sehkon sollen Doppelproduktionen vermeiden.

## P3: Spezialisierte oder spätere Dienste

Drei Optionen sind fachlich interessant, aber mit zusätzlicher Komplexität verbunden:

- ein **besonders geschützter Prüfungsmodus**,
- **semantikbasierte taktile Layoutoptimierung**,
- **interaktive semantische Exploration** komplexer Lernobjekte.

Diese Dienste könnten langfristig einen großen Nutzen haben, sollten aber nicht den Aufbau eines belastbaren semantischen Kerns verzögern.

## Wie wir Priorität später messen wollen

Eine zentrale Frage ist nicht nur, ob die Ausgaben „gut aussehen“, sondern ob Fachkräfte bei mindestens gleichbleibender Qualität produktiver arbeiten können.

Dafür kommen beispielsweise infrage:

- Bearbeitungszeit pro Seite, Grafik oder Aufgabe,
- Anteil automatisch übernommener Elemente,
- Zahl notwendiger Korrekturen,
- fachliche Fehlerquote,
- Zeit bis zur Freigabe,
- Wiederverwendungsquote,
- Zufriedenheit der Fachkräfte,
- Verständlichkeit für blinde und sehbehinderte Lernende.

Die eigentliche Forschungsfrage lautet damit nicht: **Kann KI ein Dokument umwandeln?** Sondern: **Kann semantische KI-Vorverarbeitung professionelle Medienaufbereitung messbar entlasten, ohne Korrektheit, didaktische Äquivalenz und Barrierefreiheit zu verschlechtern?**

## Was wir von Praxispartnern brauchen

Die Priorisierung ist absichtlich offen für Korrektur. Besonders wertvoll wären Rückmeldungen dazu, welche P1-Bausteine tatsächlich Zeit sparen würden, wo bestehende Werkzeuge bereits ausreichend sind und welche Anforderungen ein Prototyp erfüllen müsste, damit er in einem realistischen Produktionsablauf getestet werden kann.
