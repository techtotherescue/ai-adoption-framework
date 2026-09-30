# AI Adoption Framework v7: which domain each condition belongs to

A draft for change 1 of the [v7 proposal](v7.md), 30 September 2026. Nothing here is in force yet.

Under change 1, a missing required condition makes one domain red. The fragility flags already sit under their domains in v6 §7. The 35 conditions below do not, so v7 assigns each to exactly one domain and records it in `v7.json`.

**The rule for assigning:** a condition belongs to the domain whose diagnostic question in §6 names it. When two questions name it, or none does, the assignment is disputed and the authors choose; the table proposes one domain and gives the alternative.

For example, "monitoring after deployment": the _Technology_ question asks whether the organization can "maintain" its technology, and the _Evidence_ question asks about "evaluations". The _Evidence_ support pathways name "monitoring and evaluation" outright, so the proposal is _Evidence_, and the assignment is marked disputed.

Domains: **Leadership** (Leadership and ownership), **People** (People, workflows, and change), **Data** (Data and organizational context), **Technology** (Technology, implementation, and resilience), **Governance** (Governance, risk, and accountability), **Evidence** (Evidence and learning), **Resources** (Resources and sustainability).

## Stage 3 completion signals

| ID           | Condition                                                                   | Proposed domain | Alternative                        |
| ------------ | --------------------------------------------------------------------------- | --------------- | ---------------------------------- |
| S3.signal.1  | AI adoption owner with time and authority.                                  | Leadership      |                                    |
| S3.signal.2  | Shared licenses or approved tool stack.                                     | Technology      | Resources (procurement)            |
| S3.signal.3  | Team education and learning rhythm.                                         | People          |                                    |
| S3.signal.4  | Safe-use and data-handling norms.                                           | Governance      | Data (governed data)               |
| S3.signal.5  | Workflow and use-case prioritization.                                       | Leadership      |                                    |
| S3.signal.6  | Baseline and intended outcome for priority workflows.                       | Evidence        |                                    |
| S3.signal.7  | Data/context inventory and maintenance responsibility.                      | Data            |                                    |
| S3.signal.8  | Explicit map of changing tasks, roles, review, and exceptions.              | People          |                                    |
| S3.signal.9  | Technical support model.                                                    | Technology      |                                    |
| S3.signal.10 | Vendor and partner dependency view.                                         | Technology      |                                    |
| S3.signal.11 | Budget, credits, and protected implementation time.                         | Resources       |                                    |
| S3.signal.12 | Regular implementation cadence.                                             | Leadership      | Evidence (cadence for improvement) |
| S3.signal.13 | Criteria for deciding which workflows are ready for operational deployment. | Governance      | Evidence (evaluations)             |

## Stage 4 operating gates

| ID         | Condition                                                                 | Proposed domain | Alternative                    |
| ---------- | ------------------------------------------------------------------------- | --------------- | ------------------------------ |
| S4.gate.1  | a defined user need and intended outcome                                  | Evidence        | People (users)                 |
| S4.gate.2  | a baseline and evaluation plan                                            | Evidence        |                                |
| S4.gate.3  | accountable AI adoption and technical ownership                           | Leadership      |                                |
| S4.gate.4  | a redesigned workflow and role model                                      | People          |                                |
| S4.gate.5  | data/context ownership and quality controls                               | Data            |                                |
| S4.gate.6  | a risk and consequence assessment                                         | Governance      |                                |
| S4.gate.7  | human review, escalation, exception, and appeal rules where relevant      | Governance      | People (review, exceptions)    |
| S4.gate.8  | security and privacy stance                                               | Technology      | Governance (privacy)           |
| S4.gate.9  | monitoring after deployment                                               | Evidence        | Technology (maintain)          |
| S4.gate.10 | staff or user acceptability checks                                        | People          |                                |
| S4.gate.11 | maintenance and incident ownership                                        | Technology      | Governance (incident response) |
| S4.gate.12 | cost and consumption controls                                             | Resources       | Technology (cost risk)         |
| S4.gate.13 | vendor, model, data, and partner dependency review                        | Technology      |                                |
| S4.gate.14 | portability, rollback, or migration path                                  | Technology      |                                |
| S4.gate.15 | a decision process for continuation, expansion, constraint, or retirement | Leadership      | Evidence (failure reviews)     |

## Additional gates for beneficiary or external exposure

| ID            | Condition                                                              | Proposed domain | Alternative              |
| ------------- | ---------------------------------------------------------------------- | --------------- | ------------------------ |
| S4.exposure.1 | participation by affected users or credible representatives            | Governance      | People (users)           |
| S4.exposure.2 | documented limits on automated decisions                               | Governance      |                          |
| S4.exposure.3 | qualified and accountable human review                                 | Governance      |                          |
| S4.exposure.4 | a clear method to question, correct, or appeal outcomes where relevant | Governance      |                          |
| S4.exposure.5 | testing for exclusion, bias, and differential harm                     | Governance      | Evidence (evaluations)   |
| S4.exposure.6 | communication that makes the role of AI understandable                 | Governance      | People (staff and users) |
| S4.exposure.7 | safeguards appropriate to the political and surveillance environment   | Governance      |                          |

## What the proposal produces

| Domain     | Conditions | Disputed |
| ---------- | ---------- | -------- |
| Leadership | 5          | 2        |
| People     | 4          | 0        |
| Data       | 2          | 0        |
| Technology | 7          | 3        |
| Governance | 11         | 6        |
| Evidence   | 4          | 2        |
| Resources  | 2          | 1        |

Governance holds all seven exposure gates. When AI affects people and something is missing there, governance turns red, which matches change 1's rule that those gaps come first.
