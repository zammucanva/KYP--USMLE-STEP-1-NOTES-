import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m29');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar; THE DIARRHEA SPLIT panel with two side-by-side columns (BLOODY with 7 zebra rows on the left in emergency-red labels; WATERY with 6 zebra rows on the right in brand-teal labels); the PNEUMONIA panel with 5 age columns (NEONATES through ADULTS 65+) plus a SPECIAL GROUPS section of 9 rows; the MENINGITIS panel with 4 age columns (NEWBORN through 60 YR+), a 3-row CSF table (TYPE | OPENING PRESSURE | CELL TYPE | PROTEIN | GLUCOSE), and an empiric strip; the BRAIN ABSCESS panel with 2 wrapped lines; the OSTEOMYELITIS panel with a 7-row risk-factor table and a workup footnote; a fine-print footer.`
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
