# Arbeitsregeln für KI-Agenten

Dieses Repository ist **öffentlich**. Agenten arbeiten deshalb konservativ, quellengestützt und reviewbar.

## Zweck

Agenten dürfen:

- öffentlich geeigneten Projektfortschritt aus IncluLearn.AI-Artefakten ableiten,
- relevante externe Forschung, Standards, Tools und Projekte recherchieren,
- Ereignisse zu redaktionell sinnvollen Meldungen clustern,
- deutsche Entwürfe und englische Übersetzungen vorbereiten,
- Quellen und Metadaten strukturieren,
- Draft Pull Requests für menschliches Review öffnen.

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

## Empfohlener Agentenablauf

1. Änderungen seit dem letzten Lauf sammeln.
2. Mehrere technische Änderungen zu fachlich verständlichen Ereignissen clustern.
3. Relevanz für IncluLearn.AI begründen.
4. Externe Primärquellen öffnen und Evidenztyp prüfen.
5. Dubletten gegenüber bestehenden Beiträgen, Dossiers und dem Forschungsstand erkennen.
6. Öffentlichkeits- und Vertraulichkeits-Gate durchführen.
7. Deutschen Referenzbeitrag nach `templates/beitrag.md` erstellen.
8. Englische Fassung mit derselben `translationKey` vorbereiten.
9. Beide Fassungen und ggf. Dossieränderungen in **einem Draft-PR** bündeln.
10. CI abwarten und menschliches fachliches, redaktionelles, sprachliches und Accessibility-Review anfordern.

Die projektweite AI-Governance bleibt gegenüber diesen repository-spezifischen Regeln maßgeblich.
