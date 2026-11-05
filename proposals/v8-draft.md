# AI Adoption Framework for Social Impact Organizations
## Version 8 — Five Stages, Adoption Loop, and Supportable Capacity Domains

*Draft: 2026-11-05. Not in force: the released version is v7 (7.0.0).*

> A proposed revision of v7. On release it will supersede v7.

---

## 1. The Core Thesis

AI adoption in social impact organizations is not primarily a tool-selection or software-construction problem. Social impact organizations are nonprofits, social enterprises, and impact ventures.

**AI adoption in social impact organizations is an operating-model transition.**

AI tools and prototypes are becoming easier and cheaper to produce. The scarce capabilities are increasingly:

- selecting problems and workflows worth changing;
- understanding users and validating needs;
- preparing organizational data and context;
- redesigning workflows, jobs, and accountability;
- deploying securely and reliably;
- governing risk in proportion to consequence;
- maintaining systems and managing dependency;
- measuring whether outcomes improve;
- feeding evidence into the next iteration.

The central distinction is therefore:

**AI use is not the same as AI-enabled operating-model change.**

The framework helps determine which one is happening, what should happen next, and what support is appropriate.

## 2. How To Read The Framework

The framework separates three dimensions, as it has since v5.

### Dimension 1: Adoption Stage

The adoption stage describes how deeply and reliably the organization can integrate AI into its work.

| Stage | Name | Core capability | Reached when | Required |
| --- | --- | --- | --- | --- |
| 1 | Resisting | Building trust that AI can fit the mission without harming the human work. | The organization does not use AI in its work. | Nothing. |
| 2 | Exploring | Learning through fragmented individual and team experimentation. | People use AI in their own work, however unevenly. | Nothing more. |
| 3 | Systematizing | Building an AI adoption operating system and running deliberate adoption loops. | The organization runs AI pilots on selected workflows, or has run the Adoption Loop on them more than once. | • A named AI owner, champion, or adoption group with time and authority.<br>• People share what works and what fails.<br>• AI use is expected in selected areas. |
| 4 | Innovating | Reliably operating redesigned mission-critical workflows around AI. | AI is integral to a workflow that matters to mission delivery or organizational performance: if it failed or went wrong for a week, the people served would be harmed, or a core operation would stop. | • The workflow runs in normal operations.<br>• It is redesigned, with explicit roles.<br>• It has accountable, technical, and data owners.<br>• Evidence improves it.<br>• Governance, maintenance, dependency, and failure handling are active practices. |
| 5 | Enabling | Providing shared infrastructure, tools, standards, evidence, or capacity others can depend on. | At least two independent organizations use, in their own work, a tool, dataset, standard, playbook, or service the organization created. | • Other organizations obtain demonstrated value from it.<br>• Sustainable funding.<br>• Maintenance and incident capacity. |

Each stage has two kinds of condition. Deciding conditions place the stage: what places an organization there, and what it requires. Readiness conditions confirm it: the items of the stage's readiness checklist in §5. There is no third kind.

The deciding conditions that say how far AI goes in the organization's work form the stage line: people use AI in their own work (Stage 2); the organization runs pilots on selected workflows, and AI use is expected in selected areas (Stage 3); AI is integral to a workflow that matters, and that workflow runs in normal operations (Stage 4); at least two independent organizations use something the organization created (Stage 5). The stage line is the stage's own definition and belongs to no domain. Every other condition belongs to one capacity domain (§6), so every gap leads to a domain and from there to support. A deciding condition belongs to a domain when it names a capacity, and to the stage line when it says how far AI goes.

Each stage from 3 to 5 has one of three statuses:

- **Confirmed:** every deciding condition and every readiness condition is met, and every stage below is confirmed.
- **Conditional:** every deciding condition is met, more than half of the readiness conditions that apply are met, and every stage below is confirmed. The stage is reached but does not yet stand firmly.
- **Not reached:** anything else.

Stage 1 is always confirmed. Stage 2 is confirmed when it is reached; it has no readiness checklist and is never conditional. So one person's answer is enough for Stage 2: the team's agreement, which needs at least two people, is a readiness condition, and readiness checklists start at Stage 3 (Several Respondents).

Where a condition applies only in some cases, its wording says so. Where it does not apply, it is left out: it counts neither for the stage nor against it. A condition nobody can confirm ("we don't know") is not met.

A condition about a workflow is met only when every workflow it applies to meets it. If AI ranks food-parcel applications and also sets the order of home visits, both workflows need a way to appeal. Stage 4 is the exception: one workflow that meets all of Stage 4's conditions is enough.

The organization's stage is its highest confirmed stage, or the stage just above it if that one is conditional. Only one stage can be conditional, and the stage above a conditional stage is not assessed. A conditional stage has no deadline; it is assessed again at the next assessment. Every unmet condition is a gap to close (§6).

Each stage profile in §5 opens with a placement table. Its first row says what places an organization at the stage. Each further row is a requirement: if any one is missing, the organization is at the stage below. The identifier column gives the v7 identifier of each condition in the row. The last column is the question that checks the row; an assessment tool may word it its own way.

### Dimension 2: Deployment Scope

Deployment scope describes where AI acts and who is exposed to it.

| Scope | Description |
| --- | --- |
| None | No meaningful AI use. |
| Individual | Personal productivity and one-off assistance. |
| Shared internal | Repeatable team or organizational workflows. |
| Mission-critical internal | Workflows essential to delivery, quality, allocation, or organizational performance. |
| Beneficiary/external | AI directly affects beneficiaries, users, applicants, partners, or public information. |
| Ecosystem-facing | Other organizations depend on shared tools, data, standards, APIs, or services. |

Deployment scope does not determine the stage by itself. A superficial external chatbot is not necessarily Stage 4. A deeply redesigned internal case-management or service-allocation workflow may be Stage 4 if it meets the evidence, reliability, ownership, and governance requirements.

### Dimension 3: Risk Exposure

Risk exposure describes the consequences if the AI-supported workflow is wrong, unavailable, biased, insecure, or misused.

| Level | Typical characteristics |
| --- | --- |
| Low | Reversible internal assistance with limited sensitive data and human review. |
| Moderate | Shared workflows, sensitive organizational data, or decisions that affect operational quality. |
| High | Consequential decisions, vulnerable populations, sensitive personal data, or limited reversibility. |
| Critical | Potential effects on safety, legal rights, essential services, freedom, or severe and difficult-to-reverse harm. |

