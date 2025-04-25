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
npm install -D angular-eslint eslint eslint-plugin-import prettier
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

## Best Practices

- Run linting and formatting checks before committing changes
- Consider adding pre-commit hooks to automate formatting
- Keep configurations consistent across related projects

## For More Information

- [Prettier Documentation](https://prettier.io/docs/en/options.html)
- [ESLint Angular Plugin](https://github.com/angular-eslint/angular-eslint)
