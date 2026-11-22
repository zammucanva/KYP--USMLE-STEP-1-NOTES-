/**
 * KYP USMLE 2026 — Phase I pipeline contracts (machine-enforceable).
 *
 * These types + validators implement docs/usmle/ARCHITECTURE-CONTRACT.md
 * (contract version 1.0.0, FROZEN). They are authored data / authoring-QA
 * code: nothing in src/app or any client component imports this module, so
 * it never enters the browser bundle. Altering the CONTRACT SEMANTICS
 * requires stopping for user approval (contract §0 / §10).
 *
 * Consumed by scripts/usmle-pipeline/*.ts (bun). Pure TypeScript, no
 * dependencies beyond node:fs helpers passed in by callers.
 */

/* ============================================================
   1. Book + chapter registry (contract §5.1 / §5.2)
   ============================================================ */

export const SOURCE_BOOK = "First Aid for the USMLE Step 1 2026" as const;

export interface BookPart {
  part: 1 | 2;
  /** Path relative to the repo root. */
  file: string;
  pdfPages: number;
  /** printedBookPage = pdfPage + bookPageOffset (linear, calibrated) */
  bookPageOffset: number;
}

export const BOOK_PARTS: Record<1 | 2, BookPart> = {
  1: { part: 1, file: "upload/usmle part1.pdf", pdfPages: 433, bookPageOffset: -22 },
  2: { part: 2, file: "upload/usmle part 2.pdf", pdfPages: 436, bookPageOffset: 408 },
};

export type BookSection = "I" | "II" | "III" | "IV";

export interface ChapterDef {
  chapterId: string;
  /** InDesign chapter number from the FA 2026 footer slugs (01–16). */
  number: number;
  slug: string;
  chapterTitle: string;
  section: BookSection;
  pdfRanges: { part: 1 | 2; from: number; to: number }[];
}

/** FA 2026 chapter registry, from the .indd footer-slug scan (contract §5.2). */
export const CHAPTERS: ChapterDef[] = [
  { chapterId: "biochemistry", number: 1, slug: "01-Biochem", chapterTitle: "Biochemistry", section: "II", pdfRanges: [{ part: 1, from: 49, to: 114 }] },
  { chapterId: "immunology", number: 2, slug: "02-Immunology", chapterTitle: "Immunology", section: "II", pdfRanges: [{ part: 1, from: 115, to: 142 }] },
  { chapterId: "microbiology", number: 3, slug: "03-Microbiology", chapterTitle: "Microbiology", section: "II", pdfRanges: [{ part: 1, from: 143, to: 222 }] },
  { chapterId: "pathology", number: 4, slug: "04-Pathol", chapterTitle: "Pathology", section: "II", pdfRanges: [{ part: 1, from: 223, to: 248 }] },
  { chapterId: "pharmacology", number: 5, slug: "05-Pharmacology", chapterTitle: "Pharmacology", section: "II", pdfRanges: [{ part: 1, from: 249, to: 276 }] },
  { chapterId: "public-health", number: 6, slug: "06-PubHealth", chapterTitle: "Public Health", section: "II", pdfRanges: [{ part: 1, from: 277, to: 300 }] },
  { chapterId: "cardiovascular", number: 7, slug: "07-Cardio", chapterTitle: "Cardiovascular", section: "III", pdfRanges: [{ part: 1, from: 301, to: 350 }] },
  { chapterId: "endocrine", number: 8, slug: "08-Endocrine", chapterTitle: "Endocrine", section: "III", pdfRanges: [{ part: 1, from: 351, to: 384 }] },
  { chapterId: "gastrointestinal", number: 9, slug: "09-Gastrointestinal", chapterTitle: "Gastrointestinal", section: "III", pdfRanges: [{ part: 1, from: 385, to: 430 }] },
  { chapterId: "hematology-oncology", number: 10, slug: "10-HemaOncol", chapterTitle: "Hematology & Oncology", section: "III", pdfRanges: [{ part: 1, from: 431, to: 433 }, { part: 2, from: 4, to: 40 }] },
  { chapterId: "musculoskeletal", number: 11, slug: "11-Musculo", chapterTitle: "Musculoskeletal & Connective Tissue", section: "III", pdfRanges: [{ part: 2, from: 41, to: 90 }] },
  { chapterId: "neurology", number: 12, slug: "12-Neurol", chapterTitle: "Neurology & Special Senses", section: "III", pdfRanges: [{ part: 2, from: 91, to: 160 }] },
  { chapterId: "psychiatry", number: 13, slug: "13-Psych", chapterTitle: "Psychiatry", section: "III", pdfRanges: [{ part: 2, from: 161, to: 186 }] },
  { chapterId: "renal", number: 14, slug: "14-Renal", chapterTitle: "Renal", section: "III", pdfRanges: [{ part: 2, from: 187, to: 220 }] },
  { chapterId: "reproductive", number: 15, slug: "15-Repro", chapterTitle: "Reproductive", section: "III", pdfRanges: [{ part: 2, from: 221, to: 268 }] },
  { chapterId: "respiratory", number: 16, slug: "16-Respiratory", chapterTitle: "Respiratory", section: "III", pdfRanges: [{ part: 2, from: 269, to: 298 }] },
  { chapterId: "rapid-review", number: 17, slug: "Rapid Review", chapterTitle: "Rapid Review (Pathophysiology of Important Diseases)", section: "III", pdfRanges: [{ part: 2, from: 299, to: 338 }] },
];

export const CHAPTER_IDS = CHAPTERS.map((c) => c.chapterId);

export function chapterById(chapterId: string): ChapterDef | undefined {
  return CHAPTERS.find((c) => c.chapterId === chapterId);
}

/** Which chapter owns a given part+pdf page? (first match wins; gaps → front matter / Section IV) */
export function chapterForPage(part: 1 | 2, pdfPage: number): ChapterDef | undefined {
  return CHAPTERS.find((c) => c.pdfRanges.some((r) => r.part === part && pdfPage >= r.from && pdfPage <= r.to));
}

/* ============================================================
   2. Shared enums (contract §2–§7)
   ============================================================ */

/** Per-topic production state (contract §7). */
export type ProductionStatus =
  | "planned"
  | "inventory"
  | "in-production"
  | "pilot-complete"
  | "chapter-complete"
  | "blocked"
  | "failed";

export const PRODUCTION_STATUSES: ProductionStatus[] = [
  "planned", "inventory", "in-production", "pilot-complete", "chapter-complete", "blocked", "failed",
];

