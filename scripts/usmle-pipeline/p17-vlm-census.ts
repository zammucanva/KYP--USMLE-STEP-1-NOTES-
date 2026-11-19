import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// P17 chemical-carcinogens — VLM census (pdf 243 = book 221).
// pdfimages census: ZERO raster images on the page — pure text: ONE
// multi-row table (TOXIN/EXPOSURE/ORGAN/IMPACT) titled "Carcinogens".
// CRITICAL interleave to resolve: the pdftotext layer splits the
// tobacco-smoke row into TWO clusters — raw cluster 1 (Bladder/Cervix/
// Esophagus + Oropharynx/Pancreas + EIGHT impacts: Transitional cell
// carcinoma, Squamous cell carcinoma, Squamous cell carcinoma/
// adenocarcinoma, Renal cell carcinoma, Squamous cell carcinoma,
// Squamous cell and small cell carcinoma, Squamous cell carcinoma,
// Pancreatic adenocarcinoma) printed right after the Asbestos row, and
// raw cluster 2 ("Tobacco smoke" + Kidney/Larynx/Lung) printed after
// the Ionizing radiation row. The physical page almost certainly shows
// ONE tall tobacco row with one stacked 8-organ list and one stacked
// 8-impact list, paired line by line — this script asks the VLM to read
// the exact printed order. 2 retries, then fall back to the text-layer
// census (documented in the manifest notes).

const PNG = '/home/z/my-project/scripts/p-pages/p2x-243-243.png';

async function attempt(zai: Awaited<ReturnType<typeof ZAI.create>>, triesLeft: number): Promise<string> {
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const desc = `This is pdf page 243 of First Aid for the USMLE Step 1 2026 (printed book page 221, PATHOLOGY — NEOPLASIA: "Carcinogens"). pdfimages reports ZERO raster images on this page — it should be pure text: the heading "Carcinogens" and ONE multi-row table with columns TOXIN / EXPOSURE / ORGAN / IMPACT, covering aflatoxins, alkylating agents, aromatic amines, arsenic, asbestos, tobacco smoke, ethanol, ionizing radiation, nickel/chromium/beryllium/silica, nitrosamines, radon, and vinyl chloride.
Questions:
1) EXACT TABLE GEOMETRY: how many data rows does the table have, and in what order do the TOXIN labels run down the page (list them top to bottom)? Where does the TOBACCO SMOKE row physically sit (which rows are directly above and below it)?
2) THE TOBACCO ROW, READ LINE BY LINE: transcribe its ORGAN cell exactly as printed, top line to bottom line, and its IMPACT cell exactly as printed, top line to bottom line. State whether the two lists pair line-by-line (organ 1 with impact 1, etc.). Also: what does the tobacco row's EXPOSURE cell print (is it blank)?
3) THE MULTI-ORGAN ROWS: confirm which carcinogens list MORE THAN ONE organ — arsenic (which organs, in order, and their impacts in order), ethanol (which organs and impacts), ionizing radiation (which organs and impacts). Are these stacked lists (one organ per line, no commas)?
4) THE ODD CAPITALIZATIONS: confirm the table header prints "TOXIn / eXPOSUre / OrGAn / ImPACT" (small-letter oddities inside the header words) and that the vinyl chloride row's organ cell prints "LiVer" (odd internal capital V). Any other odd caps?
5) MARGIN NOTES: do any margin notes, mnemonics, memory aids, or sidebar text print anywhere on the page (outside the table and the page banner)? Quote verbatim if so. Also confirm the asbestos row's impact prints "Bronchogenic carcinoma > mesothelioma" and the radon row's impact prints "Lung cancer (2nd leading cause after tobacco smoke)".`;
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
    console.error('VLM census FAILED after 2 retries — proceeding with the pdfimages + text-layer census:', e);
    process.exit(2);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
