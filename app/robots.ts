// app/robots.ts
import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  const base = getSiteUrl().replace(/\/$/, "");

  // PREVIEW + DEVELOPMENT: block everything and don't advertise sitemap
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

  // PRODUCTION: allow public surface, block non-public/internal surfaces
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/n8n/",
          "/dev/",
          "/ai/",
          "/studio/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/internal/",
          "/private/",
          "/preview/",
          "/draft/",
        ],
      },

      // Hard-block obvious scrapers (optional but fine)
      { userAgent: "AhrefsBot", disallow: ["/"] },
      { userAgent: "SemrushBot", disallow: ["/"] },
      { userAgent: "MJ12bot", disallow: ["/"] },
      { userAgent: "DotBot", disallow: ["/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
