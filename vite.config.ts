import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import copy from 'rollup-plugin-copy';

export default defineConfig({
	server: {
		fs: {
			allow: ['static/images/']
		}
	},
	plugins: [
		sveltekit(),
		copy({
			targets: [{ src: 'src/lib/images', dest: 'static/' }]
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
