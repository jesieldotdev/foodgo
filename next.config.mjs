/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "i.pinimg.com"],
  }
};

export default nextConfig;
