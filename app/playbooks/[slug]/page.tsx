// app/playbooks/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Public playbooks are intentionally high-level.
 * They describe intent, scope, and boundaries — not execution steps.
 * Execution logic lives elsewhere.
 */

type Playbook = {
  title: string;
  summary: string;
  scope: string[];
  constraints: string[];
};

const PLAYBOOKS: Record<string, Playbook> = {
  "drop-operations": {
    title: "Drop Operations",
    summary:
      "A controlled framework for launching limited consumer releases with operational clarity and cultural intent.",
    scope: ["Release cadence", "Inventory boundaries", "Signal sequencing"],
    constraints: ["No discounting mechanics", "No speculative inventory", "Proof before scale"],
  },

  "xp-rail": {
    title: "XP Rail",
    summary:
      "A system for tracking participation, contribution, and provenance across consumer touchpoints.",
    scope: ["Event attribution", "Participation signals", "Longitudinal user memory"],
    constraints: ["No gamification theater", "No extractive incentives", "User sovereignty preserved"],
  },
};

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(PLAYBOOKS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = PLAYBOOKS[slug];

  if (!p) return { title: "Playbooks · YOY.Group" };

  const title = `${p.title} · Playbooks`;
  const description = p.summary.length > 160 ? `${p.summary.slice(0, 157)}…` : p.summary;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = PLAYBOOKS[slug];
  if (!playbook) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">{playbook.title}</h1>
        <p className="text-base leading-relaxed text-muted-foreground">{playbook.summary}</p>
      </header>

      <div className="my-16 h-px bg-border" />

      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Scope
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
          {playbook.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border/60" />

      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Constraints
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
          {playbook.constraints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="mt-24 text-xs text-muted-foreground">
        Public abstraction · Execution withheld
      </footer>
    </main>
  );
}