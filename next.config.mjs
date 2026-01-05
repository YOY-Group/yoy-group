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
};

export default nextConfig;