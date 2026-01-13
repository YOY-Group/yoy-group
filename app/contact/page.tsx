// app/contact/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Quiet intake surface for YOY.Group. Short context. Clear intent.",
  path: "/contact",
  type: "article",
  imagePath: "/og/og.png",
});

const CONTACT = {
  email: "hello@yoy.group",
} as const;

const INCLUDE = [
  "Current stack + surfaces (site/store/app/Telegram/etc.)",
  "Primary constraint (what’s breaking / leaking / blocking revenue)",
  "30-day success metric (what “better” means in one month)",
  "Hard constraints (budget, deadlines, compliance, team capacity)",
] as const;

const ROUTING = [
  {
    label: "Retail",
    href: "/services/retail/readiness",
    desc: "Trading cadence, range/inventory, instrumentation.",
  },
  {
    label: "Creators",
    href: "/services/creators/readiness",
    desc: "Calendar → releases → merch → relationship.",
  },
  {
    label: "Rails",
    href: "/services/rails/readiness",
    desc: "Events, messaging, access, proof — reliability under load.",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <section className="space-y-10" aria-label="Contact">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

          <p className="text-base leading-relaxed text-muted-foreground">
            Short context. Clear intent. No decks by default.
          </p>
        </header>

        <div className="h-px bg-border" />

        {/* Primary */}
        <section className="space-y-6" aria-label="Primary contact">
          <div className="space-y-2">
            <p className="text-sm font-medium">Email</p>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                "YOY.Group — enquiry"
              )}`}
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              {CONTACT.email} →
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you can keep it to 8–10 lines, we can move fast.
            </p>
          </div>

          <div className="rounded-lg border border-border/60 p-5">
            <p className="text-sm font-medium">Include</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {INCLUDE.map((x, i) => (
                <li key={x}>
                  <span className="text-muted-foreground">{i + 1})</span> {x}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground">
            Avoid sending secrets (API keys, private URLs, credentials). If we
            progress, we’ll provide a safer channel for sensitive details.
          </p>
        </section>

        {/* Lane routing */}
        <section className="space-y-4" aria-label="Routing">
          <h2 className="text-sm font-medium tracking-tight">Fast routing</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you’re not sure what to ask for, start with a readiness score. It
            routes you into the right lane before any work starts.
          </p>

          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {ROUTING.map((r) => (
              <li
                key={r.href}
                className="rounded-lg border border-border/60 p-6"
              >
                <p className="text-sm font-medium">{r.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <Link
                  href={r.href}
                  className="mt-3 inline-block text-sm underline underline-offset-4 hover:opacity-80"
                >
                  Start →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Expectations */}
        <section className="space-y-3" aria-label="Response expectations">
          <h2 className="text-sm font-medium tracking-tight">Expectations</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>We reply when there’s clear fit.</li>
            <li>Work starts timeboxed. Every change is logged.</li>
            <li>Claims belong in Proof or they don’t ship.</li>
          </ul>
        </section>

        <div className="h-px bg-border" />

        {/* Crosslinks */}
        <section className="space-y-4" aria-label="Crosslinks">
          <h2 className="text-sm font-medium tracking-tight">Start here</h2>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/services"
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              Services →
            </Link>
            <Link
              href="/proof"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Proof →
            </Link>
            <Link
              href="/trust"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Trust & disclosures →
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            Public surface stays calm. Internals stay strict.
          </p>
        </section>

        <footer className="pt-4 text-xs text-muted-foreground">
          Timeboxed by default. Proof over promises.
        </footer>
      </section>
    </main>
  );
}
