---
id: YOY_SKILLS_REGISTRY
title: "YOY Skills Registry"
version: "1.0.0"
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
last_updated: "2025-12-21"
---

# YOY Skills Registry

This folder defines the **canonical skill constraints** that govern how YOY.Group looks, writes, and signals authority.

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
- agents (Codex, local LLMs, automations),
- and systems (SEO/AEO/GEO, content pipelines).

They reduce variance.
They increase authority.

---

## Canonical Skills (Locked)

### 1. `aesthetic.md`
Defines the **visual language** of YOY.

Controls:
- color posture (black / white / zinc-first),
- spacing philosophy,
- typography restraint,
- component behavior.

If it looks impressive but not inevitable → it fails this skill.

---

### 2. `editorial.md`
Defines the **writing system** of YOY.

Controls:
- tone,
- sentence architecture,
- paragraph density,
- structural hierarchy,
- what *not* to say.

If copy sounds persuasive, hype-driven, or eager → it fails this skill.

---

### 3. `authority.md`
Defines how YOY **earns credibility**.

Controls:
- proof requirements,
- time signaling,
- versioning,
- refusal to overclaim,
- how silence is used.

If authority is implied instead of demonstrated → it fails this skill.

---

## Skill Hierarchy

Skills are applied in this order:

1. **Authority** — can this be said at all?
2. **Editorial** — how should it be said?
3. **Aesthetic** — how should it appear?

No lower skill may override a higher one.

---

## How Agents Use Skills

Agents must:
- load relevant skill files before generating output,
- treat skills as **hard constraints**, not suggestions,
- flag conflicts instead of resolving them creatively.

Default agent behavior:
> “When in doubt, remove.”

---

## What Does NOT Belong Here

This folder must NOT contain:
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
  - backward-compatibility note.
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

---