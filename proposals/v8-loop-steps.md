# AI Adoption Framework v8: which Adoption Loop step each condition belongs to

A draft for the [v8 proposal](v8.md), 5 November 2026, for RT to check. Nothing here is in force yet.

A result ends with the next Adoption Loop step (§8). With a workflow in operation, it is the step the first recommended gap belongs to, so every condition needs a step. Northgate Food Bank (`v8.md`) ranks the families who apply in normal operations, and its first recommended action is a way for families to appeal the ranking (S4.exposure.4). Step 5 names appeal, so Northgate's next step is Step 5, redesign the workflow and roles.

**The rule for assigning** follows the one for domains (`v8-domains.md`): a condition belongs to the step whose bullet in §4 names the work that closes it. When two steps name it, or none does, the table proposes one step and gives the alternative.

**The first recommended gap** is the gap of the first recommended action. What the people who answered must agree on comes before the actions and is not one of them (§8), so the agreement condition never sets the step and has none.

The steps (§4): 1 Build literacy, trust, and permission; 2 Select a meaningful workflow; 3 Experiment safely; 4 Observe where the system breaks; 5 Redesign the workflow and roles; 6 Deploy with proportional governance; 7 Measure outcomes and feed learning back.

The six new conditions and the agreement condition have no identifier yet (`v8.md`). The table gives the identifier proposed for the release, marked "new". A row that joins several identifiers, such as S4.def.2 and S4.def.3, is one condition and has one step.

## The stage line

| ID | Condition | Proposed step | Basis in §4 | Alternative |
| --- | --- | --- | --- | --- |
| S2.def.6 | People use AI in their own work, however unevenly. | Step 1 | Step 1: "Give staff permission to experiment safely." §4: Stage 1 organizations "mainly build trust, literacy, and permission". | Step 3 ("Use the smallest experiment that can produce useful learning") |
| S3.def.7 | The organization runs AI pilots on selected workflows, or has run the Adoption Loop on them more than once. | Step 3 | Step 3: "Use the smallest experiment that can produce useful learning." | Step 2 (choosing the workflow comes first: "Start with a real pain point or opportunity") |
| S3.def.1 | AI use becomes expected in selected areas rather than exceptional. | Step 6 | §4 names nothing. Step 6 is where a workflow becomes normal operation: it "formalizes and strengthens it for repeatable operation". | Step 5 ("Provide training and change support") |
| S4.def.1 | AI is integral to a workflow that matters to mission delivery or organizational performance. | Step 2 | Step 2, "Select a Meaningful Workflow": "Start with a real pain point or opportunity." | Step 6 (AI becomes integral when it is deployed) |
| S4.def.4 | The workflow operates repeatedly outside a temporary demo environment. | Step 6 | Step 6 "formalizes and strengthens it for repeatable operation". |  |
| S5.def.7, S5.def.2, S5.guardrail.1 | The organization creates reusable tools, datasets, context assets, standards, playbooks, APIs, protocols, services, or learning systems, and there is demonstrated demand from other organizations: at least two independent organizations use one of them in their own work today. | Step 7 | Step 7: "Decide whether to improve, expand, constrain, replace, or stop the workflow." §4: Stage 5 organizations "extend the loop across organizational boundaries". | Step 6 (deploying the capability for others) |

## Conditions that decide a stage

