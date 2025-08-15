import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nishkalrao20.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
  ],
});
