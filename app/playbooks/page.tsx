// app/playbooks/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Playbooks",
  description:
    "Operational documents designed for reuse. Updated deliberately. If a page does not increase trust, it should not exist.",
  path: "/playbooks",
  type: "website",
  imagePath: "/og/og.png",
});

type Playbook = {
  title: string;
  href: string;
  desc: string;
  meta?: string; // e.g. "v0.1 · Draft · Updated 2026-01-11"
};

const LAST_UPDATED = "2026-01-11";

const PLAYBOOKS: readonly Playbook[] = [
  {
    title: "DropOS",
    href: "/playbooks/dropos",
    desc: "How YOY ships drops: cadence, gates, roles, and release discipline.",
    meta: `v0.1 · Draft · Updated ${LAST_UPDATED}`,
  },
  {
    title: "ProofOS",
    href: "/playbooks/proofos",
    desc: "What counts as proof, how it’s logged, and how it’s referenced publicly.",
    meta: `v0.1 · Draft · Updated ${LAST_UPDATED}`,
  },
  {
    title: "TrustOS",
    href: "/playbooks/trustos",
    desc: "Editorial policy, corrections, disclosure, and governance signals.",
    meta: `v0.1 · Draft · Updated ${LAST_UPDATED}`,
  },
  {
    title: "RetailOps Headless",
    href: "/playbooks/retailops-headless",
    desc: "Composable commerce ops: data contracts, sync, and execution rails.",
    meta: `v0.1 · Draft · Updated ${LAST_UPDATED}`,
  },
  {
    title: "XP Rail",
    href: "/playbooks/xp-rail",
    desc: "Event schema, rewards logic, and retention mechanics as infrastructure.",
    meta: `v0.1 · Draft · Updated ${LAST_UPDATED}`,
  },
  {
    title: "Security Baseline",
    href: "/playbooks/security-baseline",
    desc: "Minimum viable security posture for public surfaces and internal routes.",
    meta: `v0.1 · Draft · Updated ${LAST_UPDATED}`,
  },
] as const;

export default function PlaybooksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Playbooks
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Operational documents.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          Designed for reuse. Updated deliberately.
          <br />
          If a page does not increase trust, it should not exist.
        </p>

        <p className="text-xs text-muted-foreground">
          Owner: <span className="text-foreground/80">YOY.AI Studio</span> ·
          Surface: <span className="text-foreground/80">Authority</span>
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="How to read this" className="space-y-3">
        <h2 className="text-sm font-medium tracking-tight">How to read this</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Playbooks are implementation notes — not announcements.</li>
          <li>• Draft by default; they ship when verifiable.</li>
          <li>
            • Claims and outcomes should link back to{" "}
            <Link href="/proof" className="text-foreground hover:underline">
              Proof
            </Link>
            .
          </li>
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Playbooks list" className="space-y-4">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="text-sm font-medium tracking-tight">Index</h2>
          <p className="text-xs text-muted-foreground">
            Draft by default · Ships when verifiable
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6">
          {PLAYBOOKS.map((p) => (
            <li key={p.href} className="group">
              <Link
                href={p.href}
                className="block rounded-lg border border-border/60 p-5 transition-colors hover:border-border"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>

                  <div className="shrink-0 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    View →
                  </div>
                </div>

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

      <div className="my-16 h-px bg-border" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>
          Authority layer · Playbooks are implementation notes, not
          announcements.
        </span>
        <Link href="/proof" className="hover:text-foreground transition-colors">
          Proof →
        </Link>
      </footer>
    </main>
  );
}
