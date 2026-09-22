# IncluLearn.AI – Newsroom & Research Radar

Dieses öffentliche Repository bildet die technische und redaktionelle Basis für den **IncluLearn.AI Newsroom**.

Öffentliche Website: **https://inclulearn-ai.github.io/newsroom/**

## Sprachen

Der Newsroom ist von Beginn an mehrsprachig aufgebaut:

- **Deutsch** ist die redaktionelle Referenzsprache.
- **Englisch** wird als eigenständige Sprachversion mitgeführt.
- Weitere Sprachen sollen später ohne grundlegenden Umbau ergänzt werden können.

Die öffentlichen Einstiege sind:

- Deutsch: `/de/`
- English: `/en/`

UI-Texte und Taxonomie werden über sprachneutrale Schlüssel modelliert. Beiträge in unterschiedlichen Sprachen werden über `translationKey` miteinander verbunden. Maschinell vorbereitete Übersetzungen tragen `translationStatus: machine`; geprüfte Fassungen `translationStatus: reviewed`.

## Zeitstruktur

Jeder News-Beitrag unterscheidet zwei Zeitachsen:

1. **Ereigniszeitraum** – wann das beschriebene Ergebnis oder Ereignis tatsächlich stattgefunden hat.
2. **Veröffentlichungszeitpunkt** – wann der Newsroom-Beitrag veröffentlicht wurde.

Dadurch können vorbereitende Arbeiten retrospektiv dokumentiert werden, ohne ein historisch falsches Veröffentlichungsdatum zu erzeugen.

Die Website stellt Inhalte deshalb in mehreren Sichten bereit:

- **Aktuell** – nach Veröffentlichungszeitpunkt,
- **Archiv / Project timeline** – nach Ereigniszeitraum,
- **Themen / Topics** – nach inhaltlicher Rubrik,
- **Dossiers** – kuratierte Zusammenfassungen zusammengehöriger Beiträge.

## Beitragsmodell

Rubrik, Format und Projektphase sind voneinander getrennt.

Rubriken:

- `project-progress`
- `research-radar`
- `tools-transfer`
- `publications-events`

Formate:

- `brief`
- `article`
- `digest`

Projektphasen:

- `preparation`
- `funded`
- `post-project`

## Publikationsprinzip

Automatisierte Recherche und KI-gestützte Redaktion dürfen Entwürfe und Übersetzungen vorbereiten. Öffentliche Inhalte werden erst nach menschlicher Prüfung und Freigabe veröffentlicht.

`Recherche → Ereignisse clustern → DE-Entwurf → EN-Fassung → Draft-PR → menschliches Review → Merge → Veröffentlichung`

## Repository-Struktur

- `src/content/news/de/` – deutsche News-Beiträge
- `src/content/news/en/` – englische News-Beiträge
- `src/content/dossiers/de/` – deutsche Dossiers
- `src/content/dossiers/en/` – englische Dossiers
- `templates/beitrag.md` – Artikelvorlage
- `templates/dossier.md` – Dossiervorlage
- `src/lib/i18n.ts` – Sprachen, UI-Texte, sprachneutrale Taxonomie und Routen
- `research/news-watchlist.yaml` – Themen und Quellenklassen für den Research Radar
- `docs/automation-prompt.md` – Soll-Aufgabe des News-/Research-Agenten
- `AGENTS.md` – verbindliche Regeln für Agenten

## Technik

- Astro als statischer Site Generator
- Markdown/MDX für redaktionelle Inhalte
- GitHub Actions für Build und GitHub Pages
- sprachspezifische RSS-Feeds
- Sitemap mit beiden Sprachversionen
- Canonical- und `hreflang`-Metadaten
- text-first und barrierearm

Lokal:

```bash
npm install
npm run dev
npm run build
```

## Wichtige Grenze

Dieses Repository ist **öffentlich**. Interne, personenbezogene, vertrauliche, sicherheitsrelevante oder förderadministrative Informationen gehören nicht hierher. Private IncluLearn.AI-Repositories dienen nur als kontrollierte Quellen für öffentlich freigabefähige Zusammenfassungen.
