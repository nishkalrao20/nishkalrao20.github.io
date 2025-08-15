import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://nishkalrao20.github.io",
  base: "/",
  integrations: [
    tailwind(),
    mdx({
      rehypePlugins: [rehypeKatex],
    }),
  ],
});
