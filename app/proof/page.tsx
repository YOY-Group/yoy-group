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
 * - Filter/sort UI via searchParams (vertical/tag/status)
 * - Proof Chain hub views (chain + chain_position)
 * - MDX rendering (richer formatting) + safer markdown rendering
 * - JSON-LD ItemList schema for the hub
 */

import { loadAllProofArtifacts } from "@/lib/content/proof-loader";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Proof",
  description:
    "Execution evidence: build logs, experiments, and operational artifacts. No claims without trace.",
  path: "/proof",
  type: "website",
  imagePath: "/og/og.png",
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

function toDateLabel(d: unknown): string {
  return d instanceof Date && !Number.isNaN(d.getTime())
    ? d.toISOString().slice(0, 10)
    : "";
}

export default async function ProofHubPage() {
  const proofs = await loadAllProofArtifacts();

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Proof
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Proof</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Execution evidence: build logs, experiments, and operational
          artifacts. No claims without trace.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Proof list" className="space-y-3">
        {proofs.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No proof artifacts found.
          </p>
        ) : (
          proofs.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-border p-5 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>{p.lane}</Pill>
                  <Pill>{p.vertical}</Pill>
                  <Pill>{p.status}</Pill>
                  {p.chain ? <Pill>{p.chain}</Pill> : null}
                </div>

                <h2 className="text-lg font-semibold leading-snug">
                  <Link href={`/proof/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted-foreground">
                  {toDateLabel(p.date)}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.slice(0, 10).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))
        )}
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Proof is a discipline. If an entry can’t be traced, it doesn’t ship.
      </footer>
    </main>
  );
}
