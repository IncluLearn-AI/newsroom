# News- und Research-Agent

## Zweck

Der geplante ChatGPT-Agent unterstützt drei wiederkehrende Aufgaben:

1. substanziellen Projektfortschritt aus der IncluLearn.AI-GitHub-Organisation erkennen,
2. neue relevante Forschung, Standards, Tools und Praxisentwicklungen beobachten,
3. veröffentlichungsfähige Entwürfe für den Newsroom vorbereiten.

## Empfohlener Rhythmus

Ein **wöchentlicher Recherchelauf** ist ausreichend. Öffentliche Beiträge sollen nicht künstlich wöchentlich erzeugt werden. Wenn keine substanzielle Meldung vorliegt, erstellt der Agent keinen Newsroom-PR.

## Projektfortschritt

Der Agent betrachtet Änderungen repository-übergreifend und priorisiert:

- abgeschlossene oder wesentlich fortgeschrittene Features,
- Releases und Demonstratoren,
- neue belastbare Anforderungen oder Evaluationsergebnisse,
- relevante Architektur- oder Governance-Entscheidungen,
- Transferaktivitäten, Publikationen und Veranstaltungen.

Commit-Anzahl und reine Dokumentationsaktivität werden nicht als eigenständige Erfolgsmessung verwendet.

## Externes Monitoring

Ausgangspunkt ist `research/news-watchlist.yaml`. Ergänzend darf breit recherchiert werden, wenn ein Fund klar zum Projekt passt. Originalpublikationen und offizielle Primärquellen sind bevorzugt zu öffnen und zu prüfen.

## Ergebnis eines Laufs

Der Agent berichtet im Chat kompakt:

- wichtigste Projektänderungen,
- wichtigste externe Funde,
- was davon öffentlich berichtenswert ist,
- welche Unsicherheiten oder Reviewpunkte bestehen.

Nur bei ausreichender Substanz erzeugt er einen **Draft Pull Request** mit einem oder mehreren Beiträgen. Er mergt nicht selbst.

## Zeitliche Einordnung

Der geförderte Durchführungszeitraum beginnt am 01.10.2026. Aktivitäten davor werden bei öffentlichen Meldungen als Vorbereitung oder Vorarbeit bezeichnet, sofern keine andere Freigabe vorliegt.
