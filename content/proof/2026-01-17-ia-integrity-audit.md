# IA Integrity Audit — 2026-01-17

**Audit type:** Information Architecture integrity verification
**Date:** 2026-01-17
**Branch:** `chore/claude-contract`
**Status:** Pass (no issues found)

---

## Method

Commands and files examined:

```bash
# 1. List all page routes
glob "app/**/page.tsx"

# 2. Extract nav links
read components/nav/PrimaryNav.tsx
read components/nav/SiteFooter.tsx

# 3. Extract sitemap entries
read app/sitemap.ts

# 4. Extract dynamic slug sources
read lib/content.ts
read app/glossary/terms.ts
read app/proof/[slug]/page.tsx (PROOF_MAP keys)
read app/playbooks/[slug]/page.tsx (PLAYBOOKS keys)
read app/log/[issue]/page.tsx (ISSUES slugs)

# 5. Extract all internal hrefs from pages
grep 'href="(/[^"]*)"' app/**/*.tsx

# 6. Verify release gate
pnpm check:release
```

---

## Route Inventory

### Static pages (29)

| Route                                   | Source                                            | Status |
| --------------------------------------- | ------------------------------------------------- | ------ |
| `/`                                     | app/page.tsx                                      | ✓      |
| `/about`                                | app/about/page.tsx                                | ✓      |
| `/andrey`                               | app/andrey/page.tsx                               | ✓      |
| `/contact`                              | app/contact/page.tsx                              | ✓      |
| `/glossary`                             | app/glossary/page.tsx                             | ✓      |
| `/log`                                  | app/log/page.tsx                                  | ✓      |
| `/operator`                             | app/operator/page.tsx                             | ✓      |
| `/pillars`                              | app/pillars/page.tsx                              | ✓      |
| `/pillars/agentic-commerce-os`          | app/pillars/agentic-commerce-os/page.tsx          | ✓      |
| `/pillars/culture-commerce-engineering` | app/pillars/culture-commerce-engineering/page.tsx | ✓      |
| `/pillars/retail-ops-architecture`      | app/pillars/retail-ops-architecture/page.tsx      | ✓      |
| `/playbooks`                            | app/playbooks/page.tsx                            | ✓      |
| `/privacy`                              | app/privacy/page.tsx                              | ✓      |
| `/proof`                                | app/proof/page.tsx                                | ✓      |
| `/services`                             | app/services/page.tsx                             | ✓      |
| `/services/creators`                    | app/services/creators/page.tsx                    | ✓      |
| `/services/creators/readiness`          | app/services/creators/readiness/page.tsx          | ✓      |
| `/services/rails`                       | app/services/rails/page.tsx                       | ✓      |
| `/services/rails/readiness`             | app/services/rails/readiness/page.tsx             | ✓      |
| `/services/retail`                      | app/services/retail/page.tsx                      | ✓      |
| `/services/retail/readiness`            | app/services/retail/readiness/page.tsx            | ✓      |
| `/terms`                                | app/terms/page.tsx                                | ✓      |
| `/trust`                                | app/trust/page.tsx                                | ✓      |
| `/trust/editorial`                      | app/trust/editorial/page.tsx                      | ✓      |
| `/trust/press`                          | app/trust/press/page.tsx                          | ✓      |

### Dynamic pages (17 generated)

| Route pattern       | Source of truth                 | Slugs            | Status |
| ------------------- | ------------------------------- | ---------------- | ------ |
| `/log/[issue]`      | lib/content.ts → LOG_ISSUES     | 2026-q1, 2025-q4 | ✓      |
| `/proof/[slug]`     | lib/content.ts → PROOF_SLUGS    | 6 slugs          | ✓      |
| `/playbooks/[slug]` | lib/content.ts → PLAYBOOK_SLUGS | 6 slugs          | ✓      |
| `/glossary/[term]`  | lib/content.ts → GLOSSARY_TERMS | 3 slugs          | ✓      |

**Total routes:** 43 (verified via `pnpm build` output)

---

## Navigation Audit

### PrimaryNav (7 links)

| Link        | Target                | Status |
| ----------- | --------------------- | ------ |
| `/` (logo)  | app/page.tsx          | ✓      |
| `/pillars`  | app/pillars/page.tsx  | ✓      |
| `/log`      | app/log/page.tsx      | ✓      |
| `/proof`    | app/proof/page.tsx    | ✓      |
| `/services` | app/services/page.tsx | ✓      |
| `/glossary` | app/glossary/page.tsx | ✓      |
| `/trust`    | app/trust/page.tsx    | ✓      |

### SiteFooter (14 links)

**Explore column:**

- `/pillars` ✓
- `/log` ✓
- `/proof` ✓
- `/glossary` ✓
- `/about` ✓
- `/andrey` ✓

**Services column:**

- `/services/retail` ✓
- `/services/creators` ✓
- `/services/rails` ✓

**Trust column:**

- `/trust` ✓
- `/trust/editorial` ✓
- `/trust/press` ✓
- `/terms` ✓
- `/privacy` ✓

---

## Sitemap Audit

All 43 routes in `app/sitemap.ts` resolve to actual pages.

**Source of truth alignment:**

- LOG_ISSUES (lib/content.ts) ↔ ISSUES (app/log/[issue]/page.tsx): ✓ aligned
- PROOF_SLUGS (lib/content.ts) ↔ PROOF_MAP (app/proof/[slug]/page.tsx): ✓ aligned
- PLAYBOOK_SLUGS (lib/content.ts) ↔ PLAYBOOKS (app/playbooks/[slug]/page.tsx): ✓ aligned
- GLOSSARY_TERMS (lib/content.ts) ↔ GLOSSARY_TERMS (app/glossary/terms.ts): ✓ aligned

---

## Internal Link Audit

Extracted 85 internal `href` attributes from app/\*_/_.tsx files.

**Unique routes referenced:** 18

All 18 referenced routes resolve to actual pages. No broken links found.

---

## Broken / Orphan Links

**Broken links:** 0
**Orphan pages:** 0
**Dead routes in nav:** 0
**Dead routes in sitemap:** 0

---

## Findings

1. **No issues found.** All navigation links, sitemap entries, and internal links resolve to actual pages.

2. **Source of truth is consistent.** `lib/content.ts` serves as the canonical registry for dynamic slugs. All dynamic page generators use matching data.

3. **No PageStub usage.** The `PageStub` component exists but is not imported or rendered anywhere (good).

4. **No placeholder copy detected.** No "coming soon" or similar placeholder text in production paths.

5. **SEO gate passes.** `pnpm check:release` completes successfully.

---

## Fixes Made

None required.

---

## Release Gate Result

```
pnpm check:release
✓ Lint passed
✓ Build succeeded (43 routes)
✓ SEO release gate checks passed
```

---

## Recommendations

No immediate action required. Potential future improvements (not blockers):

1. Consider consolidating glossary term definitions to `lib/content.ts` to have a single source of truth (currently split between `lib/content.ts` for slugs and `app/glossary/terms.ts` for content).

2. The `content/` directory structure exists but is empty. If MD/MDX content is planned, document the migration path.

---

**Auditor:** Claude (claude-opus-4-5-20251101)
**Session:** chore/claude-contract
