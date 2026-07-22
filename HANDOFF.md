# portfolio.toulouse.cloud — Development Handoff

## What this is

A complete single-page portfolio implementation for Brayden Toulouse, written as semantic React/Next markup with a single responsive stylesheet. The visual system intentionally matches the green, gold, cream, and editorial typography used in Brayden's résumé.

This handoff is already a clean, standard Next.js App Router project for Vercel. Install dependencies and run `npm run build`; no framework conversion is required.

The page has no database, authentication, server actions, environment variables, or runtime API dependencies. It can also be converted to plain HTML with minimal work because all interaction is native HTML/CSS.

## Information architecture

The front page is an **overview tier only**. It is four screens, not seven:

1. Hero and quantified proof
2. Work carousel — five project slides (`app/work.ts`), one screen each
3. Four-step working method, with the AI-ownership disclosure
4. Background, availability, and contact

Slides: BEO Dashboard, See Also, Voice Inventory, LAUTREC, Bartender Training.
Voice Inventory and LAUTREC were one shared "Applied AI prototypes" panel until
2026-07-21. That pairing buried the strongest applied-AI project — the earlier
application plan called Voice Inventory exactly that — behind half a slide, a
fabricated waveform, and LAUTREC's technology tags. They are now separate, and
Voice Inventory carries a real screenshot and its own stack.

### Resisting the generated look

The front page is deliberately *not* uniform. Metrics are optional (`metrics?`)
and vary two-to-three per slide; LAUTREC has none, because it has no honest
numbers and inventing some to fill the row is precisely the instinct that makes
a page look machine-made. Technology lists are a line of prose, not a rack of
chips. Micro-labels are sentence case — tracked-out caps on every label turns
each figure into an identical tile and the eye reads the pattern before the
content. The method steps stagger rather than sitting in lockstep columns.
Keep it that way: if every slide starts looking the same, that is the bug.

### The two-tier split

The earlier version put every case study in full on the front page, which meant
a visitor had to read everything in order to learn what existed. Depth now
belongs on per-project pages at `/work/<slug>` — **not yet built**. The slugs are
already defined in `app/work.ts` (`beo`, `see-also`, `tools`, `training`), and
the CSS for the depth tier is retained in `app/globals.css` under the
"Project panels" heading: `.case-blocks`, `.evidence`, `.ownership`, `.shot`,
`.shot-row`, `.phones`, `.pair`. Those classes are currently unused by the front
page and exist so the detail pages can be assembled without re-deriving them.

When the pages land, add a "Read the case →" link to each slide. Deliberately
omitted for now rather than shipping links to 404s.

### Carousel constraints

A slide must fit one screen at 375×667 with **no internal scrolling**. That is
the whole point of the overview tier — if a summary no longer fits, it belongs
on the detail page rather than being allowed to scroll. `.slide-body` carries
`overflow-y:auto` purely as a safety valve for extreme viewports; it should
never actually engage. Verified at 2560×1440, 1512×900, 900×1000, 390×844, and
375×667.

The active index is whichever slide is nearest the track's centre, not whichever
is "visible" — on a wide monitor two slides are both more than half visible at
once, so a visibility test lights the wrong dot.

## Implemented interactions

- Work carousel: swipe, drag, arrow buttons, dots, and `←`/`→`/`Home`/`End` when
  the track has focus. Slides carry `role="group"` with `aria-roledescription`,
  and the track degrades to a plain horizontal scroller without JavaScript.
- Sticky primary navigation with anchor scrolling
- Keyboard-visible focus states and a skip link
- Expandable `details` disclosure explaining personal ownership versus AI assistance
- Responsive layouts for desktop, tablet, and mobile
- Hover/focus states for calls to action and links
- Native external links to the App Store, résumé site, GitHub, and LinkedIn
- `prefers-reduced-motion` support
- Generated Open Graph/social card at `public/og.png`

No JavaScript-only interaction is required. The site remains usable if client-side JavaScript is unavailable.

## BEO Dashboard visual

The flagship case study currently contains an HTML/CSS reconstruction using the parser-validated synthetic event dataset. It is explicitly labeled `Synthetic demonstration` and contains no production data.

When final screenshots are ready, replace or supplement `.product-window` in `app/page.tsx` with a four-image gallery:

1. `beo-overview.webp` — daily event overview
2. `beo-mobile.webp` — mobile event detail
3. `beo-spaces.webp` — spaces or room-assignment view
4. `beo-alerts.webp` — dietary, diagram, and special-instruction alerts

Recommended gallery behavior:

