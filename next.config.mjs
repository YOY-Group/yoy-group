/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index", destination: "/index/", permanent: false },
      { source: "/index/:path*", destination: "/index/:path*", permanent: false },
    ];
  },
};

export default nextConfig;