/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "miro.medium.com",
          pathname: "/**",  // Matches any path under the domain
        },
        {
          protocol: "https",
          hostname: "medium.com",
          pathname: "/**",  // Matches any path under the domain
        },
        {
          protocol: "https",
          hostname: "img.freepik.com",
          pathname: "/**",  // Matches any path under the domain
        },
        {
          protocol: "https",
          hostname: "proxy-lna.onrender.com",
          pathname: "/proxy_image",
      },          
        {
          protocol: "http",
          hostname: "localhost",
          port:"3001",
          pathname: "/proxy_image",  // Matches any path under the domain
        },
      ],
    },
};
export default nextConfig;
