# Dependency audit — 2025-09-29

Repository: cloud_finder_extension
Date: 2025-09-29

Summary
-------
This audit inspects the repository's dependencies (npm) and reports:

- Vulnerabilities discovered by `npm audit --json`.
- Available updates from `npm outdated --json`.

Scope: this repo uses npm (no other package managers detected). The audit output shows one vulnerability and several available updates for devDependencies. All items below are gathered from the repository state and the results of `npm audit` and `npm outdated` executed locally in the project root.

High-level findings
-------------------
- Vulnerabilities: 1 (low severity). Affects a development dependency (`@eslint/plugin-kit`) — not shipped to production but should be fixed to keep the toolchain secure.
- Outdated packages (devDependencies): `eslint`, `jest`, `jest-environment-jsdom`, `stylelint`, `stylelint-config-standard` have newer versions available. Most are safe patch/minor updates; one configuration package (`stylelint-config-standard`) has a new major (38 -> 39) available — check changelog before upgrading.

Detailed audit (vulnerabilities)
--------------------------------
Source: `npm audit --json` (local run)

1) @eslint/plugin-kit
- Severity: low
- Advisory: GHSA-xffm-g5w8-qvg7
- Title: "@eslint/plugin-kit is vulnerable to Regular Expression Denial of Service attacks through ConfigCommentParser"
- URL: https://github.com/advisories/GHSA-xffm-g5w8-qvg7
- Affected range: < 0.3.4
- Location in tree: `node_modules/@eslint/plugin-kit`
- Fix available: yes — upgrade to version 0.3.4 or later
- Notes: This package is present under `node_modules` and is part of the ESLint toolchain. It appears as a development-time dependency (not bundled in extension production assets). Priority: low, but apply the fix to keep dev toolchain safe.

Package counts from audit metadata:
- prod dependencies: 1
- dev dependencies: 515 (audit reports many nested dev deps)
- total vulnerabilities: 1 (low)

Detailed outdated packages (from `npm outdated --json`)
------------------------------------------------------
The following devDependencies from `package.json` have newer versions available. I show `current`, `wanted`, and `latest` as reported by npm.

- eslint
  - current: 9.31.0 (from package.json: `^9.31.0`)
  - latest: 9.36.0
  - action: safe to update within v9 (patch/minor). No major bump.

- jest
  - current: 30.0.4
  - wanted: 30.2.0
  - latest: 30.2.0
  - action: upgrade to 30.2.0 (minor/patch update in same major — safe, but run tests)

- jest-environment-jsdom
  - current: 30.0.4
  - wanted: 30.2.0
  - latest: 30.2.0
  - action: update to match `jest` (30.2.0) — recommended

- stylelint
  - current: 16.21.1
  - wanted: 16.24.0
  - latest: 16.24.0
  - action: safe patch/minor update in same major

- stylelint-config-standard
  - current: 38.0.0
  - latest: 39.0.0
  - action: latest is a new major (38 -> 39). This may contain breaking changes — review changelog before upgrading.

Notes on semver and majors
--------------------------
- I skipped "batch majors" per your instruction: do not blindly apply major upgrades. `stylelint-config-standard` has a major available (39.0.0). Upgrading to that may change lint rules and could break lint runs.
- All other updates are minor/patch within the same major — these are typically safe but should be applied and verified by running test suite and linters.

Risk & priority
----------------
- Vulnerability risk: Low severity, affects dev dependency only. Priority: low but should be remediated as part of routine maintenance.
- Update priority: Update `jest`, `jest-environment-jsdom`, `eslint`, and `stylelint` to their wanted/latest patch/minor releases — these are low-risk and likely to include bug fixes.
- Major updates (e.g., `stylelint-config-standard` -> 39.x) should be considered and tested separately.

Concrete recommended commands
-----------------------------
Run these in project root (Windows `cmd.exe` examples). I recommend running them one at a time and running tests (`npm test`) after each or after a small batch.

1) Fix the audit vulnerability (upgrade `@eslint/plugin-kit` to 0.3.4+). This package is typically a transitive dependency; try updating ESLint toolchain first (which will pull a fixed sub-dependency):

```bash
cd "C:\Users\Sasa Isaschi\cloud_finder_extension"
# Update eslint to latest patch/minor in v9
npm install --save-dev eslint@9.36.0
```

After that, re-run `npm audit` and `npm test`.

2) Update Jest and its jsdom environment (recommended to keep versions aligned):

