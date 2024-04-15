/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 이미지 최적화 제거(정적 사이트 이용시)
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
