import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tsconfigPaths(),
  ],
  base: "./",

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
    // Enable fast refresh
    hmr: true,
    // Use native file watching
    watch: {
      usePolling: false,
    },
  },
});
