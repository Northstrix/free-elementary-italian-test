import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No global SSR disable option. To enforce CSR on pages/components, use 'use client' directive.
  // See: https://nextjs.org/docs/messages/invalid-next-config
  output: "export",        // Fully static export (no SSR, no API routes)
  
  trailingSlash: true,     // Optional: good for static hosting

  images: {
    unoptimized: true,     // Required for static export if using <Image />
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config) {
    // No additional raw-loader config required.
    return config;
  },
};

export default nextConfig;