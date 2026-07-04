import { composePlugins, withNx } from '@nx/next';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:["lh3.googleusercontent.com"]
  }
};

const plugins = [withNx];
export default composePlugins(...plugins)(nextConfig);
