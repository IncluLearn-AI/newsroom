# IncluLearn.AI – Newsroom & Research Radar

Dieses öffentliche Repository bildet die technische und redaktionelle Basis für den **IncluLearn.AI Newsroom**.

Der Newsroom bündelt:

- verständliche Berichte zum Projektfortschritt,
- relevante neue Publikationen und Entwicklungen aus Forschung und Praxis,
- Tools, Standards und technische Entwicklungen rund um digitale Barrierefreiheit und KI,
- Transfer-, Veranstaltungs- und Öffentlichkeitsarbeit des Projekts.

Öffentliche Website: **https://inclulearn-ai.github.io/newsroom/**

## Publikationsprinzip

Automatisierte Recherche und KI-gestützte Redaktion dürfen Entwürfe vorbereiten. Öffentliche Inhalte werden jedoch erst nach menschlicher Prüfung und Freigabe veröffentlicht.

`Recherche → Einordnung → Markdown-Entwurf → Draft-PR → menschliches Review → Merge → Veröffentlichung`

Die öffentliche Seite beschreibt die redaktionelle Methodik transparent unter `/methodik/`.

## Technik

- Astro als statischer Site Generator
- Markdown/MDX für redaktionelle Inhalte
- GitHub Actions für Build und GitHub-Pages-Deployment
- RSS-Feed und Sitemap
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

- `src/content/news/` – veröffentlichte bzw. in PRs vorbereitete Newsroom-Beiträge
- `templates/beitrag.md` – kanonische Artikelvorlage
- `src/pages/` – öffentliche Seiten, RSS und Sitemap
- `research/news-watchlist.yaml` – kuratierte Themen und Quellenklassen für den Research Radar
- `docs/redaktionsworkflow.md` – Redaktions- und Veröffentlichungsprozess
- `docs/news-agent.md` – Arbeitsweise des geplanten News-/Research-Agenten
- `AGENTS.md` – verbindliche Regeln für automatisierte Agenten
- `.github/workflows/` – CI und Pages-Deployment

## Beitragen

Hinweise auf neue Publikationen, Standards, Forschungsprojekte oder Tools können über das öffentliche **Research-Tipp-Issue** eingereicht werden. Details für Beiträge und Reviews stehen in `CONTRIBUTING.md`.

## Wichtige Grenze

Dieses Repository ist **öffentlich**. Interne, personenbezogene, vertrauliche oder förderadministrative Informationen gehören nicht hierher. Die privaten IncluLearn.AI-Repositories dienen nur als kontrollierte Quellen für öffentlich freigabefähige Zusammenfassungen.
