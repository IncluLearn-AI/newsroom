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
4. **Quellentyp kenntlich machen.** Peer Review, Preprint, offizielle Primärquelle, Hersteller-/Projektinformation und andere Quellentypen dürfen nicht vermischt werden.
5. **Keine erfundenen Quellen, DOI, Zitate oder Messwerte.**
6. **Projektfortschritt nur aus belastbaren Projektquellen ableiten.** Commit-Zahlen allein sind kein Fortschrittsindikator.
7. **Freigabestatus nicht selbst vergeben.** Ein Agent darf den eigenen Output nicht als fachlich verifiziert oder freigegeben kennzeichnen.
8. **Barrierefreiheit mitprüfen.** Überschriftenstruktur, aussagekräftige Linktexte, verständliche Sprache und textuelle Alternativen gehören zur Definition of Done.
9. **Deutsch ist die Referenzsprache.** Englische Originaltitel, Fachbegriffe und Quellennamen bleiben bei Bedarf im Original.
10. **Keine ungeprüfte PR-Automatik.** Ein Agent darf Pull Requests erstellen oder aktualisieren, aber nicht selbst mergen.
11. **Projektstart korrekt einordnen.** Aktivitäten vor dem 01.10.2026 werden nicht als Fortschritt des geförderten Durchführungszeitraums dargestellt, sofern dies nicht ausdrücklich fachlich freigegeben wurde.
12. **Keine vertraulichen Repository-Details leaken.** Interne Branch-Namen, Sicherheitsdetails, personenbezogene Zuständigkeiten, nicht öffentliche URLs und Verwaltungsunterlagen werden nicht in öffentliche Beiträge übernommen.

## Quellenhierarchie für den Research Radar

Bevorzugt werden:

1. peer-reviewte Originalpublikationen und DOI-Landingpages,
2. offizielle Standards, Spezifikationen und Behörden-/Institutionenquellen,
3. offizielle Seiten von Forschungsprojekten und Forschungsgruppen,
4. Primärdokumentation technischer Systeme,
5. Preprints mit klar sichtbarem Preprint-Status,
6. Hersteller-/Projektblogs,
7. Community- und Sekundärquellen nur ergänzend.

Pressemitteilungen oder Blogbeiträge ersetzen bei wissenschaftlichen Aussagen nicht die Originalpublikation.

## Empfohlener Agentenablauf

1. Seit dem letzten Lauf neue Projektänderungen und externe Quellen sammeln.
2. Relevanz für IncluLearn.AI begründen.
3. Primärquellen öffnen und Evidenztyp prüfen.
4. Dubletten gegenüber bestehenden Beiträgen und der Watchlist erkennen.
5. Fakten von redaktioneller Einordnung trennen.
6. Nur bei ausreichender Substanz einen Markdown-Entwurf erzeugen.
7. Beitrag mit vollständigen Quellenmetadaten und `aiAssisted: true` versehen.
8. Technische Checks ausführen bzw. deren Ausführung durch CI abwarten.
9. Draft Pull Request mit verständlicher Zusammenfassung und Review-Hinweisen öffnen.
10. Menschliches fachliches, redaktionelles und Accessibility-Review abwarten.

Die projektweite AI-Governance bleibt gegenüber diesen repository-spezifischen Regeln maßgeblich.
