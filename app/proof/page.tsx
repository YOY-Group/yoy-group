/**
 * Proof hub (v1).
 *
 * Current source:
 * - Obsidian-authored markdown (content/proof/*.md)
 * - Zod-validated frontmatter
 * - Filesystem-backed loader (lib/content/proof-loader.ts)
 *
 * Contract:
 * - /proof lists artifacts (newest first)
 * - /proof/[slug] remains the canonical detail page
 * - Production only renders `status: published` (enforced by loader)
 *
 * Planned evolutions (non-breaking):
 * - Filter/sort UI via searchParams (service/tag/lane)
 * - Proof Chain hub views (chain + chain_position)
 * - MDX rendering (richer formatting) + safer markdown rendering
 * - JSON-LD ItemList schema for the hub
 */

import { loadAllProofArtifacts } from "@/lib/content/proof-loader";
import type { ProofArtifact } from "@/lib/schema/proof";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ExpandableTags } from "./ExpandableTags";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Proof",
  description:
    "Execution evidence: build logs, experiments, and operational artifacts. No claims without trace.",
  path: "/proof",
  type: "website",
  imagePath: "/og/og.png",
});

function Pill({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "muted";
}) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px]";
  const variantStyles =
    variant === "muted"
      ? "border-border/40 text-muted-foreground/70"
      : "border-border/60 text-muted-foreground";
  return <span className={`${base} ${variantStyles}`}>{children}</span>;
}

function MetadataRow({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {label && (
        <span className="mr-1 text-[10px] uppercase tracking-wider text-muted-foreground/60">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

function toDateLabel(d: unknown): string {
  return d instanceof Date && !Number.isNaN(d.getTime())
    ? d.toISOString().slice(0, 10)
    : "";
}

/**
 * Public display rule:
 * - Always show Lane (delivery posture)
 * - Prefer Service (commercial entry point)
 * - Show Vertical only if it adds information (i.e., not redundant with Service)
 * - Pillar is useful, but keep it muted (taxonomy, not sales copy)
 */
function ProofCard({ p }: { p: ProofArtifact }) {
  const showVertical = Boolean(p.vertical) && p.vertical !== p.service;

  return (
    <article className="rounded-2xl border border-border p-5 shadow-sm">
      <div className="flex flex-col gap-3">
        {/* Row 1: Lane + Service + (Vertical if non-redundant) */}
        <MetadataRow>
          <Pill>{p.lane}</Pill>
          {p.service && <Pill>{p.service}</Pill>}
          {showVertical && <Pill>{p.vertical}</Pill>}
        </MetadataRow>

        {/* Row 2: Pillar (muted) */}
        {p.pillar && (
          <MetadataRow>
            <Pill variant="muted">{p.pillar}</Pill>
          </MetadataRow>
        )}

        <h2 className="text-lg font-semibold leading-snug">
          <Link href={`/proof/${p.slug}`} className="hover:underline">
            {p.title}
          </Link>
        </h2>

        <p className="text-sm text-muted-foreground">{toDateLabel(p.date)}</p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {p.summary}
        </p>

        <ExpandableTags tags={p.tags} limit={4} />
      </div>
    </article>
  );
}

export default async function ProofHubPage() {
  const proofs = await loadAllProofArtifacts();

  const siteUrl =
    process.env.SITE_URL?.replace(/\/+$/, "") || "https://yoy.group";

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "Descending",
    itemListElement: proofs.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteUrl}/proof/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* JSON-LD: ItemList for Proof hub */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <header className="space-y-4">
        {/* Removed redundant small "Proof" label above H1 */}
        <h1 className="text-3xl font-semibold tracking-tight">Proof</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          Execution evidence: build logs, experiments, and operational
          artifacts. No claims without trace.
        </p>

        <p className="text-sm text-muted-foreground/80">
          Each entry below documents real work — decisions made, systems built,
          lessons captured.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Proof list" className="space-y-4">
        {proofs.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No proof artifacts found.
          </p>
        ) : (
          proofs.map((p) => <ProofCard key={p.id} p={p} />)
        )}
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Proof is a discipline. If an entry can’t be traced, it doesn’t ship.
      </footer>
    </main>
  );
}
