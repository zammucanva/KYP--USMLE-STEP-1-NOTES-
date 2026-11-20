import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const ask = async (path: string, prompt: string, tag: string) => {
    const b64 = readFileSync(path).toString('base64');
    const r = await zai.chat.completions.createVision({
      model: 'glm-4.6v',
      messages: [{ role: 'user', content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
      ]}],
      thinking: { type: 'disabled' },
    });
    console.log(`\n===== ${tag} =====\n` + String(r.choices?.[0]?.message?.content));
  };
  await ask('/tmp/ph12-crop-fig.png',
    'This is a 300-dpi crop of the Micturition control figure from First Aid USMLE (bladder innervation diagram). Answer precisely: ' +
    '(1) List EVERY label you can read, in top-to-bottom order, with its position (left column / on the bladder / right column / bottom). ' +
    '(2) Are there numbered circles (like 1, 2, 3 in small filled circles) next to any receptor labels (M3-receptor, beta3-receptor, alpha1-receptor)? If yes, which number is next to which receptor, and what color are the circles? ' +
    '(3) Trace the three nerves: where does each nerve label (Pelvic nerve, Hypogastric nerve, Pudendal nerve) sit, and does a drawn nerve line connect it toward the bladder/sphincters? ' +
    '(4) Which receptor label points at which structure (leader lines): M3-receptor -> ?; beta3-receptor -> ?; alpha1-receptor -> ?; Nicotinic receptor -> ? ' +
    '(5) Describe the anatomy shown: bladder shape, urethra course, internal vs external sphincter positions, any ureters, prostate, or other structures visible.', 'FIGURE crop 300dpi');
  await ask('/tmp/ph12-crop-pons.png',
    'This is a 300-dpi crop of a First Aid USMLE text panel next to the Micturition control figure. Quote the mnemonic line EXACTLY (spelling, capitalization, punctuation). Which specific letters are printed in RED (list them in order)? Is there any small cartoon/artwork/face/person anywhere in this crop? Is there any additional text or annotation near the mnemonic line?', 'PONS + MNEMONIC crop 300dpi');
  await ask('/tmp/ph12-crop-tbl.png',
    'This is a 300-dpi crop of the DRUGS/MECHANISM/APPLICATIONS table from First Aid USMLE (Micturition control). ' +
    '(1) Transcribe the table EXACTLY as printed, row by row, with the exact receptor subscripts (M3 vs M2, beta3 vs beta2, alpha1), the exact arrow symbols (circle-plus, circle-minus), and the exact mechanism wording. ' +
    '(2) Which letters or numbers in the DRUGS column are printed in red or highlighted? Are there numbered circles (1,2,3) in the left column? ' +
    '(3) What color are the drug class names and the example drug names?', 'TABLE crop 300dpi');
}
main();
