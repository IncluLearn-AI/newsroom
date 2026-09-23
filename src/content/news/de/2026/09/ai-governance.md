---
translationKey: prep-2026-09-ai-governance
locale: de
sourceLang: de
translationStatus: source
slug: ai-governance-und-human-review-aufgebaut
title: "KI darf vorbereiten – aber nicht selbst freigeben: vier Governance-Regeln für IncluLearn.AI"
summary: "IncluLearn.AI trennt KI-Beteiligung, fachliche Prüfung und Freigabe bewusst voneinander. Human Owner, abgestufter Review, nachvollziehbare Provenienz und vorsichtige Datenklassifikation sollen KI-Unterstützung nutzbar machen, ohne Verantwortung an das System abzugeben."
publishedAt: 2026-09-22T17:04:00+02:00
updatedAt: 2026-09-23T08:31:00+02:00
event:
  start: 2026-09-13
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Entstehung und Prüfstatus sind zwei getrennte Dimensionen: Ein KI-generierter Inhalt kann später menschlich verifiziert sein, bleibt aber als KI-generiert nachvollziehbar."
  - "KI-Systeme und Agenten dürfen ihren eigenen Output niemals selbst als VERIFIZIERT oder FREIGEGEBEN einstufen."
  - "Human Review ist risikobasiert: Plausibilisieren, Verifizieren und Freigeben haben unterschiedliche Prüftiefen und Zwecke."
  - "Persönliche Ausgabe- und Accessibility-Präferenzen sind keine Berechtigungsrollen und dürfen nicht automatisch als medizinische Diagnose interpretiert werden."
openQuestions:
  - "Welche Reviewtiefe ist für welche Artefaktklasse und Nutzungssituation angemessen, ohne professionelle Aufbereitung unnötig zu verlangsamen?"
  - "Wie kann Provenienz in der späteren Plattform verständlich sichtbar werden, ohne Nutzende mit technischen Metadaten zu überfrachten?"
partnerQuestions:
  - "Welche Informationen benötigen Sie, um einer KI-vorbereiteten fachlichen Darstellung vertrauen und sie effizient prüfen zu können?"
  - "Wo sollte in Ihrem Arbeitsablauf eine menschliche Freigabe zwingend bleiben, selbst wenn automatische Qualitätschecks sehr gut werden?"
related:
  - prep-2026-09-vision-prototype
  - prep-2026-09-requirements
  - prep-2026-09-service-priorities
dossiers:
  - prep-2026-09
tags:
  - AI Governance
  - Human Review
  - Provenienz
  - Datenklassifikation
  - Verantwortung
authors: []
evidence: project-source
sources: []
aiAssisted: true
featured: true
draft: false
---

## Kurz gesagt

IncluLearn.AI möchte KI weitgehend für Recherche, Vorverarbeitung, Strukturierung und Generierung nutzen. Die Verantwortung für fachlich relevante Ergebnisse soll dadurch aber nicht unsichtbar an ein Modell oder einen Agenten übergehen.

Die Governance setzt deshalb nicht primär auf ein pauschales „KI erlaubt“ oder „KI verboten“, sondern auf vier praktische Regeln: **Verantwortung zuordnen, KI-Beteiligung sichtbar machen, Reviewtiefe nach Risiko wählen und Daten ihrem Schutzbedarf entsprechend behandeln.**

## Regel 1: KI-Beteiligung und Prüfstatus sind nicht dasselbe

Die Governance unterscheidet zunächst, **wie** ein Artefakt entstanden ist:

- menschlich,
- KI-assistiert,
- KI-generiert,
- durch einen KI-Agenten.

Davon getrennt wird dokumentiert, **wie weit ein Mensch den Inhalt geprüft hat**:

- ungeprüft,
- plausibilisiert,
- verifiziert,
- für einen bestimmten Zweck freigegeben.

Das verhindert eine häufige Vermischung. Ein Inhalt kann stark KI-generiert und trotzdem sorgfältig menschlich verifiziert sein. Umgekehrt ist ein rein menschlicher Entwurf nicht automatisch fachlich freigegeben.

Für spätere Lernmaterialien ist diese Trennung besonders wichtig: Herkunft und Qualitätsstatus beantworten unterschiedliche Fragen.

## Regel 2: Ein System darf sich nicht selbst freigeben

Für alle IncluLearn.AI-Agenten gilt eine klare Grenze: Sie dürfen den eigenen Output nicht selbst als `VERIFIZIERT` oder `FREIGEGEBEN` einstufen.

Automatische Tests, Schema-Checks oder Konsistenzprüfungen können wichtige Evidenz liefern. Sie simulieren aber keinen Human Review.

Für Außenveröffentlichung, produktives Deployment, Änderungen an Rechten oder Security-Regeln und andere folgenreiche Aktionen ist eine konkrete menschliche Freigabe vorgesehen.

