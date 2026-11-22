import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph23-page-270.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE book page 248 (a Pharmacology toxicities/adverse-effects page). The page holds TWO stacked tables. Describe the page structure precisely: (1) the page header/banner lines and page number; (2) TABLE 1 "Drug reactions—endocrine/reproductive" with columns DRUG REACTION / CAUSAL AGENTS / NOTES — list EVERY row in PRINTED order with all three cells, noting which cells are empty, and preserving exact wording (e.g. does the first row read "Adrenocortical insufficiency" with causal agent "HPA suppression secondary to chronic exogenous glucocorticoid use" and note "Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis"?); (3) which endocrine rows carry RED mnemonic text inside the NOTES column (e.g. "The people need High glucose", "I am lethargic", "Can’t Concentrate Serum Sodium") and which row each belongs to; (4) TABLE 2 "Drug reactions—gastrointestinal" — list EVERY row in printed order with its three cells; state WHICH ROW the red mnemonic "I referred patient serum (AST, ALT) for hepatitis" is printed in (the Acute cholestatic hepatitis row or the Hepatitis row?), and which rows carry the red mnemonics "Drugs generate a violent abdominal distress" and "Pills Not beneficial for food tube"; also give the full NOTES text printed in the Medication-induced esophagitis and Pseudomembranous colitis rows; (5) any margin notes, mnemonics, or images anywhere on the page; (6) the footer slug and timestamp. Preserve exact printed spellings and capitalizations.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
