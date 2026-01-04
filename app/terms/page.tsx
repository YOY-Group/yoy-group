// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and conditions for YOY.Group.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Terms
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Placeholder. Replace with final terms copy.
        </p>
      </header>
    </main>
  );
}