#!/usr/bin/env node
/**
 * Guards the framework as data (v<N>.md, the prose; v<N>.json, its stable
 * condition identifiers) against itself, and guards CHANGELOG.md's release
 * record against both.
 *
 * For every v<N>.md / v<N>.json pair present in the repo root (there is only
 * v6 today, but nothing here is hardcoded to that):
 *   - every condition's text appears verbatim (case/punctuation-insensitive)
 *     under its own heading in v<N>.md, not just somewhere in the document;
 *   - ids are unique, well-formed as "<list>.<n>", and numbered 1..count
 *     without gaps;
 *   - each list's declared `count` matches both the number of conditions in
 *     v<N>.json and the number of "- " bullets found under its heading in
 *     v<N>.md;
 *   - the domain named by each "flag.<slug>" list's own heading matches the
 *     domain table in v<N>.md §6 "Adoption Capacity Domains".
 *
 * v6.json files each list under one heading. From v7 on, a list's conditions
 * can sit in several places (a placement table, a readiness checklist,
 * typical traits), so each condition carries its own `where` ("<H2> › <H3>"
 * or "<H2> › <H3> › <bold label>"), a `role`, and, in lists declaring
 * `domains: true`, a `domain`. For such a file:
 *   - a condition whose role is "placement" or "required" appears in a
 *     table row under its `where`; every other condition is a "- " bullet,
 *     and the bullets under each `where` are exactly its conditions, in
 *     list and id order;
 *   - every `role` is one the file's `roles` declares; every `domain` is one
 *     of the major's domains, and a flag's domain is its list's slug;
 *   - ids may skip a number only where the crosswalk retires that id;
 *   - the `crosswalk` from the previous major names every one of its ids
 *     exactly once: kept (its `to` includes itself, the condition exists
 *     with the same text) or retired (it does not, and the id is not used);
 *     every `to` id exists. A major whose predecessor's v<N-1>.json is in
 *     the repo must have a crosswalk.
 *
 * From v8 on, each `roles` entry is an object saying whether its conditions
 * sit in table rows (`table`) and carry a capacity domain (`domain`) and an
 * Adoption Loop step (`loop_step`); the domain belongs to the role, not the
 * list, and there are no flag lists. For such a file:
 *   - a condition carries a domain and a loop_step exactly when its role
 *     says so; a loop_step is a step §4 names. Only the team's agreement
 *     has no step: the conditions without one share one `applies` clause;
 *   - every table holding conditions has "Domain" and "Loop step" columns,
 *     and each condition's row shows its domain (the first word of the
 *     domain's name; "Stage line" for the stage line; "—" otherwise) and its
 *     step ("—" for none);
 *   - a placement table's "Identifier" column names the condition(s) in
 *     each row; a readiness table's rows are exactly its conditions, in list
 *     and id order, each reading "<applies>: <text>" where it has `applies`
 *     ("Where …");
 *   - conditions that one row merges into one name carry, as `condition`,
 *     the id of one of them; they share one row, role, domain, and step;
 *   - ids may also skip a number an earlier major's crosswalk retired.
 *
 * Then the CHANGELOG.md release record:
 *   - release headings read "## X.Y.Z — YYYY-MM-DD" (em dash) and every
 *     released entry appears in descending version order;
 *   - every v<N>.md/v<N>.json pair present has at least one released entry
 *     — an unreleased draft has no place in a released-only repository;
 *   - the newest entry for EACH major present has a `SHA-256:` line matching
 *     sha256(bytes(v<major>.md) + bytes(v<major>.json)) — verifiable by hand
 *     with:
 *       cat v6.md v6.json | shasum -a 256
 *   - EVERY released entry has a genuine `Approved:` line ("Name (where)"
 *     items, separated by ";", naming only Jacek Siadkowski and/or
 *     Radosław Taraszka): one approver for a patch release, both for a
 *     minor or major release, compared with the nearest older released
 *     entry — except the very first entry ever recorded, which has no
 *     older entry to compare against and needs only one approver. This
 *     script never writes that line itself — only scripts/release.mjs
 *     writes the surrounding skeleton, and it always writes
 *     `Approved: TODO`, never a name.
 *
 * Usage:
 *   node scripts/check.mjs
 *
 * Env:
 *   FRAMEWORK_CHECK_ROOT   overrides the repo root this script checks
 *                          (default: the parent of this script's directory).
 *                          Used by tests to point this at a scratch copy.
 *
 * Exit code 1 on any failure.
 *
 * MIT, see LICENSE-CODE
 */
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, realpathSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = process.env.FRAMEWORK_CHECK_ROOT
  ? path.resolve(process.env.FRAMEWORK_CHECK_ROOT)
  : path.resolve(__dirname, "..");

if (process.env.FRAMEWORK_CHECK_ROOT) {
  console.log(
    `   ⚠ TESTING OVERRIDE — checking the repo at ${ROOT}, not this script's own location\n`,
  );
}

let failures = 0;
const check = (name, ok, detail) => {
  if (ok) console.log(`   PASS  ${name}`);
  else {
    failures += 1;
    console.error(`   FAIL  ${name}${detail ? ` — ${detail}` : ""}`);
  }
};

