/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the Image Deprecation Warning
  output: 'standalone', // Important for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  // Setting this to false prevents build errors with #anchor links
  typedRoutes: false, 
}

module.exports = nextConfig