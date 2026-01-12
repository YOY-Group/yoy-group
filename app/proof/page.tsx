// app/proof/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Proof",
  description:
    "Execution evidence: build logs, experiments, and operational artifacts. No claims without trace.",
  path: "/proof",
  type: "website",
  imagePath: "/og/og.png",
});

type Lane = "Retail Operator" | "Agentic Commerce Systems";
type Tag = "Build" | "Experiment" | "Release" | "Governance";

type ProofItem = {
  title: string;
  href: string;
  date: string; // YYYY-MM-DD
  lane: Lane;
  tag: Tag;
  desc: string;
};

const PROOF: readonly ProofItem[] = [
  // --- Retail Operator lane (ops-native) ---
  {
    title: "3PL transition — cutover plan + controls (post-Brexit pattern)",
    href: "/proof/3pl-transition-cutover-controls",
    date: "2026-01-08",
    lane: "Retail Operator",
    tag: "Governance",
    desc: "Selection criteria, SLA framework, cutover controls, and weekly exception cadence. Anonymised, repeatable pattern.",
  },
  {
    title: "Trading cadence install — weekly ritual + decision log",
    href: "/proof/trading-cadence-install-decision-log",
    date: "2026-01-08",
    lane: "Retail Operator",
    tag: "Build",
    desc: "Agenda, owner map, decisions log, and KPI sheet to stop leakage and tighten accountability.",
  },
  {
    title: "Store opening OS — timeline + staffing + opening-week KPIs",
    href: "/proof/store-opening-os-readiness-pack",
    date: "2026-01-08",
    lane: "Retail Operator",
    tag: "Build",
    desc: "Pre-open checklist, staffing model, readiness score, and opening-week performance pack (public-safe).",
  },

  // --- Agentic Commerce Systems lane (your current technical proof) ---
  {
    title: "SKIN storefront — public deploy + hygiene pass",
    href: "/proof/skin-storefront-deploy-hygiene",
    date: "2025-12-20",
    lane: "Agentic Commerce Systems",
    tag: "Release",
    desc: "Public deploy, env separation, and route hygiene. Reduced blast radius.",
  },
  {
    title: "Supabase key hygiene — service role isolation",
    href: "/proof/supabase-key-hygiene-service-role-isolation",
    date: "2025-12-20",
    lane: "Agentic Commerce Systems",
    tag: "Governance",
    desc: "Standardised server-only key naming, removed accidental exposure paths.",
  },
  {
    title: "YOY.Group authority scaffold — shadcn + Tailwind baseline",
    href: "/proof/yoy-group-authority-scaffold",
    date: "2025-12-21",
    lane: "Agentic Commerce Systems",
    tag: "Build",
    desc: "Minimal authority surface, strict constraints, fast routes, stable IA.",
  },
] as const;

const SORTED_PROOF = [...PROOF].sort((a, b) => b.date.localeCompare(a.date));

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

function LanePill({ lane }: { lane: Lane }) {
  return <Pill>{lane}</Pill>;
}

function TagPill({ tag }: { tag: Tag }) {
  return <Pill>{tag}</Pill>;
}

export default function ProofIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Proof</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Build logs, experiments, and releases. This is the evidence layer.
          Claims belong here or they don’t belong at all.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Proof entries" className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Entries
          </h2>
          <p className="text-xs text-muted-foreground">
            Newest first · stable structure
          </p>
        </div>

        <ul className="space-y-3">
          {SORTED_PROOF.map((item) => (
            <li key={item.href} className="group">
              <Link
                href={item.href}
                className="block rounded-lg border border-border/60 p-5 transition-colors hover:border-border"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-medium tracking-tight">
                        {item.title}
                      </h3>
                      <LanePill lane={item.lane} />
                      <TagPill tag={item.tag} />
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 text-xs text-muted-foreground">
                    {item.date}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Proof is a discipline. If an entry can’t be traced, it doesn’t ship.
      </footer>
    </main>
  );
}
