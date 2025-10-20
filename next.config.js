/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/blancy-frontend",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: "/blancy-frontend",
  },
};

export default nextConfig;