/** Stage / gate states. `na` requires an explicit justification; `waived` requires a reason. */
export type StageStatus = "pending" | "in-progress" | "pass" | "fail" | "blocked" | "na";
export type QaStatus = "pending" | "in-progress" | "pass" | "fail" | "blocked" | "waived";

/** The 16-stage deterministic pipeline chain (contract §9.1), in order. */
export const PIPELINE_STAGES = [
  "sourceLocated",
  "chapterMapped",
  "subsectionMapped",
  "topicScoped",
  "evidencePinned",
  "noteAuthored",
  "visualsAuthored",
  "mechanismAuthored",
  "clinicalAuthored",
  "pivotsAuthored",
  "trapsAuthored",
  "mnemonicAuthored",
  "rapidReviewAuthored",
  "relatedAuthored",
  "qaPassed",
  "trackerSynced",
] as const;
export type PipelineStage = (typeof PIPELINE_STAGES)[number];

/** The 15 per-topic QA gates (contract §6.1). */
export const QA_GATES = [
  "sourceVerified",
  "contentComplete",
  "miniCaseConsistent",
  "kypExtensionsTraceable",
  "mnemonicQuality",
  "visualsPaint",
  "visualCoverage",
  "mechanismRender",
  "lightMode",
  "darkMode",
  "mobile",
  "desktop",
  "consoleClean",
  "captionsReadable",
  "trackerSynced",
] as const;
export type QaGate = (typeof QA_GATES)[number];

export type MnemonicStatus = "authored" | "none-needed" | "failed-bar";

/** Textbook-visual implementation types (contract §3.4). */
export type ImplementationType =
  | "SOURCE_REPRODUCTION"
  | "SOURCE_REFERENCE"
  | "ORIGINAL_KYP_REDRAW"
  | "ORIGINAL_KYP_ADAPTATION";

export type RightsStatus =
  | "CLEAR_FOR_REPRODUCTION"
  | "COPYRIGHTED_NO_REPUBLISH"
  | "UNCLEAR";

export type VisualInventoryQaStatus = "pending" | "in-progress" | "passed" | "failed";

export const VISUAL_TYPES = [
  "ANATOMY_ILLUSTRATION",
  "PHYSIOLOGY_DIAGRAM",
  "BIOCHEMICAL_PATHWAY",
  "MOLECULAR_STRUCTURE",
  "PHARMACOLOGY_DIAGRAM",
  "RECEPTOR_DIAGRAM",
  "SIGNAL_TRANSDUCTION",
  "PATHOLOGY_ILLUSTRATION",
  "HISTOLOGY",
  "GROSS_PATHOLOGY",
  "RADIOLOGY",
  "ECG",
  "MICROBIOLOGY_IMAGE",
  "DERMATOLOGY_PHOTO",
  "LOCALIZATION_DIAGRAM",
  "ENDOCRINE_DIAGRAM",
  "REPRODUCTIVE_DIAGRAM",
  "RENAL_DIAGRAM",
  "CARDIOVASCULAR_DIAGRAM",
  "HEMATOLOGY_DIAGRAM",
  "IMMUNOLOGY_DIAGRAM",
  "CLINICAL_ALGORITHM",
  "DIAGNOSTIC_ALGORITHM",
  "FLOWCHART",
  "VISUAL_TABLE",
  "COMPARISON_FIGURE",
  "TIMELINE",
  "SUMMARY_FIGURE",
  "OTHER",
] as const;
export type VisualType = (typeof VISUAL_TYPES)[number];

/* ============================================================
   3. Data shapes (contract §5.3, §5.4, §7, §9.4)
   ============================================================ */

/** Dual page mapping: PDF page (artifact-precise) + printed book page (human-facing). */
export interface DualPageRef {
  part: 1 | 2;
  /** ascending, unique, valid pdf pages for `part` */
  pdfPages: number[];
  /** human-readable printed book page spec, e.g. "71–75, 84" */
  bookPages: string;
}

export interface SourceEvidence {
  claim: string;
  pages: DualPageRef;
  /** actual text extracted from the PDF text layer (never from memory) */
  quote: string;
  verified: "pass" | "pending" | "fail";
  /** how the quote was verified, e.g. "pdftotext page dump (verify-evidence.ts)" */
  verifiedHow: string;
}

export interface KypExtension {
  id: string;
  summary: string;
  origin: "outside-first-aid";
  rationale: string;
  /** where it surfaces in the note, e.g. "blocks[2] callout" */
  location: string;
}

export interface TopicManifest {
  topicId: string;
  title: string;
  chapterId: string;
  chapterTitle: string;
  subsection: string;
  /** primary book part of the topic's main source pages */
  part: 1 | 2;
  sourcePages: DualPageRef;
  /** additional source pages outside the primary chapter (e.g. diabetes ← biochem sorbitol) */
  crossChapterSources?: (DualPageRef & { chapterId: string })[];
  sourceEvidence: SourceEvidence[];
  /** visualIds referenced by the note (must exist in the client VisualRegistry) */
  visualIds: string[];
  /** note.mechanisms[].id list */
  mechanismIds: string[];
  kypExtensions: KypExtension[];
  mnemonicStatus: MnemonicStatus;
  qa: Record<QaGate, QaStatus>;
  stages: Record<PipelineStage, StageStatus>;
  productionStatus: ProductionStatus;
  blockedReason?: string;
  /** corrections awaiting user decision — surfaced, never silently applied */
  pendingCorrections?: string[];
  notes?: string;
  /** ISO date — bumped only when the manifest content changes */
  updatedAt: string;
}

export interface VisualInventoryRecord {
  /** inventory id: `<topicId>-sv<N>` */
  visualId: string;
  sourceBook: string;
  sourcePages: DualPageRef;
  chapterId: string;
  subsection: string;
  topicId: string;
  visualType: VisualType;
  visualPurpose: string;
  sourceFigureDescription: string;
  requiredInKYP: boolean;
  implementationType: ImplementationType;
  rightsStatus: RightsStatus;
  /** registry visualId implementing this record (when kypImplementation = "registry-visual") */
  kypVisualId: string | null;
  /** how the KYP implementation is realized (contract §3.4): registry visual vs note block */
  kypImplementation?: "registry-visual" | "note-block";
  /** required when kypImplementation = "note-block": where in the note the content lives */
  kypLocation?: string;
  qaStatus: VisualInventoryQaStatus;
  /** required when requiredInKYP = false (no silent omissions) */
  omissionReason?: string;
  notes?: string;
}

export interface VisualCoverageAudit {
  topicId: string;
  textbookVisualCount: number;
  accountedFor: number;
  sourceReproductions: number;
  kypRedraws: number;
  kypOriginals: number;
  unresolved: number;
  omitted: number;
  omissionReasons: string[];
  complete: boolean;
}

