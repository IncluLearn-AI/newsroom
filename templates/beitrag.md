---
translationKey: example-editorial-key
locale: de
sourceLang: de
translationStatus: source
slug: kurzer-stabiler-slug
title: "Ergebnisorientierter, informativer Titel"
summary: "1–2 Sätze mit der wichtigsten Erkenntnis oder Entwicklung – nicht nur der Beschreibung, dass etwas bearbeitet wurde."
publishedAt: 2026-09-23T12:00:00+02:00
event:
  start: 2026-09-20
  end: 2026-09-22
projectPhase: preparation
retroactive: false
category: project-progress
format: article
dossiers: []
tags:
  - Beispiel
authors: []
evidence: editorial-analysis
sources:
  - title: "Titel der öffentlichen Primärquelle"
    url: "https://example.org/"
    kind: official-primary
aiAssisted: true
featured: false
draft: true
---

> Vorlage für einen substanziellen `article`. Nicht jeder Abschnitt muss bei jedem Thema verwendet werden. Ein `brief` darf deutlich kürzer sein.

## Kurz gesagt

2–4 Sätze: Was sollten Projektmitglieder, Beirat oder externe Fachleute nach kurzer Lektüre verstanden haben?

## Ausgangsfrage und Kontext

Welche fachliche Frage, welches Problem oder welches konkrete Ergebnis ist Gegenstand des Beitrags?

Nicht mit Commit-, PR- oder Repository-Aktivität beginnen, wenn bereits inhaltliche Ergebnisse vorliegen.

## Was haben wir herausgefunden oder erreicht?

Konkrete Befunde, Ergebnisse oder Entscheidungen. Zahlen und externe Tatsachenbehauptungen mit öffentlichen Quellen belegen.

Bei Projektbeiträgen: die tatsächlich relevanten Fachartefakte auswerten; nicht lediglich Commit-Titel paraphrasieren.

## Warum ist das für IncluLearn.AI relevant?

Konkreter Bezug zu Forschungsfrage, Nutzerbedarf, Anforderung, Architektur, Evaluation oder Transfer.

## Evidenz, Grenzen und Validierungsstand

Was ist belastbar belegt? Was ist noch Hypothese, Entwurf, Preprint-Befund oder redaktionelle Ableitung? Welche Generalisierung ist noch nicht zulässig?

## Offene Fragen

Nur wenn inhaltlich sinnvoll: Welche Fragen müssen im Projekt noch beantwortet werden?

## Wo Partnerfeedback hilfreich ist

Optional: konkrete Fragen an Beirat, Medienzentren, Praxispartner oder Projektteam. Keine allgemeine Call-to-Action ohne fachlichen Anlass.

## Nächste Konsequenz für das Projekt

Welche nächste Untersuchung, Validierung, technische Entscheidung oder Transferaktivität ergibt sich? Keine künstliche Handlungsempfehlung erzwingen.

---

### Redaktionelle Notiz

- `brief`: für einen klaren, eigenständig relevanten Sachverhalt; diese Langform nicht künstlich ausfüllen.
- `article`: konkrete Ergebnisse + Einordnung.
- `digest`: mehrere Entwicklungen synthetisieren, nicht nur auflisten.
- Dossier: kuratierter Einstieg mit eigener Synthese.

Für die englische Fassung wird eine separate Datei unter `src/content/news/en/...` mit derselben `translationKey` angelegt. Automatisch vorbereitete Fassungen verwenden `translationStatus: machine` und `sourceVersionHash`.
