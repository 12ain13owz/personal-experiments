# Node.js Configuration

Sample configuration files for Nodejs projects in `personal-experiments/nodejs`.

## Recommended Configs

- **Prettier** (`.prettierrc`): Settings for code formatting
- **ESLint** (`eslint.config.js`): Settings for linting TypeScript

## Usage

1. Copy the `.prettierrc` and `eslint.config.js` files to your project folder (e.g., `nodejs/logger`)
2. Customize according to your project requirements
3. Install dependencies:

```bash
npm install -D @eslint/js @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-security rimraf globals prettier ts-node tsc-alias tsx typescript typescript-eslint
```

## Prettier Configuration

The provided `.prettierrc` contains the following settings:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "css",
  "proseWrap": "preserve"
}
```

## ESLint Configuration

The provided `eslint.config.js` contains the following settings:

```typescript
/** @type {import('eslint').Linter.Config[]} */
import pluginJs from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import security from 'eslint-plugin-security'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['node_modules/**', 'dist/**/*', 'scripts/**', 'eslint.config.mjs'] },
  { files: ['src/**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    plugins: { import: importPlugin, security },
    rules: {
      'no-async-promise-executor': 'error',
      'no-throw-literal': 'error',
      'no-eval': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-process-env': 'warn',

      complexity: ['warn', { max: 15 }],

      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/require-await': 'off',
      'security/detect-object-injection': 'warn',

      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
]
```

## Script Package.json

```json
"scripts": {
    "start": "node dist/main.js",
    "dev": "tsx watch src/main",
    "clean": "rimraf dist",
    "build": "npm run clean && tsc && tsc-alias",
    "format": "prettier --write .",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
```

## Best Practices

- Run linting and formatting checks before committing changes
- Consider adding pre-commit hooks to automate formatting
- Keep configurations consistent across related projects

## For More Information

- [Prettier Documentation](https://prettier.io/docs/en/options.html)
- [TypeScript ESLint](https://typescript-eslint.io/)
