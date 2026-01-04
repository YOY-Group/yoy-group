---
id: YOY_SKILL_AESTHETIC
title: "YOY Aesthetic Doctrine — Luxury Minimal (Hermès-adjacent, system-native)"
version: "0.1.0"
status: "active"
owner: "YOY.Group"
scope:
  applies_to:
    - "apps/yoy-group"
  surfaces:
    - "marketing pages"
    - "authority library"
    - "services + lead capture"
    - "index + proof hub"
do_not:
  - "no gradients-as-brand"
  - "no loud neon accents"
  - "no stock-illustration vibe"
  - "no SaaS-template look"
  - "no generic 'AI startup' aesthetic"
last_updated: "2025-12-21"
---

# YOY Aesthetic Doctrine (Luxury Minimal)

## 1) North Star
YOY.Group should look like:
- a **private dossier** that became public,
- a **museum label** for living systems,
- an **operating manual** with taste.

The aesthetic must signal:
**authority + restraint + precision + culture**.

## 2) Visual Principles (non-negotiable)
1) **Whitespace is status**
- Layout breathes. Sections are never crowded.
- One idea per block. No “feature salad”.

2) **Contrast is control**
- Primary palette is near-black and off-white.
- Color is a **rare event** (used to guide, not decorate).

3) **Typography is the brand**
- Type carries the identity.
- Use hierarchy, spacing, and weight—not effects.

4) **Edges are deliberate**
- Borders are thin, calm, and consistent.
- Rounding is subtle (shadcn radius is fine). Nothing bubbly.

5) **Motion is minimal**
- If used: micro transitions only (150–250ms).
- Never “floaty startup animations”.

## 3) Color System (default)
Base: **Zinc** (already chosen in shadcn init)

Recommended tokens usage:
- Background: `bg-background`
- Text: `text-foreground`
- Muted text: `text-muted-foreground`
- Dividers: `border-border`
- Cards: `bg-card`
- Hover states: subtle opacity or border shift

Accent rule:
- Accent color is optional and must be **earned**:
  - used only for CTA, active nav, or “current issue” marker
  - never for random decoration
- If accent is introduced later, it must be a single hue with low saturation.

## 4) Layout Grammar (how pages should feel)
Use a consistent page skeleton:
- Top: global nav (thin, calm)
- Hero: one sentence + one action
- Body: 5–9 sections, each with:
  - title (short)
  - 1–2 lines max
  - optional list / cards
- Footer: legal + RSS + newsletter (quiet)

Grid guidance:
- Desktop: max width ~ `max-w-5xl` or `max-w-6xl`
- Padding: `px-6 md:px-10` and `py-16` (don’t under-pad)
- Section separation: `py-14` and `border-t`

## 5) Typography Rules (critical for “Hermès-adjacent”)
Hierarchy (example):
- H1: `text-3xl md:text-5xl font-semibold tracking-tight`
- H2: `text-xl md:text-2xl font-semibold`
- Body: `text-base leading-relaxed`
- Small/meta: `text-xs uppercase tracking-wider text-muted-foreground`

Copy rules:
- Short sentences.
- Declarative tone.
- No hype. No exclamation marks unless intentionally rare.

## 6) Component Style (shadcn usage)
Buttons:
- Primary CTA: solid or subtle filled, never neon.
- Secondary CTA: outline.
- Text links: understated underline or opacity hover.

Cards:
- Borders > shadows.
- Shadows only if extremely soft and rare.

Navigation:
- Minimal, text-forward.
- Active item indicated by weight or underline, not pill highlight.

Separators:
- Use thin separators liberally. They are part of the identity.

## 7) Imagery + Graphics (optional)
If imagery exists:
- Prefer **monochrome**, editorial crops, texture shots, diagrams, scans.
- Avoid “hero illustration”, random 3D blobs, generic tech photos.
- If no images: that’s fine—type + spacing can carry.

Diagrams:
- Use black/white line diagrams.
- Captions are small, like museum placards.

## 8) Content Density Rules (prevents “generic”)
Per section:
- Max 1 headline + 2 lines + 1 supporting element (cards/list/link)
- If you need more, create a dedicated page.

Home page must not become an archive dump.
It must be a **router** into:
- Pillars
- Index
- Proof
- Services
- Glossary/Trust

## 9) Accessibility + Quality
- Contrast: always AA+.
- Focus rings visible (don’t remove).
- Buttons and links clearly interactive.
- No tiny click targets.

## 10) Acceptance Tests (agent checklist)
A page passes the aesthetic bar if:
- It looks good with **zero images**.
- You can screenshot it and it reads like a **credible publication**.
- There are no “template vibes”.
- The main CTA is obvious but not salesy.

## 11) Reference mood words
"Archive", "Dossier", "Museum label", "Control", "Silence", "Craft", "Protocol".

---