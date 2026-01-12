// app/services/rails/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Rails",
  description:
    "Deterministic operating rails for commerce and communities: action → data → communication → audit. Built for reliability under load.",
  path: "/services/rails",
  type: "website",
  imagePath: "/og/og.png",
});

type Faq = { q: string; a: string };

const RAILS = [
  {
    title: "Event rail",
    desc: "A consistent record of what happened — reliable enough to run decisions on.",
    bullets: [
      "Clear entities and ownership",
      "Consistent naming and change discipline",
      "Protection against double-counting and drift",
      "Auditability: what changed, when, and why",
    ],
  },
  {
    title: "Messaging rail",
    desc: "Communication that follows reality — triggered by signals, not guesswork.",
    bullets: [
      "Rules for when to send (and when not to)",
      "Template discipline and approvals",
      "Rate limits and failure handling",
      "Measured outcomes (deliverability, response, conversion)",
    ],
  },
  {
    title: "Access rail",
    desc: "Gated access built on a simple permission posture.",
    bullets: [
      "Invites / allowlists / roles",
      "Clear boundaries for internal tools",
      "Least-privilege by default",
      "Optional: portable access when it’s genuinely needed",
    ],
  },
  {
    title: "Proof rail",
    desc: "Evidence and provenance — only where it creates leverage.",
    bullets: [
      "Proof logs (claims, changes, corrections)",
      "Receipts / provenance signals (optional)",
      "Membership or passes (optional)",
      "Disclosure and governance posture",
    ],
  },
] as const;

const GOOD_FIT = [
  "Teams shipping, but losing time to manual ops and uncertainty",
  "Commerce + data + comms that need to behave predictably",
  "Creators or brands needing cadence, membership, and retention without chaos",
  "Web3 teams needing a commerce-native bridge (utility-first, not token-first)",
] as const;

const NOT_A_FIT = [
  "“Autonomy” without logs, observability, or rollback posture",
  "One-off experiments with no intent to operate after launch",
  "Complexity for its own sake (new vendors) with no ROI case",
] as const;

const DELIVERABLES = [
  "A clear rail blueprint (responsibilities, naming, operating rules)",
  "Reliability posture: drift control, failure handling, and a runbook",
  "Security posture for internal surfaces and secrets handling",
  "Telemetry: what we watch, where we alert, how we respond",
  "A 30-day plan with risk gates and measurable outcomes",
] as const;

const START_HERE = [
  {
    title: "Rail audit (fast)",
    desc: "Map what exists, what’s missing, and where the week breaks.",
    bullets: [
      "System inventory + signal map",
      "Top rail gaps (priority order)",
      "30-day plan with risk gates",
    ],
  },
  {
    title: "Rail MVP (timeboxed)",
    desc: "Install the minimum rails required to operate deterministically.",
    bullets: [
      "Event + reliability posture",
      "Messaging rules + templates",
      "Security + logs + runbook",
    ],
  },
  {
    title: "Access + proof (optional)",
    desc: "Add gating and provenance only if it materially improves retention or trust.",
    bullets: [
      "Access rules + permissions",
      "Proof log structure",
      "Portable primitives (optional)",
    ],
  },
] as const;

const READINESS = {
  title: "Readiness",
  desc: "Not sure which rail is actually breaking your week? Start with a short readiness check. It clarifies scope before any work starts.",
  cta: "Get a readiness score →",
  href: "/services/rails/readiness",
} as const;

const railsFaqs: readonly Faq[] = [
  {
    q: "What are ‘rails’?",
    a: "Rails are the operating paths that make systems dependable: how actions become data, how data triggers communication, and how everything is logged and audited. Think of them as the parts of your system that must never lie.",
  },
  {
    q: "Who is this for?",
    a: "Teams running commerce or communities who want fewer unknowns: less manual work, fewer errors, and systems that behave predictably under load.",
  },
  {
    q: "Who is this not for?",
    a: "Anyone looking for a fragile automation stack or vendor sprawl. We build rails that survive growth and team turnover.",
  },
  {
    q: "What does success look like?",
    a: "Key workflows become boring. Exceptions are visible. Data is trustworthy. Decisions are faster because reality is clear.",
  },
  {
    q: "What timeline should I expect?",
    a: "Stability improvements in 1–2 weeks, core rail buildout in 4–8 weeks, then iteration based on ROI.",
  },
  {
    q: "What’s the prerequisite?",
    a: "A single source of truth — even if it’s messy today. We help define it, then harden it.",
  },
] as const;

function FaqSection({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <section className="space-y-6" aria-label="FAQ">
      <h2 className="text-sm font-medium tracking-tight">FAQ</h2>

      <ul className="space-y-3">
        {faqs.map((f) => (
          <li
            key={f.q}
            className="rounded-lg border border-border/60 px-5 py-4"
          >
            <details className="group">
              <summary className="cursor-pointer list-none text-sm font-medium tracking-tight">
                <span className="inline-flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-muted-foreground group-open:hidden">
                    +
                  </span>
                  <span className="text-muted-foreground hidden group-open:inline">
                    –
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function RailsServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Rails
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Rails that make systems reliable under load.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          A rail is a deterministic path from action → data → communication →
          audit. The goal isn’t more automation. The goal is fewer unknowns —
          and faster, safer decisions when things break.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* What we build */}
      <section className="space-y-6" aria-label="Rails">
        <h2 className="text-sm font-medium tracking-tight">What we build</h2>

        <ul className="space-y-6">
          {RAILS.map((r) => (
            <li
              key={r.title}
              className="rounded-lg border border-border/60 p-6"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium">{r.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
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
              Good fit
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {GOOD_FIT.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border/60 p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Not a fit
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {NOT_A_FIT.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Deliverables */}
      <section className="space-y-4" aria-label="Deliverables">
        <h2 className="text-sm font-medium tracking-tight">Deliverables</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The output is something you can actually run: clear responsibilities,
          clear rules, clear logs.
        </p>

        <ul className="space-y-2 text-sm text-foreground">
          {DELIVERABLES.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* How to start */}
      <section className="space-y-6" aria-label="Start">
        <h2 className="text-sm font-medium tracking-tight">How to start</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Start with the rail that is currently breaking your week. Keep scope
          tight. Iterate from evidence.
        </p>

        <ul className="space-y-6">
          {START_HERE.map((m) => (
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
                {m.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Readiness */}
      <section className="space-y-4" aria-label="Readiness">
        <h2 className="text-sm font-medium tracking-tight">
          {READINESS.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {READINESS.desc}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={READINESS.href}
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            {READINESS.cta}
          </Link>

          <Link
            href="/operator"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            How we work →
          </Link>
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* FAQ */}
      <FaqSection faqs={railsFaqs} />

      <div className="my-16 h-px bg-border" />

      {/* Next steps */}
      <section className="space-y-4" aria-label="Next steps">
        <h2 className="text-sm font-medium tracking-tight">Next steps</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Send a short note: current stack, which rail you want hardened
          (events, messaging, access, proof), and what must be true in 30 days.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            Contact →
          </Link>

          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            All services →
          </Link>

          <Link
            href="/trust"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Trust & disclosures →
          </Link>
        </div>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Determinism first. Optional layers only when they improve outcomes.
      </footer>
    </main>
  );
}
