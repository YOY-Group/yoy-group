// app/page.tsx
import Link from "next/link";

const PILLARS = [
  {
    title: "Agentic Commerce OS",
    href: "/pillars/agentic-commerce-os",
    desc: "Autonomous systems for commerce execution and decision-making.",
  },
  {
    title: "Retail Operations Architecture",
    href: "/pillars/retail-ops-architecture",
    desc: "Modular operating models spanning supply, systems, and distribution.",
  },
  {
    title: "Culture–Commerce Engineering",
    href: "/pillars/culture-commerce-engineering",
    desc: "Translating cultural signal into durable commercial systems.",
  },
] as const;

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero */}
      <header className="space-y-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">YOY.Group</h1>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
            We help brands run better.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We fix how companies sell, ship, and grow — using systems, not slides.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-foreground">
            <li>How your business is structured</li>
            <li>How work actually gets done</li>
            <li>How results are proven, not promised</li>
          </ul>

          <p className="mt-6 text-xs text-muted-foreground">Proof beats promises.</p>
        </div>
      </header>

      {/* Divider */}
      <div className="my-16 h-px bg-border" />

      {/* Pillars */}
      <section aria-labelledby="pillars" className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2
            id="pillars"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Pillars
          </h2>

          <Link
            href="/pillars"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            View →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-lg border border-border bg-background p-6 transition-colors hover:bg-muted/30"
            >
              <div className="text-base font-medium text-foreground">
                {p.title}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer signal */}
      <footer className="mt-24 text-xs text-muted-foreground">
        Authority layer · v0.1
      </footer>
    </main>
  );
}