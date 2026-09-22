import type { Category, Locale } from "./i18n";

export interface CategoryEditorial {
  title: string;
  lead: string;
  purpose: string;
  questions: string[];
  subtopics: string[];
}

export const categoryEditorial: Record<Locale, Record<Category, CategoryEditorial>> = {
  de: {
    "project-progress": {
      title: "Projektfortschritt",
      lead: "Was im Projekt fachlich und technisch konkreter wird – von Nutzerbedarfen und Anforderungen bis zu Prototypen, Evaluation, Governance und Diensten.",
      purpose: "Diese Rubrik erklärt nicht nur, dass im Projekt gearbeitet wurde, sondern welche belastbaren Ergebnisse, Entscheidungen und offenen Punkte daraus entstanden sind.",
      questions: [
        "Welche Probleme und Nutzerbedarfe werden im Projekt konkret sichtbar?",
        "Welche fachlichen und technischen Entscheidungen folgen daraus – und warum?",
        "Wie prüfen wir Barrierefreiheit, Qualität und Nutzen statt nur technische Funktion?"
      ],
      subtopics: [
        "Bedarfe & Anforderungen",
        "Plattform & Processing Services",
        "Accessibility & Evaluation",
        "AI Governance & Qualität"
      ]
    },
    "research-radar": {
      title: "Forschungsradar",
      lead: "Forschung, Standards und Methoden, die für barrierefreie MINT-Lehrmaterialien, semantische Rekonstruktion und multimodale KI relevant sind.",
      purpose: "Der Forschungsradar ordnet neue und grundlegende Arbeiten danach ein, was sie für IncluLearn.AI tatsächlich bedeuten – einschließlich Grenzen, Evidenztyp und offener Forschungsfragen.",
      questions: [
        "Welche Verfahren können Dokumentstruktur und MINT-Semantik zuverlässig rekonstruieren?",
        "Wo liegen die Grenzen aktueller VLMs, OCR- und Document-AI-Verfahren?",
        "Welche Repräsentationen und Evaluationsmethoden helfen blinden und sehbehinderten Lernenden wirklich?"
      ],
      subtopics: [
        "Document AI & semantische Rekonstruktion",
        "Diagramme, Charts & technische Artefakte",
        "Mathematik & MathML",
        "Taktile, auditive & textuelle Repräsentationen",
        "Human-in-the-loop & Evaluation"
      ]
    },
    "tools-transfer": {
      title: "Tools & Transfer",
      lead: "Werkzeuge, Standards, offene Technologien und Transferfragen, die Forschungsergebnisse in nutzbare Praxis überführen können.",
      purpose: "Hier geht es um wiederverwendbare Technik und um die Frage, wie Ergebnisse mit bestehenden Arbeitsabläufen, Lernplattformen und Praxispartnern zusammengebracht werden können.",
      questions: [
        "Welche offenen Werkzeuge und Standards sind für den Projektkern praktisch anschlussfähig?",
        "Wie lassen sich geprüfte semantische Inhalte in bestehende Systeme und Workflows integrieren?",
        "Welche Ergebnisse können Partner früh erproben, rückmelden oder später selbst nachnutzen?"
      ],
      subtopics: [
        "Open Source & offene Standards",
        "APIs, LMS & Interoperabilität",
        "Produktions- und Review-Workflows",
        "Praxisvalidierung & Transfer"
      ]
    },
    "publications-events": {
      title: "Publikationen & Veranstaltungen",
      lead: "Eigene Veröffentlichungen, Vorträge, Workshops, Veranstaltungen und fachlicher Austausch rund um IncluLearn.AI.",
      purpose: "Diese Rubrik bündelt, wo Projektergebnisse veröffentlicht und diskutiert werden und welche Termine oder Beiträge für Projektteam, Beirat und Fachöffentlichkeit relevant sind.",
      questions: [
        "Welche eigenen Ergebnisse wurden veröffentlicht oder zur Diskussion gestellt?",
        "Wo findet fachlicher Austausch mit Forschung und Praxis statt?",
        "Welche Veranstaltungen und Veröffentlichungen sind für die Projektarbeit besonders relevant?"
      ],
      subtopics: [
        "Eigene Publikationen",
        "Konferenzen & Workshops",
        "Vorträge & Demonstrationen",
        "Partner- und Fachdialog"
      ]
    }
  },
  en: {
    "project-progress": {
      title: "Project progress",
      lead: "What is becoming more concrete in the project – from user needs and requirements to prototypes, evaluation, governance and services.",
      purpose: "This topic explains not merely that work happened, but which substantive results, decisions and open questions emerged from it.",
      questions: [
        "Which problems and user needs are becoming concrete?",
        "Which subject-matter and technical decisions follow, and why?",
        "How do we assess accessibility, quality and usefulness rather than technical function alone?"
      ],
      subtopics: [
        "Needs & requirements",
        "Platform & processing services",
        "Accessibility & evaluation",
        "AI governance & quality"
      ]
    },
    "research-radar": {
      title: "Research radar",
      lead: "Research, standards and methods relevant to accessible STEM learning materials, semantic reconstruction and multimodal AI.",
      purpose: "The research radar puts new and foundational work into context for IncluLearn.AI, including limitations, evidence type and open research questions.",
      questions: [
        "Which methods can reliably reconstruct document structure and STEM semantics?",
        "Where are the limits of current VLM, OCR and document-AI approaches?",
        "Which representations and evaluation methods actually help blind and visually impaired learners?"
      ],
      subtopics: [
        "Document AI & semantic reconstruction",
        "Diagrams, charts & technical artefacts",
        "Mathematics & MathML",
        "Tactile, audio & textual representations",
        "Human-in-the-loop & evaluation"
      ]
    },
    "tools-transfer": {
      title: "Tools & transfer",
      lead: "Tools, standards, open technologies and transfer questions that can turn research results into usable practice.",
      purpose: "This topic covers reusable technology and how project results can connect to existing workflows, learning platforms and practice partners.",
      questions: [
        "Which open tools and standards can practically support the project core?",
        "How can reviewed semantic content connect to existing systems and workflows?",
        "Which results can partners test, review or later reuse?"
      ],
      subtopics: [
        "Open source & open standards",
        "APIs, LMS & interoperability",
        "Production & review workflows",
        "Practice validation & transfer"
      ]
    },
    "publications-events": {
      title: "Publications & events",
      lead: "Our publications, talks, workshops, events and professional exchange around IncluLearn.AI.",
      purpose: "This topic shows where project results are published and discussed and which contributions or dates matter to the project team, advisory board and professional community.",
      questions: [
        "Which project results have been published or opened for discussion?",
        "Where does exchange with research and practice take place?",
        "Which events and publications are particularly relevant to the project?"
      ],
      subtopics: [
        "Our publications",
        "Conferences & workshops",
        "Talks & demonstrations",
        "Partner & professional dialogue"
      ]
    }
  }
};

export const audienceEditorial = {
  de: [
    {
      title: "Projektteam",
      text: "Schnell erfassen, was andere Arbeitspakete herausgefunden haben, welche Entscheidungen anstehen und welche Ergebnisse bereits belastbar sind."
    },
    {
      title: "Beirat & Praxispartner",
      text: "Erkennen, wo fachliche Rückmeldung, Validierung und Praxiserfahrung besonders wertvoll sind."
    },
    {
      title: "Fachöffentlichkeit",
      text: "Forschung, Methoden und Projektentscheidungen nachvollziehen, ohne die internen Repositories lesen zu müssen."
    }
  ],
  en: [
    {
      title: "Project team",
      text: "Quickly understand what other work areas have learned, which decisions are pending and which results are already robust."
    },
    {
      title: "Advisory board & practice partners",
      text: "See where subject-matter feedback, validation and practical experience can make the greatest contribution."
    },
    {
      title: "Professional community",
      text: "Follow research, methods and project decisions without having to read the internal repositories."
    }
  ]
} as const;
