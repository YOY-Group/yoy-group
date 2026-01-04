// app/services/page.tsx
import Link from "next/link";

type Lens = {
  title: string;
  href: string;
  desc: string;
  outcomes: string[];
  forWho: string[];
  notFor: string[];
};

type Module = {
  title: string;
  desc: string;
};

type Mode = {
  title: string;
  desc: string;
  includes: string[];
};

const LENSES: Lens[] = [
  {
    title: "Retail",
    href: "/services/retail",
    desc: "Operating models and execution cadence for brands that need clarity, speed, and control without enterprise overhead.",
    outcomes: [
      "Cleaner weekly trading rhythm and accountability",
      "Fewer operational leaks (stock, data, handoffs)",
      "A roadmap that ships, with risk gates",
    ],
    forWho: [
      "Founder-led retail brands",
      "Operators rebuilding the core machine",
      "Partners supporting retail clients (advisory / franchise / platform)",
    ],
    notFor: [
      "Branding-only engagements",
      "Deck-only strategy with no build follow-through",
      "Teams seeking complexity as status",
    ],
  },
  {
    title: "Creators",
    href: "/services/creators",
    desc: "Turn calendar, content, and audience into a repeatable merch system — drops, access, and retention tied to real moments.",
    outcomes: [
      "Merch cadence aligned to events/releases",
      "Better retention: owned channel + light CRM",
      "Cleaner fulfillment and fewer manual ops",
    ],
    forWho: [
      "Artists / DJs / creators",
      "Managers and talent teams",
      "Labels, promoters, and touring operators",
    ],
    notFor: [
      "One-off merch without a system",
      "“Growth hacks” without a product loop",
      "Teams without ownership of the audience surface",
    ],
  },
  {
    title: "Rails",
    href: "/services/rails",
    desc: "Web2-first, Web3-ready rails for commerce and community — identity, access, provenance, and automation on Telegram-friendly infrastructure.",
    outcomes: [
      "Bridge from existing stack into rails safely",
      "Clear constraints: permissions, audit, failure modes",
      "Partner-ready architecture for pilots and rollouts",
    ],
    forWho: [
      "Platforms and ecosystems (TON/Telegram-adjacent)",
      "Brands exploring loyalty/provenance/access",
      "Teams needing deterministic automation with guardrails",
    ],
    notFor: [
      "Token launches as marketing",
      "Black-box “autonomous AI” claims",
      "Anything that can’t be governed or audited",
    ],
  },
];

const MODULES: Module[] = [
  {
    title: "Cadence",
    desc: "Weekly rhythm, decision points, and responsibility mapping. The machine runs when the schedule is real.",
  },
  {
    title: "Commerce",
    desc: "Product, pricing, inventory signals, and execution flow. Less guesswork, fewer leaks.",
  },
  {
    title: "Retention",
    desc: "Owned channels, lightweight CRM, and post-purchase loops. Compounding beats campaigns.",
  },
  {
    title: "Proof",
    desc: "Logs, before/after, and traceable decisions. No claims without evidence.",
  },
  {
    title: "Rails",
    desc: "Identity, access, provenance, and automation boundaries. Web2-first, Web3-optional.",
  },
];

const MODES: Mode[] = [
  {
    title: "Diagnostic",
    desc: "A short, bounded assessment that ends in a clear plan.",
    includes: [
      "Current-state map (stack + workflows)",
      "Primary bottlenecks + risk register",
      "30-day action plan with gates",
    ],
  },
  {
    title: "Build Sprint",
    desc: "Timeboxed implementation of a small number of high-leverage changes.",
    includes: [
      "One or two modules shipped (e.g. Cadence + Proof)",
      "Guardrails and failure-mode handling",
      "Handoff notes and operating discipline",
    ],
  },
  {
    title: "Operator Retainer",
    desc: "Ongoing execution support when the system needs to stay tight.",
    includes: [
      "Weekly cadence + accountability loop",
      "Incremental improvements and hardening",
      "Proof logging + iteration discipline",
    ],
  },
];

export const metadata = {
  title: "Services",
  description:
    "Three service lenses — Retail, Creators, Rails — delivered as calm, execution-first systems. Proof over promises.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Three lenses. One discipline.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          YOY builds execution systems: clear cadence, clean handoffs, auditable
          decisions, and automation with guardrails. The public surface is calm;
          the work is precise.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* Lenses */}
      <section className="space-y-6" aria-label="Service lenses">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Lenses
          </h2>
          <Link
            href="/proof"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Proof →
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {LENSES.map((s) => (
            <li key={s.href} className="group">
              <Link
                href={s.href}
                className="block space-y-4 rounded-lg border border-border/60 p-5 hover:border-border transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    View →
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Outcomes
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground">
                      {s.outcomes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Good fit
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground">
                      {s.forWho.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Not a fit
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground">
                      {s.notFor.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Modules */}
      <section className="space-y-6" aria-label="Delivery modules">
        <h2 className="text-sm font-medium tracking-tight">Modules</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Engagements are assembled from a small set of modules. This keeps the
          work lean, repeatable, and governable.
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

      <div className="my-16 h-px bg-border" />

      {/* Modes */}
      <section className="space-y-6" aria-label="Engagement modes">
        <h2 className="text-sm font-medium tracking-tight">Engagement modes</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Three ways to start. All are timeboxed. All end in something real.
        </p>

        <ul className="space-y-6">
          {MODES.map((m) => (
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

      {/* Intake */}
      <section className="space-y-4" aria-label="Intake">
        <h2 className="text-sm font-medium tracking-tight">Intake</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          If you want to explore fit, send a short note: current stack, primary
          constraint, and what success must look like in 30 days.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            Contact →
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
        Proof over promises. Timeboxed by default.
      </footer>
    </main>
  );
}