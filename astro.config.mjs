import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    drafts: true
  },
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: [],
      wrap: true
    }
  }
});