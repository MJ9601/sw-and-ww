import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { comlink } from "vite-plugin-comlink";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), comlink()],
  worker: {
    plugins: [
      comlink(),
      VitePWA({
        injectRegister: "auto",
      }),
    ],
  },
});
