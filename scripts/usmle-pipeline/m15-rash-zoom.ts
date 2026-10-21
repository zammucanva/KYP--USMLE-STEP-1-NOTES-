import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const png = readFileSync('/tmp/m15-rash-zoom.png');
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const prompt = `Zoomed crop of page 148 of First Aid for the USMLE Step 1 2026, 'Rickettsial diseases and vector-borne illnesses'. The page prints two group labels: RASH COMMON and RASH RARE.

Answer these questions LITERALLY about the PRINTED layout:
1. Is RASH COMMON a left-column header, a top header, or a side rail? Where exactly does it sit relative to Rocky Mountain spotted fever and Typhus?
2. Which disease blocks does RASH COMMON cover: (a) RMSF + Typhus only, or (b) RMSF + Typhus + Ehrlichiosis + Anaplasmosis + Q fever?
3. Which disease blocks does RASH RARE cover: (a) Ehrlichiosis + Anaplasmosis + Q fever + Mycoplasma, or (b) Mycoplasma only?
4. Do the labels sit to the LEFT of their blocks (like row-group rails) or ABOVE them?
Quote the exact positions.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: dataUrl } },
    ] },
  ];
  const response = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(response.choices?.[0]?.message?.content ?? JSON.stringify(response));
}
main().catch((e) => { console.error(e); process.exit(1); });