- First image visible by default
- Four descriptive tab buttons or thumbnails
- Arrow-key navigation between tabs
- Click/tap opens a modal at full size
- `Escape` closes the modal
- Focus returns to the activating control
- Mobile users can swipe or horizontally scroll
- Alt text describes the operational information shown, not the visual styling

Keep the synthetic-data disclosure adjacent to the gallery. Do not upload the synthetic CSV to the production dashboard; capture the screenshots from a local or isolated preview environment.

## Decisions needed — standing list

These have survived several sessions by never being written down in one place.
Each is either a permission question or an unverified claim. **Resolve or delete;
do not let them ride.**

| # | Item | State |
|---|---|---|
| 1 | **Training slide may be shown publicly** | **RESOLVED 2026-07-21 — Brayden confirms he has permission.** The deck is his own work. |
| 2 | **BEO screenshots contain no hotel, guest, employee, or client data** | **Unresolved.** Never signed off. The captures show real room abbreviations (`MB-*` Mockingbird, `BL` Bluebonnet, `DEAN`) because the synthetic dataset was written against the real floor plan. Scrubbing means regenerating the dataset. |
| 3 | **See Also adoption metrics** | **Unresolved, and correctly dodged.** No download or rating figures exist. The slide claims only "5 reading styles" and "Paid · native iOS, shipped". Standing rule: do not manufacture metrics while adoption is early. |
| 4 | **Whether `/work/<slug>` pages are still planned** | **Open.** Five images in `public/` have no consumer without them (three BEO, two See Also). |
| 5 | **`inventory.toulouse.cloud` and `hiltoncs.cloud` are never linked** | Standing constraint, observed. Screenshots only. `hiltoncs.cloud` is real Hilton production software. |
| 6 | **Never use `beo-dashboard/__tests__/fixtures/report-28col-sample.csv`** | Standing constraint. It holds what appear to be real client and colleague names. |

### Claims verified by running the thing, not by reading a doc

- **Voice Inventory tests: 87**, not 88. Confirmed by `npm test` in `~/Code/inventory-app`
  (5 files, 87 passed). An earlier ruling said to leave "87/88" alone; that ruling was
  made without running the suite. The site now says 87.
- **87.5% first-pass auto-fill** — corroborated in `docs/2026-07-02-e2e-findings.md`:
  8/8 lines itemized, 7/8 auto-filled all correct. It is a *synthetic* round trip and
  is labelled as such. Do not restate it as a production benchmark.
- **The deployment is real.** `inventory.toulouse.cloud` responds (307 → passcode gate);
  the app runs locally against its Neon database.

### Bug found in `inventory-app` while capturing the screenshot

`src/app/session/[id]/page.tsx` re-summed `numeric(12,3)` counts as JavaScript floats
and rendered them raw, so a count of 0.6 + 1.2 displayed as `1.7999999999999998`.
**The exported workbook was never affected** — the export path sums in SQL. Display
only. A one-line rounding fix is applied in that repo **and is uncommitted, pending
Brayden's go-ahead**; the portfolio screenshot shows the fixed display, so the fix
must land before this is truthful.

## Assets

- `public/beo-dashboard-icon.png` — project icon from the BEO Dashboard repository
- `public/see-also-wordmark.png` — See Also wordmark from the iOS repository
- `public/training-pour-standards.png` — selected slide from the bartender-training deck
- `public/og.png` — generated social-preview card matching the final site

Before public launch, confirm permission to show the training slide and generalize employer-specific language if needed.

## Links to verify before launch

- `https://resume.toulouse.cloud`
- `https://apps.apple.com/app/id6783075252`
- `https://github.com/nothintoulouse`
- `https://www.linkedin.com/in/brayden-toulouse/`
- `mailto:brayden@toulousemail.com`

## Suggested Vercel deployment

1. Create a repository from this folder using Node 22.
2. Run `npm install`, `npm run build`, and `npm run lint`.
3. Connect the repository to Vercel; the default Next.js settings are sufficient.
4. Add `portfolio.toulouse.cloud` as the production domain.
5. Point the domain's DNS record to the value Vercel provides.
6. Confirm the canonical host and social image resolve over HTTPS.

The supplied project completed a production Next.js build, TypeScript validation, static prerender, and ESLint with no errors on July 21, 2026. A fresh dependency audit reported two moderate PostCSS advisories inherited through Next.js; do not apply the audit tool's suggested forced downgrade. Recheck for a patched compatible Next.js release immediately before deployment.

## Content still worth confirming

- Exact graduation month shown on the final résumé
- Whether the bartender training was delivered, its audience, and any measured outcome
- Whether the training slide may be displayed publicly
- Final BEO Dashboard screenshots from the isolated synthetic-data environment
- Any public adoption metrics for See Also beyond App Store availability
