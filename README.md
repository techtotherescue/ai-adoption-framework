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

**7.0.0**, released 2026-10-16.

- [`v7.md`](v7.md): the framework text.
- [`v7.json`](v7.json): its 101 conditions, each with a stable identifier,
  where it sits in the text, its role (what places an organization at a
  stage, what a stage requires, a readiness checklist item, a gate for the
  people the organization serves, a typical trait, or a fragility flag)
  and, where §6 needs one, its capacity domain. It also holds the
  crosswalk from every v6 identifier.

The previous major release, v6 (6.0.1), stays published:
[`v6.md`](v6.md) and [`v6.json`](v6.json).

See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Citing a condition

Cite a condition by its identifier and version, for example `v7:S4.gate.7`.
An identifier is never reused: a retired identifier's crosswalk entry points
to whatever replaced it. A section that is not one of the enumerated lists is
cited by its heading instead.

| Family            | What it lists in v7                                              |
| ----------------- | ---------------------------------------------------------------- |
| `S<n>.def.k`      | Stage `n` (1 through 5): placement, requirements, typical traits |
| `S3.signal.k`     | Stage 3 readiness checklist                                      |
| `S4.gate.k`       | Stage 4: two requirements and the readiness checklist            |
| `S4.exposure.k`   | Stage 4 gates for the people the organization serves             |
| `S5.guardrail.k`  | Stage 5: placement, requirements, and the readiness checklist    |
| `flag.<domain>.k` | Fragility flags, per capacity domain                             |

v6 also had `T12`/`T23`/`T34`/`T45`.k, its recommended stage transitions;
v7 retires them.

## Who changes it

The authors are Jacek Siadkowski and Radosław Taraszka, both of Tech To The
Rescue. A change starts as a proposal to them: open an issue. Releases follow
[RELEASING.md](RELEASING.md).

## Licence

Code (`scripts/` and `.github/`) is licensed under [MIT](LICENSE-CODE).
Everything else, including the framework text and data, is licensed under
[CC BY 4.0](LICENSE). Copyright Tech To The Rescue.

Suggested attribution:

> AI Adoption Framework v7, by Jacek Siadkowski and Radosław Taraszka (Tech
> To The Rescue), CC BY 4.0.
