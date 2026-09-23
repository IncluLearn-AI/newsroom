---
translationKey: prep-2026-09-processing-tts
locale: de
sourceLang: de
translationStatus: source
slug: service-architektur-und-erster-tts-vertrag-vorbereitet
title: "TTS als erster modularer Dienst: API und Qwen-Adapter stehen, Produktintegration noch nicht"
summary: "Der erste eigenständige Processing Service zeigt das Architekturprinzip von IncluLearn.AI: eine engine-neutrale TTS-API mit ephemeren Jobs, Privacy by Default und einem fest versionierten Qwen3-TTS-Adapter. Ein produktiv integrierter Sprachdienst oder GPU-qualifizierter Betrieb ist das noch nicht."
publishedAt: 2026-09-22T17:08:00+02:00
updatedAt: 2026-09-23T08:33:00+02:00
event:
  start: 2026-09-22
  end: 2026-09-22
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Der HTTP-Vertrag bleibt engine-neutral: Clients senden Text, Sprache und optional ein neutrales Voice-Profil, aber keine Modellnamen, Speaker-IDs oder Samplingparameter."
  - "Ein Qwen3-TTS-CustomVoice-Adapter ist inzwischen vorhanden und auf eine feste Modellrevision gepinnt; Modellgewichte liegen nicht im Repository und Downloads sind nicht stillschweigend aktiviert."
  - "Jobs und Audio sind im aktuellen v1-Entwurf bewusst ephemer; Request-Texte und Audios sollen nicht standardmäßig dauerhaft gespeichert oder vollständig geloggt werden."
  - "Der Dienst ist noch nicht produktiv integriert: Es gibt noch keinen freigegebenen öffentlichen Servicebetrieb, keine produktive Authentifizierung und keine auf realer GPU qualifizierte CUDA-Konfiguration."
  - "TTS-Qualität soll nicht nur an Natürlichkeit gemessen werden, sondern auch an Fachbegriffen, Zahlen, Einheiten, Variablennamen und technisch vorbereiteten Sprechtexten."
openQuestions:
  - "Welche TTS-Engine liefert für deutsch-/englischsprachige MINT-Inhalte die beste Kombination aus Verständlichkeit, Reproduzierbarkeit und Betriebsaufwand?"
  - "Wie sollten Mathematik, Variablennamen, Einheiten und Fachtermini für Sprachsynthese semantisch vorbereitet werden?"
  - "Welche Audiofunktionen brauchen Lernende tatsächlich: lineare Ausgabe, Navigation, segmentierte Wiedergabe oder Kombinationen mit strukturiertem Text?"
partnerQuestions:
  - "Welche Aussprachefehler bei technischen Lehrinhalten stören in Ihrer Praxis besonders stark?"
  - "Ist für Ihre Nutzung eine bestimmte Stimme wichtig, oder stehen Verständlichkeit, Navigation und konsistente Fachterminologie klar im Vordergrund?"
related:
  - prep-2026-09-infrastructure
  - prep-2026-09-service-priorities
  - prep-2026-09-vision-prototype
dossiers:
  - prep-2026-09
tags:
  - Processing Services
  - Text-to-Speech
  - API
  - Qwen3-TTS
  - Privacy by Default
authors: []
evidence: project-source
sources:
  - title: "Qwen3-TTS"
    url: "https://github.com/QwenLM/Qwen3-TTS"
    kind: vendor-project
  - title: "Qwen3-TTS-12Hz-0.6B-CustomVoice"
    url: "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice"
    kind: vendor-project
aiAssisted: true
featured: false
draft: false
---

## Kurz gesagt

Text to Speech ist der erste eigenständige Processing Service, an dem IncluLearn.AI das geplante Servicemodell konkret erprobt.

Der interessante Punkt ist dabei nicht nur, **dass** ein Sprachmodell angebunden werden kann. Wichtiger ist die Trennung zwischen einem stabilen fachlichen API-Vertrag und einer austauschbaren Engine.

Inzwischen existieren sowohl die engine-neutrale v1-API als auch ein Adapter für Qwen3-TTS-CustomVoice. Das ist mehr als der frühere reine Vertragsentwurf – aber noch kein produktiv integrierter Sprachdienst.

## Die API soll nicht wissen müssen, welches Modell dahintersteht

Der öffentliche Servicevertrag verwendet fachlich neutrale Eingaben:

- Text,
- explizite Sprache,
- optional ein neutrales Voice-Profil.

Nicht Teil des HTTP-Vertrags sind:

