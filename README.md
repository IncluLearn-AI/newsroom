# IncluLearn.AI – Newsroom & Research Radar

Dieses öffentliche Repository bildet die technische und redaktionelle Basis für den **IncluLearn.AI Newsroom**.

Der Newsroom bündelt künftig:

- verständliche Berichte zum Projektfortschritt,
- relevante neue Publikationen und Entwicklungen aus Forschung und Praxis,
- Tools, Standards und technische Entwicklungen rund um digitale Barrierefreiheit und KI,
- Transfer-, Veranstaltungs- und Öffentlichkeitsarbeit des Projekts.

## Publikationsprinzip

Automatisierte Recherche und KI-gestützte Redaktion dürfen Entwürfe vorbereiten. Öffentliche Inhalte werden jedoch erst nach menschlicher Prüfung und Freigabe veröffentlicht.

Der geplante Workflow lautet:

`Recherche → Einordnung → Markdown-Entwurf → Pull Request → menschliches Review → Merge → Veröffentlichung`

## Technik

- Astro als statischer Site Generator
- Markdown/MDX für redaktionelle Inhalte
- GitHub Actions für Build und GitHub-Pages-Deployment
- barrierearme, responsive und text-first aufgebaute Oberfläche
- Deutsch als Referenzsprache

Lokaler Einstieg:

```bash
npm install
npm run dev
```

Qualitätsprüfung:

```bash
npm run check
npm run build
```

## Repository-Struktur

- `src/content/news/` – Newsroom-Beiträge
- `src/pages/` – öffentliche Seiten
- `research/news-watchlist.yaml` – kuratierte Themen und Quellenklassen für den Research Radar
- `docs/redaktionsworkflow.md` – Redaktions- und Veröffentlichungsprozess
- `AGENTS.md` – verbindliche Regeln für automatisierte Agenten
- `.github/workflows/` – CI und Pages-Deployment

## Wichtige Grenze

Dieses Repository ist **öffentlich**. Interne, personenbezogene, vertrauliche oder förderadministrative Informationen gehören nicht hierher. Die privaten IncluLearn.AI-Repositories dienen nur als kontrollierte Quellen für öffentlich freigabefähige Zusammenfassungen.
