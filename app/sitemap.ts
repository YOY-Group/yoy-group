// app/sitemap.ts
import type { MetadataRoute } from "next";

/**
 * ─────────────────────────────────────────────────────────────
 * Canonical site URL
 * ─────────────────────────────────────────────────────────────
 * In production, NEXT_PUBLIC_SITE_URL should be set to:
 * https://yoy.group
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://yoy-group.vercel.app";

/**
 * ─────────────────────────────────────────────────────────────
 * Route sources (single source of truth)
 * Keep these in sync with actual content.
 * ─────────────────────────────────────────────────────────────
 */
const LOG_ISSUES = ["2026-q1", "2025-q4"] as const;

const PROOF_SLUGS: string[] = [];
const PLAYBOOK_SLUGS: string[] = [];
const GLOSSARY_TERMS: string[] = [];

/**
 * Build absolute URLs safely
 */
function u(path: string) {
  return `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // ── Core authority routes ────────────────────────────────
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    { url: u("/pillars"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/log"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/proof"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/playbooks"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/glossary"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/trust"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // ── Secondary / legal ────────────────────────────────────
    { url: u("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: u("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: u("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ── Log issues (time-bound records) ────────────────────────
  for (const issue of LOG_ISSUES) {
    routes.push({
      url: u(`/log/${issue}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // ── Proof detail pages ─────────────────────────────────────
  for (const slug of PROOF_SLUGS) {
    routes.push({
      url: u(`/proof/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── Playbook detail pages ──────────────────────────────────
  for (const slug of PLAYBOOK_SLUGS) {
    routes.push({
      url: u(`/playbooks/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── Glossary terms ─────────────────────────────────────────
  for (const term of GLOSSARY_TERMS) {
    routes.push({
      url: u(`/glossary/${term}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return routes;
}