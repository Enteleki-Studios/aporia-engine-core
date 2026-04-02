import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintReact from '@eslint-react/eslint-plugin'
import js from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            eslintComments.recommended,
            js.configs.recommended,
            reactRefresh.configs.vite,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            eslintReact.configs['strict-type-checked'],
        ],
        settings: {
            react: { version: 'detect' },
        },
        languageOptions: {
            ecmaVersion: 2025,
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Use type instead of interface
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/consistent-type-imports': 'error',
            // No type assertions
            '@typescript-eslint/consistent-type-assertions': [
                'error',
                { assertionStyle: 'never' },
            ],
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                { allowNumber: true },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            // Disallow variable declarations from shadowing variables declared in the outer scope
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            // Disabled rules
            '@typescript-eslint/no-invalid-void-type': 0,
            '@typescript-eslint/unbound-method': 0,

            '@eslint-community/eslint-comments/require-description': 'error',
        },
    },
])
