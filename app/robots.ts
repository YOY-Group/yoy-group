// app/robots.ts
import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  const base = getSiteUrl().replace(/\/$/, "");

  // PREVIEW + DEVELOPMENT: block everything
  if (!isProd) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: ["/"],
        },
      ],
    };
  }

  // PRODUCTION
  return {
    rules: [
      {
        userAgent: "*",

        // ✅ Explicitly allow Next.js assets
        allow: ["/", "/_next/static/", "/_next/image/"],

        // ❌ Block non-public / internal surfaces
        disallow: [
          "/api/",
          "/n8n/",
          "/dev/",
          "/ai/",
          "/studio/",
          "/admin/",
          "/dashboard/",
          "/internal/",
          "/private/",
          "/preview/",
          "/draft/",
          "/cdn-cgi/", // Cloudflare email obfuscation noise
        ],
      },

      // Optional: hard-block heavy SEO scrapers
      { userAgent: "AhrefsBot", disallow: ["/"] },
      { userAgent: "SemrushBot", disallow: ["/"] },
      { userAgent: "MJ12bot", disallow: ["/"] },
      { userAgent: "DotBot", disallow: ["/"] },
    ],

    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
