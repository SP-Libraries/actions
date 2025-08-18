# 🚀 GitHub Actions and Workflows

<p align="center">
<a href="https://github.com/SP-Libraries/actions/actions"><img src="https://github.com/SP-Libraries/actions/actions/workflows/release.yml/badge.svg" alt="build status"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="license"></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release" alt="semantic-release"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier"></a>
  <a href="https://github.com/SP-Libraries/actions/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://github.com/sponsors/iamsenthilprabu"><img src="https://img.shields.io/badge/Sponsor-%E2%9D%A4-pink?logo=github" alt="Sponsor"></a>
</p>

This repository provides a collection of **reusable workflows** and **composite actions** for GitHub Actions, designed to streamline CI/CD processes across multiple projects.

---

## 📦 Composite Actions

### 🛠️ Setup Environment (`.github/actions/setup-environment`)

Sets up Git, PHP, Node.js, and dependency caching for workflows.

| Input                      | Type    | Default | Required | Description                           |
| -------------------------- | ------- | ------- | -------- | ------------------------------------- |
| `VERBOSE`                  | boolean | false   | No       | Print debug information               |
| `FETCH_DEPTH`              | number  | 1       | No       | Git fetch depth (0 = full history)    |
| `SETUP_PHP`                | boolean | false   | No       | Install PHP + Composer                |
| `PHP_VERSION`              | string  | 8.3     | No       | PHP version                           |
| `SETUP_NODE`               | boolean | false   | No       | Install Node.js                       |
| `NODE_VERSION`             | string  | 21      | No       | Node.js version                       |
| `CACHE_KEY_PREFIX`         | string  | deps    | No       | Cache key prefix                      |
| `INSTALL_DEPENDENCIES`     | boolean | false   | No       | Run dependency installation           |
| `INSTALL_DEV_DEPENDENCIES` | boolean | false   | No       | Install dev dependencies              |
| `RUN_BUILD`                | boolean | false   | No       | Run `npm run build` if defined        |
| `GH_TOKEN`                 | string  | ''      | No       | GitHub token (for Composer auth, etc) |

---

## 🔄 Reusable Workflows

### 1. PR Labeler 🏷️

Automatically labels pull requests based on `.github/labeler.yml` configuration.

- Inputs:
  - `VERBOSE` (boolean, default: false)
- Secrets:
  - `GH_TOKEN` (required)

### 2. Code Quality 🧹

Runs linting via [`@sp-packages/lintrc`](https://github.com/SP-Packages/lintrc).

- Supports PHP 8.2 / 8.3 and Node.js 20 / 21
- Inputs:
  - `VERBOSE` (boolean, default: false)
- Secrets:
  - `GH_TOKEN` (required)

### 3. Sync Branch 🔄

Keeps a branch (e.g., `develop`) synced with `main`.

- Inputs:
  - `VERBOSE` (boolean, default: false)
- Secrets:
  - `GH_TOKEN` (required)

### 4. Semantic Release 📦

Handles automated versioning and package publishing.

- Inputs:
  - `VERBOSE` (boolean, default: false)
  - `DRY_RUN` (boolean, default: false)
  - `BUILD` (boolean, default: false)
- Secrets:
  - `GH_TOKEN` (required)
  - `NPM_TOKEN` (optional)

### 5. Publish to Server 🚀

Triggers a webhook for server deployment.

- Inputs:
  - `VERBOSE` (boolean, default: false)
- Secrets:
  - `WEBHOOK_URL` (required)

### 6. Publish to WordPress.org 🌐

Deploys a plugin/theme to WordPress.org SVN.

- Inputs:
  - `VERBOSE` (boolean, default: false)
  - `DRY_RUN` (boolean, default: false)
- Secrets:
  - `GH_TOKEN` (required)
  - `SVN_USERNAME` (required)
  - `SVN_PASSWORD` (required)

---

## 📚 Usage Example

```yaml
jobs:
  quality:
    uses: SP-Libraries/actions/.github/workflows/code-quality.yml@main
    with:
      VERBOSE: true
    secrets:
      GH_TOKEN: ${{ secrets.GH_TOKEN }}
```

---

## 🤝 Contributing

Contributions are welcome! Please check our [Contributing Guidelines](CONTRIBUTING.md).

---

## 📜 License

Licensed under the [MIT License](LICENSE).
