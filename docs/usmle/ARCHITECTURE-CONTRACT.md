# KYP · USMLE Step 1 2026 — Frozen Architecture Contract

**Contract version:** 1.0.0 · FROZEN
**Established:** Phase I-A, following approval of the 10-topic pilot
**Applies to:** the USMLE 2026 content layer inside Know Your Pill (KYP)
**Change control:** This contract is frozen. Any change to any section below
requires STOPPING production and obtaining explicit user approval first
(see §10 Stop Conditions). Verbatim rule: *“Do not alter these contracts
without stopping for approval.”*

---

## 0. Authority and the Three-Layer Rule

The USMLE 2026 system is a **CONTENT LAYER inside the existing KYP website**.
Three layers, each with one source of truth:

| Layer | Source of truth | Rule |
|---|---|---|
| **CONTENT** | First Aid for the USMLE Step 1 2026 (the two supplied PDFs) | New USMLE material is authored here. Terminology, organization, emphasis and clinically relevant details follow the source (§5). |
| **LAYOUT** | The existing KYP website | USMLE pages use the existing navbar, footer, typography, spacing, cards, callouts, badges, theme system, responsive layout, Section/Container primitives. Nothing new is designed. |
| **MECHANISM** | The existing shared KYP `<MechanismFlow />` component + its data format | All mechanisms render through the shared engine. No second mechanism engine. No stacked-card revert. |

