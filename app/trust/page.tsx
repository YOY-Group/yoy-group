// app/trust/page.tsx
export const metadata = {
  title: "Trust",
  description:
    "Policies, disclosures, and operating posture. Clear boundaries. Clear logs.",
};

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
          YOY publishes what we can verify: operating posture, corrections, and
          policies. Claims belong in Proof or they don’t ship.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4">
        <h2 className="text-sm font-medium tracking-tight">What lives here</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Editorial policy + corrections</li>
          <li>Security posture (high-level, intentionally non-sensitive)</li>
          <li>Privacy + terms</li>
          <li>Contact + response expectations</li>
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-6">
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
        </div>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Calm surface. Strict internals.
      </footer>
    </main>
  );
}