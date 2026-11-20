/* PH14 g-protein-second-messengers — VLM census of pdf 259 / book 237.
 * Runs the glm-4.6v vision model over the rendered page (120 DPI full-page
 * census + 180 DPI figure adjudication) and writes the raw output to
 * .usmle-pipeline-cache/staging-ph14/vlm-census.txt. */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

const OUT = '.usmle-pipeline-cache/staging-ph14/vlm-census.txt';

async function ask(zai: any, pngPath: string, prompt: string): Promise<string> {
  const b64 = readFileSync(pngPath).toString('base64');
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
  const parts: string[] = [];

  parts.push('===== PH14 VLM CENSUS — pdf 259 / book 237 — 120 DPI FULL PAGE =====\n');
  const census = await ask(zai, '/tmp/ph14-page-259.png',
    'Describe every figure/panel on this textbook page: structure, every label, any margin notes or mnemonics, any photographs vs line art. This is a First Aid pharmacology page about G-protein-linked second messengers. Describe (1) the table at the top (its column headers, row families, and how the q/i/s letters appear), (2) the figure at the bottom: how many panels it has, how they are arranged (side by side horizontally? stacked vertically?), and EVERY text label in each panel in order, (3) any margin notes, mnemonics, or annotations, (4) whether the art is line art or photographs.');
  parts.push(census);

  parts.push('\n\n===== PH14 VLM ADJUDICATION — 180 DPI FIGURE REGION =====\n');
  const adj = await ask(zai, '/tmp/ph14-hires-259.png',
    'Focus ONLY on the figure at the bottom of this page (the G-protein second-messenger cascades). Answer precisely: (a) How many separate cascade panels/diagrams are there, and what is their spatial arrangement (columns side by side, or rows stacked)? (b) For EACH panel, list every label in reading order, and trace the arrows: what connects to what, and where does any inhibition (blunt/bar/T) arrow land? (c) Specifically: does the Gq panel appear once or twice (is there a duplicated pair of sub-panels, one carrying the DAG/Protein kinase C branch and one carrying the IP3/Ca2+/Myosin light-chain kinase branch)? (d) Does the Gs panel end at Protein kinase A and then Ca2+? Where exactly does the Ca2+ label sit in the Gs panel? (e) In the Gi panel, what does the Gi protein connect to, and is there an inhibition symbol on adenylyl cyclase? (f) Are any labels printed more than once within a single panel? (g) Where do the footer slug line (FAS1_2026_05-Pharmacology.indd 237) and the timestamp sit relative to the panels?');
  parts.push(adj);

  parts.push('\n\n===== PH14 VLM ADJUDICATION 2 — 180 DPI TABLE REGION =====\n');
  const adj2 = await ask(zai, '/tmp/ph14-hires-259.png',
    'Focus ONLY on the table at the top of this page (RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS). (a) List the row family labels (Adrenergic, Cholinergic, etc.) and every receptor row in printed order, with its G-protein class letter (q, i, or s). (b) How is the G-protein class letter displayed — inside a shape/circle? What color? (c) Quote exactly, character by character, the MAJOR FUNCTIONS text of the V2 (Vasopressin V2) row — is the word "tubules" printed normally, or is there a typo like "twobules"? (d) Are the "(one heart)" and "(two lungs)" parentheticals printed inside the β1 and β2 rows? (e) Any margin notes or mnemonics anywhere on the page?');
  parts.push(adj2);

  writeFileSync(OUT, parts.join(''), 'utf8');
  console.log('PH14 VLM census written to', OUT);
}

main().catch((e) => { console.error('PH14 VLM census FAILED:', e?.message || e); process.exit(1); });
