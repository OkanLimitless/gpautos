/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
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
      {
        source: '/diensten/airco-service',
        destination: '/diensten/remmen-wielophanging',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
