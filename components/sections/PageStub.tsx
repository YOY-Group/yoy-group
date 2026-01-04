// components/sections/PageStub.tsx
import Link from "next/link";

export default function PageStub({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <p className="text-sm leading-relaxed text-muted-foreground">
        This surface is intentionally minimal. It expands when proof expands.
      </p>

      <footer className="mt-16 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ← Home
        </Link>
      </footer>
    </main>
  );
}