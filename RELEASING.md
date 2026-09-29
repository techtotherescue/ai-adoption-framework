# Releasing the framework

The framework is the method: its authors, Jacek Siadkowski and Radosław
Taraszka (Tech To The Rescue), write it. This is how a release is made.

## Steps

1. **Proposal.** A change starts as a proposal to the authors. Open an issue
   describing it.
2. **Approval.** The authors approve it: one author's approval for a patch,
   both authors' approval for a minor or major release. Each approval says
   where it was given, for example a PR comment, an email, or a Slack link.
   Only an author writes an `Approved:` line. The first release, 6.0.0,
   recorded v6 as its authors had already released it, so one approval
   sufficed.
3. **Number and changelog.** The release gets its number (major, minor, or
   patch) and a CHANGELOG.md entry. A major release also gets a crosswalk
   from the previous identifiers.
4. **Publish.** The release is published. Each tool that reads the framework
   reviews it on its own side.

## Release types

- **Major.** Stages, domains, or identifiers change, or a rule changes so
  that an organization's placement can change. A major release comes with a
  crosswalk from the previous identifiers.
- **Minor.** A condition is clarified or added, and the same answers still
  give the same result.
- **Patch.** Wording, errata, or new identifiers for existing text.

## Mechanics

Run:

```
node scripts/release.mjs <version>
```

This writes the CHANGELOG.md entry skeleton with the SHA-256 hash and
`Approved: TODO`. An author replaces the TODO with the approval line.

Run:

```
node scripts/check.mjs
```

This must pass. CI runs it on every pull request.

After the pull request merges, an author tags `v<version>` and creates a
GitHub release.

## The hash

The release hash covers the text and the identifiers together:

```
cat v6.md v6.json | shasum -a 256
```

The CHANGELOG.md entry for each release records this hash.
