# AI Adoption Framework

A framework for assessing AI adoption in social impact organizations
(nonprofits, social enterprises, and impact ventures) as an operating-model
transition. It places an organization on one of five stages, from Resisting
to Enabling, and separately assesses its deployment scope (where AI acts and
who is exposed to it) and its risk exposure (the consequences if it goes
wrong). Organizations build capacity through a seven-step Adoption Loop, and
the framework tracks readiness across seven capacity domains, from
leadership and ownership to resources and sustainability.

## Current release

**8.0.0**, released 2026-11-06.

- [`v8.md`](v8.md): the framework text.
- [`v8.json`](v8.json): its 87 identifiers, each with where it sits in the
  text and its role (what places an organization at Stage 1, a condition
  on the stage line, a deciding condition, a readiness condition, or a
  typical trait), and, where the role takes them, its capacity domain and
  Adoption Loop step. It also holds the crosswalk from every v7
  identifier.

Earlier major releases stay published: v7 (7.0.0), [`v7.md`](v7.md) and
[`v7.json`](v7.json); v6 (6.0.1), [`v6.md`](v6.md) and
[`v6.json`](v6.json).

See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Citing a condition

Cite a condition by its identifier and version, for example `v8:S4.gate.7`.
An identifier is never reused: a retired identifier's crosswalk entry points
to whatever replaced it. A section that is not one of the enumerated lists is
cited by its heading instead.

| Family           | What it lists in v8                                              |
| ---------------- | ---------------------------------------------------------------- |
| `S<n>.def.k`     | Stage `n` (1 through 5): reached when, requirements, traits      |
| `S3.signal.k`    | Stage 3 readiness checklist                                      |
| `S4.gate.k`      | Stage 4: two requirements and the readiness checklist            |
| `S4.exposure.k`  | Stage 3 gates for the people the organization serves             |
| `S5.guardrail.k` | Stage 5: reached when, requirements, and the readiness checklist |

v7 also had `flag.<domain>.k`, its fragility flags, and v6 had
`T12`/`T23`/`T34`/`T45`.k, its recommended stage transitions; both are
retired.

## Who changes it

The authors are Jacek Siadkowski and Radosław Taraszka, both of Tech To The
Rescue. A change starts as a proposal to them: open an issue. Releases follow
[RELEASING.md](RELEASING.md).

## Licence

Code (`scripts/` and `.github/`) is licensed under [MIT](LICENSE-CODE).
Everything else, including the framework text and data, is licensed under
[CC BY 4.0](LICENSE). Copyright Tech To The Rescue.

Suggested attribution:

> AI Adoption Framework v8, by Jacek Siadkowski and Radosław Taraszka (Tech
> To The Rescue), CC BY 4.0.