/** The source is prose: punctuation, case and the Oxford comma vary. */
const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Body of a section, from its heading to the next one. Starts the search for
 * the closing heading *after* the opening heading's own line — otherwise the
 * opening heading matches the terminator and the section reads as empty.
 */
const between = (src, from, to) => {
  const a = src.search(from);
  if (a < 0) return "";
  const bodyStart = src.indexOf("\n", a) + 1;
  const b = src.slice(bodyStart).search(to);
  return src.slice(bodyStart, b < 0 ? undefined : bodyStart + b);
};

/**
 * The release hash: sha256 over the raw bytes of v<major>.md followed by the
 * raw bytes of v<major>.json, concatenated and hashed once — not hashed
 * separately, not read as text. Exported so scripts/release.mjs computes the
 * same hash it writes into the CHANGELOG.md skeleton.
 */
export function computeReleaseHash(root, major) {
  const md = readFileSync(path.join(root, `v${major}.md`));
  const json = readFileSync(path.join(root, `v${major}.json`));
  return createHash("sha256")
    .update(Buffer.concat([md, json]))
    .digest("hex");
}

/**
 * The seven capacity domains a "flag.<slug>" list can belong to, keyed by
 * major version. Source: v<major>.md §6 "Adoption Capacity Domains" (the
 * domain table) and §7 "Fragility Flags" (subheadings, same order/names).
 * These names don't change mechanically from the data, so they are named
 * here by hand; an unrecognised major fails loudly rather than skipping the
 * check.
 */
const DOMAIN_NAMES_BY_MAJOR = {
  6: {
    leadership_ownership: "Leadership and ownership",
    people_workflows_change: "People, workflows, and change",
    data_context: "Data and organizational context",
    technology_resilience: "Technology, implementation, and resilience",
    governance_risk: "Governance, risk, and accountability",
    evidence_learning: "Evidence and learning",
    resources_sustainability: "Resources and sustainability",
  },
};
DOMAIN_NAMES_BY_MAJOR[7] = DOMAIN_NAMES_BY_MAJOR[6];
DOMAIN_NAMES_BY_MAJOR[8] = DOMAIN_NAMES_BY_MAJOR[6];

function discoverMajors(root) {
  const entries = readdirSync(root);
  const mdMajors = new Set();
  const jsonMajors = new Set();
  for (const e of entries) {
    const mMd = e.match(/^v(\d+)\.md$/);
    if (mMd) mdMajors.add(Number(mMd[1]));
    const mJson = e.match(/^v(\d+)\.json$/);
    if (mJson) jsonMajors.add(Number(mJson[1]));
  }
  const all = [...new Set([...mdMajors, ...jsonMajors])].sort((a, b) => a - b);
  const majors = [];
  for (const n of all) {
    const hasMd = mdMajors.has(n);
    const hasJson = jsonMajors.has(n);
    check(
      `v${n}: both v${n}.md and v${n}.json are present`,
      hasMd && hasJson,
      !hasMd ? `v${n}.md is missing` : `v${n}.json is missing`,
    );
    if (hasMd && hasJson) majors.push(n);
  }
  return majors;
}