Risk must be assessed independently of stage. More advanced organizations may operate low-risk workflows. Early-stage organizations may experiment with dangerously high-risk ideas.

### The Practical Reading

A useful diagnosis should say:

> Hybrid organization. Mission-critical internal pilot. Moderate risk. Stage 3, conditional. Gaps: a map of changing tasks and roles, a baseline, and a view of vendor and partner dependency.

This is more useful than a stage label alone.

### Several Respondents

Several people from the organization may answer an assessment. Their answers combine as follows:

- An answer that claims progress takes the middle answer: the majority on a yes or no; with an even number of people, the more cautious of the two middle answers. A list of items combines item by item the same way. Whether a week's failure of a workflow would harm the people served or stop a core operation claims progress, because it puts the workflow on the Stage 4 stage line.
- An answer that sets the bar takes the most demanding answer: who would feel a mistake first, the worst consequence of a mistake, and whether a workflow decides something about a specific person.
- A question where several answers can be chosen, such as which data AI uses, takes every answer anyone chose.
- "We don't know" does not vote.
- The list of where the organization uses AI, and how far each use has gone, is shared by everyone and is not voted on.
- The aspiration answers, the type of organization and how far it wants to take AI, are those of the person who started the assessment.
- Each readiness checklist from Stage 3 includes the team's agreement: "Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below." The deciding answers are the answers that feed a stage's stage line and its deciding conditions. The condition applies only at the highest stage whose deciding conditions are met, so certainty is checked once, where the organization stands. While people disagree on a deciding answer up to that stage, or when only one person answered, that stage is at most conditional, and the stages below it are confirmed by their own conditions. One person whose AI runs a Stage 4 workflow, with Stage 4's deciding conditions met, is at Stage 4, conditional.
- Every difference is shown in the part of the result its question belongs to (§10), the aspiration answers included. A difference is marked when another answer given would change whether a condition other than agreement is met.

## 3. Organizational Aspiration Profiles

The framework should help an organization choose a healthy aspiration, not push everyone up the ladder.

### 1. Human-To-Human / Last-Mile Organizations

These organizations create value primarily through trust, presence, relationships, local context, and human service delivery.

**Healthy aspiration:** often Stage 3, and sometimes Stage 4 for selected internal or mission-critical workflows.

They should become AI-literate and AI-enabled where it strengthens the human work. They may not need to build beneficiary-facing AI tools.

**Risk if pushed too far:** they waste time and money trying to become technology organizations when their comparative advantage is human proximity.

### 2. Hybrid Organizations

These organizations deliver human services but also have workflows where custom AI can improve beneficiary outcomes, operational quality, or reach.

**Healthy aspiration:** usually Stage 3 or Stage 4.

They should redesign selected mission-critical workflows while relying on external infrastructure or expert partners for capabilities they should not own alone.

**Risk if pushed too far:** they overbuild infrastructure instead of improving the few workflows where AI creates meaningful value.

### 3. Tech-Focused / Infrastructure Organizations

These organizations have strong technical capacity, reusable data or knowledge assets, and a natural role in enabling others.

**Healthy aspiration:** Stage 4 or Stage 5.

They can operate reliable tools for their own users and, where mission fit and demand are strong, turn those capabilities into infrastructure others use.

**Risk if pushed too narrowly:** they become isolated builders and fail to distribute what they create through trusted implementation and adoption partners.

## 4. The Adoption Loop

Stages describe organizational capacity. The Adoption Loop describes the repeatable work through which capacity is built.

### Step 1: Build Literacy, Trust, and Permission

- Understand practical capabilities and limits.
- Surface fears about jobs, dignity, privacy, bias, and mission fit.
- Give staff permission to experiment safely.
- Use trusted peer examples rather than inevitability narratives.

### Step 2: Select a Meaningful Workflow

- Start with a real pain point or opportunity.
- Understand the existing workflow before adding AI.
- Define the users, intended outcome, baseline, and constraints.
- Ask whether AI is better than process improvement, training, CRM configuration, automation, or no intervention.

### Step 3: Experiment Safely

- Use the smallest experiment that can produce useful learning.
- Apply an initial data, privacy, and consequence screen before experimentation.
- Keep accountable humans involved.
- Avoid exposing beneficiaries to an unvalidated system.

### Step 4: Observe Where The System Breaks

Observe:

- quality and reliability;
- cost and consumption;
- data and context gaps;
- staff and user behavior;
- bias and exclusion;
- exceptions and edge cases;
- dependency on vendors, partners, or specific people;
- unintended effects.

### Step 5: Redesign The Workflow And Roles

- Decide which tasks AI performs, supports, or should not touch.
- Define human review, judgment, escalation, and appeal.
- Redesign jobs and handoffs rather than adding AI on top of a broken process.
- Involve affected staff and users.
- Provide training and change support.

### Step 6: Deploy With Proportional Governance

- Increase safeguards in proportion to risk and exposure.
- Establish ownership, access rules, monitoring, rollback, and failure handling.
- Confirm maintenance and financial sustainability.
- Confirm data portability and meaningful exit paths.

Governance begins before experimentation. Step 6 formalizes and strengthens it for repeatable operation.

### Step 7: Measure Outcomes And Feed Learning Back

- Compare performance to the baseline.
- Measure adoption and behavior, not only availability.
- Examine failures and unintended outcomes.
- Decide whether to improve, expand, constrain, replace, or stop the workflow.
- Feed evidence into the next loop.

The Adoption Loop is progressive, not a minimum checklist every organization must complete immediately. Earlier-stage organizations will usually run only part of it, and that is healthy when the purpose is learning rather than premature deployment:

- **Stage 1** organizations mainly build trust, literacy, and permission.
- **Stage 2** organizations select workflows, experiment, and observe where the system breaks.
- **Stage 3** organizations begin completing the full loop on selected workflows, although evidence, maintenance, or repeatability may still be immature.
- **Stage 4** organizations can run the full loop reliably for mission-critical workflows.
- **Stage 5** organizations extend the loop across organizational boundaries and use evidence from adopters to improve shared infrastructure or capacity.

Organizations may run the loop many times while remaining at the same stage. Stage progression reflects their growing ability to complete it reliably across meaningful workflows — not the completion of one pilot.

