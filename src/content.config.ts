import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const locale = z.enum(["de", "en"]);
const category = z.enum([
  "project-progress",
  "research-radar",
  "tools-transfer",
  "publications-events"
]);
const projectPhase = z.enum(["prior-work", "preparation", "funded", "post-project"]);
const sourceKind = z.enum([
  "peer-reviewed",
  "preprint",
  "official-primary",
  "standard-specification",
  "research-project",
  "vendor-project",
  "community-secondary"
]);
const translationStatus = z.enum(["source", "machine", "reviewed"]);

const translationFields = {
  translationKey: z.string(),
  locale,
  sourceLang: locale.default("de"),
  translationStatus: translationStatus.default("source"),
  sourceVersionHash: z.string().optional()
};

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    ...translationFields,
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    event: z.object({
      start: z.coerce.date(),
      end: z.coerce.date().optional()
    }),
    projectPhase,
    retroactive: z.boolean().default(false),
    category,
    format: z.enum(["brief", "article", "digest"]).default("article"),
    keyFindings: z.array(z.string()).default([]),
    openQuestions: z.array(z.string()).default([]),
    partnerQuestions: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    dossiers: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    authors: z.array(z.string()).default([]),
    evidence: z.enum([
      "project-source",
      "peer-reviewed",
      "preprint",
      "official-primary",
      "vendor-project",
      "editorial-analysis"
    ]),
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

const dossiers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/dossiers" }),
  schema: z.object({
    ...translationFields,
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    from: z.coerce.date(),
    to: z.coerce.date().optional(),
    projectPhase,
    updatedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featuredItems: z.array(z.string()).default([]),
    aiAssisted: z.boolean().default(false),
    draft: z.boolean().default(true)
  })
});

export const collections = { news, dossiers };