export interface TopicVisualInventory {
  topicId: string;
  chapterId: string;
  inventory: VisualInventoryRecord[];
  coverageAudit: VisualCoverageAudit;
  notes?: string;
}

export interface ChapterInventoryTopic {
  /** null until the topic is produced */
  topicId: string | null;
  title: string;
  subsection: string;
  sourcePages: DualPageRef;
  difficulty: 1 | 2 | 3;
  requiresVisual: boolean;
  visualHints: string[];
  mechanismHeavy: boolean;
  status: "pending" | "in-production" | "complete" | "blocked";
}

export interface ChapterInventory {
  chapterId: string;
  chapterTitle: string;
  number: number;
  part: 1 | 2;
  section: BookSection;
  pdfRanges: { part: 1 | 2; from: number; to: number }[];
  bookPages: string;
  extractionStatus: "registered" | "extracted" | "verified";
  topics: ChapterInventoryTopic[];
  /** null = full extraction still pending (Phase I-C) */
  pendingTopicCount: number | null;
  notes?: string;
}

export interface TrackerChapterEntry {
  chapterId: string;
  chapterTitle: string;
  part: 1 | 2;
  extractionStatus: "registered" | "extracted" | "verified";
  topicsRegistered: number;
  topicsProduced: number;
  topicsRemaining: number | null;
  qaStatus: QaStatus;
  completedAt: string | null;
}

export interface TrackerTopicEntry {
  topicId: string;
  title: string;
  chapterId: string;
  subsection: string;
  productionStatus: ProductionStatus;
  qaGatesPassed: number;
  qaGatesTotal: number;
  sourcePages: string;
  visualCount: number;
  mechanismCount: number;
  kypExtensionCount: number;
  mnemonicStatus: MnemonicStatus;
  updatedAt: string;
  pendingCorrections?: string[];
}

export interface Tracker {
  schemaVersion: "1";
  generatedAt: string;
  sourceBook: string;
  book: {
    parts: BookPart[];
    chapterMap: { chapterId: string; chapterTitle: string; number: number; slug: string; section: BookSection; pdfRanges: { part: 1 | 2; from: number; to: number }[] }[];
  };
  /** ~3,029 — pre-pilot survey estimate; confirmed per chapter by Phase I-C extraction */
  estimatedTotalTopics: number | null;
  counts: {
    chaptersRegistered: number;
    chaptersExtracted: number;
    topicsProduced: number;
    topicsByStatus: Record<ProductionStatus, number>;
  };
  chapters: TrackerChapterEntry[];
  topics: TrackerTopicEntry[];
}

/* ============================================================
   4. Validation framework
   ============================================================ */

export interface ValidationIssue {
  /** which file/object the issue belongs to */
  scope: string;
  rule: string;
  message: string;
  severity: "error" | "warning";
}

export class IssueCollector {
  issues: ValidationIssue[] = [];

  error(scope: string, rule: string, message: string): void {
    this.issues.push({ scope, rule, message, severity: "error" });
  }

  warn(scope: string, rule: string, message: string): void {
    this.issues.push({ scope, rule, message, severity: "warning" });
  }

  get ok(): boolean {
    return !this.issues.some((i) => i.severity === "error");
  }

  print(): void {
    const errors = this.issues.filter((i) => i.severity === "error");
    const warnings = this.issues.filter((i) => i.severity === "warning");
    for (const i of errors) console.error(`  ✗ [${i.scope}] ${i.rule}: ${i.message}`);
    for (const i of warnings) console.warn(`  ⚠ [${i.scope}] ${i.rule}: ${i.message}`);
    console.log(`  → ${errors.length} error(s), ${warnings.length} warning(s)`);
  }
}

export interface ValidationContext {
  /** keys of the client VisualRegistry (visuals/registry.tsx) */
  registryKeys: Set<string>;
  /** ids of all shipped notes (src/lib/kyp/usmle/notes) */
  noteIds: Set<string>;
  /** ids of all manifests on disk */
  manifestIds: Set<string>;
}

/* ---------- shared helpers ---------- */

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function validateDualPageRef(
  ref: unknown,
  scope: string,
  c: IssueCollector,
  field: string
): void {
  if (!isPlainObject(ref)) {
    c.error(scope, "dualPageRef", `${field}: not an object`);
    return;
  }
  if (ref.part !== 1 && ref.part !== 2) {
    c.error(scope, "dualPageRef", `${field}.part must be 1 or 2`);
    return;
  }
  const part = BOOK_PARTS[ref.part as 1 | 2];
  if (!Array.isArray(ref.pdfPages) || ref.pdfPages.length === 0) {
    c.error(scope, "dualPageRef", `${field}.pdfPages must be a non-empty array`);
  } else {
    const pages = ref.pdfPages as unknown[];
    const bad = pages.filter((p) => !Number.isInteger(p) || (p as number) < 1 || (p as number) > part.pdfPages);
    if (bad.length) c.error(scope, "dualPageRef", `${field}.pdfPages out of range for part ${ref.part}: ${bad.join(", ")}`);
    const sorted = [...pages].sort((a, b) => (a as number) - (b as number));
    if (JSON.stringify(pages) !== JSON.stringify(sorted)) {
      c.error(scope, "dualPageRef", `${field}.pdfPages must be ascending`);
    }
    if (new Set(pages).size !== pages.length) {
      c.error(scope, "dualPageRef", `${field}.pdfPages contains duplicates`);
    }
  }
  if (!str(ref.bookPages)) {
    c.error(scope, "dualPageRef", `${field}.bookPages must be a non-empty string`);
  }
}

/* ============================================================
   5. Validators per artifact
   ============================================================ */

