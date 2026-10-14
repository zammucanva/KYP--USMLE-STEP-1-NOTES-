/**
 * USMLE Phase I pipeline — MASTER CONTRACT GATE.
 *
 * Enforces docs/usmle/ARCHITECTURE-CONTRACT.md v1.0.0:
 *   - note schema + mini-case consistency + mnemonic bar (runtime)
 *   - topic manifests: 16-stage chain, 15 QA gates, traceability
 *   - visual inventories: implementation types, rights rules, coverage
 *     audits (no silent omissions)
 *   - chapter inventories vs the calibrated chapter registry
 *   - tracker ⇄ manifests ⇄ notes 1:1 (no silent disappearance)
 *   - the frozen server/client visual-registry boundary
 *
 * Usage: bun scripts/usmle-pipeline/validate.ts
 * Exit 0 = contract green · exit 1 = violations listed.
 */

import {
  IssueCollector,
  validateNote,
  validateTopicManifest,
  validateTopicVisualInventory,
  validateChapterInventory,
  validateTracker,
  validateBoundaryRules,
  type NoteLike,
  type TopicManifest,
  type ValidationContext,
  CHAPTERS,
} from "../../src/lib/kyp/usmle/pipeline/schemas";

import { readFileSync } from "fs";

import {
  CONTENT,
  readJsonDir,
  loadNotes,
  loadRegistryKeys,
  usmleSourceFiles,
  join,
  existsSync,
} from "./common";

