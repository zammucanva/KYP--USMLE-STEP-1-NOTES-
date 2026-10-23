import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const QA = join(process.cwd(), 'docs/qa/m31');

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The visual depicts: a header bar reading "Antimicrobial therapy — the mechanisms-of-action target map"; LEFT a rounded panel "The bacterial cell" containing a CELL WALL band, a CELL MEMBRANE band with gram keys, the label BACTERIAL CELL, a folate cascade row of three chips (PABA, DHF, THF) joined by two blocked arrows with the labels Sulfonamides and Trimethoprim above them, a DNA chip joined to a DNA gyrase chip, an RNA polymerase chip with an arrow to an mRNA chip, and two side-by-side ribosome pairs (50S cap above 30S base, twice) with two caption lines beneath; MIDDLE column of five zone panels (1 FOLIC ACID SYNTHESIS AND REDUCTION with Sulfonamides/Trimethoprim, 2 MEMBRANE INTEGRITY with Daptomycin gram positive and Polymyxins gram negative, 3 DNA INTEGRITY with Metronidazole, 4 mRNA SYNTHESIS with Rifampin, 5 GYRASE with the four fluoroquinolones) plus a nine-doors index card; RIGHT column of two protein-synthesis panels (6 the 50S SUBUNIT roster with three singles, Macrolides, and Streptogramins; 7 the 30S SUBUNIT roster with Aminoglycosides, Glycylcycline, Tetracyclines); BOTTOM a CELL WALL SYNTHESIS band split into a small 8 PEPTIDOGLYCAN SYNTHESIS panel (Glycopeptides: Vancomycin, Bacitracin) and a wide 9 PEPTIDOGLYCAN CROSS-LINKING directory table with GROUP and DRUGS columns and six zebra rows (the cephalosporin generations row spanning two lines); a boxed READ THE MAP synthesis strip; a fine-print footer at the bottom.`
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
