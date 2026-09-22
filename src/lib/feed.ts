import type { Locale } from "./i18n";
import { newsPath, publishedNews } from "./news";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export async function buildFeed(lang: Locale, site: URL | undefined, base: string): Promise<Response> {
  const root = site ?? new URL("https://inclulearn-ai.github.io");
  const cleanBase = base.replace(/\/$/, "");
  const posts = await publishedNews(lang);
  const title = lang === "de" ? "IncluLearn.AI Newsroom & Research Radar" : "IncluLearn.AI Newsroom & Research Radar";
  const description = lang === "de"
    ? "Projektfortschritt, Forschung und Transfer rund um IncluLearn.AI."
    : "Project progress, research and transfer around IncluLearn.AI.";

  const items = posts.map((post) => {
    const link = new URL(cleanBase + newsPath(post), root).toString();
    return `<item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${post.data.publishedAt.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.summary)}</description>
      <category>${escapeXml(post.data.category)}</category>
    </item>`;
  }).join("\n");

  const feedUrl = new URL(`${cleanBase}/${lang}/feed.xml`, root).toString();
  const homeUrl = new URL(`${cleanBase}/${lang}/`, root).toString();

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(homeUrl)}</link>
    <description>${escapeXml(description)}</description>
    <language>${lang}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" }
  });
}
