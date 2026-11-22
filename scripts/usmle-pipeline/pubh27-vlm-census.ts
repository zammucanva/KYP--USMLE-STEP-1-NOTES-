import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh27-page-300.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 300 / printed book page 278, the FINAL page of the banner "PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY" (the last page of the Public Health Sciences chapter). The page carries FOUR blocks: (A) a "Palliative care" text block; (B) "Types of medical errors" — an intro paragraph plus a table with four rows (Active error, Latent error, Never event, Near miss); (C) "Medical error analysis" — a table with column headers DESIGN / METHODS and two rows (Root cause analysis, Failure mode and effects analysis); (D) "Causes of medical errors" — a two-row table (Burnout, Fatigue). Describe the page precisely and completely: (1) PALLIATIVE CARE — quote the block verbatim, including the "Hospice care (end-of-life care)" sentence; (2) TYPES OF MEDICAL ERRORS — quote the intro sentence listing what errors may involve, and the disclosure sentence; then list EVERY row of the table in PRINTED order with ALL cells verbatim (error name | description cell | right-hand consequence cell), including the Never event row\'s two-sentence right cell with the "Sentinel event" sentence; does this table print ANY column headers above "Active error" (report exactly what sits between the intro paragraph and the first row)?; (3) MEDICAL ERROR ANALYSIS — confirm the section title position (above the DESIGN/METHODS header row?), quote both rows verbatim: Root cause analysis (retrospective approach cell + methods cell with 5 whys, fishbone/cause-and-effect diagrams, process maps, and the underlying-problems list) and Failure mode and effects analysis (forward-looking cell + inductive-reasoning cell); is the METHODS header printed with a lowercase first letter (small caps) or all caps?; (4) CAUSES OF MEDICAL ERRORS — quote the Burnout and Fatigue rows verbatim; does this table print column headers?; (5) COLOR FURNITURE — which text is colored (which words, which color): section titles, row labels, the ▶ banner, any red or blue text anywhere; zebra striping vs hairlines in the tables; (6) any margin notes, mnemonics in margins, asterisk footnotes, images, or icons anywhere on the page; (7) the header/banner lines at the top (does the subsection banner print twice — running header + in-body ribbon?) and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps (eg, "cause-and-effect").' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
