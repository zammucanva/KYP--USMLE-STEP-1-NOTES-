import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// E21 paint QA — the MhcStructureComparison registry visual.
// Checks: label overlaps, clipped text, contrast, layout defects; plus
// independent content verification that it depicts the intended visual.

async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [
    {
      role: 'user',
      content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: dataUrl } },
      ],
    },
  ];
  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages,
    thinking: { type: 'disabled' },
  });
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}

async function main() {
  const which = process.argv[2] ?? 'element-visual-light.png';
  const png = readFileSync(`/home/z/kyp-usmle-notes/docs/qa/e21/${which}`);
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const zai = await ZAI.create();

  const prompt = `You are performing paint QA on a study-website SVG schematic (an original composition for a medical education site). Image: ${which}

Inspect carefully and report:
1. OVERLAPS: any text labels overlapping each other or overlapping graphics they should not touch.
2. CLIPPING: any text or shapes cut off at edges or by container boundaries.
3. CONTRAST/READABILITY: any text hard to read against its background.
4. ALIGNMENT: any boxes/arrows/labels visually misplaced or floating without context.
5. CONTENT CHECK: describe in your own words what the two panels and the bottom strip depict (briefly), so we can confirm this is the intended visual.
End with a verdict line: VERDICT: CLEAN or VERDICT: DEFECTS FOUND (then list them).`;

  const reply = await ask(zai, dataUrl, prompt);
  console.log(`===== ${which} =====`);
  console.log(reply);
}

main().catch((e) => {
  console.error('VLM paint QA failed:', (e as any)?.message || e);
  process.exit(1);
});
