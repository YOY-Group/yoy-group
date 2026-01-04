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
    "Agent-led, culture-native operating systems for commerce. We design retail architectures where brand, software, and distribution move as one.",
  metadataBase: new URL("https://yoy.group"),

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/brand/y-glyph/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/y-glyph/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/brand/y-glyph/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    siteName: "YOY.Group",
    title: "YOY.Group",
    description:
      "Agent-led, culture-native operating systems for commerce.",
    url: "https://yoy.group",
  },

  twitter: {
    card: "summary",
    title: "YOY.Group",
    description:
      "Agent-led, culture-native operating systems for commerce.",
  },
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