/** Topic manifest (contract §9.4). */
export function validateTopicManifest(
  m: unknown,
  ctx: ValidationContext,
  c: IssueCollector
): void {
  const scope = "manifest";
  if (!isPlainObject(m)) {
    c.error(scope, "shape", "manifest is not an object");
    return;
  }
  if (!str(m.topicId) || !KEBAB.test(m.topicId as string)) {
    c.error(scope, "topicId", `topicId "${m.topicId}" is not kebab-case`);
  } else if (!ctx.noteIds.has(m.topicId as string)) {
    c.error(scope, "topicId", `topicId "${m.topicId}" has no shipped note (topics may not silently disappear)`);
  }
  if (!str(m.title)) c.error(scope, "title", "title missing");

  const ch = chapterById(m.chapterId as string);
  if (!ch) {
    c.error(scope, "chapter", `chapterId "${m.chapterId}" is not a registered chapter (${CHAPTER_IDS.join(", ")})`);
  } else if (str(m.chapterTitle) && m.chapterTitle !== ch.chapterTitle) {
    c.error(scope, "chapter", `chapterTitle "${m.chapterTitle}" != registry title "${ch.chapterTitle}"`);
  }
  if (!str(m.subsection)) c.error(scope, "subsection", "subsection missing");

  validateDualPageRef(m.sourcePages, scope, c, "sourcePages");
  if (Array.isArray(m.crossChapterSources)) {
    (m.crossChapterSources as unknown[]).forEach((s, i) => {
      validateDualPageRef(s, scope, c, `crossChapterSources[${i}]`);
      if (isPlainObject(s) && !chapterById(s.chapterId as string)) {
        c.error(scope, "chapter", `crossChapterSources[${i}].chapterId "${s.chapterId}" unregistered`);
      }
    });
  }

  if (!Array.isArray(m.sourceEvidence) || (m.sourceEvidence as unknown[]).length === 0) {
    c.error(scope, "sourceEvidence", "at least one pinned evidence item is required (traceability)");
  } else {
    (m.sourceEvidence as unknown[]).forEach((e, i) => {
      if (!isPlainObject(e)) {
        c.error(scope, "sourceEvidence", `[${i}] not an object`);
        return;
      }
      if (!str(e.claim)) c.error(scope, "sourceEvidence", `[${i}].claim missing`);
      if (!str(e.quote) || (e.quote as string).length < 3) {
        c.error(scope, "sourceEvidence", `[${i}].quote must be real text extracted from the PDF layer`);
      }
      if (e.verified !== "pass" && e.verified !== "pending" && e.verified !== "fail") {
        c.error(scope, "sourceEvidence", `[${i}].verified must be pass|pending|fail`);
      }
      if (!str(e.verifiedHow)) c.error(scope, "sourceEvidence", `[${i}].verifiedHow missing`);
      validateDualPageRef(e.pages, scope, c, `sourceEvidence[${i}].pages`);
    });
  }

  if (!Array.isArray(m.visualIds)) {
    c.error(scope, "visualIds", "visualIds must be an array");
  } else {
    for (const v of m.visualIds as unknown[]) {
      if (typeof v !== "string" || !ctx.registryKeys.has(v)) {
        c.error(scope, "visualIds", `"${v}" is not a key of the client VisualRegistry (would render "Visual unavailable")`);
      }
    }
    if (new Set(m.visualIds).size !== (m.visualIds as unknown[]).length) {
      c.warn(scope, "visualIds", "duplicate visualIds");
    }
  }

  if (!Array.isArray(m.mechanismIds) || (m.mechanismIds as unknown[]).length === 0) {
    c.error(scope, "mechanismIds", "mechanismIds must list at least one mechanism (shared MechanismFlow data)");
  }

  if (!Array.isArray(m.kypExtensions)) {
    c.error(scope, "kypExtensions", "kypExtensions must be an array (may be empty)");
  } else {
    (m.kypExtensions as unknown[]).forEach((k, i) => {
      if (!isPlainObject(k)) {
        c.error(scope, "kypExtensions", `[${i}] not an object`);
        return;
      }
      if (k.origin !== "outside-first-aid") {
        c.error(scope, "kypExtensions", `[${i}].origin must be "outside-first-aid"`);
      }
      if (!str(k.summary) || !str(k.rationale) || !str(k.location)) {
        c.error(scope, "kypExtensions", `[${i}] summary/rationale/location all required (traceability)`);
      }
      if (!str(k.id)) c.error(scope, "kypExtensions", `[${i}].id missing`);
    });
  }

  const mnemonicOk = ["authored", "none-needed", "failed-bar"];
  if (!mnemonicOk.includes(m.mnemonicStatus as string)) {
    c.error(scope, "mnemonicStatus", `mnemonicStatus must be one of ${mnemonicOk.join("|")}`);
  }

  // qa gates: all 15 present, valid values, waived requires the rule note
  if (!isPlainObject(m.qa)) {
    c.error(scope, "qa", "qa gate map missing");
  } else {
    for (const gate of QA_GATES) {
      const v = (m.qa as Record<string, unknown>)[gate];
      if (v === undefined) {
        c.error(scope, "qa", `gate "${gate}" missing (all ${QA_GATES.length} gates are required)`);
      } else if (!["pending", "in-progress", "pass", "fail", "blocked", "waived"].includes(v as string)) {
        c.error(scope, "qa", `gate "${gate}" has invalid status "${v}"`);
      }
    }
    const extra = Object.keys(m.qa).filter((k) => !(QA_GATES as readonly string[]).includes(k));
    if (extra.length) c.warn(scope, "qa", `unknown gate keys: ${extra.join(", ")}`);
  }

  // stages: all 16 present, valid values
  if (!isPlainObject(m.stages)) {
    c.error(scope, "stages", "stage map missing");
  } else {
    for (const stage of PIPELINE_STAGES) {
      const v = (m.stages as Record<string, unknown>)[stage];
      if (v === undefined) {
        c.error(scope, "stages", `stage "${stage}" missing (all ${PIPELINE_STAGES.length} stages are required)`);
      } else if (!["pending", "in-progress", "pass", "fail", "blocked", "na"].includes(v as string)) {
        c.error(scope, "stages", `stage "${stage}" has invalid status "${v}"`);
      }
    }
  }

  // consistency: productionStatus
  if (!PRODUCTION_STATUSES.includes(m.productionStatus as ProductionStatus)) {
    c.error(scope, "productionStatus", `"${m.productionStatus}" is not a valid production status`);
  } else {
    const allStagesPass =
      isPlainObject(m.stages) && PIPELINE_STAGES.every((s) => (m.stages as Record<string, unknown>)[s] === "pass" || (m.stages as Record<string, unknown>)[s] === "na");
    const allGatesPass =
      isPlainObject(m.qa) && QA_GATES.every((g) => (m.qa as Record<string, unknown>)[g] === "pass" || (m.qa as Record<string, unknown>)[g] === "waived");
    const terminal = m.productionStatus === "pilot-complete" || m.productionStatus === "chapter-complete";
    if (terminal && !(allStagesPass && allGatesPass)) {
      c.error(scope, "productionStatus", `"${m.productionStatus}" requires all stages pass/na and all gates pass/waived`);
    }
    if (m.productionStatus === "blocked" && !str(m.blockedReason)) {
      c.error(scope, "productionStatus", "blocked requires blockedReason (no silent failures)");
    }
    if (m.productionStatus === "failed" && !str(m.blockedReason)) {
      c.error(scope, "productionStatus", "failed requires blockedReason (no silent failures)");
    }
  }

  // mnemonic stage vs status
  if (isPlainObject(m.stages) && (m.stages as Record<string, unknown>).mnemonicAuthored === "na" && m.mnemonicStatus !== "none-needed") {
    c.error(scope, "mnemonic", 'stage mnemonicAuthored = "na" requires mnemonicStatus = "none-needed"');
  }

  if (!/^\d{4}-\d{2}-\d{2}/.test(String(m.updatedAt))) {
    c.warn(scope, "updatedAt", "updatedAt should be an ISO date");
  }
}

