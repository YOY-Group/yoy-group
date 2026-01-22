// app/operator/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Executive Operator",
  description:
    "How Andrey works: diagnose → align → design → ship → compound. Calm authority, hands-on throughput, proof-led delivery.",
  path: "/operator",
  type: "article",
  imagePath: "/og/og.png",
});

type Step = { title: string; desc: string };
type Block = { title: string; bullets: readonly string[] };
type Mode = { title: string; desc: string; includes: readonly string[] };

const PROMISE = [
  "I run situation assessment fast, align the room, then ship a plan that survives contact with reality.",
  "Top-down clarity, bottom-up execution. Hands-on where it matters.",
] as const;

const LOOP: readonly Step[] = [
  {
    title: "Diagnose",
    desc: "Reality check: constraints, where truth is hiding, what’s breaking the week.",
  },
  {
    title: "Align",
    desc: "Priorities, decision rights, cadence, and the smallest set of outcomes that matter.",
  },
  {
    title: "Design",
    desc: "System shape + team shape: measures, gates, and kill criteria before build starts.",
  },
  {
    title: "Ship",
    desc: "Timeboxed sprints, artifacts, ownership, unblockers. No delegation of ambiguity.",
  },
  {
    title: "Compound",
    desc: "Retros, playbooks, automation, handover. Improvement is logged, not implied.",
  },
] as const;

const WEEK_MONTH: readonly Block[] = [
  {
    title: "Week 1",
    bullets: [
      "Situation map (one screen) + primary constraint",
      "Risk register + failure modes",
      "First 10 moves (sequenced, owned, timeboxed)",
    ],
  },
  {
    title: "Weeks 2–4",
    bullets: [
      "Operating plan + cadence that actually runs",
      "KPI stack (few metrics, real ownership)",
      "Delivery rhythm + proof posture (what gets logged, where)",
    ],
  },
  {
    title: "Month 2+",
    bullets: [
      "Team enablement + decision hygiene",
      "Systemisation (templates, playbooks, automation boundaries)",
      "Scale posture: fewer unknowns, faster recovery when things break",
    ],
  },
] as const;

const TEAM_STYLE = [
  "I coach leads, not just tasks.",
  "Cross-functional alignment is a product.",
  "I push decisions to the edge, but I’m accountable for outcomes.",
  "Cadence is governance: what gets reviewed weekly becomes real.",
] as const;

const HANDS_ON = [
  "I’ll write, model, prototype, and QA when speed matters.",
  "I don’t delegate ambiguity.",
  "If it can’t be logged, it can’t be trusted.",
] as const;

const FIT_FOR = [
  "Founders and operators who need clarity, cadence, and execution discipline",
  "Retail and commerce teams with leaks (stock, data, handoffs, decision drift)",
  "Creator-led businesses needing repeatable release systems and retention loops",
  "Platforms needing deterministic rails (events → comms → audit) with guardrails",
] as const;

const NOT_FOR = [
  "Deck-only strategy with no build follow-through",
  "“Autonomous AI” theatre without logs, observability, or rollback posture",
  "Teams without decision-maker access (no owner, no outcome)",
  "Vendor sprawl as status (new tools with no ROI case)",
] as const;

const PRINCIPLES = [
  "Truth over comfort.",
  "Constraints are strategy.",
  "Systems beat heroics.",
  "Velocity with auditability.",
  "Clear owner, clear outcome.",
] as const;

const ENGAGEMENTS: readonly Mode[] = [
  {
    title: "Operator Diagnostic (timeboxed)",
    desc: "Fast clarity. Ends in a plan you can run.",
    includes: [
      "Situation map + constraints",
      "Risk register + failure modes",
      "First 10 moves (sequenced, owned, gated)",
    ],
  },
  {
    title: "Advisory Sprint (2–4 weeks)",
    desc: "A small number of high-leverage changes shipped with proof.",
    includes: [
      "Cadence + decision rights installed",
      "One or two modules shipped (e.g. Cadence + Proof)",
      "Handoff notes + operating discipline",
    ],
  },
  {
    title: "Fractional Operator (ongoing)",
    desc: "When the system needs to stay tight and compounding.",
    includes: [
      "Weekly cadence + accountability loop",
      "Incremental hardening + guardrails",
      "Proof logging + iteration discipline",
    ],
  },
] as const;

