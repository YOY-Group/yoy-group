# CLAUDE.md — YOY.Group Repo Execution Rules (Claude Code)

This repo is an authority library and proof surface. It is not a marketing site.

## Governance hierarchy (must obey, in order)

1. `skills/*` (doctrine + release gates, incl. `skills/SEO_RELEASE_GATE.md`)
2. `AGENTS.md` (charter + DoD)
3. `CLAUDE.md` (session protocol)

## Non-negotiables (Session Protocol)

- Work on a new git branch (never `main` or `release` directly).
- PR base branch must be `release`. Never target `main`.
- Never merge to `main`. Human-only production gate.
- Propose a plan before editing files.
- Keep scope to one PR ≤ 60 minutes unless explicitly approved.
- Prefer deletion over invention. If uncertain: remove.
- No secrets: never read or modify `.env*`, keys, tokens, credentials.

## Branch governance

- **Default branch:** `release` (all PRs target here)
- **Production branch:** `main` (Vercel production deploys from here)
- **Preview branch:** `release` (Vercel preview deploys from here)
- **Protected:** `main` requires PR + approval + status check (`Vercel Preview Comments`)
- **Human-only:** Only humans merge `release` → `main`

## Release gate (required before PR is “Done”)

- Run: `pnpm check:release` (must pass).  
  If it fails: stop, fix, re-run.

## End-of-session output (always)

Provide:

1. `pnpm check:release` result
2. PR title + summary (what changed and why it increases trust)
3. Changelog note for `/log` or `/proof`
4. Next 3 actions (small, ordered)

## Repo priorities (YOY.Group)

1. Trust + clarity: proof, governance, controlled language
2. IA integrity: routes, nav, sitemap, internal linking
3. Release discipline: preview = noindex, production = index
4. Performance + accessibility over animation

## Forbidden

- Marketing hype language
- Decorative animation
- Heavy/speculative dependencies
- SEO stuffing
- Claims without proof

## Definition of Done (must pass)

- `pnpm check:release` succeeds
- No dead routes referenced by nav/sitemap
- No placeholder “coming soon” copy in production paths (minimal is fine)
- Passes `skills/aesthetic.md`, `skills/editorial.md`, `skills/authority.md`
