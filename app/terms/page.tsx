// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description:
    "Terms for using YOY.Group’s public website and materials. Clear boundaries, minimal surface.",
  path: "/terms",
  type: "article",
  imagePath: "/og/og.png",
});

const UPDATED = "2026-01-07";

const CONTACT = {
  email: "hello@yoy.group",
  subject: "Terms enquiry — YOY.Group",
} as const;

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trust / Terms
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          These terms govern use of the YOY.Group website and public materials.
          This is a lean surface: clarity, boundaries, and a stable record.
        </p>

        <p className="text-xs text-muted-foreground">Last updated · {UPDATED}</p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-10" aria-label="Terms content">
        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">1) Scope</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            YOY.Group publishes information about operating systems for retail,
            creators, and deterministic rails. Content is for reference and
            evaluation only. It is not legal, financial, tax, or compliance
            advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">2) Use of the site</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            You may browse and share links to pages on this site. You agree not
            to attempt to disrupt the service, bypass security controls, harvest
            data in a harmful way, or use automated means that degrade the site
            for others.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We may update, remove, rename, or reorganise pages as the authority
            library evolves.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">
            3) Accuracy, changes, and corrections
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We aim to keep content accurate, but the site evolves. Where we make
            claims, we expect them to be supported by evidence under{" "}
            <Link
              href="/proof"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Proof
            </Link>{" "}
            or reflected as time-bound updates in{" "}
            <Link
              href="/log"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Log
            </Link>
            .
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you believe something is wrong, send a note and link to the page.
            We correct when verified.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">4) Intellectual property</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Unless stated otherwise, content and branding on this site are owned
            by YOY.Group (and associated entities). You may quote short excerpts
            with attribution and a link to the canonical page.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            You may not reproduce, republish, or present substantial parts of the
            content as your own without prior written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">
            5) External links and third-party services
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This site may link to third-party sites. We do not control them and
            are not responsible for their content, availability, or policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">6) Privacy</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Privacy and data handling are described in{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Privacy
            </Link>
            . If the privacy policy and these terms conflict, the privacy policy
            governs data handling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">7) Liability</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We provide this site “as is” without warranties of any kind to the
            extent permitted by law. You are responsible for how you use the
            information published here.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium tracking-tight">8) Contact</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Questions, corrections, or requests:{" "}
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                CONTACT.subject
              )}`}
              className="underline underline-offset-4 hover:opacity-80"
            >
              {CONTACT.email}
            </a>
            .
          </p>
        </section>
      </section>

      <div className="my-16 h-px bg-border" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/trust" className="hover:text-foreground transition-colors">
          ← Back to Trust
        </Link>
        <span>Minimal surface · clear boundaries</span>
      </footer>
    </main>
  );
}