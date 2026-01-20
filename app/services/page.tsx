// app/services/page.tsx
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

type Lens = {
  title: string;
  href: string;
  readinessHref: string;
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

const TITLE = "Services";
const DESCRIPTION =
  "Three service lenses — Retail, Creators, Rails — delivered as calm, execution-first systems. Proof over promises.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/services",
  type: "website",
  imagePath: "/og/og.png",
});

const LENSES: readonly Lens[] = [
  {
    title: "Retail",
    href: "/services/retail",
    readinessHref: "/services/retail/readiness",
    desc: "Operating models and execution cadence for brands that need clarity, speed, and control — without enterprise overhead.",
    outcomes: [
      "A weekly trading rhythm with real accountability",
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
    readinessHref: "/services/creators/readiness",
    desc: "Turn calendar, content, and audience into a repeatable merch system — drops, access, and retention tied to real moments.",
    outcomes: [
      "Merch cadence aligned to events and releases",
      "Better retention via owned channel + light CRM",
      "Cleaner fulfillment with fewer manual ops",
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
    readinessHref: "/services/rails/readiness",
    desc: "Web2-first, Web3-ready rails for commerce and community — identity, access, provenance, and automation on Telegram-friendly infrastructure.",
    outcomes: [
      "A safe bridge from existing stack into rails",
      "Clear constraints: permissions, audit, failure modes",
      "Partner-ready architecture for pilots and rollouts",
    ],
    forWho: [
      "Platforms and ecosystems (TON/Telegram-adjacent)",
      "Brands exploring loyalty, provenance, and access",
      "Teams needing deterministic automation with guardrails",
    ],
    notFor: [
      "Token launches as marketing",
      "Black-box “autonomous AI” claims",
      "Anything that can’t be governed or audited",
    ],
  },
] as const;

const MODULES: readonly Module[] = [
  {
    title: "Operational Cadence",
    desc: "Weekly rhythm, decision points, and responsibility mapping. The machine runs when the schedule is real.",
  },
  {
    title: "Supply & Inventory",
    desc: "Assortment, pricing inputs, intake, and inventory signals. Less guesswork, fewer leaks.",
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
    desc: "Identity, access, provenance, and automation boundaries. Predictable execution under load.",
  },
] as const;

const MODES: readonly Mode[] = [
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
      "One or two modules shipped (e.g. Operational Cadence + Proof)",
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
] as const;

export default function ServicesPage() {
  return (
    <main className="py-16 md:py-24">
      {/* Header */}
      <header className="mx-auto max-w-4xl space-y-4 px-6">
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

        <p className="mt-3 text-xs text-muted-foreground">
          Services delivered through{" "}
          <span className="font-medium text-foreground">YOY.AI Studio</span> —
          the client-facing consulting practice of{" "}
          <span className="font-medium text-foreground">YOY.Group</span>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/proof"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Proof →
          </Link>
          <Link
            href="/pillars"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Pillars →
          </Link>
          <Link
            href="/playbooks"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Playbooks →
          </Link>
        </div>
      </header>

      <div className="mx-auto my-12 h-px max-w-4xl bg-border" />

      {/* How this fits together */}
      <section
        className="mx-auto max-w-4xl space-y-6 px-6"
        aria-label="How this fits together"
      >
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          How this fits together
        </h2>

        <dl className="space-y-5 text-sm leading-relaxed">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[92px_1fr] md:gap-6">
            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Retail
            </dt>
            <dd className="text-muted-foreground">
              <span className="font-medium text-foreground">
                Decision layer:
              </span>{" "}
              who owns what, what gets reviewed weekly, and how commercial
              reality stays visible.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[92px_1fr] md:gap-6">
            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Creators
            </dt>
            <dd className="text-muted-foreground">
              <span className="font-medium text-foreground">
                Culture-led revenue:
              </span>{" "}
              calendar-driven drops and merch systems, with relationship capture
              so output compounds without chaos.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[92px_1fr] md:gap-6">
            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Rails
            </dt>
            <dd className="text-muted-foreground">
              <span className="font-medium text-foreground">
                Execution layer:
              </span>{" "}
              events, messaging, access, and proof so the system behaves
              predictably under load.
            </dd>
          </div>
        </dl>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Most teams start with the layer that is currently breaking their week.
          Each service works standalone, and connects cleanly if you later need
          the full stack.
        </p>
      </section>

      <div className="mx-auto my-12 h-px max-w-4xl bg-border" />

      {/* Lenses */}
      <section
        className="mx-auto max-w-5xl space-y-6 px-6"
        aria-label="Service lenses"
      >
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Lenses
          </h2>
          <Link
            href="/contact"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Intake →
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {LENSES.map((s) => (
            <li key={s.href} className="group">
              <div className="h-full space-y-4 rounded-lg border border-border/60 p-5 transition-colors hover:border-border">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <Link
                    href={s.href}
                    className="text-xs text-muted-foreground transition-colors group-hover:text-foreground/80"
                  >
                    View →
                  </Link>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href={s.readinessHref}
                    className="text-sm underline underline-offset-4 hover:opacity-80"
                  >
                    Readiness score →
                  </Link>
                  <Link
                    href="/proof"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Proof →
                  </Link>
                </div>

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
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto my-16 h-px max-w-4xl bg-border" />

      {/* Modules */}
      <section
        className="mx-auto max-w-4xl space-y-6 px-6"
        aria-label="Delivery modules"
      >
        <h2 className="text-sm font-medium tracking-tight">Modules</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Engagements are assembled from a small set of modules. This keeps the
          work lean, repeatable, and governable.
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {MODULES.map((m) => (
            <li
              key={m.title}
              className="rounded-lg border border-border/60 p-5"
            >
              <p className="text-sm font-medium">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto my-16 h-px max-w-3xl bg-border" />

      {/* Modes */}
      <section
        className="mx-auto max-w-3xl space-y-6 px-6"
        aria-label="Engagement modes"
      >
        <h2 className="text-sm font-medium tracking-tight">Engagement modes</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Three ways to start. All are timeboxed. All end in something real.
        </p>

        <ul className="space-y-6">
          {MODES.map((m) => (
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

      <div className="mx-auto my-16 h-px max-w-3xl bg-border" />

      {/* Intake */}
      <section className="mx-auto max-w-3xl space-y-4 px-6" aria-label="Intake">
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
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Trust & disclosures →
          </Link>
        </div>

        <p className="pt-8 text-xs text-muted-foreground">
          Proof over promises. Timeboxed by default.
        </p>
      </section>
    </main>
  );
}
