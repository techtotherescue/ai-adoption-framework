# AI Adoption Framework v8: which domain each condition belongs to

A draft for the [v8 proposal](v8.md), 27 October 2026, updated 5 November 2026. Nothing here is in force yet.

In v8 every condition belongs to exactly one domain, except the conditions that say how far AI goes (the stage line), which belong to none. v7 already gives a domain to most conditions: the readiness checklists and the gates for the people the organization serves carry one in `v7.json`, and the fragility flags sit under their domains in §7, so the conditions made from them keep that domain. The 19 conditions below have none in v7, so v8 assigns one.

**The rule for assigning** is v7's: a condition belongs to the domain whose observable indicator for that stage (§6) names it. When two domains name it, or none does, the authors choose; the table proposes one domain and gives the alternative.

Domains: **Leadership** (Leadership and ownership), **People** (People, workflows, and change), **Data** (Data and organizational context), **Technology** (Technology, implementation, and resilience), **Governance** (Governance, risk, and accountability), **Evidence** (Evidence and learning), **Resources** (Resources and sustainability).

## Conditions that decide a stage

| ID | Condition | Proposed domain | Basis in §6 | Alternative |
| --- | --- | --- | --- | --- |
| S3.def.3 | A named AI owner, champion, or adoption group has time and authority. | Leadership | Leadership, Stage 3: "named AI coordinator, owner, or adoption group with time and authority" | |
| S3.def.8 | People share what works and what fails across the organization. | Evidence | Evidence, Stage 3: "regular learning reviews begin" | People (team learning) |
| S4.def.2, S4.def.3 | The workflow is redesigned rather than merely supplemented with an AI tool. Human roles, review, escalation, and exception handling are explicit. | People | People, Stage 4: "roles, human judgment, escalation, and exceptions are operationalized" | Governance (review and escalation) |
| S4.def.5 | Evidence is used to improve the workflow. | Evidence | Evidence, Stage 4: "failure reviews, and a regular improvement cadence" | |
| S4.def.6 | Governance, maintenance, dependency, and failure handling are active operating practices. | Governance | Governance, Stage 4: "active controls … and incident handling" | Technology (maintenance, dependency) |
| S5.def.3 | Other organizations obtain demonstrated value from the capability. | Evidence | Evidence, Stage 5: "cross-organization adoption and outcome evidence" | |
| S5.guardrail.3, S5.guardrail.5, S5.def.8 | Sustainable funding, and maintenance and incident capacity, that cover the capability others use. | Resources | Resources, Stage 5: "sustained infrastructure funding" | Technology (maintenance and incident capacity) |

S4.def.6 and the Stage 5 funding-and-maintenance requirement stay one condition each, as in v7. Split by domain, one missing practice would count as two gaps in two domains, and an assessment checks each as one fact. Stage 4 already asks for maintenance and incident ownership (S4.gate.11) and a dependency review (S4.gate.13) in Technology, so the alternative adds little.

## Stage 5 readiness checklist

| ID | Condition | Proposed domain | Basis in §6 | Alternative |
| --- | --- | --- | --- | --- |
| S5.guardrail.2 | Mission-control guardrails. | Governance | Governance, Stage 5: "mission protection" | Leadership |
| S5.guardrail.4 | Standards and governance. | Governance | Governance, Stage 5: "shared standards" | Technology (interoperability) |
| S5.guardrail.6 | Distribution and implementation partnerships. | Resources | Resources: a credible long-term model | Leadership (partnerships) |
| S5.guardrail.7 | Clear ownership and accountability. | Leadership | Leadership, Stage 5: "accountability is distributed across leadership, adoption, …" | Governance (accountability) |
| S5.guardrail.8 | Partner and corporate influence boundaries. | Technology | Technology, Stage 5: "partner boundaries" | Governance (mission protection) |
| S5.guardrail.9 | Support model for adopters. | People | People, Stage 5: "help other organizations change their own workflows" | Resources |
| S5.guardrail.10 | Interoperability and portability strategy. | Technology | Technology, as v7 places S4.gate.14 (portability, rollback, or migration path) | |
| S5.guardrail.11 | Evidence that the infrastructure improves adoption or outcomes. | Evidence | Evidence, Stage 5: cross-organization outcome evidence | |
| S5.guardrail.12 | Credibility with the communities and organizations affected. | Governance | Governance, Stage 5: "sector trust" | Leadership |

## The agreement condition, Stages 3, 4 and 5

| ID | Condition | Proposed domain | Basis | Alternative |
| --- | --- | --- | --- | --- |
| new, one per stage | Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | Leadership | Leadership owns a shared picture of where the organization stands. | People |

The agreement condition gets its identifiers at release, with the six conditions made from fragility flags.

## What the proposal produces

| Domain | Proposed here |
| --- | --- |
| Leadership | 5 (S3.def.3, S5.guardrail.7, and agreement at three stages) |
| People | 2 |
| Data | 0 |
| Technology | 2 |
| Governance | 4 |
| Evidence | 4 |
| Resources | 2 |

With the conditions v7 already places, v8 has 64 conditions: 6 on the stage line, 9 conditions that decide a stage and 49 readiness conditions in the domains.
