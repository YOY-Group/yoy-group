// app/services/rails/readiness/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Rails Readiness",
  description:
    "A short readiness check for deterministic rails: events, messaging, access, proof. Built for reliability under load.",
  path: "/services/rails/readiness",
  type: "article",
  imagePath: "/og/og.png",
});

const CHECKLIST = [
  "Event rail: entities, naming discipline, drift control",
  "Messaging rail: triggers, templates, rate limits, failure handling",
  "Secrets + access posture: least-privilege, boundaries, audit trail",
] as const;

export default function RailsReadinessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Rails / Readiness
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Rails Readiness Score
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          Not sure which rail is breaking your week? This readiness check
          clarifies scope fast and shows the shortest path to stability.
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
            href="mailto:hello@yoy.group?subject=Rails%20readiness%20check"
            className="underline underline-offset-4 hover:opacity-80"
          >
            hello@yoy.group
          </a>{" "}
          with: current stack, the rail you suspect is failing (events /
          messaging / access / proof), and what must be true in 30 days.
        </p>
      </section>

      <div className="my-16 h-px bg-border" />

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/services/rails"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Rails
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
        Determinism first. Optional layers only when they improve outcomes.
      </footer>
    </main>
  );
}
