// app/glossary/[term]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { GLOSSARY_TERMS } from "../terms";

type PageProps = {
  params: Promise<{ term: string }>;
};

function getTerm(slug: string) {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return GLOSSARY_TERMS.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { term: slug } = await params;
  const term = getTerm(slug);

  // keep "not found" metadata safe + canonical
  if (!term) {
    return buildMetadata({
      title: "Glossary",
      description:
        "Canonical definitions used by YOY.Group. Language as infrastructure.",
      path: "/glossary",
      type: "website",
      imagePath: "/og/og.png",
    });
  }

  const title = `${term.title} · Glossary`;
  const description =
    term.short.length > 160 ? `${term.short.slice(0, 157)}…` : term.short;

  return buildMetadata({
    title,
    description,
    path: `/glossary/${term.slug}`,
    type: "article",
    imagePath: "/og/og.png",
  });
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
              {term.notes.map((n) => (
                <li key={n} className="leading-relaxed">
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
                    className="rounded-md border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
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