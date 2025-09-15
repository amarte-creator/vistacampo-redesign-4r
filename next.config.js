/** @type {import('next').NextConfig} */
// App Router does not support i18n routing via next.config.js.
// Locale detection and redirects are handled in middleware.ts.
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
