/* PH11 final structural QA — imports the authored note and asserts the
 * batch quality bars + verbatim-table rules against the text layer.
 * Authoring-side check only (the main agent owns validate/audit). */
import { painTransmission } from "../../src/lib/kyp/usmle/notes/pain-transmission";
import { readFileSync } from "fs";

const n = painTransmission;
const problems: string[] = [];
const ok = (cond: boolean, msg: string) => { if (!cond) problems.push(msg); };

ok(n.id === "pain-transmission", "id");
ok(n.title === "Pain Transmission & Analgesic Targets", "title must be exact display title");
ok(n.difficulty === 2, "difficulty 2");
ok(n.subject === "Pharmacology", "subject");
ok(n.mechanisms.length === 2, `mechanisms 2 (got ${n.mechanisms.length})`);
ok(n.usmle.patterns.length >= 3, "patterns >= 3");
ok(n.usmle.traps.length >= 3, "traps >= 3");
ok(n.usmle.pivots.length >= 2, "pivots >= 2");
ok(n.recall.length >= 5, "recall >= 5");
ok(n.related.length >= 3, "related >= 3");
ok(n.crossLinks.length >= 3, "crossLinks >= 3");
ok(n.mnemonics.length === 4, `mnemonics 4 (got ${n.mnemonics.length})`);
ok(n.rapidReview.s30.length > 0 && n.rapidReview.m3.length > 0 && n.rapidReview.m10.length > 0, "rapidReview tiers non-empty");

const opts = n.usmle.miniCase.options;
ok(opts.length === 4, `miniCase options 4 (got ${opts.length})`);
ok(opts.filter((o) => o.correct).length === 1, `exactly 1 correct (got ${opts.filter((o) => o.correct).length})`);
ok(opts.every((o) => typeof o.why === "string" && o.why.length > 40), "why on every option");

for (const m of n.mechanisms) {
  const ids = new Set(m.flow.nodes.map((x) => x.id));
  ok(ids.size === m.flow.nodes.length, `${m.id}: unique node ids`);
  for (const e of m.flow.edges) {
    ok(ids.has(e.from) && ids.has(e.to), `${m.id}: edge endpoints exist (${e.from} -> ${e.to})`);
  }
}

const vblocks = n.blocks.filter((b) => b.kind === "visual") as { visualId: string }[];
ok(vblocks.length === 1 && vblocks[0].visualId === "pain-transmission-map", "visual block -> pain-transmission-map");

const pages = readFileSync(".usmle-pipeline-cache/part1.txt", "utf8").split("\f");
const page = pages[256];
const norm = (s: string) => s.replace(/[\u0080-\u009f]/g, "").replace(/\s+/g, " ").trim().toLowerCase();

const tblocks = n.blocks.filter((b) => b.kind === "table") as { rows: string[][] }[];
const verbatim = tblocks[0];
const EXPECTED_ROWS = [
  "Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli. Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).",
  "Processes involved in pain transmission:",
  "▘ Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids",
  "▘ Transmission—blocked by local anesthetics, α2-agonists, opioids",
  "▘ Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids",
  "▘ Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs",
  "Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.",
];
ok(verbatim.rows.length === 7, `verbatim table 7 rows (got ${verbatim.rows.length})`);
EXPECTED_ROWS.forEach((exp, i) => {
  const got = verbatim.rows[i]?.[1] ?? "";
  ok(got === exp, `verbatim row ${i + 1} exact mismatch`);
  ok(norm(page).includes(norm(exp)), `verbatim row ${i + 1} contained in text layer`);
});

for (const leak of [
  "Nicotinic ACh receptors are ligand-gated channels",
  "Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd",
]) {
  ok(!JSON.stringify(n).includes(leak), `ACh-half leak: ${leak.slice(0, 30)}`);
}

console.log(`counts: mech=${n.mechanisms.length} patterns=${n.usmle.patterns.length} traps=${n.usmle.traps.length} pivots=${n.usmle.pivots.length} recall=${n.recall.length} related=${n.related.length} crossLinks=${n.crossLinks.length} mnemonics=${n.mnemonics.length} blocks=${n.blocks.length} tags=${n.tags.length}`);
console.log(`miniCase: options=${opts.length} correct=${opts.filter((o) => o.correct).length} whyAll=${opts.every((o) => o.why)}`);
console.log(`blocks: ${n.blocks.map((b) => b.kind).join(", ")}`);
if (problems.length) {
  console.log("PROBLEMS:");
  problems.forEach((p) => console.log("  x", p));
  process.exit(1);
}
console.log("ALL STRUCTURAL CHECKS PASS");
