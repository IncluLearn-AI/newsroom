# Arbeitsregeln für KI-Agenten

Dieses Repository ist **öffentlich**. Agenten arbeiten deshalb konservativ, quellengestützt, zielgruppenorientiert und reviewbar.

## Zweck und Zielgruppen

Der Newsroom ist kein technisches Änderungsprotokoll. Er soll fachliche Erkenntnisse und Projektentwicklung so aufbereiten, dass insbesondere folgende Gruppen den Stand des Projekts verstehen und einordnen können:

- Projektmitglieder – ausdrücklich auch nicht-technische Mitarbeitende,
- Projektbeirat und assoziierte Partner,
- blista, Dräger-Lienert, Medienzentren und weitere Praxis-/Validierungspartner,
- interessierte externe Fachöffentlichkeit.

Agenten dürfen:

- öffentlich geeigneten Projektfortschritt aus IncluLearn.AI-Artefakten ableiten,
- relevante externe Forschung, Standards, Tools und Projekte recherchieren,
- Ereignisse zu redaktionell sinnvollen Meldungen clustern,
- deutsche Entwürfe und englische Übersetzungen vorbereiten,
- Quellen und Metadaten strukturieren,
- Draft Pull Requests für menschliches Review öffnen.

## Zentrale redaktionelle Regel

**Git-Aktivität ist nur ein Recherche-Signal, niemals die inhaltliche Grundlage eines Beitrags.**

Ein Commit-, PR- oder Issue-Titel kann anzeigen, **wo** etwas Relevantes passiert ist. Vor einem redaktionellen Entwurf müssen die betroffenen Fachartefakte selbst gelesen werden. Bei Verweisen sind relevante Unterdokumente nachzuverfolgen.

Ein Beitrag darf daher nicht bloß paraphrasieren, dass etwas „angelegt“, „strukturiert“, „ergänzt“ oder „dokumentiert“ wurde. Er muss – soweit die Quellen das tragen – die **konkreten fachlichen Ergebnisse, Befunde, Entscheidungen, Hypothesen, Grenzen und offenen Fragen** herausarbeiten.

Beispiel:

- schwach: „Die Bedarfsanalyse wurde strukturiert.“
- redaktionell sinnvoll: „Öffentliche Prozessbeschreibungen von Medienzentren deuten auf lange Vorlaufzeiten, hohen manuellen Aufwand und einen Bedarf an überprüfbarer semantischer Vorverarbeitung hin; diese Ableitungen müssen noch durch eigene Interviews validiert werden.“

## Fachartefakt-Gate

Vor jedem redaktionellen Entwurf muss der Agent intern benennen können:

1. welches Git-/Issue-/Release-Signal die Recherche ausgelöst hat,
2. welche tatsächlichen Fachartefakte die öffentliche Aussage tragen,
3. welche konkrete neue oder wesentlich veränderte Erkenntnis darin steckt,
4. was Befund, Hypothese/Entwurf und redaktionelle Ableitung ist,
5. welche öffentliche Primärquelle externe Aussagen stützt,
6. ob derselbe Inhalt bereits veröffentlicht oder in einem offenen PR enthalten ist.

Ein README, Repo-Map, Committext oder PR-Beschreibung darf zur Orientierung dienen, ersetzt aber nicht das tragende Fachartefakt.

Kann Punkt 2 oder 3 nicht substanziell beantwortet werden, entsteht aus dem Signal kein öffentlicher Beitrag.

## Dubletten- und Update-Gate

Vor einem neuen Artikel werden veröffentlichte Beiträge, Dossiers, offene Newsroom-PRs und bestehende `translationKey`s geprüft.

- Neue Evidenz zu einem bestehenden Thema kann ein Update statt eines neuen Artikels rechtfertigen.
- Mehrere kleine Änderungen zum selben fachlichen Ergebnis werden zusammengeführt.
- Reine Pflege-, Refactoring- oder Dokumentationsaktivität ohne neue öffentliche Aussage erzeugt keine Meldung.
- Newsroom-eigene Redaktionscommits sind grundsätzlich kein neues Projekt-Ereignis.

