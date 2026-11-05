# v8 proposal: feedback register

Every comment on the v8 proposal gets an identifier here, whatever its source, so that each change to the draft can say which comment it answers. Comments given in another language are recorded in an English translation. A comment is closed only when its source agrees.

Status: `open` (not yet answered), `drafted` (answered in the draft, waiting for the source), `closed` (the source agrees), `declined` (with the reason), `deferred` (to a later version, with the reason).

## Carried over from v7

| ID | Source | Comment | Status | Response |
| --- | --- | --- | --- | --- |
| F7 | Review comment by @jsronkainen on pull request #1, 7 October 2026 | v7 is not aligned with the EU AI Act. The Act sorts AI by use into risk levels, while v7 adds requirements only when AI affects the people served. | deferred | Deferred from v7, and again from v8 (RT, 5 November 2026). v8 changes how the gates for the people served count but not when they apply, so it does not answer the comment. Its author has left the team; the comment stays deferred until the authors take it up. |
| V7-Q7 | `v7.md`, open question 7 | How should an assessor tell yellow from green? v7 left it to the assessor's judgment and proposed settling it in v8. | drafted | v8 drops yellow and green: a domain shows which of its conditions are in place and which are missing toward the next stage (P10). |

## Decisions in the draft

Taken by Radosław Taraszka between 23 October and 5 November 2026.

| ID | Decision | In the draft |
| --- | --- | --- |
| P1 | A result has three parts, each answering one question: AI adoption aspiration (what kind of organization, and how far it is sensible to take AI), AI adoption stage (where it is today), and Recommendations for further AI adoption (what to do first, and who can help). The aspiration never changes the stage. | §10 |
| P2 | Every condition of a stage is either a deciding condition or a readiness condition. A stage is confirmed when every condition is met and every stage below is confirmed; conditional when the deciding conditions and more than half of the readiness conditions that apply are met and every stage below is confirmed; otherwise not reached. Only one stage can be conditional. A conditional stage is assessed again at the next assessment; there are no deadlines. This replaces "an unmet item … never lowers the stage". A condition about a workflow is met only when it is met on every workflow it applies to; Stage 4 is read on one workflow. | §2; §5 |
| P3 | The deciding conditions that say how far AI goes are the stage line and belong to no domain. Every other condition belongs to exactly one domain. A condition belongs to a domain when it names a capacity, and to the stage line when it says how far AI goes. | §2; §5; `v8-domains.md` |
| P4 | Where a condition applies only in some cases, its wording says so ("Where …"). Where it does not apply, it is left out: it counts neither for the stage nor against it. | §2; §5 |
| P5 | The seven gates for the people served become Stage 3 readiness conditions, each worded "Where AI affects the people served: …". A missing gate keeps Stage 3 from being confirmed and comes first among the recommended actions. | §5, Stages 3 and 4 |
| P6 | AI affects the people served when the people who feel a mistake first are the people served, people deciding on access to a service, or the wider public; or when a workflow in or going into normal operations touches them or decides something about a specific person; when nobody knows whether a workflow touches them or decides about a person, it counts as doing so. Sensitive data or a severe worst consequence do not switch the gates on; where they contradict the answers above, the result shows the contradiction. | §5, Stage 3 |
| P7 | Several respondents: an answer that claims progress takes the majority (with an even number, the more cautious of the two middle answers); an answer that sets the bar takes the most demanding; "we don't know" does not vote; every difference is shown in the part of the result it belongs to. Each readiness list from Stage 3 includes the team's agreement, worded "Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below." It applies only at that stage, so with one respondent or a disagreement on a deciding answer up to it, that stage is at most conditional, and the stages below are confirmed by their own conditions (amended 27 October, Q5). | §2, Several Respondents; §5 |
| P8 | Whether a week's failure would harm the people served or stop a core operation claims progress, because it puts a workflow on the Stage 4 line, so it takes the majority. Whether a workflow decides something about a specific person sets the bar and takes the most demanding answer. | §2, Several Respondents |
| P9 | The fragility flags become conditions: 17 merge into the condition they repeat, and 6 become readiness conditions of their own, worded "Where …" where they apply only in some cases. Each new condition is met where its flag would not be raised. | §5; §7 |
| P10 | A domain shows its conditions in place and missing toward the next stage; v7's green, yellow and red go. Every missing condition is a gap; at most three become recommended actions. v8 does not use "binding constraint". | §6; §10 |
| P11 | Stage 4's operating practices (S4.def.6) and Stage 5's funding and maintenance requirement stay one condition each, as in v7, in the domain their evidence measures: Governance and Resources. v8 adds no Stage 3 condition for an initial risk screen; the flag on unassessed risks merges into the Stage 4 risk and consequence assessment (S4.gate.6). | §5, Stages 4 and 5; §7 |
| P12 | The recommendations start with what the people who answered must agree on (with one respondent, ask at least one more person to answer). This comes before the actions and is not one of them (RT, 3 November). The actions then come in this order: gaps in the gates for the people served, with or without support; gaps that support available to the organization now can help with; then the rest, which stay listed. Support whose call nobody has checked counts as not available; it may still be named among the gaps, marked as unchecked (RT, 5 November). Recommendations are worked out again when the result is read; the diagnosis stays as issued. With a workflow in operation, the next Adoption Loop step is the step of the first recommended gap. | §8 |
| P13 | Stage 2 is reached when people use AI in their own work. Appointing an owner does not reach Stage 2; the owner counts in Leadership, where a named owner with time and authority decides Stage 3. Stage 1 becomes "The organization does not use AI in its work". Stage 1 has no conditions: its placement row describes the stage, and belongs to neither the stage line nor a domain. | §2; §5, Stages 1 and 2 |
| P14 | A result shows the date it was issued and the framework version it was issued on. It does not expire; when a later framework version is released, it says it was issued on an earlier one. A later assessment shows what changed since the previous one. | §10 |
| P15 | A domain shows the conditions of the stage the organization is working toward: its conditional stage, or else the stage above its highest confirmed stage (Stage 3 for an organization at Stage 2), or Stage 5 once it is confirmed. At Stage 1 the domains show nothing yet. The framework does not say how an assessment tool counts or displays these conditions (RT, 5 November). | §6 |
| P16 | One person's answer is enough for Stage 2, which says only that people use AI. The team's agreement, which needs at least two people, applies from Stage 3 (RT, 5 November). | §2 |
| P17 | A step of the Adoption Loop is done when none of the organization's gaps belongs to it. With no workflow in operation, the next step is the earliest step of a gap; when no gap has a step, it is Step 7. The agreement of the people who answered has no step, since it is not one of the actions (RT, 5 November). | §8, §10; `v8-loop-steps.md` |

