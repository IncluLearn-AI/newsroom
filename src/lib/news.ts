import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./i18n";

export type NewsEntry = CollectionEntry<"news">;
export type DossierEntry = CollectionEntry<"dossiers">;

export async function publishedNews(lang?: Locale): Promise<NewsEntry[]> {
  return (await getCollection("news"))
    .filter((entry) => !entry.data.draft && (!lang || entry.data.locale === lang))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function publishedDossiers(lang?: Locale): Promise<DossierEntry[]> {
  return (await getCollection("dossiers"))
    .filter((entry) => !entry.data.draft && (!lang || entry.data.locale === lang))
    .sort((a, b) => b.data.updatedAt.valueOf() - a.data.updatedAt.valueOf());
}

export function eventDate(entry: NewsEntry): Date {
  return entry.data.event.end ?? entry.data.event.start;
}

export function newsPath(entry: NewsEntry): string {
  return `/${entry.data.locale}/news/${entry.data.slug}/`;
}

export function dossierPath(entry: DossierEntry): string {
  return `/${entry.data.locale}/dossiers/${entry.data.slug}/`;
}

export function counterpart<T extends NewsEntry | DossierEntry>(
  entries: T[],
  translationKey: string,
  locale: Locale
): T | undefined {
  return entries.find(
    (entry) => entry.data.translationKey === translationKey && entry.data.locale === locale && !entry.data.draft
  );
}

export function groupByDay(entries: NewsEntry[], dateSelector: (entry: NewsEntry) => Date): Array<[string, NewsEntry[]]> {
  const groups = new Map<string, NewsEntry[]>();
  for (const entry of entries) {
    const key = dateSelector(entry).toISOString().slice(0, 10);
    const group = groups.get(key) ?? [];
    group.push(entry);
    groups.set(key, group);
  }
  return [...groups.entries()].sort(([a], [b]) => b.localeCompare(a));
}

export function formatDate(lang: Locale, date: Date): string {
  return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

export function formatDateTime(lang: Locale, date: Date): string {
  return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
    timeZoneName: "short"
  }).format(date);
}

export function formatEventRange(lang: Locale, start: Date, end?: Date): string {
  if (!end || start.toISOString().slice(0, 10) === end.toISOString().slice(0, 10)) {
    return formatDate(lang, start);
  }
  return `${formatDate(lang, start)} – ${formatDate(lang, end)}`;
}