## Verbindliche Grenzen

1. **Kein direkter Merge durch den Agenten.**
2. **Keine vertraulichen Informationen.** Keine personenbezogenen, sensiblen, sicherheitsrelevanten, administrativen oder nicht öffentlichen Details aus privaten Repositories übernehmen.
3. **Beleg vor Behauptung.** Externe Tatsachenbehauptungen benötigen nachvollziehbare Quellen; Primärquellen werden bevorzugt.
4. **Quellentyp korrekt kennzeichnen.** Peer Review, Preprint, Standard, offizielle Primärquelle, Forschungsprojekt und Herstellerinformation nicht vermischen.
5. **Keine erfundenen Quellen, DOI, Zitate oder Messwerte.**
6. **Commits sind Rohmaterial, keine News.** Mehrere technische Einzeländerungen werden zu einem Ereignis zusammengefasst, wenn sie dasselbe Ergebnis herstellen.
7. **Projektfortschritt nur aus belastbaren Artefakten ableiten.** Commit-Zahl ist kein Fortschrittsindikator.
8. **Freigabestatus nicht selbst vergeben.**
9. **Barrierefreiheit ist Teil der Definition of Done.**
10. **Projektstart korrekt einordnen.** Aktivitäten vor dem 01.10.2026 als Vorbereitung/Vorarbeit kennzeichnen, sofern keine andere fachliche Freigabe vorliegt.
11. **Zeitachsen nicht vermischen.** `event.start/end` beschreibt das Ereignis; `publishedAt` die tatsächliche Veröffentlichung.
12. **Keine künstliche Publikationsfrequenz.** Wenn kein substanzielles Ereignis vorliegt, keinen Beitrag erzeugen.
13. **Zielgruppenbezug vor Repository-Detail.** Interne Dateipfade, Branches, Commit-Mechanik oder technische Abläufe gehören nur in den Beitrag, wenn sie für Verständnis, Nachvollziehbarkeit oder Transfer relevant sind.
14. **Ergebnisse vor Methode.** Redaktionelle Texte beginnen nicht mit der Repository-Struktur oder dem Dokumentationsprozess, wenn bereits konkrete fachliche Erkenntnisse vorliegen.

## Mindestfragen für größere Beiträge

Vor einem `article` muss der Agent beantworten können:

1. Was wurde untersucht, erreicht oder entschieden?
2. Was sind die konkreten Ergebnisse?
3. Warum ist das für IncluLearn.AI relevant?
4. Was ist belastbarer Befund, was Hypothese, Entwurf oder redaktionelle Einordnung?
5. Welche Grenzen und offenen Fragen bleiben?
6. Ist Feedback von Projektteam, Beirat oder Praxispartnern sinnvoll – und wenn ja, wozu?
7. Welche öffentlichen Quellen können Leser*innen selbst nachvollziehen?

Wenn diese Fragen nicht substanziell beantwortet werden können, ist ein `brief` oder gar kein Beitrag angemessener.

## Formate

- **`brief` – Kurzmeldung:** ein klarer, eigenständig relevanter Sachverhalt; keine künstliche Aufblähung. Typisch: eine neue Demo-Funktion, ein freigegebener Termin, ein klar abgegrenztes technisches Ergebnis.
- **`article` – Fachbeitrag:** enthält konkrete Ergebnisse und Einordnung; in der Regel mehrere Abschnitte und nachvollziehbare Evidenz.
- **`digest` – Rückblick/Synthese:** verdichtet mehrere bereits dokumentierte Entwicklungen für einen Zeitraum oder ein Thema; keine bloße Linkliste.
- **Dossier:** dauerhaft kuratierte Übersicht, die Zusammenhänge erklärt und Einzelbeiträge in einen größeren Kontext stellt.

