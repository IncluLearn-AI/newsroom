export type Locale = "de" | "en";
export const locales: readonly Locale[] = ["de", "en"] as const;

export type Category =
  | "project-progress"
  | "research-radar"
  | "tools-transfer"
  | "publications-events";

export type PostFormat = "brief" | "article" | "digest";
export type ProjectPhase = "preparation" | "funded" | "post-project";

export const ui = {
  de: {
    localeName: "Deutsch",
    skip: "Zum Hauptinhalt springen",
    home: "Start",
    news: "Aktuell",
    archive: "Archiv",
    topics: "Themen",
    dossiers: "Dossiers",
    methodology: "Methodik",
    demo: "Demo",
    github: "GitHub",
    languageNavigation: "Sprache wechseln",
    mainNavigation: "Hauptnavigation",
    latestHeading: "Neueste Beiträge",
    latestLead: "Nach Veröffentlichung sortiert. Für die historische Projektentwicklung dient das Archiv.",
    noPosts: "Noch keine freigegebenen Beiträge.",
    archiveHeading: "Projektchronik",
    archiveLead: "Nach dem tatsächlichen Ereigniszeitraum geordnet – unabhängig davon, wann ein Beitrag nachdokumentiert oder veröffentlicht wurde.",
    topicsHeading: "Themen",
    topicsLead: "Thematische Sicht auf alle veröffentlichten Beiträge.",
    dossiersHeading: "Dossiers",
    dossiersLead: "Kuratierte Übersichten bündeln zusammengehörige Entwicklungen über mehrere Einzelbeiträge hinweg.",
    published: "Veröffentlicht",
    event: "Ereignis",
    retroactive: "nachdokumentiert",
    aiNotice: "Dieser Beitrag wurde KI-gestützt recherchiert oder redaktionell vorbereitet und vor der Veröffentlichung menschlich geprüft.",
    sources: "Quellen",
    translationMachine: "Diese englische Fassung wurde maschinell vorbereitet und ist noch nicht sprachlich/fachlich geprüft.",
    feed: "RSS-Feed",
    methodologyFooter: "Redaktionelle Methodik",
    preparation: "Vorbereitungsphase",
    funded: "Geförderter Projektzeitraum",
    postProject: "Nachprojektphase",
    categories: {
      "project-progress": "Projektfortschritt",
      "research-radar": "Forschungsradar",
      "tools-transfer": "Tools & Transfer",
      "publications-events": "Publikationen & Veranstaltungen"
    },
    formats: {
      brief: "Kurzmeldung",
      article: "Beitrag",
      digest: "Rückblick"
    }
  },
  en: {
    localeName: "English",
    skip: "Skip to main content",
    home: "Home",
    news: "Latest",
    archive: "Archive",
    topics: "Topics",
    dossiers: "Dossiers",
    methodology: "Methodology",
    demo: "Demo",
    github: "GitHub",
    languageNavigation: "Change language",
    mainNavigation: "Main navigation",
    latestHeading: "Latest posts",
    latestLead: "Sorted by publication time. Use the archive to follow the historical project timeline.",
    noPosts: "No reviewed posts have been published yet.",
    archiveHeading: "Project timeline",
    archiveLead: "Ordered by the actual event period, regardless of when a retrospective post was written or published.",
    topicsHeading: "Topics",
    topicsLead: "A thematic view of all published posts.",
    dossiersHeading: "Dossiers",
    dossiersLead: "Curated overviews connect related developments across multiple individual posts.",
    published: "Published",
    event: "Event",
    retroactive: "documented retrospectively",
    aiNotice: "This post was researched or editorially prepared with AI assistance and reviewed by a human before publication.",
    sources: "Sources",
    translationMachine: "This English version was machine-prepared and has not yet received language/subject review.",
    feed: "RSS feed",
    methodologyFooter: "Editorial methodology",
    preparation: "Preparation phase",
    funded: "Funded project period",
    postProject: "Post-project phase",
    categories: {
      "project-progress": "Project progress",
      "research-radar": "Research radar",
      "tools-transfer": "Tools & transfer",
      "publications-events": "Publications & events"
    },
    formats: {
      brief: "Brief",
      article: "Article",
      digest: "Digest"
    }
  }
} as const;

