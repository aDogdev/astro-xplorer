// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: {
    resolve: {
      alias: { "@": path.resolve("./src") },
    },
    plugins: [tailwindcss()],
  },
});
