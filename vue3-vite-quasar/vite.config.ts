import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import ViteVisualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    ViteVisualizer({
      filename: "./dist/report.html",
      open: true,
      template: "network",
    }),
    quasar({
      sassVariables: "./src/app/styles/quasar-variables.sass",
    }),
  ],
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  },
  envDir: `${path.resolve(__dirname, "env")}/`,
});