| ID | Condition | Proposed step | Basis in §4 | Alternative |
| --- | --- | --- | --- | --- |
| S3.def.3 | A named AI owner, champion, or adoption group has time and authority. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." | Step 1 (permission to experiment comes from someone with authority) |
| S3.def.8 | People share what works and what fails across the organization. | Step 7 | Step 7: "Examine failures and unintended outcomes." "Feed evidence into the next loop." | Step 1 ("Use trusted peer examples rather than inevitability narratives") |
| S4.def.2, S4.def.3 | The workflow is redesigned rather than merely supplemented with an AI tool. Human roles, review, escalation, and exception handling are explicit. | Step 5 | Step 5: "Redesign jobs and handoffs rather than adding AI on top of a broken process." "Define human review, judgment, escalation, and appeal." |  |
| S4.gate.3 | Accountable AI adoption and technical ownership. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." |  |
| S4.gate.5 | Data/context ownership and quality controls. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." | Step 4 ("data and context gaps") |
| S4.def.5 | Evidence is used to improve the workflow. | Step 7 | Step 7: "Decide whether to improve, expand, constrain, replace, or stop the workflow." "Feed evidence into the next loop." |  |
| S4.def.6 | Governance, maintenance, dependency, and failure handling are active operating practices. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." "Confirm maintenance and financial sustainability." |  |
| S5.def.3 | Other organizations obtain demonstrated value from the capability. | Step 7 | Step 7: "Measure adoption and behavior, not only availability." §4: Stage 5 organizations "use evidence from adopters". |  |
| S5.guardrail.3, S5.guardrail.5, S5.def.8 | Sustainable funding; maintenance and incident capacity. Both cover the capability others use. | Step 6 | Step 6: "Confirm maintenance and financial sustainability." |  |

## Stage 3 readiness checklist

| ID | Condition | Proposed step | Basis in §4 | Alternative |
| --- | --- | --- | --- | --- |
| S3.signal.2 | Shared licenses or approved tool stack. | Step 3 | §4 names nothing. Approved tools are how staff experiment safely (Step 3, "Experiment Safely"). | Step 1 ("Give staff permission to experiment safely") |
| S3.signal.3 | Team education and learning rhythm. | Step 1 | Step 1: "Understand practical capabilities and limits." | Step 5 ("Provide training and change support") |
| S3.signal.4 | Safe-use and data-handling norms. | Step 3 | Step 3: "Apply an initial data, privacy, and consequence screen before experimentation." | Step 1 ("Give staff permission to experiment safely") |
| S3.signal.5 | Workflow and use-case prioritization. | Step 2 | Step 2: "Start with a real pain point or opportunity." |  |
| S3.signal.6 | Baseline and intended outcome for priority workflows. | Step 2 | Step 2: "Define the users, intended outcome, baseline, and constraints." | Step 7 ("Compare performance to the baseline") |
| S3.signal.7 | Data/context inventory and maintenance responsibility. | Step 4 | Step 4 observes "data and context gaps". | Step 6 (maintenance responsibility: "Establish ownership") |
| S3.signal.8 | Explicit map of changing tasks, roles, review, and exceptions. | Step 5 | Step 5: "Decide which tasks AI performs, supports, or should not touch." "Define human review, judgment, escalation, and appeal." |  |
| S3.signal.9 | Technical support model. | Step 6 | §4 names nothing. Step 6: "Confirm maintenance and financial sustainability." | Step 3 (an experiment needs technical help too) |
| S3.signal.10 | Vendor and partner dependency view. | Step 4 | Step 4 observes "dependency on vendors, partners, or specific people". | Step 6 ("Confirm data portability and meaningful exit paths") |
| S3.signal.11 | Budget, credits, and protected implementation time. | Step 6 | Step 6: "Confirm maintenance and financial sustainability." | Step 3 (time and credits to experiment) |
| S3.signal.12 | Regular implementation cadence. | Step 7 | §4 names nothing. A cadence runs the loop again: "Feed evidence into the next loop." | Step 2 (selecting the next workflow) |
| S3.signal.13 | Criteria for deciding which workflows are ready for operational deployment. | Step 6 | Step 6, "Deploy With Proportional Governance": "Increase safeguards in proportion to risk and exposure." | Step 7 ("Decide whether to improve, expand, constrain, replace, or stop the workflow") |
| new: S3.signal.14 | Where there is an AI owner: a successor arranged, so the work survives their leaving. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." | Step 4 ("dependency on vendors, partners, or specific people") |
| new: S3.signal.15 | The people who do the work take part in shaping how AI is used. | Step 5 | Step 5: "Involve affected staff and users." |  |
| new: S3.signal.16 | Where the work is done pro bono: someone independent checks its quality, and a handover is agreed. | Step 6 | Step 6: "Confirm maintenance and financial sustainability." A handover keeps the maintenance going. | Step 4 ("quality and reliability") |
| new: S3.signal.17 | Where the organization measures its AI work: results are judged by outcomes, not by the volume of output. | Step 7 | Step 7: "Compare performance to the baseline." "Measure adoption and behavior, not only availability." |  |
| new: S3.signal.18 | Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | None | §4 names nothing. The agreement comes before the actions and is not one of them (§8), so it never sets the next step. | Step 1 (a shared picture of where the organization stands) |
| S4.exposure.1 | Where AI affects the people served: participation by affected users or credible representatives. | Step 5 | Step 5: "Involve affected staff and users." |  |
| S4.exposure.2 | Where AI affects the people served: documented limits on automated decisions. | Step 5 | Step 5: "Decide which tasks AI performs, supports, or should not touch." |  |
| S4.exposure.3 | Where AI affects the people served: qualified and accountable human review. | Step 5 | Step 5: "Define human review, judgment, escalation, and appeal." | Step 3 ("Keep accountable humans involved") |
| S4.exposure.4 | Where AI affects the people served: a clear method to question, correct, or appeal outcomes where relevant. | Step 5 | Step 5: "Define human review, judgment, escalation, and appeal." |  |
| S4.exposure.5 | Where AI affects the people served: testing for exclusion, bias, and differential harm. | Step 4 | Step 4 observes "bias and exclusion". |  |
| S4.exposure.6 | Where AI affects the people served: communication that makes the role of AI understandable. | Step 6 | §4 names nothing. Telling people what the AI does goes with deploying it: "Increase safeguards in proportion to risk and exposure." | Step 5 ("Involve affected staff and users") |
| S4.exposure.7 | Where AI affects the people served: safeguards appropriate to the political and surveillance environment. | Step 6 | Step 6: "Increase safeguards in proportion to risk and exposure." | Step 3 ("Apply an initial data, privacy, and consequence screen") |

