import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p4/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p4/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "NecrosisTypeMap" (an original KYP redraw of a textbook apoptosis convergence figure) from a study-notes site. Intended layout: header band; LEFT panel "The loud death (book 205)" (THE DEFINITION CASCADE, THE COAGULATIVE PARADOX, THE GANGRENOUS FORK with DRY/WET cards, THE TISSUE ROUTER); CENTER panel "THE SIX TYPES" as a 2x3 grid of type cards (COAGULATIVE-A, LIQUEFACTIVE-B, CASEOUS-C, FAT-D, FIBRINOID-E, GANGRENOUS-F), each with SEEN IN, DUE TO, HISTOLOGY sections; RIGHT panel "The photographs, described" (the six copyrighted A-F images described in text: A coagulative H+E micrograph, B liquefactive gross brain cavity, C caseous gross cheeselike center, D fat H+E dark-blue calcium soaps, E fibrinoid smudged vessel wall, F gangrenous blackened digits; plus THE EXAM DISCRIMINATORS); BOTTOM strip "The router in one line"; footer source lines.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping other text, or escaping its panel/box? Name any offender verbatim.
2) PANEL STRUCTURE: Are all four regions present and non-overlapping? Do the three door columns, the central hub, the fan-out chips, and the apoptotic-body-to-macrophage ending all render with their labels?
3) GLYPH READABILITY: Are the mitochondrion (oval with folds), the T cell, and the macrophage glyphs visible and distinguishable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
