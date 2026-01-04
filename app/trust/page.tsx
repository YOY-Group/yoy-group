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
        <ul className="space-y-2 text-sm">
          <li>Editorial policy + corrections</li>
          <li>Security posture (high-level, non-sensitive)</li>
          <li>Privacy + terms</li>
          <li>Contact + response expectations</li>
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Calm surface. Strict internals.
      </footer>
    </main>
  );
}