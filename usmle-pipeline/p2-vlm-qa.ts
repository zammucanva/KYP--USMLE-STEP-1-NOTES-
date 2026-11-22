import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p2/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p2/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "InjuryTimelineMap" (an original KYP redraw of a textbook cell-injury timeline) from a study-notes site. Intended layout: header band; LEFT panel "The reversible cascade (book 203)" (THE OPENING MOVE card, THE REVERSIBLE QUARTET, FUNCTION FALLS FIRST, MYELIN FIGURES, THE PUMP LADDER); CENTER panel "THE TIMELINE" with a legend (Reversible/Irreversible/Cell death), a round NORMAL CELL glyph, a green double-headed arrow to a swollen REVERSIBLE INJURY cell, a red arrow to a breaking-apart IRREVERSIBLE INJURY cell, a black curved arrow labeled "Cell death (necrosis)", stage label chips on both sides, and a red hinge callout at the bottom; RIGHT panel "The irreversible cascade" (THE POINT OF NO RETURN, THE NUCLEAR LADDER, FERROPTOSIS the detour, THE PREVENTION PAIR); BOTTOM strip "The timeline in one line"; footer source lines.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping other text, or escaping its panel/box? Name any offender verbatim.
2) PANEL STRUCTURE: Are all four regions present and non-overlapping? Are the three cell glyphs (round normal, swollen reversible, irregular breaking irreversible) visible with their labels? Do the arrows read left-to-right with their color coding (teal=green, red, black)?
3) GLYPH READABILITY: Are the cell glyphs distinguishable (round vs swollen vs breaking apart)?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
