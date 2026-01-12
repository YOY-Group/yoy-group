// components/pillars/PillarFrame.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type RelatedLink = {
  href: string;
  label: string;
};

type PillarFrameProps = {
  title: string;
  lede?: string;
  children: ReactNode;

  /** Optional authority metadata (keeps pages consistent) */
  version?: string; // e.g. "v1.0"
  updated?: string; // e.g. "2026-01-10"
  backLabel?: string; // default: "Back to Pillars"

  /** Optional crosslinks */
  relatedLinks?: RelatedLink[];
};

const LINK_CLASS =
  "text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function PillarFrame({
  title,
  lede,
  children,
  version = "v1.0",
  updated,
  backLabel = "Back to Pillars",
  relatedLinks,
}: PillarFrameProps) {
  const titleId = "pillar-title";
  const ledeId = lede ? "pillar-lede" : undefined;

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4" aria-labelledby={titleId} aria-describedby={ledeId}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 id={titleId} className="text-3xl font-semibold tracking-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Authority layer</span>
            <span aria-hidden="true">·</span>
            <span>Pillars</span>
            <span aria-hidden="true">·</span>
            <span>{version}</span>
            {updated ? (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated · {updated}</span>
              </>
            ) : null}
          </div>
        </div>

        {lede ? (
          <p id={ledeId} className="text-base leading-relaxed text-muted-foreground">
            {lede}
          </p>
        ) : null}
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-8" aria-label="Pillar content">
        {children}
      </section>

      {relatedLinks?.length ? (
        <>
          <div className="my-12 h-px bg-border" />
          <nav aria-label="Related links" className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Related
            </h2>
            <ul className="flex flex-wrap gap-3">
              {relatedLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md border border-border/60 px-3 py-1.5 text-xs text-muted-foreground hover:border-border hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>Authority layer · Pillars are slow-changing.</span>
        <Link href="/pillars" className={LINK_CLASS}>
          ← {backLabel}
        </Link>
      </footer>
    </main>
  );
}