**Prohibited (permanently):**
- Redesigning the KYP website or creating a new layout for USMLE content.
- Replacing or forking the KYP design system or MechanismFlow.
- Resolving client-module visual registry objects inside server components (§3.3).
- Mixing this project with the Oxford (#1) or Stahl (#2) projects.
- Git operations (commit / push / deploy / reset / stash) during Phase I — all
  work stays local, synced file-by-file to the ossfs source-of-record repo.

---

## 1. Approved Page Structure (frozen from the approved pilot)

### 1.1 Routes and URL contract

| URL | Page | Status |
|---|---|---|
| `/usmle` | Section hub (hero + subject-grouped card grid, same pattern as `/medicine` and `/learn`) | live |
| `/usmle/[slug]` | Topic note page (anatomy in §1.2) | live; `generateStaticParams` over all note ids; `dynamicParams = false` |
| `/usmle/compare` | Same-site comparison launcher (KYP page ↔ USMLE note, two labeled tabs; iframes remain blocked site-wide) | live |
| `/legacy` | The pre-USMLE KYP app (old build, proxied) — kept for comparison | live |
| `/?topic=<slug>` | Preview alias → 307 → `/usmle/<slug>` | live |
| `/?view=compare&topic=<slug>` | Preview alias → 307 → `/usmle/compare?topic=<slug>` | live |

The preview aliases are gated behind `KYP_USMLE_PREVIEW=1` in `next.config.ts`
and must remain byte-neutral when the flag is off.

### 1.2 Topic page anatomy (top → bottom, fixed order)

1. `Navbar` (existing)
2. `UsMLETopicRail` (left sticky rail, grouped nav: Foundations → Core Content → Exam Application → KYP Connections)
3. Breadcrumb strip (`USMLE 2026 / <title>`)
4. Hero: badges (`USMLE 2026 · <subject>`, read time, difficulty ★–★★★, pilot category), display title, subtitle, tag badges
5. **Core Idea** panel (brand-tinted card: what / why it matters / the one idea to carry into the exam)
6. **Mechanisms** section — rendered only by the shared `<MechanismFlow />` (§4)
7. **Deep Dive** — `BlockStack` over the note's `blocks` (§2)
8. **Clinical Picture** (optional — only if the note carries `clinical` blocks)
9. **Pharmacology** (optional — only if the note carries `drugs`)
10. **USMLE Attack** — vignette patterns / classic confusions (traps) / look-alike pivots / mini-case with answer autopsy
11. **Memory & Rapid Review** — mnemonic hooks / 30s-3m-10m ladder / active-recall deck
12. **KYP Connections** — related topic cards + cross-subject threads
13. Source line (`sourceRef`) + previous/next cards
14. `Footer` + `FloatingSearch` (existing)

Sections 8–9 are conditional on content presence — per Phase I-E, difficulty
determines depth and irrelevant sections are never forced onto simple topics.

### 1.3 Server/client boundary rules (frozen — this fixed the pilot's one real bug)

- Note pages, `blocks.tsx`, and all block views are **server components**.
- The only client islands on a topic page: `UsMLETopicRail`,
  `UsMLEVisualFigure` (visual figures), `MechanismFlow`, the tabs/accordion/
  mini-case interactivity inside `note-sections.tsx` / `mini-case.tsx`.
- **Visual rendering contract:** the server side passes ONLY the serializable
  `visualId` string across the boundary; the `"use client"`
  `UsMLEVisualFigure` resolves `VisualRegistry[visualId]` and renders. A
  server component must never import the registry module or read properties
  of any object exported from a `"use client"` module.
- The registry is resolved per-figure inside the client island; the note
  system is never converted to client rendering as a whole, and the full
  registry is never loaded globally on pages that don't show visuals.
- Failure mode is explicit: an unknown id renders the visible
  `Visual unavailable: <id>` placeholder, and the validator (§9) treats any
  occurrence as a QA failure.

### 1.4 KYP compliance requirement

Every new page must read as “the same KYP website” when compared side-by-side
with an existing KYP page (navbar, footer, typography, spacing, content
width, cards/callouts, theme behavior, page hierarchy). New visual design
language introduced anywhere = contract violation.

---

## 2. Approved Note Schema (frozen)

Defined in `src/lib/kyp/usmle/types.ts` (`KypUsMLENote`), enforced by
`scripts/usmle-pipeline/validate.ts` + `audit.ts`. Field summary:

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string (kebab slug) | ✓ | = `topicId` everywhere in the pipeline |
| `title` / `subtitle` | string | ✓ | subtitle teaches, not decorates |
| `subject` / `system` | string | ✓ | book subject / section·chapter line |
| `pilotCategory` | string | ✓ | stress dimension covered (pilot-era; retained) |
| `difficulty` | 1 \| 2 \| 3 | ✓ | drives depth (Phase I-E) |
| `readTime` | minutes | ✓ | honest estimate |
| `sourceRef` | string | ✓ | display string; dual page mapping lives in the manifest (§5.3) |
| `tags` | string[] | ✓ | ≤ 8 shown in hero |
| `core` | { what, why, keyIdea } | ✓ | the one-idea panel |
| `mechanisms` | `UsMLEMechanism[]` | ✓ | ≥ 1; shared MechanismFlow data (§4) |
| `blocks` | `Block[]` | ✓ | Deep Dive content (block kinds below) |
| `clinical` | `Block[]` | – | manifestations / labs / dx / tx |
| `drugs` | `DrugCard[]` | – | drug → target → mechanism → effect → uses → adverse (+clue) |
| `usmle.patterns` | `PatternCard[]` | ✓ | stem / discriminator / concept / answer |
| `usmle.traps` | `TrapCard[]` | ✓ | a vs b, whyConfused, keyDifference, clue |
| `usmle.pivots` | `PivotCard[]` | ✓ | lookAlike / differentiator / correctPath |
| `usmle.miniCase` | `MiniCase` | ✓ | vignette, question, ≥ 4 options, exactly 1 `correct`, `why` on every option, reasoning |
| `mnemonics` | `Mnemonic[]` | ✓ (where useful) | code / meaning / memorizes / whenToUse / clinical |
| `rapidReview` | { s30, m3, m10 } | ✓ | all three tiers non-empty |
| `recall` | { q, a }[] | ✓ | active recall deck |
| `related` | `RelatedTopic[]` | ✓ | title / note (connections must teach) / optional topicId link |
| `crossLinks` | `CrossLink[]` | ✓ | subject / connection |

Block kinds and their KYP presentation (all rendered by `blocks.tsx` with
existing KYP components only): `text` (serif h3 + prose), `list` (lead-in
cards), `table` (KYP zebra comparison-table), `compare` (two-column brand vs
neural table), `steps` (numbered vertical steps), `visual` (figure +
"What you see" + "What should I notice?" callout), `callout`
(why=info / clinical=success / exam=warning / memory=tip).

**Depth standard (Phase I-E):** every meaningful topic is educational, not
merely transcribed. Hard concepts (difficulty 3) get deeper explanation,
better diagrams and stronger reasoning support; simple topics are not padded
with irrelevant sections.

---

## 3. Visual Registry Architecture (frozen)

### 3.1 Runtime architecture

- `src/components/kyp/usmle/visuals/registry.tsx` — `"use client"` map
  `visualId → ComponentType`. The single registry for all USMLE visuals.
- `src/components/kyp/usmle/visuals/figure.tsx` — `"use client"`
  `UsMLEVisualFigure({ visualId })` island (§1.3).
- `VisualBlock { kind: "visual", visualId, title, caption, notice }` —
  the only way a note references a visual.
- Visuals may be shared across topics by `visualId`.

### 3.2 Visual authoring rules

- **Original KYP artwork only.** No First Aid artwork, photography, or
  raster extracts are reproduced (see §3.4 rights rules).
- Theme-aware: SVGs use `currentColor` + KYP color tokens; no hard-coded
  fills that break light or dark mode; labels sit on token backgrounds with
  guaranteed contrast in both themes.
- KYP styling inside the existing figure frame (`overflow-x-auto
  kyp-scroll` bordered card); wide visuals pan horizontally on mobile
  inside that container — the established KYP convention for wide tables.
- **Placement rule:** a visual is placed NEXT TO the concept it explains,
  inside the note's block flow. End-of-page “textbook images” galleries are
  prohibited.
- No decorative visuals. Every visual teaches something the adjacent text
  asserts.

### 3.3 Server/client boundary

Frozen in §1.3. The validator greps the source tree for forbidden patterns
(server components importing the registry, registry imports outside the
visuals folder + figure island).

### 3.4 Textbook visual inventory (the textbook is a VISUAL SOURCE)

First Aid is treated as a visual source, not only a text source. For every
chapter/subsection/topic, meaningful textbook visuals are inventoried:
anatomical illustrations, physiology/biochemical pathway diagrams, molecular
structures, pharmacology/receptor/signal-transduction diagrams, pathology
illustrations, histology, gross pathology, radiology, ECGs, microbiology and
dermatology images, neurologic localization diagrams, endocrine/reproductive/
renal/cardiovascular/hematology/immunology diagrams, clinical and diagnostic
algorithms, flowcharts, tables that function as visual learning aids,
comparison figures, timelines, labeled anatomy, pattern-recognition and
high-yield summary figures.

**Visual inventory record** (one per meaningful textbook visual, stored in
`content/usmle/visual-inventory/<topicId>.json`):

| Field | Meaning |
|---|---|
| `visualId` | inventory id, `<topicId>-sv<N>` |
| `sourceBook` | always `First Aid for the USMLE Step 1 2026` |
| `sourcePages` | dual page mapping (§5.3) |
| `chapter` / `subsection` / `topicId` | location |
| `visualType` | vocabulary in schemas.ts (ANATOMY_ILLUSTRATION, PHYSIOLOGY_DIAGRAM, BIOCHEMICAL_PATHWAY, PHARMACOLOGY_DIAGRAM, RECEPTOR_DIAGRAM, SIGNAL_TRANSDUCTION, PATHOLOGY_ILLUSTRATION, HISTOLOGY, GROSS_PATHOLOGY, RADIOLOGY, ECG, MICROBIOLOGY_IMAGE, DERMATOLOGY_PHOTO, LOCALIZATION_DIAGRAM, ENDOCRINE_DIAGRAM, CLINICAL_ALGORITHM, DIAGNOSTIC_ALGORITHM, FLOWCHART, VISUAL_TABLE, COMPARISON_FIGURE, TIMELINE, MOLECULAR_STRUCTURE, SUMMARY_FIGURE, OTHER) |
| `visualPurpose` | what it teaches |
| `sourceFigureDescription` | what the source figure shows (internal fidelity anchor) |
| `requiredInKYP` | boolean — is a KYP visual educationally required |
| `implementationType` | `SOURCE_REPRODUCTION` \| `SOURCE_REFERENCE` \| `ORIGINAL_KYP_REDRAW` \| `ORIGINAL_KYP_ADAPTATION` |
| `rightsStatus` | `CLEAR_FOR_REPRODUCTION` \| `COPYRIGHTED_NO_REPUBLISH` \| `UNCLEAR` |
| `kypVisualId` | registry visualId implementing it (nullable) |
| `qaStatus` | `pending` \| `in-progress` \| `passed` \| `failed` |

**Implementation-type semantics (validation-enforced):**
- `SOURCE_REPRODUCTION` — actual textbook visual republished; requires
  `rightsStatus = CLEAR_FOR_REPRODUCTION`. *Default posture: none are —
  First Aid is copyrighted and no republish license exists. This value
  stays unused until explicitly licensed.*
- `SOURCE_REFERENCE` — retained as an internal authoring/QA reference
  only; not republished. Used when a figure needs no KYP counterpart
  (`requiredInKYP = false` + omission reason) or while a redraw is pending.
- `ORIGINAL_KYP_REDRAW` — new KYP-authored visual conveying the same
  educational concept (labels, relationships, sequence, directionality,
  branching, orientation, diagnostic pattern preserved; original artwork,
  styling, layout not copied). Requires `kypVisualId`.
- `ORIGINAL_KYP_ADAPTATION` — substantially original KYP visualization of
  the underlying scientific concept. Requires `kypVisualId`.

**Hard rules:**
- No silent omissions: `requiredInKYP = false` requires `omissionReason`;
  every visual-heavy topic's coverage audit must account for 100% of
  identified figures.
- `rightsStatus = UNCLEAR` → STOP for that figure (report, don't improvise).
- **Coverage audit per topic:** `textbookVisualCount → accountedFor →
  sourceReproductions → kypRedraws → kypOriginals → unresolved → omitted
  (+ reasons)`. A topic is not visually complete until
  `accountedFor = textbookVisualCount`, `unresolved = 0`, and every omitted
  figure carries a reason.
- **Figure fidelity:** KYP replacement visuals preserve the educational
  information of the source figure (labels, relationships, sequence,
  directionality, branching, anatomical orientation, diagnostic pattern,
  mechanism, comparative relationships, clinically important annotations)
  without copying the original artwork/styling/layout.

---

## 4. Mechanism Data Contract (frozen)

Mechanisms are authored in the universal KYP `MechanismFlow` format
(`src/lib/kyp/data/types.ts`) and rendered **only** by the shared
`src/components/kyp/ui/mechanism-flow.tsx` (client, framer-motion,
color-coded nodes, T-bar inhibition edges).

```
MechanismFlow = { nodes, edges, caption? }
MechanismFlowNode = { id, label, sublabel?, variant: input|process|target|output|inhibit }
MechanismFlowEdge = { from, to, label?, type?: stimulate|inhibit }
UsMLEMechanism = { id, title, context?, flow }
```

- Node `id`s unique within a flow; every edge endpoint must reference an
  existing node (validated).
- Semantic palette: activation (stimulate edges), inhibition (`type:
  "inhibit"` renders a coral T-bar — used where genuinely relevant, never
  artificial), branching (fan-out), feedback (cycles), drug intervention
  points (inhibit-variant nodes / labeled drug edges), clinically meaningful
  consequences (output nodes), teaching captions (`caption` /
  `context`).
- `inhibit` semantics must map to real biology (e.g., F-2,6-BP ⊣ FBPase-1),
  not decorative edges.
- No second mechanism engine. No stacked-card rendering. Ever.

---

## 5. Source-Reference Contract (frozen)

### 5.1 Primary source

*First Aid for the USMLE Step 1 2026* — the two supplied PDFs:

| Part | File | PDF pages | Printed book pages | Offset |
|---|---|---|---|---|
| 1 | `upload/usmle part1.pdf` | 433 | 1–411 | **book = pdf − 22** |
| 2 | `upload/usmle part 2.pdf` | 436 | 409–844 | **book = pdf + 408** |

Both offsets are linear and were calibrated on multiple anchor pages
(P1: pdf 24=book 2, 92=70, 93=71, 94=72, 433=411 · P2: pdf 5=413, 60=468,
100=508, 130=538, 200=608, 306=714).

### 5.2 Book map (chapter boundaries, PDF pages)

**Part 1** — front matter pdf 1–8 · Section I “Guide to Efficient Exam
Preparation” pdf 9–48 (book 1–26) · **Section II High-Yield General
Principles** pdf 49–300: `01-Biochem` 49, `02-Immunology` 115,
`03-Microbiology` 143, `04-Pathol` 223, `05-Pharmacology` 249,
`06-PubHealth` 277 · **Section III Organ Systems (start)** pdf 301–433:
`07-Cardio` 301, `08-Endocrine` 351, `09-Gastrointestinal` 385,
`10-HemaOncol` 431 (continues in part 2).

**Part 2** — cover pdf 1–3 · **Section III Organ Systems (cont.)** pdf
4–338: `10-HemaOncol` 4, `11-Musculo` 41, `12-Neurol` 91, `13-Psych` 161,
`14-Renal` 187, `15-Repro` 221, `16-Respiratory` 269, Rapid Review ~299 ·
**Section IV Top-Rated Review Resources** pdf 339+.

### 5.3 Page-reference format (dual mapping)

Every source reference carries **both** mappings — the PDF page
(artifact-precise, deterministic to the supplied file) and the printed book
page (human-facing). In manifests and visual-inventory records:

```json
"sourcePages": { "part": 1, "pdfPages": [93,94,95,96,97,106], "bookPages": "71–75, 84" }
```

Notes' display `sourceRef` strings remain human-readable; manifests are the
precise anchor of record.

**Known pilot correction (flagged, not silently edited):** the 10 pilot
notes' `sourceRef` strings cite PDF pages as “pp.” (e.g. glycolysis
“Part 1 pp. 93–97” = PDF 93–97 = book 71–75). The manifests carry the
correct dual mapping; whether to update the display strings in the approved
notes awaits user decision (pendingCorrection flag in the tracker).

### 5.4 Source evidence & fidelity

- **Preserve** the source's terminology, organization, emphasis and
  clinically relevant details. Never silently replace source content with
  model knowledge.
- `sourceEvidence[]` per topic: `{ claim, pages (dual), quote, verified,
  verifiedHow }`. Quotes are extracted from the actual PDF text layer by
  `scripts/usmle-pipeline/verify-evidence.ts` — never typed from memory.
- **kypExtensions:** anything added from outside First Aid is recorded in
  the manifest as `{ id, summary, origin: "outside-first-aid", rationale }`
  and must be traceable. External research is used only for genuinely
  difficult concepts. External additions are never presented as though they
  came from First Aid.
- Ambiguous evidence, unmappable topics, contradictory source statements →
  STOP (§10).

---

## 6. QA Requirements (frozen)

### 6.1 Per-topic QA gates (all must be `pass` before tracker-complete)

`sourceVerified · contentComplete · miniCaseConsistent ·
kypExtensionsTraceable · mnemonicQuality · visualsPaint · visualCoverage ·
mechanismRender · lightMode · darkMode · mobile · desktop · consoleClean
(includes hydration) · captionsReadable · trackerSynced`

### 6.2 Chapter QA gate (Phase I-H — no chapter is complete until)

source references verified · all required topics accounted for · no missing
visual ids · no “Visual unavailable” · mechanisms render correctly · no
broken interactive components · no hydration errors · no console errors ·
light passes · dark passes · mobile passes · desktop passes · tracker
synchronized · kypExtensions traceable · mini-cases internally consistent ·
captions and labels readable · absorbed/source figures accounted for.

### 6.3 Seven mandatory pilot QA rules (carried into Phase I)

1. **mini-case consistency** — exactly one correct option; every option
   carries a `why`; vignette, question and reasoning agree (audit.ts).
2. **kypExtensions traceability** — every non-First-Aid addition recorded
   and classified (validate.ts).
3. **tracker synchronization** — tracker regenerated only by
   `sync-tracker.ts`; notes ⇄ manifests ⇄ tracker 1:1 (validate.ts).
4. **absorbed-figure rule** — every textbook figure absorbed into a note is
   accounted for in the visual inventory with its implementation type.
5. **figure-label sweep** — every shipped visual is paint-verified with
   readable labels in light AND dark (browser/VLM QA; §8).
6. **mnemonic quality bar** — a mnemonic must store a real list/fact set,
   decode fully, and state when to use it (audit.ts).
7. **coverageAudit precision** — visual coverage audits reconcile to 100%
   with explicit omission reasons (validate.ts).

### 6.4 Textbook image QA (per visual-heavy chapter)

Compare the KYP topic against its First Aid pages: figures identified →
figures accounted for → source-reproductions → KYP redraws → KYP originals →
unresolved → omitted + reasons; verify labels and relationships; verify no
clinically important information was lost; verify light, dark, desktop and
mobile; verify the visual remains readable at its intended size.

### 6.5 Paint verification standard

“Asset exists” / “in the DOM” is NOT proof. Visuals must actually PAINT on
screen: browser QA scrolls to the visual's real position and screenshots;
VLM verifies pixels and label readability. Console and hydration errors must
be zero. The sweep covers desktop light, desktop dark, mobile light, mobile
dark, plus `/usmle`, `/usmle/compare`, `/legacy`.

---

## 7. Tracker Requirements (frozen)

- **Location:** `content/usmle/tracker.json`. Regenerated ONLY by
  `scripts/usmle-pipeline/sync-tracker.ts` (deterministic; human edits to
  generated rollups are overwritten).
- **Structure:** `schemaVersion · book {parts, offsets, chapterMap} ·
  counts · chapters[] · topics[]`.
- **Topic entry:** topicId, chapter, subsection, productionStatus, qa
  summary, sourcePages, visualCount, mechanismCount, kypExtensionCount,
  mnemonicStatus, updatedAt.
- **Production statuses:** `planned → inventory → in-production →
  pilot-complete | chapter-complete | blocked | failed`.
- **No silent disappearance:** validate.ts enforces notes ⇄ manifests ⇄
  tracker 1:1. A generation failure marks the topic `blocked`/`failed` with
  a reason — it can never vanish.
- Estimated full-book topic count (from the pre-pilot survey): **~3,029**;
  per-chapter confirmed counts are filled in only by Phase I-C extraction.

---

## 8. Light / Dark / Mobile Requirements (frozen)

- **Theme:** KYP design tokens only (`foreground`, `muted-foreground`,
  `card`, `border`, `brand`, `neural`, `warning`, `success` and their
  `-soft` variants). No hard-coded hex colors in USMLE visuals. SVGs use
  `currentColor`.
- **Contrast:** no white-on-white, no black-on-black in either theme.
  Labels must sit on backgrounds with guaranteed contrast in BOTH themes
  (the pilot's cranial-map fix is the canonical example).
- **Mobile (390px):** no page-level horizontal overflow. Wide diagrams pan
  inside their `overflow-x-auto kyp-scroll` figure frames (established KYP
  convention for wide tables — no pinch-zoom). Labels remain usable;
  nothing truly hidden.
- **Verification:** representative visuals verified in BOTH themes;
  visual-heavy topics verified at 390px (light and dark).

---

## 9. Production Pipeline (Phase I-B — frozen process)

### 9.1 The 16-stage deterministic chain (per topic)

```
sourceLocated → chapterMapped → subsectionMapped → topicScoped →
evidencePinned → noteAuthored → visualsAuthored → mechanismAuthored →
clinicalAuthored → pivotsAuthored → trapsAuthored → mnemonicAuthored →
rapidReviewAuthored → relatedAuthored → qaPassed → trackerSynced
```

Every stage is one of `pending | in-progress | pass | fail | blocked | na`
in the topic manifest. `mnemonicAuthored` may be `na` only with an explicit
`mnemonicStatus: none-needed` justification. `qaPassed` requires every gate
in §6.1 to be `pass`.

### 9.2 Chapter-by-chapter processing (Phase I-C — never mass generation)

Per chapter: (1) extract complete chapter inventory → (2) map every topic to
its source location → (3) classify difficulty → (4) identify required
visuals → (5) identify mechanism-heavy topics → (6) generate KYP notes →
(7) source verification → (8) content completeness QA → (9) visual QA →
(10) mechanism QA → (11) light/dark/mobile QA → (12) tracker sync →
(13) chapter QA report → (14) mark chapter complete. One chapter at a time;
no topic may silently disappear because of generation failure.

### 9.3 File layout

```
content/usmle/
  tracker.json                        # generated production state
  chapters/<chapterId>.json           # Phase I-C chapter inventories
  manifests/<topicId>.json            # per-topic traceability manifests
  visual-inventory/<topicId>.json     # textbook visual inventory + coverage audit
scripts/usmle-pipeline/
  schemas.ts (re-exported from src/lib/kyp/usmle/pipeline/schemas.ts)
  validate.ts        # contract gate: schemas + cross-checks + boundary rules
  audit.ts           # content completeness + 7 pilot QA rules (machine subset)
  verify-evidence.ts # source evidence re-verification against the PDFs
  sync-tracker.ts    # deterministic tracker regeneration
  report.ts          # chapter / pipeline status reports (Phase I-J format)
  inventory.ts       # chapter extraction tooling (Phase I-C)
```

Commands (bun): `bun scripts/usmle-pipeline/validate.ts` etc. Exit 0 =
green, exit 1 = violations listed. Pipeline decisions are deterministic and
idempotent; reruns produce the same result.

### 9.4 Required per-topic metadata (Phase I-B)

`topicId · chapter · subsection · sourcePages · sourceEvidence · visualIds ·
mechanismIds · kypExtensions · mnemonicStatus · qa status · tracker status`
— all live in the topic manifest, cross-checked against the note and
tracker by validate.ts.

---

## 10. Stop Conditions (frozen — report, never improvise)

STOP and report rather than silently improvising when:
- source evidence is ambiguous;
- a topic cannot be mapped confidently to its source location;
- an illustration cannot be represented accurately;
- source licensing is unclear (`rightsStatus = UNCLEAR`);
- two source statements appear contradictory;
- the schema needs architectural changes;
- a new UI component appears necessary;
- a mechanism requires a new rendering system.

When a stop condition fires, mark the affected item `blocked` with the
reason in the tracker, report it, and continue only with unaffected topics
when safe. Never redesign around the problem. Never alter this contract
without explicit user approval.

---

## 11. Chapter Delivery Format (Phase I-J — frozen)

At the end of each completed chapter: topics completed · topics remaining ·
source coverage · visual coverage (figures identified / accounted /
reproduced / redrawn / original / unresolved / omitted + reasons) ·
mechanism coverage · QA results · failed items · corrected items ·
kypExtensions count · tracker synchronization status. No commit, push,
deploy, or next major architectural step until the chapter QA gate passes.
