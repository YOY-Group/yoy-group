// app/pillars/page.tsx
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

export default function PillarsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Pillars</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Three enduring primitives. Stable over time. Updated only when the
          operating reality changes.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Pillars list">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <li key={p.href} className="group">
              <Link
                href={p.href}
                className="block space-y-3 rounded-lg border border-border/60 p-5 hover:border-border transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-sm font-medium tracking-tight">
                    {p.title}
                  </h2>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    View →
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Authority layer · Pillars are slow-changing.
      </footer>
    </main>
  );
}