// @ts-check
import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import-x'
import n from 'eslint-plugin-n'
import security from 'eslint-plugin-security'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  // ── Ignores ───────────────────────────────────────────────────────────────
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', 'eslint.config.mjs'],
  },

  // ── TypeScript ───────────────────────────────────────────────────────────
  {
    files: ['src/**/*.{js,mjs,cjs,ts}'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked, // type-aware rules for stricter linting
      prettier, // MUST be last: turns off ESLint rules that conflict with Prettier
    ],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        // Type-aware linting via the TypeScript project service (recommended over `project`)
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      // @types/eslint-plugin-security is stale against newer ESLint's Plugin type
      // (eslint-plugin-security itself ships no types) — cast around the mismatch.
      security: /** @type {import('eslint').ESLint.Plugin} */ (security),
      n,
    },
    rules: {
      // ── Safety & error handling ──────────────────────────────────────────
      'no-async-promise-executor': 'error',
      'no-eval': 'error',
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      curly: ['error', 'all'],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        { considerDefaultExhaustiveForUnions: true },
      ],

      // ── Node.js runtime ───────────────────────────────────────────────────
      'n/no-deprecated-api': 'error',
      'n/no-extraneous-import': 'error',
      'n/no-unsupported-features/node-builtins': ['error', { version: '>=20.0.0' }],

      // ── Security ──────────────────────────────────────────────────────────
      'security/detect-object-injection': 'warn',

      // ── TypeScript strictness ────────────────────────────────────────────
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/promise-function-async': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': 'off', // delegated to unused-imports below

      // ── Imports ───────────────────────────────────────────────────────────
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '@/**', // Match @/ imports from src/*
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      // ── Logging & environment ─────────────────────────────────────────────
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-process-env': 'warn', // encourage reading env through a central config module

      // ── Complexity ────────────────────────────────────────────────────────
      complexity: ['warn', { max: 15 }],
    },
  }
)
