import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// E21 source-page visual census: pdf p120 (book p98) — MHC I and II.
// One VLM pass per supplied image; output is a factual census only.

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
  const png = readFileSync('/tmp/e21/pdf120-120.png');
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const zai = await ZAI.create();

  const prompt = `This is a page from First Aid for the USMLE Step 1 2026 (Immunology chapter, page 98, "Major histocompatibility complex I and II").

Perform a factual census of VISUAL elements on this page (do not transcribe full text, do not reproduce the page):
1. List every diagram / figure / illustration / table as separate visual elements. For each: what it depicts (in your own words), its structure, and the labels it contains (list label text exactly as printed).
2. For molecular structure diagrams: describe chains, domains, orientation (extracellular/membrane/cytoplasm), and any arrows or antigen depictions.
3. State which visual elements are tables vs diagrams vs photographs vs micrographs.
4. Note any special typographic characters in labels (arrows, Greek letters, superscripts).
Do NOT reproduce any table's full cell contents beyond what labels/headers are needed to identify it.`;

  const reply = await ask(zai, dataUrl, prompt);
  console.log(reply);
}

main().catch((e) => {
  console.error('VLM census failed:', (e as any)?.message || e);
  process.exit(1);
});