## Open questions for the authors

| ID | Question | Proposed |
| --- | --- | --- |
| Q1 | The domain of the 19 conditions v7 does not place. | `v8-domains.md` |
| Q2 | Which Adoption Loop step each condition belongs to. P12 needs it for the next step after the first recommended gap. | The step drafted from §4 for each condition, for RT to check (RT, 5 November). Drafted in `v8-loop-steps.md`. When a step is done is decided (P17). |
| Q3 | "Gap" and "recommended action" in place of "binding constraint". | As P10. |
| Q4 | Stage 1 and Stage 2 wording without "someone owns its adoption". | As P13. |
| Q5 | Stage 4 is assessed only once Stage 3 is confirmed, and one person's answers make a stage at most conditional. So an organization assessed by one person reaches at most Stage 3, conditional, whatever its AI does. Is that intended? | Closed (RT, 27 October 2026: "Rozwiąż"). The agreement condition applies only at the highest stage whose deciding conditions are met; certainty is checked once, where the organization stands. One person gets that stage as conditional, and the stages below are confirmed by their own conditions. P7 amended. |

## Found while applying the changes to the draft

Places where the v7 text, unchanged, would contradict a proposed change, and choices the decisions above do not settle.

| ID | Where | Issue | Status |
| --- | --- | --- | --- |
| D1 | §2; §5, placement tables | The "v6" column gave v6 identifiers and notes such as "New, from S2.def.1". It becomes "Identifier" and gives the v7 identifiers. | drafted |
| D2 | §5, readiness checklists | A checklist item needs a domain beside it, so the checklists become tables with a Domain column. The words of each condition are unchanged; Stage 4 and Stage 5 items start with a capital letter and end with a full stop. `scripts/check.mjs` expects checklist items as bullets and needs adapting at release. | drafted |
| D3 | §5 | Domains are named by the first word of their name (Leadership, People, …), explained once at the top of §5; "(proposed)" marks the 19 domains in `v8-domains.md`. The gates for the people served carry Governance, as `v7.json` does; the six conditions made from flags carry their flag's domain from §7. | drafted |
| D4 | §2 | Several respondents is a new subsection at the end of §2, so no section is renumbered. | drafted |
| D5 | §7 | §7 keeps its number and heading. It says the flags merge into conditions and gives a table of where each of the 23 went, naming conditions by their words. | drafted |
| D6 | §10, example | The example used red domains and binding constraints. It is rewritten in v8 terms: its gaps are a technical support model, a workflow baseline, and quality assurance with a handover for its one pro-bono partner. On 5 November it gains its date and framework version, and each action's support matches its gap. | drafted |
| D7 | §2, The Practical Reading | v7's example gave a bare stage and "main bottlenecks". It gives the stage with its status, and gaps named as conditions. | drafted |
| D8 | §5, Stage 4 placement | One row held S4.gate.3 and S4.gate.5 with two domains. It splits into two rows, each in one domain, with the same words. | drafted |
