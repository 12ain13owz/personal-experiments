# Angular Configuration

Sample configuration files for Angular projects in `personal-experiments/angular`.

## Recommended Configs

- **Prettier** (`.prettierrc`, `.prettierignore`): Settings for code formatting
- **ESLint** (`eslint.config.mjs`): Settings for linting TypeScript and Angular templates
- **.gitignore** / **.dockerignore**: Standard ignores (`node_modules`, `dist`, `.angular`, `.env*`)
- **Docker** (`Dockerfile`, `docker-compose.yml`, `nginx.conf`): Multi-stage build served via Nginx

## Usage

1. Copy the files you need to your project folder (e.g., `angular/form-examples`)
2. Customize according to your project requirements
3. Install dependencies:

```bash
npm install -D @eslint/js angular-eslint eslint eslint-config-prettier eslint-plugin-import-x eslint-plugin-unused-imports prettier prettier-plugin-tailwindcss typescript-eslint
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
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "proseWrap": "preserve",
  "plugins": ["prettier-plugin-tailwindcss"],
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

`eslint.config.mjs` uses flat config (ESM) with a TypeScript rule set and a separate HTML template rule set:

- `angular-eslint` – Angular-specific rules (`component-selector`, `directive-selector`, `prefer-standalone`) plus template rules (`templateRecommended`, `templateAccessibility` for a11y)
- `eslint-plugin-import-x` – import ordering, with `@angular/**` and `rxjs/**` hoisted to the top
- `eslint-plugin-unused-imports` – auto-remove unused imports on `--fix`
- `eslint-config-prettier` – disables ESLint rules that conflict with Prettier

Rules also cover general safety/correctness (`curly` — always require `{}` around `if`/`for`/`while` blocks, `eqeqeq`, `no-var`, `prefer-const`, `no-floating-promises`, `consistent-type-imports`, etc.), matching the baseline used in `settings/nodejs`. See `eslint.config.mjs` for the full rule set.

## Information

- [Prettier Documentation](https://prettier.io/docs/en/options.html)
- [ESLint Angular Plugin](https://github.com/angular-eslint/angular-eslint)
- [TypeScript ESLint](https://typescript-eslint.io/)
