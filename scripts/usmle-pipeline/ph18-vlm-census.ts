import ZAI from '/home/z/.bun/install/global/node_modules/z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph18-page-265.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a textbook page (First Aid USMLE, Pharmacology — Autonomic Drugs, book p. 243, "Sympatholytics (α2-agonists)" and "α-blockers"). Describe EVERYTHING on the page in detail: (1) each table with its exact printed column headers and every row in printed order — for the Sympatholytics (α2-agonists) table give each DRUG with its APPLICATIONS and ADVERSE EFFECTS cells as printed; (2) the α-blockers block: exactly how the Nonselective (phenoxybenzamine, phentolamine) rows are laid out, what ADVERSE EFFECTS cell is shared or attached to which rows, the α1 selective (-osin ending) row (prazosin/terazosin/doxazosin/tamsulosin) with its APPLICATIONS and ADVERSE EFFECTS, and the α2 selective (mirtazapine) row with its APPLICATIONS and ADVERSE EFFECTS — state exactly which cell prints where; (3) any margin notes, mnemonics, arrows, colored elements, photographs, or line art anywhere on the page; (4) any typos or unusual printings. Be exhaustive and literal.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  const out = String(r.choices?.[0]?.message?.content);
  writeFileSync('/home/z/my-project/kyp-usmle-notes/.usmle-pipeline-cache/staging-ph18/vlm-census.txt', out, 'utf8');
  console.log(out);
}
main();
