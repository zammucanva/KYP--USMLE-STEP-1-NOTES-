import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// PH25 census — First Aid 2026 Part 1, pdf page 272 / printed book page 250.
// "Drug reactions—neurologic" owns the WHOLE page: FOUR tables under the
// banner "PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS". glm-4.6v, one
// 120dpi pass (ph19 pattern: default import ZAI, createVision, thinking
// disabled), ONE retry; two strikes -> "VLM UNAVAILABLE" + text-layer census.

const IMG = '/tmp/ph25-page-272.png';
const PROMPT = `This is First Aid USMLE Step 1 2026, printed book page 250 (Pharmacology — Toxicities and Adverse Effects). The page carries FOUR tables, all with columns DRUG REACTION / CAUSAL AGENTS / NOTES. Describe the page structure precisely, in printed top-to-bottom order:

(1) The page header/banner lines at the very top (section banner text, subsection heading with the ▶ marker, and the printed page number).
(2) TABLE 1 "Drug reactions—neurologic": list EVERY row in PRINTED ORDER with all THREE cells verbatim (DRUG REACTION / CAUSAL AGENTS / NOTES). Confirm the exact printed row order. Note which NOTES cells are EMPTY (e.g. tardive dyskinesia?).
(3) TABLE 2 "Drug reactions—renal/genitourinary": every row in printed order, all three cells. In the interstitial nephritis row, quote the CAUSAL AGENTS cell EXACTLY including capitalization (is it "rifamPin" with a capital P? "Penicillins"? "Pee"/"Pain-free"?) and the NOTES cell exactly ("Remember the 5 P's"?). Note which NOTES cells are empty.
(4) TABLE 3 "Drug reactions—respiratory": every row in printed order, all three cells. Quote the pulmonary fibrosis CAUSAL AGENTS cell exactly (does it end "bleomycin, busulfan, amiodarone"?) and the NOTES cell exactly ("My nose cannot breathe bad air"?). Note which NOTES cells are empty.
(5) TABLE 4 "Drug reactions—multiorgan": every row in printed order, all three cells. Quote the NOTES cell "Sorry pals, can't go mingle" exactly and state WHICH row it belongs to (antimuscarinic or disulfiram-like reaction). Note which NOTES cells are empty.
(6) Which text prints in RED on the page (mnemonic lines? drug names?) — list every red element you can see.
(7) Any margin notes, images, figures, or icons anywhere on the page.
(8) The footer slug line and timestamp at the bottom, exactly.

Preserve EXACT printed spellings and capitalization. Specifically confirm: (a) does the visual-disturbances NOTES cell print "These horrible drugs iirritate Precious eyes" (double i) or "irritate"? (b) does the idiopathic intracranial hypertension row print "growth hormones" (plural)? (c) exact apostrophe characters in "Remember the 5 P's", "it's", "can't". (d) does the cinchonism NOTES cell read "Can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment"?`;

async function ask(zai: any): Promise<string> {
  const b64 = readFileSync(IMG).toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: PROMPT },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}

async function main() {
  let out = '';
  try {
    const zai = await (ZAI as any).create();
    try {
      out = await ask(zai);
    } catch (e1) {
      console.error('VLM pass 1 failed, retrying once:', String(e1).slice(0, 200));
      out = await ask(zai);
    }
  } catch (e) {
    out = `VLM UNAVAILABLE (both passes failed): ${String(e).slice(0, 300)}\n\n` +
      '=== TEXT-LAYER CENSUS (pdftotext cache, page index 271 of content.split("\\f")) ===\n' +
      execSync(`python3 -c "pages=open('.usmle-pipeline-cache/part1.txt',encoding='utf8').read().split('\\\\f');print(pages[271])"`).toString();
  }
  writeFileSync('.usmle-pipeline-cache/staging-ph25/vlm-census.txt',
    `PH25 VLM CENSUS — First Aid 2026 Part 1, pdf 272 / book 250\n` +
    `Model: glm-4.6v @120dpi raster /tmp/ph25-page-272.png\n` +
    `Generated: ${new Date().toISOString()}\n` +
    `pdfimages census: ZERO raster images embedded on pdf 272 (pdfimages -list output shows only the column header — pure vector/text page).\n` +
    `=== VLM RESPONSE ===\n` + out + '\n');
  console.log(out.slice(0, 6000));
}
main();
