import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

/* PH3 drug-metabolism — page-layout VLM census (pdf 252 / book 230).
 * pdfimages already reported ZERO rasters on the page; the TOP half is
 * the "Drug metabolism" subsection: an intro rules paragraph plus ONE
 * vector flow figure (phase I / phase II metabolism). Shared page with
 * the sibling "Elimination of drugs" subsection (bottom half, the p196
 * shared-page convention) — this census inspects ONLY the metabolism
 * block: (1) confirm the flow-figure topology (lipophilic drugs ->
 * phase I -> slightly polar metabolite + reactive oxygen metabolites ->
 * phase II -> very polar hydrophilic metabolite (except acetylated) ->
 * excretion); (2) where "Polar drugs (water-soluble)" routes; (3) the
 * two clinical rules in the text block; (4) any margin mnemonics. */

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-252-252.png');
  const desc = `This is pdf page 252 (printed book page 230) of First Aid for the USMLE Step 1 2026, PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS. The BOTTOM half of the page is the "Elimination of drugs" subsection (zero-order / first-order elimination) — ignore it; this census is about the TOP half, the "Drug metabolism" subsection. pdfimages reports ZERO raster images: the top half is a short text block plus ONE vector flow figure.
Questions:
1) THE TEXT BLOCK: confirm it reads "Drugs can be metabolized by either or both phase I and phase II reactions. These reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction)." followed by "Geriatric patients lose phase I first. Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid)." — quote any wording that differs.
2) THE FLOW FIGURE TOPOLOGY: describe the figure end to end. Does a "Lipophilic drugs" node flow into a "Phase I (predominantly CYP450-dependent)" box, and does that box list the three reaction types Reduction, Oxidation, Hydrolysis? Does the Phase I output read "Slightly polar metabolite (active or inactive)" AND is there a separate "Reactive oxygen metabolites" label/arrows? Where exactly does the "Reactive oxygen metabolites" text print (appearing once or twice)?
3) Does the "Slightly polar metabolite" then flow into a "Phase II" box listing Methylation, Acetylation, Glucuronidation, Sulfation, whose output reads "Very polar, hydrophilic metabolite (except acetylated metabolite)"? How is the "except acetylated" exception printed (parenthetical, arrow, side note)?
4) THE EXCRETION TERMINAL: does the figure end in an "Excretion" node reading "Serum (urine, sweat), bile (stool)"? And where does the "Polar drugs (water-soluble)" node route — does it bypass phase I/phase II and go straight to excretion, or does it feed the phase II box? Describe the arrows.
5) ANY margin notes, mnemonics, or memory aids anywhere in the Drug metabolism half (margin column, beside the figure, inside boxes) — quote verbatim and say where they print.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
