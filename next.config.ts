import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'input-3d-assets.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
