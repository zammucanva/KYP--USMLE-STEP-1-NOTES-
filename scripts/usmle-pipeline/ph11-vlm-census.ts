/* PH11 VLM census — pain-transmission (pdf 257 BOTTOM half / book 235).
 * VLM IS AVAILABLE this session (unlike the ph6–ph10 batch, which lost it
 * to the 401 outage). Two passes:
 *   1) full-page census at 120 DPI (figures/panels/margin notes/mnemonics/
 *      photographs vs line art — the whole SHARED page is checked, with the
 *      bottom Pain-transmission half as the focus)
 *   2) bottom-half adjudication at 200 DPI (the four-process list with its
 *      ▘ bullets + the Aδ/C fiber sentence + the nociceptive/neuropathic
 *      blocks — printed order, any bold/emphasis, any margin mnemonics)
 * Output saved to .usmle-pipeline-cache/staging-ph11/vlm-census.txt */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

const OUT = '.usmle-pipeline-cache/staging-ph11/vlm-census.txt';

async function ask(zai: any, b64: string, prompt: string): Promise<string> {
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}

async function main() {
  const zai = await (ZAI as any).create();
  const b120 = readFileSync('/tmp/ph11-page-257.png').toString('base64');
  const b200 = readFileSync('/tmp/ph11-hires-257.png').toString('base64');

  const p1 =
    'This is a textbook page from First Aid for the USMLE Step 1 2026 (Pharmacology, Autonomic drugs, book page 235). ' +
    'The page is SHARED: the top half is "Acetylcholine receptors", the bottom half is "Pain transmission". ' +
    'Describe EVERY figure/panel on this page: structure, every label you can read, any margin notes or mnemonics, ' +
    'any photographs vs line art. Specifically: (a) is there ANY figure, diagram, illustration, photograph, or raster image ' +
    'anywhere on the page (including the Pain transmission bottom half), or is the page pure text? ' +
    '(b) are there any margin notes, mnemonics, or memory aids printed anywhere on the page (left/right margins included)? ' +
    '(c) describe the structure of the BOTTOM half (Pain transmission): its headings, its bullet list, and its printed order; ' +
    '(d) note any bold/colored emphasis, icons, or graphical elements in the Pain transmission half.';

  const p2 =
    'This is a high-resolution render of a textbook page from First Aid for the USMLE Step 1 2026 (Pharmacology, ' +
    'book page 235). Focus ONLY on the BOTTOM half of the page — the "Pain transmission" subsection with its ' +
    '"Nociceptive pain" and "Neuropathic pain" blocks. Answer precisely: ' +
    '(1) What is the exact heading structure (headings and subheadings, top to bottom)? ' +
    '(2) The "Processes involved in pain transmission" list: how many bullet items, what are they EXACTLY as printed ' +
    '(each bullet label, the dash style, and each drug list in printed order)? ' +
    '(3) Is the nociceptive pain definition one paragraph? Quote its two sentences in order. ' +
    '(4) The neuropathic pain block: quote it. ' +
    '(5) Are A-delta and C fibers described with their pain-quality parentheticals? ' +
    '(6) Any margin mnemonics, icons, images, or graphical elements in this bottom half at all? ' +
    '(7) What prints at the very foot of the page?';

  let log = '';
  console.log('--- PASS 1: full-page census (120 DPI) ---');
  const r1 = await ask(zai, b120, p1);
  console.log(r1);
  log += '=== PASS 1 — full-page census (120 DPI render, glm-4.6v) ===\n\n' + r1 + '\n\n';

  console.log('--- PASS 2: bottom-half Pain-transmission adjudication (200 DPI) ---');
  const r2 = await ask(zai, b200, p2);
  console.log(r2);
  log += '=== PASS 2 — Pain-transmission bottom-half adjudication (200 DPI render, glm-4.6v) ===\n\n' + r2 + '\n';

  writeFileSync(OUT, log, 'utf8');
  console.log('\nSaved: ' + OUT);
}

main().catch((e) => { console.error('VLM census failed:', e); process.exit(1); });
