/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
