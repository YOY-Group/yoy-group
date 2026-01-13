# YOY.Group

YOY.Group is an **authority library** and **operating surface** for autonomous, culture-led consumer systems.

This repo powers the public site. It is not a marketing page.
It is a **structured body of work**: pillars, proof, playbooks, and controlled language.

If something does not increase trust, it does not ship.

---

## What This Is

YOY.Group documents how modern consumer ventures are built when:

- automation is native
- culture is treated as infrastructure
- operations are designed as systems, not workflows
- distribution is a first-class constraint

The site functions as:

- an **editorial library** (pillars + glossary)
- a **proof archive** (build logs + decision records)
- a **signal surface** (quiet, for operators who notice structure)

---

## Information Architecture (Authority Primitives)

This system is organized around **authority primitives**, not funnels.

- **Home** (`/`)  
  Orientation and routing. No persuasion.

- **Pillars** (`/pillars`)  
  Stable operating principles. Slow to change.

- **Log** (`/log`)  
  Time-bound snapshots (quarterly / annual). What is true _now_.

- **Proof** (`/proof`)  
  Execution evidence: build logs, experiments, hygiene, decisions.

- **Playbooks** (`/playbooks`)  
  Reusable operating systems and constraints. Non-sensitive by design.

- **Services** (`/services`)  
  Quiet B2B surface. Scope clarity. Opt-in only.

- **Glossary** (`/glossary`)  
  Canonical definitions. Language as infrastructure.

- **Trust** (`/trust`)  
  Editorial policy, corrections, provenance, disclosure.

- **Operator** (`/operator`)  
  Operating model and intent. A human-readable contract for how work gets done.

---

## Design, Editorial, Authority

The site is governed by three non-negotiables:

- **Calm over loud**
- **Structure over decoration**
- **Precision over volume**

Whitespace is status.  
Authority is earned, not claimed.  
The system is designed to survive being read aloud.

---

## Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- Minimal dependencies by design

No tracking.  
No dark patterns.  
No speculative tooling.

---

## Agent Governance (Hard Constraints)

This repo is governed by explicit constraints:

- `AGENTS.md` — role, rules, definition of done (DoD)
- `skills/` — canonical doctrine files:
  - `skills/authority.md`
  - `skills/editorial.md`
  - `skills/aesthetic.md`
  - `skills/SEO_RELEASE_GATE.md`

Agents must obey these documents.  
When uncertain: **remove**.

---

## SEO & Release Discipline

Indexing is deliberate, not automatic.

- Preview deployments must not index.
- Production (`yoy.group`) is canonical.
- `/robots.txt` + `/sitemap.xml` are treated as release gates.

See: `skills/SEO_RELEASE_GATE.md`.

---

## Local Dev

```bash
pnpm install
pnpm dev
```

Build check:

```bash
pnpm build
```

---
## **Status**

- Authority layer: **v0.1**
    
- Public, intentionally incomplete
    
- Updated deliberately, not frequently
    

Expansion adds **proof and clarity**, not noise.

---
## **Non-Goals**

This project does **not** aim to:

- chase virality
    
- optimize funnels
    
- mimic agency/studio patterns
    
- over-index on SEO at the expense of clarity
    
- publish claims without proof
    

Authority compounds slowly.
The system reflects that.

---
## **Governance & Security**

This repository is public by necessity.

Sensitive systems, credentials, and operational infrastructure are not stored here.
Material corrections are documented via **/trust**.

---

© YOY.Group — All rights reserved.
