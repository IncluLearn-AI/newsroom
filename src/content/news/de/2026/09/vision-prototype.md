---
translationKey: prep-2026-09-vision-prototype
locale: de
sourceLang: de
translationStatus: source
slug: vision-prototype-und-barrierefreie-de-en-demo-ausgebaut
title: "Was der IncluLearn.AI Vision Prototype heute tatsächlich zeigt"
summary: "Der öffentliche Prototyp zeigt nicht die fertige KI-Pipeline, sondern ein frühes Arbeitsmodell für Materialien, Review, Freigaben und barrierefreie Nutzung. Entscheidend sind Nutzerziele, Accessibility-first, DE/EN und eine klare Trennung zwischen Demo und bereits realer Funktion."
publishedAt: 2026-09-22T17:07:00+02:00
updatedAt: 2026-09-23T08:30:00+02:00
event:
  start: 2026-09-17
  end: 2026-09-22
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Die Oberfläche wird nach Nutzerzielen wie Material bearbeiten, prüfen, teilen und finden strukturiert – nicht nach OCR-, VLM- oder Modellnamen."
  - "Accessibility und DE/EN sind technische Grundlagen des Prototyps: semantisches HTML, Tastaturbedienung, sichtbarer Fokus, Reflow und sprachabhängige UI-Texte werden von Beginn an mitgeführt."
  - "Der aktuelle öffentliche Stand verwendet synthetische Demo-Daten; produktive Verarbeitung, echte Persistenz, Authentifizierung und die geplante Backend-/Worker-Architektur sind noch nicht angebunden."
  - "Der Prototyp ist evolutionär angelegt: Navigation, Domänenbegriffe und UI-Komponenten sollen in die spätere Plattform überführt werden, wenn sie sich in der Validierung bewähren."
openQuestions:
  - "Verstehen Medienzentren, Lehrende und Lernende die gewählten Begriffe und nächsten Schritte ohne technisches Vorwissen?"
  - "Welche Teile des heutigen Demo-Workflows sollten vor der Backend-Anbindung noch mit Praxispartnern vereinfacht oder umgestellt werden?"
partnerQuestions:
  - "Welche Information muss für Sie auf einer Materialseite sofort sichtbar sein, damit Sie wissen, was geprüft ist und was als Nächstes zu tun ist?"
  - "Welche Begriffe aus Ihrem Arbeitsalltag sollten wir verwenden – und welche wirken trotz fachlicher Korrektheit zu technisch?"
related:
  - prep-2026-09-ai-governance
  - prep-2026-09-infrastructure
  - prep-2026-09-processing-tts
dossiers:
  - prep-2026-09
tags:
  - Vision Prototype
  - Accessibility
  - Internationalisierung
  - UX
  - Human Review
authors: []
evidence: project-source
sources:
  - title: "IncluLearn.AI Vision Prototype"
    url: "https://inclulearn-test.owli-ai.com/"
    kind: official-primary
aiAssisted: true
featured: true
draft: false
---

## Kurz gesagt

Der Vision Prototype soll früh sichtbar machen, **wie sich IncluLearn.AI für Menschen anfühlen könnte**, bevor die eigentliche KI- und Dateninfrastruktur vollständig angebunden ist.

Er ist deshalb weder eine statische Mockup-Sammlung noch bereits das fertige Produkt. Die Oberfläche ist als evolutionäre Grundlage angelegt: Navigation, Begriffe, Accessibility-Bausteine, DE/EN-Struktur und wiederverwendbare Komponenten sollen weiterverwendet werden, wenn sie sich in Tests bewähren.

Gleichzeitig gilt eine klare Grenze: Die derzeit sichtbaren Materialien, Jobs, Nutzer und fachlichen Ergebnisse sind Demo-Daten. Der Prototyp darf nicht so gelesen werden, als sei die gesamte Verarbeitungskette bereits produktiv.

## Nicht „welches KI-Modell?“, sondern „was möchte ich mit meinem Material tun?“

Eine zentrale Produktentscheidung ist, technische Pipelinebegriffe aus der Hauptnavigation herauszuhalten.

Nutzende sollen nicht zuerst zwischen OCR, VLM, Embeddings, Sonifikation oder einzelnen Modellen wählen müssen. Im Vordergrund stehen Aufgaben wie:

- Materialien öffnen und weiterbearbeiten,
- Ergebnisse fachlich prüfen,
- freigegebene Fassungen bereitstellen,
- geteilte Inhalte finden,
- später geeignete Ausgaben erzeugen.