/** Topic visual inventory (contract §3.4). */
export function validateTopicVisualInventory(
  v: unknown,
  ctx: ValidationContext,
  c: IssueCollector
): void {
  const scope = "visual-inventory";
  if (!isPlainObject(v)) {
    c.error(scope, "shape", "not an object");
    return;
  }
  const topicId = v.topicId as string;
  if (!str(topicId)) {
    c.error(scope, "topicId", "topicId missing");
    return;
  }
  if (!ctx.noteIds.has(topicId)) {
    c.error(scope, "topicId", `topicId "${topicId}" has no shipped note`);
  }
  if (!chapterById(v.chapterId as string)) {
    c.error(scope, "chapter", `chapterId "${v.chapterId}" unregistered`);
  }
  if (!Array.isArray(v.inventory)) {
    c.error(scope, "inventory", "inventory array missing");
    return;
  }

  const records = v.inventory as unknown[];
  const seenIds = new Set<string>();
  records.forEach((r, i) => {
    const s = `visual-inventory[${topicId}][${i}]`;
    if (!isPlainObject(r)) {
      c.error(s, "shape", "not an object");
      return;
    }
    if (!str(r.visualId) || !(r.visualId as string).startsWith(`${topicId}-sv`)) {
      c.error(s, "visualId", `visualId "${r.visualId}" must follow "<topicId>-sv<N>"`);
    } else if (seenIds.has(r.visualId)) {
      c.error(s, "visualId", `duplicate visualId "${r.visualId}"`);
    } else {
      seenIds.add(r.visualId);
    }
    if (r.sourceBook !== SOURCE_BOOK) {
      c.error(s, "sourceBook", `sourceBook must be "${SOURCE_BOOK}"`);
    }
    validateDualPageRef(r.sourcePages, s, c, "sourcePages");
    if (!chapterById(r.chapterId as string)) c.error(s, "chapter", `chapterId "${r.chapterId}" unregistered`);
    if (!str(r.subsection)) c.error(s, "subsection", "subsection missing");
    if (r.topicId !== topicId) c.error(s, "topicId", `record topicId "${r.topicId}" != file topicId "${topicId}"`);
    if (!(VISUAL_TYPES as readonly string[]).includes(r.visualType as string)) {
      c.error(s, "visualType", `"${r.visualType}" is not in the visual-type vocabulary`);
    }
    if (!str(r.visualPurpose)) c.error(s, "visualPurpose", "visualPurpose missing");
    if (!str(r.sourceFigureDescription)) c.error(s, "sourceFigureDescription", "sourceFigureDescription missing (internal fidelity anchor)");
    if (typeof r.requiredInKYP !== "boolean") c.error(s, "requiredInKYP", "requiredInKYP must be boolean");

    const impl = r.implementationType as string;
    if (!["SOURCE_REPRODUCTION", "SOURCE_REFERENCE", "ORIGINAL_KYP_REDRAW", "ORIGINAL_KYP_ADAPTATION"].includes(impl)) {
      c.error(s, "implementationType", `"${impl}" invalid`);
    } else {
      if (impl === "SOURCE_REPRODUCTION" && r.rightsStatus !== "CLEAR_FOR_REPRODUCTION") {
        c.error(s, "rights", "SOURCE_REPRODUCTION requires rightsStatus = CLEAR_FOR_REPRODUCTION (licensing stop condition)");
      }
      if ((impl === "ORIGINAL_KYP_REDRAW" || impl === "ORIGINAL_KYP_ADAPTATION")) {
        const hasRegistryVisual = typeof r.kypVisualId === "string" && ctx.registryKeys.has(r.kypVisualId as string);
        const isNoteBlock = r.kypImplementation === "note-block" && str(r.kypLocation);
        if (!hasRegistryVisual && !isNoteBlock) {
          c.error(s, "kypImplementation", `${impl} requires either a registry kypVisualId or kypImplementation "note-block" + kypLocation`);
        }
        if (r.kypImplementation === "note-block" && !str(r.kypLocation)) {
          c.error(s, "kypLocation", 'kypImplementation "note-block" requires kypLocation');
        }
      }
      if (r.kypImplementation === "registry-visual" && typeof r.kypVisualId !== "string") {
        c.error(s, "kypVisualId", 'kypImplementation "registry-visual" requires kypVisualId');
      }
      // requiredInKYP=true with SOURCE_REFERENCE is the transitional holding state
      // (identified + retained internally, KYP equivalent pending) — allowed, but
      // it counts as unresolved and blocks the topic's visualCoverage gate.
      if (r.requiredInKYP === true && impl === "SOURCE_REFERENCE" && r.qaStatus === "passed") {
        c.error(s, "implementationType", "requiredInKYP = true cannot be marked qaStatus passed while still SOURCE_REFERENCE — author the KYP redraw/adaptation or justify omission");
      }
    }
    if (!["CLEAR_FOR_REPRODUCTION", "COPYRIGHTED_NO_REPUBLISH", "UNCLEAR"].includes(r.rightsStatus as string)) {
      c.error(s, "rightsStatus", `"${r.rightsStatus}" invalid`);
    } else if (r.rightsStatus === "UNCLEAR" && r.qaStatus !== "failed") {
      c.error(s, "rightsStatus", "UNCLEAR rights is a STOP condition — qaStatus must be failed/blocked until resolved");
    }
    if (!["pending", "in-progress", "passed", "failed"].includes(r.qaStatus as string)) {
      c.error(s, "qaStatus", `"${r.qaStatus}" invalid`);
    }
    if (r.requiredInKYP === false && !str(r.omissionReason)) {
      c.error(s, "omission", "requiredInKYP = false requires omissionReason (no silent omissions)");
    }
  });

  // coverage audit reconciliation (pilot QA rule 7)
  const a = v.coverageAudit;
  if (!isPlainObject(a)) {
    c.error(scope, "coverageAudit", `coverageAudit missing for ${topicId}`);
  } else {
    const s = `coverageAudit[${topicId}]`;
    const isUnresolved = (r: unknown) => {
      if (!isPlainObject(r)) return true;
      const rec = r as Record<string, unknown>;
      if (["pending", "in-progress", "failed"].includes(rec.qaStatus as string)) return true;
      if (rec.requiredInKYP === true && rec.implementationType === "SOURCE_REFERENCE") return true; // holding state
      return false;
    };
    const counted = {
      textbookVisualCount: records.length,
      accountedFor: records.filter((r) => !isUnresolved(r)).length,
      sourceReproductions: records.filter((r) => isPlainObject(r) && (r as Record<string, unknown>).implementationType === "SOURCE_REPRODUCTION").length,
      kypRedraws: records.filter((r) => isPlainObject(r) && (r as Record<string, unknown>).implementationType === "ORIGINAL_KYP_REDRAW").length,
      kypOriginals: records.filter((r) => isPlainObject(r) && (r as Record<string, unknown>).implementationType === "ORIGINAL_KYP_ADAPTATION").length,
      unresolved: records.filter(isUnresolved).length,
      omitted: records.filter((r) => isPlainObject(r) && (r as Record<string, unknown>).requiredInKYP === false).length,
    };
    for (const [k, expected] of Object.entries(counted)) {
      if ((a as Record<string, unknown>)[k] !== expected) {
        c.error(s, "reconcile", `${k}: audit says ${(a as Record<string, unknown>)[k]}, records say ${expected} (coverageAudit precision rule)`);
      }
    }
    const reasons = (a.omissionReasons as unknown[]) ?? [];
    if (!Array.isArray(reasons) || reasons.length !== counted.omitted) {
      c.error(s, "reconcile", `omissionReasons length ${Array.isArray(reasons) ? reasons.length : "n/a"} != omitted count ${counted.omitted}`);
    }
    if (a.complete === true && (counted.unresolved > 0 || counted.accountedFor !== counted.textbookVisualCount)) {
      c.error(s, "complete", "complete = true but unresolved > 0 or not all figures accounted for");
    }
    if (a.topicId !== topicId) c.error(s, "topicId", `audit topicId "${a.topicId}" != "${topicId}"`);
  }
}

