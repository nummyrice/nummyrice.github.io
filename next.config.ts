import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/nummyrice.github.io' : '',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
