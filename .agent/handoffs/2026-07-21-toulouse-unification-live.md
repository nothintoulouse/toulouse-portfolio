---
project: toulouse-portfolio
date: 2026-07-21
branch: worktree-toulouse-unification
last_commit: 4ee8923
status: ready-for-review
---

## TL;DR

All three toulouse.cloud properties are **unified and live in production**. What
remains is one decision from Brayden (BEO room names) and optional polish. This
handoff covers three repos; it lives here because the prior one did.

## What changed this session

- **toulouse.cloud** — rebuilt as a one-screen front door: two doors (Résumé /
  Portfolio) plus a See Also App Store strip. `:has()` repaints the whole page in
  the hovered door's colour world. `landing.html` and the dashboard deleted.
- **portfolio.toulouse.cloud** — rebuilt as a seven-panel full-viewport gallery
  on alternating grounds. Real BEO imagery and Brayden's framed See Also shots.
- **resume.toulouse.cloud** — restyled onto the shared system, **layout
  untouched**. Graduation corrected to December 2026; portfolio link added.
- New studio portrait (IMG_1560) across hub and résumé; 4:5 rounded rect.

## Decisions (and why)

- **Gallery over editorial/console.** Full-viewport panels fix the mobile ribbon
  by construction. Snap is `proximity`, never `mandatory` — mandatory traps
  keyboard users and breaks on short viewports.
- **Widescreen fix was a missing `max-width`.** Grounds stay full-bleed; content
  sits on a centred 1600px grid.
- **Palette:** leather/gold/green, with `--paper` and `--ink` taken from See
  Also's wordmark spec so app and sites agree. Terracotta is See Also's only.
- **Fonts via `<link>`, not `next/font`** — next/font resolves Google Fonts at
  build time and fails in network-restricted sandboxes.
- **Rounded rect portrait, not a circle.** A circular mask clips the bottom
  corners, which is exactly where shoulders are.
- **Disclosure:** BEO captures were re-shot with a neutral "Banquet Ops
  Dashboard" title, and the `/spaces` footer listing ~50 real property spaces
  was suppressed. Never use `__tests__/fixtures/report-28col-sample.csv` — it
  holds apparently-real client and colleague names.

## Open questions / blockers

- **Room names on BEO cards** (Bluebonnet, Mockingbird, The Dean) are the real
  property's — they came from the synthetic CSV, which was written against the
  real floor plan. Left in; scrubbing means regenerating the dataset.
- Optional: "The reader" uses `01b-cover`; `01-reading` is a one-line swap.
  Four framed shots unused (`01-reading`, `04-photo`, `05-quickfacts`,
  `06-library`).
- **Unrelated bug worth a ticket:** in `beo-dashboard`, the `/spaces` 7/10/14-day
  toggle is a no-op above 640px — `SpacesTimeline` sets `--col-count-desktop` on
  `.spaces-grid` while `globals.css` computes `--col-w` on the parent
  `.spaces-scroll`.
- `toulouse-home` holds a **git stash**: an unfinished subdomain→path migration,
  superseded but preserved.

## Pick-up instructions

Read `docs/superpowers/specs/2026-07-21-toulouse-unification-design.md` first —
it carries the full system and a correction (the "stale résumé" flagged early on
never shipped; `toulouse.cloud/resume/` 404s).

```bash
npm install && npm run build && npm run lint   # clean: TS, ESLint, 3/3 static
```

Repos: `~/Code/toulouse-home`, `~/Code/toulouse-resume`, `~/Code/toulouse-portfolio`.
All on `main`, all pushed, all deployed and verified serving the new markup.

**Push posture:** everything through `4ee8923` is pushed. Brayden gave explicit
consent to merge to main this session; that consent was per-request — ask again.
