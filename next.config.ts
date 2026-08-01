import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The research section was renamed to Insights — keep old links alive.
      {
        source: "/research",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
