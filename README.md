# Cloud Finder — Chrome Extension

## Short description

Quick access to the top 10 cloud storage providers (logos + links) from a compact browser toolbar popup.

## One-line (store) suggestion

Quickly open the most popular cloud storage services from your browser toolbar.

## Overview

Cloud Finder is a small, zero-build Chrome extension that renders a compact, interactive popup listing the top 10 cloud storage providers. Each provider shows a logo and opens the provider's website in a new tab when clicked.

This repository contains the extension's static source files (HTML, CSS, JavaScript), icons and a minimal test suite.

## Stack and core technologies

- Language: JavaScript (ES modules)
- Markup & styling: HTML, CSS
- Chrome Extension Manifest: Manifest V3
- Package manager / tooling: npm (devDependencies include Jest, ESLint, Stylelint)
- Tests: Jest + jsdom
- No frontend framework (vanilla JS)

## Key files / entry points

- `manifest.json` — Chrome extension manifest (manifest_version: 3).
  - `action.default_popup` -> `popup.html` (popup entry point).
  - Declared icons: `icons/icon16.png`, `icons/icon48.png`, `icons/icon128.png`.
  - Permissions: `activeTab` (minimal permission set).
- `popup.html` — Popup UI and includes `src/styles/*.css` and `src/popup.js`.
- `src/popup.js` — Main popup script that renders the interactive list. Exports `renderCloudList` and `clouds` for tests.
- `src/styles/` — CSS files: `design_variables.css`, `style.css`.

## What is included (assets)

Present in the repository (useful for the Chrome Web Store and GitHub README):

- Icons: `icons/icon16.png`, `icons/icon48.png`, `icons/icon128.png` (these satisfy the basic extension icon requirement).
- Provider logos: `icons/google-drive.png`, `icons/onedrive.png`, `icons/icloud.png`, `icons/dropbox.png`, `icons/box.png`, `icons/mega.png`, `icons/aws-s3.png`, `icons/mediafire.png`, `icons/pcloud.png`, `icons/sync.png`.
- Screenshots: `icons/Screenshot.png` and `icons/Screenshot 2025-07-12 170525.png` (these can be used as screenshots in the store listing but may need resizing/cropping).

## Project structure

```
.
├── icons/                # Extension icons, provider logos, screenshots
├── public/               # SVG icons used for packaging (kept for reference)
├── src/                  # Source files (popup HTML/CSS/JS)
│   ├── popup.js          # Main popup logic (renderCloudList + clouds)
│   └── styles/           # CSS files
├── tests/                # Jest tests (jsdom environment)
│   └── popup.test.js
├── popup.html            # Popup markup (included by `manifest.json`)
├── manifest.json         # Chrome extension manifest (v3)
├── package.json          # Project metadata, scripts, devDependencies
└── README.md             # This file
```

## Requirements

- Node.js (recommended LTS, e.g. 18.x or later) and npm (npm comes with Node.js).
- Google Chrome or another Chromium-based browser for local testing.

## Quick setup (developer machine)

Note: the commands below assume a Windows environment with `cmd.exe`. Replace with your preferred shell if needed.

1. Clone repository

    ```bash
    git clone https://github.com/sasaisaschi/cloud_finder_extension.git
    cd cloud_finder_extension
    ```

2. Install dev dependencies

    ```bash
    npm install
    ```

There is no build step — the extension consists of static files that Chrome can load directly.

## Loading the extension locally into Chrome (developer mode)

1. Open Chrome and go to `chrome://extensions`.
2. Enable "Developer mode" (toggle, top-right).
3. Click "Load unpacked" / "Load unpacked extension" and select the repository root folder.
4. Find the "Cloud Finder" extension in the list and pin it to the toolbar if desired.

## Available scripts (from `package.json`)

- `npm test` — Run the Jest unit tests (jsdom environment).
- `npm run lint:js` — Run ESLint on `src` JavaScript files.
- `npm run lint:css` — Run Stylelint on `src/styles` CSS.

Example commands (Windows `cmd.exe`)

- Run tests:

    ```bash
    npm test
    ```

- Run linters:

    ```bash
    npm run lint:js
    npm run lint:css
    ```

## Testing

- The repository includes a small Jest test suite at `tests/popup.test.js` which:
  - verifies the `renderCloudList()` function renders 10 provider entries,
  - verifies each entry contains a link and an image that reference the expected URL and icon.

- Run the tests with `npm test`.

## Permissions & privacy

- Declared permission in `manifest.json`: `activeTab` (minimal). The extension itself does not request broad host permissions.
- The extension contains static links to provider websites and does not make background network requests or collect user data (based on current source). If you add analytics, crash reporting, or remote assets, update the privacy policy and manifest permissions accordingly.

## Store / publishing checklist (status & recommended actions)

The following is a checklist for preparing a Chrome Web Store listing. Items marked "Present" were detected in the repository; items marked "Missing" should be added before publishing.

