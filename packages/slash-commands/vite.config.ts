import path from "node:path";
import baseConfig from "@tabnote/configs/vite.base.config";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  ...baseConfig,

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
