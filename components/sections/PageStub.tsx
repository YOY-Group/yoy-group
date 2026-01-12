// components/sections/PageStub.tsx
import Link from "next/link";

type StubLink = {
  href: string;
  label: string;
};

type PageStubProps = {
  title: string;
  description: string;

  /** Optional authority metadata */
  version?: string; // e.g. "v0.1"
  updated?: string; // e.g. "2026-01-10"
  surfaceLabel?: string; // e.g. "Authority stub" (defaults below)

  /** Optional navigation */
  backHref?: string; // default "/"
  backLabel?: string; // default "Home"

  /** Optional crosslinks */
  links?: StubLink[];
};

const LINK_CLASS =
  "text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function PageStub({
  title,
  description,
  version = "v0.1",
  updated,
  surfaceLabel = "Authority stub",
  backHref = "/",
  backLabel = "Home",
  links,
}: PageStubProps) {
  const titleId = "stub-title";
  const descId = "stub-desc";

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4" aria-labelledby={titleId} aria-describedby={descId}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 id={titleId} className="text-3xl font-semibold tracking-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>{surfaceLabel}</span>
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

        <p id={descId} className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Status" className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This surface is intentionally minimal. It expands when proof expands.
        </p>

        {links?.length ? (
          <div className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Start here
            </h2>
            <ul className="flex flex-wrap gap-3">
              {links.map((l) => (
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
          </div>
        ) : null}
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        <Link href={backHref} className="hover:text-foreground transition-colors">
          ← {backLabel}
        </Link>
      </footer>
    </main>
  );
}