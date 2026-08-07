import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "logo.png"
      ],

      manifest: {
        name: "GovMitra AI",
        short_name: "GovMitra",
        description:
          "AI Powered Government Resolution Search Platform",

        theme_color: "#059669",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",

        start_url: "/",

        icons: [
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});