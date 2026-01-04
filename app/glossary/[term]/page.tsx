// app/glossary/[term]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Term = {
  slug: string;
  title: string;
  short: string;
  definition: string;
  notes?: string[];
  related?: { title: string; href: string }[];
  updated?: string; // ISO or readable
};

const TERMS: Term[] = [
  {
    slug: "authority-layer",
    title: "Authority Layer",
    short: "The public surface where claims must be earned and verifiable.",
    definition:
      "The Authority Layer is YOY.Group’s public-facing library. Its purpose is not marketing; it is a durable record of primitives, decisions, and proof. Anything published here must survive scrutiny, remain readable over time, and avoid claims without evidence.",
    notes: [
      "Prefer structure over persuasion.",
      "Publish only what can be defended without context.",
      "When uncertain: remove.",
    ],
    related: [
      { title: "Proof", href: "/proof" },
      { title: "Pillars", href: "/pillars" },
      { title: "Trust", href: "/trust" },
    ],
    updated: "2025-12-21",
  },
  {
    slug: "pillars",
    title: "Pillars",
    short: "Stable primitives that change slowly and only when reality changes.",
    definition:
      "Pillars are the small set of enduring primitives that define how YOY thinks and builds. They are designed to be stable over time, referenced often, and updated rarely—only when the operating reality changes.",
    related: [{ title: "Pillars", href: "/pillars" }],
    updated: "2025-12-21",
  },
  {
    slug: "proof",
    title: "Proof",
    short: "Evidence of execution: logs, artifacts, experiments, and outcomes.",
    definition:
      "Proof is the archive of build logs and execution evidence. It exists to demonstrate reality, not interpretation. Proof should be concrete: artifacts, traces, screenshots, metrics, and postmortems—without hype language.",
    related: [{ title: "Proof", href: "/proof" }],
    updated: "2025-12-21",
  },
];

function getTerm(slug: string) {
  return TERMS.find((t) => t.slug === slug);
}

export function generateStaticParams() {
  return TERMS.map((t) => ({ term: t.slug }));
}

export default function GlossaryTermPage({
  params,
}: {
  params: { term: string };
}) {
  const term = getTerm(params.term);
  if (!term) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{term.title}</h1>
          {term.updated ? (
            <span className="text-xs text-muted-foreground">
              Updated · {term.updated}
            </span>
          ) : null}
        </div>

        <p className="text-base leading-relaxed text-muted-foreground">
          {term.short}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Definition" className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Definition
        </h2>
        <p className="text-sm leading-relaxed text-foreground">{term.definition}</p>
      </section>

      {term.notes?.length ? (
        <>
          <div className="my-12 h-px bg-border" />
          <section aria-label="Notes">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Notes
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {term.notes.map((n, idx) => (
                <li key={idx} className="leading-relaxed">
                  {n}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}

      {term.related?.length ? (
        <>
          <div className="my-12 h-px bg-border" />
          <section aria-label="Related">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Related
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {term.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="rounded-md border border-border/60 px-3 py-1.5 text-xs text-muted-foreground hover:border-border hover:text-foreground transition-colors"
                  >
                    {r.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}

      <div className="my-12 h-px bg-border" />

      <footer className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/glossary" className="hover:text-foreground">
          ← Back to Glossary
        </Link>
        <span>Authority layer · Definitions are precise.</span>
      </footer>
    </main>
  );
}