import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p11-235.png');
  const png2 = readFileSync('/home/z/my-project/scripts/p-pages/p11-236.png');
  const desc = `These are pages 235 and 236 of First Aid for the USMLE Step 1 2026 (pdf 235-236 = printed book pages 213-214, PATHOLOGY — INFLAMMATION: Granulomatous inflammation on 213, Scar formation on 214). pdfimages reports: on p235 ONE small 87x49 'sep' image at 300dpi (possibly a small photograph A of a caseating granuloma beside 'central necrosis A'); on p236 TWO cmyk JPEGs (~427x340 and ~428x340 at 150dpi), lettered A (hypertrophic scar) and B (keloid scar).
Questions:
1) PAGE 213: Describe photograph A (the histology beside 'Caseating: associated with central necrosis A') — is it an H&E micrograph of a caseating granuloma with central amorphous necrosis? Where does it sit and how large is it? Also confirm the HISTOLOGY block (epithelioid cells = activated macrophages with abundant pink cytoplasm; surrounded by lymphocytes and multinucleated giant cells from fusion of several activated macrophages; caseating = central necrosis, infectious [TB, fungal]; noncaseating = no necrosis, noninfectious [sarcoidosis, Crohn]).
2) PAGE 213: Describe the MECHANISM figure topology: is it line art with cells (APC, T cell, Th1 cell, activated macrophage, giant cell, granuloma) connected by labeled arrows (IL-12, CD40L/CD40, TCR/MHC II, IFN-γ, TNF) plus Lymphocyte, Fibroblast, Epithelioid cell labels? Is it vector art (not photographs)?
3) PAGE 213: Confirm the two clinical rules: anti-TNF therapy breaks down sequestering granulomas → disseminated disease (test for latent TB first); hypercalcemia from ↑ 1α-hydroxylase in activated macrophages → ↑ vitamin D activity.
4) PAGE 213: Confirm the ETIOLOGIES table: Infectious (bacterial — Mycobacteria TB/leprosy, Bartonella henselae stellate necrotizing granulomas, Listeria monocytogenes granulomatosis infantiseptica, Treponema pallidum 3° syphilis; fungal — endemic mycoses/histoplasmosis; parasitic — schistosomiasis; catalase-positive organisms in chronic granulomatous disease) vs Noninfectious (immune-mediated — sarcoidosis, Crohn, 1° biliary cholangitis, subacute de Quervain granulomatous thyroiditis; vasculitis — GPA, EGPA, giant cell temporal arteritis, Takayasu; foreign bodies — berylliosis, talcosis, hypersensitivity pneumonitis).
5) PAGE 214: Describe photographs A and B (the scars): A = a hypertrophic scar (a raised red scar confined to a wound area, eg on a shoulder or chest)? B = a keloid (a larger lobulated clawlike growth extending beyond the wound, eg on an earlobe or neck)? Where do they sit?
6) PAGE 214: Confirm the scar formation block (70%-80% of tensile strength regained at 3 months; little thereafter; excess TGF-β → hypertrophic and keloid scars) and the 5-row comparison table (COLLAGEN SYNTHESIS, COLLAGEN ORGANIZATION, EXTENT OF SCAR, RECURRENCE, PREDISPOSITION).
7) Any margin notes or mnemonics on either page? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both pages now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
