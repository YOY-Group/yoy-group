// app/proof/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * Stubbed content loader.
 * Later replace with:
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
      "Initial public deployment of the SKIN storefront with environment hygiene, route discipline, and exposure minimisation.",
    body: [
      "Objective: deploy a public-facing commerce surface without leaking operational internals.",
      "Actions taken:",
      "- Separated public and server-only environment variables.",
      "- Removed debug routes from public navigation.",
      "- Standardised Supabase service-role handling.",
      "Result: a clean, auditable storefront surface with reduced blast radius.",
      "Notes: checkout remains gated upstream by Shopify configuration.",
    ],
  },

  "supabase-key-hygiene-service-role-isolation": {
    title: "Supabase key hygiene — service role isolation",
    date: "2025-12-20",
    tag: "Governance",
    summary:
      "Isolated service-role usage to server-only contexts, standardised env naming, and removed accidental client exposure paths.",
    body: [
      "Objective: ensure no privileged keys can reach the client bundle.",
      "Actions taken:",
      "- Standardised naming: NEXT_PUBLIC_* for client-safe only; server keys kept unprefixed.",
      "- Removed service-role access from any client-facing code paths.",
      "- Confirmed server-only usage patterns for admin operations.",
      "Result: reduced blast radius and clearer key governance boundaries.",
      "Next: add automated checks (lint/CI) to prevent regressions.",
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

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(PROOF_MAP).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = PROOF_MAP[slug];
  if (!entry) return { title: "Proof · YOY.Group" };

  return {
    title: entry.title,
    description: entry.summary,
    openGraph: { title: entry.title, description: entry.summary, type: "article" },
    twitter: { card: "summary", title: entry.title, description: entry.summary },
  };
}

export default async function ProofEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = PROOF_MAP[slug];

  if (!entry) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Proof · {entry.tag}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">{entry.title}</h1>

        <p className="text-sm text-muted-foreground">{entry.date}</p>

        <p className="text-base leading-relaxed text-muted-foreground">
          {entry.summary}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4">
        {entry.body.map((line, i) => (
          <p key={i} className="text-sm leading-relaxed text-foreground">
            {line}
          </p>
        ))}
      </section>

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