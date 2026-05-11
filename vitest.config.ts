import { defineConfig } from 'vitest/config'

export default defineConfig({
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
