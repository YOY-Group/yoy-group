// app/trust/page.tsx
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Trust",
  description:
    "Policies, disclosures, and operating posture. Clear boundaries. Clear logs.",
  path: "/trust",
  type: "website",
  imagePath: "/og/og.png",
});

export default function TrustPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trust
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Trust & disclosures.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          YOY publishes what can be verified: operating posture, corrections,
          and policies. Claims belong in Proof or they don’t ship.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground">
          <Link href="/proof" className="hover:text-foreground transition-colors">
            Proof →
          </Link>
          <span>·</span>
          <Link href="/log" className="hover:text-foreground transition-colors">
            Log →
          </Link>
          <span>·</span>
          <Link
            href="/glossary/authority-layer"
            className="hover:text-foreground transition-colors"
          >
            Authority layer →
          </Link>
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4" aria-label="What lives here">
        <h2 className="text-sm font-medium tracking-tight">What lives here</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Editorial policy + corrections posture</li>
          <li>Security posture (high-level, intentionally non-sensitive)</li>
          <li>Privacy + terms</li>
          <li>Contact + response expectations</li>
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-6" aria-label="Contact and disclosure">
        <div className="space-y-2">
          <h2 className="text-sm font-medium tracking-tight">Contact & response</h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Primary contact is{" "}
            <a
              href="mailto:hello@yoy.group"
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              hello@yoy.group
            </a>
            . Typical response time is 2–3 business days.
          </p>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Security reports: email{" "}
            <a
              href="mailto:hello@yoy.group?subject=SECURITY%20%E2%80%94%20YOY.Group"
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              hello@yoy.group
            </a>{" "}
            with subject “SECURITY — YOY.Group”.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium tracking-tight">Disclosure</h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            This site may include operational notes and proofs. Sensitive details
            stay private by design. If something can’t be shared safely, it won’t
            be published.
          </p>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Where possible, we link claims to artifacts. If a claim cannot be
            traced, it should be treated as non-shipped.
          </p>
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-3" aria-label="Policies">
        <h2 className="text-sm font-medium tracking-tight">Policies</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy →
          </Link>
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms →
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact →
          </Link>
        </div>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Calm surface. Strict internals.
      </footer>
    </main>
  );
}