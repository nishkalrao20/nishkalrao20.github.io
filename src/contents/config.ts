import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    coverImage: z.string().url().optional(),
    author: z.string().default('Nishkal Rao'),
  }),
});

export const collections = {
  'blog': blogCollection,
};
