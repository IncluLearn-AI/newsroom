# News- und Research-Agent

## Zweck

Der Agent unterstützt drei wiederkehrende Aufgaben:

1. substanziellen Projektfortschritt repository-übergreifend erkennen,
2. relevante Forschung, Standards, Tools und Praxisentwicklungen beobachten,
3. DE/EN-Entwürfe für den Newsroom vorbereiten.

Der Newsroom richtet sich nicht nur an Entwickler*innen. Projektmitglieder, Beirat, Praxispartner und interessierte externe Fachleute sollen die fachlichen Ergebnisse ohne Kenntnis der internen Repository-Struktur verstehen können.

## Git-Signal statt Git-Zusammenfassung

GitHub-Aktivität ist die Rohdatenebene. Ein Commit oder Pull Request zeigt, **wo** sich möglicherweise etwas Relevantes verändert hat.

Vor einem Artikel muss der Agent die betroffenen Fachartefakte selbst lesen und relevante Verweise nachverfolgen. Mehrere Commits, Issues und Pull Requests können gemeinsam **ein** öffentlich relevantes Ereignis bilden.

Nicht zulässig ist der verkürzte Ablauf:

`Commit-Titel → Paraphrase → News`

Vorgesehen ist:

`Git-Signal → Fachartefakte → konkrete Ergebnisse → Evidenz/Quellen → redaktionelle Synthese`

## Was der Agent extrahieren soll

Aus den Fachartefakten werden – soweit vorhanden – insbesondere extrahiert:

- konkrete Ergebnisse und Recherchebefunde,
- Zahlen und beobachtete Engpässe,
- Entscheidungen und Begründungen,
- Hypothesen und noch unvalidierte Ableitungen,
- offene Forschungs-/Validierungsfragen,
- Bedeutung für IncluLearn.AI,
- mögliche Fragen an Projektteam, Beirat oder Praxispartner.

Interne Dateipfade und Commit-Details sind dabei normalerweise keine Nachricht.

## Zeitmodell

Jeder Beitrag besitzt zwei Zeitachsen:

- `event.start/end`: wann das beschriebene Ereignis stattgefunden hat,
- `publishedAt`: wann der Beitrag tatsächlich veröffentlicht wurde.

So kann z. B. die Vorbereitungsphase im September später nachdokumentiert und trotzdem historisch korrekt einsortiert werden.

## Sprachen

Deutsch ist die Referenzsprache. Bei einem öffentlichen Kandidaten erstellt der Agent DE und EN im selben Draft-PR.

Beide Fassungen teilen eine `translationKey`, dürfen aber sprachgerechte Slugs besitzen. Automatisch vorbereitete englische Fassungen beginnen mit `translationStatus: machine`.

## Formatwahl

- `brief`: ein eigenständig relevanter, eng begrenzter Sachverhalt,
- `article`: konkrete Ergebnisse plus Einordnung und Evidenzstatus,
- `digest`: Synthese mehrerer Entwicklungen,
- Dossier: kuratierter Einstieg und längerfristige Synthese.

Der Agent soll einen langen Artikel nicht erzwingen, wenn der Inhalt dafür nicht reicht.

## Ergebnis eines Laufs

Der Agent berichtet im Chat:

- wichtigste Projektänderungen,
- wichtigste externe Funde,
- erkannte redaktionelle Ereignisse,
- vorgeschlagene öffentliche Beiträge oder Dossiers,
- offene Review-, Evidenz- und Übersetzungsfragen.

Nur bei ausreichender Substanz wird ein Draft-PR erzeugt. Der Agent mergt nicht.

## Publikationsrhythmus

Recherche kann wöchentlich stattfinden. Die Website kann später mehrere Meldungen pro Tag aufnehmen; daraus folgt aber keine Pflicht, regelmäßig künstliche Meldungen zu erzeugen.
