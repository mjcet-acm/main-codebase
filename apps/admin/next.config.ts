import { composePlugins, withNx } from '@nx/next';
import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:["lh3.googleusercontent.com"]
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  turbopack: {
    root: path.resolve(__dirname, '../../'),
  },
};

const plugins = [withNx];
export default composePlugins(...plugins)(nextConfig);
