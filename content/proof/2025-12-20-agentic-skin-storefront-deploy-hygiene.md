---
id: "2025-12-20-agentic-skin-storefront-deploy-hygiene"
slug: "skin-storefront-deploy-hygiene"
title: "SKIN storefront — public deploy + hygiene pass"
date: "2025-12-20"
vertical: "agentic"
lane: "Agentic Commerce Systems"
pillar: "agentic-commerce-os"
service: "rails"
tags: ["release", "deployment", "security-hygiene", "governance"]
status: "published"
summary: "Initial public deployment of the SKIN storefront with environment hygiene, route discipline, and exposure minimisation."
---

Objective: deploy a public-facing commerce surface without leaking operational internals.

Actions taken:

- Separated public and server-only environment variables.
- Removed debug routes from public navigation.
- Standardised Supabase service-role handling.

Result: a clean, auditable storefront surface with reduced blast radius.

Notes: checkout remains gated upstream by Shopify configuration.
