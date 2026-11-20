import ZAI from '/home/z/.bun/install/global/node_modules/z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph16-page-261.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid for the USMLE Step 1 2026, book page 239 (Pharmacology — Autonomic Drugs: Cholinomimetic agents). Describe precisely: (1) the overall page structure top to bottom; (2) the Cholinomimetic agents table — its column headers, every row in printed order, and for EACH drug say exactly which text sits in the ACTION column vs the APPLICATIONS column (the text layer interleaves them); (3) any subheader rows spanning the table such as "Direct agonists" or "Indirect agonists (anticholinesterases)"; (4) the anticholinesterase poisoning block at the bottom — its sub-labels (muscarinic/nicotinic/CNS effects) and where each sentence sits; (5) any margin notes, mnemonics in quotes, or memory aids anywhere on the page; (6) any photographs or figures vs pure text/table art; (7) the footer line.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0].message?.content));
}
main();
