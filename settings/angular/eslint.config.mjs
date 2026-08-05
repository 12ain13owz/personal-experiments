// @ts-check
import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import angular from 'angular-eslint'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import-x'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: ['.angular/**', 'dist/**', 'node_modules/**'],
  },

  // ── TypeScript ──────────────────────────────────────────────────────────────
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier,
    ],
    // Enables linting for inline templates inside @Component({ template: `...` })
    processor: angular.processInlineTemplates,
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // ── Safety & error handling ───────────────────────────────────────────────
      'no-async-promise-executor': 'error',
      'no-eval': 'error',
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/only-throw-error': 'error',

      // ── TypeScript ──────────────────────────────────────────────────────────
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      // ── Angular ─────────────────────────────────────────────────────────────
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],

      // ── Imports ──────────────────────────────────────────────────────────────
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'type'],
          pathGroups: [
            // Hoist Angular and RxJS to the top of external imports
            { pattern: '@angular/**', group: 'external', position: 'before' },
            { pattern: 'rxjs/**', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'never',
        },
      ],
    },
  },

  // ── HTML templates ──────────────────────────────────────────────────────────
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility, // a11y rules (aria, roles, alt text, etc.)
    ],
    rules: {
      '@angular-eslint/template/elements-content': 'off',
    },
  }
)

/*
 * Example — auto-fix result (eslint --fix)
 *
 * Before:
 *   import { Component, OnInit } from '@angular/core'  // OnInit unused
 *   import { UserService } from './user.service'
 *   import { Observable } from 'rxjs'
 *   import { Router } from '@angular/router'
 *   import { environment } from '../../environments/environment'
 *
 * After:
 *   import { Component } from '@angular/core'          // @angular (hoisted)
 *   import { Router } from '@angular/router'
 *   import { Observable } from 'rxjs'                  // rxjs (hoisted)
 *   import { environment } from '../../environments/environment'  // parent
 *   import { UserService } from './user.service'       // sibling
 */
