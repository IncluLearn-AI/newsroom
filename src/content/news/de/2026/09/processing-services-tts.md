---
translationKey: prep-2026-09-processing-tts
locale: de
sourceLang: de
translationStatus: source
slug: service-architektur-und-erster-tts-vertrag-vorbereitet
title: "TTS vom Architekturbaustein zum öffentlichen Testpfad: sechs Profile und VoiceDesign auf der Ziel-VM"
summary: "Der TTS-Pfad ist deutlich weiter als im ersten September-Stand: Die engine-neutrale API läuft inzwischen mit Qwen3-TTS-1.7B, sechs neutralen Preset-Profilen und VoiceDesign auf der Ziel-VM und ist über die öffentliche Test-Demo erreichbar. Das ist eine reale Integration, aber noch keine Audioqualitäts- oder Produktivfreigabe."
publishedAt: 2026-09-22T17:08:00+02:00
updatedAt: 2026-10-06T12:30:00+02:00
event:
  start: 2026-09-22
  end: 2026-09-29
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Der HTTP-Vertrag bleibt engine-neutral: Legacy-Requests funktionieren weiter, der additive Advanced-Pfad unterstützt Presets mit optionalen Instructions und VoiceDesign, ohne Qwen-Modellnamen oder Samplingparameter in den öffentlichen Vertrag zu tragen."
  - "Die aktive Referenzruntime verwendet inzwischen die gepinnten Qwen3-TTS-1.7B-Modelle für CustomVoice und VoiceDesign; sechs serviceeigene neutrale Preset-Profile werden angeboten."
  - "Der Single-Resident-Lifecycle hält höchstens einen großen Modellworker gleichzeitig im Speicher und wechselt seriell zwischen Preset- und Design-Modus."
  - "Der TTS-Dienst wurde über processing-services auf der Ziel-VM ausgerollt und über den Same-Origin-Pfad der öffentlichen Test-Demo mit realer synthetischer DE-/EN-Inferenz verifiziert."
  - "Die Runtime-Qualifikation ist bewusst begrenzt: menschliche Hörprüfung und tatsächlicher Rollback wurden nicht durchgeführt, und der qualifizierte Containerpfad bleibt CPU/FP32 statt GPU/CUDA."
openQuestions:
  - "Wie zuverlässig werden Fachbegriffe, Zahlen, Einheiten, Variablennamen und mathematisch vorbereitete Sprechtexte für Lernende tatsächlich verständlich ausgesprochen?"
  - "Welche Navigationsfunktionen brauchen Lernende bei längeren Audiofassungen – etwa Segmentierung, synchrones Hervorheben oder kontrolliertes Unterbrechen?"
  - "Bringt VoiceDesign im Anwendungskontext einen relevanten Nutzen, oder sind eine sehr verlässliche Stimme und konsistente Fachterminologie wichtiger?"
partnerQuestions:
  - "Welche Aussprachefehler bei Fachbegriffen, Zahlen, Einheiten oder Formeln wären in Ihrer Praxis besonders kritisch?"
  - "Welche Audio-Navigation benötigen Lernende bei längeren MINT-Texten tatsächlich?"
  - "Ist die Wahl bzw. Gestaltung einer Stimme für Ihren Einsatz wichtig, oder stehen Verständlichkeit und Verlässlichkeit klar im Vordergrund?"
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
  - VoiceDesign
  - Privacy by Default
authors: []
evidence: project-source
sources:
  - title: "Qwen3-TTS"
    url: "https://github.com/QwenLM/Qwen3-TTS"
    kind: vendor-project
  - title: "Qwen3-TTS-12Hz-1.7B-CustomVoice"
    url: "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice"
    kind: vendor-project
  - title: "Qwen3-TTS-12Hz-1.7B-VoiceDesign"
    url: "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-VoiceDesign"
    kind: vendor-project
  - title: "IncluLearn.AI Vision Prototype"
    url: "https://inclulearn-test.owli-ai.com/"
    kind: official-primary
aiAssisted: true
featured: false
draft: false
---

## Kurz gesagt

Text to Speech ist weiterhin der erste eigenständige Processing Service, an dem IncluLearn.AI sein modulares Servicemodell konkret erprobt. Der Stand hat sich seit der ersten September-Fassung aber deutlich verändert.

Aus dem vorbereiteten API- und Adapterbaustein ist inzwischen ein **real integrierter Testpfad** geworden: Die aktive Runtime verwendet Qwen3-TTS-1.7B, bietet sechs neutrale Preset-Profile sowie VoiceDesign und läuft über `processing-services` auf der Ziel-VM. Über die öffentliche Test-Demo wurden reale, ausschließlich synthetische DE-/EN-Fälle bis zum erzeugten WAV geprüft.

Das ist ein wichtiger Integrationsschritt – aber noch **keine Audioqualitäts- oder Produktivfreigabe**.

## Der API-Vertrag bleibt trotz neuer Funktionen engine-neutral

Die zentrale Architekturentscheidung bleibt unverändert: Die Plattform soll fachliche TTS-Funktionen verwenden können, ohne sich an konkrete Modellnamen oder providerspezifische Samplingparameter zu koppeln.

Legacy-Requests mit Text, Sprache und neutralem Voice-Profil funktionieren weiterhin. Zusätzlich unterstützt derselbe v1-Pfad jetzt einen strukturierten Advanced-Vertrag:

- Preset-Stimme mit serviceeigener Profil-ID,
- optional begrenzte Voice-Instruction,
- VoiceDesign mit textueller Beschreibung.

Die Modellwahl bleibt intern. Damit kann sich die Runtime weiterentwickeln, ohne dass die Plattform überall Qwen-spezifische Parameter kennen muss.

## Sechs neutrale Profile und zwei 1.7B-Modi

Der aktive Qwen-Adapter verwendet inzwischen zwei immutable gepinnte 1.7B-Modelle:

- CustomVoice für Preset-Stimmen,
- VoiceDesign für textuell beschriebene Stimmcharakteristika.

Nach außen erscheinen die Presets als neutrale Profile `standard-a` bis `standard-f`. Qwen-Speaker-IDs bleiben Implementierungsdetail.

Für die zwei großen Modelle gilt ein **Single-Resident-Lifecycle**: Der Dienst hält höchstens einen Modellworker gleichzeitig resident. Beim Wechsel zwischen Preset und Design wird der alte Worker beendet und gereapt, bevor der neue startet. Das begrenzt den Speicherbedarf und macht die Betriebsgrenze explizit.

## Auf der Ziel-VM integriert und über die Test-Demo geprüft

Der TTS-Service wurde über die Integrationsschicht `processing-services` auf der tatsächlichen Ziel-VM ausgerollt. Der Dienst selbst erhält dabei keinen öffentlichen Host-Port, sondern bleibt im internen Processing-Netz.

Die Webplattform spricht ihn über einen engine-neutralen Same-Origin-Pfad an. Damit bleibt die öffentliche Grenze die IncluLearn.AI-Webanwendung – nicht eine rohe TTS-API.

Beim Sechs-Profil-Runtime-Gate am 29. September wurden vier reale interne Jobs und drei kurze öffentliche Same-Origin-Fälle erfolgreich abgeschlossen. Geprüft wurden unter anderem Legacy-Simple, DE-/EN-Presets und VoiceDesign. Die Jobs durchliefen den vorgesehenen Job-Lifecycle und lieferten gültige WAV-Dateien.

Diese Tests verwenden ausschließlich synthetische Eingaben.

## Privacy by Default bleibt Teil des Dienstvertrags

Auch mit der erweiterten Runtime gelten die bisherigen Datenschutz- und Betriebsgrenzen weiter:

- Eingabetexte und Voice-Beschreibungen werden nur ephemer verarbeitet,
- Jobs und Audio sind nicht als dauerhafte Ablage gedacht,
- Audio läuft nach begrenzter Zeit ab,
- Standardlogs sollen keine vollständigen Eingabetexte oder Audiodaten enthalten,
- Modellgewichte werden getrennt provisioniert und nicht im Repository oder Containerimage mitgeführt,
- der normale Dienst läuft offline mit read-only Modellcache.

Damit ist die technische Integration weiter fortgeschritten, ohne die Privacy-by-Default-Grundidee aufzugeben.

## Was der erfolgreiche Test ausdrücklich nicht beweist

Die aktuelle Abschlussklassifikation lautet sinngemäß **„PASS WITH FINDINGS“**.

Belastbar gezeigt wurde, dass der integrierte CPU/FP32-Pfad auf der Ziel-VM funktioniert und dass Preset- und VoiceDesign-Modi über den vorgesehenen Plattformpfad echte Audioausgabe erzeugen können.

Nicht gezeigt wurde dagegen:

- dass die Stimmen für MINT-Lerninhalte bereits ausreichend gut verständlich sind,
- dass Fachbegriffe, Zahlen, Einheiten und Formeln zuverlässig ausgesprochen werden,
- dass VoiceDesign für Lernende tatsächlich einen Mehrwert bietet,
- dass ein tatsächlicher Runtime-Rollback erfolgreich durchgeführt wurde,
- dass ein GPU-/CUDA-Pfad qualifiziert ist.

Die menschliche Hörprüfung wurde bewusst **nicht** aus einem gültigen WAV abgeleitet. Technische Funktionsfähigkeit und wahrgenommene Audioqualität bleiben zwei verschiedene Nachweise.

## Für MINT wird die nächste Evaluationsstufe entscheidend

Für IncluLearn.AI ist damit die reine Frage „Kann der Dienst Audio erzeugen?“ weitgehend beantwortet. Die wichtigere nächste Frage lautet: **Ist die Ausgabe für technische Lehre zuverlässig verständlich und navigierbar?**

Dazu gehören insbesondere:

- deutsche und englische Fachterminologie,
- Zahlen und Maßeinheiten,
- Variablennamen und Abkürzungen,
- mathematisch vorbereitete Sprechtexte,
- Stabilität bei längeren Abschnitten,
- Segmentierung und Navigation,
- menschliche Hörbewertung.

Gerade bei MINT-Materialien wäre eine natürlich klingende, aber fachlich missverständliche Aussprache kein ausreichendes Ergebnis.

## Warum dieser Stand für die Gesamtarchitektur wichtig ist

TTS zeigt erstmals praktisch, dass das vorgesehene Servicemodell über mehrere Ebenen funktioniert:

**Webplattform → engine-neutraler Vertrag → Processing-Integration → spezialisierter Dienst → austauschbare Modellruntime**

Damit ist TTS nicht mehr nur ein Architekturentwurf. Es ist ein begrenzt qualifizierter, realer Testpfad – weiterhin mit klaren Grenzen zwischen technischer Integration, fachlicher Qualität und späterem Produktivbetrieb.
