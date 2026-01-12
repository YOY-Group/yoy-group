// app/playbooks/[slug]/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * Public playbooks are intentionally high-level.
 * They describe intent, scope, and boundaries — not execution steps.
 * Execution logic lives elsewhere.
 */

type Playbook = {
  slug: string;
  title: string;
  summary: string;
  scope: string[];
  constraints: string[];
  boundaries?: string[];
  updated?: string; // YYYY-MM-DD
  related?: { label: string; href: string }[];
};

const PLAYBOOKS: Record<string, Playbook> = {
  dropos: {
    slug: "dropos",
    title: "DropOS",
    summary:
      "A controlled framework for launching limited releases with operational clarity and cultural intent.",
    scope: ["Release cadence", "Inventory boundaries", "Signal sequencing"],
    constraints: [
      "No discounting mechanics",
      "No speculative inventory",
      "Proof before scale",
    ],
    boundaries: [
      "Public describes intent and constraints — not internal checklists.",
      "Execution steps live in private operating docs.",
      "Proof links show outcomes when available.",
    ],
    updated: "2026-01-10",
    related: [
      { label: "Proof", href: "/proof" },
      { label: "Rails", href: "/services/rails" },
      { label: "Glossary", href: "/glossary" },
    ],
  },

  proofos: {
    slug: "proofos",
    title: "ProofOS",
    summary:
      "What counts as proof, how it is logged, and how it is referenced publicly — without drifting into narrative.",
    scope: [
      "Evidence standards",
      "Logging format",
      "Linking and trace discipline",
    ],
    constraints: [
      "No claims without trace",
      "No interpretation without artifacts",
      "Prefer deltas over retrospectives",
    ],
    boundaries: [
      "Public sets the standard; it does not publish private artifacts.",
      "Claims should route to Proof or be removed.",
      "Corrections are logged; edits are not silent.",
    ],
    updated: "2026-01-10",
    related: [
      { label: "Proof", href: "/proof" },
      { label: "Log", href: "/log" },
      { label: "Trust", href: "/trust" },
    ],
  },

  trustos: {
    slug: "trustos",
    title: "TrustOS",
    summary:
      "Editorial policy, corrections, disclosure, and governance signals that keep public surfaces durable.",
    scope: ["Corrections posture", "Disclosure", "Governance signals"],
    constraints: [
      "No anonymous claims",
      "No hype language",
      "Publish slowly and deliberately",
    ],
    boundaries: [
      "This is policy, not marketing.",
      "Disclosures are explicit; omissions are treated as debt.",
      "Proof is the unit of credibility.",
    ],
    updated: "2026-01-10",
    related: [
      { label: "Trust & disclosures", href: "/trust" },
      { label: "Proof", href: "/proof" },
      { label: "Log", href: "/log" },
    ],
  },

  "retailops-headless": {
    slug: "retailops-headless",
    title: "RetailOps Headless",
    summary:
      "Composable commerce ops: contracts, sync, and rails that keep execution reliable as tools and teams change.",
    scope: ["Data contracts", "Sync posture", "Execution rails"],
    constraints: [
      "No vendor sprawl without ROI",
      "No silent failure modes",
      "Boring reliability over cleverness",
    ],
    boundaries: [
      "Public describes posture and primitives — not internal play-by-play.",
      "Implementation varies by stack; principles do not.",
      "Proof links capture what changed and what improved.",
    ],
    updated: "2026-01-10",
    related: [
      { label: "Rails", href: "/services/rails" },
      { label: "Retail", href: "/services/retail" },
      { label: "Proof", href: "/proof" },
    ],
  },

  "xp-rail": {
    slug: "xp-rail",
    title: "XP Rail",
    summary:
      "A system for tracking participation and longitudinal user memory across touchpoints — without gamification theatre.",
    scope: [
      "Event attribution",
      "Participation signals",
      "Longitudinal memory",
    ],
    constraints: [
      "No extractive incentives",
      "No fake scarcity",
      "User sovereignty preserved",
    ],
    boundaries: [
      "No dark patterns. No coercive mechanics.",
      "Signals must map to real participation.",
      "Portability is optional and only when justified.",
    ],
    updated: "2026-01-10",
    related: [
      { label: "Rails", href: "/services/rails" },
      { label: "Glossary", href: "/glossary" },
      { label: "Proof", href: "/proof" },
    ],
  },

  "security-baseline": {
    slug: "security-baseline",
    title: "Security Baseline",
    summary:
      "Minimum viable security posture for public surfaces and internal routes: least privilege, logs, and blast-radius control.",
    scope: ["Secrets handling", "Access posture", "Audit and logging"],
    constraints: [
      "No privileged keys in client bundles",
      "Server-only admin operations",
      "Fail closed where it matters",
    ],
    boundaries: [
      "Public shares posture and rules, not sensitive implementation details.",
      "Secrets are treated as infrastructure, not convenience.",
      "Auditability beats trust-me security.",
    ],
    updated: "2026-01-10",
    related: [
      { label: "Rails", href: "/services/rails" },
      { label: "Proof", href: "/proof" },
      { label: "Trust", href: "/trust" },
    ],
  },
};

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(PLAYBOOKS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = PLAYBOOKS[slug];

  if (!p) {
    return buildMetadata({
      title: "Playbooks",
      description:
        "Operational documents designed for reuse. Updated deliberately.",
      path: "/playbooks",
      type: "website",
      imagePath: "/og/og.png",
      index: true,
    });
  }

  return buildMetadata({
    title: `${p.title} · Playbooks`,
    description:
      p.summary.length > 160 ? `${p.summary.slice(0, 157)}…` : p.summary,
    path: `/playbooks/${p.slug}`,
    type: "article",
    imagePath: "/og/og.png",
  });
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = PLAYBOOKS[slug];
  if (!playbook) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Playbooks
        </p>

        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {playbook.title}
          </h1>
          {playbook.updated ? (
            <span className="text-xs text-muted-foreground">
              Updated · {playbook.updated}
            </span>
          ) : null}
        </div>

        <p className="text-base leading-relaxed text-muted-foreground">
          {playbook.summary}
        </p>
      </header>

      <div className="my-16 h-px bg-border" />

      <section className="space-y-3" aria-label="Scope">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Scope
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
          {playbook.scope.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border/60" />

      <section className="space-y-3" aria-label="Constraints">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Constraints
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
          {playbook.constraints.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {playbook.boundaries?.length ? (
        <>
          <div className="my-12 h-px bg-border/60" />
          <section className="space-y-3" aria-label="Boundaries">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Boundaries
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
              {playbook.boundaries.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}

      {playbook.related?.length ? (
        <>
          <div className="my-12 h-px bg-border/60" />
          <section className="space-y-3" aria-label="Related">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Related
            </h2>
            <ul className="flex flex-wrap gap-3">
              {playbook.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="rounded-md border border-border/60 px-3 py-1.5 text-xs text-muted-foreground hover:border-border hover:text-foreground transition-colors"
                  >
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}

      <div className="my-16 h-px bg-border" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link
          href="/playbooks"
          className="hover:text-foreground transition-colors"
        >
          ← Back to Playbooks
        </Link>
        <span>Public abstraction · Execution withheld</span>
      </footer>
    </main>
  );
}
