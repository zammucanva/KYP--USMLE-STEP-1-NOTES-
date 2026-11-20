import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const imgs = ['/tmp/ph19-crop-htn-mi.png', '/tmp/ph19-crop-midtable.png', '/tmp/ph19-crop-selectivity.png'];
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'Three high-resolution crops of the same First Aid β-blockers page (a table with columns APPLICATION / ACTIONS / NOTES-EXAMPLES, then a SELECTIVITY block). ADJUDICATE EXACTLY: (1) In crop 1+2: the HYPERTENSION row ACTIONS cell — does the print read "β1receptor", "β1-receptor", or "β1 receptor" (look for hyphen or space between β1 and receptor)? Does the MYOCARDIAL INFARCTION row print "long-term" or "longterm" — and if hyphenated, is it split across two lines? (2) In crop 2: which table row does the right-column cell containing "Propranolol" and the cell "Effective for prevention" belong to — read each row left-to-right: does Hyperthyroidism/thyroid storm have a NOTES cell with "Propranolol", or is "Propranolol" the first line of the MIGRAINE NOTES cell with "Effective for prevention" as its second line? State the full NOTES/EXAMPLES cell content for BOTH the Hyperthyroidism row and the Migraine row. (3) In crop 3: transcribe the first three SELECTIVITY lines letter-for-letter, especially whether the second notes cell prints "Nonselective" or "NonZelective" (capital Z?) and exactly which letters are bold/red.' },
      ...imgs.map(p => ({ type: 'image_url', image_url: { url: `data:image/png;base64,${readFileSync(p).toString('base64')}` } })),
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
