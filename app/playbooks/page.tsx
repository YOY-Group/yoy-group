// app/playbooks/page.tsx
import Link from "next/link";

type Playbook = {
  title: string;
  href: string;
  desc: string;
  meta?: string; // e.g. "v0.1 · Updated 2025-12-21"
};

const PLAYBOOKS: Playbook[] = [
  {
    title: "DropOS",
    href: "/playbooks/dropos",
    desc: "How YOY ships drops: cadence, gates, roles, and release discipline.",
    meta: "v0.1 · Draft",
  },
  {
    title: "ProofOS",
    href: "/playbooks/proofos",
    desc: "What counts as proof, how it’s logged, and how it’s referenced publicly.",
    meta: "v0.1 · Draft",
  },
  {
    title: "TrustOS",
    href: "/playbooks/trustos",
    desc: "Editorial policy, corrections, disclosure, and governance signals.",
    meta: "v0.1 · Draft",
  },
  {
    title: "RetailOps Headless",
    href: "/playbooks/retailops-headless",
    desc: "Composable commerce ops: data contracts, sync, and execution rails.",
    meta: "v0.1 · Draft",
  },
  {
    title: "XP Rail",
    href: "/playbooks/xp-rail",
    desc: "Event schema, rewards logic, and retention mechanics as infrastructure.",
    meta: "v0.1 · Draft",
  },
  {
    title: "Security Baseline",
    href: "/playbooks/security-baseline",
    desc: "Minimum viable security posture for public surfaces and internal routes.",
    meta: "v0.1 · Draft",
  },
];

export default function PlaybooksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Playbooks</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Operational documents. Designed for reuse. Updated deliberately.
          <br />
          If a page does not increase trust, it should not exist.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Playbooks list">
        <ul className="grid grid-cols-1 gap-6">
          {PLAYBOOKS.map((p) => (
            <li key={p.href} className="group">
              <Link
                href={p.href}
                className="block rounded-lg border border-border/60 p-5 hover:border-border transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-sm font-medium tracking-tight">
                    {p.title}
                  </h2>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    View →
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                {p.meta ? (
                  <div className="mt-4 text-xs text-muted-foreground">
                    {p.meta}
                  </div>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Authority layer · Playbooks are implementation notes, not announcements.
      </footer>
    </main>
  );
}