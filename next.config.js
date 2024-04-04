/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
  output: "export",
  reactStrictMode: false,
};

module.exports = nextConfig;
