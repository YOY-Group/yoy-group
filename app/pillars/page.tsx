// app/pillars/page.tsx
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

const TITLE = "Pillars";
const DESCRIPTION =
  "Three enduring primitives. Stable over time. Updated only when the operating reality changes.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/pillars",
  type: "website",
  imagePath: "/og/og.png",
});

const PILLARS = [
  {
    title: "Agentic Commerce OS",
    href: "/pillars/agentic-commerce-os",
    desc: "Governed systems for commerce execution and decision-making.",
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
    <main className="mx-auto max-w-4xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Pillars</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          {DESCRIPTION}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/glossary"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Glossary →
          </Link>
          <Link
            href="/proof"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Proof →
          </Link>
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services →
          </Link>
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Pillars list" className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Index
          </h2>
          <span className="text-xs text-muted-foreground">
            Slow-changing primitives
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((p) => (
            <li key={p.href} className="group">
              <Link
                href={p.href}
                className="block h-full space-y-4 rounded-lg border border-border/60 p-5 transition-colors hover:border-border"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground/80">
                    Read →
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

      <div className="my-16 h-px bg-border" />

      <section aria-label="Method" className="space-y-3">
        <h2 className="text-sm font-medium tracking-tight">Method</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Pillars are primitives, not posts.</li>
          <li>• Updates happen only when operating reality changes.</li>
          <li>• Claims derived from pillars should link into Proof.</li>
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Authority layer · Pillars are slow-changing.
      </footer>
    </main>
  );
}
