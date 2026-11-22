import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL CONTENT-FIDELITY QA task. Do NOT write code. Read the rendered text closely and answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p9/element-crop-v0-light.png');
  const desc = `This is a LIGHT-MODE crop of a rendered KYP registry visual "LeukocyteTraffickingMap" — an original redraw of a textbook leukocyte-extravasation figure with a marker table. Source facts to verify: extravasation predominantly occurs at postcapillary venules; station 1 margination and rolling = E-selectin (released from endothelial cells, upregulated by TNF and IL-1) + P-selectin (translocated via exocytosis from Weibel-Palade bodies) + GlyCAM-1/CD34 vs Sialyl LewisX + L-selectin, defective in LAD type 2; station 2 tight binding = ICAM-1 (CD54) + VCAM-1 (CD106) vs CD11/18 integrins (LFA-1, Mac-1) + VLA-4, defective in LAD type 1 (↓ CD18 integrin subunit); station 3 diapedesis = PECAM-1 (CD31) both sides; station 4 migration = chemotactic factors C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides.
Questions:
1) Read the FINAL line of each of the four station cards and the two LAD lockout cards — quote them verbatim. Any truncated mid-word?
2) Do all the marker names with their CD numbers (CD54, CD106, CD31, CD18, CD11/18) and the two LAD deficiency notes appear intact?
3) Does the figure show the four PMN states (rolling circle, flattened ellipse, squeezing ellipse, walking circle) with the interaction labels at the correct stations?
4) Any missing glyphs (↓, →, ·, ×) or rendering artifacts?
5) OVERALL: List ANY defect, or state CLEAN.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the crop now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
