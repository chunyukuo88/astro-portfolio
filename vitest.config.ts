import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default defineConfig(
    getViteConfig({
        test: {
            include: ['src/**/*.test.{js,ts}'],
            environment: 'jsdom',
        },
    })
);