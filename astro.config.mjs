// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://nishkalrao20.github.io',
  base: '/',
  integrations: {
    mdx({
      /rehypePlugins: [rehypeKatex],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
