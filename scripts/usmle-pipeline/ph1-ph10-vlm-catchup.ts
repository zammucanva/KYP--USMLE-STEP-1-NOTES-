import ZAI from '/home/z/.bun/install/global/node_modules/z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

/* Pending VLM catch-up re-read of the ph1-ph10 element crops (the PH6-PH10
 * batch lost VLM credentials to the sandbox recycle — machine gates stood
 * alone; this closes the documented known issue). */
const BASE = '/home/z/my-project/kyp-usmle-notes/docs/qa';
const TOPICS: [string, string][] = [// ph1-ph5 done in first run

  // ['ph1', 'enzyme kinetics (Michaelis-Menten hyperbola, Lineweaver-Burk plot, inhibitor comparison)'],
  // ['ph2', 'pharmacokinetic parameters (AUC, volume of distribution compartments, clearance, half-life ladder)'],
  // ['ph3', 'drug metabolism Phase I/II pipeline (CYP450, conjugation, excretion)'],
  // ['ph4', 'zero-order vs first-order drug elimination kinetics (mirror panels)'],
  // ['ph5', 'urine pH ion trapping and dosage calculations (tubular trapping map, pKa curve)'],
  ['ph6', 'dose-response curves: efficacy vs potency (plateau comparison, EC50 shift)'],
  ['ph7', 'receptor binding and therapeutic index (agonist/antagonist curve panels, ED50/TD50 safety gap)'],
  ['ph8', 'drug effect modifications (permissive, tachyphylaxis, arithmetic equations)'],
  ['ph9', 'autonomic receptors organ wiring map (CNS, sympathetic/parasympathetic columns, adrenal medulla)'],
  ['ph10', 'acetylcholine receptors: nicotinic vs muscarinic dispatcher map'],
];

async function main() {
  const zai = await (ZAI as any).create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA inspection. Do NOT write code. Answer factually and tersely.`;
  for (const [pid, desc] of TOPICS) {
    for (const theme of ['light', 'dark'] as const) {
      const file = `${BASE}/${pid}/element-crop-${theme === 'light' ? 'light-v2' : 'dark'}.png`;
      let png: Buffer;
      try { png = readFileSync(file); } catch { console.log(`${pid} ${theme}: CROP MISSING`); continue; }
      const q = `Browser screenshot (theme: ${theme}) of an original educational SVG diagram about ${desc}.
1) Any overlapping text? 2) Any clipped/cut-off/missing text? 3) Any tofu boxes (missing glyphs)? 4) Any unreadable low-contrast text? 5) Verdict: CLEAN or list defects.`;
      const r = await zai.chat.completions.createVision({
        model: 'glm-4.6v',
        messages: [{ role: 'user', content: [
          { type: 'text', text: `${guard}\n\n${q}` },
          { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } },
        ]}],
        thinking: { type: 'disabled' },
      });
      const answer = String(r.choices?.[0]?.message?.content ?? '').slice(0, 500).replace(/\n+/g, ' | ');
      console.log(`${pid} ${theme}: ${answer}`);
    }
  }
  console.log('CATCHUP-DONE');
}
main().catch((e) => { console.error(String(e).slice(0, 400)); process.exit(1); });
