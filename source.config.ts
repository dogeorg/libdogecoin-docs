/**
 * Fumadocs config (TypeScript, canonical).
 * This file lives at the repo root. Fumadocs-mdx generates MDX collections into .source/
 * on build/postinstall (no .source directory).
 */
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // Code blocks use cpp/bash/cmake etc. (all in default Shiki bundle)
    rehypeCodeOptions: {
      langs: ['js', 'jsx', 'ts', 'tsx', 'json', 'bash', 'sh', 'cpp', 'cmake', 'markdown', 'text'],
    },
  },
});
