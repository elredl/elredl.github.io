// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const base = process.env.BASE_PATH ?? ''; // '' for user repo, '/REPO' for project repo

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    paths: { base } // must be '' or like '/repo-name' (no trailing '/')
  }
};

export default config;
