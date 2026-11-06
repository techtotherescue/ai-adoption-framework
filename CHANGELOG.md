# Framework changelog

All notable changes to the AI Adoption Framework, in [Keep a
Changelog](https://keepachangelog.com/en/1.1.0/) form. The framework is the
method. Its authors, Jacek Siadkowski and Radosław Taraszka (Tech To The
Rescue), write it. A change starts as a proposal to them, not an edit to the
text: see RELEASING.md. Each release records the authors' approval here. A
patch needs one author's approval; a minor or major release needs both.

## 8.0.0 — 2026-11-06

Changes: v8, a major release; an organization's result can differ from v7.

- **Stage status.** Every condition either decides a stage or is a
  readiness condition. Stages 3 to 5 are confirmed (every condition met),
  conditional (every deciding condition and more than half of the
  readiness conditions that apply) or not reached (§2), so the readiness
  checklist now counts. Only one stage can be conditional.
  Stage 2 is reached by using AI, and one person's answer is enough for
  it; it has no readiness checklist. A condition that applies only in
  some cases says so ("Where …"); where it does not apply it is left out.
- **Several respondents.** From Stage 3, the agreement of at least two
  people on the deciding answers is a readiness condition (S3.signal.18,
  S4.gate.18, S5.guardrail.13). It applies only at the highest stage whose
  deciding conditions are met.
- **Gates for the people served.** S4.exposure.1–7 move to the Stage 3
  readiness checklist, in Governance, and apply where AI affects the
  people the organization serves.
- **Domains and steps.** Every condition, except those on the stage line,
  belongs to one capacity domain, and every condition except the
  agreement names its Adoption Loop step (§4), shown in the tables of §5.
  A domain lists the conditions in place and missing toward the stage the
  organization is working toward; v7's green / yellow / red is dropped.
- **Fragility flags.** The 23 flags become conditions: 17 merge into the
  condition they repeat, six become new readiness conditions
  (S3.signal.14–17, S4.gate.16, S4.gate.17). §7 says where each went.
- **Result.** An assessment returns three parts: AI adoption aspiration,
  AI adoption stage, and recommendations (§10). Every missing condition
  is a gap; at most three become recommended actions, ordered by the
  support available now (§8), with the next Adoption Loop step. A result
  names the date it was issued and the framework version it was issued
  on.
- **Identifiers.** Each condition in `v8.json` has a `role`
  (`placement`, `stage_line`, `deciding`, `readiness`, `trait`, described
  under `roles`), a `domain` and a `loop_step` where its role takes them,
  `applies` for a "Where …" condition, and `condition` for the members of a
  row that joins several. Eleven identifiers are new: the above, plus
  S1.def.6 and S2.def.7, the reworded Stage 1 and Stage 2 placements
  (they no longer mention who owns AI adoption). 25 v7 identifiers are
  retired: S1.def.5, S2.def.6 and the 23 flags. The crosswalk in
  `v8.json` maps every v7 identifier.

v7 stays published unchanged as `v7.md` and `v7.json`.

SHA-256: 891459f67be25daed6a01216681272e19ca4032e5b9e03c352341fc8f4053279

Approved: TODO

## 7.0.0 — 2026-10-16

Changes: v7, a major release; an organization's stage or colours can
differ from v6.

- **Placement.** Every stage in §5 opens with a placement table: what
  places an organization at the stage, what it requires (without it, the
  stage below), and the question that checks each row. §2 summarizes the
  five stages. Everything else in a stage profile is a readiness checklist
  or a typical trait and never lowers the stage.
- **Stage rules.** Stage 1 and 2 are placed by use of AI, not attitude.
  Stage 3 requires a named owner, champion or adoption group with time and
  authority (S3.def.3), sharing what works and what fails (S3.def.8), and
  AI use expected in selected areas (S3.def.1). Stage 4 is reached by
  S4.def.1, with a failure test for "matters to mission delivery", and
  requires S4.def.2–6, S4.gate.3 and S4.gate.5. Stage 5 requires at least
  two independent organizations that use and value a capability the
  organization created, with funding and maintenance that cover it; the
  other nine guardrails become a readiness checklist.
- **Red.** A domain is red when it misses a condition the next step
  requires (§6); each such condition has one domain, recorded in
  `v7.json`. The assessment names at most three binding constraints, gaps
  in the gates for the people the organization serves first. Those gates
  never lower the stage. How to tell yellow from green stays the
  assessor's judgment; v8 is to settle it.
- **Scope and text.** "Social impact organizations", not only nonprofits.
  §10 Recommended Stage Transitions and §11 TTTR Program Implications of v6
  are removed; observable indicators move to §6, one table per domain.
- **Identifiers.** Each condition in `v7.json` has a `where` and a `role`;
  the Stage 3 and Stage 4 checklists, the gates for the people the
  organization serves, and the fragility flags also have a `domain`. Six conditions are
  new (S1.def.5, S2.def.6, S3.def.7, S3.def.8, S5.def.7, S5.def.8). 29 v6
  identifiers are retired: the 26 of §10, S1.def.3, S3.signal.1 and
  S4.gate.4. The crosswalk in `v7.json` maps every v6 identifier.

v6 stays published unchanged as `v6.md` and `v6.json`.

SHA-256: 9b2bd25ecb996d4752b550f8753dac43331ac711fd3e211e2367d82c59e693de

Approved:
Jacek Siadkowski (outside GitHub, 2026-10-15, no remarks); Radosław Taraszka (PR #5)

## 6.0.1 — 2026-09-30

Changes: the `v6.md` header no longer calls the text the source of truth for
product work or names the files it was transcribed from, and `source` in
`v6.json` is now `v6.md`. Both pointed into a private repository. The
framework text and the identifiers are unchanged.

SHA-256: b8484c88ad451583eb35348c9f1fffc84c4bbc761eda8d6b1613c55ce2bec4f6

Approved: Radosław Taraszka (PR #2)

## 6.0.0 — 2026-09-29

v6, as its authors released it on 2026-07-31, transcribed from their document
on 2026-08-03 (see the `v6.md` header). The text is unchanged.
Supersedes v3, which is not published here.

This release adds stable identifiers for the 124 conditions in v6's
enumerated lists, recorded in `v6.json`. A condition is cited
by identifier and version, for example `v6:S4.gate.7`; a section that is not
one of these lists is still cited by its heading anchor.

Release 6.0.0 was approved before this repository was public; the pull
request it cites is in a private repository.

SHA-256: 2264d1cf51eb91b22b8726cc273b07910290b441e341ea86d0ff4691d123cc0b

Approved: Radosław Taraszka (PR #84)