/** Chapter inventory (contract §9.2). */
export function validateChapterInventory(ch: unknown, c: IssueCollector, ctx: ValidationContext): void {
  const scope = "chapter-inventory";
  if (!isPlainObject(ch)) {
    c.error(scope, "shape", "not an object");
    return;
  }
  const def = chapterById(ch.chapterId as string);
  if (!def) {
    c.error(scope, "chapterId", `"${ch.chapterId}" unregistered`);
  } else {
    if (ch.chapterTitle !== def.chapterTitle) c.error(scope, "chapterTitle", `expected "${def.chapterTitle}"`);
    if (ch.number !== def.number) c.error(scope, "number", `expected ${def.number}`);
    if (JSON.stringify(ch.pdfRanges) !== JSON.stringify(def.pdfRanges)) {
      c.error(scope, "pdfRanges", `must match the calibrated registry: ${JSON.stringify(def.pdfRanges)}`);
    }
  }
  if (!["registered", "extracted", "verified"].includes(ch.extractionStatus as string)) {
    c.error(scope, "extractionStatus", `"${ch.extractionStatus}" invalid`);
  }
  if (ch.extractionStatus === "registered" && (ch.topics as unknown[] | undefined)?.length === 0 && ch.pendingTopicCount !== null && ch.pendingTopicCount !== undefined) {
    c.warn(scope, "pendingTopicCount", "registered chapter with pendingTopicCount set is fine, but extraction (Phase I-C) will overwrite it");
  }
  if (!Array.isArray(ch.topics)) {
    c.error(scope, "topics", "topics array required");
    return;
  }
  const titles = new Set<string>();
  (ch.topics as unknown[]).forEach((t, i) => {
    const s = `chapter-inventory[${ch.chapterId}][${i}]`;
    if (!isPlainObject(t)) {
      c.error(s, "shape", "not an object");
      return;
    }
    if (!str(t.title)) {
      c.error(s, "title", "title missing");
    } else if (titles.has(t.title)) {
      c.warn(s, "title", `duplicate topic title "${t.title}"`);
    } else {
      titles.add(t.title);
    }
    if (!str(t.subsection)) c.error(s, "subsection", "subsection missing");
    validateDualPageRef(t.sourcePages, s, c, "sourcePages");
    const pages = isPlainObject(t.sourcePages) ? (t.sourcePages as Record<string, unknown>).pdfPages : [];
    const part = isPlainObject(t.sourcePages) ? (t.sourcePages as Record<string, unknown>).part : undefined;
    if (def && Array.isArray(pages) && part) {
      const outside = (pages as number[]).filter((p) => !def.pdfRanges.some((r) => r.part === part && p >= r.from && p <= r.to));
      if (outside.length) {
        c.warn(s, "sourcePages", `pages ${outside.join(",")} outside chapter ${def.chapterId} ranges (cross-chapter source — use manifest.crossChapterSources if intentional)`);
      }
    }
    if (![1, 2, 3].includes(t.difficulty as number)) c.error(s, "difficulty", "difficulty must be 1|2|3");
    if (typeof t.requiresVisual !== "boolean") c.error(s, "requiresVisual", "requiresVisual must be boolean");
    if (typeof t.mechanismHeavy !== "boolean") c.error(s, "mechanismHeavy", "mechanismHeavy must be boolean");
    if (!["pending", "in-production", "complete", "blocked"].includes(t.status as string)) {
      c.error(s, "status", `"${t.status}" invalid`);
    }
    if (t.status === "complete" && !ctx.noteIds.has(t.topicId as string)) {
      c.error(s, "status", `status complete but topicId "${t.topicId}" has no shipped note (no silent disappearance)`);
    }
  });
}

