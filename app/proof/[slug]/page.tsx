// app/proof/[slug]/page.tsx
import { buildMetadata } from "@/lib/seo";
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
type Lane = "Retail Operator" | "Agentic Commerce Systems";
type Tag = "Build" | "Experiment" | "Release" | "Governance";

type ProofEntry = {
  title: string;
  date: string;
  lane: Lane;
  tag: Tag;
  summary: string;
  body: string[];
};

const PROOF_MAP: Record<string, ProofEntry> = {
  // --- Retail Operator lane ---
  "3pl-transition-cutover-controls": {
    title: "3PL transition — cutover plan + controls (post-Brexit pattern)",
    date: "2026-01-08",
    lane: "Retail Operator",
    tag: "Governance",
    summary:
      "Public-safe pattern for selecting a 3PL, defining controls, and running a cutover without service collapse.",
    body: [
      "Scope: multi-market fashion retail (anonymised).",
      "Constraints: cross-border, seasonal peaks, service-level risk.",
      "System installed:",
      "- Selection criteria + evaluation rubric (high-level).",
      "- SLA framework + escalation boundaries (no clauses published).",
      "- Cutover plan + controls + exception handling cadence.",
      "Artifacts (names only): checklist, KPI sheet, weekly exception log, comms template.",
      "Outcome lens: service level, lead time stability, cost-to-serve, returns friction.",
      "Note: no thresholds, rubrics, or clauses are published here.",
    ],
  },

  "trading-cadence-install-decision-log": {
    title: "Trading cadence install — weekly ritual + decision log",
    date: "2026-01-08",
    lane: "Retail Operator",
    tag: "Build",
    summary:
      "Installed a weekly trading cadence that forces ownership, closes loops, and reduces leakage.",
    body: [
      "Objective: stop decision drift and make performance management executable.",
      "System installed:",
      "- Weekly trading meeting OS (agenda + owners + follow-ups).",
      "- Decisions log + actions register.",
      "- KPI sheet (sell-through, OOS rate, markdown control, conversion).",
      "Artifacts (names only): agenda, KPI sheet, decisions log, owner map.",
      "Outcome lens: faster decisions, fewer repeated discussions, tighter execution accountability.",
    ],
  },

  "store-opening-os-readiness-pack": {
    title: "Store opening OS — timeline + staffing + opening-week KPIs",
    date: "2026-01-08",
    lane: "Retail Operator",
    tag: "Build",
    summary:
      "Built a repeatable opening system: readiness scoring, staffing model, and opening-week KPI pack (anonymised).",
    body: [
      "Objective: reduce chaos and standardise openings under time pressure.",
      "System installed:",
      "- Pre-open timeline + RACI (high-level).",
      "- Staffing model + training checkpoints.",
      "- Opening-week KPI pack + daily huddles.",
      "Artifacts (names only): checklist, staffing model, opening-week KPIs, readiness score.",
      "Outcome lens: launch readiness, week-1 sales ramp, NPS signal, shrink controls.",
    ],
  },

  // --- Agentic Commerce Systems lane (your technical proof) ---
  "skin-storefront-deploy-hygiene": {
    title: "SKIN storefront — public deploy + hygiene pass",
    date: "2025-12-20",
    lane: "Agentic Commerce Systems",
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
    lane: "Agentic Commerce Systems",
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
    lane: "Agentic Commerce Systems",
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = PROOF_MAP[slug];

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

function Body({ lines }: { lines: readonly string[] }) {
  const blocks: Array<
    { type: "p"; text: string } | { type: "ul"; items: string[] }
  > = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith("- ");

    if (isBullet) {
      const item = trimmed.replace(/^-+\s*/, "");
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ul") last.items.push(item);
      else blocks.push({ type: "ul", items: [item] });
      continue;
    }

    blocks.push({ type: "p", text: line });
  }

  return (
    <section className="space-y-4" aria-label="Proof body">
      {blocks.map((b, idx) => {
        if (b.type === "ul") {
          return (
            <ul key={idx} className="list-disc pl-5 text-sm text-foreground">
              {b.items.map((it) => (
                <li key={it} className="leading-relaxed">
                  {it}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={idx} className="text-sm leading-relaxed text-foreground">
            {b.text}
          </p>
        );
      })}
    </section>
  );
}

export default async function ProofEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = PROOF_MAP[slug];
  if (!entry) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Proof · {entry.lane} · {entry.tag}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">{entry.title}</h1>

        <p className="text-sm text-muted-foreground">{entry.date}</p>

        <p className="text-base leading-relaxed text-muted-foreground">
          {entry.summary}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <Body lines={entry.body} />

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
