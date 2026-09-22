---
translationKey: prep-2026-09-infrastructure
locale: de
sourceLang: de
translationStatus: source
slug: reproduzierbare-infrastruktur-und-testzugang-vorbereitet
title: "Reproduzierbare Infrastruktur und Testzugang vorbereitet"
summary: "Die Projekt-VM wurde als versionierter Sollzustand strukturiert, mit reproduzierbarer Systemkonfiguration, Performance-Baseline und einem abgesicherten öffentlichen Testzugang."
publishedAt: 2026-09-22T17:02:00+02:00
event:
  start: 2026-09-10
  end: 2026-09-12
projectPhase: preparation
retroactive: true
category: project-progress
format: article
dossiers:
  - prep-2026-09
tags:
  - Infrastruktur
  - Reproduzierbarkeit
  - Deployment
authors: []
evidence: project-source
sources: []
aiAssisted: true
featured: false
draft: false
---

## Infrastruktur als versionierter Sollzustand

Die technische Basis von IncluLearn.AI wurde so vorbereitet, dass Änderungen an der Projekt-VM möglichst reproduzierbar über Infrastructure as Code, Container und versionierte Skripte erfolgen können. Dazu gehören eine Ansible-Struktur, eine Docker-Basis und Werkzeuge für reproduzierbare Systemtests.

Eine erste Performance-Baseline dokumentiert CPU-, Speicher- und Storage-Eigenschaften der bereitgestellten Umgebung. Zusätzlich wurde eine lokale Umgebung für KI-Modelle vorbereitet, ohne daraus bereits eine produktive Modellarchitektur abzuleiten.

## Öffentlicher Testzugang ohne offene Serverports

Für die spätere Demonstration wurde ein externer Testzugang über einen ausgehenden Tunnel vorbereitet. Der Webdienst bleibt dabei auf der VM lokal gebunden; die Produktivdomain wurde nicht vorzeitig umgestellt.

## Einordnung

Die Vorbereitung schafft eine überprüfbare technische Ausgangsbasis. Konkrete Zugangsdaten, interne Sicherheitsdetails und administrative Konten werden im öffentlichen Newsroom bewusst nicht dokumentiert.
