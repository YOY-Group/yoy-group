// app/index/[issue]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type IssueStatus = "Planned" | "In Progress" | "Baseline" | "Published";

type Issue = {
  slug: string;
  title: string;
  timeframe: string;
  status: IssueStatus;
  summary: string;
  bullets: string[];
  proofLinks?: { label: string; href: string }[];
};

const ISSUES: Issue[] = [
  {
    slug: "2026-q1",
    title: "Index — 2026 Q1",
    timeframe: "Jan–Mar 2026",
    status: "Planned",
    summary:
      "Foundations, rails, and proof surfaces. Public by design. Intentionally incomplete.",
    bullets: [
      "Stabilise the authority library + internal linking discipline",
      "Publish Pillars v0.1 as canonical primitives",
      "Expand Proof with build logs (no interpretation without evidence)",
      "Stand up Index cadence: quarterly snapshot + changelog style",
    ],
    proofLinks: [
      { label: "Proof hub", href: "/proof" },
      { label: "Pillars", href: "/pillars" },
    ],
  },
  {
    slug: "2025-q4",
    title: "Index — 2025 Q4",
    timeframe: "Oct–Dec 2025",
    status: "Baseline",
    summary:
      "Authority scaffold, pillars, and constraint system established. Baseline for future deltas.",
    bullets: [
      "shadcn/ui primitives installed; minimal UI system locked",
      "Global layout + nav + typography baseline",
      "Pillars structure created (3 primitives)",
      "Skills + AGENTS charter added to govern future changes",
    ],
    proofLinks: [
      { label: "Proof hub", href: "/proof" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
];

function getIssue(slug: string) {
  return ISSUES.find((i) => i.slug === slug);
}

// Next 16 can treat dynamic route params as async in some setups.
type PageProps = {
  params: Promise<{ issue: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolved = await params;
  const issue = getIssue(resolved.issue);
  if (!issue) return { title: "Index Issue · YOY.Group" };

  const title = `${issue.title} · YOY.Group`;
  const description =
    issue.summary.length > 160 ? `${issue.summary.slice(0, 157)}…` : issue.summary;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

function StatusPill({ status }: { status: IssueStatus }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
      {status}
    </span>
  );
}

export default async function IndexIssuePage({ params }: PageProps) {
  const resolved = await params;
  const issue = getIssue(resolved.issue);
  if (!issue) return notFound();

  const idx = ISSUES.findIndex((i) => i.slug === issue.slug);
  const prev = idx > 0 ? ISSUES[idx - 1] : null;
  const next = idx < ISSUES.length - 1 ? ISSUES[idx + 1] : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Index issue
        </p>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">{issue.title}</h1>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-muted-foreground">{issue.timeframe}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <StatusPill status={issue.status} />
          </div>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground">
          {issue.summary}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Snapshot" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Snapshot
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This is a bounded list of what matters this period. If a claim can’t be
            traced, it doesn’t ship.
          </p>
        </div>

        <ul className="space-y-3 text-sm text-foreground">
          {issue.bullets.map((b) => (
            <li key={b} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Links" className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Links
        </h2>

        <div className="flex flex-wrap gap-3">
          {(issue.proofLinks ?? []).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label} →
            </Link>
          ))}

          {issue.proofLinks?.length ? null : (
            <span className="text-sm text-muted-foreground">
              No public links yet. Proof will be attached as it ships.
            </span>
          )}
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      <footer className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <Link href="/index" className="hover:text-foreground transition-colors">
            ← Back to Index
          </Link>
          <span>Authority layer · Index is time-bound.</span>
        </div>

        <nav className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            {prev ? (
              <Link
                href={`/index/${prev.slug}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span className="text-xs text-muted-foreground"> </span>
            )}
          </div>

          <div className="min-w-0 text-right">
            {next ? (
              <Link
                href={`/index/${next.slug}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {next.title} →
              </Link>
            ) : (
              <span className="text-xs text-muted-foreground"> </span>
            )}
          </div>
        </nav>
      </footer>
    </main>
  );
}