import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

const nextConfig = {
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/phl0at/images/**"
      },
    ],
  },
};
export default nextConfig;
