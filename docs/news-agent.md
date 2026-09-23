# News- und Research-Agent v2

## Zweck

Der Agent unterstützt drei wiederkehrende Aufgaben:

1. substanziellen Projektfortschritt repository-übergreifend erkennen,
2. relevante Forschung, Standards, Tools und Praxisentwicklungen beobachten,
3. DE/EN-Entwürfe für den Newsroom vorbereiten.

Der Newsroom richtet sich nicht nur an Entwickler*innen. Projektmitglieder, Beirat, Praxispartner und interessierte externe Fachleute sollen die fachlichen Ergebnisse ohne Kenntnis der internen Repository-Struktur verstehen können.

## Grundprinzip: Signal ist nicht Inhalt

GitHub-Aktivität ist ausschließlich ein **Änderungssignal**. Ein Commit, Pull Request oder Issue kann anzeigen, dass sich ein relevantes Fachartefakt verändert hat. Der Titel dieses Signals ist niemals die inhaltliche Grundlage einer Veröffentlichung.

Nicht zulässig:

`Commit-/PR-Titel → Paraphrase → News`

Vorgesehen:

`Signal → betroffene Fachartefakte → relevante Verweise → konkrete Befunde → Evidenz/Primärquellen → Dublettenprüfung → redaktionelle Synthese`

Wenn der Agent die fachliche Aussage eines Kandidaten nicht aus den tatsächlichen Artefakten begründen kann, entsteht daraus **kein Beitrag**.

## Phase A: Änderungssignale erfassen

Seit der letzten redaktionellen Baseline werden repository-übergreifend betrachtet:

- relevante Commits,
- gemergte Pull Requests,
- Releases,
- fachlich relevante Issues/Entscheidungen,
- geänderte zentrale Dokumente oder Referenzartefakte.

Dabei gilt:

- Commit-Anzahl ist kein Fortschrittsindikator.
- Viele Commits können ein einziges redaktionelles Ereignis bilden.
- Ein einzelner Commit kann auf ein substanzielles Fachartefakt verweisen.
- Newsroom-eigene Redaktionscommits sind grundsätzlich kein neues Projekt-Ereignis.

## Phase B: Fachartefakte bestimmen und lesen

Für jedes potenziell relevante Signal bestimmt der Agent zuerst die **fachliche Quelle der Wahrheit**.

Beispiele sind:

- Anforderungs-/Bedarfsdokumente und Traceability,
- Forschungsstand, Literaturmatrix und Evaluationsprotokolle,
- ADRs und Architektur-/UX-Dokumente,
- Governance-Policies,
- API-Verträge, Schemata und Qualitätskonzepte,
- freigegebene Demo-/Produktartefakte,
- dokumentierte Entscheidungen, Evaluationen oder Ergebnisse.

Der Agent liest nicht nur die geänderten Zeilen. Er liest ausreichend Kontext, um Zweck, Ergebnis, Grenzen und Status korrekt wiederzugeben. Verweist ein Artefakt auf weitere fachlich notwendige Dokumente, werden diese nachverfolgt.

Repository-README oder Repo-Maps dienen nur zur Orientierung; sie ersetzen nicht das eigentliche Fachartefakt.

## Phase C: Redaktionelle Evidenzmatrix

Bevor ein Artikel entsteht, hält der Agent intern pro Kandidat mindestens fest:

| Frage | Erwartete Antwort |
| --- | --- |
| Was ist das Änderungssignal? | Commit/PR/Issue/Release nur als Fundstelle |
| Welche Fachartefakte tragen die Aussage? | konkrete fachliche Dokumente/Artefakte |
| Was ist neu oder wesentlich verändert? | konkrete Ergebnisse statt Aktivitätsbeschreibung |
| Was ist Befund? | direkt aus Artefakten/Quellen gestützt |
| Was ist Hypothese/Entwurf? | ausdrücklich noch nicht validiert |
| Was ist redaktionelle Ableitung? | getrennt von Quellenaussagen |
| Welche öffentliche Evidenz gibt es? | Primärquelle/Originalpublikation, wenn extern |
| Für wen ist das relevant? | Projektteam, Beirat, Praxispartner, Fachöffentlichkeit |
| Welche offene Frage bleibt? | fachlich konkrete nächste Validierung |
| Gibt es bereits denselben Inhalt? | Newsroom, Dossiers, offene PRs prüfen |

Diese Matrix muss nicht veröffentlicht werden. Sie dient dazu, aus Aktivität keine scheinbaren Ergebnisse zu konstruieren.

## Phase D: Dubletten- und Update-Gate

Vor jedem neuen Beitrag prüft der Agent:

1. vorhandene veröffentlichte Newsroom-Beiträge,
2. Dossiers,
3. offene Newsroom-Pull-Requests,
4. thematisch identische oder sehr ähnliche `translationKey`s,
5. ob ein bestehender Beitrag sinnvoller aktualisiert werden sollte.

Ein neuer Artikel ist **nicht** automatisch besser als ein Update.

Typische Fälle:

- Neue Evidenz zu einer bestehenden Hypothese → bestehenden Beitrag aktualisieren.
- Mehrere kleine Änderungen zum selben fachlichen Ergebnis → einen Beitrag/Digest aktualisieren.
- Neue, eigenständige Erkenntnis mit eigener Relevanz → neuer Beitrag.
- Reine technische Pflege ohne neue öffentliche Aussage → kein Beitrag.

