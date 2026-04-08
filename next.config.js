/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/diensten/apk-keuring',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kennisbank/apk-keuring-lichtenvoorde',
        destination: '/kennisbank',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
