# Redaktions- und Veröffentlichungsworkflow

## Grundmodell

Der Newsroom trennt **Erkennen**, **Einordnen**, **Übersetzen**, **Prüfen** und **Veröffentlichen**.

```text
Projekt-Repositories + öffentliche Quellen
                  ↓
         Ereignisse erkennen
                  ↓
       Quellen und Relevanz prüfen
                  ↓
      deutscher Referenzentwurf
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

## Struktur bei vielen Beiträgen

Einzelbeiträge werden nicht nur über Rubriken organisiert. Die Website bietet vier unabhängige Sichten:

- **Aktuell:** nach `publishedAt`,
- **Archiv:** nach `event.start/end`,
- **Themen:** nach sprachneutraler Rubrik,
- **Dossiers:** kuratierte Verbindung mehrerer Einzelbeiträge.

Damit bleiben auch mehrere Meldungen pro Tag handhabbar.

## Formate

- `brief` – kurze eigenständig relevante Meldung,
- `article` – substanzieller Beitrag,
- `digest` – Wochen-, Monats- oder Themenrückblick,
- Dossiers sind eine eigene kuratierte Content-Sammlung.

## Mehrsprachigkeit

Deutsch ist Referenzsprache; Englisch wird mitgeführt. Fehlende Übersetzungen werden sichtbar als fehlend behandelt, nicht per stillem Fallback ersetzt.

Übersetzungsmetadaten ermöglichen später die Erkennung veralteter Fassungen.

## Qualitäts-Gates

Vor Veröffentlichung prüfen:

- Fakten und Primärquellen,
- Evidenztyp,
- Datenschutz und Vertraulichkeit,
- Ereignisdatum vs. Veröffentlichungsdatum,
- Projektphase,
- DE/EN-Konsistenz,
- verständliche Sprache,
- Barrierefreiheit,
- CI-Build.

## Vorbereitungsphase September 2026

Die Nachdokumentation der Arbeiten vor dem 01.10.2026 wird als **Vorbereitungsphase** geführt. Einzelbeiträge werden retrospektiv mit ihrem tatsächlichen Ereigniszeitraum einsortiert und in einem kuratierten Dossier zusammengeführt.
