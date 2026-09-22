# ADR-0001: DE/EN-Spracharchitektur und duales Zeitmodell

**Status:** angenommen  
**Datum:** 2026-09-22

## Kontext

Der Newsroom soll sowohl laufende Projektentwicklung als auch externe Forschungs- und Transfermeldungen aufnehmen. Bei mehreren Beiträgen pro Tag reichen Rubriken als Ordnungsprinzip nicht aus. Gleichzeitig ist IncluLearn.AI bereits in Deutsch und Englisch angelegt.

Retrospektive Nachdokumentation erzeugt außerdem zwei unterschiedliche Zeitpunkte: Das Ereignis kann früher stattgefunden haben als die Veröffentlichung des Beitrags.

## Entscheidung

1. Deutsch ist redaktionelle Referenzsprache; Englisch wird von Beginn an als separate Sprachversion mitgeführt.
2. Öffentliche Seiten verwenden symmetrische Sprachpräfixe `/de/` und `/en/`.
3. Sichtbare Taxonomie basiert intern auf sprachneutralen Schlüsseln.
4. Sprachfassungen eines Beitrags oder Dossiers werden über `translationKey` verbunden.
5. Übersetzungsmetadaten orientieren sich am erprobten Owli-AI-Muster: `sourceLang`, `translationStatus`, `sourceVersionHash`.
6. Beiträge unterscheiden `publishedAt` vom tatsächlichen `event.start/end`.
7. Die Ansicht **Aktuell** sortiert nach Veröffentlichung; das **Archiv** nach Ereigniszeitraum.
8. Rubrik, Format, Projektphase und Dossier-Zuordnung sind unabhängige Dimensionen.
9. Fehlende Übersetzungen werden nicht durch einen stillen Fallback in der falschen Sprache ersetzt.
10. Canonical-, `hreflang`-, RSS- und Sitemap-Strukturen berücksichtigen beide Sprachen.

## Konsequenzen

Die September-2026-Vorarbeiten können nachdokumentiert und trotzdem historisch korrekt eingeordnet werden. Der Newsroom bleibt auch bei mehreren täglichen Meldungen navigierbar und kann später um weitere Sprachen erweitert werden, ohne die Content-Identität neu zu modellieren.
