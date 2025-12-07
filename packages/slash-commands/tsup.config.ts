import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  minify: true,
  format: ["cjs", "esm"],
  types: ["react"],
  dts: true,
  sourcemap: true,
  splitting: false,
  clean: true,
  external: ["react", "react-dom", "@tiptap/pm", "@tiptap/react", "@tiptap/suggestion"],
  ...options,
}));
