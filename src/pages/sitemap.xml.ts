import type { APIRoute } from "astro";
import { archiveMonthPath, locales, pathFor, topicPath, type Category } from "../lib/i18n";
import { dossierPath, eventDate, newsPath, publishedDossiers, publishedNews } from "../lib/news";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = async ({ site }) => {
  const root = site ?? new URL("https://inclulearn-ai.github.io");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const posts = await publishedNews();
  const dossiers = await publishedDossiers();
  const categories: Category[] = ["project-progress", "research-radar", "tools-transfer", "publications-events"];
  const paths = new Set<string>();

  for (const lang of locales) {
    for (const target of ["home", "project", "news", "archive", "topics", "dossiers", "methodology"] as const) {
      paths.add(pathFor(lang, target));
    }
    for (const category of categories) paths.add(topicPath(lang, category));

    const langPosts = posts.filter((post) => post.data.locale === lang);
    const months = new Set<string>();
    for (const post of langPosts) {
      paths.add(newsPath(post));
      const date = eventDate(post);
      months.add(`${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`);
    }
    for (const key of months) {
      const [year, month] = key.split("-").map(Number);
      paths.add(archiveMonthPath(lang, year, month));
    }

    for (const dossier of dossiers.filter((entry) => entry.data.locale === lang)) {
      paths.add(dossierPath(dossier));
    }
  }

  const urls = [...paths]
    .sort()
    .map((path) => `  <url><loc>${escapeXml(new URL(base + path, root).toString())}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