- Name: Present (`manifest.json` -> `name`: "Cloud Finder") — Consider localizing and using a store-optimized name. (Status: Present)
- Short description (store): Present but currently the `manifest.json` and `package.json` `description` fields are in German. Provide an English short description for the store (max length enforced by the store). (Status: Present -> translate to English)
  - Suggested short description (EN): "Quick access to the top 10 cloud storage services with logos and links."
- Detailed description: Missing (you should prepare a clean, English detailed description for the Chrome Web Store). (Status: Missing)
- Extension icons (16/48/128): Present (`icons/icon16.png`, `icons/icon48.png`, `icons/icon128.png`). (Status: Present)
- Screenshots (at least one): Present (`icons/Screenshot.png`, `icons/Screenshot 2025-07-12 170525.png`) — make sure they match the store's required sizes and show the popup in a real browser window. (Status: Present)
- Promotional images / feature graphic (required for some stores): Missing (Status: Missing)
- Privacy policy URL: Missing — required if you process or transmit any user data; recommended even if you do not. (Status: Missing)
- Support / Help URL: Present via `package.json` -> `bugs.url` and `homepage`. Make sure these links point to a public repo or support page. (Status: Present)
- Category selection, targeted countries, and pricing: store-managed and must be set at publish time.
- Compliance & content policies: Prepare a short privacy statement and ensure you comply with Chrome Web Store policies.

## What to prepare before publishing (recommended tasks)

- Translate the extension `name` and `description` to English and other target locales.
- Write a polished, store-ready Detailed description (English) that includes features, short usage steps, and support info.
- Create/resize screenshots to match store requirements (PNG, recommended dimensions). Provide at least one screenshot that clearly shows the popup UI in Chrome.
- Add a short privacy policy document (GitHub Pages or any public URL) and link it from the store listing. Even if you don't collect data, a short privacy note reduces friction.
- Add a promotional image / feature graphic if you want to appear in curated collections (check store requirements).
- Add CI (GitHub Actions) to run tests & linters on PRs and push badges to the repo README (optional but recommended).

## Suggested short store copy (you can copy & adapt)

Short description: Quick access to the top 10 cloud storage services with logos and direct links.

Detailed description (example):

Cloud Finder puts the most popular cloud storage providers one click away. Open the extension from the browser toolbar and choose a service — each entry shows the provider logo and opens the provider's site in a new tab. Cloud Finder is lightweight, requires no login, and requests minimal permissions.

Usage:

1. Click the Cloud Finder icon in the Chrome toolbar.
2. Select a cloud provider from the list to open it in a new tab.

## Support and feedback

- Issues and feature requests: https://github.com/sasaisaschi/cloud_finder_extension/issues
- Repository / homepage: https://github.com/sasaisaschi/cloud_finder_extension

## Environment variables / configuration

- This extension does not require any environment variables to build or run locally.
- If you add third-party services or analytics, list required environment variables here and add instructions for secure handling (do not check secrets into source control).

## Contributing

Contributions are welcome. Please open issues for bugs or feature requests and send pull requests for fixes or improvements. Basic development flow:

1. Fork the repo
2. Create a feature branch
3. Run tests and linters locally
4. Open a PR with a clear description and link to relevant issues

## License

This project is licensed under the MIT License (see `package.json` -> `license`).

## Maintainer

- Author: Sascha Riemenschneider (as listed in `package.json`).

## Automated checks (quality gates) — suggested additions

- Add a GitHub Actions workflow to run `npm test` and `npm run lint:js` / `npm run lint:css` on pull requests.
- Add README badges for CI, test status and npm version once CI is set up.

## Actionable TODOs (high priority before publishing)

- [ ] Translate `manifest.json` and `package.json` description fields to English for the store listing.
- [ ] Write a store-ready Detailed Description (English).
- [ ] Add or host a Privacy Policy and provide its public URL on the store listing.
- [ ] Prepare at least 1 store-ready screenshot (1280×800 recommended) and an optional promotional image.
- [ ] Consider adding CI (GitHub Actions) to run tests & linters and publish badges.

## Lower priority / optional improvements

- Add an options page if you want users to configure default behavior.
- Add localization / i18n for multiple languages.
- Add analytics only with explicit user consent and document the data flow in a privacy policy.

## Where the repository currently satisfies store requirements

- Minimal manifest (v3) present.
- Popup UI present and interactive (links open in new tab).
- Icons and screenshots included in the repo.
- Minimal permissions requested.

If you want, I can also:

- Draft a polished English Detailed Description for the Chrome Web Store listing.
- Generate suggested privacy policy text you can host on GitHub Pages.
- Produce resized, store-ready screenshots from the existing images (I can provide image specs and recommended crop suggestions).


---

Last inspected files used to generate this README:
- `package.json` (name, version, scripts, author, license)
- `manifest.json` (name, version, description, permissions, icons, popup)
- `popup.html`, `src/popup.js`, `src/styles/*`, `icons/*`, `tests/popup.test.js`

License: MIT
