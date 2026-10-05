# v7 proposal: feedback register

Every comment on the v7 proposal gets an identifier here, whatever its source, so that each change to the draft can say which comment it answers. Comments given in another language are recorded in an English translation. A comment is closed only when its source agrees.

Status: `open` (not yet answered), `drafted` (answered in the draft, waiting for the source), `closed` (the source agrees), `declined` (with the reason).

## Review comments

| ID  | Source                                              | Comment                                                                                                                                                                             | Status  | Response                                                                                                                                                                                                                                                   |
| --- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F1 | Review relayed by Radosław Taraszka, 2 October 2026 | The summary of what Stage 3 and Stage 4 require is hard to understand. Stage 3 talks about signals and Stage 4 about gates, and it is not clear what either means. | drafted | Every stage profile in §5 now opens with Placement: reached when, required, readiness checklist. §2 summarizes all five stages in one table. Decisions P1–P6 below. |
| F2 | Review relayed by Radosław Taraszka, 2 October 2026 | There is nothing on what Stages 1, 2 and 5 require. The structure the proposal introduces for Stages 3 and 4 should be used for every stage. | drafted | Stages 1, 2 and 5 get the same Placement block as Stages 3 and 4. Decisions P1–P6 below. |
| F3 | Review relayed by Radosław Taraszka, 2 October 2026 | The diff does not show the difference between v6 and v7. Was v7 rewritten, or is the structure wrong? Without a diff from the source it is hard to see the context and the changes. | drafted | v7 was not rewritten: it did not yet exist as text, and the proposal described its changes in a note. `v7-draft.md` now starts as a byte-for-byte copy of `v6.md` (6.0.1), so the pull request shows every change against v6, one commit per change; `v7-compare.html` shows v6 and v7 side by side; `v7.md` summarizes the changes. |

## Decisions on stage placement

Taken by Radosław Taraszka on 5 October 2026 in answer to F1 and F2. Jacek Siadkowski has not reviewed them yet.

| ID | Decision | In the draft |
| --- | --- | --- |
| P1 | Every stage opens with the same block: what places an organization at the stage, what it requires (without it, the stage is lower), and a readiness checklist whose gaps never lower the stage. §2 summarizes the five stages in one table. | §2, Dimension 1; §5, Placement in each stage |
| P2 | Stage 1 is placed by use, not attitude: the organization does not use AI in its work, and nobody owns its adoption. Skepticism and concerns describe a typical Stage 1 organization; they are not a condition. | §5, Stage 1 |
| P3 | Stage 2 is placed by any use of AI in people's own work, however uneven. | §5, Stage 2 |
| P4 | Stage 3 requires, besides the named owner, champion, or adoption group, that people share what works and what fails across the organization. This can move an organization from Stage 3 to Stage 2. | §5, Stage 3 |
| P5 | Stage 5 requires everything Stage 4 requires, other organizations depending on the capability with demonstrated value, sustainable funding, and maintenance and incident capacity. The other guardrails become a readiness checklist. v6 required all twelve guardrails, so this relaxes v6. | §5, Stage 5 |
| P6 | §10, Recommended Stage Transitions, is removed: its lists repeat the stage profiles. Its identifiers are retired, with a map to where each item lives in v7. | Not yet applied |

The Stage 3 "reached when" wording (pilots on selected workflows, or the Adoption Loop run more than once) is drafted from What Defines This Stage and has no decision behind it yet.

## Found while applying the changes to the draft

Places where the v6 text, unchanged, now contradicts a proposed change. None is fixed in the draft yet.

| ID  | Where                                                       | Issue                                                                                                                                                                                                                       | Status  |
| --- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| D1  | §9, Optional Project Readiness Note                         | "Stage 4 organizations can operate mission-critical AI only with the full operating gates appropriate to risk and scope" contradicts change 3, under which two gates are required and the others are a readiness checklist. | open    |
| D2  | §6, How To Read The Domains; §11, Assessment Output, item 6 | "Two or three binding constraints" contradicts change 1, under which the assessment names at most three.                                                                                                                    | open    |
| D3  | §2, How To Read The Framework                               | The mechanical rename gives "Version 7 preserves the three dimensions that v5 separated", which reads as if v7 introduced them.                                                                                             | open    |
| D4  | §8, Support Pathways                                        | "The provider may be TTTR, another nonprofit intermediary, …" names one provider. Change 5 removes the programs of one provider, but not this mention.                                                                      | open    |
| D5  | Header                                                      | "Updated: 2026-07-31" and the transcription note describe v6. Replaced with a draft date and a note that v6 (6.0.1) is the released version; the release date goes in at release.                                           | drafted |
