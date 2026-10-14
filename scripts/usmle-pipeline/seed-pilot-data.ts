/**
 * Seed orchestrator — writes the 10 pilot manifests + visual inventories
 * and registers the pilot topics in their chapter inventory files.
 *
 * Deterministic: rerunning produces identical output (same UPDATED date).
 *
 * Usage: bun scripts/usmle-pipeline/seed-pilot-data.ts
 */

import { writeJson, readJson, CONTENT, join } from "./common";
import { PILOT_MANIFESTS } from "./seed-manifests";
import { PILOT_INVENTORIES } from "./seed-visual-inventory";
import type { ChapterInventory } from "../../src/lib/kyp/usmle/pipeline/schemas";

function main(): void {
  // 1. manifests
  for (const m of PILOT_MANIFESTS) {
    writeJson(join(CONTENT, "manifests", `${m.topicId}.json`), m);
  }
  console.log(`wrote ${PILOT_MANIFESTS.length} manifests → content/usmle/manifests/`);

  // 2. visual inventories
  for (const v of PILOT_INVENTORIES) {
    writeJson(join(CONTENT, "visual-inventory", `${v.topicId}.json`), v);
  }
  console.log(`wrote ${PILOT_INVENTORIES.length} visual inventories → content/usmle/visual-inventory/`);

  // 3. register pilot topics in their chapter inventories (no silent disappearance)
  const byChapter = new Map<string, typeof PILOT_MANIFESTS>();
  for (const m of PILOT_MANIFESTS) {
    const arr = byChapter.get(m.chapterId) ?? [];
    arr.push(m);
    byChapter.set(m.chapterId, arr);
  }
  for (const [chapterId, manifests] of byChapter) {
    const path = join(CONTENT, "chapters", `${chapterId}.json`);
    const ch = readJson<ChapterInventory>(path);
    const topics = [...(ch.topics ?? [])];
    for (const m of manifests) {
      if (!topics.some((t) => t.topicId === m.topicId)) {
        topics.push({
          topicId: m.topicId,
          title: m.title,
          subsection: m.subsection,
          sourcePages: m.sourcePages,
          difficulty: m.topicId === "glycolysis-regulation" || m.topicId === "cranial-nerves" || m.topicId === "diabetes-mellitus" ? 3 : 2,
          requiresVisual: m.visualIds.length > 0,
          visualHints: m.visualIds,
          mechanismHeavy: m.mechanismIds.length >= 2,
          status: "complete",
        });
      }
    }
    topics.sort((a, b) => a.subsection.localeCompare(b.subsection) || a.title.localeCompare(b.title));
    writeJson(path, { ...ch, topics });
  }
  console.log(`registered pilot topics in ${byChapter.size} chapter files (extractionStatus stays "registered" — full Phase I-C extraction pending)`);
}

main();
