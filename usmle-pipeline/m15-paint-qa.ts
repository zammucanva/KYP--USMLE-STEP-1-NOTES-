import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: dataUrl } } ] } ];
  const response = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}
async function main() {
  const which = process.argv[2] ?? 'element-vector-borne-rash-map-light.png';
  const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m15/${which}`);
  const zai = await ZAI.create();
  const prompt = `You are performing paint QA on a study-website SVG schematic (an original composition for a medical education site). Image: ${which}

The visual has four panels plus strips:
1. THE CHLAMYDIAE — a cycle/wall/lab text block, then three side-by-side serotype cards (Types A, B, and C / Types D-K / Types L1, L2, and L3).
2. THE ZOONOTIC DIRECTORY — a 17-row grid with header chips (SPECIES | DISEASE | TRANSMISSION AND SOURCE) and alternating row fills.
3. RASH COMMON vs RASH RARE — two side-by-side cards (left: RASH COMMON with ROCKY MOUNTAIN SPOTTED FEVER and TYPHUS; right: RASH RARE with EHRLICHIOSIS, ANAPLASMOSIS, Q FEVER), then a full-width MYCOPLASMA PNEUMONIA card below with two labeled sub-blocks (THE CLINICAL PICTURE / THE LAB RULES).
4. GARDNERELLA VAGINALIS — a single text block.
5. An anchors strip and a three-line footer at the bottom.

Inspect carefully and report:
1. OVERLAPS: any text overlapping other text or colliding with borders (watch: the serotype cards' wrapped lines vs card bottoms; the directory's 17 rows — disease vs transmission columns drifting; the Mycoplasma sub-blocks' last lines vs the card bottom).
2. CLIPPING: any text cut at edges (every wrapped line's end; the anchors strip; the footer lines).
3. CONTRAST/READABILITY: any hard-to-read text.
4. ALIGNMENT: misplaced or floating elements.
5. CONTENT CHECK: one sentence per panel.
End with: VERDICT: CLEAN or VERDICT: DEFECTS FOUND (list them).`;
  const reply = await ask(zai, `data:image/png;base64,${png.toString('base64')}`, prompt);
  console.log(`===== ${which} =====`); console.log(reply);
}
main().catch((e) => { console.error(e); process.exit(1); });
