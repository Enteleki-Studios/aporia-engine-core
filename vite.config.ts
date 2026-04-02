/// <reference types='vitest/config' />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    build: {
        outDir: './dist',
    },
    server: {
        port: 2080,
    },
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
    },
    test: {
        environment: 'jsdom',
        typecheck: {
            enabled: true,
            ignoreSourceErrors: true,
        },
    },
})