## 5. Stage Profiles

Each condition names its capacity domain (§6), by the first word of the domain's name, or the stage line (§2). In this draft, "(proposed)" marks a domain v7 does not give.

## Stage 1: Resisting

Organizations are holding back from AI because they do not yet trust its fit with their mission, people, data, or values.

### Placement

| Placement | Identifier | Domain | How to check |
| --- | --- | --- | --- |
| **Reached when** the organization does not use AI in its work. AI has at most been discussed. | S1.def.5 | — | Does anyone in the organization use AI in their work? |
| **Required:** nothing. Every organization starts here. | | | |

Stage 1 has no conditions: an organization is at Stage 1 whenever Stage 2 is not reached. The "Reached when" row describes the stage; it is not on the stage line and belongs to no domain (§2).

### What it looks like

**Typical traits** (they describe the stage; they are not conditions):

- Deep skepticism or active avoidance of AI tools.
- Concerns about job replacement, ethics, privacy, bias, dignity, or mission authenticity.
- AI is understood mainly as a threat, distraction, or hype cycle.

**Key bottleneck: trust and worldview.** The organization does not yet believe AI can support its mission without damaging what makes the work valuable.

### What helps

| What they need | What backfires |
| --- | --- |
| Safe exposure to peers using AI responsibly. | AI inevitability narratives. |
| Values-based examples from their sector. | Technical-only training. |
| Permission to experiment without shame or pressure. | Forced adoption mandates. |
| Evidence that AI can enhance rather than replace human judgment. | Treating concerns as ignorance. |
| Lightweight, reversible use cases before strategy pressure. | Pushing beneficiary-facing AI before trust exists. |
| Practical answers to privacy and mission concerns. | |

## Stage 2: Exploring

Individuals and teams are trying AI and discovering useful gains without shared direction.

### Placement

| Placement | Identifier | Domain | How to check |
| --- | --- | --- | --- |
| **Reached when** people use AI in their own work, however unevenly. | S2.def.6 | Stage line | Does anyone use AI in their work, even occasionally? |
| **Required:** nothing more. | | | |

Appointing an AI owner does not reach Stage 2: an organization with an owner where nobody uses AI is at Stage 1. The owner counts in Leadership and ownership, where Stage 3 requires a named owner with time and authority.

Sharing what works and what fails, which Stage 3 requires, usually starts here.

### What it looks like

**Typical traits** (they describe the stage; they are not conditions):

- Individuals use general AI tools for writing, research, summarization, reports, administration, analysis, or ideation.
- Usage is fragmented and uneven.
- Early champions share wins informally.
- The organization has no coherent operating model.
- Experiments may occur in real workflows but are not yet repeatable organizational practice.

**Key bottleneck: coordination and coherence.** The organization has enough curiosity to experiment but not enough structure to know what is safe, useful, repeatable, or worth scaling.

### What helps

| What they need | What backfires |
| --- | --- |
| Internal showcasing of practical use cases and failures. | Heavy strategy documents. |
| Basic safe-use and data-handling norms. | Expensive enterprise tools before use cases are clear. |
| A map of current use. | Custom builds before workflow and context readiness. |
| Lightweight workflow discovery. | Beneficiary-facing experiments without safeguards. |
| Simple tool guidance. | Pro-bono projects that skip internal ownership. |
| An initial consequence and risk screen. | Treating experimentation volume as adoption maturity. |
| A learning rhythm. | |
| A path toward a named owner if use keeps spreading. | |

**Pro-bono rule of thumb:** At Stage 2, pro-bono support should focus on exploration, training, workflow mapping, discovery, and readiness. It should not build mission-critical systems.

## Stage 3: Systematizing

Organizations are turning scattered AI use into a shared AI adoption operating system.

### Placement

| Placement | Identifier | Domain | How to check |
| --- | --- | --- | --- |
| **Reached when** the organization runs AI pilots on selected workflows, or has run the Adoption Loop on them more than once. | S3.def.7 | Stage line | Have you run AI pilots on selected workflows, or gone through the Adoption Loop on them more than once? |
| **Required:** a named AI owner, champion, or adoption group has time and authority. | S3.def.3 | Leadership (proposed) | Who owns AI adoption, and do they have protected time and the authority to decide? |
| **Required:** people share what works and what fails across the organization. | S3.def.8 | Evidence (proposed) | Do people share what worked and what failed with AI across the organization? |
| **Required:** AI use becomes expected in selected areas rather than exceptional. | S3.def.1 | Stage line | In which team or function is AI part of how the work is normally done? |

One team or function where AI is part of how the work is normally done is enough for S3.def.1.

**Readiness checklist.** An unmet item is a gap to close (§6). With more than half of the items that apply met, Stage 3 is conditional; with all of them met, it is confirmed (§2).

| Readiness condition | Domain |
| --- | --- |
| Shared licenses or approved tool stack. | Technology |
| Team education and learning rhythm. | People |
| Safe-use and data-handling norms. | Governance |
| Workflow and use-case prioritization. | Leadership |
| Baseline and intended outcome for priority workflows. | Evidence |
| Data/context inventory and maintenance responsibility. | Data |
| Explicit map of changing tasks, roles, review, and exceptions. | People |
| Technical support model. | Technology |
| Vendor and partner dependency view. | Technology |
| Budget, credits, and protected implementation time. | Resources |
| Regular implementation cadence. | Leadership |
| Criteria for deciding which workflows are ready for operational deployment. | Governance |
| Where there is an AI owner: a successor arranged, so the work survives their leaving. | Leadership |
| The people who do the work take part in shaping how AI is used. | People |
| Where the work is done pro bono: someone independent checks its quality, and a handover is agreed. | Technology |
| Where the organization measures its AI work: results are judged by outcomes, not by the volume of output. | Evidence |
| Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | Leadership (proposed) |
| Where AI affects the people served: participation by affected users or credible representatives. | Governance |
| Where AI affects the people served: documented limits on automated decisions. | Governance |
| Where AI affects the people served: qualified and accountable human review. | Governance |
| Where AI affects the people served: a clear method to question, correct, or appeal outcomes where relevant. | Governance |
| Where AI affects the people served: testing for exclusion, bias, and differential harm. | Governance |
| Where AI affects the people served: communication that makes the role of AI understandable. | Governance |
| Where AI affects the people served: safeguards appropriate to the political and surveillance environment. | Governance |

