import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sourceKind = z.enum([
  "Peer Review",
  "Preprint",
  "Offizielle Primärquelle",
  "Standard / Spezifikation",
  "Forschungsprojekt",
  "Hersteller- / Projektinformation",
  "Community / Sekundärquelle"
]);

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
    authors: z.array(z.string()).default([]),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      kind: sourceKind,
      published: z.coerce.date().optional(),
      doi: z.string().optional()
    })).default([]),
    aiAssisted: z.boolean().default(false),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true)
  })
});

export const collections = { news };