Technische Details können für Fachpersonen wichtig sein, sollen aber progressiv eingeblendet werden und nicht die Einstiegshürde bestimmen.

Das ist besonders relevant für Medienzentren und Lehrende, deren Fachkompetenz nicht voraussetzt, dass sie KI-Architekturen oder Prompting beherrschen.

## Der Prototyp zeigt bereits drei getrennte Statusideen

Aus dem UX-Konzept ergibt sich eine für IncluLearn.AI wichtige Trennung:

1. **Verarbeitung:** Wurde das Material technisch aufbereitet?
2. **fachliche Prüfung:** Ist die erkannte Semantik tatsächlich geprüft?
3. **Zugriff/Bereitstellung:** Wer darf welche Version sehen oder verwenden?

Diese Ebenen sollen nicht in einem einzigen grünen „fertig“-Status verschwinden.

Ein automatisch erzeugtes Ergebnis kann technisch abgeschlossen und trotzdem fachlich ungeprüft sein. Eine fachlich bestätigte Inhaltsversion ist wiederum nicht automatisch veröffentlicht oder für alle freigegeben.

Diese Unterscheidung ist eng mit der AI Governance des Projekts verknüpft.

## Accessibility ist keine spätere Nachrüstung

Der Web-Prototyp wird mit Accessibility als technischer Grundanforderung entwickelt. Dazu gehören unter anderem:

- semantisches HTML vor zusätzlichem ARIA,
- vollständige Tastaturbedienbarkeit,
- sichtbarer und nicht verdeckter Fokus,
- Statusinformationen nicht nur über Farbe,
- Reflow und Zoom ohne Verlust zentraler Funktionen,
- reduzierte Bewegung,
- klare und lokalisierte Systembegriffe.

Deutsch ist Referenzsprache, Englisch wird in den Kernansichten strukturell mitgeführt. Weitere Sprachen sollen später ergänzt werden können, ohne die Informationsarchitektur neu aufzubauen.

## Ein synthetischer Workflow statt vieler isolierter Screens

Die Demo verbindet inzwischen mehrere Ansichten zu einem Beispielablauf. Dazu gehört auch ein konkreter semantischer Demo-Ausschnitt, der zeigt, wie erkannte Struktur später prüfbar dargestellt werden könnte.

Wichtig ist die Formulierung „könnte“: Der sichtbare Ablauf ist eine **Produkt- und UX-Hypothese**, die Feedback ermöglichen soll. Er ist noch keine Aussage darüber, dass die gesamte fachliche Verarbeitung technisch fertig ist.

Das zugrunde liegende UI-Konzept geht noch weiter und beschreibt beispielsweise einen geführten Einstieg „Material aufbereiten“, klare nächste Schritte, Reviewaufgaben und eine Materialseite als verlässlichen Wiedereinstieg. Teile davon sind Zielbild und noch nicht vollständig implementiert.

## Was noch nicht produktiv vorhanden ist

Die Plattformdokumentation nennt mehrere Komponenten ausdrücklich als **geplant**:

- FastAPI-Backend,
- Worker für asynchrone Verarbeitung,
- PostgreSQL und Object Storage,
- produktive authentik/OIDC-Anbindung,
- versionierte Semantikschemata,
- produktive Processing-Service-Orchestrierung.

Auch die aktuelle Webanwendung nutzt Demo-Fixtures noch direkter, als es für die spätere Produktplattform vorgesehen ist. Vor produktiver Persistenz soll deshalb eine stabilere Datenzugriffsschicht eingezogen werden.

## Warum der Prototyp für Beirat und Partner wichtig ist

Gerade weil die Backendfunktionalität noch nicht fertig ist, können Navigation, Begriffe und Arbeitsabläufe jetzt vergleichsweise günstig verändert werden.

Für Beirat, Medienzentren, Lehrende und blinde/sehbehinderte Fachkräfte ist daher nicht nur die Frage interessant, ob die Demo „gut aussieht“. Wertvoller sind Rückmeldungen wie:

- Ist jederzeit klar, was schon geprüft wurde?
- Ist der nächste sinnvolle Schritt verständlich?
- Werden technische Begriffe unnötig vorausgesetzt?
- Ist Review auch nicht-visuell vollständig möglich?
- Sind Teilen, fachliche Freigabe und Veröffentlichung klar genug getrennt?

Solches Feedback kann die Plattformstruktur verändern, bevor sie durch Backend und produktive Datenmodelle schwerer beweglich wird.