The last seven are the gates for the people the organization serves. AI affects the people the organization serves when:

- those who would feel a mistake first are the people served, directly or indirectly, people deciding on their access to a service, or the wider public; or
- a workflow that runs, or is going into, normal operations touches the people served or organizations that depend on it, or decides or helps decide something about a specific person. When nobody knows whether a workflow does either, it counts as doing so.

Where AI does not affect them, the gates are left out. Sensitive data, or a worst consequence that harms a person, do not make the gates apply on their own. If the answers say only staff would feel a mistake first, but the AI drafts internal reports from case notes about the families served, the gates stay out and the AI adoption aspiration shows the contradiction (§10).

An appeal route is relevant when AI makes or shapes a decision about a specific person: who receives help, who is refused, or in what order people are served.

### What it looks like

**Typical traits** (they describe the stage; they are not conditions):

- The organization standardizes tools, licenses, practices, and safe-use norms.
- The organization prioritizes workflows deliberately.
- It can run the Adoption Loop on selected workflows.
- Most adoption remains internal, but pilots may include mission-critical work if risk and ownership are appropriate.

**Key bottleneck: AI adoption operating system.** The organization needs ownership, rhythm, shared tools, context, workflow redesign capability, evidence practices, technical support, and a practical roadmap.

### What helps

| What they need | What backfires |
| --- | --- |
| A 90-day AI adoption sprint or equivalent. | One-off training without ownership or implementation cadence. |
| AI adoption owner with decision-maker sponsorship. | Treating AI as only an IT project. |
| Shared tool decisions. | Moving directly from scattered experiments to a flagship build. |
| Internal learning and evidence rhythm. | Automating a broken workflow without redesigning roles. |
| Workflow and job redesign support. | Relying on a pro-bono partner while internal ownership is weak. |
| Data/context organization. | Buying a shared tool without addressing context, behavior, and learning. |
| Basic acceptable-use and data-handling guidance. | |
| Dependency and exit-readiness review. | |
| Pilot-readiness criteria. | |
| Change-management support. | |
| A decision about where agents or agentic interfaces are justified, if anywhere. | |

**Pro-bono rule of thumb.** At Stage 3, pro-bono support can help run pilots only if the organization has:

- an internal owner;
- decision-maker commitment;
- protected time;
- usable data/context;
- a clear workflow and intended outcome;
- a risk screen;
- an evidence plan;
- a handoff and exit plan.

Without those conditions, pro-bono support often creates an artifact the organization cannot adopt.

**Agents.** Stage 3 organizations may assess:

- whether the workflow is stable enough for agentic operation;
- what permissions an agent would need;
- what actions must require human confirmation;
- how activity would be observed and audited;
- whether agentic complexity produces enough value to justify it.

Building agents is not required for Stage 3.

## Stage 4: Innovating

Organizations have redesigned and reliably operate one or more mission-critical workflows around AI capabilities.

### Placement

In short: AI is deployed and governed in a crucial internal or important beneficiary-facing workflow. The test below the table says what makes a workflow crucial or important; the table says what deployed and governed mean.

| Placement | Identifier | Domain | How to check |
| --- | --- | --- | --- |
| **Reached when** AI is integral to a workflow that matters to mission delivery or organizational performance. | S4.def.1 | Stage line | Name the workflow. If it failed or went wrong for a week, would the people you serve be harmed, or would a core operation stop? |
| **Required:** the workflow operates repeatedly outside a temporary demo environment. | S4.def.4 | Stage line | Does it run as part of normal operations, rather than as a pilot limited in time or scale? |
| **Required:** the workflow is redesigned rather than merely supplemented with an AI tool. Human roles, review, escalation, and exception handling are explicit. | S4.def.2, S4.def.3 | People (proposed) | Is it written down what the AI does, what people decide, who reviews its output, and what happens with exceptions? |
| **Required:** accountable AI adoption and technical ownership. | S4.gate.3 | Leadership | Who is accountable for this workflow, including its technical side? |
| **Required:** data/context ownership and quality controls. | S4.gate.5 | Data | Who owns the data it uses, and who checks its quality? |
| **Required:** evidence is used to improve the workflow. | S4.def.5 | Evidence (proposed) | Name one change made to this workflow because of what its results or failures showed. |
| **Required:** governance, maintenance, dependency, and failure handling are active operating practices. | S4.def.6 | Governance (proposed) | Does the organization govern and maintain its AI workflows, manage their dependencies, and have a plan for when one fails? |

A workflow matters when it passes this test: if it failed or went wrong for a week, the people the organization serves would be harmed, or a core operation would stop. Allocating emergency food parcels passes. Drafting a newsletter does not. Writing grant applications passes only when the organization depends on those grants and AI is integral to how they are written.

Every requirement but the last concerns the named workflow. S4.def.6 is judged by the organization's practice, not by whether every workflow meets every gate. It stays one condition, in Governance, because one question checks it; its maintenance and dependency side is also on the readiness checklist below, in Technology.

"Governed" in the summary does not include the gates for the people the organization serves, which are Stage 3 readiness conditions.

**Readiness checklist.** An unmet item is a gap to close (§6) and keeps Stage 4 from being confirmed (§2). Before a mission-critical AI workflow is considered operationally ready, the organization should have:

| Readiness condition | Domain |
| --- | --- |
| A defined user need and intended outcome. | Evidence |
| A baseline and evaluation plan. | Evidence |
| A risk and consequence assessment. | Governance |
| Human review, escalation, exception, and appeal rules where relevant. | Governance |
| Security and privacy stance. | Technology |
| Monitoring after deployment. | Evidence |
| Staff or user acceptability checks. | People |
| Maintenance and incident ownership. | Technology |
| Cost and consumption controls. | Resources |
| Vendor, model, data, and partner dependency review. | Technology |
| Portability, rollback, or migration path. | Technology |
| A decision process for continuation, expansion, constraint, or retirement. | Leadership |
| A review of failures and a learning cadence after deployment. | Evidence |
| Where the deployment depends on temporary funding: a plan for continuing the work when it ends. | Resources |
| Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | Leadership (proposed) |

**Examples that do not reach Stage 4.** Each misses the requirement in parentheses.

