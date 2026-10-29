import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Parent /CR-projects/package-lock.json was winning Turbopack root inference.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
