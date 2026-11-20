import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
/* PH13 census — page 258 BOTTOM half ("Tissue distribution of adrenergic
 * receptors"; the TOP half, "Micturition control", belongs to the sibling
 * topic micturition-control). pdfimages reports THREE raster images on the
 * page (426x336, 383x518 sep @316ppi); PyMuPDF xobject-rect analysis places
 * all three in the TOP half (the micturition bladder/brain figure) — this
 * VLM census confirms placement and confirms the bottom half is a pure
 * RECEPTOR/TISSUE/EFFECT(S) text table with NO figures and NO margin
 * mnemonics, and adjudicates the tissue<->effect row pairing (the text
 * layer interleaves: all tissues print, then all effects, per receptor). */
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph13-page-258.png').toString('base64');
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const desc = `This is page 258 of First Aid for the USMLE Step 1 2026 (pdf 258 = printed book page 236, PHARMACOLOGY - AUTONOMIC DRUGS). The page has TWO subsections: TOP half "Micturition control" (a sibling topic, not mine) and BOTTOM half "Tissue distribution of adrenergic receptors" (MY topic).
Questions:
1) FIGURE CENSUS: list every figure/illustration/photograph on the page and state which HALF it sits in (top = Micturition control figure, bottom = the adrenergic table). pdfimages reports 3 raster images (426x336, 383x518, 458x277) — describe what they depict (e.g. the bladder/brain drawing of the micturition figure) and confirm whether ANY image, icon, or figure prints in the BOTTOM half (the adrenergic receptor table area).
2) THE ADRENERGIC TABLE, printed row order: confirm the bottom half is a pure 3-column table with headers RECEPTOR / TISSUE / EFFECT(S). Then read the table cell by cell and confirm the exact tissue-to-effect pairing for each receptor row: a1 (Vascular smooth muscle -> ?; Visceral smooth muscle -> ?), a2 (Pancreas -> ?; Presynaptic terminals -> ?; Salivary glands -> ?), b1 (Heart -> ?; Kidney -> ?), b2 (Bronchioles -> ?; Cardiac muscle -> ?; Liver -> ?; Arterial smooth muscle -> ?; Pancreas -> ?), b3 (Adipose -> ?).
3) MARGIN NOTES: is there any margin note, mnemonic, or sidebar text anywhere in the BOTTOM half? (The top half is known to print a margin note reading "Baby one more time." — confirm it belongs to the TOP half only.)
4) PANCREAS CONTRAST: confirm the pancreas appears TWICE — under a2 (inhibition of insulin secretion) and under b2 (stimulation of insulin secretion) — printed as separate rows.
5) FOOTER: confirm the indd slug + timestamp print at the very foot of the page below the table.`;
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main().catch((e) => { console.error(e); process.exit(1); });
