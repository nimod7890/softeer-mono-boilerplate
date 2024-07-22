import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, InlineConfig, UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: path.resolve(__dirname, '../../postcss.config.js'),
	},
	cacheDir: './.yarn/.vite',
	test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
} as VitestConfigExport);
