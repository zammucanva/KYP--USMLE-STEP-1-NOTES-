/* PH15 VLM adjudication pass 3 — targeted questions on the two most complex
 * panels (cholinergic top-left, noradrenergic top-right) plus a bottom-half
 * check, at 200 DPI. Resolves: banner-to-anchor arrow termination points,
 * the α2 negative-feedback loop direction, choline recycling arrow, the
 * "DOPA" vs "L-DOPA" printed spellings, and the 2x2 arrangement. */
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
  const top = readFileSync('/tmp/ph15-top.png').toString('base64');
  const bottom = readFileSync('/tmp/ph15-bottom.png').toString('base64');

  const pTop =
    'High-resolution render of the TOP HALF of a First Aid 2026 pharmacology page: two synapse panels, CHOLINERGIC (left) and NORADRENERGIC (right). Answer these specific questions with exact label readings: ' +
    'Q1 In the CHOLINERGIC panel: the synthesis substrates — does it print "Choline + Acetyl-CoA" feeding ChAT? Where does the ChAT label sit (on an arrow?) and what product follows (ACh into vesicles)? ' +
    'Q2 CHOLINERGIC: the Botulinum toxin banner — is it labeled as inhibitor of release, and does its blocked/⊖ arrow terminate on the vesicle fusion / release machinery (the Ca2+-triggered release step), not on the synthesis enzyme? ' +
    'Q3 CHOLINERGIC: after AChE splits ACh, do the products print as "Choline" and "Acetate"? Is there an arrow carrying Choline BACK INTO the axon terminal (recycling)? ' +
    'Q4 CHOLINERGIC: are the postsynaptic receptors printed as M1, M2, M3 under a "Cholinoreceptors" label? Is the AChE-inhibitor banner (Donepezil) anchored by an arrow to the AChE enzyme in the cleft? ' +
    'Q5 NORADRENERGIC: read the synthesis chain EXACTLY — does it print "Tyrosine", then "DOPA" or "L-DOPA"?, then "Dopamine", then "NE"? Which steps happen in the cytoplasm vs inside the vesicle (which arrow crosses the vesicle membrane)? ' +
    'Q6 NORADRENERGIC: the "Release-modulating receptors" bracket — does it group AT II and α2? What sign is on each (⊕/⊖)? Where do their arrows point — toward the release/fusion machinery? ' +
    'Q7 NORADRENERGIC: the "Negative feedback" label — describe the loop EXACTLY: does NE in the cleft reach the presynaptic α2 receptor, with an inhibitory arrow back to NE release? ' +
    'Q8 NORADRENERGIC: the "Amphetamine, Ephedrine" stimulant banner — where does its arrow terminate (release machinery? vesicles? NET?)? ' +
    'Q9 NORADRENERGIC: the tetrabenazine banner text — does it read "Vesicular monoamine transporter (VMAT) inhibitor" with "Tetrabenazine" as the drug, and does its ⊖ arrow terminate on the VMAT vesicle transporter? ' +
    'Q10 NORADRENERGIC: the NET blockers banner "Amphetamine, SNRIs, Cocaine, TCAs, MDMA" — does its ⊖ arrow terminate on the NET transporter on the presynaptic membrane? And separately, does the NET transporter itself have a reuptake arrow carrying NE from the cleft back into the terminal? ' +
    'Q11 NORADRENERGIC: is there a "Diffusion, metabolism" label in the cleft, and what does its arrow show? ' +
    'Q12 NORADRENERGIC: postsynaptic receptors — do they print as "α" and "β" under "Adrenoreceptors"? Is Ca2+ shown entering the noradrenergic terminal too?';

  const pBottom =
    'High-resolution render of the BOTTOM HALF of a First Aid 2026 pharmacology page: two synapse panels plus page footer. Answer precisely: ' +
    'Q1 Which panel is bottom-LEFT and which is bottom-RIGHT — DOPAMINERGIC or SEROTONERGIC? ' +
    'Q2 DOPAMINERGIC panel: read the synthesis chain exactly — "Tyrosine" → what next ("L-DOPA"?) → "Dopamine"? Is "L-DOPA" spelled WITH the L- prefix in this panel? ' +
    'Q3 DOPAMINERGIC: the DAT transporter — does it sit on the presynaptic membrane with a "Reuptake" arrow from the cleft into the terminal? Does the "Amphetamine, Methylphenidate, Cocaine" banner carry a ⊖ arrow onto DAT? ' +
    'Q4 DOPAMINERGIC: the postsynaptic receptor label — exactly "Dopamine receptor"? Is there any dopaminergic INHIBITOR banner or only a stimulant banner? Any Ca2+ channel in this panel? ' +
    'Q5 SEROTONERGIC panel: the synthesis chain exactly — "Tryptophan" → "5-Hydroxytryptophan" → "5-HT"? ' +
    'Q6 SEROTONERGIC: SERT on the presynaptic membrane with "Reuptake" arrow, and the "Amphetamine, SNRIs, Cocaine, SSRIs" banner with ⊖ arrow onto SERT? ' +
    'Q7 SEROTONERGIC: postsynaptic label exactly "5-HT receptor"? Any inhibitor banner? Any Ca2+? ' +
    'Q8 Both bottom panels: do they print "AXON TERMINAL" and "POSTSYNAPTIC NEURON"? What do the vesicles look like and what transmitter shapes/dots are in each cleft? ' +
    'Q9 The page footer — read the exact slug and timestamp lines. ' +
    'Q10 Any ® or trademark logo printed on the figure? Where?';

  let log = '';
  console.log('--- PASS 3a: top-half targeted adjudication ---');
  const r1 = await ask(zai, top, pTop);
  console.log(r1);
  log += '\n\n=== PASS 3a — top-half targeted adjudication (200 DPI crop: CHOLINERGIC + NORADRENERGIC) ===\n\n' + r1 + '\n';

  console.log('--- PASS 3b: bottom-half targeted adjudication ---');
  const r2 = await ask(zai, bottom, pBottom);
  console.log(r2);
  log += '\n\n=== PASS 3b — bottom-half targeted adjudication (200 DPI crop: DOPAMINERGIC + SEROTONERGIC) ===\n\n' + r2 + '\n';

  writeFileSync(OUT, log, { flag: 'a' }, );
  console.log('\nAppended to ' + OUT);
}

main().catch((e) => { console.error('VLM adjudication failed:', e); process.exit(1); });
