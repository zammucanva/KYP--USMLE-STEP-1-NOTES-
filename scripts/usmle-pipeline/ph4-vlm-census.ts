import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

/* PH4 elimination-of-drugs — page-layout VLM census (pdf 252 / book 230).
 * pdfimages already reported ZERO raster images on the page; the bottom
 * half carries the "Elimination of drugs" subsection: a two-column
 * zero-order / first-order text block plus TWO vector elimination-curve
 * figures whose labels interleave in the pdftotext layer. This census
 * asks the VLM to (1) describe the two curve figures (axes, slopes, the
 * t1/2 annotations) — settling the direction of the zero-order half-life
 * brackets; (2) confirm the two-column table layout and locate the "A
 * PEA is round, shaped like the '0' in zero-order" margin mnemonic;
 * (3) catch any other margin mnemonics, verbatim. */

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-252-252.png');
  const desc = `This is pdf page 252 (printed book page 230) of First Aid for the USMLE Step 1 2026, PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS. The TOP half of the page is the "Drug metabolism" subsection (phase I/phase II flow chart) — ignore it; this census is about the BOTTOM half, the "Elimination of drugs" subsection. pdfimages reports ZERO raster images: the bottom half is a two-column text block (left column "Zero-order elimination", right column "First-order elimination") plus TWO vector elimination-curve figures.
Questions:
1) FIGURE 1 (should sit under/near the zero-order column): describe its axes (y-axis label and arrow, x-axis label "Time (h)"), the shape of the plasma-concentration line (straight/linear decline?), the slope chips (is the slope labeled "2 U/h" at more than one point along the line — i.e. a CONSTANT slope?), and the half-life annotations under the x-axis: do the brackets/labels read "First t1/2 >", "Second t1/2 >", "Third t1/2"? Which half-life interval is drawn LONGEST — the first (at the highest concentration) or the third (at the lowest)? Is there an annotation reading "Time of t1/2 ↑ as concentration ↑" or "Time of t1/2 ↑ as concentration ↓" — quote it exactly.
2) FIGURE 2 (the first-order figure): describe its y-axis label ("Drug plasma concentration" with an ↑ arrow?), the shape of the curve (exponential/hockey-stick decline?), the slope chips — do they read "Elimination rate (=slope)" with values 4 U/h, then 2 U/h, then 1 U/h, then 0.5 U/h (the slope HALVING as concentration halves)? Do the half-life labels read "First t1/2 =", "Second t1/2 =", "Third t1/2" (EQUAL signs, not > signs)? Is the annotation "Time of t1/2 is constant as concentration ↑" printed — quote it exactly.
3) THE TWO-COLUMN TEXT BLOCK: confirm the left column is "Zero-order elimination" — "Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time. Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination). Capacity-limited elimination." — and the right column is "First-order elimination" — "Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs. Flow-dependent elimination."
4) THE MARGIN MNEMONIC: where exactly does "A PEA is round, shaped like the '0' in zero-order" print (margin column? inside the zero-order box? next to which line?) — quote it verbatim, character for character, and say what visual treatment it has (bold, italic, color).
5) ANY OTHER margin notes, mnemonics, or memory aids anywhere on the page (including the Drug metabolism half) — quote verbatim and say where they print.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
