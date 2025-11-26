import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Necesario si usas el componente Image de Next.js
  },
};

export default nextConfig;