import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA inspection. Do NOT write code. Inspect the image and answer the numbered questions factually and tersely.`;
  for (const theme of ['light', 'dark'] as const) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m37/element-crop-v0-${theme}.png`);
    const desc = `This is a browser screenshot (theme: ${theme}) of an ORIGINAL educational SVG diagram about non-HIV antiviral drugs (a "target & activation map"). It should contain: a CENTER panel titled "THE KINASE LADDER" (three activation-fork doors: HSV/VZV thymidine kinase; CMV viral kinase; a no-kinase lane with foscarnet/cidofovir) flowing to a triphosphate step and a viral DNA polymerase step, plus a resistance map strip; a LEFT panel with an influenza virion (neuraminidase door, cap-snatching door, the 48-hour window) and a remdesivir panel; a RIGHT safety panel (acyclovir hydrate, ganciclovir marrow, foscarnet rescue price, cidofovir escort, prodrug refinements); a BOTTOM antihelminthic strip; a footer with source attribution.
Questions:
1) Are all four major panels (LEFT progeny doors, CENTER kinase ladder, RIGHT safety panel, BOTTOM antihelminthic strip) fully rendered, with no clipped, cut-off, or missing text?
2) Is any text overlapping other text or spilling outside its panel boxes anywhere?
3) Are the arrows/connector glyphs and the ⊣ inhibition symbols rendering correctly (not as boxes/tofu)?
4) Is the text readable at this size in this theme (sufficient contrast)?
5) List any visual defects you can find. If none, say CLEAN.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n===== ${theme.toUpperCase()} =====\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
