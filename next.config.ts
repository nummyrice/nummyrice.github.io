import { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/nummyrice.github.io",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
