# toulouse.cloud unification — design spec

**Date:** 2026-07-21
**Status:** approved by Brayden, ready to implement
**Supersedes:** the palette/type decisions in `.agent/handoffs/2026-07-21-portfolio-deploy-and-unify.md`

## Problem

Three live properties read as three different brands:

| Property | Repo | Stack |
|---|---|---|
| `toulouse.cloud` | `toulouse-home` | single-file `index.html` |
| `portfolio.toulouse.cloud` | `toulouse-portfolio` | Next.js 16 App Router |
| `resume.toulouse.cloud` | `toulouse-resume` | single-file `index.html` |

The hub and résumé share tokens (`#176326`, `#CDB65A`, Libre Baskerville/Lato).
The portfolio diverges (`#17692f`, `#c9a941`, Georgia/Arial). Beyond tokens,
three structural problems:

1. **The portfolio has no page `max-width`.** Content is full-bleed with padding
   capped at ~7rem, while the h1 caps at 920px and body copy at 760px. At 2560px
   the text column strands against the left edge with the stat block flung right.
2. **Mobile is a ribbon.** At ≤720px every grid collapses to one column — seven
   stacked sections, and the 590px phone mockup and 500px dashboard window
   survive the collapse at full height.
3. **`toulouse.cloud/resume/` is a stale duplicate** of the résumé. It omits the
   Assistant Banquet Manager promotion (Feb 2026 – Present) entirely and still
   shows Banquet Captain as "Oct 2024 - Present". Anyone clicking Resume from
   the hub sees an outdated résumé.

## Decisions

- **Aesthetic: full-viewport gallery.** Each project is one panel, not a stacked
  section. Vertical proximity-snap on desktop, horizontal swipe deck on mobile.
- **Landing: routing front door.** One screen, no scroll. Two doors — Résumé
  (hospitality) and Portfolio (applied AI) — plus an App Store strip for See
  Also. The six About paragraphs collapse to two sentences.
- **Dashboard is deleted.** Brayden does not use it. This is a marketing site,
  not a personal utility. `toulouse-home/dashboard/` is removed, not unlinked.
- **One canonical résumé.** `toulouse-home/resume/` deleted; the door points at
  `resume.toulouse.cloud`.
- **Résumé layout is locked.** Restyle only — tokens and type change, structure
  does not. It must still print cleanly.
