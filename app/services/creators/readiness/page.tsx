// app/services/creators/readiness/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators Readiness",
  description:
    "A short readiness check for creators: calendar → releases → merch → relationship. Built to ship without becoming an ops company.",
};

const CHECKLIST = [
  "Calendar reality: what’s happening in the next 8–12 weeks",
  "Release system: what ships, what’s limited, and how access behaves",
  "Relationship layer: opt-in capture + follow-ups that don’t annoy fans",
] as const;

export default function CreatorsReadinessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Services / Creators / Readiness
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Creators Readiness Score
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          A short readiness check that turns your next 8–12 weeks into a runnable
          release + relationship plan — without adding noise.
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
            href="mailto:hello@yoy.group?subject=Creators%20readiness%20check"
            className="underline underline-offset-4 hover:opacity-80"
          >
            hello@yoy.group
          </a>{" "}
          with: (1) your next 8–12 weeks, (2) current release setup, (3) what a
          good 30 days looks like.
        </p>
      </section>

      <div className="my-16 h-px bg-border" />

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/services/creators"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Creators
        </Link>

        <Link
          href="/contact"
          className="text-sm underline underline-offset-4 hover:opacity-80"
        >
          Contact →
        </Link>
      </div>

      <footer className="mt-16 text-xs text-muted-foreground">
        Build the system first. Add optional layers only when they improve
        outcomes.
      </footer>
    </main>
  );
}