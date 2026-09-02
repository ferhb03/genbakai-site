import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/ebook-lead": ["./private-assets/ebooks/*.pdf"],
  },
};

export default nextConfig;
