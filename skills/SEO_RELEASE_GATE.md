---
id: YOY_SKILL_SEO_RELEASE_GATE
name: SEO_RELEASE_GATE
version: "1.0.0"
status: "active"
priority: P0
owner: "YOY.Group"
applies_to:
  - "apps/yoy-group"
surfaces:
  - "vercel preview deployments"
  - "vercel production (yoy.group)"
  - "robots.txt"
  - "sitemap.xml"
  - "metadata (Next.js)"
goals:
  - "preview is never indexed"
  - "production is indexable, canonical, and consistent"
  - "no accidental duplicate indexing across hosts"
last_updated: "2026-01-13"
---

# SEO + Release Gate (Vercel-first)

This file defines the **non-negotiable release gates** for YOY.Group indexing and search visibility.

Authority > traffic.
Indexing is deliberate.

---

## Phase A — Preview Mode (default)

### A1) Hard requirement: Preview is NOT indexed

Preview deployments must ship with:

- `X-Robots-Tag: noindex, nofollow` (preferred)
- and/or `meta robots = noindex, nofollow` if needed for non-bot clients

Robots must also be defensive:

- `robots.txt` may allow crawling for QA, but **must not allow indexing**.

### A2) Canonical behavior in Preview

- Canonicals may point to the preview host while testing.
- Do NOT submit preview sitemaps to Search Console.
- Do NOT build backlinks to preview URLs.

### A3) Allowed QA checks in Preview

- Lighthouse (mobile + desktop)
- `/robots.txt`, `/sitemap.xml`
- internal linking crawl (Screaming Frog / manual sitemap sampling)
- page source check: canonical, OG, Twitter, titles, descriptions

---

## Phase B — Release Candidate (pre-prod checks)

### B1) Minimum QA set (must pass)

Run Lighthouse on:

- `/`
- `/services`
- `/pillars`
- `/playbooks/dropos`
- `/andrey`
- `/trust/editorial`

Launch thresholds:

- Performance: **85+ mobile**, **90+ desktop**
- SEO: **95+**
- Accessibility: **90+**
- Best Practices: **90+**

### B2) Crawl sanity (must pass)

Using Screaming Frog or equivalent:

- No internal 404s
- No redirect chains longer than 1 hop
- Titles and descriptions present on key surfaces
- One H1 per page (preferred)
- Canonicals resolve correctly per environment

---

## Phase C — Production Reveal (yoy.group)

### C1) Hard requirement: Production IS indexable

Production must ship with:

- `index, follow` for site-wide robots (unless explicitly set to stealth)
- `sitemap.xml` enabled and correct
- canonical URLs matching `https://yoy.group/*`

### C2) Canonical single-source rule

Once live:

- **Only `https://yoy.group` is canonical.**
- Vercel `*.vercel.app` must never become the indexed “main” host.

Recommended posture:

- Keep Vercel preview deployments `noindex`
- Ensure production `metadataBase` resolves to `https://yoy.group`

### C3) Post-live checks (same day)

Verify:

- `https://yoy.group/robots.txt` returns indexable directives
- `https://yoy.group/sitemap.xml` loads and contains the full URL set
- OG image resolves: `https://yoy.group/og/og.png`
- no stray `noindex` headers on production pages
- basic crawl: all top nav + sitemap pages are HTTP 200

---

## Phase D — Google Search Console (after reveal)

### D1) Add property + verify

- Add `yoy.group` property
- Verify via DNS (preferred)

### D2) Submit sitemap

- Submit: `https://yoy.group/sitemap.xml`

### D3) Index request priority

Request indexing for:

1. `/`
2. `/pillars`
3. `/services`
4. `/proof`
5. `/playbooks`
6. `/andrey`
7. `/trust/editorial`

---

## Non-negotiables (always)

- No claims without proof.
- No thin “placeholder” pages on production paths.
  - Minimal is fine.
  - “Coming soon” is not.
- Every indexed page must have:
  - title
  - description
  - canonical
  - OG/Twitter metadata
- Preview is **never indexed**. Production is **deliberately indexed**.

---

## Failure Modes (what we avoid)

- Preview URLs indexed by Google
- `vercel.app` outranking `yoy.group`
- duplicate canonical confusion across hosts
- accidental `noindex` on production
- sitemap includes non-canonical hosts
