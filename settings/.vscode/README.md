# VSCode Settings

Personal Visual Studio Code configuration focused on **TypeScript / JavaScript / Angular** development.

This repository exists to **back up, reuse, and quickly apply** my preferred VSCode environment across machines.

---

## 📦 What’s Included

- `settings.json` – Main VSCode configuration
- Opinionated setup for:
  - Prettier + ESLint
  - Clean editor UI (low noise)
  - Consistent formatting
  - Git-friendly defaults

---

## 🖌️ Editor & Formatting Highlights

- 2-space indentation
- Format on save
- Prettier (`esbenp.prettier-vscode`) as default formatter
- Dedicated YAML formatter (`redhat.vscode-yaml`)
- ESLint auto-fix on save (explicit)
- Prettier/ESLint rules now come from each project's own config files (no longer duplicated in `settings.json`)
- CSS/SCSS built-in validation disabled (handled by linters instead)

---

## 🎨 UI & UX Preferences

- Theme: **GitHub Dark Default**
- Font: **Fira Code** (ligatures enabled)
- Cursor: smooth blinking, thicker line
- Bracket pair colorization enabled
- Sticky scroll & breadcrumbs disabled

---

## 🧩 Language Support

Optimized settings for:

- **TypeScript / JavaScript**
- **Angular**
- **YAML** (formatted via `redhat.vscode-yaml`)

> Dart, Go, and Docker Compose/GitHub Actions-specific overrides were removed to keep this config focused and low-maintenance; add them back locally if a project needs them.

---

## 📝 Comments & Productivity

- Better Comments configured (`!`, `todo`, `?`, etc.)
- Emmet suggestions reduced to avoid noise
- Git auto-fetch enabled
- Quick suggestions tuned (inline suggestions on, string suggestions off)
- Extension recommendation prompts disabled (`extensions.ignoreRecommendations`)

---

## 🤖 AI & Chat

- Built-in VS Code chat AI features disabled (`chat.disableAIFeatures`)
- Claude Code panel docked to the side panel (`claudeCode.preferredLocation`)
- Codeium enabled for common file types, including `.env` and Markdown

---

## 🚀 Usage

1. Clone this repository
2. Copy `settings.json` to:

```bash
# Windows
%APPDATA%\Code\User\settings.json

# macOS
~/Library/Application Support/Code/User/settings.json

# Linux
~/.config/Code/User/settings.json
```

3. Restart VSCode

---

## 🧠 Notes

- This setup is **personal & opinionated**
- Designed for long coding sessions and readability
- Safe defaults for team environments
