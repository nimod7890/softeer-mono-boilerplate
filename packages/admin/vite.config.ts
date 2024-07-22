import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: path.resolve(__dirname, '../../postcss.config.js'),
	},
	cacheDir: './.yarn/.vite',
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
});
