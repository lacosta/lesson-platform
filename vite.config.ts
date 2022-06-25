// @packages
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve("src/components/"),
      i18n: path.resolve("src/i18n"),
      lib: path.resolve("src/lib"),
      pages: path.resolve("src/pages"),
      styles: path.resolve("src/styles"),
    },
  },
});
