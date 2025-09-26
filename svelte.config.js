import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

const base = process.env.BASE_PATH ?? ''; // '' for dev, '/repo-name' in CI

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    paths: { base }
  }
};

export default config;
