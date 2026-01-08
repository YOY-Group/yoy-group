// app/glossary/[term]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Term = {
  slug: string;
  title: string;
  short: string;
  definition: string;
  notes?: string[];
  related?: { title: string; href: string }[];
  updated?: string;
};

const TERMS: Term[] = [
  {
    slug: "agentic-commerce",
    title: "Agentic Commerce",
    short:
      "Commerce systems designed to operate autonomously via agents, not manual workflows.",
    definition:
      "Agentic Commerce treats execution as a system: agents handle routine decisions, orchestration, and exception routing. The human defines goals, constraints, and review points; the system runs the loop and produces traceable outcomes.",
    notes: [
      "Automate decisions only after you can audit them.",
      "Prefer small agents with strict scopes over one general agent.",
      "Human-in-the-loop is a feature, not a failure mode.",
    ],
    related: [
      { title: "Pillars", href: "/pillars" },
      { title: "Proof", href: "/proof" },
      { title: "Trust", href: "/trust" },
    ],
    updated: "2026-01-07",
  },
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
    updated: "2026-01-07",
  },
  {
    slug: "culture-commerce",
    title: "Culture–Commerce",
    short: "The translation of cultural signal into durable commercial systems.",
    definition:
      "Culture–Commerce is the operating discipline of converting signal (taste, scenes, identity, rituals) into repeatable product, distribution, and retention loops—without collapsing into hype. The output is legible product and compounding demand.",
    notes: [
      "Signal must become structure (offers, drops, rituals, repeat loops).",
      "Legibility beats attention over time.",
      "If it can’t be operationalised, it’s just commentary.",
    ],
    related: [
      { title: "Authority Layer", href: "/glossary/authority-layer" },
      { title: "Proof", href: "/proof" },
      { title: "Trust", href: "/trust" },
    ],
    updated: "2026-01-07",
  },
];

function getTerm(slug: string) {
  return TERMS.find((t) => t.slug === slug);
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return TERMS.map((t) => ({ term: t.slug }));
}

type PageProps = {
  params: Promise<{ term: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { term: slug } = await params;
  const term = getTerm(slug);

  if (!term) return { title: "Glossary · YOY.Group" };

  const title = `${term.title} · Glossary`;
  const description =
    term.short.length > 160 ? `${term.short.slice(0, 157)}…` : term.short;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { term: slug } = await params;
  const term = getTerm(slug);
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
        <p className="text-sm leading-relaxed text-foreground">
          {term.definition}
        </p>
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
        <span>Definitions are precise.</span>
      </footer>
    </main>
  );
}