export const routeSegments = {
  de: {
    archive: "archiv",
    topics: "themen",
    methodology: "methodik"
  },
  en: {
    archive: "archive",
    topics: "topics",
    methodology: "methodology"
  }
} as const;

const categorySlugs: Record<Locale, Record<Category, string>> = {
  de: {
    "project-progress": "projektfortschritt",
    "research-radar": "forschungsradar",
    "tools-transfer": "tools-transfer",
    "publications-events": "publikationen-veranstaltungen"
  },
  en: {
    "project-progress": "project-progress",
    "research-radar": "research-radar",
    "tools-transfer": "tools-transfer",
    "publications-events": "publications-events"
  }
};

export function categorySlug(lang: Locale, category: Category): string {
  return categorySlugs[lang][category];
}

export function categoryFromSlug(lang: Locale, slug: string): Category | undefined {
  return (Object.entries(categorySlugs[lang]).find(([, value]) => value === slug)?.[0]) as Category | undefined;
}

export function phaseLabel(lang: Locale, phase: ProjectPhase): string {
  const copy = ui[lang];
  return phase === "preparation" ? copy.preparation : phase === "funded" ? copy.funded : copy.postProject;
}

export function pathFor(lang: Locale, target: "home" | "news" | "archive" | "topics" | "dossiers" | "methodology"): string {
  if (target === "home") return `/${lang}/`;
  if (target === "news") return `/${lang}/news/`;
  if (target === "dossiers") return `/${lang}/dossiers/`;
  return `/${lang}/${routeSegments[lang][target]}/`;
}

export function topicPath(lang: Locale, category: Category): string {
  return `${pathFor(lang, "topics")}${categorySlug(lang, category)}/`;
}

export function archiveMonthPath(lang: Locale, year: number, month: number): string {
  return `${pathFor(lang, "archive")}${year}/${String(month).padStart(2, "0")}/`;
}

export type Evidence =
  | "project-source"
  | "peer-reviewed"
  | "preprint"
  | "official-primary"
  | "vendor-project"
  | "editorial-analysis";

export type SourceKind =
  | "peer-reviewed"
  | "preprint"
  | "official-primary"
  | "standard-specification"
  | "research-project"
  | "vendor-project"
  | "community-secondary";

const evidenceLabels: Record<Locale, Record<Evidence, string>> = {
  de: {
    "project-source": "Eigene Projektmeldung",
    "peer-reviewed": "Peer Review",
    preprint: "Preprint",
    "official-primary": "Offizielle Primärquelle",
    "vendor-project": "Hersteller-/Projektinformation",
    "editorial-analysis": "Redaktionelle Einordnung"
  },
  en: {
    "project-source": "Own project report",
    "peer-reviewed": "Peer reviewed",
    preprint: "Preprint",
    "official-primary": "Official primary source",
    "vendor-project": "Vendor / project information",
    "editorial-analysis": "Editorial analysis"
  }
};

const sourceKindLabels: Record<Locale, Record<SourceKind, string>> = {
  de: {
    "peer-reviewed": "Peer Review",
    preprint: "Preprint",
    "official-primary": "Offizielle Primärquelle",
    "standard-specification": "Standard / Spezifikation",
    "research-project": "Forschungsprojekt",
    "vendor-project": "Hersteller- / Projektinformation",
    "community-secondary": "Community / Sekundärquelle"
  },
  en: {
    "peer-reviewed": "Peer reviewed",
    preprint: "Preprint",
    "official-primary": "Official primary source",
    "standard-specification": "Standard / specification",
    "research-project": "Research project",
    "vendor-project": "Vendor / project information",
    "community-secondary": "Community / secondary source"
  }
};

export function evidenceLabel(lang: Locale, evidence: Evidence): string {
  return evidenceLabels[lang][evidence];
}

export function sourceKindLabel(lang: Locale, kind: SourceKind): string {
  return sourceKindLabels[lang][kind];
}