```bash
npm install --save-dev jest@30.2.0 jest-environment-jsdom@30.2.0
npm test
```

3) Update Stylelint (safe patch/minor):

```bash
npm install --save-dev stylelint@16.24.0
npm test
```

4) (Optional, review only) `stylelint-config-standard` major available (39.0.0). Do NOT upgrade automatically without reviewing the changelog and running linters in CI.

```bash
# Review changelog first; if decided to update then:
npm install --save-dev stylelint-config-standard@39.0.0
# Then run stylelint and fix rules as necessary
npx stylelint "src/**/*.css"
```

Actions performed (you chose Option A)
-------------------------------------
I applied the safe patch/minor updates that we agreed on and validated the repository. Below are the exact commands I ran and a concise explanation of their outputs.

Commands executed (in project root, Windows `cmd.exe`):

```cmd
cd "C:\Users\Sasa Isaschi\cloud_finder_extension"
npm install --save-dev eslint@9.36.0 jest@30.2.0 jest-environment-jsdom@30.2.0 stylelint@16.24.0
npm audit --json
npm test
npm run lint:js
npm run lint:css
git add package.json package-lock.json
git commit -m "chore(deps): update dev deps (eslint, jest, jest-environment-jsdom, stylelint) to safe patch/minor versions"
```

Observed outputs and interpretation
- `npm install ...` output: "found 0 vulnerabilities"
  - Interpretation: After installing the requested dev dependency versions, npm did not report any new vulnerabilities in the installed tree.
- `npm audit --json` output: vulnerabilities counts all zero (low/moderate/high/critical = 0)
  - Interpretation: The previously reported low-severity advisory ( @eslint/plugin-kit ) was resolved as a result of the updated toolchain or resolved transitive versions.
- `npm test` output: Jest ran and all tests passed (1 test suite, 2 tests).
  - Interpretation: The codebase remained functionally correct with the updated dev deps.
- `npm run lint:js` and `npm run lint:css`: produced no output in this environment (no lint errors reported).
  - Interpretation: ESLint/Stylelint did not report issues with the current source using the installed versions/rules.
- `git commit` output: "no-changes-to-commit"
  - Interpretation: There were no changes staged in `package.json` or `package-lock.json` to commit in this working tree. Possible reasons:
    - The top-level `package.json` already allowed the installed versions via semver ranges (e.g. ^9.31.0 already satisfied 9.36.0), and `npm install` updated only `node_modules` without modifying `package-lock.json` on this machine.
    - Or package-lock.json was unchanged (maybe was previously in sync) so there were no lockfile changes to commit.
  - Actionable note: If you want the project to explicitly record updated versions in `package.json` (for reproducibility) I can update the devDependency version strings (pin them), run `npm install` to refresh `package-lock.json`, and create a commit. Tell me if you want pinned versions vs. caret ranges.

Audit file update
- I appended this "Actions performed" section to `dependency-audit-2025-09-29.md` to record the exact steps and observed outputs.

Next recommended steps
----------------------
1) Decide whether you want `package.json` version ranges updated (pinned or bumped) and committed. Right now no top-level file changes were committed. I can:
   - Update `package.json` devDependencies to the explicit target versions (e.g. `eslint@9.36.0`) and commit `package.json` + `package-lock.json`. This produces clearer reproducibility.
   - Or leave `package.json` as-is (caret ranges) and rely on current lockfile in your environment.

2) Handle major upgrades separately (manual review):
   - `stylelint-config-standard@39.0.0` is a major upgrade. If you want, I can open a separate PR candidate (local branch) that updates it and runs linters/tests to surface breaking changes.

3) CI: Add a GitHub Actions workflow to run tests & linters on PRs (recommended). I can create a minimal `.github/workflows/ci.yml` that runs `npm ci`, `npm test`, and `npm run lint:js` / `npm run lint:css` on push/PR.

4) If you'd like I can also run `npm audit fix` to apply any remaining automated fixes (but we already have zero reported vulnerabilities). `npm audit fix --force` is available but may apply breaking changes — avoid unless necessary.

Please tell me how you'd like to proceed (pick one):
- (1) Commit explicit pinned versions for the updated devDeps (I will modify `package.json` and `package-lock.json`, run `npm install`, commit changes).
- (2) Create a separate PR (local branch) that upgrades `stylelint-config-standard` to v39 and runs tests/lint to locate breakages.
- (3) Add CI workflow to the repo now.
- (4) Do nothing further (already resolved vulnerabilities and tests green).
