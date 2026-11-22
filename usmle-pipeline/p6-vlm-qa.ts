import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p6/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p6/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "CalcificationSplitMap" (an original KYP adaptation of a textbook calcification-and-radiation page) from a study-notes site. Intended layout: header band; LEFT panel "Radiation injury (book 207)" (NO REPAIR FAST DIVIDE selectivity card, THE DERMATITIS PAIR, IONIZING TOXICITY, ACUTE RADIATION SYNDROME); CENTER panel "THE CALCIFICATION SPLIT" with two side-by-side columns (DYSTROPHIC with Ca2+ deposition, extent, etiology, associated-conditions list, photograph A description, and the rule; METASTATIC with the same fields plus the landing-zone pH rule, the renal chain, and the rule) and a shared H+E basophilic note at the bottom; RIGHT panel "Psammoma bodies" (THE MORPHOLOGY, THE TUMOR ROSTER, the source's own 'PSoMMOMa Bodies.' mnemonic card, the duplicated-A quirk note, THE TWO-QUESTION RULE); BOTTOM strip "The map in one line"; footer source lines.
Questions:
1) TEXT CLIPPING: Is any text cut off vertically (especially the ASSOCIATED CONDITIONS lists in the two center columns — dystrophic and metastatic), overlapping, or escaping its card? Name any offender verbatim.
2) PANEL STRUCTURE: Are the LEFT radiation panel, the CENTER two-column calcification split (DYSTROPHIC left column, METASTATIC right column, shared basophilic note), the RIGHT psammoma panel, and the BOTTOM one-line strip all present and non-overlapping?
3) READABILITY: Are the two columns' field labels (Ca2+ DEPOSITION, EXTENT, ETIOLOGY, ASSOCIATED CONDITIONS, LANDING ZONE, RENAL CHAIN) and the source mnemonic 'PSoMMOMa Bodies.' card readable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
