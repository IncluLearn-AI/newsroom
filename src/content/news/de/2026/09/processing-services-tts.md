---
translationKey: prep-2026-09-processing-tts
locale: de
sourceLang: de
translationStatus: source
slug: service-architektur-und-erster-tts-vertrag-vorbereitet
title: "Service-Architektur und erster TTS-Vertrag vorbereitet"
summary: "Für eigenständige Verarbeitungsdienste wurde eine Integrationsschicht angelegt; der erste TTS-Service besitzt bereits einen engine-neutralen API-Vertrag, ist aber noch nicht produktiv integriert."
publishedAt: 2026-09-22T17:08:00+02:00
event:
  start: 2026-09-22
projectPhase: preparation
retroactive: true
category: project-progress
format: article
dossiers:
  - prep-2026-09
tags:
  - Processing Services
  - Text-to-Speech
  - API
authors: []
evidence: project-source
sources: []
aiAssisted: true
featured: false
draft: false
---

## Modulare Verarbeitungsdienste

Für spätere Verarbeitungsschritte von IncluLearn.AI wurde eine eigene Integrations- und Organisationsschicht vorbereitet. Die eigentlichen Dienste sollen in getrennten Repositories mit klaren API- und Verantwortungsgrenzen entwickelt werden.

Diese Trennung soll verhindern, dass Weboberfläche, Host-Infrastruktur und einzelne KI- oder Medienverarbeitungsdienste zu früh eng miteinander gekoppelt werden.

## Erster Dienst: Text to Speech

Als erster eigenständiger Dienst wurde ein TTS-Service vorbereitet. Er enthält eine Python-3.12-Basis und einen engine-neutralen FastAPI-v1-Vertrag mit ephemeren Jobs. Die API ist damit bewusst nicht an ein bestimmtes Sprachmodell oder eine bestimmte TTS-Engine gebunden.

Privacy by Default ist Teil der Leitlinien: Eingabetexte und erzeugtes Audio sollen nicht standardmäßig dauerhaft gespeichert oder vollständig geloggt werden.

## Was noch nicht vorhanden ist

Der Dienst besitzt noch **keine produktive TTS-Engine**, keinen produktiven Qwen3-TTS-Container und keine Modellgewichte. Auch die serviceübergreifende Integrationsschicht enthält noch keinen produktiv integrierten Processing-Stack.

Die Vorbereitung definiert damit zunächst Schnittstellen und Verantwortungsgrenzen – nicht den Abschluss einer TTS-Funktion.
