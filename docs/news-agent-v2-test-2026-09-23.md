# News-Agent v2 – Regressionstest vom 23.09.2026

## Zweck

Dieser Test prüft den neuen **Projektpfad** des News-Agenten anhand realer Git-Signale. Ziel ist ausdrücklich nicht, neue Meldungen zu erzwingen, sondern zu prüfen, ob der Agent von einem Signal zu den tatsächlichen Fachartefakten wechselt und vorhandene Newsroom-Inhalte als Dubletten bzw. Update-Ziele erkennt.

Der externe wöchentliche Research-Radar bleibt ein eigener Teil des regulären Laufs.

## Testregel

Nicht zulässig:

`Commit-Titel → Paraphrase → neue Meldung`

Geprüfter Pfad:

`Signal → Fachartefakte → konkrete Aussage → Newsroom-Dublettenprüfung → Publikationsentscheidung`

## Kandidat A: TTS-Service

### Änderungssignale

Mehrere Änderungen am 22.09.2026 betrafen den TTS-v1-Vertrag, den Qwen3-TTS-CustomVoice-Adapter sowie die Reproduzierbarkeit der Modellherkunft.

Die Commit-Titel wurden nur verwendet, um den betroffenen Themenbereich zu finden.

### Gelesene Fachartefakte

Geprüft wurden insbesondere:

- Service-README mit aktuellem Reifegrad und Repository-Grenzen,
- ADR zum v1-HTTP-Vertrag und ephemeren Jobs,
- Qualitäts-/Benchmarkkonzept.

### Tatsächliche fachliche Aussage

Die Artefakte tragen unter anderem folgende Aussagen:

- Die öffentliche API bleibt engine-neutral.
- Der Qwen3-TTS-Adapter ist eine konkrete erste Engine, aber nicht Teil des langfristigen HTTP-Vertrags.
- Jobs und Ergebnisse sind im aktuellen v1-Entwurf ephemer.
- Reproduzierbare Modellherkunft und festgehaltene Runtimebedingungen sind Teil der Qualitätsstrategie.
- Ein produktiv integrierter oder öffentlich freigegebener Dienst wird damit noch nicht behauptet.

### Dublettenprüfung

Der veröffentlichte Newsroom-Beitrag **„TTS als erster modularer Dienst: API und Qwen-Adapter stehen, Produktintegration noch nicht“** enthält diese fachlichen Aussagen bereits.

### Ergebnis

**Kein neuer Beitrag.** Ein Artikel aus Titeln wie „Clarify immutable Qwen model provenance“ oder „Run PR CI on exact head SHA“ wäre eine Aktivitätsmeldung ohne zusätzlichen redaktionellen Wert.

Eine spätere Aktualisierung wäre erst gerechtfertigt, wenn beispielsweise reale Benchmarkdaten, GPU-Qualifizierung, Plattformintegration oder neue Nutzer-/Qualitätsergebnisse vorliegen.

## Kandidat B: Vision Prototype / Web-UI

### Änderungssignale

Mehrere Änderungen am 22.09.2026 betrafen Partnerdarstellung, lokalisierte Reviewtexte, Statusformulierungen und einen semantischen Demo-Ausschnitt.

### Gelesene Fachartefakte

Geprüft wurden insbesondere:

- Vision-Prototype-Zielbild,
- Web-UI-Konzept v0.2.

### Tatsächliche fachliche Aussage

Die Fachartefakte machen deutlich:

- Der Prototyp ist ein evolutionäres, synthetisches Validierungsartefakt und noch keine produktive KI-Verarbeitung.
- Die Oberfläche soll nach Nutzerzielen und nicht nach Modell-/Pipelinebegriffen organisiert sein.
- Status von Verarbeitung, fachlicher Prüfung und Zugriff/Bereitstellung soll unterscheidbar bleiben.
- DE/EN und Accessibility werden strukturell mitgeführt.
- Mehrere Produktentscheidungen sind weiterhin Hypothesen und müssen mit Zielgruppen validiert werden.

### Dublettenprüfung

Der veröffentlichte Beitrag **„Was der IncluLearn.AI Vision Prototype heute tatsächlich zeigt“** behandelt genau diese Punkte bereits.

### Ergebnis

**Kein neuer Beitrag.** Die UI-Polish-Commits ergeben zusammen kein neues eigenständiges öffentliches Ereignis. Ein späteres Update wäre beispielsweise bei abgeschlossener formativer Validierung oder einer substanziellen Backend-/Produktintegration gerechtfertigt.

## Kandidat C: Processing-Services-Integrationsschicht

### Änderungssignale

Das Repository wurde am 22.09.2026 initialisiert.

### Gelesenes Fachartefakt

Das aktuelle README wurde als fachliche Quelle geprüft.

### Tatsächliche fachliche Aussage

Das Repository definiert die Integrations- und Organisationsschicht für eigenständige Processing Services. Es hält ausdrücklich fest, dass noch kein produktiv integrierter Verarbeitungsstack existiert.

### Dublettenprüfung

Die Aussage ist bereits im TTS-/Service-Architekturbeitrag und in der Infrastruktur-Einordnung abgedeckt.

### Ergebnis

**Kein neuer Beitrag.** „Repository angelegt“ ist allein kein öffentlich relevantes Projektergebnis.

## Offene Newsroom-PRs

Zum Testzeitpunkt waren keine offenen Newsroom-Pull-Requests vorhanden, die zusätzliche Dubletten erzeugt hätten.

## Testergebnis

Der v2-Workflow hat für alle drei realen Signalgruppen **keinen neuen Artikel erzeugt**.

Das ist das erwartete Ergebnis:

- kein Commit-Titel wurde zu einer Meldung paraphrasiert,
- für jeden Kandidaten wurden tatsächliche Fachartefakte gelesen,
- konkrete Aussagen wurden aus diesen Artefakten und nicht aus Git-Titeln abgeleitet,
- vorhandene veröffentlichte Beiträge wurden als Dubletten/Update-Ziele erkannt,
- bei fehlender neuer öffentlicher Substanz wurde bewusst kein redaktioneller PR erzeugt.

Damit ist der zentrale Regressionstest für den fachartefaktbasierten Projektpfad des News-Agenten v2 bestanden.
