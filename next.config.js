/** @type {import('next').NextConfig} */
// App Router does not support i18n routing via next.config.js.
// Locale detection and redirects are handled in middleware.ts.
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
