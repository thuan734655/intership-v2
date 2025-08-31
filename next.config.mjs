const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/product/info/:barcode",
        destination: "/api/product/info/:barcode",
      },
    ]
  },
};
export default nextConfig;