/** Tracker (contract §7). */
export function validateTracker(t: unknown, ctx: ValidationContext, manifestsOnDisk: Map<string, unknown>, c: IssueCollector): void {
  const scope = "tracker";
  if (!isPlainObject(t)) {
    c.error(scope, "shape", "not an object");
    return;
  }
  if (t.schemaVersion !== "1") c.error(scope, "schemaVersion", 'must be "1"');
  if (t.sourceBook !== SOURCE_BOOK) c.error(scope, "sourceBook", `must be "${SOURCE_BOOK}"`);
  if (!Array.isArray(t.topics)) {
    c.error(scope, "topics", "topics array missing");
    return;
  }

  // 1:1 with notes and manifests (no silent disappearance)
  const trackerIds = new Set<string>((t.topics as unknown[]).map((e) => (isPlainObject(e) ? (e.topicId as string) : "")));
  for (const noteId of ctx.noteIds) {
    if (!trackerIds.has(noteId)) c.error(scope, "sync", `note "${noteId}" missing from tracker`);
  }
  for (const id of ctx.manifestIds) {
    if (!trackerIds.has(id)) c.error(scope, "sync", `manifest "${id}" missing from tracker`);
  }
  for (const id of trackerIds) {
    if (!ctx.noteIds.has(id)) c.error(scope, "sync", `tracker topic "${id}" has no shipped note`);
    if (!ctx.manifestIds.has(id)) c.error(scope, "sync", `tracker topic "${id}" has no manifest`);
  }

  (t.topics as unknown[]).forEach((e) => {
    const s = `tracker[${isPlainObject(e) ? e.topicId : "?"}]`;
    if (!isPlainObject(e)) {
      c.error(s, "shape", "not an object");
      return;
    }
    if (!PRODUCTION_STATUSES.includes(e.productionStatus as ProductionStatus)) {
      c.error(s, "productionStatus", `"${e.productionStatus}" invalid`);
    }
    const m = manifestsOnDisk.get(e.topicId as string);
    if (isPlainObject(m) && e.productionStatus !== m.productionStatus) {
      c.error(s, "sync", `productionStatus "${e.productionStatus}" != manifest "${m.productionStatus}" — regenerate with sync-tracker.ts`);
    }
    if (isPlainObject(m)) {
      const gates = m.qa as Record<string, unknown> | undefined;
      if (isPlainObject(gates)) {
        const passed = QA_GATES.filter((g) => gates[g] === "pass" || gates[g] === "waived").length;
        if (e.qaGatesPassed !== passed || e.qaGatesTotal !== QA_GATES.length) {
          c.error(s, "sync", `qaGatesPassed ${e.qaGatesPassed}/${e.qaGatesTotal} != manifest ${passed}/${QA_GATES.length} — regenerate with sync-tracker.ts`);
        }
      }
      if (e.visualCount !== (m.visualIds as unknown[] | undefined)?.length) {
        c.error(s, "sync", "visualCount != manifest visualIds.length — regenerate with sync-tracker.ts");
      }
      if (e.mechanismCount !== (m.mechanismIds as unknown[] | undefined)?.length) {
        c.error(s, "sync", "mechanismCount != manifest mechanismIds.length — regenerate with sync-tracker.ts");
      }
      if (e.kypExtensionCount !== (m.kypExtensions as unknown[] | undefined)?.length) {
        c.error(s, "sync", "kypExtensionCount != manifest kypExtensions.length — regenerate with sync-tracker.ts");
      }
      if (e.mnemonicStatus !== m.mnemonicStatus) {
        c.error(s, "sync", "mnemonicStatus != manifest — regenerate with sync-tracker.ts");
      }
    }
    if (!chapterById(e.chapterId as string)) c.error(s, "chapter", `"${e.chapterId}" unregistered`);
  });

  if (!Array.isArray(t.chapters)) {
    c.error(scope, "chapters", "chapters array missing");
  } else {
    (t.chapters as unknown[]).forEach((e) => {
      if (!isPlainObject(e) || !chapterById(e.chapterId as string)) {
        c.error(scope, "chapters", `bad chapter entry ${JSON.stringify(e)?.slice(0, 60)}`);
      }
    });
  }

  // counts reconciliation
  if (isPlainObject(t.counts)) {
    const produced = (t.topics as unknown[]).length;
    if (t.counts.topicsProduced !== produced) {
      c.error(scope, "counts", `counts.topicsProduced ${t.counts.topicsProduced} != ${produced}`);
    }
    for (const st of PRODUCTION_STATUSES) {
      const expected = (t.topics as unknown[]).filter((e) => isPlainObject(e) && (e as Record<string, unknown>).productionStatus === st).length;
      if ((t.counts.topicsByStatus as Record<string, unknown>)?.[st] !== expected) {
        c.error(scope, "counts", `counts.topicsByStatus[${st}] != ${expected}`);
      }
    }
  } else {
    c.error(scope, "counts", "counts object missing");
  }
}

/* ============================================================
   6. Note validation (runtime checks on the shipped note data)
   ============================================================ */

export interface NoteLike {
  id: string;
  title: string;
  subtitle: string;
  subject: string;
  system: string;
  pilotCategory: string;
  difficulty: number;
  readTime: number;
  sourceRef: string;
  tags: string[];
  core: { what: string; why: string; keyIdea: string };
  mechanisms: { id: string; title: string; context?: string; flow: { nodes: { id: string; label: string; sublabel?: string; variant: string }[]; edges: { from: string; to: string; label?: string; type?: string }[]; caption?: string } }[];
  blocks: { kind: string; visualId?: string }[];
  clinical?: unknown[];
  drugs?: unknown[];
  usmle: {
    patterns: unknown[];
    traps: unknown[];
    pivots: unknown[];
    miniCase: { vignette: string; question: string; options: { label: string; text: string; correct?: boolean; why: string }[]; reasoning: string };
  };
  mnemonics: { code: string; meaning: string; memorizes: string; whenToUse: string; clinical: string }[];
  rapidReview: { s30: string[]; m3: string[]; m10: string[] };
  recall: { q: string; a: string }[];
  related: unknown[];
  crossLinks: unknown[];
}

