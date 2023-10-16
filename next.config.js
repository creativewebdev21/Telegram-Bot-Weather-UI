/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["*"],
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false }
      return config
    },
    reactStrictMode: true,
  }
  
module.exports = nextConfig
  