- A prototype nobody uses (S4.def.4).
- A beneficiary-facing chatbot with no evidence, maintenance, or owner (S4.def.5, S4.def.6, S4.gate.3).
- A one-off automation dependent on one staff member (S4.def.4, S4.def.6).
- A vendor product that is available but has not changed the workflow (S4.def.2).
- A high-risk deployment without accountable human review and failure handling (S4.def.3, S4.def.6).

### What it looks like

**Typical traits** (they describe the stage; they are not conditions):

- Beneficiary-facing deployment may exist, but it is not required.

**Key bottleneck: reliable and responsible workflow transformation.** The challenge is turning demonstrated value into a maintained operating capability that improves outcomes without creating unacceptable harm or dependency.

### What helps

| What they need | What backfires |
| --- | --- |
| Deployment and workflow-integration support. | Generic boot camps. |
| User research and workflow validation. | Junior developers as the main support for high-risk systems. |
| Responsible-AI and human-accountability design. | Isolated demos disconnected from real workflows. |
| Maintained data/context assets. | Deploying to users before safety, privacy, evaluation, and maintenance are clear. |
| Testing and outcome evaluation. | Measuring output volume instead of workflow or mission outcomes. |
| Staff and user adoption strategy. | Treating pro-bono delivery as a substitute for ownership. |
| Change-management and job-transition support. | Assuming open source or self-hosting automatically solves trust and control. |
| Senior technical mentorship and quality assurance. | |
| Maintenance, incident, and financial model. | |
| Dependency management and exit readiness. | |

**Pro-bono rule of thumb.** At Stage 4, pro-bono support is acceptable only with strong quality assurance:

- senior technical quality;
- clear scope and accountability;
- testing and evidence plan;
- handoff and documentation;
- maintenance and incident plan;
- governance requirements;
- named technical accountability;
- explicit post-program ownership;
- continuity if the partner leaves.

For high-risk AI, a few volunteers building something is not enough.

**Agents.** Agents or agent-facing services should be deployed only when the use case justifies the added complexity and the organization has:

- tightly scoped permissions;
- human confirmation for consequential actions;
- observability and auditability;
- cost and consumption limits;
- failure and recovery handling;
- secure credential management;
- a reliable way to disable or replace the system.

Agentic operation is optional. A reliable non-agentic workflow may be the better design.

## Stage 5: Enabling

Organizations provide shared tools, infrastructure, standards, context, evidence, or implementation capacity that other organizations can depend on.

### Placement

| Placement | Identifier | Domain | How to check |
| --- | --- | --- | --- |
| **Reached when** the organization creates reusable tools, datasets, context assets, standards, playbooks, APIs, protocols, services, or learning systems, and there is demonstrated demand from other organizations: at least two independent organizations use one of them in their own work today. | S5.def.7, S5.def.2, S5.guardrail.1 | Stage line | Name what you created, and the organizations outside yours that use it in their own work today. |
| **Required:** other organizations obtain demonstrated value from the capability. | S5.def.3 | Evidence (proposed) | What would each of them lose if it stopped tomorrow, in their own words? |
| **Required:** sustainable funding; maintenance and incident capacity. Both cover the capability others use. | S5.guardrail.3, S5.guardrail.5, S5.def.8 | Resources (proposed) | Who maintains it and handles incidents? Would that continue if your current grant or project ended? |

An independent organization is not a partner in delivering the capability, not its funder, and not a branch of the same network. The capability others use can itself be the workflow that places the organization at Stage 4. The assessment accepts the organization's own answer, provided it names the organizations.

Sustainable funding and maintenance capacity stay one condition, in Resources, because one question checks both; Stage 4 already asks for maintenance and incident ownership, in Technology.

**Readiness checklist.** An unmet item is a gap to close (§6) and keeps Stage 5 from being confirmed (§2). Stage 5 is not just scale ambition. A Stage 5 organization should also have:

| Readiness condition | Domain |
| --- | --- |
| Mission-control guardrails. | Governance (proposed) |
| Standards and governance. | Governance (proposed) |
| Distribution and implementation partnerships. | Resources (proposed) |
| Clear ownership and accountability. | Leadership (proposed) |
| Partner and corporate influence boundaries. | Technology (proposed) |
| Support model for adopters. | People (proposed) |
| Interoperability and portability strategy. | Technology (proposed) |
| Evidence that the infrastructure improves adoption or outcomes. | Evidence (proposed) |
| Credibility with the communities and organizations affected. | Governance (proposed) |
| Where this is the highest stage whose deciding conditions are met: at least two people answered, and they agree on the deciding answers of this stage and of the stages below. | Leadership (proposed) |

### What it looks like

**Typical traits** (they describe the stage; they are not conditions):

- AI capacity serves beyond the organization's own boundaries.
- Success is measured partly by how others adopt, improve, or move faster.
- The organization has legitimacy and credibility to support others.
- AI capability is distributed across leadership, product/program, operations, adoption, and technical functions.

**Key bottleneck: infrastructure, interoperability, legitimacy, and sustainability.** The organization can create value beyond itself but must ensure that others can safely rely on it without mission drift or harmful lock-in.

### What helps

| What they need | What backfires |
| --- | --- |
| Infrastructure and maintenance funding. | Assuming every mature organization should become Stage 5. |
| Productization support. | Building infrastructure without demonstrated demand. |
| Interoperability and protocol design. | Treating funding as the only missing ingredient. |
| Open-source, openly specified, managed, or shared-access strategy as appropriate. | Building without a maintenance and support model. |
| Standards and governance support. | Centralizing data or power unnecessarily. |
| Distribution and implementation partnerships. | Forcing standardization where interoperability would be sufficient. |
| Adoption support for participating organizations. | Closed approaches that create harmful dependency. |
| Cross-organization evidence and learning system. | Corporate partnership drift. |
| Mission protection and influence boundaries. | Trying to replace last-mile organizations instead of enabling them. |
| Sustainable technical and service ownership. | |

**Pro-bono rule of thumb:** At Stage 5, pro-bono alone is not a sufficient basis for shared infrastructure. Long-term ownership, maintenance funding, governance, and adopter support must exist.

**Agents.** Stage 5 organizations may expose APIs, protocols, or services for software agents as well as people when:

