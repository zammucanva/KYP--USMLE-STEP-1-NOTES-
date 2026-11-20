import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 15. Source: pdf 260 / book 238 — FULL page, no
// shared-page split (Pharmacology — Autonomic Drugs: "Autonomic drugs" —
// the section opener). The page carries TWO printed intro blocks + ONE
// page-dominating FOUR-PANEL VECTOR SYNOPTIC FIGURE (the synapse targets
// overview). [1] The α2 sentence — "Release of norepinephrine from a
// sympathetic nerve ending is modulated by NE itself, acting on
// presynaptic α2-autoreceptors → negative feedback." [2] The amphetamine
// paragraph — "Amphetamines use the NE transporter (NET) to enter the
// presynaptic terminal, where they utilize the vesicular monoamine
// transporter (VMAT) to enter neurosecretory vesicles. This displaces NE
// from the vesicles. Once NE reaches a concentration threshold within the
// presynaptic terminal, the action of NET is reversed, and NE is expelled
// into the synaptic cleft, contributing to the characteristics and
// effects of ↑ NE observed in patients taking amphetamines." [3] The
// figure: CHOLINERGIC (Choline + Acetyl-CoA → ChAT → ACh; Botulinum
// toxin ⊣ release; Ca2+; AChE → Choline + Acetate; AChE inhibitors eg,
// Donepezil; M1 M2 M3 under Cholinoreceptors), NORADRENERGIC (Tyrosine →
// DOPA → Dopamine → NE via VMAT; Tetrabenazine ⊣ VMAT; Releasemodulating
// receptors bracket = AT II ⊕ + α2 ⊖ with the Negative feedback loop;
// Amphetamine, Ephedrine ⊕ release; NET + Reuptake blocked by
// Amphetamine/SNRIs/Cocaine/TCAs/MDMA; Diffusion, metabolism; α and β
// Adrenoreceptors), SEROTONERGIC (Tryptophan → 5-Hydroxytryptophan →
// 5-HT; SERT + Reuptake blocked by Amphetamine/SNRIs/Cocaine/SSRIs; 5-HT
// receptor), DOPAMINERGIC (Tyrosine → L-DOPA → Dopamine; DAT + Reuptake
// blocked by Amphetamine/Methylphenidate/Cocaine; Dopamine receptor).
// CENSUS (this session, VLM AVAILABLE — unlike the ph6–ph10 batch):
// pdfimages = ZERO raster images on pdf 260 (CONFIRMED, not assumed) —
// the figure is pure vector line art; four VLM passes (glm-4.6v at 120
// DPI full page, 200 DPI full page, plus two targeted 200 DPI crops of
// the top panels) confirm: no photographs, everything flat-color line
// art, NO margin notes or mnemonics anywhere on the page, and a 2×2
// panel arrangement (cholinergic top-left, noradrenergic top-right,
// dopaminergic bottom-left, serotonergic bottom-right) — saved to
// .usmle-pipeline-cache/staging-ph15/vlm-census.txt. ADJUDICATIONS
// (documented, VLM 200 DPI): (a) the "Releasemodulating receptors"
// bracket belongs to the NORADRENERGIC panel and groups exactly AT II
// (⊕) and α2 (⊖) on the presynaptic membrane — the cholinergic panel
// prints NO presynaptic receptor; (b) M1/M2/M3 sit on the POSTSYNAPTIC
// membrane only, under the one-word label "Cholinoreceptors"; (c) the
// noradrenergic chain prints "DOPA" (no L- prefix) while the
// dopaminergic chain prints "L-DOPA" — both carried verbatim; (d) Ca2+
// channels print ONLY on the cholinergic and noradrenergic terminals;
// (e) the text layer prefixes the → and ↑ glyphs with 0x8E/0x8F
// mapping artifacts and splits the diagonal AXON TERMINAL watermark
// into fragments (TE, L, AX, ON, IN A, RM, AXO, NT, ER, M, MI, AL, NA)
// — text-layer artifacts, documented, not source typos; (f) the
// amphetamine reverse-transport is NOT drawn as an arrow in the source
// figure — it is the printed paragraph, so the redraw renders it as the
// noradrenergic panel's annotated step strip; (g) the source's small
// publisher logo (lower right of the serotonergic panel) is not
// reproduced. The registry visual (AutonomicSynapseMap in
// visuals/pharm-p15.tsx, visualId autonomic-synapse-map) is an ORIGINAL
// KYP REDRAW: the source's 2×2 layout is re-laid-out as four vertical
// panels (cholinergic | noradrenergic | serotonergic | dopaminergic)
// with every printed label, drug anchor, and arrow direction preserved.

