import solid from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [solid()],
	preview: {
		port: 8080,
	},
	server: {
		port: 4000,
	},
	test: {
		environment: 'node',
	},
});
