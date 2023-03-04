/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["loremflickr.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
