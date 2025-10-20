import withImages from "next-images";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
});

export default nextConfig;
