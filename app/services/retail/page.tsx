// app/services/retail/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Retail",
  description:
    "Retail operating model design and execution cadence for founder-led brands and operators. Lean, auditable, repeatable.",
};

const OUTCOMES = [
  "A real weekly trading cadence (decisions, owners, deadlines)",
  "Fewer operational leaks (stock, handoffs, missing information)",
  "A roadmap that ships — with explicit risk gates",
] as const;

const MODULES = [
  {
    title: "Operating model",
    desc: "Responsibility map, decision rights, and the minimum set of rituals to keep execution tight.",
  },
  {
    title: "Trading cadence",
    desc: "Weekly and monthly rhythm: what gets reviewed, what gets decided, and what gets shipped.",
  },
  {
    title: "Commercial visibility",
    desc: "The minimum measurements and signals you need to run the business without guessing.",
  },
  {
    title: "Execution hardening",
    desc: "Guardrails, checklists, failure modes, and “what happens when it breaks”.",
  },
] as const;

const GOOD_FIT = [
  "Founder-led brand with 1–15 operators",
  "Retail team that needs structure without enterprise overhead",
  "Partners supporting retail clients (franchise / advisory / platform) who need a repeatable playbook",
] as const;

const NOT_A_FIT = [
  "Branding-only engagements",
  "Deck-only strategy with no implementation follow-through",
  "Teams optimizing for complexity or status",
] as const;

const ENGAGEMENTS = [
  {
    title: "Diagnostic (timeboxed)",
    desc: "A short assessment that ends in a plan you can run.",
    includes: [
      "Current-state map (people, workflows, stack)",
      "Primary bottlenecks + risk register",
      "30-day action plan with gates and owners",
    ],
  },
  {
    title: "Build sprint",
    desc: "Implement one or two high-leverage modules with guardrails.",
    includes: [
      "Cadence installed + accountability loop",
      "One critical workflow hardened end-to-end",
      "Handoff notes and operating discipline",
    ],
  },
  {
    title: "Operator retainer",
    desc: "Keep the machine tight while you scale.",
    includes: [
      "Weekly operating review + decisions log",
      "Incremental hardening and iteration",
      "Change log: what moved, what broke, what improved",
    ],
  },
] as const;

export default function RetailServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Retail
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Retail operating models that run lean.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          For brands that need execution control: clear owners, clean rhythm,
          and a system that survives reality. Calm surface. Hard discipline underneath.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* Outcomes */}
      <section className="space-y-4" aria-label="Outcomes">
        <h2 className="text-sm font-medium tracking-tight">Outcomes</h2>
        <ul className="space-y-2 text-sm text-foreground">
          {OUTCOMES.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      {/* Modules */}
      <section className="space-y-6" aria-label="Modules">
        <h2 className="text-sm font-medium tracking-tight">Modules</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Engagements are assembled from a small set of modules. This keeps
          delivery repeatable and governable.
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {MODULES.map((m) => (
            <li key={m.title} className="rounded-lg border border-border/60 p-5">
              <p className="text-sm font-medium">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.desc}
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

      {/* Engagement modes */}
      <section className="space-y-6" aria-label="Engagement modes">
        <h2 className="text-sm font-medium tracking-tight">Engagement modes</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Three ways to start. All are timeboxed. All end in something you can run.
        </p>

        <ul className="space-y-6">
          {ENGAGEMENTS.map((m) => (
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
          Send a short note: what you sell, where it sells, what’s broken, and
          what must be true in 30 days.
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
        No hype language. No decks by default. Proof over promises.
      </footer>
    </main>
  );
}