// app/proof/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * This is a stubbed content loader.
 * Later this can be replaced by:
 * - MD/MDX
 * - Supabase
 * - Git-backed content
 * - Agent-generated logs
 */
type ProofEntry = {
  title: string;
  date: string;
  tag: "Build" | "Experiment" | "Release" | "Governance";
  summary: string;
  body: string[];
};

const PROOF_MAP: Record<string, ProofEntry> = {
  "skin-storefront-deploy-hygiene": {
    title: "SKIN storefront — public deploy + hygiene pass",
    date: "2025-12-20",
    tag: "Release",
    summary:
      "Initial public deployment of the SKIN storefront with environment hygiene, route discipline, and exposure minimization.",
    body: [
      "Objective: deploy a public-facing commerce surface without leaking operational internals.",
      "Actions taken:",
      "- Separated public and server-only environment variables.",
      "- Removed debug routes from public navigation.",
      "- Standardized Supabase service-role handling.",
      "Result: a clean, auditable storefront surface with reduced blast radius.",
      "Notes: checkout remains gated upstream by Shopify configuration.",
    ],
  },

  "yoy-group-authority-scaffold": {
    title: "YOY.Group authority scaffold",
    date: "2025-12-21",
    tag: "Build",
    summary:
      "Established the initial authority surface for YOY.Group using strict layout, content, and dependency constraints.",
    body: [
      "Objective: create a public-facing site that signals competence without marketing.",
      "Constraints:",
      "- No animation.",
      "- Minimal dependency graph.",
      "- Editorial > conversion.",
      "Implemented:",
      "- Pillar-based information architecture.",
      "- Proof-first navigation.",
      "- shadcn/ui primitives only.",
      "Outcome: stable authority surface suitable for slow compounding trust.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const entry = PROOF_MAP[params.slug];
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default function ProofEntryPage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = PROOF_MAP[params.slug];

  if (!entry) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Proof · {entry.tag}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          {entry.title}
        </h1>

        <p className="text-sm text-muted-foreground">{entry.date}</p>

        <p className="text-base leading-relaxed text-muted-foreground">
          {entry.summary}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* Body */}
      <section className="space-y-4">
        {entry.body.map((line, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-foreground"
          >
            {line}
          </p>
        ))}
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Footer */}
      <footer className="flex items-center justify-between text-xs text-muted-foreground">
        <Link href="/proof" className="hover:text-foreground">
          ← Back to Proof
        </Link>

        <span>Immutable log · v0.1</span>
      </footer>
    </main>
  );
}