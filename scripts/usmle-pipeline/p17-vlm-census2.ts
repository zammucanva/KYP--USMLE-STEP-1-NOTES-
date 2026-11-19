import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// P17 chemical-carcinogens — VLM census ROUND 2 (pdf 243 = book 221).
// Round 1 resolved the tobacco-row interleave (12 rows; tobacco sits
// between Asbestos and Ethanol; ORGAN list alphabetical Bladder→Pancreas,
// paired line-by-line with the 8-impact list; tobacco EXPOSURE cell blank).
// Round 2 pins down: the EXPOSURE cell of every row (the text layer shows
// NO exposure text for tobacco smoke, ethanol, or ionizing radiation —
// confirm those three print blank), the small-caps header styling that
// the text layer renders as "TOXIn / eXPOSUre / OrGAn / ImPACT", the
// vinyl chloride row's "LiVer" oddity, and any red-letter styling.
// 2 retries, then fall back to the round-1 + text-layer census.

const PNG = '/home/z/my-project/scripts/p-pages/p2x-243-243.png';

async function attempt(zai: Awaited<ReturnType<typeof ZAI.create>>, triesLeft: number): Promise<string> {
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const desc = `This is pdf page 243 of First Aid for the USMLE Step 1 2026 (printed book page 221, PATHOLOGY — NEOPLASIA: "Carcinogens"). It is one 12-row table with columns TOXIN / EXPOSURE / ORGAN / IMPACT (rows: aflatoxins, alkylating agents, aromatic amines, arsenic, asbestos, tobacco smoke, ethanol, ionizing radiation, nickel/chromium/beryllium/silica, nitrosamines, radon, vinyl chloride).
Questions:
1) For EACH of the 12 rows, transcribe the EXPOSURE cell exactly as printed — or state "BLANK" if the cell is empty. I especially need the three rows the text layer shows no exposure text for: TOBACCO SMOKE, ETHANOL, and IONIZING RADIATION — do those three cells print completely empty, or is there any text (eg "Smoking", "Alcohol", "Radiation therapy")?
2) Re-confirm the tobacco row's ORGAN cell one more time, top line to bottom line (8 organs), and its IMPACT cell top to bottom (8 impacts), and that they pair line-by-line.
3) THE HEADER STYLE: are the four column headers printed in SMALL CAPS (larger leading letters, smaller following capitals)? The text layer extracts them as "TOXIn / eXPOSUre / OrGAn / ImPACT" — describe the actual letterforms on the page.
4) THE VINYL CHLORIDE ROW: does its ORGAN cell print "LiVer" (with a large I and V visible, per the text layer) — describe the actual letterforms. Is any letter in the table printed in RED (eg a red V in "Vinyl chloride" or "LiVer")? Describe where red letters appear, if anywhere.
5) The ETHANOL and IONIZING RADIATION rows: transcribe their ORGAN and IMPACT cells exactly (stacked lists, top to bottom).`;
  const png = readFileSync(PNG);
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  const out = r.choices?.[0]?.message?.content ?? '';
  if (!out.trim() && triesLeft > 0) return attempt(zai, triesLeft - 1);
  return out;
}

async function main() {
  const zai = await ZAI.create();
  try {
    const out = await attempt(zai, 2);
    if (!out.trim()) throw new Error('empty VLM response after retries');
    console.log(out);
  } catch (e) {
    console.error('VLM census round 2 FAILED after 2 retries — falling back to round-1 + text-layer census:', e);
    process.exit(2);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
