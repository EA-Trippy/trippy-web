/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['k.kakaocdn.net', 'ssl.pstatic.net', 'lh3.googleusercontent.com'],
  },
  serverRuntimeConfig: {
    googleApplicationCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  },
};

module.exports = nextConfig;
