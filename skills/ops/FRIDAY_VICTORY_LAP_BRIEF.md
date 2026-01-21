---
title: Friday Victory Lap — Public Execution Brief
owner: YOY.Group
status: active
visibility: public-safe
role: execution-brief
scope: content-only
tags: [agentOps, proofOS, releaseHygiene, governance]
---

## Purpose

Provide a **bounded, repeatable execution brief** for the weekly Friday update cycle
without exposing internal strategy, cadence logic, or private operating doctrine.

This file defines **what is allowed**, **what is expected**, and **what must not happen**
when assisting with Friday updates in this repository.

---

## Scope (Strict)

This brief applies **only** to the following paths:

- `content/proof/**`
- `content/log/**`
- `content/playbooks/**`
- `content/glossary/**` (definitions only)

No other paths are in scope.

---

## Inputs (Allowed)

- Existing markdown files under `content/**`
- New markdown files explicitly created for the current week
- Frontmatter schemas already defined in this repo
- Public verification tools (e.g. `agent-browser`, read-only)

---

## Outputs (Expected)

A **pull request against the `release` branch** that:

- Adds or updates **clearly scoped content**
- Passes schema validation and build checks
- Does **not** modify unrelated files
- Is ready for **human review and merge**

No auto-merge. No direct push to `main`.

---

## Guardrails (Non-Negotiable)

### ❌ Not allowed

- Authentication, credentials, cookies, or saved state
- Publishing directly to production
- Editing historical Proof entries without explicit instruction
- Touching infra, CI, auth, billing, environment, or config files
- Introducing secrets, internal process notes, or private data

### ✅ Allowed

- Formatting and structuring markdown
- Adding frontmatter that matches existing schemas
- Linking between existing public pages
- Creating new Proof / Log entries when explicitly instructed
- Read-only verification of public URLs

If an action might mutate state outside `content/**`, **stop**.

---

## Verification Requirements

Before proposing a PR:

- Build passes locally or in CI
- Routes touched render without error
- Links added resolve correctly
- Titles and headings are present

Optional (recommended):

- Run `agent-browser` in **verification-only** mode to confirm public rendering

---

## Review & Merge

- All changes require **human approval**
- Merge is performed manually by the repo owner
- Rejected PRs should include a short note explaining why

---

## Reporting Format (in PR description)

Include:

- **Scope**: pages touched
- **Summary**: 3–5 bullets, factual only
- **Risk check**: confirm no guarded areas were touched
- **Next action**: merge / revise / hold

---

## Philosophy (Public)

This repository operates on a **proof-first standard**:
content ships only when it is clear, bounded, and defensible.

Process details live elsewhere.
This file exists to keep execution safe, boring, and repeatable.