export default function OperatorPage() {
  const siteUrl =
    process.env.SITE_URL?.replace(/\/+$/, "") || "https://yoy.group";

  // Article JSON-LD: binds this method page to your canonical Person entity
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/operator#article`,
    headline: "Executive Operator",
    description:
      "How Andrey works: diagnose → align → design → ship → compound. Calm authority, hands-on throughput, proof-led delivery.",
    mainEntityOfPage: `${siteUrl}/operator`,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/andrey#person`,
      name: "Andrey Voronkov",
      url: `${siteUrl}/andrey`,
    },
    publisher: {
      "@type": "Organization",
      name: "YOY.Group",
      url: siteUrl,
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <header className="space-y-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Operator
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Executive Operator.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          This page is the working interface: how I show up, how decisions get
          made, and how work gets shipped without noise.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1 text-sm">
          <Link
            href="/andrey"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Profile →
          </Link>
          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services →
          </Link>
          <Link
            href="/proof"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Proof →
          </Link>
          <Link
            href="/trust"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Trust & disclosures →
          </Link>
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* Promise */}
      <section className="space-y-4" aria-label="Promise">
        <h2 className="text-sm font-medium tracking-tight">The promise</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {PROMISE.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Loop */}
      <section className="space-y-6" aria-label="Operating loop">
        <h2 className="text-sm font-medium tracking-tight">How I operate</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A simple loop. Repeated until the week stops breaking.
        </p>

        <ol className="space-y-4">
          {LOOP.map((s) => (
            <li
              key={s.title}
              className="rounded-lg border border-border/60 p-5"
            >
              <p className="text-sm font-medium">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Week/Month */}
      <section className="space-y-6" aria-label="Timeline">
        <h2 className="text-sm font-medium tracking-tight">
          What you get (exec-coded)
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WEEK_MONTH.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-border/60 p-5"
            >
              <p className="text-sm font-medium">{b.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {b.bullets.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Note: details vary by stack and team. The loop stays constant.
        </p>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Teams */}
      <section className="space-y-6" aria-label="Teams">
        <h2 className="text-sm font-medium tracking-tight">
          How I work with teams
        </h2>

        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {TEAM_STYLE.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Hands-on */}
      <section className="space-y-6" aria-label="Hands on">
        <h2 className="text-sm font-medium tracking-tight">
          Where I go hands-on
        </h2>

        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {HANDS_ON.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Fit */}
      <section className="space-y-6" aria-label="Fit">
        <h2 className="text-sm font-medium tracking-tight">Fit</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border/60 p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              For
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {FIT_FOR.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border/60 p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Not for
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {NOT_FOR.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Principles */}
      <section className="space-y-4" aria-label="Principles">
        <h2 className="text-sm font-medium tracking-tight">
          Working principles
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {PRINCIPLES.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Engagement modes */}
      <section className="space-y-6" aria-label="Engagements">
        <h2 className="text-sm font-medium tracking-tight">Engagement modes</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Three ways to start. All timeboxed. All end in something real.
        </p>

        <ul className="space-y-6">
          {ENGAGEMENTS.map((m) => (
            <li
              key={m.title}
              className="rounded-lg border border-border/60 p-6"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium">{m.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {m.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* CTA */}
      <section className="space-y-4" aria-label="Start">
        <h2 className="text-sm font-medium tracking-tight">Start</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          If you want a calm operator who can also build: send a short note with
          current stack, primary constraint, and what must be true in 30 days.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Contact →
          </Link>

          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            View services →
          </Link>

          <Link
            href="/proof"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            See proof →
          </Link>
        </div>

        <p className="pt-6 text-xs text-muted-foreground">
          Proof over promises. Timeboxed by default.
        </p>
      </section>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          ← Home
        </Link>
        <span>Method layer · Calm interface, real throughput.</span>
      </footer>
    </main>
  );
}
