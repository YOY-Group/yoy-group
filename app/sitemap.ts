// app/sitemap.ts
import type { MetadataRoute } from "next";

// Keep this as your single source of truth.
// When you deploy to yoy.group, set it to "https://yoy.group".
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// ---- Route sources (keep these in sync with each section) ----
// If you later move these arrays into a shared module, great.
// For now: explicit = reliable.

const INDEX_ISSUES = ["2026-q1", "2025-q4"] as const;

// If you already have slugs/terms in code for these pages, mirror them here.
// Otherwise keep them empty and we’ll wire in once content stabilises.
const PROOF_SLUGS: string[] = [];
const PLAYBOOK_SLUGS: string[] = [];
const GLOSSARY_TERMS: string[] = [];

function u(path: string) {
  // Ensure no double slashes
  return `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core authority routes
  const routes: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    { url: u("/pillars"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/index/"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/proof"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/playbooks"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/glossary"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/trust"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Secondary / legal
    { url: u("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: u("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: u("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Index issues
  for (const issue of INDEX_ISSUES) {
    routes.push({
      url: u(`/index/${issue}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Proof detail pages
  for (const slug of PROOF_SLUGS) {
    routes.push({
      url: u(`/proof/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Playbooks detail pages
  for (const slug of PLAYBOOK_SLUGS) {
    routes.push({
      url: u(`/playbooks/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Glossary terms
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