// app/playbooks/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";

/**
 * Public playbooks are intentionally high-level.
 * They describe intent, scope, and boundaries — not execution steps.
 *
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
    scope: [
      "Release cadence",
      "Inventory boundaries",
      "Signal sequencing",
    ],
    constraints: [
      "No discounting mechanics",
      "No speculative inventory",
      "Proof before scale",
    ],
  },

  "xp-rail": {
    title: "XP Rail",
    summary:
      "A system for tracking participation, contribution, and provenance across consumer touchpoints.",
    scope: [
      "Event attribution",
      "Participation signals",
      "Longitudinal user memory",
    ],
    constraints: [
      "No gamification theater",
      "No extractive incentives",
      "User sovereignty preserved",
    ],
  },
};

export const metadata: Metadata = {
  title: "Playbook",
  description:
    "Operational playbooks outlining intent, scope, and constraints. Execution details are intentionally withheld.",
};

export default function PlaybookPage({
  params,
}: {
  params: { slug: string };
}) {
  const playbook = PLAYBOOKS[params.slug];

  if (!playbook) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          {playbook.title}
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          {playbook.summary}
        </p>
      </header>

      <div className="my-16 h-px bg-border" />

      {/* Scope */}
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Scope
        </h2>

        <ul className="list-disc pl-5 text-sm text-foreground space-y-1">
          {playbook.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border/60" />

      {/* Constraints */}
      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Constraints
        </h2>

        <ul className="list-disc pl-5 text-sm text-foreground space-y-1">
          {playbook.constraints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Footer signal */}
      <footer className="mt-24 text-xs text-muted-foreground">
        Public abstraction · Execution withheld
      </footer>
    </main>
  );
}