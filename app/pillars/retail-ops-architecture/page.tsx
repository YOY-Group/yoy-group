// app/pillars/retail-ops-architecture/page.tsx
import Link from "next/link";

export default function RetailOpsArchitecturePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Retail Operations Architecture
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          The design of operating models that connect product, supply,
          data, and execution into a coherent system — built to adapt
          without constant reorganization.
        </p>
      </header>

      <div className="my-16 h-px bg-border" />

      {/* Definition */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Definition
        </h2>

        <p className="text-sm leading-relaxed">
          Retail Operations Architecture is the practice of structuring
          how work actually happens: how decisions are made, how inventory
          flows, how data informs action, and how teams execute without
          friction.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          It replaces ad-hoc process with deliberate structure — enabling
          speed without chaos and scale without brittleness.
        </p>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* System Layers */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          System Layers
        </h2>

        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium">Product layer</span> — lifecycle,
            assortment logic, and release cadence.
          </li>
          <li>
            <span className="font-medium">Supply layer</span> — sourcing,
            production, inventory, and fulfillment constraints.
          </li>
          <li>
            <span className="font-medium">Data layer</span> — signals,
            metrics, and feedback loops that drive decisions.
          </li>
          <li>
            <span className="font-medium">Execution layer</span> — routines,
            ownership, and operational tempo.
          </li>
        </ul>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* What this prevents */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          What This Prevents
        </h2>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>• Tool sprawl without accountability</li>
          <li>• Inventory decisions made in isolation</li>
          <li>• Growth that increases fragility</li>
          <li>• Teams compensating for system gaps</li>
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