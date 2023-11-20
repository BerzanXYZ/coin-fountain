import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: "always",

  },
  vite: {
    build: {
      assetsInlineLimit: 100000
    }
  }
});