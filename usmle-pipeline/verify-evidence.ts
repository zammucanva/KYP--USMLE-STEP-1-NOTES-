/**
 * USMLE Phase I pipeline — SOURCE EVIDENCE VERIFICATION.
 *
 * Re-verifies every manifest's sourceEvidence quotes against the actual
 * PDF text layer of First Aid 2026 (whitespace-insensitive containment on
 * the pinned pages). Quotes are never trusted from the manifest alone.
 *
 * Usage: bun scripts/usmle-pipeline/verify-evidence.ts [--verbose]
 * Exit 0 = all evidence verified · exit 1 = any claim failed.
 */

import {
  readJsonDir,
  quoteOnPages,
  CONTENT,
  join,
} from "./common";
import type { TopicManifest } from "../../src/lib/kyp/usmle/pipeline/schemas";

function main(): number {
  const verbose = process.argv.includes("--verbose");
  const manifests = readJsonDir(join(CONTENT, "manifests")) as Map<string, TopicManifest>;
  if (manifests.size === 0) {
    console.error("No manifests found under content/usmle/manifests.");
    return 1;
  }

  let total = 0;
  let passed = 0;
  let failed = 0;
  const failures: string[] = [];

  console.log(`Source-evidence verification against the PDF text layer (${manifests.size} manifests)\n`);

  for (const [id, m] of [...manifests].sort()) {
    const results: { claim: string; ok: boolean }[] = [];
    for (const e of m.sourceEvidence ?? []) {
      total++;
      const ok = quoteOnPages(e.pages.part, e.pages.pdfPages, e.quote);
      if (ok) passed++;
      else {
        failed++;
        failures.push(`${id} — ${e.claim}`);
      }
      results.push({ claim: e.claim, ok });
    }
    const okCount = results.filter((r) => r.ok).length;
    console.log(`  ${id.padEnd(24)} ${okCount}/${results.length} evidence quotes verified`);
    if (verbose) {
      for (const r of results) console.log(`      [${r.ok ? "✓" : "✗"}] ${r.claim}`);
    }
    // declared status must match reality
    for (const e of m.sourceEvidence ?? []) {
      const ok = quoteOnPages(e.pages.part, e.pages.pdfPages, e.quote);
      if (e.verified === "pass" && !ok) {
        failed++;
        failures.push(`${id} — declared pass but quote not found: ${e.claim}`);
      }
    }
  }

  console.log(`\n  evidence items: ${total} · verified: ${passed} · failed: ${failed}`);
  if (failed > 0) {
    console.error("\nFAILED EVIDENCE (source fidelity stop-condition — do not improvise):");
    for (const f of failures) console.error(`  ✗ ${f}`);
    return 1;
  }
  console.log("ALL EVIDENCE VERIFIED against the supplied PDFs.");
  return 0;
}

process.exit(main());
