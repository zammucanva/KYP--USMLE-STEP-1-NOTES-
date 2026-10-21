import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [
    { role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: dataUrl } },
    ] },
  ];
  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages,
    thinking: { type: 'disabled' },
  });
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}

async function main() {
  const zai = await ZAI.create();
  const p181 = `data:image/png;base64,${readFileSync('/tmp/m22page-181.png').toString('base64')}`;
  const p182 = `data:image/png;base64,${readFileSync('/tmp/m22page-182.png').toString('base64')}`;
  const out: string[] = [];

  out.push('===== PDF PAGE 181 (book 159) =====');
  out.push(await ask(zai, p181, `This is page 159 of First Aid for the USMLE Step 1 2026, Microbiology — Virology. Describe the layout PRECISELY:
1. The banner text at the top of the page (exact spelling — note any typo).
2. The 'Viral structure—general features' figure: how many panels, left to right? For EACH panel give: the printed caption under it, and every label with its leader line (surface protein, lipid bilayer, capsid, nucleic acid, core, helical capsid with viral RNA, collar, helical sheath, base plate, spikes — wherever they appear). Describe the shapes drawn (icosahedral vs helical vs phage head/tail).
3. The 'Viral genetics' table: the row labels and for each row the small diagram at the right — what shapes/colors do the + = icons show (Recombination crossing lines? Reassortment segment swap? Complementation Functional/Nonfunctional circles? Phenotypic mixing Virus A/B coats on Progeny 1/2?). Describe each diagram's visual content precisely.
4. Any photos/micrographs on this page (raster images), or is everything vector line art?
Be exhaustive.`));

  out.push('===== PDF PAGE 182 (book 160) =====');
  out.push(await ask(zai, p182, `This is page 160 of First Aid for the USMLE Step 1 2026, Microbiology — Virology. Describe the layout PRECISELY:
1. The banner at the top (exact spelling).
2. The 'Viral genomes' intro paragraph: verbatim.
3. The table with CHARACTERISTICS | MNEMONIC columns: how many rows (DNA viruses / RNA viruses / Viral envelopes)? For each row: the left column text verbatim-ish (including the sub-bullets about Parvoviridae ssDNA, circular papilloma/polyoma/hepadna, Reoviridae dsRNA, + stranded list, - stranded list, segmented BOAR, envelopes from plasma membrane, herpesvirus nuclear membrane exception) and the right column mnemonic text verbatim (Part of a virus; Repeato-virus; While at a retro toga party...; Always bring polymerase or fail replication; BOAR; Enveloped DNA viruses... helpful protection).
4. Are there any figures, diagrams, or photos on this page at all, or is it text-table only?
Be exhaustive.`));

  writeFileSync('/tmp/m22-vlm-census.txt', out.join('\n\n'));
  console.log(out.join('\n\n'));
}
main().catch((e) => { console.error('M22 VLM census failed:', (e as any)?.message || e); process.exit(1); });
