// components/nav/PrimaryNav.tsx
"use client";

import Link from "next/link";
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
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Brand / Home */}
          <Link
            href="/"
            aria-label="YOY.Group home"
            className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground hover:opacity-80 transition-opacity"
          >
            <img
              src="/brand/y-glyph.svg"
              alt=""
              width={26}
              height={26}
              className="h-[26px] w-[26px] shrink-0"
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
                      className={[
                        "text-sm transition-colors",
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
      </div>
    </header>
  );
}