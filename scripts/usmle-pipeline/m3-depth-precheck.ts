// M3 depth pre-check: load the notes through the real registry and verify
// audit-tier compliance + visual usage order (must match manifests later).
import { usmleNotes } from "../../src/lib/kyp/usmle/notes";
import { VisualRegistry } from "../../src/components/kyp/usmle/visuals/registry";

const DEPTH: Record<number, any> = {
  1: { mechanisms: 1, patterns: 3, traps: 2, pivots: 2, recall: 4, related: 3, crossLinks: 2, mnemonics: 0 },
  2: { mechanisms: 1, patterns: 3, traps: 3, pivots: 2, recall: 5, related: 3, crossLinks: 3, mnemonics: 1 },
  3: { mechanisms: 2, patterns: 4, traps: 3, pivots: 2, recall: 6, related: 4, crossLinks: 3, mnemonics: 2 },
};

const M3 = ["cell-cycle", "organelles-cell-trafficking", "cytoskeleton-cilia", "collagen-elastin", "connective-tissue-diseases"];
let fail = 0;
for (const note of usmleNotes) {
  if (!M3.includes(note.id)) continue;
  const tier = DEPTH[note.difficulty];
  const usedVisuals = [...(note.blocks ?? []), ...(note.clinical ?? [])]
    .filter((b: any) => b.kind === "visual")
    .map((b: any) => b.visualId as string);
  const problems: string[] = [];
  if (note.mechanisms.length < tier.mechanisms) problems.push(`mechanisms ${note.mechanisms.length}<${tier.mechanisms}`);
  if (note.usmle.patterns.length < tier.patterns) problems.push(`patterns ${note.usmle.patterns.length}<${tier.patterns}`);
  if (note.usmle.traps.length < tier.traps) problems.push(`traps ${note.usmle.traps.length}<${tier.traps}`);
  if (note.usmle.pivots.length < tier.pivots) problems.push(`pivots ${note.usmle.pivots.length}<${tier.pivots}`);
  if (note.recall.length < tier.recall) problems.push(`recall ${note.recall.length}<${tier.recall}`);
  if (note.related.length < tier.related) problems.push(`related ${note.related.length}<${tier.related}`);
  if (note.crossLinks.length < tier.crossLinks) problems.push(`crossLinks ${note.crossLinks.length}<${tier.crossLinks}`);
  if (tier.mnemonics > 0 && note.mnemonics.length < tier.mnemonics) problems.push(`mnemonics ${note.mnemonics.length}<${tier.mnemonics}`);
  for (const v of usedVisuals) if (!(v in VisualRegistry)) problems.push(`visualId "${v}" NOT in registry`);
  // mini-case
  const correct = note.usmle.miniCase.options.filter((o: any) => o.correct === true).length;
  if (correct !== 1) problems.push(`miniCase correct count = ${correct}`);
  if (note.usmle.miniCase.options.length < 4) problems.push("miniCase < 4 options");
  if (problems.length) { fail++; console.log(`✗ ${note.id}: ${problems.join("; ")}`); }
  console.log(
    `${problems.length ? "FAIL" : "ok  "} ${note.id.padEnd(28)} D${note.difficulty} mech=${note.mechanisms.length} vis=[${usedVisuals.join(", ")}] pat=${note.usmle.patterns.length} trap=${note.usmle.traps.length} piv=${note.usmle.pivots.length} mnem=${note.mnemonics.length} rec=${note.recall.length} rel=${note.related.length} xlnk=${note.crossLinks.length} drug=${(note.drugs ?? []).length} clin=${(note.clinical ?? []).length}`
  );
}
console.log(`\ntotal notes: ${usmleNotes.length} · M3 failures: ${fail}`);
