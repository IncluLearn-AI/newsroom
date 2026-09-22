---
translationKey: prep-2026-09-demo-deployment
locale: de
sourceLang: de
translationStatus: source
slug: automatisierten-demo-deploymentpfad-vorbereitet
title: "Automatisierten Demo-Deploymentpfad vorbereitet"
summary: "Zwischen Anwendung und VM wurde ein reproduzierbarer Deploymentpfad für die Test-Demo vorbereitet, einschließlich klarer Repository-Grenzen, Runner und Sicherheits-Gates."
publishedAt: 2026-09-22T17:09:00+02:00
event:
  start: 2026-09-17
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: brief
dossiers:
  - prep-2026-09
tags:
  - Deployment
  - CI/CD
  - Sicherheit
authors: []
evidence: project-source
sources:
  - title: "IncluLearn.AI Vision Prototype"
    url: "https://inclulearn-test.owli-ai.com/"
    kind: official-primary
aiAssisted: true
featured: false
draft: false
---

Für die öffentliche Test-Demo wurde ein automatisierter Deploymentpfad zwischen dem Plattform-Repository und der Projekt-VM vorbereitet.

Dabei wurden die Verantwortungsgrenzen bewusst getrennt: Die Anwendung besitzt Build, Container-Image und anwendungsbezogene Deploymentlogik; die VM-Dokumentation besitzt Host-Sollzustand, Laufzeitumgebung, Tunnel und den Self-hosted Runner.

Zusätzlich wurden Sicherheits-Gates für den späteren produktiven Pfad dokumentiert. Rollback der Anwendung und Wiederherstellung von Daten werden dabei als unterschiedliche Aufgaben behandelt.

Der aktuelle Pfad dient zunächst der **Test-Demo**. Die Vorbereitung soll ermöglichen, spätere Änderungen reproduzierbar zu bauen, zu prüfen und auszurollen, ohne daraus bereits einen produktiven Betriebsstatus abzuleiten.
