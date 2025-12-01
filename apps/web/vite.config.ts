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

  // Enable build optimizations
  build: {
    reportCompressedSize: false,
    // Reduce bundle size with modern output
    target: "esnext",
    // Enable minification for production
    minify: "esbuild",
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Create efficient chunk names
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  // Optimize development server
  server: {
    port: 3000,
    // Enable fast refresh
    hmr: true,
    // Use native file watching
    watch: {
      usePolling: false,
    },
  },
});