## Stage 4 readiness checklist

| ID | Condition | Proposed step | Basis in §4 | Alternative |
| --- | --- | --- | --- | --- |
| S4.gate.1 | A defined user need and intended outcome. | Step 2 | Step 2: "Define the users, intended outcome, baseline, and constraints." |  |
| S4.gate.2 | A baseline and evaluation plan. | Step 2 | Step 2: "Define the users, intended outcome, baseline, and constraints." | Step 7 ("Compare performance to the baseline") |
| S4.gate.6 | A risk and consequence assessment. | Step 6 | Step 6: "Increase safeguards in proportion to risk and exposure." | Step 3 ("Apply an initial data, privacy, and consequence screen") |
| S4.gate.7 | Human review, escalation, exception, and appeal rules where relevant. | Step 5 | Step 5: "Define human review, judgment, escalation, and appeal." |  |
| S4.gate.8 | Security and privacy stance. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." | Step 3 ("Apply an initial data, privacy, and consequence screen") |
| S4.gate.9 | Monitoring after deployment. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." | Step 7 ("Measure adoption and behavior, not only availability") |
| S4.gate.10 | Staff or user acceptability checks. | Step 4 | Step 4 observes "staff and user behavior". | Step 5 ("Involve affected staff and users") |
| S4.gate.11 | Maintenance and incident ownership. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." "Confirm maintenance and financial sustainability." |  |
| S4.gate.12 | Cost and consumption controls. | Step 6 | Step 6: "Confirm maintenance and financial sustainability." | Step 4 (observes "cost and consumption") |
| S4.gate.13 | Vendor, model, data, and partner dependency review. | Step 4 | Step 4 observes "dependency on vendors, partners, or specific people". | Step 6 ("Confirm data portability and meaningful exit paths") |
| S4.gate.14 | Portability, rollback, or migration path. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." "Confirm data portability and meaningful exit paths." |  |
| S4.gate.15 | A decision process for continuation, expansion, constraint, or retirement. | Step 7 | Step 7: "Decide whether to improve, expand, constrain, replace, or stop the workflow." |  |
| new: S4.gate.16 | A review of failures and a learning cadence after deployment. | Step 7 | Step 7: "Examine failures and unintended outcomes." |  |
| new: S4.gate.17 | Where the deployment depends on temporary funding: a plan for continuing the work when it ends. | Step 6 | Step 6: "Confirm maintenance and financial sustainability." |  |
| new: S4.gate.18 | Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | None | §4 names nothing. The agreement comes before the actions and is not one of them (§8), so it never sets the next step. | Step 1 (a shared picture of where the organization stands) |

