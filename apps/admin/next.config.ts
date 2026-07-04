import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      }
    ]
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  turbopack: {
    root: path.resolve(__dirname, '../../'),
  },
};

export default nextConfig;
