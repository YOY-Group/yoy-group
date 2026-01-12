// components/nav/PrimaryNav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/pillars", label: "Pillars" },
  { href: "/log", label: "Log" },
  { href: "/proof", label: "Proof" },
  { href: "/services", label: "Services" },
  { href: "/glossary", label: "Glossary" },
  { href: "/trust", label: "Trust" },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function PrimaryNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        {/* Brand / Home */}
        <Link
          href="/"
          aria-label="YOY.Group home"
          className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
        >
          <Image
            src="/brand/y-glyph.svg"
            alt="YOY"
            width={26}
            height={26}
            className="h-[26px] w-[26px] shrink-0 dark:hidden"
            priority
          />
          <Image
            src="/brand/y-glyph-white.svg"
            alt="YOY"
            width={26}
            height={26}
            className="hidden h-[26px] w-[26px] shrink-0 dark:block"
            priority
          />

          <span className="hidden sm:inline">YOY.Group</span>
          <span className="sm:hidden">YOY</span>
        </Link>

        {/* Primary navigation */}
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            {NAV.map((item) => {
              const active = isNavActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "text-sm transition-colors rounded-md",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      active
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}