- real ecosystem use cases exist;
- permissions and identity are manageable;
- activity is observable;
- service reliability and costs are sustainable;
- adopters retain meaningful choice;
- human accountability remains clear.

Agentic accessibility is an architectural option, not a requirement for Stage 5.

## 6. Adoption Capacity Domains

The stages provide the public narrative. The seven capacity domains show what the organization can strengthen, what is blocking its next healthy step, and what support may help.

Each domain is intentionally supportable. An organization should be able to respond to a weak domain by seeking a service, program, expert, partner, or funding mechanism rather than receiving only a descriptive label.

| Capacity domain | Diagnostic question | Typical support pathways |
| --- | --- | --- |
| Leadership and ownership | Is AI adoption connected to strategy, sponsored by leadership, and owned by someone with sufficient time, authority, and accountability? | Leadership coaching, AI strategy, portfolio prioritization, fractional AI or adoption lead, governance setup. |
| People, workflows, and change | Can staff understand, question, and adopt AI-supported work, and are users, tasks, roles, review, exceptions, and human judgment being redesigned together? | Literacy training, user research, service and workflow design, organizational design, role redesign, change management. |
| Data and organizational context | Are the necessary data, knowledge, values, policies, strategy, and domain context usable, governed, owned, and maintained? | Data-readiness audit, knowledge management, data governance, context preparation, information architecture. |
| Technology, implementation, and resilience | Can the organization select, integrate, test, secure, maintain, and replace the technology while managing vendor, model, partner, cost, and continuity risk? | Vendor selection, solution architecture, technical implementation, senior QA, security review, maintenance, interoperability, migration, and handoff planning. |
| Governance, risk, and accountability | Are consequences, affected people, human accountability, safeguards, escalation, appeals, and incident response appropriate to the workflow's scope and risk? | Responsible-AI advisory, privacy and legal review, safeguarding, risk assessment, governance design, incident planning. |
| Evidence and learning | Are there baselines, intended outcomes, adoption measures, evaluations, failure reviews, and a cadence for improvement? | Measurement design, monitoring and evaluation, AI evaluations, research, learning-system design. |
| Resources and sustainability | Are funding, protected time, procurement, operating costs, maintenance capacity, and a credible long-term model available? For an organization that earns revenue, this includes whether that revenue covers the costs it is meant to cover. | Grants, budgeting, procurement support, business-model design, implementation-capacity funding, operating-cost planning. |

### How To Read The Domains

Each domain shows which of its conditions are in place and which are missing toward the organization's next step:

- the deciding conditions and the readiness checklist of the stage the organization is working toward. From Stage 3, this includes the gates for the people the organization serves (§5, Stage 3) whenever AI affects them;
- Stage 4's conditions and readiness checklist, for each workflow the organization is putting into operation or already operates.

The stage the organization is working toward is its conditional stage, if it has one. Otherwise it is the stage above its highest confirmed stage: an organization at Stage 2 sees Stage 3's conditions, and one with Stage 3 confirmed sees Stage 4's. With Stage 5 confirmed, it sees Stage 5's.

v8 does not use v7's green / yellow / red judgment. A domain lists what is in place and what is missing, so no assessor has to draw the line between yellow and green.

Each condition belongs to one domain; the stage line belongs to none (§2). Every missing condition is a gap. A missing deciding condition means the stage is not reached; a missing readiness condition keeps it from being confirmed (§2). The assessment lists every gap and turns at most three into recommended actions (§8), gaps in the gates for the people the organization serves first.

This is not a universal scorecard. A low-risk internal workflow and a high-risk beneficiary-facing service require different levels of capacity. The assessment should name the gaps rather than average weaknesses into one composite score.

Three important concepts remain outside the domain model:

- **Adoption depth and repeatability** are the stage line (§2): they determine the stage and belong to no domain.
- **Deployment scope** remains an independent descriptor because it changes accountability and support needs.
- **Ecosystem ambition** remains part of the aspiration profile (§3).

### Observable Indicators

#### Leadership and ownership

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | no owner; AI is avoided or treated as someone else's issue. |
| 2 Exploring | no owner with time and authority; informal champions may exist. |
| 3 Systematizing | named AI coordinator, owner, or adoption group with time and authority, and an emerging rhythm. |
| 4 Innovating | an adoption owner and technical owner or reliable senior partner share clear accountability. |
| 5 Enabling | accountability is distributed across leadership, adoption, product or program, operations, and technical functions. |

#### People, workflows, and change

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | low literacy; no workflow participation or redesign. |
| 2 Exploring | literacy is uneven and concentrated in enthusiasts; AI is added to tasks rather than used to redesign workflows. |
| 3 Systematizing | broad basic fluency; priority workflows are mapped and tasks, roles, review, and exceptions are being redesigned. |
| 4 Innovating | staff can operate, question, and improve the workflow; roles, human judgment, escalation, and exceptions are operationalized. |
| 5 Enabling | internal capability and adopter support are strong enough to help other organizations change their own workflows. |

#### Data and organizational context

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | no shared view of what data, knowledge, values, or policies AI could use safely. |
| 2 Exploring | personal prompts and files; no maintained shared context. |
| 3 Systematizing | shared prompts, knowledge sources, inventory, access norms, and maintenance responsibility are emerging. |
| 4 Innovating | a maintained context asset has clear ownership, governance, quality controls, and evaluation data. |
| 5 Enabling | reusable or interoperable assets, APIs, standards, benchmarks, or knowledge systems have clear stewardship. |

Context includes structured and unstructured data; policies and procedures; strategy and program knowledge; quality criteria; mission constraints and organizational values; and domain expertise and lived experience.

At Stage 4, context is integrated into mission-critical workflows and has authoritative sources, ownership and an update cadence, access and consent rules, quality criteria, traceability where relevant, mission and values constraints, and evaluation data.

At Stage 5, the context, datasets, knowledge assets, benchmarks, standards, or protocols the organization provides come with consent and governance, clear ownership, machine-readable access where useful, quality and provenance, maintenance and versioning, immediate valuable use cases, and meaningful choice and exit paths.

