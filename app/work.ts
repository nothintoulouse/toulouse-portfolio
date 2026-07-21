/**
 * Overview-tier content for the front-page carousel.
 *
 * Each entry is deliberately short: a headline, two sentences, three numbers.
 * The depth (case blocks, evidence tables, ownership disclosure) belongs on the
 * per-project pages at /work/<slug>, not here. If a summary grows past what a
 * slide can hold at 375x667, that is the signal it belongs on the detail page.
 */

export type Metric = { value: string; label: string };

export type Media =
  | { kind: "image"; src: string; alt: string; width: number; height: number; fit: "cover" | "contain" }
  | { kind: "waveform" };

export type Project = {
  slug: string;
  ground: string;
  eyebrow: string;
  title: string;
  summary: string;
  metrics: Metric[];
  tags: string[];
  link?: { href: string; label: string };
  media: Media;
};

export const projects: Project[] = [
  {
    slug: "beo",
    ground: "g-forest",
    eyebrow: "01 — Flagship · deployed",
    title: "The operating layer Delphi didn’t provide.",
    summary:
      "Amadeus Delphi held the source data, but its exported event detail was too slow and fragmented for banquet leaders moving through a 30,000-square-foot operation. I rebuilt it as one view: rooms, assignments, diagrams, and status, on any browser.",
    metrics: [
      { value: "~15", label: "daily users" },
      { value: "500+", label: "automated tests" },
      { value: "Live", label: "in production" },
    ],
    tags: ["Next.js", "TypeScript", "Postgres", "Playwright"],
    media: {
      kind: "image",
      src: "/beo/02-spaces.png",
      alt: "Function Spaces timeline: a week of events laid across rooms, with setup chips, guest counts, and a seating-diagram thumbnail.",
      width: 2000,
      height: 1250,
      fit: "cover",
    },
  },
  {
    slug: "see-also",
    ground: "g-terracotta",
    eyebrow: "02 — Native product · shipped",
    title: "A calmer way to follow a Wikipedia rabbit hole.",
    summary:
      "A paid native iOS reader with nearby discovery, offline bookmarks, accessibility support, and five reading styles. I owned product definition, iterative review, App Store submission, and release operations.",
    metrics: [
      { value: "1", label: "App Store release" },
      { value: "5", label: "reading styles" },
      { value: "iOS", label: "SwiftUI · SwiftData" },
    ],
    tags: ["SwiftUI", "SwiftData", "MapKit", "CoreLocation"],
    link: { href: "https://apps.apple.com/app/id6783075252", label: "View on the App Store" },
    media: {
      kind: "image",
      src: "/seealso/reading.png",
      alt: "See Also on iPhone: an article cover for Bioluminescence, with a full-bleed photograph above the title set in Cormorant.",
      width: 640,
      height: 1306,
      fit: "contain",
    },
  },
  {
    slug: "tools",
    ground: "g-leather",
    eyebrow: "03 — Applied AI prototypes",
    title: "Range, with a consistent method.",
    summary:
      "A voice inventory assistant that turns spoken bar counts into a real workbook, and LAUTREC, a queue-aware personal-agent harness. Different interfaces, same discipline: keep deterministic work deterministic, and make uncertainty visible.",
    metrics: [
      { value: "87.5%", label: "first synthetic auto-fill" },
      { value: "88", label: "automated tests" },
      { value: "2", label: "prototypes" },
    ],
    tags: ["Claude Code", "Codex", "Gemini", "BlueBubbles"],
    media: { kind: "waveform" },
  },
  {
    slug: "training",
    ground: "g-paper",
    eyebrow: "04 — Training & enablement",
    title: "Operational knowledge, made teachable.",
    summary:
      "A 31-slide bartender learning program with explicit objectives, demonstration, case studies, an assessment, and job aids. It turns unwritten expectations into a repeatable training experience.",
    metrics: [
      { value: "31", label: "slides" },
      { value: "7", label: "learning sections" },
      { value: "3", label: "delivery modes" },
    ],
    tags: ["Lecture", "Lab", "Practicum"],
    media: {
      kind: "image",
      src: "/training-pour-standards.png",
      alt: "Training slide explaining a 1.25 ounce banquet pour standard.",
      width: 1600,
      height: 900,
      // contained, not cropped: this image *is* a document, and a bleed that
      // slices the headline in half reads as a bug rather than a crop
      fit: "contain",
    },
  },
];
