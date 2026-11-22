import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh26-page-299.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 299 / printed book page 277, in the banner "PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY". The page carries (A) a table titled "Major medical insurance plans" with SIX rows, (B) a table titled "Healthcare payment models" with FIVE rows, and (C) a "Medicare and Medicaid" text block, plus a RIGHT-MARGIN mnemonic column. Describe the page precisely and completely: (1) THE FIRST TABLE ("Major medical insurance plans") — list EVERY row in PRINTED order with its full text verbatim (EPO, HMO, PoS, PPO, ACO, HDHP — report the EXACT printed name and the EXACT description sentence of each, including capitalization, hyphens, parentheses); confirm there are exactly SIX rows and none missing or extra; (2) THE SECOND TABLE ("Healthcare payment models") — list EVERY row in PRINTED order verbatim (Bundled payment, Capitation, Discounted fee-for-service, Fee-for-service, Global payment — the EXACT printed name of the discounted row, including whether "fee-for-service" is hyphenated or wraps across lines, and the EXACT description of each); confirm exactly FIVE rows; (3) THE MEDICARE AND MEDICAID BLOCK — quote the paragraph text verbatim as printed (left block), and say what artwork/icons/graphics accompany it (is there an image, a flag, an icon, or just text?); (4) THE RIGHT-MARGIN MNEMONIC PANEL — quote every line VERBATIM including capitalization of the big E and big D ("MedicarE is for Elderly.", "MedicaiD is for Disadvantaged."), the line "The 4 parts of Medicare:", and each Part A / Part B / Part C / Part D line with its bolded keyword letters; is this panel printed in a special color (red? blue?), and are there bullet marks before the Part lines?; (5) COLOR FURNITURE — table title colors, header row shading, any red/blue/colored text anywhere (which words?), zebra striping or hairlines, any images or photos anywhere on the page; (6) the header/banner lines at the top and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
