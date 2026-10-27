import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p1/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p1/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "AdaptationsComparisonMap" (an original KYP redraw of a textbook adaptation-progression flowchart) from a study-notes site. The intended layout: header band; LEFT panel "The six blocks (book 202)" with cards (THE INTRO RULE, HYPERTROPHY, HYPERPLASIA, ATROPHY, METAPLASIA, DYSPLASIA); CENTER panel "THE PROGRESSION MAP" with a terminal box "IRREVERSIBLE INJURY → necrosis or apoptosis", a legend (Reversible/Irreversible), top row nodes HYPERPLASIA/HYPERTROPHY/ATROPHY with small cell glyphs, a central NORMAL CELLS node, bottom row nodes DYSPLASIA/METAPLASIA/NEOPLASIA with glyphs, teal and red arrows with labels (Change in cell size and/or number; Change in cell structure; Change in cell type; Change in cell type and structure; Inability to adapt; Severe stress or injury; If chronic irritant persists); RIGHT panel "The mechanism sidebar" (ATROPHY IS ACTIVE DEMOLITION; THE TWO METAPLASIA DIRECTIONS; THE DYSPLASIA SEVERITY FORK; THE PROGRESSION CHAINS); BOTTOM strip "The map in one line"; footer source lines.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping other text, or running outside its panel/box? Name any offender verbatim.
2) PANEL STRUCTURE: Are all four regions (left cards, center map, right sidebar, bottom strip) present and non-overlapping? Are all seven nodes and the terminal box visible with their labels?
3) GLYPH READABILITY: Are the small cell-cluster glyphs in the nodes visible and distinguishable (more cells vs bigger cells vs shrunken cells vs changed type vs disordered mass)?
4) THEME: In the dark-mode crop, are the texts readable against their backgrounds (no dark-on-dark)? Any color that becomes invisible?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
