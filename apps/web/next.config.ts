import type { NextConfig } from 'next';
import path from 'path';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ]
  },

  reactStrictMode: true,

  /** ⬇️ IMPORTANT: Add your package here */
  transpilePackages: ['@acm/api-endpoints', '@acm/portfolio-components'],

  experimental: {
    externalDir: true,
  },
  turbopack: {
    resolveAlias: {
      '@acm/api-endpoints': '../../packages/api-endpoints/src',
      '@acm/portfolio-components': '../../packages/portfolio-components/src',
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@acm/api-endpoints': path.resolve(
        __dirname,
        '../../packages/api-endpoints/src'
      ),

      '@acm/portfolio-components': path.resolve(
        __dirname,
        '../../packages/portfolio-components/src'
      ),
    };

    return config;
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;
