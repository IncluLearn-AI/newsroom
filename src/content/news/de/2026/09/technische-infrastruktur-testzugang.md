---
translationKey: prep-2026-09-infrastructure
locale: de
sourceLang: de
translationStatus: source
slug: reproduzierbare-infrastruktur-und-testzugang-vorbereitet
title: "Warum Demo-Betrieb und Produktivbetrieb bewusst getrennt werden"
summary: "Die technische Basis von IncluLearn.AI wird reproduzierbar und in klaren Verantwortungsgrenzen aufgebaut. Die öffentliche Test-Demo kann automatisiert ausgerollt werden, bleibt aber bewusst von einem späteren produktiven Betrieb mit realen Daten und strengeren Sicherheitsanforderungen getrennt."
publishedAt: 2026-09-22T17:02:00+02:00
updatedAt: 2026-09-23T08:32:00+02:00
event:
  start: 2026-09-10
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Host-Infrastruktur, Anwendung und einzelne Processing Services besitzen getrennte technische Verantwortungsbereiche; dadurch sollen Änderungen nachvollziehbarer und Dienste austauschbarer bleiben."
  - "Die VM wird möglichst als reproduzierbarer Sollzustand verwaltet statt durch undokumentierte Handarbeit verändert."
  - "Der öffentliche Testzugang dient der Demo und ist kein Beleg für produktionsreife Daten-, Rechte- oder Sicherheitsprozesse."
  - "Für einen späteren Produktivpfad werden Anwendungs-Rollback, Datenwiederherstellung und die Vertrauensgrenze des Deployment-Runners getrennt betrachtet."
openQuestions:
  - "Welche Betriebs- und Wiederherstellungsanforderungen müssen vor ersten realen Pilotdaten verbindlich nachgewiesen sein?"
  - "Welche Processing Services benötigen lokale Ausführung, welche könnten später unter passenden Datenschutzbedingungen extern betrieben werden?"
partnerQuestions:
  - "Welche Anforderungen an Verfügbarkeit, Wiederherstellung oder institutionelle Integration sind für einen realistischen Pilot in Ihrer Einrichtung unverzichtbar?"
related:
  - prep-2026-09-vision-prototype
  - prep-2026-09-processing-tts
  - prep-2026-09-ai-governance
dossiers:
  - prep-2026-09
tags:
  - Infrastruktur
  - Reproduzierbarkeit
  - Deployment
  - Sicherheit
  - Zuständigkeitsgrenzen
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

## Kurz gesagt

Für Außenstehende ist die technische Infrastruktur vor allem dann relevant, wenn sie eine fachliche Eigenschaft ermöglicht: **Änderungen sollen reproduzierbar sein, Testbetrieb soll nicht mit produktivem Betrieb verwechselt werden und Sicherheits- bzw. Wiederherstellungsfragen sollen nicht erst nach dem ersten echten Datenproblem geklärt werden.**

Deshalb werden Host, Anwendung und Verarbeitungsdienste bewusst getrennt organisiert.

## Drei Ebenen mit unterschiedlichen Verantwortungen

Die derzeitige Architektur trennt:

### Host- und Basisinfrastruktur

Die Projekt-VM stellt Betriebssystem, Container-Runtime, Netzwerkgrundlagen, Tunnel, Runner und Host-Security bereit. Dieser Sollzustand wird möglichst über Ansible, Docker Compose und versionierte Skripte beschrieben.

### Anwendung

Die Web-Plattform besitzt ihren Quellcode, den Container-Build, die Demo-Compose-Definition und anwendungsbezogene Deploymentlogik.

### Processing Services

Eigenständige Verarbeitungsdienste – beispielsweise Text to Speech – besitzen jeweils ihren eigenen Code, API-Vertrag, Tests und später ihre Container. Eine separate Integrationsschicht soll nur tatsächlich gemeinsam integrierte Versionen und serviceübergreifende Tests koordinieren.

Diese Grenzen sind nicht nur organisatorische Ordnung. Sie sollen verhindern, dass beispielsweise ein neues TTS-Modell Änderungen an der Weboberfläche oder Host-Konfiguration erzwingt, obwohl der fachliche API-Vertrag gleich bleibt.

