// app/pillars/agentic-commerce-os/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agentic Commerce OS",
  description:
    "A commerce operating system where execution, coordination, and decision-making are handled by autonomous agents under explicit governance.",
  path: "/pillars/agentic-commerce-os",
  type: "article",
  twitterCard: "summary_large_image",
});

export default function AgenticCommerceOSPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Agentic Commerce OS
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          A commerce operating system where execution, coordination, and
          decision-making are handled by autonomous agents under explicit
          governance.
        </p>
      </header>

      <div className="my-16 h-px bg-border" />

      {/* Definition */}
      <section className="space-y-6" aria-label="Definition">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Definition
        </h2>

        <p className="text-sm leading-relaxed">
          Agentic Commerce OS is the layer that runs the store. It replaces
          manual workflows and brittle dashboards with autonomous systems that
          observe state, make decisions, execute actions, and log outcomes —
          continuously.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          The goal is not automation for efficiency alone, but durability:
          systems that can operate under uncertainty, adapt to change, and
          remain auditable over time.
        </p>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Components */}
      <section className="space-y-6" aria-label="Core components">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Core Components
        </h2>

        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium">Agents</span> — autonomous workers
            responsible for discrete domains (orders, inventory, content,
            support).
          </li>
          <li>
            <span className="font-medium">Rails</span> — execution pathways
            connecting systems (commerce, payments, data, messaging).
          </li>
          <li>
            <span className="font-medium">Memory</span> — structured state,
            logs, and history enabling learning and accountability.
          </li>
          <li>
            <span className="font-medium">Governance</span> — explicit rules,
            permissions, and escalation paths.
          </li>
        </ul>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Non-goals */}
      <section className="space-y-6" aria-label="Non-goals">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Non-Goals
        </h2>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>• Replacing human judgment where context is required</li>
          <li>• Opaque black-box automation</li>
          <li>• Tool sprawl disguised as “AI transformation”</li>
        </ul>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Navigation */}
      <footer className="flex items-center justify-between text-xs text-muted-foreground">
        <Link href="/pillars" className="hover:text-foreground">
          ← Back to Pillars
        </Link>

        <span>Authority layer · v1.0</span>
      </footer>
    </main>
  );
}