## Stage 5 readiness checklist

| ID | Condition | Proposed step | Basis in §4 | Alternative |
| --- | --- | --- | --- | --- |
| S5.guardrail.2 | Mission-control guardrails. | Step 6 | §4 names nothing. Guardrails are safeguards: "Increase safeguards in proportion to risk and exposure." | Step 1 ("Surface fears about jobs, dignity, privacy, bias, and mission fit") |
| S5.guardrail.4 | Standards and governance. | Step 6 | Step 6, "Deploy With Proportional Governance". |  |
| S5.guardrail.6 | Distribution and implementation partnerships. | Step 7 | §4 names nothing. Step 7: "Decide whether to improve, expand, constrain, replace, or stop the workflow." | Step 6 (deploying with partners) |
| S5.guardrail.7 | Clear ownership and accountability. | Step 6 | Step 6: "Establish ownership, access rules, monitoring, rollback, and failure handling." |  |
| S5.guardrail.8 | Partner and corporate influence boundaries. | Step 6 | §4 names nothing. Step 4 observes "dependency on vendors, partners, or specific people"; Step 6 sets the limits: "Increase safeguards in proportion to risk and exposure." | Step 4 |
| S5.guardrail.9 | Support model for adopters. | Step 5 | Step 5: "Provide training and change support." | Step 6 ("Confirm maintenance and financial sustainability") |
| S5.guardrail.10 | Interoperability and portability strategy. | Step 6 | Step 6: "Confirm data portability and meaningful exit paths." |  |
| S5.guardrail.11 | Evidence that the infrastructure improves adoption or outcomes. | Step 7 | Step 7: "Compare performance to the baseline." "Measure adoption and behavior, not only availability." |  |
| S5.guardrail.12 | Credibility with the communities and organizations affected. | Step 1 | Step 1, "Build Literacy, Trust, and Permission": "Use trusted peer examples rather than inevitability narratives." | Step 5 ("Involve affected staff and users") |
| new: S5.guardrail.13 | Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | None | §4 names nothing. The agreement comes before the actions and is not one of them (§8), so it never sets the next step. | Step 1 (a shared picture of where the organization stands) |

## What the proposal produces

| Step | Conditions |
| --- | --- |
| 1. Build literacy, trust, and permission | 3 |
| 2. Select a meaningful workflow | 5 |
| 3. Experiment safely | 3 |
| 4. Observe where the system breaks | 5 |
| 5. Redesign the workflow and roles | 9 |
| 6. Deploy with proportional governance | 26 |
| 7. Measure outcomes and feed learning back | 10 |
| None (the agreement condition) | 3 |

That is all 64 conditions of v8: 6 on the stage line, 9 that decide a stage and 49 readiness conditions.

## Open: the next step with no workflow in operation

With no workflow in operation, the next step is "the first step the organization has not done" (§8). The draft does not say when a step is done, so two assessors can name different steps. The example in §10 shows it. That organization has only a pilot. Its gaps are a technical support model and an independent check with a handover, both Step 6 here, and a baseline for the pilot, Step 2. The example names Step 5.

Proposed, for RT to decide: a step is done when none of the organization's gaps belongs to it. The next step is then the earliest step one of its gaps belongs to, and this table answers both cases. The example in §10 would name Step 2: set the pilot's baseline and intended outcome.

Neither rule says what happens when no gap has a step. That happens when the only gap is the agreement, as when one person answers and everything else at Stage 3 is met, or when there is no gap at all, as with Stage 5 confirmed. Proposed: the next step is then Step 7, feed evidence into the next loop. The alternative is to name no step.

## At release

`v8.json` gives each condition its step. So that the text says it too, the proposal is a "Step" column in the tables of §5, beside the domain.
