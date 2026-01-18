---
id: "2025-12-20-agentic-supabase-key-hygiene-service-role-isolation"
slug: "supabase-key-hygiene-service-role-isolation"
title: "Supabase key hygiene — service role isolation"
date: "2025-12-20"
vertical: "agentic"
lane: "Agentic Commerce Systems"
pillar: "agentic-commerce-os"
service: "rails"
tags: ["governance", "security", "supabase", "keys"]
status: "published"
summary: "Isolated service-role usage to server-only contexts, standardised environment naming, and removed accidental client exposure paths."
---

Objective: ensure no privileged keys can reach the client bundle.

Actions taken:

- Standardised naming: NEXT*PUBLIC*\* for client-safe only; server keys kept unprefixed.
- Removed service-role access from any client-facing code paths.
- Confirmed server-only usage patterns for admin operations.

Result: reduced blast radius and clearer key governance boundaries.

Next: add automated checks (lint/CI) to prevent regressions.
