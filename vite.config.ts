import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      api: "/src/api",
    },
  },
});
