/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "./dist",
  basePath: "/blancy-frontend",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
