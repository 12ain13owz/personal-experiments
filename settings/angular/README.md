# Angular Configuration

Sample configuration files for Angular projects in `personal-experiments/angular`.

## Recommended Configs

- **Prettier** (`.prettierrc`): Settings for code formatting
- **ESLint** (`eslint.config.js`): Settings for linting TypeScript and Angular templates

## Usage

1. Copy the `.prettierrc` and `eslint.config.js` files to your project folder (e.g., `angular/form-examples`)
2. Customize according to your project requirements
3. Install dependencies:

```bash
npm install -D angular-eslint eslint eslint-plugin-import prettier typescript-eslint @eslint/js
```

## Prettier Configuration

The provided `.prettierrc` contains the following settings:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "strict",
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

## ESLint Configuration

The provided `eslint.config.js` contains the following settings:

```javascript
// @ts-check
const eslint = require("@eslint/js")
const tseslint = require("typescript-eslint")
const angular = require("angular-eslint")
const importPlugin = require("eslint-plugin-import")

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: { import: importPlugin },
    rules: {
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@angular/**",
              group: "external",
              position: "before",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
)
```

## Best Practices

- Run linting and formatting checks before committing changes
- Consider adding pre-commit hooks to automate formatting
- Keep configurations consistent across related projects

## For More Information

- [Prettier Documentation](https://prettier.io/docs/en/options.html)
- [ESLint Angular Plugin](https://github.com/angular-eslint/angular-eslint)
- [TypeScript ESLint](https://typescript-eslint.io/)
