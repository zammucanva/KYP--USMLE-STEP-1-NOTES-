# ARCHIVE — pre-rebuild sandbox state (rescued 2026-11-22)

This branch preserves the files found loose in the sandbox at /home/z/my-project/
(top level) after the platform recycled the sandbox directory. They date from the
2026-11-09 session, produced under the OLD 43-topic pharmacology census.

## Status: SUPERSEDED — do not build from this branch

The canonical project is `main`, which contains the 29-topic census rebuild and
all production through the PH16-PH20 batch (Pharmacology 21/29; Biochemistry
55/55, Immunology 24/24, Microbiology 39/39, Pathology 19/19; 165 topics total;
evidence 4084/4084 verified). The old 43-topic pharmacology topics on this
branch were re-produced under the 29-topic census with full QA and live on
`main` (PH11-PH20 map to old PH13-PH25 + atropine/anticholinesterase/sulfa
merges).

This archive exists only so that no completed work is ever lost to a sandbox
reset. Nothing here is missing from `main` in substance.

## What is in here

- content/usmle/ — old manifests, chapters/pharmacology.json (43-topic census), tracker.json (170 topics)
- src/lib/kyp/usmle/notes/ + src/components/kyp/usmle/visuals/ — old note + visual sources
- scripts/usmle-pipeline/ + scripts/p-pages/ — old generators and census page images
- tests/, worklog.md (old-census session log), bun.lock, tsconfig.json, tailwind.config.ts

## Deliberately NOT included

- upload/*.pdf — the two copyrighted source textbooks (never pushed to GitHub, by policy)
- .recovery-quarantine/kyp-usmle-notes-stale-docs-20261102/docs/qa/ — 436MB of QA
  screenshots of the superseded visuals (p12-p16, ph*-old batches); the re-done
  equivalents' QA screenshots live on `main` under docs/qa/
- tool-results/ — sandbox chat tool logs, not project files
- .env — sandbox secrets, never committed
