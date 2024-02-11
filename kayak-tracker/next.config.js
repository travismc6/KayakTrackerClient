/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn.pixabay.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXTAUTH_SECRET: "secret",
  },
};

module.exports = nextConfig;
