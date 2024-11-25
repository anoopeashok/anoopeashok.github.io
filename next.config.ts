import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/my-portfolio",
  reactStrictMode: true,
   images: { unoptimized: true }
};

export default nextConfig;