function checkMajor(root, major) {
  console.log(
    `\n── v${major}: conditions in v${major}.json against v${major}.md`,
  );
  const md = readFileSync(path.join(root, `v${major}.md`), "utf8");
  const flat = norm(md);
  const has = (phrase) => flat.includes(norm(phrase));
  const data = JSON.parse(
    readFileSync(path.join(root, `v${major}.json`), "utf8"),
  );
  const { lists, conditions } = data;
  const located = conditions.some((c) => "where" in c);
  // From v8 on, each role says where its conditions sit and what they carry.
  const typed = Object.values(data.roles ?? {}).some(
    (r) => typeof r === "object",
  );
  // Ids this crosswalk retires, and those an earlier major's crosswalk
  // retired (v8 still has no S3.signal.1, which v7 retired).
  const retired = new Set();
  for (let k = 1; k <= major; k++) {
    let cw = data.crosswalk;
    if (k < major) {
      try {
        cw = JSON.parse(
          readFileSync(path.join(root, `v${k}.json`), "utf8"),
        ).crosswalk;
      } catch {
        continue;
      }
    }
    for (const e of cw?.entries ?? [])
      if (!e.to?.includes(e.id)) retired.add(e.id);
  }

  // 1. every condition's text appears verbatim (same normalization as above)
  //    somewhere in v<major>.md.
  for (const c of conditions) {
    check(
      `${c.id} text is in v${major}.md`,
      has(c.text),
      `not found verbatim in v${major}.md:\n            "${c.text}"`,
    );
  }

  // 2. ids are unique across the whole file.
  const seen = new Set();
  let duplicateIds = 0;
  for (const c of conditions) {
    if (seen.has(c.id)) duplicateIds += 1;
    seen.add(c.id);
  }
  check(
    `all ${conditions.length} ids are unique`,
    duplicateIds === 0,
    `${duplicateIds} duplicate id(s) found`,
  );

  // every condition's `list` is one that `lists[]` actually declares.
  const declaredLists = new Set(lists.map((l) => l.list));
  const unfiled = conditions.filter((c) => !declaredLists.has(c.list));
  check(
    "every condition's `list` is declared in `lists[]`",
    unfiled.length === 0,
    `unfiled: ${unfiled.map((c) => `${c.id} → list:${c.list}`).join(", ")}`,
  );

  // 3. ids well-formed and numbered 1..count without gaps, per list. Every id
  //    in this data is exactly its own list name + "." + a number (S1.def.3,
  //    flag.data_context.2, T12.5, …), so one generic rule covers well-
  //    formedness, uniqueness of numbering and list-prefix matching without
  //    naming any particular list family.
  for (const list of lists) {
    const entries = conditions.filter((c) => c.list === list.list);
    const idRe = new RegExp(`^${escapeRegExp(list.list)}\\.(\\d+)$`);
    const malformed = entries.filter((c) => !idRe.test(c.id));
    check(
      `${list.list}: all ids well-formed (${list.list}.<n>)`,
      malformed.length === 0,
      `malformed ids: ${malformed.map((c) => c.id).join(", ")}`,
    );

    const numbers = entries
      .map((c) => Number(c.id.match(idRe)?.[1]))
      .filter((n) => !Number.isNaN(n))
      .sort((a, b) => a - b);
    const max = numbers.length ? numbers[numbers.length - 1] : 0;
    const want = Array.from({ length: max }, (_, i) => i + 1).filter(
      (n) => !retired.has(`${list.list}.${n}`),
    );
    check(
      `${list.list}: numbered 1..${max} without gaps${retired.size ? ", except retired ids" : ""}`,
      numbers.length === want.length && numbers.every((n, i) => n === want[i]),
      `found numbering [${numbers.join(", ")}]`,
    );
  }

  // 4. count per list equals `lists[].count`; total equals the sum.
  for (const list of lists) {
    const actual = conditions.filter((c) => c.list === list.list).length;
    check(
      `${list.list}: count is ${list.count}`,
      actual === list.count,
      `v${major}.json has ${actual} condition(s)`,
    );
  }
  const declaredTotal = lists.reduce((sum, l) => sum + l.count, 0);
  check(
    `total conditions (${conditions.length}) equal the sum of list counts (${declaredTotal})`,
    conditions.length === declaredTotal,
    `${conditions.length} conditions vs a declared sum of ${declaredTotal}`,
  );
  console.log(
    `   … v${major}.json declares ${conditions.length} conditions across ${lists.length} lists`,
  );

  // 5. list/heading consistency: each `lists[].heading` reads "<H2> ›
  //    <H3>"; resolve that path in v<major>.md and check that the "- "
  //    bullets found there, in order, are exactly this list's conditions —
  //    stronger than checking that a condition's text merely appears
  //    *somewhere* in the document, since it also pins each condition to
  //    its own declared section. A file whose conditions carry `where`
  //    (v7 on) is checked per condition instead, by checkLocated.
  const h2Headings = [...md.matchAll(/^## (.+)$/gm)];
  if (located) checkLocated(md, data, major, typed);
  if (typed) checkTyped(md, data, major);
  for (const list of located ? [] : lists) {
    const parts = list.heading.split(" › ");
    if (parts.length !== 2) {
      check(
        `${list.list}: heading "${list.heading}" is "<H2> › <H3>"`,
        false,
        'expected exactly one " › " separator',
      );
      continue;
    }
    const [h2Text, h3Text] = parts;
    const h2 = h2Headings.find((m) => m[1].trim() === h2Text.trim());
    check(
      `${list.list}: "## ${h2Text}" exists in v${major}.md`,
      !!h2,
      "heading not found",
    );
    if (!h2) continue;

    const h2Start = h2.index + h2[0].length;
    const nextH2 = h2Headings.find((m) => m.index > h2.index);
    const h2Body = md.slice(h2Start, nextH2 ? nextH2.index : md.length);

    const h3Headings = [...h2Body.matchAll(/^### (.+)$/gm)];
    const h3 = h3Headings.find((m) => m[1].trim() === h3Text.trim());
    check(
      `${list.list}: "### ${h3Text}" exists under "## ${h2Text}"`,
      !!h3,
      "heading not found in that section",
    );
    if (!h3) continue;

    const h3Start = h3.index + h3[0].length;
    const nextH3 = h3Headings.find((m) => m.index > h3.index);
    const h3Body = h2Body.slice(h3Start, nextH3 ? nextH3.index : h2Body.length);

    const bullets = [...h3Body.matchAll(/^- (.+)$/gm)].map((m) => m[1]);
    check(
      `${list.list}: ${list.count} bullet(s) found under "${list.heading}"`,
      bullets.length === list.count,
      `found ${bullets.length}`,
    );

    const orderedEntries = conditions
      .filter((c) => c.list === list.list)
      .sort(
        (a, b) =>
          Number(a.id.slice(a.id.lastIndexOf(".") + 1)) -
          Number(b.id.slice(b.id.lastIndexOf(".") + 1)),
      );
    const bulletsNorm = bullets.map(norm);
    let orderOk = orderedEntries.length === bullets.length;
    if (orderOk) {
      for (let i = 0; i < orderedEntries.length; i++) {
        if (bulletsNorm[i] !== norm(orderedEntries[i].text)) {
          orderOk = false;
          break;
        }
      }
    }
    check(
      `${list.list}: bullets under "${list.heading}" match v${major}.json, in order`,
      orderOk,
      `v${major}.md: [${bullets.join(" | ")}]\n            v${major}.json: [${orderedEntries.map((c) => c.text).join(" | ")}]`,
    );
  }

  // 6. domains in flag ids: the slug in each "flag.<slug>" list must name
  //    the same domain as its own "### " subheading (§7) and appear in
  //    the domain table (§6).
  const domainNames = DOMAIN_NAMES_BY_MAJOR[major];
  check(
    `v${major}: has a domain-name table for its ${typed ? "conditions" : "flag lists"}`,
    !!domainNames,
    `no domain list for v${major} — add DOMAIN_NAMES_BY_MAJOR[${major}] to scripts/check.mjs`,
  );
  // A v8 file has no flag lists; checkTyped reads its domains instead.
  if (domainNames && !typed) {
    const domainSection = between(
      md,
      /^## 6\. Adoption Capacity Domains/m,
      /^## 7\./m,
    );
    const flagLists = lists.filter((l) => l.list.startsWith("flag."));
    const declaredSlugs = Object.keys(domainNames).sort();
    const actualSlugs = flagLists
      .map((l) => l.list.slice("flag.".length))
      .sort();
    check(
      `v${major}: flag.* slugs match the declared domain list (${declaredSlugs.length})`,
      declaredSlugs.length === actualSlugs.length &&
        declaredSlugs.every((s, i) => s === actualSlugs[i]),
      `v${major}.json: [${actualSlugs.join(", ")}] vs declared: [${declaredSlugs.join(", ")}]`,
    );

    for (const list of flagLists) {
      const slug = list.list.slice("flag.".length);
      const name = domainNames[slug];
      check(
        `flag.${slug}: has a declared domain name`,
        !!name,
        `slug not in DOMAIN_NAMES_BY_MAJOR[${major}]`,
      );
      if (!name) continue;
      const heading =
        list.heading ??
        conditions.find((c) => c.list === list.list)?.where ??
        "";
      const h3Text = heading.split(" › ")[1] ?? "";
      check(
        `flag.${slug}: heading "${h3Text}" matches domain "${name}"`,
        norm(h3Text) === norm(name),
        `heading says "${h3Text}"`,
      );
      check(
        `flag.${slug}: domain "${name}" is in the §6 domain table`,
        domainSection.includes(name),
        `"${name}" not found in the "6. Adoption Capacity Domains" section of v${major}.md`,
      );
    }
  }

  checkCrosswalk(root, major, data);
}

/**
 * The text a `where` path points to: the body of "## <H2>" › "### <H3>",
 * narrowed, when the path has a third part, to the paragraph that opens
 * with that bold label and what follows it up to the next bold label. With
 * no label, the body stops at the first bold label, so a placement table is
 * read without the checklists below it.
 */
function resolveWhere(md, where) {
  const [h2Text, h3Text, label] = where.split(" › ");
  const h2s = [...md.matchAll(/^## (.+)$/gm)];
  const h2i = h2s.findIndex((m) => m[1].trim() === h2Text);
  if (h2i < 0 || !h3Text) return null;
  const h2Body = md.slice(h2s[h2i].index, h2s[h2i + 1]?.index ?? md.length);
  const h3s = [...h2Body.matchAll(/^### (.+)$/gm)];
  const h3i = h3s.findIndex((m) => m[1].trim() === h3Text);
  if (h3i < 0) return null;
  const lines = h2Body
    .slice(h3s[h3i].index, h3s[h3i + 1]?.index ?? h2Body.length)
    .split("\n")
    .slice(1);
  const labelAt = (l) => l.match(/^\*\*([^*]+?)\.?\*\*/)?.[1];
  const start = label ? lines.findIndex((l) => labelAt(l) === label) : 0;
  if (start < 0) return null;
  const end = lines.findIndex((l, i) => i > start && labelAt(l) !== undefined);
  return lines.slice(start, end < 0 ? undefined : end);
}

function checkLocated(md, data, major, typed) {
  const { conditions, lists, roles = {} } = data;
  const TABLE_ROLES = typed
    ? new Set(Object.keys(roles).filter((r) => roles[r].table))
    : new Set(["placement", "required"]);
  const domainNames = DOMAIN_NAMES_BY_MAJOR[major] ?? {};
  const listOrder = (c) => lists.findIndex((l) => l.list === c.list);
  const num = (c) => Number(c.id.slice(c.id.lastIndexOf(".") + 1));

  for (const c of conditions) {
    check(
      `${c.id}: role "${c.role}" is declared in \`roles\``,
      Object.hasOwn(roles, c.role ?? ""),
      `declared: ${Object.keys(roles).join(", ")}`,
    );
  }

  const byWhere = new Map();
  for (const c of conditions) {
    if (!byWhere.has(c.where)) byWhere.set(c.where, []);
    byWhere.get(c.where).push(c);
  }
  for (const [where, group] of byWhere) {
    const body = resolveWhere(md, where ?? "");
    check(`"${where}" exists in v${major}.md`, !!body, "path not found");
    if (!body) continue;

    for (const c of group.filter((c) => TABLE_ROLES.has(c.role))) {
      check(
        `${c.id}: in a table row under "${where}"`,
        body.some((l) => l.startsWith("|") && norm(l).includes(norm(c.text))),
        `not found verbatim in a table row:\n            "${c.text}"`,
      );
    }

    const listed = group
      .filter((c) => !TABLE_ROLES.has(c.role))
      .sort((a, b) => listOrder(a) - listOrder(b) || num(a) - num(b));
    if (listed.length === 0) continue;
    const bullets = body
      .filter((l) => l.startsWith("- "))
      .map((l) => norm(l.slice(2)));
    check(
      `"${where}": ${listed.length} bullet(s), matching v${major}.json in order`,
      bullets.length === listed.length &&
        listed.every((c, i) => bullets[i] === norm(c.text)),
      `v${major}.md: [${bullets.join(" | ")}]\n            v${major}.json: [${listed.map((c) => c.text).join(" | ")}]`,
    );
  }

  // v7: a list declares domains. v8: a role does (checkTyped).
  for (const list of typed ? [] : lists) {
    const own = conditions.filter((c) => c.list === list.list);
    if (list.domains) {
      const bad = own.filter(
        (c) => !Object.hasOwn(domainNames, c.domain ?? ""),
      );
      check(
        `${list.list}: every condition has one of the ${Object.keys(domainNames).length} domains`,
        bad.length === 0,
        `missing or unknown: ${bad.map((c) => `${c.id}=${c.domain}`).join(", ")}`,
      );
    } else {
      const stray = own.filter((c) => "domain" in c);
      check(
        `${list.list}: no domain (the list does not declare domains)`,
        stray.length === 0,
        `has a domain: ${stray.map((c) => c.id).join(", ")}`,
      );
    }
    if (list.list.startsWith("flag.")) {
      const slug = list.list.slice("flag.".length);
      const off = own.filter((c) => c.domain !== slug);
      check(
        `${list.list}: every flag's domain is "${slug}"`,
        off.length === 0,
        `differs: ${off.map((c) => `${c.id}=${c.domain}`).join(", ")}`,
      );
    }
  }
}

/**
 * From v8 on, `roles` maps each role to { description, table, domain,
 * loop_step }: whether its conditions sit in table rows, and whether each
 * carries a capacity domain and an Adoption Loop step. In v<major>.md every
 * table holding conditions has "Domain" and "Loop step" columns; a
 * placement table also has an "Identifier" column naming the condition(s)
 * in each row. A row can hold several conditions that count as one: they
 * name, as `condition`, the id of one of them. A condition that applies
 * only in some cases carries the clause as `applies` ("Where …"), and its
 * row reads "<applies>: <text>".
 */
function checkTyped(md, data, major) {
  const { conditions, lists, roles } = data;
  const domainNames = DOMAIN_NAMES_BY_MAJOR[major] ?? {};
  const short = (slug) => domainNames[slug]?.split(/[ ,]/)[0];
  const steps = [
    ...between(md, /^## 4\. /m, /^## 5\./m).matchAll(/^### Step (\d+):/gm),
  ].map((m) => Number(m[1]));
  const full = (c) => (c.applies ? `${c.applies}: ${c.text}` : c.text);
  const listOrder = (c) => lists.findIndex((l) => l.list === c.list);
  const num = (c) => Number(c.id.slice(c.id.lastIndexOf(".") + 1));
  const ids = (c) => c.map((x) => x.id).join(", ");

  const domainSection = between(
    md,
    /^## 6\. Adoption Capacity Domains/m,
    /^## 7\./m,
  );
  const absent = Object.values(domainNames).filter(
    (n) => !domainSection.includes(n),
  );
  check(
    `v${major}: the ${Object.keys(domainNames).length} domains are in the §6 domain table`,
    absent.length === 0,
    `not found: ${absent.join(", ")}`,
  );

  for (const [role, rule] of Object.entries(roles)) {
    const own = conditions.filter((c) => c.role === role);
    const bad = rule.domain
      ? own.filter((c) => !Object.hasOwn(domainNames, c.domain ?? ""))
      : own.filter((c) => "domain" in c);
    check(
      rule.domain
        ? `${role}: every condition has one of the ${Object.keys(domainNames).length} domains`
        : `${role}: no condition has a domain`,
      bad.length === 0,
      bad.map((c) => `${c.id}=${c.domain}`).join(", "),
    );
    const badStep = rule.loop_step
      ? own.filter((c) => "loop_step" in c && !steps.includes(c.loop_step))
      : own.filter((c) => "loop_step" in c);
    check(
      rule.loop_step
        ? `${role}: every loop_step is a step §4 names (${steps.join(", ")})`
        : `${role}: no condition has a loop_step`,
      badStep.length === 0,
      badStep.map((c) => `${c.id}=${c.loop_step}`).join(", "),
    );
  }
  // Only the team's agreement has no step (§5); its rows share one clause.
  const stepless = conditions.filter(
    (c) => roles[c.role]?.loop_step && !("loop_step" in c),
  );
  const clauses = new Set(stepless.map((c) => c.applies));
  check(
    `the ${stepless.length} condition(s) without a loop_step share one \`applies\` clause`,
    stepless.length === 0 || (clauses.size === 1 && !clauses.has(undefined)),
    stepless.map((c) => `${c.id}: ${c.applies ?? "(none)"}`).join("; "),
  );
  const badApplies = conditions.filter(
    (c) => "applies" in c && !/^Where \S/.test(c.applies),
  );
  check(
    'every `applies` reads "Where …"',
    badApplies.length === 0,
    ids(badApplies),
  );

  const groups = new Map();
  for (const c of conditions.filter((c) => "condition" in c)) {
    if (!groups.has(c.condition)) groups.set(c.condition, []);
    groups.get(c.condition).push(c);
  }
  for (const [g, members] of groups) {
    const same = (k) => members.every((c) => c[k] === members[0][k]);
    check(
      `condition ${g} (${ids(members)}): one where, role, domain, and loop_step`,
      members.length > 1 &&
        members.some((c) => c.id === g) &&
        ["where", "role", "domain", "loop_step"].every(same),
      members.length > 1
        ? "they differ, or it is not the id of one of them"
        : "a merged condition needs at least two ids",
    );
  }

  const byWhere = new Map();
  for (const c of conditions.filter((c) => roles[c.role]?.table)) {
    if (!byWhere.has(c.where)) byWhere.set(c.where, []);
    byWhere.get(c.where).push(c);
  }
  for (const [where, group] of byWhere) {
    const body = resolveWhere(md, where ?? "");
    if (!body) continue; // checkLocated reports the missing path
    const cells = (l) =>
      l
        .split("|")
        .slice(1, -1)
        .map((s) => s.trim());
    const rows = [];
    let header = null;
    for (const l of body) {
      if (!l.startsWith("|")) header = null;
      else if (!header) header = cells(l);
      else if (!/^\|[\s:|-]+\|$/.test(l))
        rows.push({ header, cells: cells(l) });
    }
    const shapes = new Set(
      rows.map(
        (r) =>
          r.cells.length === r.header.length &&
          r.header.includes("Domain") &&
          r.header.includes("Loop step"),
      ),
    );
    check(
      `"${where}": every table row has its header's cells, among them Domain and Loop step`,
      rows.length > 0 && !shapes.has(false),
      `headers: ${[...new Set(rows.map((r) => r.header.join(" | ")))].join(" / ")}`,
    );

    // Where the table names its ids, find each condition by id; otherwise
    // the rows are exactly the conditions, in list and id order.
    const rowOf = new Map();
    const named = rows.filter((r) => r.header.includes("Identifier"));
    if (named.length) {
      const idsIn = (r) =>
        r.cells[r.header.indexOf("Identifier")]
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
      const known = new Set(group.map((c) => c.id));
      const stray = named.flatMap(idsIn).filter((id) => !known.has(id));
      check(
        `"${where}": every id in the Identifier column is a condition placed here`,
        stray.length === 0,
        `not in v${major}.json under this where: ${stray.join(", ")}`,
      );
      for (const c of group) {
        const r = named.find((r) => idsIn(r).includes(c.id));
        check(
          `${c.id}: its row under "${where}" names it and holds its text`,
          !!r && norm(r.cells[0]).includes(norm(full(c))),
          r ? `row: "${r.cells[0]}"` : "no row names this id",
        );
        if (r) rowOf.set(c, r);
      }
    } else {
      const ordered = [...group].sort(
        (a, b) => listOrder(a) - listOrder(b) || num(a) - num(b),
      );
      const ok =
        rows.length === ordered.length &&
        ordered.every((c, i) => norm(rows[i].cells[0]) === norm(full(c)));
      check(
        `"${where}": ${ordered.length} row(s), matching v${major}.json in order`,
        ok,
        `v${major}.md: [${rows.map((r) => r.cells[0]).join(" | ")}]\n            v${major}.json: [${ordered.map(full).join(" | ")}]`,
      );
      if (ok) ordered.forEach((c, i) => rowOf.set(c, rows[i]));
    }

    for (const [c, r] of rowOf) {
      const want = [
        c.domain
          ? short(c.domain)
          : c.role === "stage_line"
            ? "Stage line"
            : "—",
        String(c.loop_step ?? "—"),
      ];
      const got = ["Domain", "Loop step"].map(
        (h) => r.cells[r.header.indexOf(h)],
      );
      check(
        `${c.id}: Domain "${want[0]}", Loop step "${want[1]}" in its row`,
        got[0] === want[0] && got[1] === want[1],
        `the row says Domain "${got[0]}", Loop step "${got[1]}"`,
      );
    }
    for (const [g, members] of groups) {
      const here = members.filter((c) => rowOf.has(c));
      if (here.length === 0) continue;
      check(
        `condition ${g} (${ids(members)}): one row under "${where}"`,
        here.length === members.length &&
          here.every((c) => rowOf.get(c) === rowOf.get(here[0])),
        `rows differ for ${ids(members)}`,
      );
    }
  }
}

/**
 * A major release comes with a crosswalk from the previous major's ids
 * (RELEASING.md). When v<major-1>.json is in the repo, v<major>.json must
 * carry `crosswalk: { from: "v<major-1>", entries: [{ id, to: [ids], note? }] }`.
 */
function checkCrosswalk(root, major, data) {
  let prev;
  try {
    prev = JSON.parse(
      readFileSync(path.join(root, `v${major - 1}.json`), "utf8"),
    );
  } catch {
    return; // no previous major in the repo: nothing to cross-walk from
  }
  console.log(`\n── v${major}: crosswalk from v${major - 1}`);
  const cw = data.crosswalk;
  check(
    `v${major}.json has a crosswalk from v${major - 1}`,
    cw?.from === `v${major - 1}` && Array.isArray(cw.entries),
    `expected "crosswalk": { "from": "v${major - 1}", "entries": [...] }`,
  );
  if (!Array.isArray(cw?.entries)) return;

  const now = new Map(data.conditions.map((c) => [c.id, c]));
  const counts = new Map();
  for (const e of cw.entries) counts.set(e.id, (counts.get(e.id) ?? 0) + 1);
  const missing = prev.conditions.filter((c) => counts.get(c.id) !== 1);
  check(
    `crosswalk names each of the ${prev.conditions.length} v${major - 1} ids exactly once`,
    missing.length === 0 && cw.entries.length === prev.conditions.length,
    `missing or repeated: ${missing.map((c) => c.id).join(", ") || "(extra entries)"}`,
  );

  const before = new Map(prev.conditions.map((c) => [c.id, c]));
  for (const e of cw.entries) {
    const to = Array.isArray(e.to) ? e.to : [];
    const unknown = to.filter((id) => !now.has(id));
    check(
      `crosswalk ${e.id}: every target exists in v${major}.json`,
      unknown.length === 0,
      `unknown: ${unknown.join(", ")}`,
    );
    if (to.includes(e.id)) {
      check(
        `crosswalk ${e.id}: kept, with the same text`,
        now.has(e.id) &&
          norm(now.get(e.id).text) === norm(before.get(e.id)?.text ?? ""),
        now.has(e.id)
          ? `v${major - 1}: "${before.get(e.id)?.text}" vs v${major}: "${now.get(e.id).text}"`
          : `kept, but ${e.id} is not in v${major}.json`,
      );
    } else {
      check(
        `crosswalk ${e.id}: retired, and the id is not reused`,
        !now.has(e.id) && typeof e.note === "string" && e.note.length > 0,
        now.has(e.id)
          ? `${e.id} is still in v${major}.json`
          : "a retired id needs a `note` saying where its content lives",
      );
    }
  }
  const reused = data.conditions.filter(
    (c) =>
      before.has(c.id) &&
      !cw.entries.some((e) => e.id === c.id && e.to?.includes(c.id)),
  );
  check(
    `v${major}.json reuses no v${major - 1} id outside the crosswalk`,
    reused.length === 0,
    `reused: ${reused.map((c) => c.id).join(", ")}`,
  );
}

function checkChangelog(root, majors) {
  console.log("\n── CHANGELOG.md release rules");
  const changelog = readFileSync(path.join(root, "CHANGELOG.md"), "utf8");

  const headingMatches = [...changelog.matchAll(/^## (.+)$/gm)];
  const sections = headingMatches.map((m, i) => ({
    heading: m[1].trim(),
    body: changelog.slice(
      m.index,
      i + 1 < headingMatches.length
        ? headingMatches[i + 1].index
        : changelog.length,
    ),
  }));

  // Released entries read "## X.Y.Z — YYYY-MM-DD" (em dash). A heading
  // that starts with a version-shaped number but doesn't match this exact
  // form (e.g. a hyphen typo'd in for the em dash) is a malformed release
  // heading, not a non-release section — fail it explicitly instead of
  // silently skipping it, since silently skipping it would let an older
  // entry pass itself off as the newest release.
  const RELEASE_HEADING = /^(\d+)\.(\d+)\.(\d+) — (\d{4}-\d{2}-\d{2})$/;
  const releases = [];
  for (const s of sections) {
    if (
      /^\d+\.\d+\.\d+\b/.test(s.heading) &&
      !RELEASE_HEADING.test(s.heading)
    ) {
      check(
        `CHANGELOG.md: "## ${s.heading}" is a well-formed release heading`,
        false,
        'expected "## X.Y.Z — YYYY-MM-DD" (an em dash, not a hyphen)',
      );
      continue;
    }
    const m = s.heading.match(RELEASE_HEADING);
    if (m)
      releases.push({
        version: `${m[1]}.${m[2]}.${m[3]}`,
        date: m[4],
        body: s.body,
      });
  }

  console.log(
    `   … ${releases.length} released ${releases.length === 1 ? "entry" : "entries"} in the changelog`,
  );
  for (const r of releases) console.log(`     ${r.version} — ${r.date}`);

  check(
    "CHANGELOG.md has at least one released entry",
    releases.length > 0,
    'no "## X.Y.Z — YYYY-MM-DD" heading found',
  );
  if (releases.length === 0) return;

  const parseVer = (v) => v.split(".").map(Number);
  const cmpVer = (a, b) => {
    const [a1, a2, a3] = parseVer(a);
    const [b1, b2, b3] = parseVer(b);
    return a1 - b1 || a2 - b2 || a3 - b3;
  };

  // (descending order) released entries appear in descending version order.
  let descendingOk = true;
  for (let i = 1; i < releases.length; i++) {
    if (cmpVer(releases[i].version, releases[i - 1].version) >= 0)
      descendingOk = false;
  }
  check(
    "released entries are in descending version order",
    descendingOk,
    `order found: ${releases.map((r) => r.version).join(" → ")}`,
  );

  // Every v<N>.md/v<N>.json pair present must have at least one released
  // entry: a pair with none is an unreleased draft, which has no place in a
  // released-only repository (RELEASING.md — publishing a version is what
  // makes it citable). The newest entry *for that major* is then the one
  // whose SHA-256 must match the files on disk — a stale major (e.g. v6,
  // after v7 exists) still needs to match its own newest recorded release.
  for (const major of majors) {
    const ownReleases = releases.filter(
      (r) => Number(r.version.split(".")[0]) === major,
    );
    check(
      `v${major}: has at least one released entry in CHANGELOG.md`,
      ownReleases.length > 0,
      `v${major}.md and v${major}.json exist, but no "## ${major}.Y.Z — YYYY-MM-DD" heading was found — an unreleased draft in a released-only repository`,
    );
    if (ownReleases.length === 0) continue;

    const newestForMajor = ownReleases.reduce(
      (best, r) => (cmpVer(r.version, best.version) > 0 ? r : best),
      ownReleases[0],
    );
    console.log(
      `── v${major}: newest release ${newestForMajor.version} — ${newestForMajor.date}`,
    );

    // (SHA-256 line) matches sha256(v<major>.md bytes + v<major>.json bytes).
    const shaMatch = newestForMajor.body.match(
      /^SHA-256:\s*([0-9a-f]{64})\s*$/m,
    );
    check(
      `${newestForMajor.version}: has a SHA-256 line`,
      !!shaMatch,
      "no `SHA-256: <hex>` line in this entry",
    );
    if (shaMatch) {
      const expected = computeReleaseHash(root, major);
      check(
        `${newestForMajor.version}: SHA-256 matches sha256(v${major}.md bytes + v${major}.json bytes)`,
        shaMatch[1] === expected,
        `CHANGELOG.md has ${shaMatch[1]}, computed ${expected} — v${major}.md or v${major}.json changed since this release was recorded`,
      );
    }
  }

  // (Approved:) checked on EVERY released entry, not only the newest — a
  // stale entry's approval is as load-bearing as the newest one's. Never
  // TODO, approvers among the two authors, enough of them for a patch vs.
  // a minor/major release compared with the nearest older released entry —
  // except the very first entry ever recorded, which has no older entry to
  // compare against and needs only one approver.
  const AUTHORS = ["Jacek Siadkowski", "Radosław Taraszka"];
  const normName = (s) => s.normalize("NFC").trim();
  for (let i = 0; i < releases.length; i++) {
    const entry = releases[i];
    const approvedMatch = entry.body.match(/^Approved:\s*(.*)$/m);
    const rawApproved = approvedMatch?.[1].trim() ?? "";
    if (!rawApproved) {
      check(
        `${entry.version}: has an Approved: line`,
        false,
        "no `Approved:` line in this entry",
      );
      continue;
    }
    if (rawApproved === "TODO") {
      check(
        `${entry.version}: Approved:`,
        false,
        "Approved: TODO — an author (Jacek Siadkowski or Radosław Taraszka) must write this by hand, as " +
          "`Approved: Name (where); Name (where)`, naming where the approval was given (a PR comment, an " +
          "email, a Slack link). scripts/release.mjs never writes a name here — only `Approved: TODO`.",
      );
      continue;
    }

    const items = rawApproved
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    const approvers = new Set();
    let malformed = false;
    for (const item of items) {
      const m = item.match(/^(.+?)\s*\(([^)]+)\)$/);
      const name = m ? normName(m[1]) : "";
      const where = m ? m[2].trim() : "";
      if (!m || !where || !AUTHORS.some((a) => normName(a) === name)) {
        malformed = true;
        continue;
      }
      approvers.add(name);
    }
    check(
      `${entry.version}: Approved: is well-formed ('Name (where)' items separated by ';')`,
      !malformed,
      `raw: "${rawApproved}" — each name must be one of: ${AUTHORS.join(", ")}, each with a non-empty (where)`,
    );

    // "Previous released entry" = the nearest older release, i.e. the next
    // entry below this one in the (descending) file order.
    const previous = releases[i + 1];
    let required = 1;
    let why =
      "first recorded release — no earlier entry to compare against, one approver suffices";
    if (previous) {
      const [curMaj, curMin] = parseVer(entry.version);
      const [prevMaj, prevMin] = parseVer(previous.version);
      const patchOnly = curMaj === prevMaj && curMin === prevMin;
      required = patchOnly ? 1 : 2;
      why = `${patchOnly ? "patch" : "minor or major"} vs. previous release ${previous.version}`;
    }
    check(
      `${entry.version}: ${approvers.size} distinct approver(s) — ${required} required (${why})`,
      !malformed && approvers.size >= required,
      `found: ${[...approvers].join(", ") || "(none)"}`,
    );
  }
}

function main() {
  const majors = discoverMajors(ROOT);
  for (const major of majors) checkMajor(ROOT, major);
  checkChangelog(ROOT, majors);

  if (failures) {
    console.error(`\n${failures} check${failures > 1 ? "s" : ""} failed.`);
    process.exit(1);
  }
  console.log(
    "\nAll checks passed — the framework as data matches the framework as written, and the release record is consistent.",
  );
}

// Realpath, not just resolve: invoked through a symlinked path (macOS /tmp
// is one) `path.resolve` alone would never equal __filename, main() would
// silently not run, and the process would exit 0 having checked nothing.
function isMain() {
  if (!process.argv[1]) return false;
  try {
    return realpathSync(process.argv[1]) === __filename;
  } catch {
    return false;
  }
}
if (isMain()) main();
