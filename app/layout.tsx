// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrimaryNav from "@/components/nav/PrimaryNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YOY.Group",
    template: "%s — YOY.Group",
  },
  description:
    "Autonomous, culture-led consumer systems. We design retail operating models where brand, software, and distribution move as one.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          "min-h-screen",
          "bg-background text-foreground",
          "antialiased",
        ].join(" ")}
      >
        {/*
          Global frame principles:
          - structure only
          - no persuasion
          - no animation
          - authority through restraint
        */}
        <div className="mx-auto max-w-5xl px-6 py-10">
          <PrimaryNav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}