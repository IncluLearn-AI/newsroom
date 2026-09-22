import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const root = site ?? new URL("https://inclulearn-ai.github.io");
  const posts = (await getCollection("news"))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  const items = posts.map((post) => {
    const link = new URL(base + "news/" + post.id + "/", root).toString();
    return `<item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${post.data.published.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.summary)}</description>
      <category>${escapeXml(post.data.category)}</category>
    </item>`;
  }).join("\n");

  const feedUrl = new URL(base + "feed.xml", root).toString();
  const homeUrl = new URL(base, root).toString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>IncluLearn.AI Newsroom &amp; Research Radar</title>
    <link>${escapeXml(homeUrl)}</link>
    <description>Projektfortschritt, Forschung und Transfer rund um IncluLearn.AI.</description>
    <language>de</language>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" }
  });
};