async function main(): Promise<number> {
  const c = new IssueCollector();
  console.log("USMLE Phase I — contract validation (ARCHITECTURE-CONTRACT.md v1.0.0)\n");

  // ── load the real app data ─────────────────────────────────────────
  const [notes, registryKeys] = await Promise.all([loadNotes(), loadRegistryKeys()]);
  const noteIds = new Set(notes.map((n) => n.id as string));
  console.log(`  notes: ${notes.length} · registry visuals: ${registryKeys.length}`);

  const manifests = readJsonDir(join(CONTENT, "manifests")) as Map<string, TopicManifest>;
  const inventories = readJsonDir(join(CONTENT, "visual-inventory"));
  const chapters = readJsonDir(join(CONTENT, "chapters"));
  console.log(`  manifests: ${manifests.size} · visual inventories: ${inventories.size} · chapter files: ${chapters.size}`);

  const ctx: ValidationContext = {
    registryKeys: new Set(registryKeys),
    noteIds,
    manifestIds: new Set(manifests.keys()),
  };

  // ── 1. notes (schema + internal consistency) ───────────────────────
  console.log("\n[1/6] Notes — schema, mini-case, mnemonic bar, mechanism edges");
  for (const note of notes as unknown as NoteLike[]) validateNote(note, ctx, c);

  // ── 2. manifests ───────────────────────────────────────────────────
  console.log("[2/6] Topic manifests — stages, gates, traceability");
  for (const [id, m] of manifests) {
    const before = c.issues.length;
    validateTopicManifest(m, ctx, c);
    const scopeNote = c.issues.slice(before).filter((i) => i.scope === "manifest").length;
    void scopeNote;
    // cross-check manifest ⇄ note
    const note = notes.find((n) => n.id === id) as NoteLike | undefined;
    if (note) {
      const usedVisuals = [...(note.blocks ?? []), ...((note.clinical ?? []) as any[])]
        .filter((b: any) => b.kind === "visual")
        .map((b: any) => b.visualId as string);
      if (JSON.stringify(usedVisuals) !== JSON.stringify(m.visualIds)) {
        c.error(`manifest[${id}]`, "cross-check", `visualIds ${JSON.stringify(m.visualIds)} != note blocks' visual usage ${JSON.stringify(usedVisuals)}`);
      }
      const mechIds = (note.mechanisms ?? []).map((x: any) => x.id);
      if (JSON.stringify(mechIds) !== JSON.stringify(m.mechanismIds)) {
        c.error(`manifest[${id}]`, "cross-check", `mechanismIds ${JSON.stringify(m.mechanismIds)} != note mechanisms ${JSON.stringify(mechIds)}`);
      }
      if (m.title !== note.title) {
        c.error(`manifest[${id}]`, "cross-check", `title "${m.title}" != note title "${note.title}"`);
      }
      // sourceRef display standard (production format):
      //   "First Aid 2026, Part N pp. X–Y (keywords)"
      // where X–Y is the PRINTED/BOOK page range from the manifest. The exact
      // PDF range lives in the manifest only. Prevents silently mixing
      // pdf-page and book-page citations between topics.
      const expectedRefPrefix = `First Aid 2026, Part ${m.sourcePages.part} pp. ${m.sourcePages.bookPages} (`;
      if (!note.sourceRef.startsWith(expectedRefPrefix) || !note.sourceRef.endsWith(")")) {
        c.error(
          `manifest[${id}]`,
          "cross-check",
          `sourceRef "${note.sourceRef}" does not follow the production format "First Aid 2026, Part ${m.sourcePages.part} pp. ${m.sourcePages.bookPages} (keywords)" (visible pp. range must be the book-page range)`
        );
      }
    }
  }
  // every note needs a manifest (1:1)
  for (const id of noteIds) {
    if (!manifests.has(id)) c.error("manifest", "coverage", `note "${id}" has no manifest (1:1 required)`);
  }

  // ── 3. visual inventories ──────────────────────────────────────────
  console.log("[3/6] Visual inventories — implementation types, rights, coverage audits");
  for (const [id, v] of inventories) {
    if (!noteIds.has(id)) c.error("visual-inventory", "coverage", `inventory for unknown topic "${id}"`);
    validateTopicVisualInventory(v, ctx, c);
  }
  for (const id of noteIds) {
    if (!inventories.has(id)) {
      c.error("visual-inventory", "coverage", `note "${id}" has no visual-inventory file (textbook is a visual source — contract §3.4)`);
    }
  }
  // cross-file rule: unresolved inventory figures block the topic's visualCoverage gate
  for (const [id, v] of inventories) {
    const a = (v as any).coverageAudit as { unresolved: number } | undefined;
    const m = manifests.get(id) as TopicManifest | undefined;
    if (a && m && a.unresolved > 0 && m.qa.visualCoverage === "pass") {
      c.error("visual-inventory", "gate", `"${id}": ${a.unresolved} unresolved figure(s) but manifest qa.visualCoverage = pass — gate must not pass until accounted for`);
    }
  }

  // ── 4. chapter inventories ─────────────────────────────────────────
  console.log("[4/6] Chapter inventories — calibrated registry match");
  for (const [id, ch] of chapters) {
    if (id !== (ch as any).chapterId) c.error("chapter-inventory", "id", `file name "${id}" != chapterId "${(ch as any).chapterId}"`);
    validateChapterInventory(ch, c, ctx);
  }

  // ── 5. tracker ─────────────────────────────────────────────────────
  console.log("[5/6] Tracker — 1:1 sync with notes + manifests");
  const trackerPath = join(CONTENT, "tracker.json");
  if (!existsSync(trackerPath)) {
    c.error("tracker", "missing", "content/usmle/tracker.json not found — run sync-tracker.ts");
  } else {
    validateTracker(readJsonSafe(trackerPath), ctx, manifests, c);
  }

  // ── 6. server/client boundary ──────────────────────────────────────
  console.log("[6/6] Server/client boundary — visual registry access rules");
  validateBoundaryRules(usmleSourceFiles(), c);

  // ── summary ────────────────────────────────────────────────────────
  console.log("");
  c.print();
  const errors = c.issues.filter((i) => i.severity === "error");
  if (errors.length === 0) {
    console.log("CONTRACT GREEN — all validations passed.");
    return 0;
  }
  console.error(`CONTRACT VIOLATIONS: ${errors.length} — see above. Pipeline is blocked until resolved.`);
  return 1;
}

function readJsonSafe(path: string): unknown {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    return { __unparseable: String(e) };
  }
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error("validate.ts crashed:", err);
    process.exit(1);
  }
);
