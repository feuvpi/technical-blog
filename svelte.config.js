import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatexSvelte],
			smartypants: false
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md']
};

export default config;