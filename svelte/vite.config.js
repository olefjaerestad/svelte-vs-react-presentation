import autoPreprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    svelte({
      preprocess: [
        // Add support for TS/SCSS/etc
        autoPreprocess()
      ]
    })
  ]
})
