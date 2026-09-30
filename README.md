# AI Adoption Framework

A framework for assessing nonprofit AI adoption as an operating-model
transition. It places an organization on one of five stages, from Resisting
to Enabling, and separately assesses its deployment scope (where AI acts and
who is exposed to it) and its risk exposure (the consequences if it goes
wrong). Organizations build capacity through a seven-step Adoption Loop, and
the framework tracks readiness across seven capacity domains, from
leadership and ownership to resources and sustainability.

## Current release

**6.0.1**, released 2026-09-30.

- [`v6.md`](v6.md): the framework text.
- [`v6.json`](v6.json): the 124 conditions from v6's enumerated lists, each
  with a stable identifier.

See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Citing a condition

Cite a condition by its identifier and version, for example `v6:S4.gate.7`.
An identifier is never reused: a withdrawn identifier's entry points to
whatever replaced it. A section that is not one of the enumerated lists is
cited by its heading instead.

| Family                    | What it lists                                         |
| ------------------------- | ----------------------------------------------------- |
| `S<n>.def.k`              | What defines stage `n` (1 through 5)                  |
| `S3.signal.k`             | Stage 3 completion signals                            |
| `S4.gate.k`               | Stage 4 operating gates                               |
| `S4.exposure.k`           | Additional gates for beneficiary or external exposure |
| `S5.guardrail.k`          | Stage 5 guardrails                                    |
| `flag.<domain>.k`         | Fragility flags, per capacity domain                  |
| `T12`/`T23`/`T34`/`T45`.k | Recommended stage transitions, e.g. Stage 3 to 4      |

## Who changes it

The authors are Jacek Siadkowski and Radosław Taraszka, both of Tech To The
Rescue. A change starts as a proposal to them: open an issue. Releases follow
[RELEASING.md](RELEASING.md).

## Licence

Code (`scripts/` and `.github/`) is licensed under [MIT](LICENSE-CODE).
Everything else, including the framework text and data, is licensed under
[CC BY 4.0](LICENSE). Copyright Tech To The Rescue.

Suggested attribution:

> AI Adoption Framework v6, by Jacek Siadkowski and Radosław Taraszka (Tech
> To The Rescue), CC BY 4.0.
