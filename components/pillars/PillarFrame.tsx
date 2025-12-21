// components/pillars/PillarFrame.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type PillarFrameProps = {
  title: string;
  lede?: string;
  children: ReactNode;
};

export default function PillarFrame({
  title,
  lede,
  children,
}: PillarFrameProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>

        {lede && (
          <p className="text-base leading-relaxed text-muted-foreground">
            {lede}
          </p>
        )}
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-8">{children}</section>

      <footer className="mt-24 flex items-center justify-between text-xs text-muted-foreground">
        <span>Authority layer · Pillars</span>
        <Link href="/pillars" className="hover:text-foreground">
          ← Back to pillars
        </Link>
      </footer>
    </main>
  );
}