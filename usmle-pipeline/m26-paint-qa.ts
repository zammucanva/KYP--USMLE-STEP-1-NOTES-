import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m26');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar; a mechanism strip (2 centered lines: THE HBV POLYMERASE and THE HCV ESCAPE); THE FIVE VIRUSES grid with column chips (VIRUS | FAMILY | TRANSMISSION | INCUBATION | COURSE | PROGNOSIS | HCC | BIOPSY + NOTES) and 5 zebra rows (HAV, HBV, HCV, HDV, HEV) with wrapped cells; THE SEROLOGY CLOCK panel — a plotted area with phase dividers (Incubation, Acute infection, Window, Recovery), five curves (a solid red HBsAg curve, a dashed brand anti-HBs curve, solid and dotted core/e curves), a legend of 5 + 1 items below the plot, and a 'Level of detection' label; THE SEROLOGY PATTERNS table with 7 scenario rows x 5 marker columns (⊕/⊝ marks); the EXTRAHEPATIC panel with 5 system rows x 2 hepatitis columns; a fine-print footer.`
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
