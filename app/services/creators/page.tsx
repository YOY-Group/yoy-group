// app/services/creators/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Creators",
  description:
    "Creator operating systems: calendar → releases → commerce → relationship. Built to run lean, without noise.",
};

const WHAT_THIS_IS = [
  "A repeatable release cadence tied to your real calendar (tour, content, moments)",
  "A shipping system that doesn’t collapse into manual work",
  "A direct relationship layer that compounds beyond platforms",
] as const;

const CAPABILITIES = [
  {
    title: "Cadence design",
    desc: "Turn moments into a runnable plan — with clear owners, constraints, and an operating rhythm.",
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
      "Support and customer comms posture",
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

export default function CreatorsServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Creators
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Turn calendar into commerce — without becoming an ops company.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          YOY installs creator operating systems. You keep making culture, while
          the machine ships releases, captures relationships, and gets more
          reliable over time.
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
          No vague “brand building”. We install a small operating layer, then
          iterate against reality.
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <li key={c.title} className="rounded-lg border border-border/60 p-5">
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
            <li key={m.title} className="rounded-lg border border-border/60 p-6">
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
        Build the system first. Add optional layers only when they improve outcomes.
      </footer>
    </main>
  );
}