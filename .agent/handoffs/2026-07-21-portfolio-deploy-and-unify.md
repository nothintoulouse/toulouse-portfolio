---
project: toulouse-portfolio
date: 2026-07-21
branch: main
last_commit: 720e34a
status: ready-for-review
---

## TL;DR

`portfolio.toulouse.cloud` is **live in production** with the handoff bundle deployed byte-unmodified. The remaining work is *unification*: the portfolio, résumé, and hub sites currently look and read like three different brands. Next agent owns that.

## What changed this session

- Staged the iCloud source bundle to this repo, content byte-identical to the original (`diff -r` clean).
- Created private GitHub repo `nothintoulouse/toulouse-portfolio` (matches convention — all his site repos are private).
- Created Vercel project `toulouse-portfolio`, linked to GitHub, deployed to production.
- Attached `portfolio.toulouse.cloud`; DNS was already pointed at Vercel. HTTPS 200, valid cert, all four assets serve.
- Audited every factual claim against the résumé and source repos. **Brayden resolved all of them — no copy changes needed.**

## Decisions (and why)

- **Positioning: "two doors."** Portfolio stays Applied AI/engineering-forward; résumé stays hospitality-pure. They cross-link but serve different readers. Do *not* homogenize the voice.
- **No live links to production apps.** `hiltoncs.cloud` is real Hilton software and `inventory.toulouse.cloud` is passcode-gated. Screenshots only. The See Also App Store link is fine.
- **Claims verified as legitimate** (do not "fix" these): 20–40 headcount is from his current job posting; "lead hospitality operations" is a fair general statement over 5+ years; the 31-slide training deck exists as a PPT he built for this job; Codex/Gemini refer to `agent-cli`, which shares that section with LAUTREC; the dashboard already renders generated fake data in his CSV's format. Leave the 87/88 test count and usage estimates alone.
- **Deployed unmodified** so he can compare all three sites in flight before anything is unified.

## Open questions / blockers

- **Design tokens don't match** despite the bundle's HANDOFF.md claiming they do: green `#17692f` vs résumé `#176326`, gold `#c9a941` vs `#CDB65A`, Georgia/Arial vs Libre Baskerville/Lato. Brayden called this a simple change and wants to eyeball it first.
- **`toulouse.cloud` hub has no portfolio card.** It's the only page tying his properties together and doesn't know this site exists. This is the main cross-link gap.
- **Résumé says "Expected: 2026."** Confirmed it should read **December 2026**. Hub already says December; résumé needs syncing.
- **BEO screenshots still pending.** Brayden wants a synthetic environment so images are anonymized at capture — he does not want to blur data after the fact. Bundle HANDOFF.md §"BEO Dashboard visual" specifies the intended four-image gallery.
- **`og.png` metadata mismatch:** `app/layout.tsx` declares 1792×922, file is 1731×909. Also 1.9 MB, heavy for a social card.
- Minor: `#contact` has an id but no nav link points to it; `.more-work` section has no `id` at all.
- Local network on his machine intermittently refuses connections to Vercel IPs (affected `resume.toulouse.cloud` too). Server-side is fine — verified externally. Ignore local curl failures.

## Pick-up instructions

Read first: this file, then `HANDOFF.md` (original bundle spec) and `CLAIMS-REVIEW.md` equivalent at `~/Library/Mobile Documents/com~apple~CloudDocs/AgentReview/toulouse-portfolio/2026-07-21-claims-review.md` (write-only tree — that copy is for Brayden; don't read it back as input, everything material is already in this handoff).

The three sites:
- `~/Code/toulouse-portfolio` → portfolio.toulouse.cloud (Next.js 16 App Router, this repo)
- `~/Code/toulouse-resume` → resume.toulouse.cloud (single-file `index.html`)
- `~/Code/toulouse-home` → toulouse.cloud (single-file `index.html`, has the project-card grid)

```bash
npm install && npm run dev     # verified clean: TS, ESLint, 3/3 static pages
```

Unification order: (1) settle the palette/type across all three, (2) add the portfolio card to the hub grid, (3) add a portfolio link to the résumé, (4) sync graduation to December 2026. Confirm the palette with Brayden before touching the two live sites.

**Push posture:** repo is pushed through `720e34a`; the handoff commit is intentionally unpushed per `~/AGENTS.md`. Ask before pushing.
