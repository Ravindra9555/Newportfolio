const nextConfig = {
  // Try removing this or changing to 'export'
  // output: 'standalone', 
  // OR try:
  output: 'export', // If you're doing static export
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
}