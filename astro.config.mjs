// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://nishkalrao20.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});

import rehypeKatex from "rehype-katex";

export default {
  integrations: [
    // ...
    mdx({
      rehypePlugins: [rehypeKatex],
    })
  ]
}
