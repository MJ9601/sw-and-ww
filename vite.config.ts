import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { comlink } from "vite-plugin-comlink";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    comlink(),
    VitePWA({
      manifest: {
        name: "my sw and ww app",
        start_url: ".",
        short_name: "PWA",
        description: "simple web worker and service worker app",
        theme_color: "#fff",
        icons: [
          {
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/svg",
            purpose: "any maskable",
          },
          {
            src: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  worker: {
    plugins: [comlink()],
  },
});