- konkrete Modellnamen,
- Qwen-Speaker-IDs,
- Samplingparameter,
- Voice-Prompts,
- Engine-spezifische Optionen.

Das ist eine bewusste Architekturentscheidung. Wenn später ein anderes TTS-System besser geeignet ist, soll die Plattform nicht überall Modellnamen und Spezialparameter austauschen müssen.

Die Engine bleibt eine Implementierungsentscheidung des Dienstes.

## Ephemere Jobs statt unbemerkter Datensammlung

Sprachsynthese kann länger dauern als ein normaler HTTP-Request. Deshalb arbeitet der v1-Vertrag mit Jobs: ein Auftrag wird angenommen, Status kann abgefragt und das fertige WAV-Audio später abgerufen werden.

Der aktuelle Entwurf ist bewusst **nicht persistent**:

- Eingabetext bleibt nur so lange im Prozess, wie er für die Verarbeitung benötigt wird,
- der Job-Eintrag speichert den Text nicht dauerhaft,
- Audio läuft nach einer begrenzten Zeit ab,
- ein Neustart verwirft Jobs und Ergebnisse,
- Jobantworten und Audio sollen nicht gecacht werden,
- Fehlerausgaben enthalten keine Eingabetexte oder internen Engine-Exceptions.

Für eine spätere Produktintegration können zusätzliche Anforderungen entstehen. Privacy by Default ist aber bereits Teil des Servicevertrags.

## Qwen3-TTS ist die erste Engine – nicht die Identität des Dienstes

Der Adapter verwendet derzeit **Qwen3-TTS-12Hz-0.6B-CustomVoice**.

Die Modellquelle und Revision werden fest gepinnt. Modellgewichte werden nicht in Git abgelegt, und der Service startet nicht automatisch einen unbemerkten Download. Standardmäßig wird ein bereits vorhandener lokaler Cache erwartet; Netzwerkdownload muss ausdrücklich erlaubt werden.

Auch die Sprecherzuordnung bleibt hinter neutralen Voice-Profilen verborgen.

Damit soll später reproduzierbar sein, **welche konkrete Modellversion** einen Benchmark oder ein Ergebnis erzeugt hat, ohne diesen Modellbezug in den langfristigen API-Vertrag einzubrennen.

## Was noch nicht als produktiv behauptet werden darf

Der aktuelle Stand bedeutet ausdrücklich nicht:

- dass TTS bereits in die Plattform integriert ist,
- dass der Dienst öffentlich erreichbar sein sollte,
- dass produktive Authentifizierung und Autorisierung vorhanden sind,
- dass CUDA auf der tatsächlichen Projekt-GPU qualifiziert wurde,
- dass Voice Cloning oder freie Voice-Design-Funktionen Bestandteil des Scopes sind,
- dass die aktuelle Engine bereits als Qualitätsgewinner feststeht.

Die Qwen-Konfiguration kann CUDA technisch adressieren; die aktuelle Dokumentation hält aber fest, dass diese Konfiguration noch nicht auf realer GPU qualifiziert wurde.

## Für MINT reicht „klingt natürlich“ als Qualitätsmaß nicht

Ein TTS-System für technische Lehre kann angenehm klingen und trotzdem fachlich schlecht nutzbar sein.

Deshalb sieht die Qualitätsplanung zusätzliche Dimensionen vor:

- deutsche Prosa,
- englische Fachtermini in deutschen Texten,
- Zahlen und Maßeinheiten,
- Abkürzungen,
- Variablennamen,
- technisch bzw. mathematisch vorbereitete Sprechtexte,
- Stabilität über längere Abschnitte,
- konsistente Stimme und Prosodie,
- nachvollziehbares Fehlerverhalten.

Spätere Benchmarks sollen außerdem Engineversion, Hardwarekontext, Eingabetextklasse, Cold/Warm Run, Synthesezeit, Audiolänge, Ressourcenverbrauch und relevante Inferenzparameter dokumentieren.

## Warum der Dienst für die Gesamtarchitektur interessant ist

TTS ist damit ein kleiner, aber konkreter Test für ein größeres Prinzip:

**Die Plattform orchestriert Nutzerziele; einzelne Processing Services kapseln spezialisierte Verarbeitung hinter stabilen Verträgen.**

Wenn dieses Prinzip funktioniert, können später andere Dienste – etwa Dokumentanalyse, Diagramminterpretation oder Ausgabeerzeugung – ähnlich modular angebunden werden.

Der derzeitige TTS-Stand ist deshalb vor allem ein **Architektur- und Qualitätsbaustein**, noch kein fertiges Produktfeature.
