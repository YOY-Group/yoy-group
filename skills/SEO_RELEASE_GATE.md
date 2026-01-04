---
name: SEO_RELEASE_GATE
version: 0.1
priority: P0
applies_to:
  - apps/yoy-group
goals:
  - safe preview until reveal
  - SEO-ready when flipping from Cloudflare Pages
---

# SEO + Release Gate

## Until reveal (preview mode)
- Block indexing:
  - `robots` = noindex,nofollow
  - no sitemap submission
- Make nav links stable, but content can be minimal placeholders.

## On reveal
- Flip indexing:
  - `robots` = index,follow
- Add:
  - sitemap.xml
  - RSS (optional)
  - canonical URLs
  - OpenGraph/Twitter cards

## Non-negotiables
- Each page must have metadata: title/description.
- Avoid thin pages at launch: minimum 250–400 words on core pillars/index/proof.