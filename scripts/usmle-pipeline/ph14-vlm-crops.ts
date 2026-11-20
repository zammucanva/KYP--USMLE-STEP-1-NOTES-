/* PH14 panel-crop adjudication — targeted VLM reads of the two figure
 * panels at 220 DPI (top: Gq cascade; bottom: Gs/Gi cascade). */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, appendFileSync } from 'fs';

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
  const out = '.usmle-pipeline-cache/staging-ph14/vlm-census.txt';

  const topQ = `This is a CROP of the TOP panel of a First Aid figure (the Gq/PLC cascade). Answer with precision: (1) List every label left-to-right, top-to-bottom. (2) Trace every arrow: which shape does each arrow START at and END at? Are any arrows inhibitory (blunt end / T-bar / ⊖) or are all stimulatory (pointed)? (3) Does PIP2 have two outgoing arrows (one to DAG, one to IP3)? (4) What feeds "Smooth muscle contraction" — the arrow comes from Protein kinase C, from Ca2+, or both? (5) Does Ca2+ have its own arrow into Protein kinase C, or does Ca2+ point to Smooth muscle contraction? (6) Is there a GTP/GDP label on the Gq protein? (7) Are there any other labels, numbers, or annotations (e.g. ⊕/⊖ symbols)?`;
  appendFileSync(out, '\n\n===== PH14 VLM ADJUDICATION 3 — 220 DPI TOP PANEL (Gq) =====\n\n');
  appendFileSync(out, await ask(zai, '/tmp/ph14-top-panel.png', topQ));

  const botQ = `This is a CROP of the BOTTOM panel of a First Aid figure (the Gs/Gi/adenylyl-cyclase cascade). Answer with precision: (1) How many ligand circles are at the top — one or two? Is each labeled "Ligand", or only one? (2) What EXACTLY does the left receptor label read, character by character — is it "B1, B2, B3, D1, H2, or V2 receptor" with a plain Latin letter B, or with a Greek beta β? (3) What does the left G protein label read — "GS protein" with a CAPITAL subscript S, or lowercase s? And the right one "Gi protein"? (4) Trace every arrow: Gs protein to adenylyl cyclase (stimulatory pointed, or inhibitory blunt?); Gi protein to adenylyl cyclase (pointed or blunt/⊖?); adenylyl cyclase to ATP to Cyclic AMP; Cyclic AMP to Protein kinase A. (5) The "Ca2+" label at bottom-left of Protein kinase A: which direction does its arrow point — FROM Protein kinase A TO Ca2+, or FROM Ca2+ TO Protein kinase A, and is it stimulatory or inhibitory? Is there an up arrow (↑) printed with it? (6) The "Myosin light-chain kinase (smooth muscle contraction)" label at bottom-right: does an arrow run from Protein kinase A to it, and is that arrow inhibitory (blunt end/⊖) or stimulatory? (7) Any GTP/GDP labels, ⊕/⊖ symbols, or other annotations?`;
  appendFileSync(out, '\n\n===== PH14 VLM ADJUDICATION 4 — 220 DPI BOTTOM PANEL (Gs/Gi) =====\n\n');
  appendFileSync(out, await ask(zai, '/tmp/ph14-bot-panel.png', botQ));

  console.log('PH14 panel-crop adjudication appended to', out);
}

main().catch((e) => { console.error('PH14 crop adjudication FAILED:', e?.message || e); process.exit(1); });
