import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m22');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar; THE ARCHITECTURE section with 4 panels (1 Naked icosahedral — a faceted hexagon with a nucleic-acid squiggle; 2 Enveloped icosahedral — a spiked circle around an inner hexagon; 3 Enveloped helical — a spiked circle around a zigzag coil; 4 Bacteriophage — a hexagonal head, collar, sheath with rungs, base plate, tail-spike pins), each with leader-line labels (Capsid, Nucleic acid, Surface protein, Lipid bilayer, Helical capsid with viral RNA, Collar, Core, Helical sheath, Base plate, Spikes) and an italic source caption; THE GENETIC EXCHANGE section with 4 cards (RECOMBINATION, REASORTMENT, COMPLEMENTATION, PHENOTYPIC MIXING) each with a small icon schematic (virus circles with + = signs, genome waves/bars, functional/nonfunctional markers, progeny arrows) plus definition text and a bold example line; THE NAKED-GENOME RULE + ENVELOPE RULE strip with two columns (INFECTIOUS AS NAKED NUCLEIC ACID vs NOT INFECTIOUS) and a centered envelope-source line; a fine-print footer at the bottom.`;
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
    const reply = r.choices?.[0].message?.content ?? '';
    writeFileSync(join(QA, `vlm-${theme}.txt`), `===== ${which} =====\n${reply}\n`);
    console.log(`${which}: ` + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
