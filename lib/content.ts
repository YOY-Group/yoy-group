// lib/content.ts
/**
 * Canonical public content registry.
 * Single source of truth for sitemap, static params, and audits.
 * Update deliberately.
 */

// ─────────────────────────────────────────────
// Log (time-bounded issues)
// ─────────────────────────────────────────────
export const LOG_ISSUES = ["2026-q1", "2025-q4"] as const;
export type LogIssueSlug = (typeof LOG_ISSUES)[number];

// ─────────────────────────────────────────────
// Proof (must match app/proof/[slug])
// ─────────────────────────────────────────────
export const PROOF_SLUGS = [
  "3pl-transition-cutover-controls",
  "trading-cadence-install-decision-log",
  "store-opening-os-readiness-pack",
  "skin-storefront-deploy-hygiene",
  "supabase-key-hygiene-service-role-isolation",
  "yoy-group-authority-scaffold",
] as const;
export type ProofSlug = (typeof PROOF_SLUGS)[number];

// ─────────────────────────────────────────────
// Playbooks (must match PLAYBOOKS keys)
// ─────────────────────────────────────────────
export const PLAYBOOK_SLUGS = [
  "dropos",
  "proofos",
  "trustos",
  "retailops-headless",
  "xp-rail",
  "security-baseline",
] as const;
export type PlaybookSlug = (typeof PLAYBOOK_SLUGS)[number];

// ─────────────────────────────────────────────
// Glossary (must match app/glossary/[term])
// ─────────────────────────────────────────────
export const GLOSSARY_TERMS = [
  "agentic-commerce",
  "authority-layer",
  "culture-commerce",
] as const;
export type GlossaryTermSlug = (typeof GLOSSARY_TERMS)[number];