## Mehrsprachigkeit

Deutsch ist die **redaktionelle Referenzsprache**, Englisch wird von Beginn an mitgeführt.

- Sichtbare Taxonomie wird niemals als deutscher Freitext im Datenmodell gespeichert; interne Schlüssel bleiben sprachneutral.
- DE und EN eines Beitrags teilen dieselbe `translationKey`.
- Slugs dürfen sprachgerecht unterschiedlich sein.
- Automatisch erstellte englische Fassungen verwenden zunächst `translationStatus: machine`.
- Nach sprachlicher/fachlicher Prüfung kann `translationStatus: reviewed` gesetzt werden.
- `sourceLang` und möglichst `sourceVersionHash` werden gepflegt, damit veraltete Übersetzungen erkannt werden können.
- Unter einer englischen URL darf kein stiller deutscher Fallback erscheinen und umgekehrt.
- Wenn eine Sprachfassung fehlt, verweist der Sprachwechsel auf einen passenden Spracheinstieg statt falschen Content auszuliefern.
- Navigation, Seitentitel, Metadaten, Alt-Texte und ARIA-Beschriftungen werden in DE/EN konsistent gepflegt.

## Quellenhierarchie

Bevorzugt werden:

1. peer-reviewte Originalpublikationen und DOI-Landingpages,
2. offizielle Standards und Spezifikationen,
3. offizielle Seiten von Forschungsprojekten und Forschungsgruppen,
4. Primärdokumentation technischer Systeme,
5. Preprints mit sichtbarem Preprint-Status,
6. Hersteller-/Projektblogs,
7. Community- und Sekundärquellen nur ergänzend.

Interne Projekt-Repositories können als Evidenz für **eigene Projektarbeit** dienen. Externe Recherchebefunde sollen, soweit öffentlich belegbar, mit den ursprünglichen öffentlichen Primärquellen verknüpft werden statt nur auf interne Zusammenfassungen zu verweisen.

## Empfohlener Agentenablauf

1. Änderungen seit dem letzten Lauf sammeln.
2. Relevante Commits/PRs/Issues nur als Signale für möglicherweise geänderte Fachartefakte verwenden.
3. Die betroffenen Fachdateien vollständig lesen; relevante Verweise und Unterdokumente nachverfolgen.
4. Konkrete Ergebnisse, Entscheidungen, Hypothesen, Grenzen und offene Fragen extrahieren.
5. Mehrere technische Änderungen zu fachlich verständlichen Ereignissen clustern.
6. Relevanz für die Zielgruppen und für IncluLearn.AI begründen.
7. Externe Primärquellen öffnen und Evidenztyp prüfen.
8. Fakten, Aussagen der Quelle, Projektableitungen und redaktionelle Einordnung trennen.
9. Dubletten gegenüber bestehenden Beiträgen, Dossiers, offenen Newsroom-PRs, vorhandenen `translationKey`s und dem Forschungsstand erkennen; Update statt Neuanlage ausdrücklich prüfen.
10. Für jeden verbleibenden Kandidaten das Fachartefakt-Gate dokumentierbar erfüllen.
11. Öffentlichkeits- und Vertraulichkeits-Gate durchführen.
12. Passendes Format wählen; bei zu wenig Substanz keinen `article` erzwingen.
13. Deutschen Referenzbeitrag nach `templates/beitrag.md` erstellen.
14. Englische Fassung mit derselben `translationKey` vorbereiten.
15. Beide Fassungen und ggf. Dossieränderungen in **einem Draft-PR** bündeln.
16. Im PR die tatsächlich ausgewerteten Fachartefakte, Dublettenprüfung und Evidenztypen nennen.
17. CI abwarten und menschliches fachliches, redaktionelles, sprachliches und Accessibility-Review anfordern.

Die projektweite AI-Governance bleibt gegenüber diesen repository-spezifischen Regeln maßgeblich.
