---
name: COMPONENT_SYSTEM
version: 0.1
priority: P0
applies_to:
  - apps/yoy-group
rules:
  - keep components in /components
  - only use shadcn/ui in /components/ui
  - no duplicated nav/footer across pages; use layout
---

# Component System

## Required primitives
- `components/nav/GlobalNav.tsx`
- `components/sections/Hero.tsx`
- `components/sections/Pillars.tsx`
- `components/sections/FeaturedIndex.tsx`
- `components/sections/ProofHub.tsx`
- `components/sections/Footer.tsx`

## Usage rules
- Pages assemble sections; sections assemble UI primitives.
- No page should exceed ~150 lines for v0.1.
- Prefer composable props over hardcoded text when it repeats.

## Typography
- H1: `text-3xl md:text-4xl font-semibold tracking-tight`
- H2: `text-xl md:text-2xl font-semibold`
- Body: `text-sm md:text-base`
- Muted: `text-sm text-muted-foreground`