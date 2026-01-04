// app/pillars/culture-commerce-engineering/page.tsx
import Link from "next/link";

export default function CultureCommerceEngineeringPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Culture–Commerce Engineering
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          The discipline of translating cultural signal into durable commercial
          systems — without diluting meaning or over-optimizing for reach.
        </p>
      </header>

      <div className="my-16 h-px bg-border" />

      {/* Definition */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Definition
        </h2>

        <p className="text-sm leading-relaxed">
          Culture–Commerce Engineering treats taste, language, and community as
          structural inputs. It designs how cultural meaning moves through
          products, platforms, and distribution — deliberately, measurably,
          and with long-term intent.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          The objective is not virality. It is coherence: systems where what is
          said, what is made, and what is sold remain aligned over time.
        </p>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Principles */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Operating Principles
        </h2>

        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium">Signal before scale</span> — clarity
            of intent precedes distribution.
          </li>
          <li>
            <span className="font-medium">Community as substrate</span> —
            participation compounds faster than impressions.
          </li>
          <li>
            <span className="font-medium">Narrative discipline</span> — language
            is versioned, not improvised.
          </li>
          <li>
            <span className="font-medium">Artifacts over ads</span> — products,
            drops, and documents carry meaning.
          </li>
        </ul>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* What this enables */}
      <section className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          What This Enables
        </h2>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>• Brands that age well instead of chasing cycles</li>
          <li>• Distribution that feels earned, not forced</li>
          <li>• Commercial systems resilient to trend decay</li>
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