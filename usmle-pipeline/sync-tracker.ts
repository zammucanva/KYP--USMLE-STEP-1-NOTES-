/**
 * USMLE Phase I pipeline — TRACKER SYNCHRONIZATION.
 *
 * Regenerates content/usmle/tracker.json deterministically from:
 *   - content/usmle/chapters/*.json   (chapter registration + inventories)
 *   - content/usmle/manifests/*.json  (topic production state)
 *   - src/lib/kyp/usmle/notes         (shipped notes)
 *
 * The tracker is GENERATED — never hand-edited (contract §7).
 * Determinism: stable ordering (chapter number, then topicId); the only
 * volatile field is generatedAt.
 *
 * Usage: bun scripts/usmle-pipeline/sync-tracker.ts
 */

import {
  ChapterDef,
  CHAPTERS,
  PIPELINE_STAGES,
  QA_GATES,
  type TopicManifest,
  type Tracker,
  type TrackerChapterEntry,
  type TrackerTopicEntry,
} from "../../src/lib/kyp/usmle/pipeline/schemas";

import { readJsonDir, loadNotes, writeJson, CONTENT, join } from "./common";

async function main(): Promise<void> {
  const chapters = readJsonDir(join(CONTENT, "chapters")) as Map<string, any>;
  const manifests = readJsonDir(join(CONTENT, "manifests")) as Map<string, TopicManifest>;
  const notes = await loadNotes();
  const noteIds = new Set(notes.map((n) => n.id as string));

  const chapterDefById = new Map<string, ChapterDef>(CHAPTERS.map((c) => [c.chapterId, c]));

  // ── topics (from manifests; every shipped note must have one) ──────
  const topics: TrackerTopicEntry[] = [...manifests.values()]
    .map((m) => {
      const gatesPassed = QA_GATES.filter((g) => m.qa[g] === "pass" || m.qa[g] === "waived").length;
      const entry: TrackerTopicEntry = {
        topicId: m.topicId,
        title: m.title,
        chapterId: m.chapterId,
        subsection: m.subsection,
        productionStatus: m.productionStatus,
        qaGatesPassed: gatesPassed,
        qaGatesTotal: QA_GATES.length,
        sourcePages: `Part ${m.sourcePages.part} pdf ${m.sourcePages.pdfPages.join(", ")} (book ${m.sourcePages.bookPages})`,
        visualCount: m.visualIds.length,
        mechanismCount: m.mechanismIds.length,
        kypExtensionCount: m.kypExtensions.length,
        mnemonicStatus: m.mnemonicStatus,
        updatedAt: m.updatedAt,
      };
      if (m.pendingCorrections?.length) entry.pendingCorrections = m.pendingCorrections;
      return entry;
    })
    .sort((a, b) => a.topicId.localeCompare(b.topicId));

  // ── chapters (registered files first, in registry order) ───────────
  const chapterEntries: TrackerChapterEntry[] = [];
  for (const def of CHAPTERS) {
    const file = chapters.get(def.chapterId);
    if (!file) continue;
    const produced = topics.filter((t) => t.chapterId === def.chapterId);
    const inventoryTopics: { status: string }[] = Array.isArray(file.topics) ? file.topics : [];
    const pendingCount =
      file.extractionStatus === "registered"
        ? null
        : inventoryTopics.filter((t) => t.status === "pending" || t.status === "in-production" || t.status === "blocked").length;
    const qaStatus =
      produced.length > 0 && produced.every((t) => t.qaGatesPassed === t.qaGatesTotal)
        ? "pass"
        : produced.length > 0
          ? "in-progress"
          : "pending";
    chapterEntries.push({
      chapterId: def.chapterId,
      chapterTitle: def.chapterTitle,
      part: file.part ?? def.pdfRanges[0].part,
      extractionStatus: file.extractionStatus,
      topicsRegistered: inventoryTopics.length,
      topicsProduced: produced.length,
      topicsRemaining: pendingCount,
      qaStatus,
      completedAt: file.extractionStatus === "verified" && pendingCount === 0 ? (file.completedAt ?? null) : null,
    });
  }

  // ── counts ──────────────────────────────────────────────────────────
  const topicsByStatus = {} as Tracker["counts"]["topicsByStatus"];
  for (const st of ["planned", "inventory", "in-production", "pilot-complete", "chapter-complete", "blocked", "failed"] as const) {
    topicsByStatus[st] = topics.filter((t) => t.productionStatus === st).length;
  }

  const tracker: Tracker = {
    schemaVersion: "1",
    generatedAt: new Date().toISOString().replace(/\.\d+Z$/, "Z"),
    sourceBook: "First Aid for the USMLE Step 1 2026",
    book: {
      parts: [
        { part: 1, file: "upload/usmle part1.pdf", pdfPages: 433, bookPageOffset: -22 },
        { part: 2, file: "upload/usmle part 2.pdf", pdfPages: 436, bookPageOffset: 408 },
      ],
      chapterMap: CHAPTERS.map((c) => ({
        chapterId: c.chapterId,
        chapterTitle: c.chapterTitle,
        number: c.number,
        slug: c.slug,
        section: c.section,
        pdfRanges: c.pdfRanges,
      })),
    },
    estimatedTotalTopics: 3029,
    counts: {
      chaptersRegistered: chapterEntries.length,
      chaptersExtracted: chapterEntries.filter((e) => e.extractionStatus !== "registered").length,
      topicsProduced: topics.length,
      topicsByStatus,
    },
    chapters: chapterEntries,
    topics,
  };

  // sanity: every shipped note must appear in the tracker
  const missing = [...noteIds].filter((id) => !topics.some((t) => t.topicId === id));
  if (missing.length > 0) {
    console.error(`sync-tracker: notes without manifests (would vanish from the tracker!): ${missing.join(", ")}`);
    process.exit(1);
  }

  writeJson(join(CONTENT, "tracker.json"), tracker);
  console.log(
    `tracker.json regenerated — chapters registered: ${chapterEntries.length}, topics: ${topics.length} ` +
      `(pilot-complete: ${topicsByStatus["pilot-complete"]}, blocked: ${topicsByStatus["blocked"]})`
  );
  console.log(`stages per topic: ${PIPELINE_STAGES.length} · qa gates per topic: ${QA_GATES.length}`);
}

main().catch((e) => {
  console.error("sync-tracker.ts crashed:", e);
  process.exit(1);
});
