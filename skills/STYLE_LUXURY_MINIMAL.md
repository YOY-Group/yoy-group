---
name: STYLE_LUXURY_MINIMAL
version: 0.1
priority: P0
applies_to:
  - apps/yoy-group
goals:
  - Hermes-like minimal luxury
  - high whitespace, calm typography
  - black/white + zinc neutrals
rules:
  - avoid gradients, neon, heavy shadows
  - use shadcn/ui primitives only (Card, Button, Separator, NavigationMenu)
  - keep layouts grid-based, generous spacing
  - prefer 1–2 font sizes per block; no visual noise
---

# Style System (Luxury Minimal)

## Visual
- Background: white (default), optional subtle zinc sections
- Text: near-black; muted text uses zinc tone
- Borders: hairline separators (Separator / border)
- Buttons: minimal; 1 primary CTA max per view

## Layout
- Max width: 960–1100px content columns
- Sections: 64–96px vertical spacing
- Use: `container`, `mx-auto`, `px-6`, `py-16`

## Copy
- Hero = 1 sentence.
- Subtext = 1–2 short lines.
- Lists over paragraphs.

## Interaction
- No animations unless subtle hover/underline.