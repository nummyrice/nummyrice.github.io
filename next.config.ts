import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
