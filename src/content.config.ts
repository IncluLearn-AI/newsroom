import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum([
      "Projektfortschritt",
      "Forschungsradar",
      "Tools & Transfer",
      "Publikationen & Veranstaltungen"
    ]),
    evidence: z.enum([
      "Eigene Projektmeldung",
      "Peer Review",
      "Preprint",
      "Offizielle Primärquelle",
      "Hersteller-/Projektinformation",
      "Redaktionelle Einordnung"
    ]),
    tags: z.array(z.string()).default([]),
    sourceUrl: z.string().url().optional(),
    sourceLabel: z.string().optional(),
    draft: z.boolean().default(true)
  })
});

export const collections = { news };
