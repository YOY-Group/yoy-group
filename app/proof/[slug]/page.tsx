/**
 * Proof content loader (v1).
 *
 * Current source:
 * - Obsidian-authored markdown (content/proof/*.md)
 * - Zod-validated frontmatter
 * - Filesystem-backed, static generation
 *
 * Planned evolutions (non-breaking):
 * - MDX (for richer formatting)
 * - Proof Chain views (computed from frontmatter)
 * - Optional external sources (Supabase / Git mirrors)
 * - Agent-generated logs (behind review gate)
 *
 * Contract:
 * - URL stability is sacred
 * - Frontmatter schema is the source of truth
 * - Production only renders `status: published`
 */

// app/proof/[slug]/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  loadAllProofArtifacts,
  loadProofBySlug,
} from "@/lib/content/proof-loader";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const all = await loadAllProofArtifacts();
  return all.map((p) => ({ slug: p.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await loadProofBySlug(slug);

  if (!entry) {
    return buildMetadata({
      title: "Proof",
      description:
        "Execution evidence: build logs, experiments, and operational artifacts. No claims without trace.",
      path: "/proof",
      type: "website",
      imagePath: "/og/og.png",
    });
  }

  return buildMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/proof/${slug}`,
    type: "article",
    imagePath: "/og/og.png",
  });
}

/**
 * Section label patterns — detect common proof structure markers.
 * These add visual hierarchy without changing the content.
 */
const SECTION_PATTERNS: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /^Objective:/i, label: "Objective" },
  { pattern: /^Actions?:/i, label: "Actions" },
  { pattern: /^Outcome/i, label: "Outcome" },
  { pattern: /^System installed/i, label: "System" },
  { pattern: /^Artifacts?/i, label: "Artifacts" },
  { pattern: /^Context:/i, label: "Context" },
  { pattern: /^Background:/i, label: "Background" },
  { pattern: /^Result/i, label: "Result" },
  { pattern: /^Learnings?:/i, label: "Learnings" },
  { pattern: /^Decision/i, label: "Decision" },
];

function detectSectionLabel(text: string): string | null {
  for (const { pattern, label } of SECTION_PATTERNS) {
    if (pattern.test(text.trim())) return label;
  }
  return null;
}

function Body({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");

  const blocks: Array<
    | { type: "p"; text: string; sectionLabel?: string }
    | { type: "ul"; items: string[] }
  > = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const isBullet = trimmed.startsWith("- ");
    if (isBullet) {
      const item = trimmed.replace(/^-+\s*/, "");
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ul") last.items.push(item);
      else blocks.push({ type: "ul", items: [item] });
      continue;
    }

    const sectionLabel = detectSectionLabel(trimmed) ?? undefined;
    blocks.push({ type: "p", text: line, sectionLabel });
  }

  return (
    <section className="space-y-6" aria-label="Proof body">
      {blocks.map((b, idx) => {
        if (b.type === "ul") {
          return (
            <ul
              key={idx}
              className="list-disc pl-5 text-sm text-foreground space-y-1"
            >
              {b.items.map((it) => (
                <li key={it} className="leading-relaxed">
                  {it}
                </li>
              ))}
            </ul>
          );
        }

        const hasLabel = !!b.sectionLabel;

        return (
          <div key={idx} className={hasLabel ? "pt-2" : ""}>
            {hasLabel && (
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">
                {b.sectionLabel}
              </span>
            )}
            <p className="text-sm leading-relaxed text-foreground">{b.text}</p>
          </div>
        );
      })}
    </section>
  );
}

function toIsoDate(d: unknown): string | undefined {
  if (d instanceof Date && !Number.isNaN(d.getTime())) return d.toISOString();
  return undefined;
}

export default async function ProofEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await loadProofBySlug(slug);
  if (!entry) return notFound();

  // Prefer metadataBase / SITE_URL if present; otherwise default to production domain.
  const siteUrl =
    process.env.SITE_URL?.replace(/\/+$/, "") || "https://yoy.group";
  const url = `${siteUrl}/proof/${entry.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    headline: entry.title,
    datePublished: toIsoDate(entry.date),
    dateModified: toIsoDate(entry.updated) || toIsoDate(entry.date),
    author: {
      "@type": "Organization",
      name: "YOY.Group",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "YOY.Group",
      url: siteUrl,
    },
    keywords: entry.tags,
    articleSection: entry.vertical,
    description: entry.summary,
    mainEntityOfPage: url,
  };

  const dateLabel =
    entry.date instanceof Date ? entry.date.toISOString().slice(0, 10) : "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Proof
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">{entry.title}</h1>

        {/* Context strip */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <span>{entry.lane}</span>
          <span className="text-border">·</span>
          <span>{entry.vertical}</span>
          {(entry.pillar || entry.service) && (
            <>
              <span className="text-border">·</span>
              <span className="text-muted-foreground/70">
                {[entry.pillar, entry.service].filter(Boolean).join(" / ")}
              </span>
            </>
          )}
        </div>

        <p className="text-sm text-muted-foreground">{dateLabel}</p>

        <p className="text-base leading-relaxed text-muted-foreground">
          {entry.summary}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <Body markdown={entry.body} />

      <div className="my-16 h-px bg-border" />

      <footer className="flex items-center justify-between text-xs text-muted-foreground">
        <Link href="/proof" className="hover:text-foreground">
          ← Back to Proof
        </Link>
        <span>Immutable log · v0.1</span>
      </footer>
    </main>
  );
}
