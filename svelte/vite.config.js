import autoPreprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        // Compile TS
        autoPreprocess()
      ]
    })
  ]
})
