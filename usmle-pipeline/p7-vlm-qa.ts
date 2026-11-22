import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p7/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p7/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "AmyloidDepositionMap" (an original KYP adaptation of a textbook amyloidosis page) from a study-notes site. Intended layout: header band; LEFT panel "The definition and the stain" (THE β-PLEATED SHEET definition card, CONGO RED — THE CONFIRMATORY STAIN card with the nonpolarized/polarized/H&E lines, THE TWO PHOTOGRAPHS — DESCRIBED card, then the stream-order quirk note); CENTER panel "THE COMMON TYPES ROUTER" with a SYSTEMIC group header band and four cards (PRIMARY AMYLOIDOSIS with the AL chip, SECONDARY AMYLOIDOSIS with the AA chip, TRANSTHYRETIN AMYLOIDOSIS with the Transthyretin chip and both wild-type and hereditary lines, DIALYSIS-RELATED AMYLOIDOSIS with the β2-microglobulin chip) then a LOCALIZED group header band and four small cards in a 2x2 grid (ALZHEIMER DISEASE β-amyloid protein, ISOLATED ATRIAL AMYLOIDOSIS ANP, TYPE 2 DIABETES MELLITUS Islet amyloid polypeptide, MEDULLARY THYROID CANCER Calcitonin); RIGHT panel "The six organs" (RENAL nephrotic syndrome, CARDIAC restrictive cardiomyopathy, GI hepatosplenomegaly, NEUROLOGIC dementia and peripheral neuropathy, MUSCULOSKELETAL macroglossia and carpal tunnel, SKIN waxy thickening and easy bruising); BOTTOM footer with Source & census lines.
Questions:
1) TEXT CLIPPING: Is any text cut off vertically, overlapping another text, or escaping its card boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the LEFT definition/stain panel, the CENTER router (4 systemic cards + 2x2 localized grid, both group header bands), the RIGHT six-organ panel, and the footer all present and non-overlapping? Does the center panel's content stay inside the panel's border?
3) READABILITY: Are the fibril protein chips (AL (from Ig Light chains), AA (serum Amyloid A), Transthyretin, β2-microglobulin) and the localized cards' protein names readable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
