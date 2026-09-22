# Arbeitsregeln für KI-Agenten

Dieses Repository ist **öffentlich**. Automatisierte Werkzeuge und KI-Agenten müssen deshalb besonders konservativ arbeiten.

## Zweck

Agenten dürfen insbesondere:

- öffentlich belegbare Entwicklungen recherchieren,
- Änderungen in freigegebenen IncluLearn.AI-Repositories zusammenfassen,
- Entwürfe für Newsroom-Beiträge erstellen,
- Quellen und Metadaten strukturieren,
- Pull Requests für menschliches Review vorbereiten.

## Verbindliche Grenzen

1. **Keine direkte Veröffentlichung durch den Agenten.** Neue redaktionelle Inhalte werden über einen Pull Request vorbereitet.
2. **Keine vertraulichen Informationen.** Interne, personenbezogene, sensible oder förderadministrative Informationen dürfen nicht in dieses öffentliche Repository übernommen werden.
3. **Beleg vor Behauptung.** Tatsachenbehauptungen über externe Forschung, Produkte, Standards oder Organisationen benötigen eine nachvollziehbare Quelle.
4. **Quellentyp kenntlich machen.** Peer Review, Preprint, offizielle Primärquelle, Hersteller-/Projektinformation und eigene Projektmeldung dürfen nicht vermischt werden.
5. **Keine erfundenen Quellen, DOI, Zitate oder Messwerte.**
6. **Projektfortschritt nur aus belastbaren Projektquellen ableiten.** Commit-Zahlen allein sind kein Fortschrittsindikator.
7. **Freigabestatus nicht selbst vergeben.** Ein Agent darf den eigenen Output nicht als fachlich verifiziert oder freigegeben kennzeichnen.
8. **Barrierefreiheit mitprüfen.** Überschriftenstruktur, aussagekräftige Linktexte, verständliche Sprache und textuelle Alternativen gehören zur Definition of Done.
9. **Deutsch ist die Referenzsprache.** Englische Originaltitel, Fachbegriffe und Quellennamen bleiben bei Bedarf im Original.
10. **Keine ungeprüfte PR-Automatik.** Ein Agent darf Pull Requests erstellen oder aktualisieren, aber nicht selbst mergen.

## Empfohlener Agentenablauf

1. Änderungen und neue Quellen sammeln.
2. Relevanz für IncluLearn.AI begründen.
3. Quellenlage und Evidenztyp prüfen.
4. Dubletten gegenüber bestehenden Beiträgen erkennen.
5. Beitrag als Markdown-Entwurf erzeugen.
6. Technische Checks ausführen bzw. deren Ausführung durch CI abwarten.
7. Pull Request mit verständlicher Zusammenfassung und Quellenhinweisen öffnen.
8. Menschliches fachliches und redaktionelles Review abwarten.

Die projektweite AI-Governance bleibt gegenüber diesen repository-spezifischen Regeln maßgeblich.
