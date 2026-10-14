import type { MechanismFlow } from "@/lib/kyp/data";

/* ============================================================
   KYP USMLE 2026 — Note Data Model
   ------------------------------------------------------------
   USMLE 2026 pilot notes rendered INSIDE the existing KYP
   page framework. Content is new; layout/components/theme all
   come from the existing KYP design system.

   Mechanisms are authored directly in the universal KYP
   MechanismFlow format (nodes + edges) so they render through
   the shared KYP mechanism system — trigger → target →
   relationship → effect → consequence.
   ============================================================ */

export type BlockKind =
  | "text"
  | "list"
  | "table"
  | "compare"
  | "steps"
  | "visual"
  | "callout";

export interface TextBlock {
  kind: "text";
  title: string;
  body: string[]; // paragraphs
}

export interface ListBlock {
  kind: "list";
  title: string;
  intro?: string;
  items: { lead: string; text: string }[];
}

export interface TableBlock {
  kind: "table";
  title: string;
  intro?: string;
  columns: string[];
  rows: string[][];
  caption?: string;
}

export interface CompareBlock {
  kind: "compare";
  title: string;
  intro?: string;
  columns: [string, string];
  rows: { label: string; a: string; b: string }[];
}

export interface StepsBlock {
  kind: "steps";
  title: string;
  intro?: string;
  steps: { label: string; detail: string }[];
}

export interface VisualBlock {
  kind: "visual";
  visualId: string; // key in the USMLE visual registry
  title: string;
  caption: string; // what the learner sees
  notice: string; // "what should I notice?"
}

export interface CalloutBlock {
  kind: "callout";
  variant: "why" | "clinical" | "exam" | "memory";
  title: string;
  body: string;
}

export type Block =
  | TextBlock
  | ListBlock
  | TableBlock
  | CompareBlock
  | StepsBlock
  | VisualBlock
  | CalloutBlock;

/* ------------------------------------------------------------
   Mechanisms — data for the universal KYP mechanism system
   ------------------------------------------------------------ */

export interface UsMLEMechanism {
  id: string;
  title: string;
  /** When this flow applies (fed state, fasting state, type 1 DM...) */
  context?: string;
  /** Rendered by the shared KYP <MechanismFlow /> component */
  flow: MechanismFlow;
}

/* ------------------------------------------------------------
   Pharmacology
   ------------------------------------------------------------ */

export interface DrugCard {
  drug: string;
  klass: string;
  target: string;
  mechanism: string;
  effect: string;
  uses: string;
  adverse: string;
  clue?: string;
}

/* ------------------------------------------------------------
   USMLE application
   ------------------------------------------------------------ */

export interface PatternCard {
  stem: string; // what the vignette shows
  discriminator: string; // key clue
  concept: string; // underlying concept
  answer: string; // where it points
}

export interface TrapCard {
  a: string;
  b: string;
  whyConfused: string;
  keyDifference: string;
  clue: string;
}

export interface PivotCard {
  lookAlike: string;
  differentiator: string;
  correctPath: string;
}

export interface MiniCaseOption {
  label: string;
  text: string;
  correct?: boolean;
  why: string; // why right / why wrong (and why tempting)
}

export interface MiniCase {
  vignette: string;
  question: string;
  options: MiniCaseOption[];
  reasoning: string;
}

/* ------------------------------------------------------------
   Memory
   ------------------------------------------------------------ */

export interface Mnemonic {
  code: string; // the mnemonic itself
  meaning: string; // what each part means
  memorizes: string; // what list/facts it stores
  whenToUse: string;
  clinical: string; // clinical application
}

export interface RapidReview {
  s30: string[];
  m3: string[];
  m10: string[];
}

/* ------------------------------------------------------------
   KYP connections
   ------------------------------------------------------------ */

export interface RelatedTopic {
  title: string;
  note: string; // why it is related (connections must teach)
  topicId?: string; // link to another USMLE note if present
}

export interface CrossLink {
  subject: string;
  connection: string;
}

/* ------------------------------------------------------------
   The full note
   ------------------------------------------------------------ */

export interface KypUsMLENote {
  id: string;
  title: string;
  subtitle: string;
  subject: string; // Biochemistry, Pharmacology...
  system: string; // section of the book
  pilotCategory: string; // what pilot stress dimension this covers
  difficulty: 1 | 2 | 3;
  readTime: number; // minutes
  sourceRef: string; // First Aid 2026 source pages
  tags: string[];
  core: { what: string; why: string; keyIdea: string };
  mechanisms: UsMLEMechanism[];
  blocks: Block[]; // main content sections
  clinical?: Block[]; // manifestations / labs / dx / tx
  drugs?: DrugCard[];
  usmle: {
    patterns: PatternCard[];
    traps: TrapCard[];
    pivots: PivotCard[];
    miniCase: MiniCase;
  };
  mnemonics: Mnemonic[];
  rapidReview: RapidReview;
  recall: { q: string; a: string }[];
  related: RelatedTopic[];
  crossLinks: CrossLink[];
}
