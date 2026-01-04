import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust — Press",
  description: "Press references, media notes, and official links for YOY.Group.",
};

export default function TrustPressPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trust
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Press</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Placeholder. Replace with press kit links and official references.
        </p>
      </header>
    </main>
  );
}