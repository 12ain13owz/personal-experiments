# Node.js Configuration

Sample configuration files for Nodejs projects in `personal-experiments/nodejs`.

## Recommended Configs

- **Prettier** (`.prettierrc`): Settings for code formatting
- **ESLint** (`eslint.config.mjs`): Settings for linting TypeScript
- **TypeScript** (`tsconfig.json`): Base compiler options for a plain Node.js/TS project (no bundler)
- **.gitignore** / **.dockerignore**: Standard ignores (`node_modules`, `dist`, `logs`, `.env*`)
- **Docker** (`Dockerfile`, `docker-compose.yml`): Multi-stage-style build (`npm run build` at image build time, `npm start` at runtime)

## Usage

1. Copy the files you need to your project folder (e.g., `nodejs/logger`)
2. Customize according to your project requirements
3. Install dependencies:

```bash
npm install -D @eslint/js @types/node eslint eslint-config-prettier eslint-plugin-import-x eslint-plugin-n eslint-plugin-security eslint-plugin-unused-imports globals prettier rimraf tsc-alias tsx typescript typescript-eslint
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

`eslint.config.mjs` uses flat config with type-aware TypeScript linting, plus a few focused plugins:

- `eslint-plugin-import-x` – import ordering (`@/*` alias grouped as internal)
- `eslint-plugin-unused-imports` – auto-remove unused imports on `--fix`
- `eslint-plugin-n` – catches deprecated/unsupported Node.js API usage
- `eslint-plugin-security` – warns on common injection-prone patterns
- `eslint-config-prettier` – disables ESLint rules that conflict with Prettier

Rules focus on safety and correctness (`no-floating-promises`, `eqeqeq`, `no-var`, `consistent-type-imports`, etc.) and stay generic — no project-specific architecture rules (e.g. feature-folder import boundaries) since this is meant as a plain starting point. See `eslint.config.mjs` for the full rule set.

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