## Reproduzierbarer Sollzustand statt „funktioniert auf diesem Server“

Die VM-Dokumentation verfolgt das Prinzip, Konfiguration möglichst als Code oder versionierte Beschreibung festzuhalten.

Dazu gehören unter anderem:

- Docker-Basis und Systemkonfiguration,
- reproduzierbare Performance-Baselines,
- lokale Modell-Laufzeit,
- Diagnose- und Betriebswerkzeuge,
- Test-Deployment-Infrastruktur.

Der Nutzen ist weniger spektakulär als ein neues KI-Feature, aber langfristig wichtig: Wenn eine Änderung Probleme verursacht, soll nachvollziehbar sein, **was** verändert wurde und wie ein definierter Zustand wiederhergestellt werden kann.

## Die öffentliche Demo ist absichtlich nur ein Testpfad

Der Vision Prototype ist öffentlich erreichbar. Die eigentliche Webanwendung läuft dabei auf einem lokal gebundenen Origin; der externe Zugriff erfolgt über einen ausgehenden Tunnel.

Für die redaktionelle Einordnung ist aber wichtiger als die konkrete Netzwerktechnik: **Dieser Pfad ist für die Test-Demo gebaut.**

Er enthält keine Aussage, dass bereits alle Anforderungen für reale Nutzer- oder Prüfungsdaten erfüllt sind. Insbesondere produktive Authentifizierung, vollständige Backend-Persistenz und die späteren Verarbeitungsdienste sind noch nicht als Gesamtsystem integriert.

## Deployment ist deshalb kein eigener Projekterfolg

Der bisherige Newsroom hatte den automatisierten Demo-Deploymentpfad als separate Meldung geführt. Redaktionell ist das zu technisch kleinteilig.

Sinnvoller ist die Einordnung als Teil derselben Infrastrukturentscheidung: Anwendung und Host besitzen getrennte Zuständigkeiten; Änderungen an der Demo können automatisiert gebaut, geprüft und ausgerollt werden, ohne manuelle Einzelaktionen zum normalen Betriebsmodell zu machen.

Für einen späteren produktiven Pfad reicht das allein nicht.

## Rollback ist nicht dasselbe wie Datenwiederherstellung

Ein wichtiger vorbereitender Punkt ist die Trennung zwischen:

- **Anwendungs-Rollback:** eine fehlerhafte Softwareversion zurücksetzen,
- **Daten-Restore:** gespeicherte Daten nach Verlust oder Beschädigung wiederherstellen.

Beides benötigt andere Nachweise und Tests.

Solange der Vision Prototype mit synthetischen Demo-Daten arbeitet, ist dieses Risiko begrenzt. Vor produktiven Daten wird es zu einer zentralen Betriebsanforderung.

## Der Deployment-Runner ist eine eigene Vertrauensgrenze

Automatisiertes Deployment bedeutet, dass ein Runner Änderungen auf die Zielumgebung ausrollen darf. Damit wird dieser Runner selbst sicherheitsrelevant.

Die Infrastrukturplanung behandelt ihn deshalb nicht einfach als bequemes CI-Werkzeug, sondern als eigene Vertrauensgrenze, die vor produktivem Betrieb angemessen abgesichert und überprüft werden muss.

Konkrete interne Sicherheitsdetails werden im öffentlichen Newsroom bewusst nicht veröffentlicht.

## Warum diese technische Arbeit für Partner relevant ist

Medienzentren, Hochschulen und andere Einrichtungen interessieren sich zu Recht weniger dafür, welches Repository eine Compose-Datei besitzt.

Relevant sind die Konsequenzen:

- Kann ein Pilot nachvollziehbar aktualisiert werden?
- Kann eine fehlerhafte Version zurückgenommen werden?
- Sind Datenwiederherstellung und Software-Rollback getrennt geplant?
- Ist der Testbetrieb klar von realem Produktivbetrieb abgegrenzt?
- Können einzelne Dienste später ausgetauscht werden, ohne das Gesamtsystem neu zu bauen?

Diese Fragen werden mit zunehmender Nähe zu realen Pilotdaten wichtiger als reine Demo-Verfügbarkeit.
