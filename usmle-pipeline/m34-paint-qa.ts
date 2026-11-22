import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m34');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar reading "DNA/RNA & Folate Pathway Inhibitors — the folate-quinolone map (original KYP redraw)"; LEFT a panel "The two wall doors" with two stacked cards (door 9 THE PBP WELD listing the beta-lactam mechanism and aztreonam at PBP3, and door 8 THE PRECURSOR GRAB listing vancomycin's precursor binding with the D-Ala-D-Lac escape); MIDDLE RIGHT a panel "5 THE GYRASE — fluoroquinolones" (topoisomerase II and IV, the absorption trap with dairy and antacids, the age bookends, QT, P-450); MIDDLE a tall panel "THE CEPHALOSPORIN LADDER — five generations" with five rung cards (1st cefazolin/cephalexin, 2nd the four-drug set, 3rd ceftriaxone/cefpodoxime/ceftazidime/cefixime with the BBB note, 4th cefepime, 5th ceftaroline) plus a highlighted "THE FIXED EXCLUSION — 1st through 4th" strip listing Listeria, the atypicals, MRSA, enterococci and the adverse-effects lines;  with four stacked cards (the beta-lactamase inhibitors with pairings, THE CARBAPENEM TRIO with imipenem-cilastatin, meropenem, ertapenem, THE MONOBACTAM aztreonam, and a highlighted VANCOMYCIN panel with mechanism, spectrum, toxicities, the infusion-reaction note, the boxed-A photo description lines, and the D-Ala-D-Lac resistance); BOTTOM a boxed READ THE MAP synthesis strip reading the map by gate, door, and route below it; a fine-print two-line footer at the very bottom.`
  const jobs = [
    ['element-crop-v0-light.png', 'light'],
    ['element-crop-v0-dark.png', 'dark'],
  ] as const;
  for (const [which, theme] of jobs) {
    const png = readFileSync(join(QA, which));
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\nImage: ${which} (${theme} theme). ${desc}\n\nInspect it now and report.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    const reply = r.choices?.[0]?.message?.content ?? '';
    writeFileSync(join(QA, `vlm-${theme}.txt`), `===== ${which} =====\n${reply}\n`);
    console.log(`${which}: ` + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
