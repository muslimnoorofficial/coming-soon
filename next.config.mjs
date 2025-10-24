/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable turbopack by default for compatibility with shadcn UI
    turbopack: false,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  devIndicators: false,
};

export default nextConfig;
