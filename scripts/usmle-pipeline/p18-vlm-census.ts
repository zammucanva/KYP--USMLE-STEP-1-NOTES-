import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p2x-244-244.png');
  const png2 = readFileSync('/home/z/my-project/scripts/p-pages/p2x-245-245.png');
  const desc = `These are pages 244 and 245 of First Aid for the USMLE Step 1 2026 (pdf 244-245 = printed book pages 222-223, PATHOLOGY — NEOPLASIA: Oncogenic microbes + Serum tumor markers on 222; Cancer testing + Important immunohistochemical stains + P-glycoprotein on 223). pdfimages reports ZERO raster images on both pages — pure tables and text.
Questions:
1) PAGE 222: Confirm the Oncogenic microbes table geometry — 8 rows (EBV; HBV,HCV; HHV-8; HPV usually types 16,18; H pylori; HTLV-1; Liver fluke Clonorchis sinensis; Schistosoma haematobium) with their associated cancers. Does the HHV-8 row really print Kaposi ("Ka∞si") sarcoma with an infinity symbol inside the quote marks? Any other odd glyphs?
2) PAGE 222: The Serum tumor markers table (MARKER / IMPORTANT ASSOCIATIONS / NOTES, 12 rows). Read the NOTES column for: Calcitonin (is it 'Calci2nin.' with a numeral 2?), CEA, LDH, PSA. Specifically: does the note 'Can be used as an indicator of tumor burden.' belong to the LDH row, and does the PSA row's note read 'Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis.'? Which rows have EMPTY notes cells?
3) PAGE 222: Confirm the rule paragraph under the table: 'Tumor markers should not be used as the 1° tool for cancer diagnosis or screening...' — quote it fully.
4) PAGE 223: Confirm the Cancer testing block — 5 rows (Tumor mutational burden; Microsatellite instability testing; PD-L1 expression patterns; Homologous recombination deficiency testing; Liquid biopsy) with their descriptions. Is it a two-column table (test | description)?
5) PAGE 223: Confirm the Important immunohistochemical stains table — header row STAIn / TArGeT / TUmOrS IDenTIfIeD and all 10 rows (Chromogranin and synaptophysin; Cytokeratin; Desmin; GFAP; Neurofilament; PSA; PECAM-1/CD-31; S-100; TRAP; Vimentin) with targets and tumors.
6) PAGE 223: Confirm the P-glycoprotein paragraph (ATP-dependent efflux pump, MDR1, pumps out chemotherapeutic agents → resistance over time).
7) Any margin notes, mnemonics, or sidebar text on either page (left/right margins)? Quote verbatim if present.
8) Confirm both pages have NO photographs, micrographs, or figures of any kind — only text and tables.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both pages now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
