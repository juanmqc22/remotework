import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/remotework",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
