import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      "~": "/src",
      "@/components": "/src/components",
      "@/hooks": "/src/hooks",
      "@/lib": "/src/lib",
      "@/ui": "/src/components/ui",
      "@/api": "/src/api",
    },
  },
});
