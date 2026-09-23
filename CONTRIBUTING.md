# Beiträge zum IncluLearn.AI Newsroom

Der Newsroom ist öffentlich und zweisprachig (DE/EN). Beiträge müssen fachlich belastbar, öffentlich geeignet, sprachlich nachvollziehbar und barrierearm sein.

## Für wen wir schreiben

Primäre Zielgruppen sind:

- Projektmitglieder, auch ohne technische Rolle,
- Projektbeirat und assoziierte Partner,
- Praxis- und Validierungspartner wie blista, Dräger-Lienert und Medienzentren,
- interessierte externe Fachöffentlichkeit.

Ein Beitrag soll ohne Kenntnis unserer Repository-Struktur verständlich sein. Interne Git- oder Implementierungsdetails sind kein Selbstzweck.

## Redaktionelle Grundregel

**GitHub-Aktivität zeigt, wo recherchiert werden muss – sie ersetzt nicht die Recherche.**

Wer einen Beitrag aus einer Projektänderung ableitet, liest die fachlich relevanten Artefakte selbst und folgt nötigen Verweisen. Commit- und PR-Titel dürfen nicht zu einem Artikel paraphrasiert werden.

Der redaktionelle Schwerpunkt liegt auf:

1. konkreten Ergebnissen und Befunden,
2. ihrer Bedeutung für IncluLearn.AI,
3. belastbarer Evidenz und ihren Grenzen,
4. offenen Fragen und Validierungsbedarf,
5. möglichem Bezug zu Projektteam, Beirat und Partnern.

Prozess- oder Strukturdetails folgen erst danach, sofern sie für das Verständnis relevant sind.

## Redaktionelle Beiträge

Neue Meldungen werden aus `templates/beitrag.md` abgeleitet und zunächst mit `draft: true` angelegt.

Für größere Fachbeiträge sollen – soweit für das Thema sinnvoll – folgende Fragen beantwortet werden:

- **Kurz gesagt:** Was sollten Leser*innen nach 30 Sekunden verstanden haben?
- **Kontext/Frage:** Was wurde untersucht oder welches Problem adressiert?
- **Ergebnisse:** Was wurde tatsächlich herausgefunden, erreicht oder entschieden?
- **Relevanz:** Warum ist das für IncluLearn.AI wichtig?
- **Evidenz und Grenzen:** Was ist belegt, was Hypothese, Entwurf oder noch unvalidiert?
- **Offene Fragen:** Was muss als Nächstes geklärt werden?
- **Partner-/Projektbezug:** Wo wäre fachliches Feedback hilfreich?
- **Quellen:** Welche öffentlichen Quellen können Leser*innen nachvollziehen?

Nicht jeder Beitrag benötigt jeden Abschnitt. Die Struktur darf dem Inhalt folgen; Ergebnisse dürfen aber nicht hinter Prozessbeschreibung verschwinden.

Für schnell erfassbare Fachbeiträge stehen zusätzlich optionale strukturierte Felder zur Verfügung:

- `keyFindings` für wenige prägnante Kernergebnisse am Beitragsanfang,
- `openQuestions` für konkrete noch zu klärende Punkte,
- `partnerQuestions` für konkrete Fragen an Beirat oder Praxispartner,
- `related` für explizit kuratierte verwandte Beiträge über deren `translationKey`.

Diese Felder sind kein Ersatz für Begründung und Evidenz im Fließtext. Leere Pflichtlisten sollen nicht künstlich befüllt werden.

## Formate

### `brief`

Kurze eigenständig relevante Meldung. Geeignet, wenn ein klarer Sachverhalt kommuniziert werden soll, aber keine umfangreiche fachliche Synthese vorliegt.

### `article`

Substanzieller Fachbeitrag mit konkreten Ergebnissen, Einordnung und – wo relevant – Quellen, Grenzen und offenen Fragen.

### `digest`

Kuratierter Rückblick auf mehrere Entwicklungen. Ein Digest erklärt Zusammenhänge; er ist keine automatisch erzeugte Liste von Links oder Commits.

### Dossier

Dauerhaft gepflegte thematische oder zeitliche Synthese. Ein Dossier bietet einen verständlichen Einstieg und ordnet Einzelbeiträge in einen größeren Zusammenhang ein.

## Review vor Veröffentlichung

Vor Veröffentlichung werden mindestens geprüft:

- fachliche Richtigkeit,
- ob ein bestehender Beitrag oder ein Dossier statt einer Neuanlage aktualisiert werden sollte,
- ob die tatsächlichen Fachartefakte gelesen wurden,
- ob Ergebnisse statt bloßer Git-/Prozessaktivität dargestellt werden,
- Qualität und Typ der Quellen,
- Trennung von Fakten, Quellenpositionen, Hypothesen und redaktioneller Einordnung,
- Datenschutz, Vertraulichkeit und Sicherheitsrelevanz,
- korrekter Ereigniszeitraum und Veröffentlichungszeitpunkt,
- Projektphase,
- Verständlichkeit für nicht-technische Zielgruppen,
- Barrierefreiheit,
- DE/EN-Konsistenz.

## Übersetzungen

Deutsch ist die Referenzsprache. Deutsche und englische Fassungen verwenden dieselbe `translationKey`.

Eine automatisch vorbereitete Übersetzung bleibt `translationStatus: machine`, bis eine sprachliche oder fachliche Prüfung erfolgt ist. Ein fehlender englischer Beitrag wird nicht durch deutschen Inhalt unter einer englischen URL ersetzt.

Wenn der deutsche Ausgangstext geändert wird, ist zu prüfen, ob `sourceVersionHash` der englischen Fassung noch aktuell ist.

## Pull Requests

Ein redaktioneller Pull Request beschreibt:

- welches fachliche Ergebnis, Ereignis oder Dossier dokumentiert wird,
- welches Änderungssignal die Recherche ausgelöst hat,
- welche **tatsächlichen Fachartefakte** dafür ausgewertet wurden,
- welche vorhandenen Beiträge, Dossiers und offenen PRs auf Dubletten geprüft wurden,
- warum ein neuer Beitrag nötig ist oder warum ein bestehender Beitrag aktualisiert wird,
- welchen Zeitraum es betrifft,
- welche Projektphase gilt,
- auf welchen öffentlichen Primärquellen externe Aussagen beruhen,
- was Befund und was noch Hypothese/Entwurf ist,
- ob KI bei Recherche, Redaktion oder Übersetzung eingesetzt wurde,
- welche Reviews noch erforderlich sind.

Für Agenten-PRs reicht „Commit X umgesetzt“ ausdrücklich nicht als fachliche Grundlage. Der PR muss nachvollziehbar machen, welches Artefakt die öffentliche Aussage trägt.

Agenten erstellen Draft-PRs und mergen ihre Arbeit nicht selbst.

## Externe Hinweise

Öffentliche Hinweise auf Publikationen, Standards, Forschungsprojekte oder Tools können über das Research-Tipp-Issue eingereicht werden. Ein Hinweis garantiert keine Aufnahme.
