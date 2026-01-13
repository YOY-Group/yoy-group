---
id: YOY_SKILLS_REGISTRY
title: "YOY Skills Registry"
version: "1.0.1"
status: "locked"
owner: "YOY.Group"
scope:
  applies_to:
    - "apps/yoy-group"
    - "agents"
    - "content generation"
    - "design systems"
    - "editorial systems"
role:
  - "human guardrails"
  - "agent execution constraints"
last_updated: "2026-01-13"
---

# YOY Skills Registry

This directory defines the **canonical constraints** that govern how YOY.Group looks, writes, and signals authority.

These files are **not inspiration**.  
They are **operational rules**.

If content, design, or agent output violates a skill → the output is wrong.

---

## What a “Skill” Means at YOY

A skill is a **bounded capability** with:

- clear intent,
- explicit constraints,
- repeatable application,
- and machine-readability.

Skills are used by:

- humans (design, writing, review),
- agents (local LLMs, orchestration, codegen),
- and systems (SEO/AEO/GEO, publishing pipelines).

Skills reduce variance.  
Skills increase authority.

---

## Canonical Skills (Locked)

### 1) `authority.md`

Defines how YOY **earns credibility**.

Controls:

- proof requirements,
- time signaling,
- versioning discipline,
- refusal to overclaim,
- how silence is used.

If authority is implied instead of demonstrated → it fails.

---

### 2) `editorial.md`

Defines the **writing system** of YOY.

Controls:

- tone and vocabulary discipline,
- sentence architecture,
- paragraph density,
- structural hierarchy,
- what _not_ to say.

If copy sounds persuasive, hype-driven, or eager → it fails.

---

### 3) `aesthetic.md`

Defines the **visual language** of YOY.

Controls:

- color posture (black / white / zinc-first),
- spacing philosophy,
- typography restraint,
- component behavior.

If it looks impressive but not inevitable → it fails.

---

## Skill Hierarchy

Skills are applied in this order:

1. **Authority** — can this be said at all?
2. **Editorial** — how should it be said?
3. **Aesthetic** — how should it appear?

No lower skill may override a higher one.

---

## Release Discipline (Preview vs Production)

YOY uses skills as **release gates**.

- **Preview surfaces** may ship incomplete content, but must stay structurally sound.
- **Production surfaces** must not ship contradictions, broken metadata, or thin authority pages.

If a change increases surface area without increasing trust → revert or delete.

---

## How Agents Use Skills

Agents must:

- load relevant skill files before generating output,
- treat skills as **hard constraints**, not suggestions,
- flag conflicts instead of resolving them creatively.

Default behavior:

> “When in doubt, remove.”

---

## What Does NOT Belong Here

This directory must NOT contain:

- prompts,
- examples,
- templates,
- marketing copy,
- experimental drafts.

Those live elsewhere.

Skills are stable.  
Execution is flexible.

---

## Versioning Rules

- Skill changes are rare.
- All changes require:
  - version bump,
  - rationale,
  - backward-compatibility note (if applicable).
- Skills should not change more than **once per quarter**.

Stability signals maturity.

---

## Relationship to Other Systems

- `skills/*` → governs **how**
- `content/*` → contains **what**
- `components/*` → implements **form**
- `agents/*` → execute **within constraints**

If there is a conflict, skills win.

---

## Read-Only Notice

This directory is considered **editorial canon**.

Changes should be intentional, reviewed, and logged.  
Silence is preferred to dilution.