#### Technology, implementation, and resilience

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | technical options are unknown or disconnected from adoption needs. |
| 2 Exploring | free tools, individual subscriptions, or early dependence on one enthusiastic person or partner. |
| 3 Systematizing | enough capacity to manage tools and pilots; key vendors and partners are known, with portability and exit options beginning to be assessed. |
| 4 Innovating | integration, testing, maintenance, senior quality assurance, known cost exposure, portability, fallback, and an exit path are in place. |
| 5 Enabling | sustained infrastructure and service capability, transparent architecture, partner boundaries, portability, and credible continuity. |

#### Governance, risk, and accountability

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | concerns exist, but there is no practical guidance or accountable decision-maker. |
| 2 Exploring | basic awareness with little practical guidance or explicit human accountability. |
| 3 Systematizing | acceptable-use guidance, basic risk screening, and named human accountability. |
| 4 Innovating | active controls, accountable humans, monitoring, appeals where relevant, and incident handling match the consequences. |
| 5 Enabling | shared standards, safety, monitoring, incident response, mission protection, and sector trust. |

#### Evidence and learning

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | no direct organizational evidence; beliefs come mainly from headlines, fear, or peer examples. |
| 2 Exploring | anecdotal usefulness, time savings, and documented failures; no baseline. |
| 3 Systematizing | baselines and intended outcomes exist for priority workflows; regular learning reviews begin. |
| 4 Innovating | operational baselines, adoption data, outcome evidence, failure reviews, and a regular improvement cadence. |
| 5 Enabling | cross-organization adoption and outcome evidence, comparative evidence, and infrastructure reliability improve the shared capability and support model. |

#### Resources and sustainability

| Stage | Observable indicators |
| --- | --- |
| 1 Resisting | no allocated time or budget. |
| 2 Exploring | little protected time and no shared implementation budget. |
| 3 Systematizing | tool budget, credits, protected implementation time, and a reliable partner model are emerging. |
| 4 Innovating | implementation resources and a credible maintenance and operating-cost path. |
| 5 Enabling | sustained infrastructure funding or a credible revenue, maintenance, and adopter-support path. |

### Technology Resilience And Dependency

Within the technology, implementation, and resilience domain, the assessment should examine:

- concentration on one model, vendor, platform, person, or partner;
- ownership and portability of data, prompts, context, workflows, and evaluations;
- pricing and consumption-cost exposure;
- availability of model or vendor substitutes;
- reliance on donated credits or pro-bono labor;
- technical and contractual ability to migrate;
- continuity if a partner leaves;
- fallback and rollback options;
- whether open-source or self-hosted alternatives are operationally realistic.

The goal is not independence at any cost. It is managed dependency with meaningful choice and exit paths.

## 7. Fragility Flags

v7 lists 23 fragility flags beside the domains, and many repeat a readiness checklist item, so one gap showed twice. v8 has no separate flags. A flag that repeats a condition merges into it; the others become readiness conditions of their own (§5), in the domain v7 gave the flag.

| Fragility flag in v7 | Domain | In v8 |
| --- | --- | --- |
| No AI adoption owner or executive sponsor. | Leadership | Stage 3, required: a named AI owner, champion, or adoption group has time and authority. |
| Owner lacks authority or protected time. | Leadership | Stage 3, required: a named AI owner, champion, or adoption group has time and authority. |
| Project manager or champion left without succession. | Leadership | Stage 3 readiness: where there is an AI owner, a successor arranged. |
| Weak staff, user, or beneficiary participation. | People | Stage 3 readiness: the people who do the work take part in shaping how AI is used. For the people served, the gate on participation (§5, Stage 3). |
| AI is added to tasks without workflow or role redesign. | People | Stage 3 readiness: explicit map of changing tasks, roles, review, and exceptions. |
| No training, adoption, or change-support plan. | People | Stage 3 readiness: team education and learning rhythm. |
| Unorganized, inaccessible, or unowned data and context. | Data | Stage 3 readiness: data/context inventory and maintenance responsibility. |
| No maintenance responsibility or provenance. | Data | Stage 3 readiness: data/context inventory and maintenance responsibility. |
| Critical context exists only in individual files or vendor platforms. | Data | Stage 3 readiness: data/context inventory and maintenance responsibility. |
| No technical owner or reliable senior partner. | Technology | Stage 3 readiness: technical support model. |
| Pro-bono dependency without quality assurance or handoff. | Technology | Stage 3 readiness: where the work is done pro bono, an independent quality check and an agreed handover. |
| Single-vendor, single-model, single-person, or single-partner dependency. | Technology | Stage 4 readiness: vendor, model, data, and partner dependency review. |
| Unknown consumption-cost exposure. | Technology | Stage 3 readiness: vendor and partner dependency view. |
| No migration, rollback, fallback, maintenance, or continuity path. | Technology | Stage 4 readiness: portability, rollback, or migration path. |
| Sensitive or beneficiary-facing exposure without proportional governance. | Governance | Stage 3 readiness: safe-use and data-handling norms. |
| No explicit human accountability, escalation, appeal, or incident owner. | Governance | Stage 4 readiness: human review, escalation, exception, and appeal rules where relevant. |
| Security, privacy, safeguarding, or consequence risks have not been assessed. | Governance | Stage 4 readiness: a risk and consequence assessment. |
| No baseline, intended outcome, or adoption measure. | Evidence | Stage 3 readiness: baseline and intended outcome for priority workflows. |
| Output volume is treated as impact. | Evidence | Stage 3 readiness: where the organization measures its AI work, results are judged by outcomes. |
| No failure review or learning cadence after deployment. | Evidence | Stage 4 readiness: a review of failures and a learning cadence after deployment. |
| No protected implementation time. | Resources | Stage 3 readiness: budget, credits, and protected implementation time. |
| No tool, credit, operating, or maintenance budget. | Resources | Stage 3 readiness: budget, credits, and protected implementation time. |
| Deployment depends on temporary funding with no continuation plan. | Resources | Stage 4 readiness: where the deployment depends on temporary funding, a plan for continuing the work. |

v7 names an initial consequence and risk screen among what helps at Stage 2, and basic risk screening among the Governance indicators for Stage 3, without a checklist item for it. v8 keeps it that way: the flag on unassessed risks merges into Stage 4's risk and consequence assessment.

## 8. Support Pathways

The assessment turns at most three gaps into recommended actions, each with a concrete support recommendation where support is available; without it, the action says what the organization can do itself. The provider may be a nonprofit intermediary, a consultant, a funder, a technology company, a research partner, a pro-bono team, or a hired staff member.