/** Runtime structural validation of a shipped note (contract §2). */
export function validateNote(note: NoteLike, ctx: ValidationContext, c: IssueCollector): void {
  const scope = `note[${note.id}]`;
  if (!KEBAB.test(note.id)) c.error(scope, "id", "id must be kebab-case");
  for (const f of ["title", "subtitle", "subject", "system", "pilotCategory", "sourceRef"] as const) {
    if (!str(note[f])) c.error(scope, f, `${f} missing/empty`);
  }
  if (![1, 2, 3].includes(note.difficulty)) c.error(scope, "difficulty", "must be 1|2|3");
  if (!(note.readTime >= 1)) c.error(scope, "readTime", "must be ≥ 1 minute");
  if (!Array.isArray(note.tags) || note.tags.length === 0) c.error(scope, "tags", "tags required");
  for (const f of ["what", "why", "keyIdea"] as const) {
    if (!str((note.core as Record<string, unknown>)[f])) c.error(scope, "core", `core.${f} missing`);
  }

  if (!Array.isArray(note.mechanisms) || note.mechanisms.length === 0) {
    c.error(scope, "mechanisms", "at least one mechanism (shared MechanismFlow) required");
  } else {
    note.mechanisms.forEach((m, i) => {
      const s = `note[${note.id}].mechanisms[${i}]`;
      if (!str(m.id)) c.error(s, "id", "mechanism id missing");
      if (!str(m.title)) c.error(s, "title", "mechanism title missing");
      const flow = m.flow;
      if (!flow || !Array.isArray(flow.nodes) || flow.nodes.length === 0) {
        c.error(s, "flow", "flow.nodes required");
        return;
      }
      const ids = new Set<string>();
      for (const n of flow.nodes) {
        if (!str(n.id)) { c.error(s, "flow", "node id missing"); continue; }
        if (ids.has(n.id)) c.error(s, "flow", `duplicate node id "${n.id}"`);
        ids.add(n.id);
        if (!str(n.label)) c.error(s, "flow", `node "${n.id}" label missing`);
        if (!["input", "process", "target", "output", "inhibit"].includes(n.variant)) {
          c.error(s, "flow", `node "${n.id}" variant "${n.variant}" invalid`);
        }
      }
      for (const e of flow.edges ?? []) {
        if (!ids.has(e.from) || !ids.has(e.to)) {
          c.error(s, "flow", `edge ${e.from} → ${e.to} references a missing node`);
        }
        if (e.type !== undefined && !["stimulate", "inhibit"].includes(e.type)) {
          c.error(s, "flow", `edge type "${e.type}" invalid (stimulate|inhibit)`);
        }
      }
    });
  }

  if (!Array.isArray(note.blocks) || note.blocks.length === 0) {
    c.error(scope, "blocks", "blocks required");
  } else {
    const validKinds = ["text", "list", "table", "compare", "steps", "visual", "callout"];
    note.blocks.forEach((b, i) => {
      if (!validKinds.includes(b.kind)) c.error(scope, "blocks", `blocks[${i}].kind "${b.kind}" invalid`);
      if (b.kind === "visual") {
        if (!str(b.visualId)) c.error(scope, "blocks", `blocks[${i}] visual without visualId`);
        else if (!ctx.registryKeys.has(b.visualId)) {
          c.error(scope, "blocks", `blocks[${i}] visualId "${b.visualId}" not in VisualRegistry (would render "Visual unavailable")`);
        }
      }
    });
  }

  // mini-case internal consistency (pilot QA rule 1)
  const mc = note.usmle.miniCase;
  const mcScope = `note[${note.id}].miniCase`;
  if (!mc || !str(mc.vignette) || !str(mc.question) || !str(mc.reasoning)) {
    c.error(mcScope, "shape", "vignette/question/reasoning required");
  } else if (!Array.isArray(mc.options) || mc.options.length < 4) {
    c.error(mcScope, "options", "≥ 4 options required");
  } else {
    const correct = mc.options.filter((o) => o.correct === true);
    if (correct.length !== 1) c.error(mcScope, "options", `exactly 1 correct option required, found ${correct.length}`);
    for (const o of mc.options) {
      if (!str(o.label) || !str(o.text)) c.error(mcScope, "options", "every option needs label + text");
      if (!str(o.why)) c.error(mcScope, "options", `option ${o.label}: why missing (answer autopsy)`);
    }
  }

  if (!Array.isArray(note.usmle.patterns) || note.usmle.patterns.length < 3) c.error(scope, "patterns", "≥ 3 vignette patterns");
  if (!Array.isArray(note.usmle.traps) || note.usmle.traps.length < 3) c.error(scope, "traps", "≥ 3 traps");
  if (!Array.isArray(note.usmle.pivots) || note.usmle.pivots.length < 2) c.error(scope, "pivots", "≥ 2 pivots");

  // mnemonic quality bar (pilot QA rule 6)
  if (!Array.isArray(note.mnemonics) || note.mnemonics.length === 0) {
    c.warn(scope, "mnemonics", "no mnemonics — acceptable only for simple topics (mnemonicStatus must say so)");
  } else {
    for (const m of note.mnemonics) {
      if (!str(m.code) || !str(m.meaning) || !str(m.memorizes) || !str(m.whenToUse) || !str(m.clinical)) {
        c.error(scope, "mnemonics", `mnemonic "${m.code}" fails the quality bar (code/meaning/memorizes/whenToUse/clinical)`);
      }
    }
  }

  for (const tier of ["s30", "m3", "m10"] as const) {
    const arr = (note.rapidReview as Record<string, unknown>)[tier];
    if (!Array.isArray(arr) || (arr as unknown[]).length === 0) {
      c.error(scope, "rapidReview", `rapidReview.${tier} empty (all three tiers required)`);
    }
  }
  if (!Array.isArray(note.recall) || note.recall.length < 4) c.error(scope, "recall", "≥ 4 active-recall Q&As");
  if (!Array.isArray(note.related) || note.related.length < 3) c.error(scope, "related", "≥ 3 related topics");
  if (!Array.isArray(note.crossLinks) || note.crossLinks.length < 3) c.error(scope, "crossLinks", "≥ 3 cross-links");
}

/* ============================================================
   7. Server/client boundary rules (contract §1.3 / §3.3)
   ============================================================ */

/**
 * Validates the frozen server/client boundary on source text:
 *  - blocks.tsx / note pages must not import the visual registry
 *  - the registry may only be imported by figure.tsx (the client island)
 *    and by itself
 *  - blocks.tsx must pass only the serializable visualId to the island
 */
export function validateBoundaryRules(
  files: { path: string; source: string }[],
  c: IssueCollector
): void {
  const registryImport = /from\s+["']\.\/visuals\/registry["']|from\s+["'].*usmle\/visuals\/registry["']/;
  for (const f of files) {
    const rel = f.path.split("src/")[1] ?? f.path;
    const isFigureIsland = rel === "components/kyp/usmle/visuals/figure.tsx";
    const isRegistryItself = rel === "components/kyp/usmle/visuals/registry.tsx";
    if (registryImport.test(f.source) && !isFigureIsland && !isRegistryItself) {
      c.error("boundary", "registry-import", `${rel} imports the "use client" visual registry — only figure.tsx may (contract §1.3)`);
    }
    if (!isRegistryItself && /["']use client["']/.test(f.source) && /VisualRegistry/.test(f.source) && !isFigureIsland) {
      c.error("boundary", "registry-resolve", `${rel} resolves VisualRegistry outside the sanctioned client island`);
    }
  }
  const blocks = files.find((f) => (f.path.split("src/")[1] ?? f.path) === "components/kyp/usmle/blocks.tsx");
  if (blocks) {
    if (!/visualId=\{block\.visualId\}/.test(blocks.source)) {
      c.error("boundary", "figure-props", "blocks.tsx must pass only the serializable visualId to UsMLEVisualFigure");
    }
  } else {
    c.error("boundary", "blocks", "blocks.tsx not found in scanned files");
  }
}
