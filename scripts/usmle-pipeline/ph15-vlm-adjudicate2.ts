/* PH15 VLM adjudication pass 4 — final zoomed check on the two top panels
 * individually (200 DPI crops): presynaptic-membrane receptors in the
 * cholinergic panel, the exact home of the "Releasemodulating receptors"
 * label, and the α2/AT II receptor geometry. */
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
  const chol = readFileSync('/tmp/ph15-chol.png').toString('base64');
  const nor = readFileSync('/tmp/ph15-nor.png').toString('base64');

  const pChol =
    'Zoomed crop of the CHOLINERGIC synapse panel from First Aid 2026 (book 238). Answer with exact readings: ' +
    'Q1 Does ANY receptor appear on the PRESYNAPTIC axon-terminal membrane in this panel (any autoreceptor, any "release-modulating receptor" label here)? Yes/No + what is printed. ' +
    'Q2 The label "Releasemodulating receptors" (printed as one word "Releasemodulating" over "receptors") — is it visible in THIS panel, or does it belong to the neighboring noradrenergic panel? ' +
    'Q3 Where do M1, M2, M3 sit — on the postsynaptic membrane only? What is the group label above/below them ("Cholinoreceptors"?)? ' +
    'Q4 List every text label printed in this panel in order, exactly as spelled. ' +
    'Q5 Which arrows are shown and their exact directions (synthesis arrow, vesicle loading, Ca2+ entry, vesicle fusion/release, botulinum ⊖ target, AChE action, Donepezil banner ⊖ target)?';

  const pNor =
    'Zoomed crop of the NORADRENERGIC synapse panel from First Aid 2026 (book 238). Answer with exact readings: ' +
    'Q1 The "Release-modulating receptors" label — is it printed in THIS panel? Does its bracket span exactly two receptors, AT II and α2, both on the presynaptic terminal membrane? ' +
    'Q2 Describe the α2 loop geometry precisely: is there an arrow from the cleft NE to the α2 receptor, or does the α2 receptor send the ⊖ arrow to the release machinery, or both? What color/sign? Where is the "Negative feedback" text? ' +
    'Q3 The AT II receptor — what sign/arrow does it carry and where does the arrow terminate? ' +
    'Q4 List every text label printed in this panel in order, exactly as spelled (including "DOPA" vs "L-DOPA", "VMAT", "NET", "Reuptake", "Diffusion, metabolism", "Amphetamine, Ephedrine", "Tetrabenazine", "Amphetamine, SNRIs, Cocaine, TCAs, MDMA", "α", "β", "Adrenoreceptors", "Ca2+", "AXON TERMINAL", "POSTSYNAPTIC NEURON", "Noradrenergic stimulant"). ' +
    'Q5 Does the amphetamine reverse-transport (NE expelled via NET into the cleft) appear as a drawn arrow in the figure, or is it only described in the body text above the figure?';

  let log = '';
  console.log('--- PASS 4a: cholinergic panel zoom ---');
  const r1 = await ask(zai, chol, pChol);
  console.log(r1);
  log += '\n\n=== PASS 4a — cholinergic panel zoom (200 DPI crop) ===\n\n' + r1 + '\n';

  console.log('--- PASS 4b: noradrenergic panel zoom ---');
  const r2 = await ask(zai, nor, pNor);
  console.log(r2);
  log += '\n\n=== PASS 4b — noradrenergic panel zoom (200 DPI crop) ===\n\n' + r2 + '\n';

  writeFileSync(OUT, log, { flag: 'a' });
  console.log('\nAppended to ' + OUT);
}

main().catch((e) => { console.error('VLM adjudication failed:', e); process.exit(1); });
