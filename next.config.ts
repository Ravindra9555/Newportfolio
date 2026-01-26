// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig