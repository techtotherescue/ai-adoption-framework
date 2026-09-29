#!/usr/bin/env node
/**
 * node scripts/release.mjs <version>
 *
 * Inserts a new release entry skeleton into CHANGELOG.md, above the first
 * already-released entry: a heading dated today, a `Changes:` placeholder,
 * the SHA-256 hash of the v<major>.md / v<major>.json pair matching
 * <version>'s major (scripts/check.mjs's `computeReleaseHash`, same recipe
 * as `cat v<major>.md v<major>.json | shasum -a 256`), and `Approved: TODO`.
 *
 * This script writes `Approved: TODO` and nothing more — it never writes a
 * name into `Approved:`. That line is written by hand, by an author, once
 * the release is genuinely approved (RELEASING.md). `Approved: TODO` fails
 * scripts/check.mjs with a message saying so, on purpose.
 *
 * Refuses when <version> is not strictly greater than the newest version
 * already recorded in CHANGELOG.md, or when v<major>.md / v<major>.json for
 * <version>'s major does not exist in the repo.
 *
 * Env:
 *   FRAMEWORK_CHECK_ROOT   overrides the repo root this script writes into
 *                          (default: the parent of this script's directory).
 *                          Used by tests to point this at a scratch copy.
 *
 * MIT, see LICENSE-CODE
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { computeReleaseHash } from "./check.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = process.env.FRAMEWORK_CHECK_ROOT
  ? path.resolve(process.env.FRAMEWORK_CHECK_ROOT)
  : path.resolve(__dirname, "..");

const arg = process.argv[2];
if (!arg || !/^\d+\.\d+\.\d+$/.test(arg)) {
  console.error("Usage: node scripts/release.mjs <version>  (e.g. 6.0.1)");
  process.exit(1);
}
const version = arg;
const major = Number(version.split(".")[0]);

const mdPath = path.join(ROOT, `v${major}.md`);
const jsonPath = path.join(ROOT, `v${major}.json`);
try {
  readFileSync(mdPath);
  readFileSync(jsonPath);
} catch {
  console.error(
    `No v${major}.md / v${major}.json pair in ${ROOT} for major ${major} — refusing.`,
  );
  process.exit(1);
}

const changelogPath = path.join(ROOT, "CHANGELOG.md");
const changelog = readFileSync(changelogPath, "utf8");

const parseVer = (v) => v.split(".").map(Number);
const cmpVer = (a, b) => {
  const [a1, a2, a3] = parseVer(a);
  const [b1, b2, b3] = parseVer(b);
  return a1 - b1 || a2 - b2 || a3 - b3;
};

const RELEASE_HEADING_G = /^## (\d+\.\d+\.\d+) — (\d{4}-\d{2}-\d{2})$/gm;
const existingVersions = [...changelog.matchAll(RELEASE_HEADING_G)].map(
  (m) => m[1],
);
const newest = existingVersions.reduce(
  (best, v) => (best === null || cmpVer(v, best) > 0 ? v : best),
  null,
);

if (newest !== null && cmpVer(version, newest) <= 0) {
  console.error(
    `${version} is not greater than the newest released entry (${newest}) — refusing.`,
  );
  process.exit(1);
}

const hash = computeReleaseHash(ROOT, major);
const today = new Date();
const date = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

const skeleton =
  `## ${version} — ${date}\n\n` +
  `Changes: <describe what changed in v${major}.md / v${major}.json since ${newest ?? "(first release)"}>\n\n` +
  `SHA-256: ${hash}\n\n` +
  `Approved: TODO\n\n`;

const firstReleaseHeading = changelog.match(
  /^## \d+\.\d+\.\d+ — \d{4}-\d{2}-\d{2}$/m,
);
let updatedChangelog;
if (firstReleaseHeading && firstReleaseHeading.index !== undefined) {
  const insertAt = firstReleaseHeading.index;
  updatedChangelog =
    changelog.slice(0, insertAt) + skeleton + changelog.slice(insertAt);
} else {
  // No released entry yet: append at the end of the file.
  const sep = changelog.endsWith("\n\n")
    ? ""
    : changelog.endsWith("\n")
      ? "\n"
      : "\n\n";
  updatedChangelog = changelog + sep + skeleton;
}
writeFileSync(changelogPath, updatedChangelog);

console.log(`Inserted "## ${version} — ${date}" into CHANGELOG.md`);
console.log(`SHA-256: ${hash}`);
console.log(
  "Write the Changes: line and the Approved: line by hand before this release ships.",
);
