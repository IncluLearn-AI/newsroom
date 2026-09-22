import type { APIRoute } from "astro";
import { buildFeed } from "../lib/feed";

/** Legacy endpoint: German remains the reference feed. Language-specific feeds live under /de/ and /en/. */
export const GET: APIRoute = async ({ site }) => buildFeed("de", site, import.meta.env.BASE_URL);
