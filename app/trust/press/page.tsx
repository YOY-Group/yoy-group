// app/trust/press/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Press",
  description: "Press references, media notes, and official links for YOY.Group.",
  path: "/trust/press",
  type: "article",
  imagePath: "/og/og.png",
});

const LAST_UPDATED = "2026-01-10";

const CONTACT = {
  email: "hello@yoy.group",
  subject: "PRESS — YOY.Group",
} as const;

const WHAT_WE_CAN_SHARE = [
  "Official links and canonical pages (Services, Pillars, Glossary, Proof, Log)",
  "Founder bio (short) and a one-paragraph description",
  "Brand marks (Y-glyph) in approved formats",
  "High-level screenshots of public surfaces (no internal tooling)",
] as const;

const WHAT_WE_DONT_SHARE = [
  "Client details, internal roadmaps, or unreleased work",
  "Sensitive security implementation details",
  "Private performance numbers unless already published as Proof",
  "Raw source assets that enable spoofing or misuse",
] as const;

const OFFICIAL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pillars", href: "/pillars" },
  { label: "Glossary", href: "/glossary" },
  { label: "Proof", href: "/proof" },
  { label: "Log", href: "/log" },
  { label: "Services", href: "/services" },
] as const;

const BOILERPLATE = {
  title: "About YOY.Group",
  text: "YOY.Group builds operating systems for commerce and culture: clear primitives, deterministic rails, and proof-first execution. We publish slowly, ship what can be verified, and avoid claims without trace.",
} as const;

export default function TrustPressPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trust / Press
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Press</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          Official references and media contact. Press materials appear here
          only when they are real, current, and safe to share.
        </p>

        <div className="pt-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/80">Last updated:</span>{" "}
          {LAST_UPDATED}
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4" aria-label="Press contact">
        <h2 className="text-sm font-medium tracking-tight">Media enquiries</h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Email{" "}
          <a
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
              CONTACT.subject
            )}`}
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            {CONTACT.email}
          </a>{" "}
          with subject “{CONTACT.subject}”.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Include: outlet, deadline, angle, and the exact information requested.
          If it requires unpublished material, the answer is usually “no”.
        </p>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-6" aria-label="Official links">
        <h2 className="text-sm font-medium tracking-tight">Official links</h2>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {OFFICIAL_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-lg border border-border/60 px-5 py-4 text-sm text-muted-foreground hover:border-border hover:text-foreground transition-colors"
              >
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-muted-foreground">
          If a link is not listed here, treat it as non-canonical.
        </p>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-6" aria-label="Sharing boundaries">
        <h2 className="text-sm font-medium tracking-tight">What we can share</h2>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {WHAT_WE_CAN_SHARE.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>

        <div className="pt-2">
          <h3 className="text-sm font-medium tracking-tight">What we don’t share</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {WHAT_WE_DONT_SHARE.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4" aria-label="Boilerplate">
        <h2 className="text-sm font-medium tracking-tight">Boilerplate</h2>

        <div className="rounded-lg border border-border/60 p-6">
          <p className="text-sm font-medium">{BOILERPLATE.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {BOILERPLATE.text}
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Copy is allowed. Edits should preserve meaning.
        </p>
      </section>

      <div className="my-12 h-px bg-border" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/trust" className="hover:text-foreground transition-colors">
          ← Back to Trust
        </Link>
        <span>Authority layer · Official links only.</span>
      </footer>
    </main>
  );
}