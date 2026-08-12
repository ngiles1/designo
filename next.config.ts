import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/designo',
  assetPrefix: '/designo/',
};

// export default nextConfig;
module.exports = nextConfig;
