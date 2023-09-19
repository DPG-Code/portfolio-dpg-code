/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { getViteConfig } from 'astro/config';

export default getViteConfig({
	test: {
		environment: 'jsdom',
    globals: true
	},
});