import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m23');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar; a centered rule strip (THE BOX RULE — all DNA viruses icosahedral and nuclear except poxvirus; the size poles pox-largest and parvo-smallest; the enveloped trio vs naked quartet); THE SEVEN FAMILIES grid with column chips (FAMILY | ENV | DNA STRUCTURE | MEDICAL IMPORTANCE) and 7 zebra rows (Herpesviruses, Poxvirus, Hepadnavirus, Adenovirus, Papillomavirus, Polyomavirus, Parvovirus) with wrapped text; THE HERPESVIRUS ROSTER panel with column chips (VIRUS | ROUTE | SIGNATURE + LATENCY) and 7 zebra rows (HSV-1, HSV-2, VZV HHV-3, EBV HHV-4, CMV HHV-5, HHV-6 and 7, HHV-8) with wrapped multi-line text; an IDENTIFICATION + RECEPTORS strip with two columns (HSV IDENTIFICATION on the left, RECEPTORS USED BY VIRUSES on the right); a fine-print footer at the bottom.`;
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
