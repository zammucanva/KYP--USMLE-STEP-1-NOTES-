import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA inspection. Do NOT write code. Inspect the image and answer the numbered questions factually and tersely.`;
  for (const theme of ['light', 'dark'] as const) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m38/element-crop-v0-${theme}.png`);
    const desc = `This is a browser screenshot (theme: ${theme}) of an ORIGINAL educational SVG diagram about HIV drug therapy (a "drug-lifecycle map"). It should contain: a LEFT-CENTER panel with a large ellipse (the CD4+ T CELL with a nucleus), a small virion circle, an ENTRY doors box (maraviroc/enfuvirtide), a REVERSE TRANSCRIPTION box (NRTIs/NNRTIs), a DNA INTEGRATION box (four integrase inhibitors), a PROTEOLYTIC PROCESSING box (protease inhibitors), lifecycle stage labels (uncoating, transcription, translation, packaging and assembly, budding, release); a RIGHT panel with the 3-drug backbone, HIV-2 exceptions, boosting world, safety layer; a BOTTOM prophylaxis strip (CD4 thresholds); a footer.
Questions:
1) Are all major panels fully rendered with no clipped, cut-off, or missing text?
2) Is any text overlapping other text or spilling outside its boxes?
3) Do the arrows/connector lines render correctly? Is the ⊣ symbol rendering (not tofu)?
4) Is text readable in this theme?
5) List any visual defects. If none, say CLEAN.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n===== ${theme.toUpperCase()} =====\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
