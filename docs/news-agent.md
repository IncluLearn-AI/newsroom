# News- und Research-Agent

## Zweck

Der Agent unterstützt drei wiederkehrende Aufgaben:

1. substanziellen Projektfortschritt repository-übergreifend erkennen,
2. relevante Forschung, Standards, Tools und Praxisentwicklungen beobachten,
3. DE/EN-Entwürfe für den Newsroom vorbereiten.

## Ereignis statt Commit

GitHub-Aktivität ist die Rohdatenebene. Mehrere Commits, Issues und Pull Requests können gemeinsam **ein** öffentlich relevantes Ereignis bilden. Der Agent soll deshalb Ergebnisse und Entscheidungen erkennen, nicht Aktivitätszahlen publizieren.

## Zeitmodell

Jeder Beitrag besitzt zwei Zeitachsen:

- `event.start/end`: wann das beschriebene Ereignis stattgefunden hat,
- `publishedAt`: wann der Beitrag tatsächlich veröffentlicht wurde.

So kann z. B. die Vorbereitungsphase im September später nachdokumentiert und trotzdem historisch korrekt einsortiert werden.

## Sprachen

Deutsch ist die Referenzsprache. Bei einem öffentlichen Kandidaten erstellt der Agent DE und EN im selben Draft-PR.

Beide Fassungen teilen eine `translationKey`, dürfen aber sprachgerechte Slugs besitzen. Automatisch vorbereitete englische Fassungen beginnen mit `translationStatus: machine`.

## Ergebnis eines Laufs

Der Agent berichtet im Chat:

- wichtigste Projektänderungen,
- wichtigste externe Funde,
- erkannte redaktionelle Ereignisse,
- vorgeschlagene öffentliche Beiträge oder Dossiers,
- offene Review- und Übersetzungsfragen.

Nur bei ausreichender Substanz wird ein Draft-PR erzeugt. Der Agent mergt nicht.

## Publikationsrhythmus

Recherche kann wöchentlich stattfinden. Die Website kann später mehrere Meldungen pro Tag aufnehmen; daraus folgt aber keine Pflicht, regelmäßig künstliche Meldungen zu erzeugen.
