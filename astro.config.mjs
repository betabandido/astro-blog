import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://sensational-croissant-3cb464.netlify.app",
  integrations: [preact()]
});