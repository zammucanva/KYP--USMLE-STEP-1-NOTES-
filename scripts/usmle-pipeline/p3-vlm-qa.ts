import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p3/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p3/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "ApoptosisPathwayMap" (an original KYP redraw of a textbook apoptosis convergence figure) from a study-notes site. Intended layout: header band; LEFT panel "The definition (book 204)" (ATP-DEPENDENT PROGRAMMED DEATH, THE MORPHOLOGY SET, THE QUIET DEATH, DNA LADDERING AT 180, WHY ATP MATTERS); CENTER panel "THE CONVERGENCE" with three door columns (INTRINSIC [MITOCHONDRIAL] with DNA damage/misfolded proteins/hypoxia boxes, p53 activation, a mitochondrion glyph flanked by Bax/Bak and Bcl-2 chips; EXTRINSIC [DEATH RECEPTOR] with FasL-Fas and TNF-alpha-TNFR; PERFORIN/GRANZYME B with a cytotoxic T cell glyph and Perforin/Granzyme B chips), arrows converging on the central EXECUTIONER CASPASES box, fan-out chips (Cytoskeletal dispersion, Cytoplasmic bleb, Nuclear fragmentation), then the APOPTOTIC BODY with its macrophage-receptor-ligands tag and the MACROPHAGE glyph; RIGHT panel "The clinical anchors" (INTRINSIC TRIGGERS, THE JAMMED DOOR, THE THYMIC ROLE, AUTOIMMUNE LYMPHOPROLIFERATIVE SYNDROME); BOTTOM strip "The map in one line"; footer source lines.
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
