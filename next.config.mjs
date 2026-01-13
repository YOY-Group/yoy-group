/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Canonicalize Index -> Log
      { source: "/index", destination: "/log", permanent: true },
      { source: "/index/:issue", destination: "/log/:issue", permanent: true },

      // Optional: handle trailing slash variants explicitly (belt + suspenders)
      { source: "/index/", destination: "/log", permanent: true },
      { source: "/index/:issue/", destination: "/log/:issue", permanent: true },
    ];
  },

  /**
   * Preview / Development: prevent indexing at the HTTP header level.
   * Production: no extra headers.
   */
  async headers() {
    const isProd = process.env.VERCEL_ENV === "production";
    if (isProd) return [];

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};

export default nextConfig;