Diese Logik spiegelt sich bereits im Newsroom wider: Der Agent kann Beiträge recherchieren und als Draft-PR vorbereiten; die Veröffentlichung erfolgt erst nach menschlicher Freigabe.

## Regel 3: Reviewtiefe richtet sich nach Zweck und Risiko

„Human Review“ bedeutet nicht einfach, dass jemand den Text einmal gelesen hat.

Die Governance unterscheidet:

### Plausibilisiert

Geeignet für interne Arbeitsstände. Geprüft wird insbesondere auf offensichtliche fachliche oder logische Fehler und auffällige Halluzinationen.

### Verifiziert

Für fachlich relevante Nutzung. Je nach Inhalt werden beispielsweise Fakten gegen Originalquellen geprüft, Berechnungen nachvollzogen, Code getestet oder bei barrierefreien Repräsentationen semantische Äquivalenz und Nutzbarkeit kontrolliert.

### Freigegeben

Freigabe gilt für einen **bestimmten Zweck** – etwa interne Pilotierung, Lehre oder Publikation. Sie ist nicht automatisch auf andere Verwendungen übertragbar.

Das ist auch für die spätere Plattform wichtig: „fachlich freigegeben“ und „öffentlich bereitgestellt“ müssen unterschiedliche Zustände bleiben.

## Regel 4: Persönliche Accessibility-Präferenzen sind sensible Kontextdaten, keine Rollen

IncluLearn.AI soll später individuelle Ausgabeformen unterstützen können: etwa bevorzugte Mathematiknotation, Detailtiefe, Screenreader-/Braille-bezogene Einstellungen oder Audio-/Tastwünsche.

Die Governance legt dafür bewusst fest:

- Solche Präferenzen sind **keine Berechtigungsrollen**.
- Sie sollen nicht als medizinische Diagnose modelliert werden.
- Sobald sie einem identifizierbaren Konto zugeordnet sind, sind sie personenbezogener Kontext.
- Ob dabei besondere Kategorien personenbezogener Daten berührt werden, hängt vom tatsächlichen Inhalt und Nutzungskontext ab und muss separat geprüft werden.
- Institutionelle Administrator*innen sollen persönliche Ausgabeprofile nicht automatisch einsehen können.

Damit wird vermieden, Barrierefreiheit ausgerechnet durch unnötige medizinische Klassifikation oder überbreite Zugriffsrechte zu erkaufen.

## Datenklassen helfen bei der Wahl geeigneter KI-Dienste

Die Projekt-Governance unterscheidet vier grundlegende Schutzklassen:

- **PUBLIC** – für öffentliche oder rechtmäßig veröffentlichte Inhalte,
- **INTERNAL** – projektinterne Inhalte ohne besondere Vertraulichkeit,
- **CONFIDENTIAL** – etwa unveröffentlichte Forschung, Partnerinformationen oder sensible interne Architektur,
- **RESTRICTED** – besonders schutzbedürftige Daten mit hohem Schadenspotenzial.

Bei unklarer Klassifikation gilt zunächst die strengere plausible Klasse.

Das ist praktisch relevant, weil ein leistungsfähiger externer KI-Dienst nicht automatisch für jede Datenklasse geeignet ist. Eine modulare Architektur kann deshalb lokale und externe Komponenten je nach Zweck und Schutzbedarf unterschiedlich einsetzen.

## Provenienz soll Review effizienter machen

Provenienz bedeutet hier nicht, jede technische Einzeloperation prominent in der UI anzuzeigen.

Wichtig ist, dass sich bei relevanten Ergebnissen nachvollziehen lässt:

- welche Quelle und Version zugrunde lag,
- welche KI oder welcher Agent beteiligt war,
- welche maschinellen Schritte oder Regeln angewendet wurden,
- welche Version ein Mensch geprüft hat,
- für welchen Zweck sie freigegeben wurde.

Gerade wenn später mehrere Ausgabeformen aus derselben Semantik entstehen, kann diese Nachvollziehbarkeit helfen, Korrekturen nicht mehrfach durchführen zu müssen.

## Governance soll Forschung ermöglichen, nicht blockieren

Die Dokumentation ist ausdrücklich projektspezifisch und ersetzt keine verbindlichen THM-Vorgaben oder fachrechtliche Prüfung.

Ihr Ziel ist pragmatisch: Dort mehr Dokumentation und Kontrolle einzusetzen, wo Einfluss, Autonomie, Personenbezug, Außenwirkung oder möglicher Schaden steigen – und einfache Hilfstätigkeiten nicht unnötig zu bürokratisieren.

Für IncluLearn.AI ist damit eine zentrale Produktfrage verbunden: **Wie viel Automatisierung können wir nutzen, während die Stellen menschlicher Verantwortung jederzeit sichtbar und handhabbar bleiben?**
