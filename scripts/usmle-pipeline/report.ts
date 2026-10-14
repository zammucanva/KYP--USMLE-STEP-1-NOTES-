/**
 * USMLE Phase I pipeline — STATUS / CHAPTER QA REPORT (Phase I-J format).
 *
 * Usage:
 *   bun scripts/usmle-pipeline/report.ts                 # global pipeline status
 *   bun scripts/usmle-pipeline/report.ts <chapterId>     # chapter QA report
 *
 * Chapter report fields (contract §11): topics completed · topics
 * remaining · source coverage · visual coverage · mechanism coverage ·
 * QA results · failed items · corrected items · kypExtensions count ·
 * tracker synchronization status.
 */

import {
  QA_GATES,
  type TopicManifest,
  type TopicVisualInventory,
  type Tracker,
} from "../../src/lib/kyp/usmle/pipeline/schemas";
import { readJsonDir, readJson, loadNotes, CONTENT, join, existsSync } from "./common";

async function main(): Promise<void> {
  const chapterArg = process.argv[2];
  const notes = await loadNotes();
  const manifests = readJsonDir(join(CONTENT, "manifests")) as Map<string, TopicManifest>;
  const inventories = readJsonDir(join(CONTENT, "visual-inventory")) as Map<string, TopicVisualInventory>;
  const tracker: Tracker | null = existsSync(join(CONTENT, "tracker.json"))
    ? (readJson(join(CONTENT, "tracker.json")) as Tracker)
    : null;

  if (!chapterArg) {
    // ── global status ─────────────────────────────────────────────────
    console.log("USMLE 2026 Phase I — pipeline status\n");
    console.log(`  source book: First Aid for the USMLE Step 1 2026 · estimated total topics: ${tracker?.estimatedTotalTopics ?? "—"}`);
    console.log(`  topics produced: ${notes.length} / ${tracker?.estimatedTotalTopics ?? "?"} (${((notes.length / (tracker?.estimatedTotalTopics ?? 3029)) * 100).toFixed(2)}%)\n`);
    console.log("  chapter                              status        produced  remaining");
    console.log("  ───────────────────────────────────  ────────────  ────────  ─────────");
    for (const ch of tracker?.chapters ?? []) {
      console.log(
        `  ${(ch.chapterTitle + " ".repeat(36)).slice(0, 36)}  ${ch.extractionStatus.padEnd(12)}  ${String(ch.topicsProduced).padEnd(8)}  ${ch.topicsRemaining ?? "pending I-C"}`
      );
    }
    const pendingCorrections = [...manifests.values()].flatMap((m) =>
      (m.pendingCorrections ?? []).map((p) => `${m.topicId}: ${p}`)
    );
    if (pendingCorrections.length) {
      console.log("\n  pending corrections (awaiting user decision):");
      for (const p of pendingCorrections) console.log(`    • ${p}`);
    }
    return;
  }

  // ── chapter report (Phase I-J) ─────────────────────────────────────
  const chapterManifests = [...manifests.values()].filter((m) => m.chapterId === chapterArg);
  if (chapterManifests.length === 0) {
    console.error(`No produced topics for chapter "${chapterArg}".`);
    process.exit(1);
  }
  console.log(`Chapter QA report — ${chapterArg}\n`);

  console.log("Topics completed:");
  for (const m of chapterManifests) console.log(`  ✓ ${m.topicId} — ${m.title} (${m.productionStatus})`);

  const inv = chapterManifests.map((m) => inventories.get(m.topicId)).filter(Boolean) as TopicVisualInventory[];
  const totals = inv.reduce(
    (a, v) => ({
      identified: a.identified + v.coverageAudit.textbookVisualCount,
      accounted: a.accounted + v.coverageAudit.accountedFor,
      repro: a.repro + v.coverageAudit.sourceReproductions,
      redraw: a.redraw + v.coverageAudit.kypRedraws,
      original: a.original + v.coverageAudit.kypOriginals,
      unresolved: a.unresolved + v.coverageAudit.unresolved,
      omitted: a.omitted + v.coverageAudit.omitted,
    }),
    { identified: 0, accounted: 0, repro: 0, redraw: 0, original: 0, unresolved: 0, omitted: 0 }
  );

  console.log("\nVisual coverage:");
  console.log(`  textbook figures identified: ${totals.identified}`);
  console.log(`  accounted for: ${totals.accounted}`);
  console.log(`  source-reproductions: ${totals.repro}`);
  console.log(`  KYP redraws: ${totals.redraw}`);
  console.log(`  KYP originals/adaptations: ${totals.original}`);
  console.log(`  unresolved: ${totals.unresolved}`);
  console.log(`  omitted + reasons: ${totals.omitted}`);
  for (const v of inv) {
    for (const r of v.inventory.filter((x) => x.requiredInKYP === false)) {
      console.log(`    – ${r.visualId}: ${r.omissionReason}`);
    }
  }

  console.log("\nMechanism coverage:");
  for (const m of chapterManifests) console.log(`  ${m.topicId}: ${m.mechanismIds.length} flow(s) — ${m.mechanismIds.join(", ")}`);

  console.log("\nQA results:");
  for (const m of chapterManifests) {
    const failed = QA_GATES.filter((g) => m.qa[g] !== "pass" && m.qa[g] !== "waived");
    console.log(`  ${m.topicId}: ${QA_GATES.length - failed.length}/${QA_GATES.length} gates${failed.length ? " — failed: " + failed.join(", ") : " ✓ all pass"}`);
  }

  console.log("\nkypExtensions:");
  const extCount = chapterManifests.reduce((a, m) => a + m.kypExtensions.length, 0);
  console.log(`  total: ${extCount}`);
  for (const m of chapterManifests) {
    for (const k of m.kypExtensions) console.log(`    – ${m.topicId} · ${k.id}: ${k.summary}`);
  }

  const trackerIds = new Set((tracker?.topics ?? []).map((t) => t.topicId));
  const synced = chapterManifests.every((m) => trackerIds.has(m.topicId));
  console.log(`\nTracker synchronization: ${synced ? "in sync ✓" : "OUT OF SYNC — run sync-tracker.ts"}`);
  console.log("\nTopics remaining: full chapter extraction pending Phase I-C (chapter-by-chapter processing).");
}

main().catch((e) => {
  console.error("report.ts crashed:", e);
  process.exit(1);
});
