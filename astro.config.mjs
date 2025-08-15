// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://nishkalrao20.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    tailwind(),
    mdx(),
  ],
});