A useful recommendation specifies:

- the capacity gap;
- the support type;
- the appropriate provider profile;
- the expected capacity outcome;
- the evidence that the gap has closed.

The recommendations start with what the people who answered must agree on: every marked difference (§2, Several Respondents), or, when only one person answered, asking at least one more person to answer. This comes before the actions and is not one of them. The recommended actions then come in this order:

1. Gaps in the gates for the people the organization serves, whether or not support is available for them. Without support, the action says what the organization can do itself.
2. Gaps that support available to the organization now can help close: support that addresses that condition, for which the organization is eligible, and which is open to it. First what a workflow in or going into normal operations still lacks; then the other missing conditions of the conditional stage; then the deciding conditions of the stage above. Ties go to a missing condition before one nobody could confirm, then by domain in the order of the §6 table.
3. Gaps no available support helps with, in the same order. They stay on the list of gaps, marked as having no support yet. Support counts as available only once someone has checked that its call for applications is open. Until then, the gap is ranked as having no support, and the list of gaps may name the support, marked as unchecked.

When the stage above fails only on its stage line, the gap is the next step on the stage line, such as running a pilot on one selected workflow.

The recommendations are worked out again whenever the result is read, from the support available that day. The diagnosis, meaning the stage, its status and the gaps, stays as it was issued.

The recommendations end with the next Adoption Loop step (§4). With no workflow in operation, it is the first step the organization has not done. With one, it is the step the first recommended gap belongs to.

Examples:

- **Leadership and ownership:** fund a fractional adoption lead who establishes governance, prioritization, and a 90-day operating rhythm.
- **People, workflows, and change:** engage a service-design and change partner to redesign one priority workflow with staff and users.
- **Data and organizational context:** run a data and knowledge-readiness sprint that assigns ownership and produces a maintained context asset.
- **Technology, implementation, and resilience:** add senior architecture and QA support, with documentation, cost visibility, portability, and a handoff plan.
- **Governance, risk, and accountability:** commission a proportional risk, privacy, safeguarding, and human-accountability review before external deployment.
- **Evidence and learning:** establish a baseline, intended outcome, evaluation method, and monthly learning review for the selected workflow.
- **Resources and sustainability:** secure protected staff time, operating budget, procurement support, and a post-pilot maintenance model.

Product credits do not create implementation capacity. Pro-bono construction does not create ownership. Training alone does not redesign a workflow. Funding should address the full adoption system around the technology.

## 9. Optional Project Readiness Note

The framework does not add project maturity as a second core stage system. Many social impact organizations will deploy AI across several workflows rather than pursue one flagship project.

When an organization is pursuing a major AI project, the assessment should still ask:

> Is this project ahead of the organization's adoption capacity?

The stage line answers it (§2). When AI goes further than the organization's stage, the result says so in one sentence, naming the workflow: for example, "AI already runs a workflow at Stage 4; the organization holds Stage 3, conditional."

Lightweight guidance:

- Stage 1 organizations should not be pushed into a build project.
- Stage 2 organizations may use low-risk prototypes as learning devices.
- Stage 3 organizations can run pilots when ownership, time, context, workflow understanding, basic governance, and evidence plans exist.
- Stage 4 organizations can take on further mission-critical AI. Before each workflow goes into operation, they should close its readiness checklist gaps and meet the safeguards appropriate to its risk and scope.
- Stage 5 organizations can provide infrastructure others depend on. Demand, demonstrated value, maintenance, and funding are required (§5); legitimacy, governance, evidence, adopter support, and mission protection should be in place before others come to rely on it.

A project can be technically advanced while the organization remains adoption-fragile.

## 10. Assessment Output

A practical v8 assessment returns a result in three parts. Each answers one question.

1. **AI adoption aspiration:** what kind of organization this is, and how far it is sensible to take AI. The healthy aspiration profile (§3), deployment scope, risk exposure, whether AI affects the people the organization serves (§5, Stage 3), and where respondents' answers differ on these. It never changes the stage; it sets the bar.
2. **AI adoption stage:** where the organization is today. The stage and its status (§2), the stage line and the sentence when AI goes further than the stage (§9), the seven-domain capacity profile with the conditions in place and missing (§6), and where respondents' answers differ.
3. **Recommendations for further AI adoption:** what to do first, and who can help. What to agree on; at most three recommended actions, each with its expected capacity outcome, its evidence of progress and, where support is available, its support pathway (§8); and the next Adoption Loop step.

A result shows the date it was issued and the framework version it was issued on. It does not expire. When a later framework version is released, the result says it was issued on an earlier one. A later assessment of the same organization shows what changed since the previous one.

Example:

> Issued on 5 November 2026, on framework version 8.0.0.
>
> **AI adoption aspiration:** a hybrid organization. Healthy aspiration: Stage 4 for two mission-critical internal workflows. Current scope: shared internal, with one mission-critical pilot. Moderate risk. AI does not affect the people the organization serves.
>
> **AI adoption stage:** Stage 3, conditional. The technology and evidence domains have gaps: a technical support model, quality assurance with a handover for the one pro-bono partner the organization depends on, and a baseline for the pilot workflow.
>
> **Recommendations for further AI adoption:** the three people who answered agree, so there is nothing to settle first. Recommended actions: set up a technical support model with a senior technical partner; have the pro-bono work checked by someone independent, with a portability and handoff plan; run a 90-day measurement-and-learning cycle that sets the pilot's baseline before operational deployment. Next Adoption Loop step: redesign and validate the pilot workflow (Step 5), then reassess deployment readiness.

## 11. Core v8 Message

The compressed v8 thesis:

> AI adoption in social impact organizations is an operating-model transition, not a tool rollout.

The practical v8 line:

> Stage 3 builds the AI adoption operating system. Stage 4 turns selected mission-critical workflows into reliable, governed, evidence-producing capabilities. Stage 5 turns proven capabilities into mission-protected infrastructure others can depend on.

The strategic implication:

> The winners will not be the organizations with the most AI tools or demos. They will be those that make adoption repeatable, governed, economically sustainable, and cumulative.

The road consists of:

- leadership and accountable ownership;
- people, workflows, and change;
- data and organizational context;
- resilient technology and implementation;
- proportional governance and human accountability;
- evidence and learning loops;
- resources and sustainability that survive the pilot.
