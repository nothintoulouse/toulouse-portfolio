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
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      fit: "cover" | "contain";
      /** Disclosure pinned to the image. Required wherever the capture shows
       *  fabricated data that a viewer would otherwise read as real. */
      note?: string;
    }
  | { kind: "waveform" };

export type Project = {
  slug: string;
  ground: string;
  eyebrow: string;
  title: string;
  summary: string;
  /** Deliberately variable in length, and omitted entirely where a project has
   *  no honest numbers. Three tiles on every slide reads as a template. */
  metrics?: Metric[];
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
      note: "Synthetic data",
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
      { value: "5", label: "reading styles" },
      { value: "Paid", label: "native iOS, shipped" },
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
    slug: "voice-inventory",
    ground: "g-leather",
    eyebrow: "03 — Deployed POC · passcode-gated",
    title: "Count the bar by talking to it.",
    summary:
      "A manager counting alone has to speak, remember, and transcribe at once. This listens, matches spoken items against the property’s own sheet, and surfaces only the low-confidence lines — then patches the counts back into the original workbook.",
    metrics: [
      // 87.5% and 87 are both verified: the auto-fill figure from the first
      // e2e round trip, the test count by running the suite (87 passed).
      { value: "87.5%", label: "first synthetic auto-fill" },
      { value: "87", label: "automated tests" },
      { value: "2", label: "ASR providers, one interface" },
    ],
    tags: ["AssemblyAI", "Deepgram", "Postgres pg_trgm", "XLSX"],
    // No link: passcode-gated, per the standing decision not to expose it.
    media: {
      kind: "image",
      src: "/inventory/sheet.png",
      alt: "The counted sheet: nine spirits with counts filled from speech, and one line held back for review where the parser was not confident.",
      width: 1024,
      height: 1688,
      fit: "contain",
      note: "Synthetic workbook",
    },
  },
  {
    slug: "lautrec",
    ground: "g-forest-deep",
    eyebrow: "04 — Personal agent harness",
    title: "Long-running agents, kept on a leash.",
    summary:
      "LAUTREC reconstructs conversation context across stateless invocations, suppresses superseded drafts before they send, and routes authorised requests into calendar, email, task, media, and development workflows.",
    // No metrics: this one has no honest numbers, and inventing some to fill
    // the row is exactly the instinct that makes a portfolio look generated.
    tags: ["Claude Code", "Codex", "Gemini", "BlueBubbles"],
    media: { kind: "waveform" },
  },
  {
    slug: "training",
    ground: "g-paper",
    eyebrow: "05 — Training & enablement",
    title: "Operational knowledge, made teachable.",
    summary:
      "A 31-slide bartender learning program with explicit objectives, demonstration, case studies, an assessment, and job aids. It turns unwritten expectations into a repeatable training experience.",
    metrics: [
      { value: "31", label: "slides, 7 sections" },
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
