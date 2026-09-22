import type { APIRoute } from "astro";
import { buildFeed } from "../../lib/feed";

export const GET: APIRoute = async ({ site }) => buildFeed("en", site, import.meta.env.BASE_URL);