export const autonomicDrugsSynapse: KypUsMLENote = {
  id: "autonomic-drugs-synapse",
  title: "Autonomic Drugs: Synapse Targets & Overview",
  subtitle:
    "The master map every autonomic drug hangs on — four synapses (cholinergic, noradrenergic, serotonergic, dopaminergic), each with its synthesis chain, its vesicle pump (VMAT), its membrane pump (NET, SERT, DAT), its cleft clearance, and its postsynaptic receptors. Two printed rules govern the whole page: norepinephrine release is modulated by NE itself acting on presynaptic α2-autoreceptors → negative feedback; and amphetamines enter via NET, pack into vesicles via VMAT, displace NE, and once cytoplasmic NE crosses a threshold, NET reverses and expels NE into the cleft (↑ NE). Learn where each drug's arrow lands and the entire chapter becomes a lookup table.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 238–238 (Pharmacology — Autonomic Drugs: Autonomic drugs; the four-panel synapse figure — CHOLINERGIC, NORADRENERGIC, SEROTONERGIC, DOPAMINERGIC; the α2-autoreceptor negative-feedback sentence; the amphetamine NET/VMAT reverse-transport paragraph)",
  tags: [
    "autonomic drugs",
    "autonomic pharmacology",
    "synapse",
    "presynaptic terminal",
    "α2 autoreceptor",
    "negative feedback",
    "norepinephrine",
    "NET",
    "VMAT",
    "amphetamine",
    "reverse transport",
    "tetrabenazine",
    "cocaine",
    "donepezil",
    "botulinum toxin",
    "ChAT",
    "AChE",
    "SERT",
    "DAT",
    "SSRIs",
    "SNRIs",
    "TCAs",
    "MDMA",
    "methylphenidate",
    "ephedrine",
    "serotonin",
    "dopamine",
    "acetylcholine",
    "reuptake",
    "release-modulating receptors",
  ],
  core: {
    what:
      "One page, four synapses, every entry point. The CHOLINERGIC panel: Choline + Acetyl-CoA are joined by ChAT into ACh, which is stored in vesicles, released (Ca2+-dependent), split by AChE back into Choline and Acetate, and received by M1, M2, M3 under the label Cholinoreceptors — with Botulinum toxin as the printed inhibitor (blocks release) and AChE inhibitors (eg, Donepezil) as the printed stimulant. The NORADRENERGIC panel: Tyrosine → DOPA → Dopamine in the cytoplasm, then Dopamine enters the vesicle through VMAT and becomes NE; release is modulated by two presynaptic receptors bracketed as Releasemodulating receptors — AT II (facilitates) and α2 (NE itself, negative feedback); the cleft is cleared by NET (Reuptake) plus Diffusion, metabolism; postsynaptically, α and β Adrenoreceptors. The SEROTONERGIC panel: Tryptophan → 5-Hydroxytryptophan → 5-HT, cleared by SERT, received by the 5-HT receptor. The DOPAMINERGIC panel: Tyrosine → L-DOPA → Dopamine, cleared by DAT, received by the Dopamine receptor. Every drug banner on the figure is an anchor into one of these steps.",
    why:
      "This is the organizational spine of autonomic pharmacology: every drug class in the following pages — cholinomimetics, muscarinic antagonists, sympathomimetics, sympatholytics, and the psychiatric pharmacology that borrows the same pumps — lands on one of the targets printed here. The page also carries the two mechanism sentences the exam quotes verbatim in spirit: the α2 autoreceptor rule (release of norepinephrine from a sympathetic nerve ending is modulated by NE itself → negative feedback — the reason α2 agonists suppress sympathetic outflow) and the amphetamine reversal (in by NET, packed by VMAT, displaced NE, threshold, NET reversed → NE expelled into the cleft — the reason amphetamines produce ↑ NE effects). Tetrabenazine and the pump blockers (cocaine, TCAs, SNRIs, SSRIs, MDMA, methylphenidate) are all printed with their exact anchors, so a 'where does this drug act' question is answered by pointing at one glyph on this map.",
    keyIdea:
      "Read every synapse-drug question through five moves. MOVE 1 — NAME THE PANEL: which transmitter system (cholinergic, noradrenergic, serotonergic, dopaminergic)? MOVE 2 — NAME THE COMPARTMENT: synthesis enzyme (ChAT), vesicular pump (VMAT), release machinery, release-modulating receptor (AT II, α2), membrane pump (NET, SERT, DAT), cleft enzyme (AChE), or postsynaptic receptor (Cholinoreceptors, Adrenoreceptors, 5-HT receptor, Dopamine receptor). MOVE 3 — NAME THE DIRECTION: block or mimic. MOVE 4 — APPLY THE LEDGER: block the MEMBRANE pump → cleft transmitter RISES; block the VESICLE pump → releasable transmitter FALLS; inhibit the CLEFT enzyme → the transmitter SURVIVES; block RELEASE → nothing leaves the terminal; open the AUTORECEPTOR → release FALLS. MOVE 5 — CHECK THE PRINTED EXCEPTIONS: only the noradrenergic panel prints release-modulating receptors and the amphetamine reversal; only the cholinergic panel clears by enzyme (AChE, not a pump); the serotonergic and dopaminergic panels print no Ca2+ channel and no inhibitor banner.",
  },
  mechanisms: [
    {
      id: "alpha2-autoreceptor-feedback-map",
      title:
        "The α2 autoreceptor loop: NE polices its own release (negative feedback)",
      context:
        "The printed intro sentence + the noradrenergic panel's Releasemodulating receptors bracket (book 238)",
      flow: {
        nodes: [
          {
            id: "ap",
            label: "ACTION POTENTIAL HITS THE TERMINAL",
            sublabel:
              "Input — depolarization opens the Ca2+ channel; Ca2+ entry (the green ⊕ in the figure) triggers vesicle fusion at the active zone.",
            variant: "input",
          },
          {
            id: "release",
            label: "NE RELEASE INTO THE SYNAPTIC CLEFT",
            sublabel:
              "Process — the docked vesicle fuses and NE spills into the cleft: the signal the terminal exists to send.",
            variant: "process",
          },
          {
            id: "cleft-ne",
            label: "NE IN THE CLEFT",
            sublabel:
              "Process — released NE diffuses; some reaches the postsynaptic receptors, some finds its way back to the terminal's own presynaptic receptor, and the rest is cleared by NET reuptake (plus Diffusion, metabolism).",
            variant: "process",
          },
          {
            id: "a2",
            label: "PRESYNAPTIC α2-AUTORECEPTOR (⊖)",
            sublabel:
              "Inhibitory node — NE itself, acting on presynaptic α2-autoreceptors: the receptor sits ON the releasing terminal, bracketed with AT II under the printed label 'Releasemodulating receptors'.",
            variant: "inhibit",
          },
          {
            id: "at2",
            label: "AT II RECEPTOR (⊕)",
            sublabel:
              "Modulator — the other release-modulating receptor: angiotensin II receptor activation carries a green ⊕ pointing at the release machinery — facilitation of release, the gas pedal to α2's brake.",
            variant: "target",
          },
          {
            id: "postsyn",
            label: "POSTSYNAPTIC α + β ADRENORECEPTORS",
            sublabel:
              "Output — the signal itself: what the released NE was for (the printed postsynaptic row, under the label Adrenoreceptors).",
            variant: "output",
          },
          {
            id: "feedback",
            label: "↓ FURTHER NE RELEASE — NEGATIVE FEEDBACK",
            sublabel:
              "Output — the loop closes: each quantum of NE released dampens the next, keeping the signal proportionate — the printed rule, and the handle α2-active drugs use to shut the tap.",
            variant: "output",
          },
        ],
        edges: [
          { from: "ap", to: "release", label: "Ca2+-triggered fusion" },
          { from: "release", to: "cleft-ne", label: "NE enters the cleft" },
          {
            from: "cleft-ne",
            to: "a2",
            label: "NE binds its own autoreceptor",
          },
          {
            from: "a2",
            to: "release",
            label: "negative feedback",
            type: "inhibit",
          },
          { from: "at2", to: "release", label: "⊕ facilitates release" },
          {
            from: "cleft-ne",
            to: "postsyn",
            label: "the signal reaches α + β",
          },
          {
            from: "release",
            to: "feedback",
            label: "the loop the figure labels 'Negative feedback'",
          },
        ],
      },
    },
    {
      id: "amphetamine-reverse-transport-map",
      title:
        "The amphetamine reversal: in by NET, packed by VMAT, out in reverse",
      context:
        "The printed amphetamine paragraph (book 238) — the mechanism behind the ↑ NE observed in patients taking amphetamines",
      flow: {
        nodes: [
          {
            id: "amph",
            label: "AMPHETAMINE REACHES THE NORADRENERGIC SYNAPSE",
            sublabel:
              "Input — amphetamine arrives at the synaptic cleft of a sympathetic nerve ending (the figure anchors it on two banners: the Amphetamine, Ephedrine stimulant box at the release machinery, and the NET-blocker list).",
            variant: "input",
          },
          {
            id: "enter",
            label: "ENTRY THROUGH NET",
            sublabel:
              "Process — amphetamines use the NE transporter (NET) to enter the presynaptic terminal: a ride inward on the very pump that normally clears NE from the cleft.",
            variant: "process",
          },
          {
            id: "vmat",
            label: "PACKAGING THROUGH VMAT",
            sublabel:
              "Process — inside the terminal, they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles — the same vesicle pump tetrabenazine blocks.",
            variant: "process",
          },
          {
            id: "displace",
            label: "NE DISPLACED FROM THE VESICLES",
            sublabel:
              "Process — amphetamine displaces NE from the vesicles: storage collapses and NE spills into the terminal's cytoplasm.",
            variant: "process",
          },
          {
            id: "threshold",
            label: "CYTOPLASMIC NE CROSSES THE CONCENTRATION THRESHOLD",
            sublabel:
              "Process — once NE reaches a concentration threshold within the presynaptic terminal, the cell can no longer contain the gradient.",
            variant: "process",
          },
          {
            id: "reverse",
            label: "NET'S ACTION IS REVERSED",
            sublabel:
              "Process — the membrane pump runs backward: instead of clearing NE, it expels it (reverse transport through NET).",
            variant: "process",
          },
          {
            id: "expel",
            label: "NE EXPELLED INTO THE SYNAPTIC CLEFT",
            sublabel:
              "Output — NE is expelled into the synaptic cleft from the inside, on top of whatever release the action potential triggers.",
            variant: "output",
          },
          {
            id: "up-ne",
            label: "↑ NE — THE AMPHETAMINE PHENOTYPE",
            sublabel:
              "Output — contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines: sympathomimetic drive from a transporter running in reverse.",
            variant: "output",
          },
        ],
        edges: [
          { from: "amph", to: "enter", label: "substrate of the inward pump" },
          { from: "enter", to: "vmat", label: "cytoplasm → vesicle" },
          { from: "vmat", to: "displace", label: "displacement" },
          { from: "displace", to: "threshold", label: "cytoplasmic NE rises" },
          {
            from: "threshold",
            to: "reverse",
            label: "threshold crossed → pump flips",
          },
          { from: "reverse", to: "expel", label: "reverse transport" },
          { from: "expel", to: "up-ne", label: "cleft NE rises" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "autonomic-synapse-map",
      title: "The four-synapse map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the four-panel synapse figure (book 238), re-laid-out as four vertical panels. CHOLINERGIC: Choline + Acetyl-CoA → ChAT → ACh, vesicle loading, the Ca2+ channel with its ⊕ to the release site, Botulinum toxin's red ⊖ terminating on the release machinery, AChE splitting ACh into Choline + Acetate, the Cholinergic stimulant banner (AChE inhibitors eg, Donepezil) with its red ⊖ onto AChE, and the postsynaptic M1 M2 M3 row under Cholinoreceptors. NORADRENERGIC: Tyrosine → DOPA → Dopamine in the cytoplasm, Dopamine → NE crossing the vesicle membrane via VMAT, Tetrabenazine's ⊖ on VMAT, the Releasemodulating receptors bracket (AT II ⊕, α2 ⊖) with the dashed Negative-feedback curve from the cleft NE back to α2, Amphetamine + Ephedrine's ⊕ on the release machinery, NET with its cleft→terminal Reuptake arrow blocked by the Amphetamine/SNRIs/Cocaine/TCAs/MDMA banner, Diffusion + metabolism leaving the cleft, the postsynaptic α and β row under Adrenoreceptors, and the printed amphetamine paragraph rendered as a four-step strip. SEROTONERGIC: Tryptophan → 5-Hydroxytryptophan → 5-HT, SERT reuptake blocked by Amphetamine/SNRIs/Cocaine/SSRIs, the 5-HT receptor. DOPAMINERGIC: Tyrosine → L-DOPA → Dopamine, DAT reuptake blocked by Amphetamine/Methylphenidate/Cocaine, the Dopamine receptor. Each panel carries its printed class banner(s) and an at-this-synapse exam note.",
      notice:
        "Census: pdfimages = ZERO raster images on pdf 260 (CONFIRMED — the source figure is pure vector line art); four VLM passes (glm-4.6v, 120 + 200 DPI, including targeted per-panel crops) confirm no photographs and NO margin mnemonics anywhere on the page. ORIGINAL KYP REDRAW: the source's 2×2 arrangement (cholinergic/noradrenergic top, dopaminergic/serotonergic bottom) is re-laid-out as four vertical panels per the production spec; every printed label, drug anchor, and arrow direction is preserved as adjudicated on the 200 DPI render — including the verbatim spellings 'Releasemodulating receptors' (one word), 'DOPA' (noradrenergic) vs 'L-DOPA' (dopaminergic), and the two Ca2+ channels printing only on the cholinergic and noradrenergic terminals. The publisher's logo is not reproduced.",
    },
    {
      kind: "table",
      title:
        "Book 238 — the two printed intro paragraphs, carried verbatim (every printed word)",
      intro:
        "The page opens with exactly two text blocks before the figure — the autoreceptor rule and the amphetamine mechanism, quoted exactly as printed.",
      columns: ["PRINTED PARAGRAPH — book 238 (verbatim)", "WHAT IT TEACHES"],
      rows: [
        [
          "Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.",
          "The autoreceptor rule: the transmitter regulates its own release. The α2 receptor sits ON the releasing terminal (presynaptic), and its activation is the brake pedal of NE release — printed as the first sentence of the entire Autonomic drugs section.",
        ],
        [
          "Amphetamines use the NE transporter (NET) to enter the presynaptic terminal, where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles. This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed, and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.",
          "The reverse-transport mechanism in four steps: entry via NET → packaging via VMAT → displacement of NE and threshold → NET reversed, NE expelled. The same paragraph explains why amphetamines appear on BOTH noradrenergic stimulant banners of the figure (at the release machinery and at NET).",
        ],
      ],
      caption:
        "Two sentences of regulation (α2 negative feedback) and four steps of augmentation (the amphetamine reversal) — the yin and yang of presynaptic pharmacology, both printed before the figure they annotate.",
    },
    {
      kind: "table",
      title:
        "Book 238 — the four panels' printed labels, carried verbatim (text-layer physical order; interleave documented)",
      intro:
        "The figure's labels interleave in the PDF text layer (side-by-side panels share lines, and the diagonal AXON TERMINAL watermark splits into fragments). Every label is carried verbatim below, in the text layer's physical order, with the panel each belongs to adjudicated on the 200 DPI VLM render.",
      columns: [
        "PRINTED LABELS — VERBATIM (physical order)",
        "PANEL (VLM-adjudicated)",
        "ROLE IN THE FIGURE",
      ],
      rows: [
        [
          "CHOLINERGIC · NORADRENERGIC",
          "the top row",
          "The two top panel titles (the text layer draws them before any panel content).",
        ],
        [
          "ChAT · ACh",
          "cholinergic",
          "The synthesis enzyme on the Choline + Acetyl-CoA → ACh arrow, and the transmitter it builds.",
        ],
        [
          "TE · L · AX · ON · IN A · DOPA · ACh · Ca2+",
          "cholinergic + noradrenergic (interleaved)",
          "The physical-order cluster: AXON TERMINAL watermark fragments share lines with Botulinum toxin's panel; 'DOPA' is the noradrenergic synthesis chip (printed WITHOUT the L- prefix — the dopaminergic panel prints 'L-DOPA'); 'ACh' the cholinergic transmitter; 'Ca2+' the cholinergic channel.",
        ],
        [
          "Botulinum toxin",
          "cholinergic",
          "The Cholinergic inhibitor banner's drug — its red ⊖ terminates on the release/fusion machinery, not on synthesis.",
        ],
        [
          "Releasemodulating receptors (printed as one word, 'Releasemodulating' / 'receptors')",
          "noradrenergic",
          "The bracket grouping exactly two presynaptic receptors: AT II (green ⊕ to the release machinery) and α2 (red ⊖ — the negative-feedback arm).",
        ],
        [
          "Vesicular monoamine transporter (VMAT) inhibitor · Tetrabenazine",
          "noradrenergic",
          "The VMAT-inhibitor banner — its two halves print 150 lines apart in the text layer (lines 47–50 and line 202), an interleave quirk documented in the manifest; the red ⊖ terminates on the VMAT transporter in the vesicle membrane.",
        ],
        [
          "Amphetamine, Ephedrine",
          "noradrenergic",
          "The first Noradrenergic stimulant banner — its ⊕ terminates on the release machinery (promotes release).",
        ],
        [
          "Tyrosine · Choline · + · Acetyl-CoA · VMAT · AT II · NE · α2 · Noradrenergic stimulant · Negative feedback · Choline · Acetate",
          "noradrenergic + cholinergic (interleaved)",
          "The physical-order cluster spanning both top panels: the noradrenergic synthesis start (Tyrosine) beside the cholinergic substrates (Choline + Acetyl-CoA); the vesicle pump (VMAT), the two release modulators (AT II, α2) with NE and the Negative feedback label; the second 'Noradrenergic stimulant' title; and the cholinergic breakdown products (Choline, Acetate).",
        ],
        [
          "AChE · M1 · M2 · M3 · AChE inhibitors eg, Donepezil · POSTSYNAPTIC NEURON · β · α · Adrenoreceptors",
          "cholinergic + noradrenergic",
          "The cleft enzyme (AChE), the cholinergic postsynaptic row (M1 M2 M3 under Cholinoreceptors), the Cholinergic stimulant banner (AChE inhibitors eg, Donepezil), and the noradrenergic postsynaptic row (α and β under Adrenoreceptors).",
        ],
        [
          "SEROTONERGIC · Tryptophan · L-DOPA · 5-Hydroxytryptophan · Dopamine · 5-HT · NA · L · Tyrosine",
          "serotonergic + dopaminergic (interleaved)",
          "The bottom row's physical-order cluster: the serotonergic chain (Tryptophan → 5-Hydroxytryptophan → 5-HT) interleaved with the dopaminergic chain (Tyrosine → L-DOPA → Dopamine) — note 'L-DOPA' prints WITH the L- prefix here.",
        ],
        [
          "AXO · NT · ER · M · AXO · NT · ER · MI · AL · Reuptake · Diffusion, metabolism · POSTSYNAPTIC NEURON",
          "all four panels",
          "More AXON TERMINAL watermark fragments, the Reuptake and Diffusion, metabolism cleft labels, and the postsynaptic watermark.",
        ],
        [
          "DOPAMINERGIC · Amphetamine, SNRIs, Cocaine, TCAs, MDMA · NET · Cholinergic stimulant · Cholinoreceptors · 5-HT · Dopamine · Dopaminergic stimulant · Serotonergic stimulant · Amphetamine, Methylphenidate, Cocaine · DAT",
          "noradrenergic + dopaminergic + serotonergic + cholinergic (interleaved)",
          "The NET-blocker banner (Amphetamine, SNRIs, Cocaine, TCAs, MDMA — ⊖ on NET), the dopaminergic panel title and its DAT-blocker banner (Amphetamine, Methylphenidate, Cocaine), the serotonergic stimulant title, and the cholinergic class-banner titles.",
        ],
        [
          "Amphetamine, SNRIs, Cocaine, SSRIs · SERT · Reuptake · Dopamine receptor · Tetrabenazine · Ca2+",
          "serotonergic + dopaminergic + noradrenergic",
          "The SERT-blocker banner (⊖ on SERT), the dopaminergic postsynaptic receptor label, and — drawn late in the content stream — tetrabenazine's second half and the noradrenergic Ca2+ channel.",
        ],
        [
          "FAS1_2026_05-Pharmacology.indd 238 · 12/19/25 8:07 AM",
          "page footer",
          "The indd print slug and timestamp — page identity (book 238). Note the quirk: the slug prints BETWEEN the figure's late-drawn labels in the text layer (after the POSTSYNAPTIC fragments, before the SERT cluster).",
        ],
      ],
      caption:
        "Every label above is quoted from the actual text layer in physical order; the panel attribution is the VLM 200 DPI adjudication. Verbatim spellings preserved: 'Releasemodulating receptors' (one word), 'DOPA' vs 'L-DOPA', 'Adrenoreceptors', 'Cholinoreceptors', 'Diffusion, metabolism'.",
    },
    {
      kind: "steps",
      title: "Reading any synapse-drug question in five moves",
      intro:
        "The whole four-panel figure distilled into an ordered decision path — PANEL, COMPARTMENT, DIRECTION, LEDGER, EXCEPTIONS.",
      steps: [
        {
          label: "NAME THE PANEL — which transmitter system?",
          detail:
            "Cholinergic (ACh), noradrenergic (NE), serotonergic (5-HT), or dopaminergic (dopamine). The panel fixes the synthesis chain, the pumps, and the postsynaptic receptors you will choose among.",
        },
        {
          label: "NAME THE COMPARTMENT — where on the synapse?",
          detail:
            "Synthesis enzyme (ChAT) · vesicular pump (VMAT) · release machinery · release-modulating receptors (AT II, α2 — noradrenergic only) · membrane pump (NET, SERT, DAT) · cleft enzyme (AChE — cholinergic only) · postsynaptic receptors (Cholinoreceptors M1/M2/M3, Adrenoreceptors α/β, 5-HT receptor, Dopamine receptor).",
        },
        {
          label: "NAME THE DIRECTION — block or mimic?",
          detail:
            "Each printed drug either blocks its anchor (the red ⊖ arrows: tetrabenazine on VMAT, the pump blockers on NET/SERT/DAT, donepezil on AChE, botulinum on release) or promotes it (the green ⊕ arrows: amphetamine/ephedrine on release, AT II on release, Ca2+ on fusion).",
        },
        {
          label: "APPLY THE LEDGER — predict the cleft concentration",
          detail:
            "Block the MEMBRANE pump → cleft transmitter RISES (amphetamine, SNRIs, cocaine, TCAs, MDMA on NET; amphetamine, SNRIs, cocaine, SSRIs on SERT; amphetamine, methylphenidate, cocaine on DAT). Block the VESICLE pump → releasable transmitter FALLS (tetrabenazine on VMAT). Inhibit the CLEFT enzyme → the transmitter SURVIVES (donepezil on AChE). Block RELEASE → nothing leaves the terminal (botulinum toxin). Open the AUTORECEPTOR → release FALLS (NE itself on presynaptic α2 → negative feedback).",
        },
        {
          label: "CHECK THE PRINTED EXCEPTIONS",
          detail:
            "Only the noradrenergic panel prints release-modulating receptors (AT II ⊕, α2 ⊖) and carries the amphetamine reversal. Only the cholinergic panel clears its transmitter by enzyme (AChE → Choline + Acetate) instead of a membrane pump. The serotonergic and dopaminergic panels print no Ca2+ channel and no inhibitor banner. And the two catecholamine chains spell their middle chip differently: DOPA (noradrenergic) vs L-DOPA (dopaminergic).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The directionality ledger — which way every arrow runs",
      body:
        "The exam tests THIS page by flipping arrow directions. Memorize the ledger: NET/SERT/DAT blockade RAISES cleft transmitter (reuptake is the exit — cocaine, TCAs, SNRIs, SSRIs, MDMA, methylphenidate all print as ⊖ on a membrane pump, classified as stimulant banners because the synapse is stimulated). VMAT blockade LOWERS releasable transmitter (storage is the reserve — tetrabenazine's ⊖ lands on the vesicle pump, so the terminal runs empty: the ONE stimulant-panel drug that depletes). AChE inhibition RAISES cleft ACh (breakdown is the cholinergic exit — donepezil's banner is a Cholinergic stimulant whose arrow is a red ⊖ on the enzyme: inhibiting the destroyer stimulates the synapse). Botulinum blockade of release EMPTIES the signal entirely. And α2 activation — NE itself, the printed negative feedback — LOWERS release. Two drugs, one direction each, make the cleanest discriminations: tetrabenazine (vesicle, ↓) vs cocaine (membrane, ↑).",
    },
  ],
  drugs: [
    {
      drug: "Amphetamine",
      klass: "Sympathomimetic (indirect-acting)",
      target: "NET (+ VMAT) at the noradrenergic terminal",
      mechanism:
        "Enters the presynaptic terminal through NET, uses VMAT to enter neurosecretory vesicles, displaces NE; once cytoplasmic NE crosses the concentration threshold, NET's action is reversed and NE is expelled into the synaptic cleft",
      effect: "↑ NE in the synaptic cleft (↑ NE effects observed in patients taking amphetamines)",
      uses: "ADHD, narcolepsy (stimulant use disorder when abused)",
      adverse:
        "Sympathomimetic excess: tachycardia, hypertension, insomnia, appetite loss; abuse and dependence",
      clue: "The only printed drug that makes a transporter run backward — 'the action of NET is reversed'.",
    },
    {
      drug: "Ephedrine",
      klass: "Sympathomimetic (indirect-acting)",
      target: "Noradrenergic release machinery",
      mechanism:
        "Promotes NE release from the presynaptic terminal (the printed ⊕ banner: Noradrenergic stimulant — Amphetamine, Ephedrine)",
      effect: "↑ NE release → sympathomimetic",
      uses: "Decongestant, hypotension (historically; heavily restricted)",
      adverse: "Hypertension, tachycardia, insomnia",
      clue: "Printed beside amphetamine on the ⊕ release banner — the two indirect sympathomimetics.",
    },
    {
      drug: "Tetrabenazine",
      klass: "VMAT inhibitor (monoamine depleter)",
      target: "VMAT — the vesicular monoamine transporter",
      mechanism:
        "Blocks VMAT, so monoamines cannot be packaged into neurosecretory vesicles; vesicular stores are depleted and less transmitter is released per action potential",
      effect: "Depleted vesicular NE/dopamine → reduced monoamine transmission",
      uses: "Tardive dyskinesia, chorea (Huntington disease)",
      adverse: "Depression, sedation, parkinsonism, orthostatic hypotension (monoamine depletion)",
      clue: "The printed 'Vesicular monoamine transporter (VMAT) inhibitor' banner — the vesicle-pump blocker, the opposite direction of the NET blockers.",
    },
    {
      drug: "Cocaine",
      klass: "Reuptake inhibitor (indirect sympathomimetic)",
      target: "NET (also SERT and DAT — printed on all three pump banners)",
      mechanism:
        "Blocks the membrane reuptake transporters; transmitter stays in the cleft (the printed ⊖ banner: Amphetamine, SNRIs, Cocaine, TCAs, MDMA at NET; Amphetamine, SNRIs, Cocaine, SSRIs at SERT; Amphetamine, Methylphenidate, Cocaine at DAT)",
      effect: "↑ cleft NE (and dopamine — the basis of its abuse liability)",
      uses: "Local anesthetic (clinical use); stimulant use disorder when abused",
      adverse: "Hypertension, arrhythmia, vasospasm, myocardial infarction; euphoria → craving",
      clue: "Rides every membrane pump on the figure — NET, SERT, and DAT.",
    },
    {
      drug: "Donepezil",
      klass: "AChE inhibitor (indirect-acting cholinomimetic)",
      target: "AChE in the cholinergic synaptic cleft",
      mechanism:
        "Inhibits AChE, the enzyme that splits ACh into Choline + Acetate, so ACh survives longer in the cleft (the printed banner: Cholinergic stimulant — AChE inhibitors eg, Donepezil)",
      effect: "↑ cleft ACh at cholinergic synapses (including the cholinergic-sympathetic sweat glands)",
      uses: "Alzheimer disease (symptomatic)",
      adverse: "Cholinergic excess: nausea, diarrhea, salivation, bradycardia; central effects",
      clue: "A stimulant banner carrying a red ⊖ — inhibiting the enzyme that destroys ACh stimulates the synapse.",
    },
    {
      drug: "Botulinum toxin",
      klass: "Cholinergic release blocker",
      target: "The release/fusion machinery of the cholinergic axon terminal",
      mechanism:
        "Blocks ACh release from the presynaptic terminal (the printed banner: Cholinergic inhibitor — Botulinum toxin; its red ⊖ terminates on the release machinery)",
      effect: "No ACh leaves the terminal — flaccid paralysis at cholinergic junctions, autonomic cholinergic failure",
      uses: "Focal dystonias, cosmetic denervation, achalasia, hyperhidrosis",
      adverse: "Spread beyond the injection site: dysphagia, respiratory weakness",
      clue: "The ONLY printed inhibitor banner in the cholinergic panel — it blocks release itself, not synthesis or breakdown.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old man with severe tardive dyskinesia is started on tetrabenazine; weeks later his movements improve but he develops fatigue, orthostatic dizziness, and a depressed mood.",
        discriminator:
          "VMAT inhibition depletes vesicular monoamine stores — the printed 'Vesicular monoamine transporter (VMAT) inhibitor' banner",
        concept: "Block the vesicle pump → the terminal runs empty",
        answer:
          "Tetrabenazine's red ⊖ lands on VMAT, the transporter that packages monoamines into neurosecretory vesicles. With storage blocked, vesicular NE (and dopamine) is depleted, so each action potential releases less transmitter — hypotension, sedation, and depressed mood are the systemic face of depleted monoamines, the exact OPPOSITE direction of the NET blockers that raise cleft NE.",
      },
      {
        stem: "A 26-year-old man brought to the emergency department after recreational cocaine use is tachycardic and hypertensive with mydriasis; urine drug screen is positive.",
        discriminator:
          "NET blockade keeps NE in the cleft — the printed banner 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' (⊖ NET)",
        concept: "Block the membrane pump → cleft transmitter rises",
        answer:
          "Cocaine blocks the membrane reuptake transporters — NET (and SERT and DAT; it prints on all three banners). Reuptake is the cleft's exit, so blocking it raises cleft NE at every sympathetic neuroeffector junction: tachycardia, hypertension, mydriasis. The banner reads 'Noradrenergic stimulant' because the SYNAPSE is stimulated even though the arrow is a red ⊖ on the pump.",
      },
      {
        stem: "A 79-year-old woman with Alzheimer disease on a cholinesterase inhibitor develops nausea, diarrhea, and bradycardia; she reports sweating during meals.",
        discriminator:
          "AChE inhibition lets ACh survive in the cleft — the printed 'Cholinergic stimulant — AChE inhibitors eg, Donepezil' banner",
        concept: "Inhibit the cleft enzyme → the transmitter survives",
        answer:
          "Donepezil's banner is the page's instructive paradox: a STIMULANT banner whose arrow is a red ⊖ — but the ⊖ lands on AChE, the enzyme that splits ACh into Choline + Acetate. Inhibiting the destroyer stimulates the synapse: ACh accumulates at every cholinergic junction, producing the cholinergic-excess pattern (nausea, diarrhea, bradycardia — and sweating, because the sweat gland's sympathetic fiber is cholinergic).",
      },
      {
        stem: "A college student taking prescribed amphetamines is asked on rounds why her sympathetic tone is elevated; the attending points at the figure and asks which transporter's action is reversed.",
        discriminator:
          "'The action of NET is reversed, and NE is expelled into the synaptic cleft' — the printed paragraph",
        concept: "Reverse transport through NET (after VMAT-mediated displacement)",
        answer:
          "The printed amphetamine mechanism runs in four steps: entry through NET → packaging through VMAT into neurosecretory vesicles → NE displaced from the vesicles until the cytoplasmic concentration threshold is crossed → NET's action is REVERSED and NE is expelled into the cleft. The answer is NET — the same pump that normally clears NE runs backward, which is why amphetamines print on both noradrenergic stimulant banners (at release and at the pump).",
      },
    ],
    traps: [
      {
        a: "Tetrabenazine (VMAT inhibitor)",
        b: "Cocaine (NET blocker)",
        whyConfused:
          "Both are noradrenergic-panel drugs whose banners carry ⊖ arrows onto a transporter",
        keyDifference:
          "Tetrabenazine blocks the VESICLE pump (VMAT) → vesicular stores deplete → LESS transmitter released; cocaine blocks the MEMBRANE pump (NET) → reuptake fails → MORE transmitter in the cleft",
        clue:
          "Depletion picture (hypotension, depression, parkinsonism) = VMAT; augmentation picture (tachycardia, hypertension, mydriasis) = NET blockade",
      },
      {
        a: "Presynaptic α2-autoreceptor",
        b: "Postsynaptic α and β Adrenoreceptors",
        whyConfused:
          "Both print α in the noradrenergic panel, and both respond to NE",
        keyDifference:
          "The α2-autoreceptor sits ON the releasing terminal under the 'Releasemodulating receptors' bracket — NE itself acts on it → negative feedback ↓ release; the postsynaptic α and β Adrenoreceptors carry the signal to the target organ",
        clue:
          "'Release of norepinephrine... is modulated by NE itself, acting on presynaptic α2-autoreceptors' = the autoreceptor; end-organ response = the postsynaptic row",
      },
      {
        a: "'Stimulant' banner labels",
        b: "The red ⊖ arrows those banners carry",
        whyConfused:
          "The figure prints 'Noradrenergic stimulant / Serotonergic stimulant / Cholinergic stimulant' over drug boxes whose arrows are inhibitory ⊖ marks",
        keyDifference:
          "The banner names the NET EFFECT on the synapse (stimulated), while the ⊖ names the molecular action on the anchor: NET/SERT/DAT blockers ⊖ the pump, donepezil ⊖ AChE — in every case inhibiting a REMOVAL mechanism raises cleft transmitter",
        clue:
          "Ask what the ⊖ lands ON: a removal mechanism (pump, enzyme) → stimulant; the release machinery (botulinum) → inhibitor; VMAT (storage) → depleter",
      },
      {
        a: "NET (membrane transporter)",
        b: "VMAT (vesicular transporter)",
        whyConfused:
          "Both are called transporters, both move amine transmitters, and amphetamine uses BOTH in its printed mechanism",
        keyDifference:
          "NET sits on the presynaptic MEMBRANE and clears NE from the cleft (reuptake, cleft → terminal; blockable by amphetamine, SNRIs, cocaine, TCAs, MDMA; reversible by amphetamine); VMAT sits on the VESICLE membrane and packages cytoplasmic amines into neurosecretory vesicles (blockable by tetrabenazine)",
        clue:
          "Direction of the drug effect: pump blockade at the membrane ↑ cleft transmitter; pump blockade at the vesicle ↓ releasable transmitter",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any question that names an autonomic or psychiatric drug and asks WHERE it acts",
        differentiator:
          "Sort by the seven compartments in order: synthesis enzyme (ChAT) → vesicular pump (VMAT) → release machinery → release-modulating receptors (AT II, α2) → membrane pump (NET, SERT, DAT) → cleft enzyme (AChE) → postsynaptic receptors (Cholinoreceptors, Adrenoreceptors, 5-HT receptor, Dopamine receptor). The drug's printed banner is its address.",
        correctPath:
          "Name the panel, then the compartment, then the direction — three questions, one unambiguous answer for every drug on this page",
      },
      {
        lookAlike:
          "Two noradrenergic drugs with OPPOSITE hemodynamic pictures (one depletes, one augments)",
        differentiator:
          "Ask which pump: VESICLE pump blockade (tetrabenazine on VMAT) empties the terminal → depletion picture (hypotension, depression, parkinsonism); MEMBRANE pump blockade (cocaine/TCAs/SNRIs/MDMA on NET) floods the cleft → augmentation picture (tachycardia, hypertension, mydriasis)",
        correctPath:
          "Vesicle = deplete, membrane = flood — the direction of the hemodynamic change tells you which pump before any molecular detail does",
      },
      {
        lookAlike:
          "A transporter is named in the stem (NET, DAT, SERT, VMAT) with a drug-effect question",
        differentiator:
          "NET, DAT, and SERT are MEMBRANE pumps whose blockade raises cleft transmitter (and whose names decode their transmitter: NE, dopamine, 5-HT); VMAT is the VESICLE pump shared by all amine terminals, whose blockade depletes stores; ChAT and AChE are not transporters at all — ChAT BUILDS ACh (synthesis enzyme) and AChE DESTROYS it (cleft enzyme)",
        correctPath:
          "Classify the named protein first (membrane pump / vesicle pump / synthesis enzyme / cleft enzyme / receptor), then apply the ledger — never answer from the drug's name alone",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old man with severe, disfiguring tardive dyskinesia refractory to standard agents is started on tetrabenazine. Over six weeks his involuntary movements improve markedly, but he returns with fatigue, orthostatic lightheadedness, a 6-kg weight gain, and a persistently depressed mood. His blood pressure is 96/60 mm Hg standing with a 15-mmHg postural drop, and his pulse does not rise appropriately. A psychiatry consult reviewing the synapse-pharmacology figure asks the team to state exactly where the drug acts at the noradrenergic synapse to explain this picture.",
      question:
        "Which mechanism at the noradrenergic synapse best explains this patient's systemic adverse effects?",
      options: [
        {
          label:
            "Blockade of the vesicular monoamine transporter (VMAT) — monoamines cannot be packaged into neurosecretory vesicles, vesicular stores are depleted, and less transmitter is released per action potential",
          text: "The vesicle pump is the reserve — block it and the terminal runs empty.",
          correct: true,
          why:
            "Correct, and the printed figure says so exactly: the banner reads 'Vesicular monoamine transporter (VMAT) inhibitor' with tetrabenazine, and its red ⊖ terminates on the VMAT transporter in the vesicle membrane. With packaging blocked, cytoplasmic monoamines are degraded and vesicular NE (and dopamine) stores deplete — so each action potential releases less transmitter. Fatigue, orthostatic hypotension without compensatory tachycardia, and depressed mood are the systemic face of depleted monoamines; the movement benefit comes from the same depletion in the basal ganglia.",
        },
        {
          label:
            "Blockade of the NE transporter (NET) on the presynaptic membrane — reuptake is inhibited, so norepinephrine accumulates in the synaptic cleft",
          text: "Block the exit pump and the cleft floods.",
          why:
            "Real mechanism — wrong drug and wrong direction. NET blockade is the printed banner 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA,' and its consequence is AUGMENTATION: more cleft NE at every sympathetic junction, producing tachycardia, hypertension, and mydriasis. This patient shows the opposite picture (orthostatic hypotension, blunted compensatory tachycardia, depression). Confusing the two printed ⊖ arrows — vesicle pump vs membrane pump — is precisely the discrimination this figure teaches.",
        },
        {
          label:
            "Activation of presynaptic α2-autoreceptors — mimicking NE's own negative feedback and shutting down release",
          text: "The negative-feedback brake, pressed pharmacologically.",
          why:
            "Real printed mechanism — the page's first sentence: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' An α2-ACTIVE drug would indeed reduce NE release and could produce this hemodynamic picture — but tetrabenazine does not act at the autoreceptor; its printed anchor is VMAT under the Releasemodulating receptors bracket's neighbor. The distractor swaps the printed drug's anchor for the printed rule's receptor.",
        },
        {
          label:
            "Reverse transport through NET after vesicular displacement — cytoplasmic NE crosses a concentration threshold and is expelled into the synaptic cleft",
          text: "In by NET, packed by VMAT, out in reverse.",
          why:
            "This is the printed AMPHETAMINE paragraph, verbatim in its steps — and it produces ↑ NE effects (the sympathomimetic phenotype), the opposite of this patient's depletion picture. It is tempting because it also involves both NET and VMAT, but the direction is wrong: amphetamine EXPLOITS VMAT to displace NE and then floods the cleft through reversed NET, while tetrabenazine BLOCKS VMAT and empties the vesicles. Same two transporters, opposite directions — the cleanest mechanism discrimination on the page.",
        },
      ],
      reasoning:
        "The stem hands you a drug whose printed banner is 'Vesicular monoamine transporter (VMAT) inhibitor — Tetrabenazine' and asks for the mechanism behind a DEPLETION picture (hypotension, blunted reflexes, depression). Route each option through the figure's anchors: the VMAT ⊖ (option 1, correct) empties vesicular stores → less release; the NET ⊖ (option 2) is the cocaine/TCA/SNRI banner → cleft NE RISES — an augmentation picture that contradicts the vitals; the α2 autoreceptor (option 3) is the printed negative-feedback rule — a real brake, but not this drug's anchor; and the NET-reversal (option 4) is the amphetamine paragraph — ↑ NE, again opposite. Two options deplete and two augment; between the two depleters, the discriminator is the anchor (vesicle pump vs autoreceptor), and tetrabenazine's ⊖ lands on VMAT.",
    },
  },
  mnemonics: [
    {
      code: "THREE MEMBRANE PUMPS, ONE VESICLE PUMP",
      meaning:
        "The figure's transporter architecture: THREE pumps sit on the presynaptic MEMBRANE, one per amine — NET (norepinephrine), SERT (5-HT), DAT (dopamine) — and they run one way, cleft → terminal (the printed Reuptake arrows); blocking any of them FLOODS the cleft. ONE pump sits on the VESICLE membrane — VMAT — shared by all the amine terminals, packaging cytoplasmic transmitter into neurosecretory vesicles; blocking it (tetrabenazine) EMPTIES the terminal.",
      memorizes:
        "Which transporter sits where, and which direction its blockade pushes the synapse",
      whenToUse:
        "Any question naming NET, SERT, DAT, or VMAT, or asking whether a reuptake inhibitor vs a storage depleter raises or lowers transmitter availability",
      clinical:
        "Membrane-pump blockers (SSRIs, SNRIs, TCAs, cocaine, MDMA, methylphenidate) all RAISE cleft transmitter; the vesicle-pump blocker (tetrabenazine) LOWERS releasable stores — depletion is its therapeutic action in tardive dyskinesia and its adverse action on mood and blood pressure.",
    },
    {
      code: "AMPHETAMINE AND COCAINE RIDE EVERY PUMP",
      meaning:
        "The printed blocker lists decode by their two universal riders: amphetamine and cocaine appear on ALL THREE membrane-pump banners (NET: Amphetamine, SNRIs, Cocaine, TCAs, MDMA · SERT: Amphetamine, SNRIs, Cocaine, SSRIs · DAT: Amphetamine, Methylphenidate, Cocaine). The rest sort by their initials: SNRI = Serotonin-Norepinephrine Reuptake Inhibitor (NET + SERT); SSRI = Serotonin-Specific (SERT only); MDMA prints only on NET; TCAs print only on NET; Methylphenidate prints only on DAT.",
      memorizes:
        "All three printed drug lists and which pump each drug blocks",
      whenToUse:
        "Any 'which transporter does this drug block' question, or any list-matching question built on the three banners",
      clinical:
        "Cocaine's triple-pump blockade (NET + DAT + SERT) explains both its sympathetic toxicity and its reinforcing euphoria (DAT); methylphenidate's DAT predominance is the ADHD handle; the SSRI/SNRI split is literally the initials.",
    },
    {
      code: "IN BY NET, PACKED BY VMAT, OUT IN REVERSE",
      meaning:
        "The printed amphetamine paragraph in three steps: IN BY NET (amphetamines use the NE transporter to enter the presynaptic terminal) → PACKED BY VMAT (they utilize the vesicular monoamine transporter to enter neurosecretory vesicles, displacing NE) → OUT IN REVERSE (once cytoplasmic NE reaches the concentration threshold, the action of NET is reversed and NE is expelled into the synaptic cleft → ↑ NE).",
      memorizes:
        "The four-step amphetamine mechanism and the transporter that reverses",
      whenToUse:
        "Any question about amphetamine's mechanism, indirect sympathomimetics, or 'which transporter runs backward'",
      clinical:
        "The ↑ NE observed in patients taking amphetamines — sympathomimetic drive, hypertension, insomnia — comes from a pump running backward, which is also why amphetamine prints on BOTH noradrenergic stimulant banners of the figure (at release and at NET).",
    },
    {
      code: "α2 IS THE BRAKE, AT II IS THE GAS",
      meaning:
        "The printed 'Releasemodulating receptors' bracket holds exactly two presynaptic receptors with opposite signs: α2 — activated by NE ITSELF (the autoreceptor), carrying the red ⊖ back to the release machinery = the BRAKE (negative feedback); AT II — the angiotensin II receptor, carrying the green ⊕ to the release machinery = the GAS (facilitated release). Presynaptic ≠ postsynaptic: the postsynaptic α and β Adrenoreceptors are the signal's destination, not its modulation.",
      memorizes:
        "Which receptors modulate NE release, with which sign, and where they sit",
      whenToUse:
        "Any question about autoreceptors, negative feedback at the synapse, presynaptic modulation, or why α2-active drugs suppress sympathetic outflow",
      clinical:
        "The page's first sentence is the rule: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' Press the brake pharmacologically and sympathetic release falls; the gas pedal (AT II) is why angiotensin II amplifies noradrenergic output.",
    },
  ],
  rapidReview: {
    s30: [
      "Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback",
      "Amphetamines use NET to enter the presynaptic terminal, VMAT to enter neurosecretory vesicles, displace NE, and once NE reaches a concentration threshold the action of NET is reversed — NE is expelled into the synaptic cleft (↑ NE)",
      "Cholinergic synthesis: Choline + Acetyl-CoA → (ChAT) → ACh; AChE splits ACh back into Choline + Acetate",
      "Noradrenergic synthesis: Tyrosine → DOPA → Dopamine (cytoplasm) → NE (inside the vesicle, via VMAT)",
      "Serotonergic synthesis: Tryptophan → 5-Hydroxytryptophan → 5-HT",
      "Dopaminergic synthesis: Tyrosine → L-DOPA → Dopamine",
      "NET blockers (printed): Amphetamine, SNRIs, Cocaine, TCAs, MDMA — SERT blockers: Amphetamine, SNRIs, Cocaine, SSRIs — DAT blockers: Amphetamine, Methylphenidate, Cocaine",
      "Tetrabenazine = the printed Vesicular monoamine transporter (VMAT) inhibitor; Botulinum toxin = the printed Cholinergic inhibitor (blocks release); AChE inhibitors eg, Donepezil = the printed Cholinergic stimulant",
      "The Releasemodulating receptors bracket groups AT II (⊕ facilitates release) and α2 (⊖ — NE itself, negative feedback)",
      "Postsynaptic rows: M1 M2 M3 under Cholinoreceptors · α and β under Adrenoreceptors · 5-HT receptor · Dopamine receptor",
    ],
    m3: [
      "THREE MEMBRANE PUMPS, ONE VESICLE PUMP — NET/SERT/DAT on the membrane (block → cleft rises); VMAT on the vesicle (block → stores deplete)",
      "AMPHETAMINE AND COCAINE RIDE EVERY PUMP — the two universal riders on all three banners; SNRI = NET+SERT, SSRI = SERT, MDMA = NET, TCAs = NET, methylphenidate = DAT",
      "IN BY NET, PACKED BY VMAT, OUT IN REVERSE — the amphetamine mechanism's three moves, ending in ↑ NE",
      "α2 IS THE BRAKE, AT II IS THE GAS — the two printed release-modulating receptors and their signs; postsynaptic α/β is the destination, not the modulation",
    ],
    m10: [
      "The page prints exactly two intro blocks before the figure — the α2-autoreceptor sentence and the amphetamine paragraph — and both are quoted verbatim in the note's first table",
      "The figure is a 2×2 grid in the source (cholinergic top-left, noradrenergic top-right, dopaminergic bottom-left, serotonergic bottom-right); the KYP redraw re-lays it out as four vertical panels with every label, anchor, and arrow direction preserved",
      "Verbatim spellings worth their weight: 'Releasemodulating receptors' prints as ONE word; the noradrenergic chain prints 'DOPA' while the dopaminergic chain prints 'L-DOPA'; the postsynaptic labels are 'Cholinoreceptors' and 'Adrenoreceptors'",
      "Ca2+ channels print ONLY on the cholinergic and noradrenergic terminals — the serotonergic and dopaminergic panels print none; the bottom panels also print no inhibitor banner and no release-modulating receptor",
      "The amphetamine reverse-transport is NOT drawn as an arrow in the source figure (VLM-adjudicated) — it is the printed paragraph; the redraw renders it as the noradrenergic panel's four-step strip, labeled as the printed paragraph's mechanism",
      "Census: pdfimages = ZERO raster images on pdf 260 (confirmed, not assumed) — pure vector line art; four VLM passes (glm-4.6v, 120 + 200 DPI with per-panel crops) confirm no photographs and no margin mnemonics anywhere on the page",
      "The text layer interleaves the side-by-side panels' labels, splits the diagonal AXON TERMINAL watermark into fragments (TE, L, AX, ON, IN A, RM, AXO, NT, ER, M, MI, AL, NA), and prints tetrabenazine's banner halves 150 lines apart (lines 47–50 and 202) — all documented in the verbatim label table",
      "The → and ↑ glyphs in the printed text carry 0x8E/0x8F text-layer mapping artifacts immediately before them — stripped by the verification normalizer, documented here",
      "The indd slug 'FAS1_2026_05-Pharmacology.indd 238 / 12/19/25 8:07 AM' prints BETWEEN the figure's late-drawn labels in the text layer (after the POSTSYNAPTIC fragments, before the SERT cluster) — a content-stream quirk, not a visual one",
    ],
  },
  recall: [
    {
      q: "The α2 sentence, verbatim — the rule that governs NE release.",
      a: "Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.",
    },
    {
      q: "The amphetamine mechanism, in the printed four steps.",
      a: "Amphetamines use the NE transporter (NET) to enter the presynaptic terminal; they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles, displacing NE from the vesicles; once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed and NE is expelled into the synaptic cleft — contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.",
    },
    {
      q: "Which transporter's action is reversed by amphetamine, and at what trigger?",
      a: "NET — reversed once NE reaches a concentration threshold within the presynaptic terminal, expelling NE into the synaptic cleft.",
    },
    {
      q: "The two printed release-modulating receptors, their signs, and their common bracket label.",
      a: "AT II (green ⊕ — facilitates release) and α2 (red ⊖ — NE itself, negative feedback), bracketed together under 'Releasemodulating receptors' on the noradrenergic presynaptic membrane.",
    },
    {
      q: "The four synthesis chains, panel by panel.",
      a: "Cholinergic: Choline + Acetyl-CoA → (ChAT) → ACh. Noradrenergic: Tyrosine → DOPA → Dopamine → NE (the Dopamine → NE step crosses the vesicle membrane via VMAT). Serotonergic: Tryptophan → 5-Hydroxytryptophan → 5-HT. Dopaminergic: Tyrosine → L-DOPA → Dopamine.",
    },
    {
      q: "The three printed pump-blocker lists — NET, SERT, DAT.",
      a: "NET: Amphetamine, SNRIs, Cocaine, TCAs, MDMA. SERT: Amphetamine, SNRIs, Cocaine, SSRIs. DAT: Amphetamine, Methylphenidate, Cocaine.",
    },
    {
      q: "The cholinergic cleft: which enzyme clears ACh, into what products, and which printed drug inhibits it?",
      a: "AChE splits ACh into Choline + Acetate; the printed Cholinergic stimulant banner is 'AChE inhibitors eg, Donepezil', whose red ⊖ lands on AChE — inhibiting the destroyer stimulates the synapse.",
    },
    {
      q: "The four postsynaptic receptor rows as printed.",
      a: "Cholinergic: M1, M2, M3 under 'Cholinoreceptors'. Noradrenergic: α and β under 'Adrenoreceptors'. Serotonergic: '5-HT receptor'. Dopaminergic: 'Dopamine receptor'.",
    },
  ],
  related: [
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note: "The wiring figure on book 234 is the neural road map THIS page's synapses sit along: once you know a drug's compartment here (release, pump, enzyme, receptor), the wiring map tells you which fiber — and therefore which organ — you are modulating.",
    },
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The cholinergic panel's postsynaptic row prints M1, M2, M3 under 'Cholinoreceptors' — the receptor families that catch the ACh this page releases are defined on book 235 (NN at ganglia, NM at the NMJ, M1–5 at the end-organs including the cholinergic-sympathetic sweat gland).",
    },
    {
      title: "Adrenergic Receptor Distribution",
      topicId: "adrenergic-receptor-distribution",
      note: "The noradrenergic panel's postsynaptic α and β Adrenoreceptors are the receiving end of this synapse; the tissue-distribution table (book 236) maps which α/β subtype sits on which organ, turning this page's '↑ cleft NE' into a predicted end-organ response.",
    },
    {
      title: "G-Protein Second Messengers",
      topicId: "g-protein-second-messengers",
      note: "Every postsynaptic receptor printed on this page except the nicotinic channel is a GPCR — the M1/M2/M3, α/β, 5-HT, and dopamine receptors all relay through the G-protein → second-messenger machinery mapped on book 237.",
    },
  ],
  crossLinks: [
    {
      subject: "Neuroscience & synaptic physiology (the physiology this pharmacology rides on)",
      connection:
        "Everything printed here is applied synaptic physiology: Ca2+-triggered vesicular fusion (the ⊕ from the Ca2+ channel to the release machinery), reuptake clearance (the NET/SERT/DAT Reuptake arrows), enzymatic clearance (AChE → Choline + Acetate), and autoreceptor feedback (NE itself on presynaptic α2 → negative feedback). The amphetamine paragraph is pharmacology's canonical example of a transporter running in reverse — the exception that proves the pump's directionality.",
    },
    {
      subject: "Psychiatry pharmacology (the pump blockers are the psychiatric armamentarium)",
      connection:
        "The three printed blocker banners ARE the psychiatric pharmacology mechanism list: SSRIs and SNRIs (SERT ± NET — the antidepressants), methylphenidate and amphetamine (DAT ± NET — the ADHD/stimulant class), MDMA (NET — the entactogen), and cocaine (all three pumps — the abused stimulant). This page is where those drugs' mechanisms live; the psychiatry chapter supplies their clinical contexts.",
    },
    {
      subject: "Biochemistry of amine synthesis (four chains, three amino-acid precursors)",
      connection:
        "The four panels print four build chains from dietary precursors: choline + acetyl-CoA (joined by ChAT into ACh), tyrosine (DOPA → dopamine → NE, the catecholamine road), and tryptophan (5-Hydroxytryptophan → 5-HT). Note the figure's restraint: it prints the chains and names only ChAT and VMAT — the intermediate enzyme names (the catecholamine-synthesis enzymes beyond this page) are not printed here, and this note deliberately preserves that restraint.",
    },
  ],
};
