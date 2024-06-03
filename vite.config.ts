import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      VitePWA({
        registerType: "prompt",
        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
        manifest: {
          name: "Mike Toole",
          short_name: "Mike Toole",
          description: "Mike Toole's law firm",
          icons: [
            {
              src: "/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "favicon",
            },
            {
              src: "/icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "favicon",
            },
            {
              src: "/icons/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
              purpose: "apple touch icon",
            },
          ],
          theme_color: "#a37b4d",
          background_color: "#a37b4d",
          display: "standalone",
          scope: "/",
          start_url: "/",
          orientation: "portrait",
        },
      }),
    ],
  };
});