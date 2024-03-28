/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", },
      { protocol: "http", hostname: "127.0.0.1", },
      { protocol: "http", hostname: "211.56.253.184", },
      { protocol: "https", hostname: "api.michelangolf.co.kr", },
      { protocol: "https", hostname: "michelangolf.co.kr", }
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
  },
  output: 'standalone',
  reactStrictMode: false
}

module.exports = nextConfig