- **Two voices preserved.** The portfolio stays applied-AI-forward, the résumé
  stays hospitality-pure. Only the visual system unifies. (Carried over from the
  prior session's "two doors" positioning.)

## Design system

### Color

Leather, gold, and green. `--paper` and `--ink` are lifted from See Also's own
wordmark spec (`legere/design/wordmark/README.md`) so the app and the sites agree.

```css
--forest      #0F2E1C   /* primary dark ground — from portfolio's --forest */
--forest-deep #092014   /* wells, footer */
--green       #176326   /* brand green, mid accent */
--gold        #CDB65A   /* bronze gold — hairlines, numerals, NEVER a background */
--leather     #6B4634   /* saddle — the second dark ground */
--tan         #C8A47C   /* warm mid — dividers/borders on dark panels */
--terracotta  #B84F2D   /* See Also's accent — ONLY on the See Also panel */
--paper       #FBF7F1   /* light ground (from See Also) */
--ink         #1C1A17   /* text (from See Also) */
```

Retired: `--cream #F5F5DC` (dated yellow-beige), `#FFFFFF`, `#111827`, and the
portfolio's `#17692f` / `#c9a941` outliers.

**Gold is hairline-only** — rules, numerals, and thin borders, so it reads as
brass fittings rather than gilt. It is never a fill.

### Type

Retires Lato (generic) and Georgia/Arial (the portfolio's outliers).

- **Fraunces** — display. Variable, with optical-size and `WONK` axes. Warm and
  characterful at gallery sizes; `WONK=0, SOFT=0` on the résumé so it reads as a
  conservative transitional serif that prints clean.
- **Instrument Sans** — body and UI. Contemporary, slightly narrow, not Inter.

### Panel rhythm

`paper → forest → paper+terracotta (See Also) → leather → paper → forest`

Leather panels carry a real grain texture (layered noise), not flat brown.

## Site 1 — toulouse.cloud (front door)

One `100svh` panel, no scroll.

```
        BRAYDEN TOULOUSE
  hospitality operations · applied AI

  ┌─────────────┐  ┌─────────────┐
  │  RÉSUMÉ     │  │  PORTFOLIO  │
  │  the floor  │  │  the systems│
  └─────────────┘  └─────────────┘

     [§ See Also — App Store ↗]

  about · email · linkedin · github
```

**Signature interaction:** hovering or focusing a door floods the panel with
that door's color world — Résumé washes to paper/gold, Portfolio to
forest/green. One CSS transition. `prefers-reduced-motion` gets a static split.

The App Store strip uses the standalone `§` mark from
`legere/design/icon-explorations/final/section-mark.svg` (licensed for use below
160px) with `wordmark-dark.svg`.

**Deletions:** `resume/`, `dashboard/`, `landing.html`, `index_new.html`,
`index.html.backup`.

## Site 2 — portfolio.toulouse.cloud (gallery)

Seven sections become seven panels:

| # | Panel | Ground |
|---|---|---|
| 1 | Hero — name, thesis, evidence rail | paper |
| 2 | BEO Dashboard (flagship) | forest |
| 3 | See Also | paper + terracotta |
| 4 | Voice Inventory + LAUTREC (paired) | leather |
| 5 | Training & enablement | paper |
| 6 | Method | forest |
| 7 | About + Contact | leather |

### Fixing widescreen

Panel *grounds* are full-bleed; panel *content* sits on a 12-column grid capped
at **1600px and centered**. Product imagery deliberately breaks the grid and
bleeds off the right edge so wide viewports read as intentional asymmetry rather
than a void. A gold progress rail (`02/07`) pins to the right edge.

### Fixing mobile

The four project panels become a horizontal scroll-snap deck with dot
indicators — four swipes replacing ~9,000px of vertical ribbon. Tall mockups get
dedicated mobile variants instead of surviving the collapse at full height.

### Snap behavior

`scroll-snap-type: y proximity` — **not** `mandatory` — and panels are
`min-height: 100svh`, not fixed height. Mandatory snap traps keyboard users and
breaks when content overflows short viewports. Proximity gives the gallery feel
and degrades gracefully.

## Site 3 — resume.toulouse.cloud

Restyle only. Layout untouched.

- Swap tokens and type to the shared system (`WONK=0`)
- "Expected: 2026" → **December 2026**
- Add a portfolio cross-link
- Must still print cleanly to PDF

## Imagery

### BEO Dashboard

Rendered from Brayden's supplied synthetic dataset:
`~/Documents/Codex/2026-07-20/referenced-chatgpt-conversation-this-is-untrusted/outputs/BEO_Dashboard_Synthetic_Portfolio_Dataset.csv`

Validated 2026-07-21: 73 rows, exact 28-column Delphi schema, 9 invented
accounts, 9 invented contacts, 17 rooms, 7 consecutive days (7/20–7/26/2026),
statuses including `Event Cancelled` / `Prospect` / `Tentative`. Zero
instruction-like strings, zero non-ASCII. One row has an empty start date
(harmless — real exports do too).

Four captures: day events, **spaces grid**, event drilldown, pending diagrams.

**Do not use** `beo-dashboard/__tests__/fixtures/report-28col-sample.csv` — it
contains what appear to be a real client, contact, and colleague name.

**Do not reuse** `beo-dashboard/worktrees/mesamind-screenshots/screenshots-out/` —
privacy-safe but the anonymizer left visible scars: literal `[Guest]` placeholders
inside menu text, a mojibake `SERVEÂ Broccolini`, and eleven events nearly all
named "Coastal Logistics Quarterly Offsite".

### See Also

Fresh captures required — the existing `legere/screenshots/out/` set is stale
(and gitignored, so local-only). `legere/screenshots/capture.sh` automates boot,
build, install, 9:41 status bar, and dimension verification, but the shotlist
requires manual navigation between `setup` and `shot`. Article reading views are
deep-linkable via `capture.sh open phone "<article>"`; the style drawer and
Nearby map need Brayden at the simulator.

The portfolio needs three images. The fabricated HTML reader-phone mockup in
`page.tsx` is removed entirely.

## Out of scope

- Copy and claims — verified with Brayden last session; a separate copy-review
  agent will run later
- Homogenizing the two voices
- `hiltoncs.cloud` and `inventory.toulouse.cloud` — no live links, per prior decision

## Also folded in

- `og.png` regenerated (currently 1.9 MB; `layout.tsx` declares 1792×922 for a
  file that is actually 1731×909)
- Portfolio `#contact` has an id but no nav link; `.more-work` has no id
- Graduation synced to December 2026 across all three

## Risks

- **Three live production sites.** Nothing deploys until Brayden reviews all
  three running locally.
- **Scroll-snap accessibility** — mitigated by `proximity` + `min-height`.
- **Worktree isolation covers `toulouse-portfolio` only.** The two HTML repos
  are branched in place.
- **Push posture:** `~/AGENTS.md` — never push without consent. Ask before
  pushing the three feature branches.
