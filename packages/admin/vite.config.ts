import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: path.resolve(__dirname, '../../postcss.config.js'),
	},
	cacheDir: './.yarn/.vite',
	optimizeDeps: {
		include: ['react', 'react-dom'],
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
});
