// app/services/retail/readiness/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Retail Readiness",
  description:
    "A short readiness check for retail operations. Clear inputs, clear next step. No decks by default.",
  path: "/services/retail/readiness",
  type: "article",
  imagePath: "/og/og.png",
});

const CHECKLIST = [
  "Trading cadence: what gets reviewed, decided, and shipped each week",
  "Range + inventory: what’s selling, what’s stuck, what’s leaking margin",
  "Instrumentation: what’s true today (and what’s guesswork)",
] as const;

export default function RetailReadinessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Retail / Readiness
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Retail Readiness Score
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          A short readiness check for retail ops. It clarifies scope before any
          work starts and routes you to the right lane: build, fix, or scale.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4" aria-label="What you’ll get">
        <h2 className="text-sm font-medium tracking-tight">What you’ll get</h2>
        <ul className="space-y-2 text-sm text-foreground">
          {CHECKLIST.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-muted-foreground">
          If you need this now, email{" "}
          <a
            href="mailto:hello@yoy.group?subject=Retail%20readiness%20check"
            className="underline underline-offset-4 hover:opacity-80"
          >
            hello@yoy.group
          </a>{" "}
          with your current stack and the primary constraint. Keep it to 8–10
          lines.
        </p>
      </section>

      <div className="my-16 h-px bg-border" />

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/services/retail"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Retail
        </Link>

        <Link
          href="/operator"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          How we work →
        </Link>

        <Link
          href="/contact"
          className="text-sm underline underline-offset-4 hover:opacity-80"
        >
          Contact →
        </Link>
      </div>

      <footer className="mt-16 text-xs text-muted-foreground">
        Timeboxed by default. Proof over promises.
      </footer>
    </main>
  );
}
