import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m30');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar reading "Bugs by system II — rashes, urinary, vaginal, STDs, TORCH, nosocomial"; the RED RASHES OF CHILDHOOD panel with a 3-column table (AGENT, SYNDROME, CLINICAL PRESENTATION) of 7 zebra rows (Coxsackievirus type A through Varicella-zoster virus) and a boxed topography-key strip at the panel bottom; the URINARY TRACT INFECTIONS panel with two side-by-side syndrome cards (CYSTITIS, PYELONEPHRITIS), a risk-factors strip, a SPECIES/FEATURES header bar and 7 zebra species rows, and a diagnostic-markers strip; the COMMON VAGINAL INFECTIONS panel with three side-by-side disease cards (Bacterial vaginosis, Trichomonas vaginitis, Candida vulvovaginitis) each with colored header and SIGNS/LAB/TREATMENT sections; the SEXUALLY TRANSMITTED INFECTIONS panel with a 3-column directory (DISEASE, CLINICAL FEATURES, PATHOGEN) of 13 zebra rows and a boxed pain-axis strip at the bottom; the TORCH panel with an intro strip, a 4-column table (AGENT, MATERNAL ACQUISITION, MATERNAL MANIFESTATIONS, NEONATAL MANIFESTATIONS) of 6 zebra rows, and a boxed calcification-key strip; the HEALTHCARE-ASSOCIATED INFECTIONS panel with a 3-column table (RISK FACTOR, PATHOGEN, UNIQUE SIGNS/SYMPTOMS) of 8 zebra rows; a fine-print footer at the bottom.`
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
