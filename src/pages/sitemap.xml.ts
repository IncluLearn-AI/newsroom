import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const root = site ?? new URL("https://inclulearn-ai.github.io");
  const posts = (await getCollection("news")).filter((entry) => !entry.data.draft);

  const paths = [
    base,
    base + "news/",
    base + "methodik/",
    ...posts.map((post) => base + "news/" + post.id + "/")
  ];

  const urls = paths
    .map((path) => `  <url><loc>${escapeXml(new URL(path, root).toString())}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
