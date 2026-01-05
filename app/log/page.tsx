// app/log/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Log · YOY.Group",
  description:
    "Time-bound logs (quarterly / annual) documenting what YOY.Group ships, proves, and updates.",
};

const LAST_UPDATED = "2026-01-05";

const ISSUES = [
  {
    title: "Log — 2026 Q1",
    href: "/log/2026-q1",
    desc: "Foundations, rails, and proof surfaces. Public by design. Intentionally incomplete.",
    meta: "Planned",
  },
  {
    title: "Log — 2025 Q4",
    href: "/log/2025-q4",
    desc: "Authority scaffold, pillars, and initial constraints. Baseline for future deltas.",
    meta: "Baseline",
  },
] as const;

export default function LogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Log
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Time-bound updates.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          This is a public log of YOY.Group’s operating work.
          <br />
          We publish only what can be verified: what changed, why it changed, and
          where the proof lives.
        </p>

        <div className="pt-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/80">Last updated:</span>{" "}
          {LAST_UPDATED}
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Log entries" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-sm font-medium tracking-tight">Entries</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quarterly (and occasional annual) snapshots. Each entry is a bounded
            collection of notes, decisions, and links to proof.
          </p>
        </div>

        <ul className="space-y-8">
          {ISSUES.map((issue) => (
            <li key={issue.href} className="group">
              <Link
                href={issue.href}
                className="block rounded-lg border border-border/60 p-5 transition-colors hover:border-border"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-medium">{issue.title}</h3>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {issue.meta} →
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {issue.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Method" className="space-y-3">
        <h2 className="text-sm font-medium tracking-tight">Method</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Publish deltas, not vibes.</li>
          <li>• Claims belong in Proof or they don’t ship.</li>
          <li>• Pages evolve slowly; changes are logged deliberately.</li>
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Log is updated deliberately, not frequently.
      </footer>
    </main>
  );
}