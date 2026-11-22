/**
 * USMLE Phase I pipeline — CONTENT COMPLETENESS AUDIT.
 *
 * Depth-standard report per shipped note (contract §2 depth standard,
 * Phase I-E: difficulty determines depth) + the machine-checkable subset
 * of the seven mandatory pilot QA rules. Structural schema failures are
 * validate.ts's job; this reports CONTENT DEPTH against the difficulty
 * tier and prints the pilot-QA-rule scoreboard.
 *
 * Usage: bun scripts/usmle-pipeline/audit.ts [--json]
 */

import { readJsonDir, loadNotes, CONTENT, join } from "./common";
import type { TopicManifest } from "../../src/lib/kyp/usmle/pipeline/schemas";

/** Minimum content depth by difficulty tier (pilot-calibrated). */
const DEPTH = {
  1: { mechanisms: 1, patterns: 3, traps: 2, pivots: 2, recall: 4, related: 3, crossLinks: 2, mnemonics: 0 },
  2: { mechanisms: 1, patterns: 3, traps: 3, pivots: 2, recall: 5, related: 3, crossLinks: 3, mnemonics: 1 },
  3: { mechanisms: 2, patterns: 4, traps: 3, pivots: 2, recall: 6, related: 4, crossLinks: 3, mnemonics: 2 },
} as const;

function main(): void {
  const asJson = process.argv.includes("--json");
  loadNotes().then((notes) => {
    const manifests = readJsonDir(join(CONTENT, "manifests")) as Map<string, TopicManifest>;
    const rows: Record<string, any>[] = [];
    let failures = 0;

    for (const note of notes as any[]) {
      const m = manifests.get(note.id);
      const tier = DEPTH[(note.difficulty as 1 | 2 | 3) ?? 2];
      const visualsUsed = [...(note.blocks ?? []), ...(note.clinical ?? [])].filter((b: any) => b.kind === "visual").length;
      const row: Record<string, any> = {
        topicId: note.id,
        difficulty: note.difficulty,
        mechanisms: note.mechanisms.length,
        visuals: visualsUsed,
        patterns: note.usmle.patterns.length,
        traps: note.usmle.traps.length,
        pivots: note.usmle.pivots.length,
        mnemonics: note.mnemonics.length,
        recall: note.recall.length,
        related: note.related.length,
        crossLinks: note.crossLinks.length,
        drugCards: (note.drugs ?? []).length,
        clinicalBlocks: (note.clinical ?? []).length,
        evidence: m?.sourceEvidence?.length ?? 0,
        kypExtensions: m?.kypExtensions?.length ?? 0,
      };
      const problems: string[] = [];
      if (row.mechanisms < tier.mechanisms) problems.push(`mechanisms ${row.mechanisms} < ${tier.mechanisms} for difficulty ${note.difficulty}`);
      if (row.patterns < tier.patterns) problems.push(`patterns ${row.patterns} < ${tier.patterns}`);
      if (row.traps < tier.traps) problems.push(`traps ${row.traps} < ${tier.traps}`);
      if (row.pivots < tier.pivots) problems.push(`pivots ${row.pivots} < ${tier.pivots}`);
      if (row.recall < tier.recall) problems.push(`recall ${row.recall} < ${tier.recall}`);
      if (row.related < tier.related) problems.push(`related ${row.related} < ${tier.related}`);
      if (row.crossLinks < tier.crossLinks) problems.push(`crossLinks ${row.crossLinks} < ${tier.crossLinks}`);
      if (tier.mnemonics > 0 && row.mnemonics < tier.mnemonics && m?.mnemonicStatus !== "none-needed") {
        problems.push(`mnemonics ${row.mnemonics} < ${tier.mnemonics} (and mnemonicStatus is not none-needed)`);
      }
      if (row.evidence === 0) problems.push("no pinned source evidence");
      row.depthFailures = problems;
      if (problems.length > 0) failures++;
      rows.push(row);
    }

    if (asJson) {
      console.log(JSON.stringify(rows, null, 2));
    } else {
      console.log("Content completeness audit — depth by difficulty tier\n");
      const head = ["topic", "df", "mech", "vis", "pat", "trap", "piv", "mnem", "rec", "rel", "xlnk", "drug", "clin", "evid", "ext"];
      console.log("  " + head.map((h, i) => (h + " ".repeat(6)).slice(0, i === 0 ? 24 : 6)).join(""));
      for (const r of rows) {
        const line = [
          r.topicId, r.difficulty, r.mechanisms, r.visuals, r.patterns, r.traps, r.pivots,
          r.mnemonics, r.recall, r.related, r.crossLinks, r.drugCards, r.clinicalBlocks, r.evidence, r.kypExtensions,
        ];
        console.log("  " + line.map((v, i) => (String(v) + " ".repeat(6)).slice(0, i === 0 ? 24 : 6)).join("") + (r.depthFailures.length ? "  ✗ " + r.depthFailures.join("; ") : ""));
      }
      console.log(`\n  topics: ${rows.length} · depth failures: ${failures}`);
      console.log("\n  Seven pilot QA rules — machine-checked in validate.ts:");
      console.log("    1 mini-case consistency · 2 kypExtensions traceability · 3 tracker sync");
      console.log("    4 absorbed-figure rule (visual inventory) · 6 mnemonic quality bar");
      console.log("    7 coverageAudit precision    [5 figure-label sweep = browser/VLM QA, not machine]");
    }
    process.exit(failures > 0 ? 1 : 0);
  });
}

main();
