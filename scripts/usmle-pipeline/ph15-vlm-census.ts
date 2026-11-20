/* PH15 VLM census — autonomic-drugs-synapse (pdf 260 / book 238).
 * VLM IS AVAILABLE this session (unlike the ph6–ph10 batch). Two passes:
 *   1) full-page census at 120 DPI (figures/panels/margin notes/line art)
 *   2) four-panel synapse figure adjudication at 200 DPI (labels/arrows/
 *      directionality) — the text layer interleaves the panel labels, so
 *      placement + arrow directions are adjudicated on the render.
 * Output saved to .usmle-pipeline-cache/staging-ph15/vlm-census.txt */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

const OUT = '.usmle-pipeline-cache/staging-ph15/vlm-census.txt';

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
  const b120 = readFileSync('/tmp/ph15-page-260.png').toString('base64');
  const b200 = readFileSync('/tmp/ph15-hires-260.png').toString('base64');

  const p1 =
    'This is a textbook page from First Aid for the USMLE Step 1 2026 (Pharmacology, Autonomic drugs, book page 238). ' +
    'Describe EVERY figure/panel on this page: structure, every label you can read, any margin notes or mnemonics, ' +
    'any photographs vs line art. Specifically: (a) is there any photograph or raster image, or is everything vector line art? ' +
    '(b) the page appears to carry a large multi-panel synapse diagram — how many panels, what are the panel titles, and how are they arranged? ' +
    '(c) are there any margin notes, mnemonics, or memory aids printed anywhere on the page (including page margins)? ' +
    '(d) list the intro text at the top of the page in your own words.';

  const p2 =
    'This is a high-resolution render of a four-panel synapse diagram from a pharmacology textbook (First Aid 2026, book 238). ' +
    'The panels are CHOLINERGIC, NORADRENERGIC, SEROTONERGIC, DOPAMINERGIC. For EACH panel, describe precisely: ' +
    '(1) the presynaptic axon terminal and its label; (2) the synthesis chain (which precursor feeds which enzyme/product, in order, left-to-right or top-to-bottom); ' +
    '(3) every transporter glyph (VMAT, NET, SERT, DAT, ChAT-related) and WHICH DIRECTION its arrow points (into vesicle? out of terminal? both?); ' +
    '(4) every drug name anchored on the diagram and WHERE each sits (on the transporter? on the synthesis enzyme? on the vesicle? on the release arrow? postsynaptic?); ' +
    '(5) the Ca2+ and release machinery; (6) any autoreceptor/feedback loop (which receptor, which direction the feedback arrow runs, where it terminates); ' +
    '(7) the synaptic cleft contents (transmitter dots, breakdown products, reuptake arrows, diffusion/metabolism labels); ' +
    '(8) the postsynaptic neuron with its exact receptor labels; (9) the class banner labels at the bottom (stimulant/inhibitor). ' +
    'Be exhaustive with exact label text and exact arrow directions.';

  let log = '';
  console.log('--- PASS 1: full-page census (120 DPI) ---');
  const r1 = await ask(zai, b120, p1);
  console.log(r1);
  log += '=== PASS 1 — full-page census (120 DPI render, glm-4.6v) ===\n\n' + r1 + '\n\n';

  console.log('--- PASS 2: four-panel figure adjudication (200 DPI) ---');
  const r2 = await ask(zai, b200, p2);
  console.log(r2);
  log += '=== PASS 2 — four-panel synapse figure adjudication (200 DPI render, glm-4.6v) ===\n\n' + r2 + '\n';

  writeFileSync(OUT, log, 'utf8');
  console.log('\nSaved: ' + OUT);
}

main().catch((e) => { console.error('VLM census failed:', e); process.exit(1); });
