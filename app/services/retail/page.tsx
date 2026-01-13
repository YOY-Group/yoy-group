// app/services/retail/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

/**
 * SEO: page-level metadata to prevent inheriting layout canonical (/)
 * Layout provides `metadataBase`, so we can use path-based canonicals + relative OG images.
 */
export const metadata: Metadata = {
  title: "Retail",
  description:
    "Retail operating model design, trading cadence, and buying/merch discipline for founder-led brands. Lean, auditable, repeatable.",
  alternates: {
    canonical: "/services/retail",
  },
  openGraph: {
    title: "Retail",
    description:
      "Retail operating model design, trading cadence, and buying/merch discipline for founder-led brands. Lean, auditable, repeatable.",
    url: "/services/retail",
    images: [
      {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        alt: "YOY.Group — Retail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail",
    description:
      "Retail operating model design, trading cadence, and buying/merch discipline for founder-led brands. Lean, auditable, repeatable.",
    images: ["/og/og.png"],
  },
};

type Faq = { q: string; a: string };

const OUTCOMES = [
  "A real weekly trading cadence (decisions, owners, deadlines)",
  "Cleaner margin and availability control (range, pricing, stock flow)",
  "Fewer operational leaks (handoffs, exceptions, missing information)",
  "A roadmap that ships — with explicit risk gates",
] as const;

const MODULES = [
  {
    title: "Operating model",
    desc: "Responsibility map, decision rights, and the minimum rituals to keep execution tight across channels.",
  },
  {
    title: "Trading cadence",
    desc: "Weekly and monthly rhythm: what gets reviewed, what gets decided, and how actions get closed.",
  },
  {
    title: "Buying & Merchandising engine",
    desc: "Range plan, pricing architecture, option counts, intake vs sales, stock cover, and the KPI set that stops leakage early.",
  },
  {
    title: "Supply chain + 3PL discipline",
    desc: "Critical path, lead-time control, service guardrails, and exception rhythms that keep customer promise stable.",
  },
] as const;

const GOOD_FIT = [
  "Founder-led brand with 1–15 operators",
  "Retail team that needs structure without enterprise overhead",
  "Partners supporting retail clients (franchise / advisory / platform) who need a repeatable operating kit",
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
      "Commercial engine scan (range, price, stock flow)",
      "Primary bottlenecks + risk register",
      "30-day action plan with gates and owners",
    ],
  },
  {
    title: "Build sprint",
    desc: "Implement one or two high-leverage modules with guardrails.",
    includes: [
      "Cadence installed + decisions log + owners",
      "One critical workflow hardened end-to-end (e.g. stock, trading, handoffs)",
      "A minimal KPI sheet the team actually uses",
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
      "Proof links attached as work ships",
    ],
  },
] as const;

const READINESS = {
  title: "Readiness",
  desc: "Not sure where to start? Run a short readiness check. It clarifies scope before any work starts.",
  cta: "Get a readiness score →",
  href: "/services/retail/readiness",
} as const;

const retailFaqs: readonly Faq[] = [
  {
    q: "Who is this for?",
    a: "Founder-led consumer brands that want a tighter operating model: clearer range decisions, cleaner margins, faster cycles, fewer surprises.",
  },
  {
    q: "Who is this not for?",
    a: "Teams looking for a slide deck or generic transformation theatre. We only ship what can be implemented, measured, and maintained.",
  },
  {
    q: "What does success look like?",
    a: "A working trading rhythm, fewer stock problems, clearer margin control, higher conversion, and a system your team can run without heroics.",
  },
  {
    q: "What do you typically change first?",
    a: "Decision cadence + the commercial engine: range logic, pricing rules, and stock flow. Then instrumentation: what’s true, what’s not, and what is costing you money.",
  },
  {
    q: "Do you cover supply chain and 3PL?",
    a: "Yes — but only as part of the end-to-end system. Lead times, service levels, exception handling, and handoffs are designed to protect trading and customer promise.",
  },
  {
    q: "What timeline should I expect?",
    a: "Fast diagnosis in days, first operational changes in 2–4 weeks, compounding improvements over a quarter.",
  },
  {
    q: "How do you price it?",
    a: "Value-based and scope-based. The readiness check helps route you into the right lane before any work starts.",
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

export default function RetailServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Retail
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Retail operating models that hold under pressure.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          For brands that need execution control: clear owners, clean rhythm,
          and a commercial engine that survives reality. Calm surface. Hard
          discipline underneath.
        </p>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Built from operator work across stores, franchise, and multi-channel —
          with buying/merch discipline and measured execution (no theatre).
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
          Three ways to start. All are timeboxed. All end in something you can
          run.
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
      <FaqSection faqs={retailFaqs} />

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
