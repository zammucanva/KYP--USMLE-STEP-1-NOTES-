import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

// M13 follow-up: focused zoom on the E. coli strain table (pdf 165 / book 143)
// to settle the EHEC-row column assignment of "Does not ferment sorbitol".
// Pattern: E38 BugPatternMatrix precedent — VLM resolves true column
// assignments where pdftotext interleaves.

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
  // Crop the strain-table band (y 8%-62%) and upscale 2x for readability
  execSync(
    `python3 -c "
from PIL import Image
im = Image.open('/tmp/m13page-165.png')
w, h = im.size
band = im.crop((0, int(h*0.08), w, int(h*0.62)))
band = band.resize((band.width*2, band.height*2), Image.LANCZOS)
band.save('/tmp/m13-ehec-zoom.png')
print(band.size)
"`
  );
  const png = readFileSync('/tmp/m13-ehec-zoom.png');
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const zai = await ZAI.create();

  const prompt = `This is a zoomed crop of the "Escherichia coli" strain table from First Aid for the USMLE Step 1 2026 (page 143). The table has columns: STRAIN | TOXIN AND MECHANISM | PRESENTATION.

Transcribe the ENTEROHEMORRHAGIC E COLI row with STRICT column fidelity:
1. Quote the exact text of the TOXIN AND MECHANISM cell (middle column), in printed order.
2. Quote the exact text of the PRESENTATION cell (right column), in printed order.
3. State explicitly: does the sentence "Does not ferment sorbitol (vs other E coli)" appear in the MIDDLE column or the RIGHT column? Between which two sentences, vertically?
4. Also confirm for the other three rows (EIEC, ETEC, EPEC) which column each sentence belongs to, especially "EIEC is Invasive; dysentery. Clinical manifestations similar to Shigella." (middle or right?) and "ETEC; Traveler's diarrhea (watery)." (middle or right?).
Be literal — transcribe from the printed cells only.`;

  console.log(await ask(zai, dataUrl, prompt));
}

main().catch((e) => {
  console.error('M13 EHEC zoom read failed:', (e as any)?.message || e);
  process.exit(1);
});