## Phase E: Research Radar

Die Watchlist in `research/news-watchlist.yaml` steuert die externe Recherche.

Für wissenschaftliche oder technische Funde gilt:

1. Originalpublikation oder offizielle Primärquelle öffnen.
2. Peer Review, Preprint, Standard, Forschungsprojekt und Herstellerinformation unterscheiden.
3. Keine Kennzahlen aus Suchsnippet, Pressemitteilung oder Sekundärbericht übernehmen, wenn die Originalquelle verfügbar ist.
4. Relevanz für IncluLearn.AI konkret begründen.
5. Prüfen, ob der Fund bereits im Forschungsstand oder Newsroom behandelt wird.
6. Bei einem Preprint den Preprint-Status im Beitrag sichtbar erhalten.

Ein Research-Radar-Beitrag ohne nachvollziehbare öffentliche Quelle ist nicht veröffentlichungsreif.

## Phase F: Formatentscheidung

Der Agent wählt erst **nach** der Analyse ein Format:

- `brief`: ein eigenständig relevanter, eng begrenzter Sachverhalt,
- `article`: konkrete Ergebnisse plus Einordnung, Evidenzstatus und Grenzen,
- `digest`: Synthese mehrerer Entwicklungen,
- Dossier: kuratierter Einstieg und längerfristige Synthese.

Der Agent soll **lieber einen gehaltvollen Beitrag als mehrere Aktivitätsmeldungen** erzeugen.

Wenn die Mindestfragen aus `AGENTS.md` nicht beantwortbar sind, entsteht kein `article`.

## Phase G: DE/EN und Veröffentlichung

Deutsch ist die Referenzsprache.

Für einen öffentlichen Kandidaten:

1. deutsche Fassung nach `templates/beitrag.md` erstellen,
2. englische Fassung mit derselben `translationKey` vorbereiten,
3. `sourceLang: de` und `translationStatus: machine` setzen,
4. `sourceVersionHash` auf den exakten Git-Blob der deutschen Fassung setzen,
5. beide Fassungen gemeinsam in einem Draft-PR einreichen,
6. CI abwarten,
7. menschliches fachliches, redaktionelles, sprachliches und Accessibility-Review anfordern.

Der Agent mergt nicht und setzt seinen eigenen Output nicht selbst auf `VERIFIZIERT` oder `FREIGEGEBEN`.

## Zwei Zeitachsen

Jeder Beitrag besitzt:

- `event.start/end`: wann das beschriebene Ereignis tatsächlich stattfand,
- `publishedAt`: wann der Beitrag tatsächlich veröffentlicht wurde.

Historische Vorarbeiten werden als `prior-work` eingeordnet. Arbeiten vor Beginn des geförderten Projektzeitraums am 01.10.2026 werden als `preparation` eingeordnet, sofern sie nicht eindeutig frühere Vorarbeiten sind.

## Vertraulichkeits-Gate

Private Projekt-Repositories dürfen als Recherchegrundlage dienen, aber nicht ungefiltert nach außen gespiegelt werden.

Nicht veröffentlichen:

- personenbezogene Informationen,
- vertrauliche Partnerinformationen,
- Sicherheitsdetails, Zugangsdaten oder interne Schutzkonfiguration,
- förderadministrative Details ohne expliziten redaktionellen Zweck/Freigabe,
- interne Dateipfade/Branches/Commitmechanik als Selbstzweck.

Öffentliche Beiträge erklären das **fachliche Ergebnis**, nicht den privaten Arbeitsraum.

## Ergebnis eines Laufs

Der Agent berichtet im Chat auf Deutsch:

- welche Änderungssignale geprüft wurden,
- welche Fachartefakte tatsächlich analysiert wurden,
- welche redaktionellen Ereignisse daraus entstanden,
- welche externen Funde relevant waren,
- welche Dubletten oder Updates erkannt wurden,
- welche Themen **nicht** publiziert wurden und warum,
- welche offenen Partner-/Reviewfragen bestehen,
- ob ein Draft-PR erstellt wurde.

Ein Lauf ohne neuen PR ist ein zulässiges und häufig sinnvolles Ergebnis.

## Regressionstest für Agentenläufe

Vor produktiver Nutzung wird ein Testlauf anhand realer Änderungssignale durchgeführt. Er gilt nur dann als bestanden, wenn:

- kein Artikel aus Commit-/PR-Titeln paraphrasiert wird,
- zu jedem vorgeschlagenen Projektbeitrag tragende Fachartefakte benannt werden können,
- externe Aussagen auf Original-/Primärquellen zurückgeführt werden,
- vorhandene Beiträge und offene PRs auf Dubletten geprüft werden,
- DE/EN gemeinsam behandelt werden,
- bei fehlender Substanz **kein** PR erzeugt wird.

Der erste dokumentierte v2-Testlauf liegt in `docs/news-agent-v2-test-2026-09-23.md`.

## Publikationsrhythmus

Recherche kann wöchentlich stattfinden. Die Website kann mehrere Meldungen pro Tag aufnehmen; daraus folgt keine Pflicht zu künstlicher Veröffentlichungsfrequenz.
