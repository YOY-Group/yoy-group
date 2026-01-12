// app/services/creators/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Creators",
  description:
    "Creator operating systems: calendar → releases → commerce → relationship. Built to ship on schedule, without noise.",
  path: "/services/creators",
  type: "website",
  imagePath: "/og/og.png",
});

type Faq = { q: string; a: string };

const WHAT_THIS_IS = [
  "A repeatable release cadence tied to your real calendar (shows, drops, content moments)",
  "A shipping system that doesn’t collapse into manual work",
  "A relationship layer that compounds beyond platforms",
] as const;

const CAPABILITIES = [
  {
    title: "Cadence design",
    desc: "Turn moments into a runnable plan — owners, constraints, rhythm. No wishful thinking.",
  },
  {
    title: "Release system",
    desc: "Define what ships, what’s limited, what’s recurring, and how access behaves.",
  },
  {
    title: "Relationship layer",
    desc: "Opt-in capture and follow-ups that feel human — built for long-term retention.",
  },
  {
    title: "Operational hardening",
    desc: "Support posture, refunds/returns expectations, and failure modes so the system survives attention.",
  },
  {
    title: "Membership (optional)",
    desc: "Gated access only when it materially improves retention and community quality.",
  },
] as const;

const GOOD_FIT = [
  "Artists, DJs, creators with an active calendar and real audience motion",
  "Teams that want consistency without building a large ops function",
  "Managers / agencies who need a repeatable system across multiple talent",
] as const;

const NOT_A_FIT = [
  "One-off releases with no cadence",
  "Purely aesthetic brand work with no operating layer",
  "Hype-chasing experiments without ownership or follow-through",
] as const;

const STARTER_ENGAGEMENTS = [
  {
    title: "Cadence diagnostic (timeboxed)",
    desc: "Map the next 8–12 weeks and turn it into a runnable release plan.",
    includes: [
      "Constraints + ownership map",
      "Release calendar (what / when / why)",
      "30-day sprint plan with risk gates",
    ],
  },
  {
    title: "Release system sprint",
    desc: "Install the minimum system required to ship reliably.",
    includes: [
      "Release structure + rules (limited vs recurring)",
      "Launch gates + access behavior",
      "Support + customer comms posture",
    ],
  },
  {
    title: "Relationship layer (optional)",
    desc: "Add a clean opt-in layer that compounds without annoying your audience.",
    includes: [
      "Entry flow + retention basics",
      "Post-release follow-ups",
      "Simple reactivation tied to real moments",
    ],
  },
] as const;

const READINESS = {
  title: "Readiness",
  desc: "Not sure what to fix first? Start with a short readiness score. It clarifies scope and routes you into the right lane before any work starts.",
  cta: "Get a readiness score →",
  href: "/services/creators/readiness",
} as const;

const FAQ: readonly Faq[] = [
  {
    q: "Who is this for?",
    a: "Creators and teams with a real calendar (shows, releases, content moments) who want a repeatable way to ship — without building a big ops function.",
  },
  {
    q: "Who is this not for?",
    a: "One-off merch with no cadence, or teams looking for aesthetics-only work with no operating layer.",
  },
  {
    q: "What does success look like in 30 days?",
    a: "A runnable release calendar, clear rules (limited vs recurring), and a support posture that reduces manual chaos.",
  },
  {
    q: "Do you run ads or do growth marketing?",
    a: "Not as the core offer. We build the operating layer — cadence, release rules, relationship capture — so growth compounds instead of resetting.",
  },
  {
    q: "Do I need Web3 or tokens?",
    a: "No. Everything is Web2-first. If access or provenance improves retention later, we add it deliberately.",
  },
  {
    q: "How do you work with managers or agencies?",
    a: "We install a repeatable system you can reuse across talent: cadence, release rules, checklists, and a minimal relationship layer.",
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

export default function CreatorsServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Creators
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Creator operating systems that ship on schedule.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          YOY installs a release machine: calendar-driven drops, reliable
          shipping, and a relationship layer that compounds beyond platforms.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* What this is */}
      <section className="space-y-4" aria-label="What this is">
        <h2 className="text-sm font-medium tracking-tight">What this is</h2>
        <ul className="space-y-2 text-sm text-foreground">
          {WHAT_THIS_IS.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Capabilities */}
      <section className="space-y-6" aria-label="Capabilities">
        <h2 className="text-sm font-medium tracking-tight">Capabilities</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We install a small operating layer, then iterate against reality.
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <li
              key={c.title}
              className="rounded-lg border border-border/60 p-5"
            >
              <p className="text-sm font-medium">{c.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
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

      {/* Starter engagements */}
      <section className="space-y-6" aria-label="Starter engagements">
        <h2 className="text-sm font-medium tracking-tight">How to start</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Timeboxed. Practical. Built around constraints.
        </p>

        <ul className="space-y-6">
          {STARTER_ENGAGEMENTS.map((m) => (
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
      <FaqSection faqs={FAQ} />

      <div className="my-16 h-px bg-border" />

      {/* Next steps */}
      <section className="space-y-4" aria-label="Next steps">
        <h2 className="text-sm font-medium tracking-tight">Next steps</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Send a short note: your next 8–12 weeks, your current release setup
          (if any), and what success must look like in 30 days.
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
        Build the system first. Add optional layers only when they improve
        outcomes.
      </footer>
    </main>
  );
}
