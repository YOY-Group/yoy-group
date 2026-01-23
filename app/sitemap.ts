// app/sitemap.ts
import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

// Legacy sources remain until migrated
import { GLOSSARY_TERMS, LOG_ISSUES, PLAYBOOK_SLUGS } from "@/lib/content";

// Proof source of truth (markdown)
import { loadAllProofArtifacts } from "@/lib/content/proof-loader";

/**
 * Sitemap is an Authority Layer artifact:
 * - Single canonical base URL
 * - Dynamic slugs must match the *actual* content source of truth
 * - Stable lastModified (avoid "everything changed" on every deploy)
 * - Only public, real routes (no drafts, no internal)
 */

const SITE_URL = getSiteUrl().replace(/\/$/, "");

function u(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type RouteItem = MetadataRoute.Sitemap[number];
type ChangeFreq = NonNullable<RouteItem["changeFrequency"]>;

function route(
  path: string,
  lastModified: Date,
  changeFrequency: ChangeFreq,
  priority: RouteItem["priority"],
): RouteItem {
  return { url: u(path), lastModified, changeFrequency, priority };
}

function coerceDate(v: unknown): Date | null {
  if (!v) return null;
  const d = v instanceof Date ? v : new Date(String(v));
  return Number.isNaN(d.getTime()) ? null : d;
}

function uniqueRoutes(items: RouteItem[]): RouteItem[] {
  const map = new Map<string, RouteItem>();
  for (const item of items) map.set(item.url, item);
  return Array.from(map.values());
}

type ProofMeta = {
  updatedAt?: unknown;
  updated?: unknown;
  date?: unknown;
  publishedAt?: unknown;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: RouteItem[] = [
    // ── Core authority surfaces ───────────────────────────────
    route("/", now, "weekly", 1.0),

    route("/pillars", now, "monthly", 0.9),
    route("/log", now, "weekly", 0.9),
    route("/proof", now, "weekly", 0.9),
    route("/playbooks", now, "weekly", 0.8),
    route("/glossary", now, "weekly", 0.8),
    route("/services", now, "monthly", 0.7),
    route("/trust", now, "monthly", 0.6),

    // ── Pillars (exist now) ───────────────────────────────────
    route("/pillars/agentic-commerce-os", now, "yearly", 0.7),
    route("/pillars/retail-ops-architecture", now, "yearly", 0.7),
    route("/pillars/culture-commerce-engineering", now, "yearly", 0.7),

    // ── Services (exist now) ──────────────────────────────────
    route("/services/retail", now, "monthly", 0.7),
    route("/services/creators", now, "monthly", 0.7),
    route("/services/rails", now, "monthly", 0.7),

    // ── Readiness sub-pages (exist now) ───────────────────────
    route("/services/retail/readiness", now, "yearly", 0.5),
    route("/services/creators/readiness", now, "yearly", 0.5),
    route("/services/rails/readiness", now, "yearly", 0.5),

    // ── Trust sub-pages (exist now) ───────────────────────────
    route("/trust/editorial", now, "yearly", 0.4),
    route("/trust/press", now, "yearly", 0.4),

    // ── Founder / identity ────────────────────────────────────
    route("/andrey", now, "monthly", 0.8),

    // ── Operating model ───────────────────────────────────────
    route("/operator", now, "yearly", 0.8),

    // ── Legal / secondary ─────────────────────────────────────
    route("/about", now, "yearly", 0.4),
    route("/contact", now, "yearly", 0.4),
    route("/privacy", now, "yearly", 0.3),
    route("/terms", now, "yearly", 0.3),
  ];

  // Dynamic expansions (only real + public)
  for (const issue of LOG_ISSUES) {
    routes.push(route(`/log/${issue}`, now, "monthly", 0.7));
  }

  // ✅ Proof slugs from markdown (source of truth)
  // Use stable lastModified when available to avoid "full churn" sitemaps.
  const proofs = await loadAllProofArtifacts();

  for (const p of proofs) {
    const meta = p as unknown as ProofMeta;

    const lm =
      coerceDate(meta.updatedAt) ??
      coerceDate(meta.updated) ??
      coerceDate(meta.date) ??
      coerceDate(meta.publishedAt) ??
      now;

    routes.push(route(`/proof/${p.slug}`, lm, "monthly", 0.6));
  }

  for (const slug of PLAYBOOK_SLUGS) {
    routes.push(route(`/playbooks/${slug}`, now, "monthly", 0.6));
  }

  for (const term of GLOSSARY_TERMS) {
    routes.push(route(`/glossary/${term}`, now, "monthly", 0.5));
  }

  // Ensure no accidental duplicates (defensive hygiene)
  return uniqueRoutes(routes);
}
