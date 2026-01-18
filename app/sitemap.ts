// app/sitemap.ts
import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

// Legacy sources remain until PR3-B/C migrates them too
import { GLOSSARY_TERMS, LOG_ISSUES, PLAYBOOK_SLUGS } from "@/lib/content";

// NEW: proof source of truth (markdown)
import { loadAllProofArtifacts } from "@/lib/content/proof-loader";

/**
 * Sitemap is an Authority Layer artifact:
 * - Single canonical base URL
 * - Dynamic slugs must match the *actual* content source of truth
 * - No duplicated arrays inside this file
 *
 * Current state (PR3-A):
 * - Proof routes come from markdown (content/proof/*.md)
 * - Others remain on legacy arrays until migrated
 */

const SITE_URL = getSiteUrl().replace(/\/$/, "");

function u(p: string) {
  return `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`;
}

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
type RouteItem = MetadataRoute.Sitemap[number];

function route(
  path: string,
  now: Date,
  changeFrequency: ChangeFreq,
  priority: RouteItem["priority"],
): RouteItem {
  return { url: u(path), lastModified: now, changeFrequency, priority };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // ── Core authority surfaces ───────────────────────────────
    route("/", now, "weekly", 1.0),

    route("/pillars", now, "monthly", 0.9),
    route("/log", now, "weekly", 0.9),
    route("/proof", now, "weekly", 0.8),
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

    // ── Founder / identity (exists now) ───────────────────────
    route("/andrey", now, "monthly", 0.5),

    // ── Operating model (exists now) ──────────────────────────
    route("/operator", now, "yearly", 0.6),

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

  // ✅ Proof slugs now come from markdown (source of truth)
  const proofs = await loadAllProofArtifacts();
  for (const p of proofs) {
    routes.push(route(`/proof/${p.slug}`, now, "monthly", 0.6));
  }

  for (const slug of PLAYBOOK_SLUGS) {
    routes.push(route(`/playbooks/${slug}`, now, "monthly", 0.6));
  }

  for (const term of GLOSSARY_TERMS) {
    routes.push(route(`/glossary/${term}`, now, "monthly", 0.5));
  }

  return routes;
}
