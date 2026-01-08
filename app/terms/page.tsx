// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms for using YOY.Group’s public website and materials. Clear boundaries, minimal surface.",
};

export default function TermsPage() {
  const UPDATED = "2026-01-07";

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trust
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          These terms govern use of the YOY.Group website and materials. This is a
          lean public surface: clarity, boundaries, and a stable record.
        </p>

        <p className="text-xs text-muted-foreground">Last updated · {UPDATED}</p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-10">
        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">1) Scope</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            YOY.Group provides information about operating systems for retail,
            creators, and deterministic rails. Content is published for reference
            and evaluation. It is not legal, financial, or compliance advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">2) Use of the site</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            You may browse and share links to pages on this site. You agree not to
            attempt to disrupt, scrape in a harmful way, or misuse the service.
            We may update, remove, or reorganise pages without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">
            3) Accuracy, changes, and “Proof”
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We aim to keep content accurate, but the site evolves. Claims are
            expected to be supported by evidence under{" "}
            <Link href="/proof" className="underline underline-offset-4 hover:opacity-80">
              Proof
            </Link>
            . If something is wrong, we correct it when identified.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">4) Intellectual property</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Unless stated otherwise, site content and branding are owned by
            YOY.Group (and associated entities). You may not reproduce or
            republish substantial parts of the content as your own without prior
            written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">
            5) External links and third-party services
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This site may link to third-party sites. We don’t control them and
            aren’t responsible for their content or policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">6) Privacy</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Privacy and data handling are described in{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:opacity-80">
              Privacy
            </Link>
            . If the privacy policy and these terms conflict, the privacy policy
            governs data handling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">7) Contact</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Questions, corrections, or requests:{" "}
            <a
              href="mailto:hello@yoy.group?subject=Terms%20enquiry"
              className="underline underline-offset-4 hover:opacity-80"
            >
              hello@yoy.group
            </a>
            .
          </p>
        </section>
      </section>

      <div className="my-16 h-px bg-border" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/trust" className="hover:text-foreground">
          ← Back to Trust
        </Link>
        <span>Minimal surface · clear boundaries</span>
      </footer>
    </main>
  );
}