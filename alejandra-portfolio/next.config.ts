import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Allows the LAN IP to request dev-only assets (/_next/*, HMR websocket).
  // Without this, `next dev` returns 403 for every device that isn't localhost.
  allowedDevOrigins: ["192.168.0.82"],
  // Self-contained build output for the Docker image (only prod deps + server files).
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
};

export default withNextIntl(nextConfig);
