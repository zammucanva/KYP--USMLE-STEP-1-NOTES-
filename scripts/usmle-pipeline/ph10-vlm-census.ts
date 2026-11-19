import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
/* PH10 census attempt — page 257 TOP half ("Acetylcholine receptors").
 * pdfimages reports ZERO rasters on the page; this census asks the VLM to
 * confirm the two text blocks. If the z-ai VLM returns 401 in subagent
 * context (as it did for ph8 and ph9, twice each), the census stands on
 * pdfimages + the text layer — the two blocks are fully recoverable from
 * the text layer (nothing else prints in the top half). */
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-257-257.png');
  const desc = `This is page 257 of First Aid for the USMLE Step 1 2026 (pdf 257 = printed book page 235, PHARMACOLOGY — AUTONOMIC DRUGS). pdfimages reports ZERO raster images. This census concerns ONLY the TOP half of the shared page: the subsection "Acetylcholine receptors" (the bottom half, "Pain transmission", belongs to a sibling topic).
Questions:
1) Confirm the top half carries exactly TWO text blocks under the "Acetylcholine receptors" heading — a NICOTINIC block and a MUSCARINIC block — and that NO figure, table, or margin note prints anywhere in the top half.
2) Quote the nicotinic block verbatim: ligand-gated channels, the K+ efflux and Na+ influx (and in some cases Ca2+) clause, and the two subtypes NN (autonomic ganglia, adrenal medulla) and NM (neuromuscular junction of skeletal muscle).
3) Quote the muscarinic block verbatim: G-protein–coupled receptors acting through 2nd messengers, and the 5 subtypes M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).
4) Confirm where the "Pain transmission" heading begins (the sibling's territory) and that the indd slug + timestamp print at the very foot of the page, AFTER the Pain transmission block.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
