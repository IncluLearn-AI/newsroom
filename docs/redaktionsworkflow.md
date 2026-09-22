# Redaktions- und Veröffentlichungsworkflow

## Zielgruppen

Der Newsroom richtet sich vor allem an:

- Projektmitglieder, einschließlich nicht-technischer Rollen,
- Projektbeirat und assoziierte Partner,
- Praxis- und Validierungspartner,
- interessierte externe Fachöffentlichkeit.

Die redaktionelle Aufgabe besteht darin, relevante Projekt- und Forschungsergebnisse so zu verdichten, dass diese Gruppen den Stand, die Bedeutung und offene Fragen verstehen können, ohne die internen Repositories selbst lesen zu müssen.

## Grundmodell

Der Newsroom trennt **Erkennen**, **fachlich analysieren**, **einordnen**, **übersetzen**, **prüfen** und **veröffentlichen**.

```text
Git-Änderung / externe Meldung
            ↓
     Recherche-Signal
            ↓
 tatsächliche Fachartefakte lesen
            ↓
 Ergebnisse + Grenzen + offene Fragen
            ↓
 öffentliche Primärquellen prüfen
            ↓
   redaktionelle Synthese DE
            ↓
     englische Sprachfassung
            ↓
          Draft-PR
            ↓
fachlich + redaktionell + Sprache + A11y
            ↓
           Merge
            ↓
 GitHub Pages Veröffentlichung
```

**Wichtig:** Commit- oder PR-Titel sind keine ausreichende Artikelquelle. Sie dienen dazu, relevante Fachartefakte zu finden.

## Was einen guten Beitrag ausmacht

Ein größerer Beitrag priorisiert:

1. konkrete Ergebnisse oder Befunde,
2. ihre Bedeutung für IncluLearn.AI,
3. Evidenz und Grenzen,
4. offene Fragen und Validierungsbedarf,
5. bei passendem Thema konkrete Fragen an Projektteam, Beirat oder Praxispartner.

Repository-Struktur, Commit-Historie oder interne Prozessdetails werden nur erläutert, wenn sie für das Verständnis selbst relevant sind.

Ein Beitrag darf ausdrücklich sagen, dass eine Ableitung noch **Hypothese**, **Entwurf** oder **nicht validiert** ist. Präzise Unsicherheit ist besser als ein künstlich endgültiger Ton.

## Struktur bei vielen Beiträgen

Einzelbeiträge werden nicht nur über Rubriken organisiert. Die Website bietet vier unabhängige Sichten:

- **Aktuell:** nach `publishedAt`,
- **Archiv:** nach `event.start/end`,
- **Themen:** nach sprachneutraler Rubrik,
- **Dossiers:** kuratierte Verbindung mehrerer Einzelbeiträge.

Damit bleiben auch mehrere Meldungen pro Tag handhabbar.

## Formate

### `brief`

Kurze eigenständig relevante Meldung. Ein klarer Sachverhalt, der keine umfangreiche Synthese rechtfertigt.

### `article`

Substanzieller Fachbeitrag. Er soll inhaltliche Ergebnisse, Bedeutung und Evidenzstatus vermitteln und nicht bloß Projektaktivität dokumentieren.

### `digest`

Zeitliche oder thematische Synthese mehrerer Entwicklungen. Ein Digest beantwortet „Was hat sich insgesamt verändert?“ und ist keine chronologische Commitliste.

### Dossier

Kuratierte, längerfristige Einstiegsebene. Ein Dossier erklärt Zusammenhänge, fasst wichtige Erkenntnisse zusammen und führt gezielt zu vertiefenden Einzelbeiträgen.

## Redaktionsentscheidung: veröffentlichen oder nicht?

Vor einem neuen Beitrag prüfen:

- Gibt es eine Erkenntnis, Entscheidung oder Entwicklung, die für mindestens eine Zielgruppe eigenständig relevant ist?
- Können wir mehr sagen als „es wurde etwas angelegt/überarbeitet“?
- Ist der Inhalt besser als Aktualisierung eines bestehenden Beitrags oder Dossiers aufgehoben?
- Sind die fachlichen Quellen ausreichend gelesen?
- Ist der Evidenzstatus klar?

Wenn nicht, keinen neuen Artikel erzwingen.

## Mehrsprachigkeit

Deutsch ist Referenzsprache; Englisch wird mitgeführt. Fehlende Übersetzungen werden sichtbar als fehlend behandelt, nicht per stillem Fallback ersetzt.

Übersetzungsmetadaten ermöglichen die Erkennung veralteter Fassungen. Die englische Fassung muss dieselben fachlichen Einschränkungen und Evidenzabstufungen wie das deutsche Original erhalten.

## Qualitäts-Gates

Vor Veröffentlichung prüfen:

- tatsächliche Fachartefakte gelesen,
- konkrete Ergebnisse vor Prozessbeschreibung,
- Fakten und öffentliche Primärquellen,
- Evidenztyp und Validierungsstand,
- klare Trennung von Befund, Hypothese und redaktioneller Ableitung,
- Relevanz für die Zielgruppen,
- Datenschutz und Vertraulichkeit,
- Ereignisdatum vs. Veröffentlichungsdatum,
- Projektphase,
- DE/EN-Konsistenz,
- verständliche Sprache,
- Barrierefreiheit,
- CI-Build.

## Vorbereitungsphase September 2026

Die Nachdokumentation der Arbeiten vor dem 01.10.2026 wird als **Vorbereitungsphase** geführt. Einzelbeiträge werden retrospektiv mit ihrem tatsächlichen Ereigniszeitraum einsortiert und in einem kuratierten Dossier zusammengeführt.

Die bereits veröffentlichten September-Beiträge werden im Rahmen der redaktionellen Überarbeitung erneut an den hier definierten Qualitätskriterien gemessen.
