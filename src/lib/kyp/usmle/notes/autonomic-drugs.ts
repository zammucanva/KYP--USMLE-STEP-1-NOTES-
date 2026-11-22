import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH17 — the SYNTHESIS-MAP PAGE: the two
// intro rules and the four-lane cholinergic/noradrenergic flowchart).
// Source: pdf 260 / book 238, the WHOLE page under the standing
// 'PHARMACOLOGY—AUTONOMIC DRUGS' banner — the section header 'Autonomic
// drugs' is the ONLY section header on the page. The section prints TWO
// elements: (1) TWO INTRO RULES (prose, carried verbatim in the note's
// first table block) — 'Release of norepinephrine from a sympathetic
// nerve ending is modulated by NE itself, acting on presynaptic
// α2-autoreceptors → negative feedback.' and the amphetamine rule
// (amphetamines use NET to enter the presynaptic terminal, VMAT to
// enter neurosecretory vesicles, displace NE from the vesicles; once NE
// reaches a concentration threshold, NET's action is reversed and NE is
// expelled into the synaptic cleft → ↑ NE in patients taking
// amphetamines); (2) ONE LARGE FOUR-LANE VECTOR FLOWCHART — CHOLINERGIC
// (Choline + Acetyl-CoA →[ChAT]→ ACh, Ca2+-triggered release,
// Cholinoreceptors M1 M2 M3 on the POSTSYNAPTIC NEURON, AChE → Choline
// + Acetate) vs NORADRENERGIC (Tyrosine → DOPA → Dopamine → NE, VMAT
// vesicle, Release-modulating receptors α2 + AT II with the Negative
// feedback arrow, NET Reuptake, Adrenoreceptors α β, Diffusion/
// metabolism), with the DOPAMINERGIC (Tyrosine → L-DOPA → Dopamine →
// DAT) and SEROTONERGIC (Tryptophan → 5-Hydroxytryptophan → 5-HT →
// SERT) lanes beneath, and the six drug-anchor lists (Botulinum toxin;
// AChE inhibitors eg, Donepezil; Amphetamine, Ephedrine; Amphetamine,
// SNRIs, Cocaine, TCAs, MDMA; Amphetamine, Methylphenidate, Cocaine;
// Amphetamine, SNRIs, Cocaine, SSRIs). RASTER CENSUS: ZERO raster
// images on the page (the flowchart is VECTOR LINE ART, COPYRIGHTED,
// never reproduced) — conveyed as ONE original KYP two-lane synthesis
// map (AutonomicDrugsSynthesisMap).
// PAGE-EXTENT FINDING (checked): the diagram does NOT extend to pdf
// 261 — pdf 261 (book 239) opens the SEPARATE pending
// 'Cholinomimetic agents' section; the whole section is on pdf 260
// alone (sourcePages = [260] only).
// VLM RENDER CHECK (150 dpi): NO enzyme labels print on the
// Tyrosine→DOPA or Dopamine→NE arrows (ChAT is the ONLY printed
// enzyme) and there is NO epinephrine/PNMT/adrenal branch — the
// noradrenergic lane ENDS at NE. The enzyme-name layer (tyrosine
// hydroxylase the rate-limiting step, dopa decarboxylase, dopamine
// β-hydroxylase, PNMT) and the adrenal Epi branch (the book's OWN limb
// on book 234's overview, the completed PH11 topic) are KYP
// EXTENSIONS, flagged wherever they appear.
// TEXT-LAYER ARTIFACTS pinned: two-layer artwork prints ACh, Tyrosine,
// Dopamine, 5-HT, Reuptake, and 'Noradrenergic stimulant' multiple
// times; the rotated 'TERMINAL AXON'/'AXONAL TERMINAL' captions
// scatter as fragments; 'Release-modulating receptors' prints
// hyphen-less ('Releasemodulating receptors') and 'POSTSYNAPTIC N
// EURO' splits mid-word — every diagram label quoted in physical order
// as contiguous line ranges.
// BOUNDARIES: pdf 259 (book 237) carries the COMPLETED PH16
// 'g-protein-linked-second-messengers' (EXCLUDED — but PH16 pinned THIS
// section as its next-page boundary marker, and this page's M1/M2/M3 +
// α/β plates resolve into PH16's class letters: the reciprocal anchor
// is pinned); pdf 261 (book 239) opens the PENDING 'Cholinomimetic
// agents' section (EXCLUDED). PH15 (book 236) carries the α/β tissue
// addresses; PH11 (book 234) carries the adrenal Epi limb and the
// organ plates — all cross-linked.
// KYP EXTENSIONS (flagged wherever they appear): the FIVE SLOTS
// reading (MAKE, PACK, RELEASE, LISTEN, TAKE BACK — the drug-target
// grid); the TROJAN HORSE frame for amphetamine; the enzyme-name layer
// (none printed); the adrenal Epi branch (book 234's own limb); the
// α2-agonist/antagonist + AT II drug layer (clonidine, guanfacine,
// yohimbine — none printed); the NET/DAT/SERT transporter-family
// frame; and the clearance-asymmetry frame (ACh has a BREAKER, NE has
// a PUMP).

export const autonomicDrugs: KypUsMLENote = {
  id: "autonomic-drugs",
  title: "Autonomic Drugs",
  subtitle:
    "The autonomic synapse as two assembly lines — the CHOLINERGIC lane (Choline + Acetyl-CoA →[ChAT]→ ACh → Ca2+-triggered release → Cholinoreceptors M1 M2 M3 → AChE → Choline + Acetate) and the NORADRENERGIC lane (Tyrosine → DOPA → Dopamine → NE → VMAT vesicle → α2/AT II-modulated release → Adrenoreceptors α β → NET reuptake, with Diffusion/metabolism as the other way out) — under two governing rules the page prints as prose: NE release is modulated by presynaptic α2-autoreceptor negative feedback, and amphetamine is the Trojan horse (enters by NET, raids the vesicle via VMAT, then reverses NET so NE is expelled into the cleft). Every drug class on the page is an anchor pinned to one slot: botulinum toxin at release, donepezil at the AChE breaker, tetrabenazine at the VMAT vesicle, amphetamine/ephedrine at the store, and cocaine/TCAs/SNRIs/MDMA at the NET pump.",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, and g-protein-linked-second-messengers before it — the Autonomic drugs section occupies the WHOLE book-238 page, the synthesis map the whole receptor block converges on: PH11 drew the wiring, PH12 the ACh families, PH15 the α/β addresses, PH16 the class letters, and THIS page draws the synapse itself, where every one of those receptors gets its transmitter)",
  pilotCategory:
    "The synthesis page's complete architecture — the two intro rules (the α2-autoreceptor negative-feedback loop; the amphetamine NET→VMAT→displacement→threshold→NET-reversal→expulsion sequence) plus the four-lane flowchart (CHOLINERGIC vs NORADRENERGIC main lanes with the DOPAMINERGIC and SEROTONERGIC axonal lanes beneath), the six drug-anchor lists (Botulinum toxin; AChE inhibitors eg, Donepezil; Amphetamine, Ephedrine; Vesicular monoamine transporter [VMAT] inhibitor Tetrabenazine; Amphetamine, SNRIs, Cocaine, TCAs, MDMA at NET; Amphetamine, Methylphenidate, Cocaine at DAT; Amphetamine, SNRIs, Cocaine, SSRIs at SERT), the two postsynaptic plates (Cholinoreceptors M1 M2 M3; Adrenoreceptors α β), and the KYP layers that compress them: the five-slots drug-target grid, the Trojan-horse frame, the enzyme-name layer (VLM-verified as NOT printed), and the clearance-asymmetry frame.",
  difficulty: 3,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 238 (Pharmacology — Autonomic Drugs: the section occupies the whole page and prints two elements, both carried here — the two intro rules, verbatim: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' and the amphetamine rule ('Amphetamines use the NE transporter (NET) to enter the presynaptic terminal, where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles. This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed, and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.'), and the four-lane neurotransmission flowchart — CHOLINERGIC: Choline + Acetyl-CoA →(ChAT)→ ACh, Ca2+-triggered release, Cholinoreceptors M1 M2 M3 on the postsynaptic neuron, AChE → Choline + Acetate, with the anchors Botulinum toxin (cholinergic inhibitor, at release) and AChE inhibitors eg, Donepezil (cholinergic stimulant, at the breaker); NORADRENERGIC: Tyrosine → DOPA → Dopamine → NE, VMAT, Vesicular monoamine transporter (VMAT) inhibitor Tetrabenazine, Noradrenergic stimulant Amphetamine/Ephedrine at the vesicle, Release-modulating receptors α2 + AT II with the Negative feedback arrow, NET Reuptake with Amphetamine, SNRIs, Cocaine, TCAs, MDMA at the pump, Adrenoreceptors α β, and Diffusion/metabolism; DOPAMINERGIC: Tyrosine → L-DOPA → Dopamine → DAT with Amphetamine, Methylphenidate, Cocaine; SEROTONERGIC: Tryptophan → 5-Hydroxytryptophan → 5-HT → SERT with Amphetamine, SNRIs, Cocaine, SSRIs — the flowchart is vector line art with zero rasters, never reproduced, conveyed as one original KYP two-lane synthesis map; VLM render check: no enzyme labels print on the noradrenergic arrows (ChAT is the only printed enzyme) and there is no epinephrine/adrenal branch — the noradrenergic lane ends at NE, so the enzyme names (tyrosine hydroxylase, dopa decarboxylase, dopamine β-hydroxylase, PNMT), the adrenal Epi limb (the book's own print on book 234, the autonomic-receptors topic), and every agonist/antagonist drug name beyond the printed anchor lists (clonidine, guanfacine, yohimbine) are KYP extensions; pdf 259 carries the completed g-protein-linked-second-messengers topic (EXCLUDED) and pdf 261 opens the separate pending Cholinomimetic agents section — this section ends on pdf 260)",
  tags: [
    "autonomic drugs",
    "acetylcholine synthesis",
    "choline acetyltransferase",
    "ChAT",
    "acetylcholinesterase",
    "AChE",
    "AChE inhibitors",
    "donepezil",
    "botulinum toxin",
    "catecholamine synthesis",
    "tyrosine",
    "DOPA",
    "dopamine",
    "norepinephrine",
    "NE",
    "tyrosine hydroxylase",
    "dopamine beta-hydroxylase",
    "VMAT",
    "vesicular monoamine transporter",
    "tetrabenazine",
    "reserpine",
    "NET",
    "norepinephrine transporter",
    "reuptake inhibitors",
    "DAT",
    "SERT",
    "amphetamine",
    "ephedrine",
    "methylphenidate",
    "cocaine",
    "TCAs",
    "SNRIs",
    "SSRIs",
    "MDMA",
    "alpha2 autoreceptor",
    "presynaptic autoreceptor",
    "negative feedback",
    "angiotensin II",
    "clonidine",
    "muscarinic receptors",
    "M1 M2 M3",
    "adrenergic receptors",
    "alpha beta receptors",
    "synaptic cleft",
    "cholinergic stimulant",
    "cholinergic inhibitor",
    "noradrenergic stimulant",
    "neurotransmission",
    "pharmacology",
  ],
  core: {
    what:
      "TWO RULES, TWO MAIN LANES, FIVE SLOTS. The page opens with the two rules that govern every autonomic drug question: RULE 1 — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback' (the synapse throttles itself); RULE 2 — amphetamines 'use the NE transporter (NET) to enter the presynaptic terminal', 'utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles', 'displace NE from the vesicles', and once NE 'reaches a concentration threshold within the presynaptic terminal', 'the action of NET is reversed, and NE is expelled into the synaptic cleft' (the Trojan-horse sequence). Then the flowchart lays the two assembly lines side by side. CHOLINERGIC: 'Choline' + 'Acetyl-CoA' →(the enzyme 'ChAT')→ 'ACh' → vesicle → Ca2+-triggered release → the cleft → 'Cholinoreceptors' 'M1 M2 M3' on the 'POSTSYNAPTIC NEURON' → 'AChE' breaks ACh into 'Choline' + 'Acetate'. NORADRENERGIC: 'Tyrosine' → 'DOPA' → 'Dopamine' → 'NE' → the VMAT-packed vesicle → Ca2+-triggered release (modulated by the presynaptic 'Release-modulating receptors' — the 'α2' autoreceptor with its 'Negative feedback' arrow, and 'AT II') → the cleft → 'Adrenoreceptors' 'α' 'β' → clearance by 'NET' 'Reuptake' or 'Diffusion, metabolism'. Beneath both, the DOPAMINERGIC lane ('Tyrosine' → 'L-DOPA' → 'Dopamine' → 'DAT') and the SEROTONERGIC lane ('Tryptophan' → '5-Hydroxytryptophan' → '5-HT' → 'SERT') repeat the same architecture with their own pumps.",
    why:
      "WHY A SYNTHESIS MAP CAPS THE RECEPTOR BLOCK. Six pages of receptor tables preceded this one — divisions, transmitter families, tissue addresses, G-protein letters — and every one of those receptors is inert until a transmitter reaches it; this page is where the transmitter is MADE, PACKED, RELEASED, LISTENED TO, and TAKEN BACK. WHY DRUG TARGETS CLUSTER AT THE SLOTS: the flowchart's six anchor lists are not a drug list, they are a TARGET map — 'Botulinum toxin' (the cholinergic inhibitor) blocks the RELEASE step; 'AChE inhibitors eg, Donepezil' (the cholinergic stimulant) block the BREAKER so ACh accumulates; the 'Vesicular monoamine transporter (VMAT) inhibitor' 'Tetrabenazine' empties the vesicle; 'Amphetamine, Ephedrine' (the noradrenergic stimulant at the store) displace vesicular NE; and 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' (the noradrenergic stimulant at the pump) act at NET reuptake. WHY THE TWO CLEARANCE ROUTES DIFFER (the page's deepest asymmetry): ACh is destroyed IN the cleft ('AChE' → 'Choline' + 'Acetate') while NE is reclaimed FROM the cleft ('NET' 'Reuptake', with 'Diffusion, metabolism' as the overflow) — which is why AChE inhibitors are a whole drug class but there is no 'NE-ase' inhibitor class, only reuptake blockers. WHY THE AUTORECEPTOR RULE LEADS THE PAGE: the α2 loop means the presynaptic terminal is itself a drug target — agonize it (clonidine, KYP anchor) and sympathetic outflow falls; the exam's favorite inversion.",
    keyIdea:
      "Read every autonomic drug through the FIVE SLOTS (KYP compression of the page's own lanes). SLOT 1 — MAKE: cholinergic, Choline + Acetyl-CoA →(ChAT)→ ACh; noradrenergic, Tyrosine → DOPA → Dopamine → NE (no enzyme labels print on this page — KYP layer: tyrosine hydroxylase is the RATE-LIMITING step, dopamine β-hydroxylase is vesicular). SLOT 2 — PACK: VMAT loads the vesicle — tetrabenazine inhibits it; amphetamine enters by it. SLOT 3 — RELEASE: Ca2+ triggers exocytosis — botulinum toxin blocks it (ACh); the α2 autoreceptor brakes it and AT II facilitates it (NE). SLOT 4 — LISTEN: ACh → Cholinoreceptors M1 M2 M3; NE → Adrenoreceptors α β (the postsynaptic plates; their class letters live on book 237, their addresses on book 236). SLOT 5 — TAKE BACK: ACh has a BREAKER (AChE → Choline + Acetate — donepezil blocks it → ↑ ACh); NE has a PUMP (NET — cocaine, TCAs, SNRIs, MDMA block it; amphetamine rides it in and REVERSES it). The one-line rule for the monoamine lanes: BLOCK THE PUMP and the transmitter stays; RIDE THE PUMP BACKWARDS (amphetamine) and the transmitter is expelled.",
  },
  mechanisms: [
    {
      id: "amphetamine-net-vmat-reversal",
      title:
        "The amphetamine mechanism: NET entry → VMAT entry → NE displaced from the vesicles → concentration threshold → NET action reversed → NE expelled into the synaptic cleft — the Trojan-horse sequence, printed as the page's second rule",
      context:
        "The page's second intro rule (book 238), verbatim in order: 'Amphetamines use the NE transporter (NET) to enter the presynaptic terminal, where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles. This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed, and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.' The flowchart's anchors ride the same path (amphetamine appears on the vesicle-side list 'Amphetamine, Ephedrine' AND the NET-side list 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA'). The Trojan-horse naming is a KYP extension; every step is the page's own print.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Amphetamine reaches the noradrenergic synapse (prescription stimulant, decongestant abuse, or illicit use)",
            sublabel:
              "Input — amphetamine is a small amine structurally close enough to NE to fool the terminal's own import machinery. The page prints amphetamine on FOUR of its six anchor lists (the noradrenergic vesicle side 'Amphetamine, Ephedrine'; the NET side 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA'; the DAT side 'Amphetamine, Methylphenidate, Cocaine'; the SERT side 'Amphetamine, SNRIs, Cocaine, SSRIs') — the only drug on the page that touches every monoamine lane.",
            variant: "input",
          },
          {
            id: "net-entry",
            label: "STEP 1 — Amphetamine is transported INTO the presynaptic terminal by NET",
            sublabel:
              "The page's own words: 'Amphetamines use the NE transporter (NET) to enter the presynaptic terminal'. The pump that normally RECLAIMS NE from the cleft (the 'Reuptake' label) is turned into a doorway — the first half of the Trojan-horse frame (KYP): ENTERS BY THE GATE. This is the step cocaine and TCAs merely block (they never pass through), which is why amphetamine's story does not stop here.",
            variant: "process",
          },
          {
            id: "vmat-entry",
            label: "STEP 2 — Amphetamine is transported INTO the neurosecretory vesicles by VMAT",
            sublabel:
              "The page's own words: 'where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles' — the vesicle's own loader (the same transporter the flowchart's 'Vesicular monoamine transporter (VMAT) inhibitor' 'Tetrabenazine' blocks) becomes the second doorway. Trojan-horse frame, second half (KYP): RAIDS THE STORE.",
            variant: "process",
          },
          {
            id: "displacement",
            label: "STEP 3 — Amphetamine displaces NE from the vesicles → cytosolic NE rises to a concentration threshold",
            sublabel:
              "The page's own words: 'This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal'. The vesicle is emptied from the inside — the same depleted-vesicle endpoint tetrabenazine produces, but with a critical difference (the exam's fork): tetrabenazine stops at depletion; amphetamine's story has two more steps.",
            variant: "process",
          },
          {
            id: "net-reversal",
            label: "STEP 4 — The action of NET is REVERSED: the pump now runs inside-out",
            sublabel:
              "The page's own words: 'the action of NET is reversed'. The transporter that imported the amphetamine flips direction and becomes an exporter — Trojan-horse frame, third half (KYP): OPENS THE GATE BACKWARDS. This is the step no reuptake blocker shares: cocaine, TCAs, and SNRIs park on NET and stop traffic; amphetamine converts the pump into a firehose.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — NE is expelled into the synaptic cleft → ↑ NE effects in patients taking amphetamines",
            sublabel:
              "Output — the page's own terminal clause: 'and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.' The cleft NE then does what the flowchart's right lane always does: hits 'Adrenoreceptors' 'α' 'β' on the 'POSTSYNAPTIC NEURON'. The same logic generalizes to the bottom lanes (amphetamine also rides DAT and SERT — the methylphenidate and SSRI lists' shared member), which is why prescription stimulants and MDMA are noradrenergic AND dopaminergic AND serotonergic drugs.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "net-entry", label: "reaches the synapse" },
          { from: "net-entry", to: "vmat-entry", label: "NET ferries it in (the gate)" },
          { from: "vmat-entry", to: "displacement", label: "VMAT loads it into the vesicle (the store)" },
          { from: "displacement", to: "net-reversal", label: "threshold reached" },
          { from: "net-reversal", to: "output", label: "gate runs backwards → NE expelled" },
        ],
      },
    },
    {
      id: "alpha2-autoreceptor-negative-feedback",
      title:
        "The autoreceptor mechanism: released NE spills back onto the presynaptic α2-autoreceptor → NE release is throttled (negative feedback) — with AT II as the printed positive modulator, and the postsynaptic α/β plates downstream",
      context:
        "The page's first intro rule (book 238), verbatim: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' The flowchart prints the same loop as art: the 'Release-modulating receptors' bracket carrying 'α2' (with the 'Negative feedback' arrow) and 'AT II' beside the release site. The clonidine/guanfacine/yohimbine drug layer is KYP (none printed); the α2-Gi coupling is the book-237 page's own (PH16, cross-linked).",
      flow: {
        nodes: [
          {
            id: "input",
            label: "An action potential reaches the noradrenergic terminal → Ca2+ influx → vesicular NE is released into the cleft",
            sublabel:
              "Input — the flowchart's own release step: the 'Ca2+' label at the terminal, exocytosis of the VMAT-packed vesicle. This is the machinery every modulator in this mechanism acts ON.",
            variant: "input",
          },
          {
            id: "spillback",
            label: "Released NE spills back onto the terminal's own presynaptic α2-autoreceptors",
            sublabel:
              "The rule's own clause: 'modulated by NE itself, acting on presynaptic α2-autoreceptors' — the terminal carries receptors for ITS OWN transmitter, facing backward (the flowchart's 'Release-modulating receptors' bracket). The autoreceptor concept: the synapse grades its own output.",
            variant: "process",
          },
          {
            id: "feedback",
            label: "α2 activation → ↓ further NE release — NEGATIVE FEEDBACK (the printed arrow label)",
            sublabel:
              "The rule's terminal clause '→ negative feedback' and the diagram's own arrow label: NE turning itself down. Mechanistic depth (KYP cross-link to book 237): α2 is the Gi-class receptor — the brake on adenylyl cyclase — so the autoreceptor lowers terminal cAMP and throttles the release machinery. More NE in the cleft → less NE released: a thermostat.",
            variant: "process",
          },
          {
            id: "modulators",
            label: "The modulator bracket: AT II facilitates release (the printed co-tenant); drugs push the loop either way (KYP layer)",
            sublabel:
              "The diagram's own bracket carries TWO modulators: 'α2' (negative) and 'AT II' — angiotensin II, the positive arm (KYP reading: AT II facilitates NE release, one more way the RAS raises tone). The drug layer (KYP, none printed): clonidine and guanfacine AGONIZE the α2 autoreceptor (the thermostat cranked down → ↓ sympathetic outflow); yohimbine and α2 blockade REMOVE it (the fire roars).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — synaptic NE is a tuned signal, not a shout: the loop sets gain for every α/β response downstream",
            sublabel:
              "Output — the tuned cleft NE then hits the flowchart's plate: 'Adrenoreceptors' 'α' 'β' on the 'POSTSYNAPTIC NEURON' (and the α2 receptors elsewhere — platelets, the ciliary body — book 237's own α2 row). The exam's use of this loop: any stem where a drug LOWERS sympathetic outflow by an ACTION AT THE TERMINAL (clonidine) or where the loop is bypassed (amphetamine floods past it — the two rules of this page are opposite attacks on the same terminal).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "spillback", label: "NE released into the cleft" },
          { from: "spillback", to: "feedback", label: "binds the presynaptic α2-autoreceptor" },
          { from: "feedback", to: "modulators", label: "the loop grades release" },
          { from: "modulators", to: "output", label: "tuned NE → α/β plates" },
        ],
      },
    },
    {
      id: "two-lane-transmitter-life-cycle",
      title:
        "The two-lane life cycle: CHOLINERGIC (Choline + Acetyl-CoA →[ChAT]→ ACh → release → M1/M2/M3 → AChE → Choline + Acetate) vs NORADRENERGIC (Tyrosine → DOPA → Dopamine → NE → VMAT vesicle → release → α/β → NET reuptake) — the flowchart's two main lanes, slot by slot",
      context:
        "The page's flowchart (book 238), both main lanes' own labels in order. Cholinergic: 'Choline' '+' 'Acetyl-CoA' →(the enzyme 'ChAT')→ 'ACh' → 'Ca2+'-triggered release → 'Cholinoreceptors' 'M1' 'M2' 'M3' on the 'POSTSYNAPTIC NEURON' → 'AChE' → 'Choline' 'Acetate', with the anchors 'Cholinergic inhibitor' ('Botulinum toxin') and 'Cholinergic stimulant' ('AChE inhibitors eg, Donepezil'). Noradrenergic: 'Tyrosine' → 'DOPA' → 'Dopamine' → 'NE' → the 'VMAT' vesicle (with 'Vesicular monoamine transporter (VMAT) inhibitor' ['Tetrabenazine'] and 'Noradrenergic stimulant' ['Amphetamine, Ephedrine']) → 'Ca2+'-triggered release under the 'Releasemodulating receptors' ('α2', 'AT II') → 'Adrenoreceptors' 'α' 'β' on the 'POSTSYNAPTIC NEURON' → 'NET' 'Reuptake' (with 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA') or 'Diffusion, metabolism'. VLM-verified: NO enzyme labels print on the noradrenergic arrows (ChAT is the only printed enzyme); the enzyme-name chips in this mechanism are flagged KYP extensions; the slot names are KYP's.",
      flow: {
        nodes: [
          {
            id: "make-ach",
            label: "CHOLINERGIC SLOT 1 — MAKE: Choline + Acetyl-CoA →(ChAT)→ ACh",
            sublabel:
              "The lane's own substrates and its printed enzyme: 'ChAT' (choline acetyltransferase — the ONLY enzyme name on the whole page) builds ACh in the cytosol. The choline half is reclaimed from the cleft (the lane's own 'Choline' label at the AChE site closes the loop), the acetyl half comes from mitochondrial acetyl-CoA (KYP depth).",
            variant: "input",
          },
          {
            id: "release-ach",
            label: "CHOLINERGIC SLOTS 2–3 — PACK & RELEASE: ACh into the vesicle → Ca2+ influx → exocytosis into the cleft",
            sublabel:
              "The vesicle is loaded and, on the 'Ca2+' signal, empties into the cleft. The lane's first drug anchor sits HERE: 'Cholinergic inhibitor' = 'Botulinum toxin' — proteases the SNARE machinery and blocks ACh RELEASE (KYP depth; the diagram prints the label and the toxin, not the SNARE name). Note what botulinum does NOT touch: synthesis, the receptors, and the breaker all keep working — no ACh leaves the terminal.",
            variant: "process",
          },
          {
            id: "break-ach",
            label: "CHOLINERGIC SLOTS 4–5 — LISTEN & BREAK: ACh → Cholinoreceptors M1 M2 M3; AChE → Choline + Acetate",
            sublabel:
              "The cleft ACh hits the plate ('Cholinoreceptors' 'M1' 'M2' 'M3' on the 'POSTSYNAPTIC NEURON') and is destroyed in the cleft: 'AChE' splits it into 'Choline' + 'Acetate' (choline reclaimed). The lane's second anchor sits HERE: 'Cholinergic stimulant' = 'AChE inhibitors eg, Donepezil' — block the breaker and the SAME ACh signal is amplified (longer, louder). The two cholinergic anchors are the exam's mirror pair: one blocks the signal at its source, one blocks its destruction.",
            variant: "process",
          },
          {
            id: "make-ne",
            label: "NORADRENERGIC SLOT 1 — MAKE: Tyrosine → DOPA → Dopamine → NE (no enzyme labels printed)",
            sublabel:
              "The lane's own chain: 'Tyrosine' → 'DOPA' → 'Dopamine' → 'NE'. VLM render check: the arrows carry NO enzyme names (ChAT is the only printed enzyme on the page) — the enzyme layer is KYP, flagged: tyrosine hydroxylase (the RATE-LIMITING step) → DOPA; dopa decarboxylase → dopamine; dopamine β-hydroxylase (inside the vesicle) → NE; and PNMT (adrenal medulla, cortisol-induced) → epinephrine — the adrenal Epi branch is NOT on this page (book 234's own limb, the PH11 topic): this lane ends at NE.",
            variant: "process",
          },
          {
            id: "pack-release-ne",
            label: "NORADRENERGIC SLOTS 2–3 — PACK & RELEASE: VMAT vesicle; α2/AT II-modulated Ca2+ exocytosis",
            sublabel:
              "The lane's own machinery: 'VMAT' packs dopamine then NE into the neurosecretory vesicle (dopamine β-hydroxylase rides inside — KYP flag), and the 'Ca2+' signal empties it under the 'Release-modulating receptors' ('α2' the autoreceptor with 'Negative feedback'; 'AT II' the facilitator). TWO anchors sit here: 'Vesicular monoamine transporter (VMAT) inhibitor' = 'Tetrabenazine' (empty the store, no expulsion) and 'Noradrenergic stimulant' = 'Amphetamine, Ephedrine' (displace NE from the store — the Trojan-horse sequence's first three steps).",
            variant: "process",
          },
          {
            id: "output",
            label: "NORADRENERGIC SLOTS 4–5 — LISTEN & TAKE BACK: NE → Adrenoreceptors α β; NET reuptake (or Diffusion, metabolism)",
            sublabel:
              "Output — the cleft NE hits the plate ('Adrenoreceptors' 'α' 'β' on the 'POSTSYNAPTIC NEURON') and is RECLAIMED, not broken: 'NET' 'Reuptake' (with the anchor 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' — the reuptake-block class, plus amphetamine the reverser) or lost to 'Diffusion, metabolism'. The asymmetry to carry (KYP frame): ACh HAS A BREAKER, NE HAS A PUMP — which is why the cholinergic drug class inhibits an enzyme (AChE) while the noradrenergic drug class blocks a transporter (NET). The DOPAMINERGIC ('Tyrosine' → 'L-DOPA' → 'Dopamine' → 'DAT'; 'Amphetamine, Methylphenidate, Cocaine') and SEROTONERGIC ('Tryptophan' → '5-Hydroxytryptophan' → '5-HT' → 'SERT'; 'Amphetamine, SNRIs, Cocaine, SSRIs') lanes beneath repeat the noradrenergic architecture pump-for-pump.",
            variant: "output",
          },
        ],
        edges: [
          { from: "make-ach", to: "release-ach", label: "ChAT builds ACh" },
          { from: "release-ach", to: "break-ach", label: "Ca2+ → exocytosis (botulinum blocks here)" },
          { from: "break-ach", to: "make-ne", label: "the left lane ends at Choline + Acetate — cross to the right lane" },
          { from: "make-ne", to: "pack-release-ne", label: "Tyrosine → DOPA → Dopamine → NE" },
          { from: "pack-release-ne", to: "output", label: "VMAT packs; α2/AT II grade release; NET takes back" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "autonomic-drugs-synthesis-map",
      title: "The autonomic drugs synthesis map (an original KYP visual)",
      caption:
        "An original KYP two-lane synthesis map conveying the page's flowchart (book 238): THE CHOLINERGIC LANE (Choline + Acetyl-CoA →[ChAT]→ ACh → vesicle → Ca2+-triggered release → the cleft → Cholinoreceptors M1 M2 M3 on the postsynaptic neuron → AChE → Choline + Acetate, with the anchors Botulinum toxin at release and AChE inhibitors eg, Donepezil at the breaker); THE NORADRENERGIC LANE (Tyrosine → DOPA → Dopamine → NE → the VMAT vesicle [Tetrabenazine inhibits; Amphetamine, Ephedrine displace] → α2/AT II-modulated release with the Negative feedback arrow → the cleft → Adrenoreceptors α β → NET reuptake [Amphetamine, SNRIs, Cocaine, TCAs, MDMA] or Diffusion, metabolism — with the adrenal Epi branch flagged as NOT on this page); THE AXONAL STRIP (DOPAMINERGIC: Tyrosine → L-DOPA → Dopamine → DAT, Amphetamine/Methylphenidate/Cocaine; SEROTONERGIC: Tryptophan → 5-Hydroxytryptophan → 5-HT → SERT, Amphetamine/SNRIs/Cocaine/SSRIs); THE FIVE SLOTS drug digest (MAKE, PACK, RELEASE, LISTEN, TAKE BACK); and the codes + reading-rule footer.",
      notice:
        "Census (pdfimages + text layer + VLM render check): the page's flowchart is VECTOR LINE ART with ZERO raster images — COPYRIGHTED, never reproduced; this visual conveys the two lanes' chains, labels, and drug-anchor lists as an ORIGINAL_KYP_REDRAW (the steps and lists are the book's own; the layout, slot names, and glyphs are KYP's). The two intro rules are carried verbatim in the note's next block. KYP extensions flagged on the map: the five-slots reading (MAKE, PACK, RELEASE, LISTEN, TAKE BACK), the Trojan-horse frame, the enzyme-name layer (tyrosine hydroxylase, dopa decarboxylase, dopamine β-hydroxylase, PNMT — VLM-verified as NOT printed; ChAT is the only printed enzyme), the adrenal Epi branch (the book's own limb on book 234, the PH11 topic — flagged, not drawn as this page's content), and every agonist/antagonist drug name beyond the printed anchor lists (clonidine, guanfacine, yohimbine). EXCLUDED: the completed PH16 section on pdf 259 behind this page, and the pending Cholinomimetic agents section on pdf 261 ahead of it (the diagram does NOT extend to 261 — verified).",
    },
    {
      kind: "table",
      title: "Book 238 — the two intro rules, verbatim",
      intro:
        "The page's first printed element — both paragraphs of prose that open the section, carried whole (every clause verbatim, including the page's own arrow glyph). These two rules govern everything the flowchart draws.",
      columns: [
        "THE RULE (book 238, verbatim)",
        "WHAT IT ESTABLISHES",
      ],
      rows: [
        [
          "Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.",
          "RULE 1 — the autoreceptor loop. The noradrenergic terminal carries receptors for its own transmitter, facing backward: released NE spills onto the presynaptic α2-autoreceptors and throttles further release. The synapse is a thermostat, not a switch — and the thermostat is a drug target (KYP anchors: clonidine and guanfacine agonize it → ↓ sympathetic outflow; yohimbine removes it). The flowchart prints the same loop as art: the 'Release-modulating receptors' bracket with 'α2' (the 'Negative feedback' arrow) and 'AT II' (the facilitator).",
        ],
        [
          "Amphetamines use the NE transporter (NET) to enter the presynaptic terminal, where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles. This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed, and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.",
          "RULE 2 — the Trojan-horse sequence (KYP naming; every step printed). Five printed steps: (1) NET carries amphetamine IN; (2) VMAT carries it INTO the vesicles; (3) NE is displaced from the vesicles and cytosolic NE climbs to a threshold; (4) NET's action is REVERSED — the pump runs inside-out; (5) NE is expelled into the synaptic cleft → the ↑ NE effects of amphetamines. The contrast class rides the same pump without entering: cocaine, TCAs, SNRIs, MDMA (the page's NET-side anchor list) BLOCK reuptake; amphetamine passes through and reverses the pump.",
        ],
      ],
      caption:
        "Two rules, two attacks on the same terminal: rule 1 turns the terminal's own feedback loop into a brake (agonize the autoreceptor and outflow falls); rule 2 turns the terminal's own import machinery into a weapon (ride NET in, raid VMAT, reverse NET out). The first is the clonidine story (KYP drug layer), the second the amphetamine story — and the exam's favorite pair asks you to tell them apart.",
    },
    {
      kind: "table",
      title: "Book 238 — the four-lane flowchart, the diagram's own labels",
      intro:
        "The page's second printed element compressed into one grid: every lane's synthesis chain, drug-anchor lists, pump, and postsynaptic plate, in the diagram's own words (the raw-layer spellings pinned: 'Releasemodulating receptors' prints hyphen-less; 'ChAT' is the only printed enzyme — the noradrenergic arrows carry NO enzyme names, VLM-verified).",
      columns: [
        "THE LANE (the diagram's own chain)",
        "THE DRUG ANCHORS (the diagram's own lists)",
        "THE PLATE + THE PUMP",
      ],
      rows: [
        [
          "CHOLINERGIC — Choline + Acetyl-CoA →(ChAT)→ ACh → vesicle → Ca2+ → release → cleft → AChE → Choline + Acetate (choline reclaimed).",
          "Cholinergic inhibitor: Botulinum toxin (blocks RELEASE). Cholinergic stimulant: AChE inhibitors, eg, Donepezil (blocks the BREAKER → ↑ ACh).",
          "Cholinoreceptors: M1 · M2 · M3 on the POSTSYNAPTIC NEURON. No reuptake pump printed — clearance is enzymatic (AChE), the asymmetry that makes AChE inhibition a drug class.",
        ],
        [
          "NORADRENERGIC — Tyrosine → DOPA → Dopamine → NE → VMAT vesicle → Ca2+ (modulated by Release-modulating receptors: α2 with Negative feedback, AT II) → release → cleft.",
          "Vesicular monoamine transporter (VMAT) inhibitor: Tetrabenazine (empties the store). Noradrenergic stimulant at the store: Amphetamine, Ephedrine (displace NE). Noradrenergic stimulant at the pump: Amphetamine, SNRIs, Cocaine, TCAs, MDMA.",
          "Adrenoreceptors: α · β on the POSTSYNAPTIC NEURON. Clearance: NET Reuptake — or Diffusion, metabolism. The lane ENDS at NE (no Epi branch on this page — VLM-verified).",
        ],
        [
          "DOPAMINERGIC (axonal strip) — Tyrosine → L-DOPA → Dopamine → vesicle → release → cleft.",
          "Dopaminergic stimulant: Amphetamine, Methylphenidate, Cocaine (at DAT).",
          "Dopamine receptor on the POSTSYNAPTIC N EURO. Pump: DAT (Reuptake).",
        ],
        [
          "SEROTONERGIC (axonal strip) — Tryptophan → 5-Hydroxytryptophan → 5-HT → vesicle → release → cleft.",
          "Serotonergic stimulant: Amphetamine, SNRIs, Cocaine, SSRIs (at SERT).",
          "5-HT receptor on the POSTSYNAPTIC N EURO. Pump: SERT (Reuptake).",
        ],
      ],
      caption:
        "Four lanes, one architecture: MAKE → PACK → RELEASE → LISTEN → TAKE BACK (KYP slot names; every label the book's own). The cholinergic lane swaps the final slot — BREAK (AChE) instead of TAKE BACK (NET) — which is why its drug class is an enzyme inhibitor while every monoamine lane's drug class is a transporter blocker. Amphetamine appears on four of the six anchor lists — the only drug on the page that touches every monoamine lane (and the only one that REVERSES a pump).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 9-year-old boy with attention-deficit/hyperactivity disorder is started on a stimulant medication; his parents ask how it works. A pharmacology question asks for the mechanism by which the drug raises norepinephrine (and dopamine) concentrations in the synaptic cleft.",
        discriminator:
          "The page's rule 2, printed: NET entry → VMAT entry → NE displaced from the vesicles → threshold → 'the action of NET is reversed' → NE expelled — five steps, and the reversal step is the fingerprint no reuptake blocker shares",
        concept: "Amphetamine: transported in by NET, enters vesicles via VMAT, displaces NE, reverses NET → NE expelled into the cleft",
        answer:
          "The Trojan-horse sequence, every step the page's own print: amphetamine 'use[s] the NE transporter (NET) to enter the presynaptic terminal', 'utilize[s] the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles', 'displace[s] NE from the vesicles'; once NE 'reaches a concentration threshold within the presynaptic terminal', 'the action of NET is reversed, and NE is expelled into the synaptic cleft'. The same logic at DAT (the 'Amphetamine, Methylphenidate, Cocaine' list) covers the dopamine half of the story. The distractor lane: 'competitive NET blockade' is the cocaine/TCA/SNRI mechanism — those drugs PARK on the pump; amphetamine passes THROUGH it.",
      },
      {
        stem:
          "A 42-year-old woman receives cosmetic intramuscular injections for glabellar lines; three days later she presents with ptosis, diplopia, and difficulty swallowing. A pharmacology question asks which step of the cholinergic synapse the toxin blocked.",
        discriminator:
          "The flowchart's own cholinergic anchor: 'Cholinergic inhibitor' = 'Botulinum toxin' — the label sits at the RELEASE step, not at the synthesis step, not at the receptor, not at the breaker",
        concept: "Botulinum toxin — the cholinergic inhibitor: blocks Ca2+-triggered ACh release from the presynaptic terminal",
        answer:
          "Botulinum toxin blocks ACh RELEASE at the cholinergic terminal (the diagram's own slot for its 'Cholinergic inhibitor' anchor; KYP depth: the light chain proteases SNARE proteins, so the vesicle cannot dock and fuse). Every upstream step keeps working — 'Choline' + 'Acetyl-CoA' still feed 'ChAT', ACh is still made and packed — but nothing leaves the terminal, so the 'Cholinoreceptors' 'M1 M2 M3' on the 'POSTSYNAPTIC NEURON' see no transmitter: flaccid paralysis (the clinical mirror of the flowchart). The distractor lane: AChE inhibition (donepezil, organophosphates) is the OPPOSITE anchor on the SAME lane — the 'Cholinergic stimulant' that makes ACh accumulate.",
      },
      {
        stem:
          "A 74-year-old woman with Alzheimer disease is treated with a cholinesterase inhibitor; her caregiver asks why a drug that 'raises acetylcholine' was chosen. A question asks what the drug blocks, and what accumulates where.",
        discriminator:
          "The flowchart's own cholinergic stimulant anchor: 'AChE inhibitors eg, Donepezil' — the label sits at the BREAKER ('AChE' → 'Choline' + 'Acetate'); blocking it leaves the cleft's ACh intact and active",
        concept: "Donepezil — the cholinergic stimulant: inhibits AChE → ↑ ACh in the synaptic cleft → more M1/M2/M3 signaling",
        answer:
          "AChE inhibition: the cleft breaker ('AChE', which splits ACh into 'Choline' + 'Acetate') is blocked, so every released quantum of ACh lingers and hits the 'Cholinoreceptors' 'M1 M2 M3' longer and harder — the diagram's own 'Cholinergic stimulant' anchor list ('AChE inhibitors eg, Donepezil'). The synthesis step is untouched (ChAT keeps working), the release step is untouched, the receptors are untouched — the drug works entirely by preserving what the terminal already released. The frame to carry: this is the LEFT lane's drug class because the left lane clears by an ENZYME (ACh has a breaker); the right lane clears by a PUMP (NET), so its drug class blocks a transporter.",
      },
      {
        stem:
          "A 55-year-old man on a tricyclic antidepressant for neuropathic pain develops orthostatic hypotension and dry mouth; plasma norepinephrine measured at the synapse (in an experiment) would show prolonged residence in the cleft. A question asks the mechanism, and why amphetamine's mechanism is NOT the same.",
        discriminator:
          "The flowchart's own NET-side anchor list: 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' — the reuptake-BLOCK class; the pump is parked on, not passed through, and never reversed",
        concept: "TCAs/SNRIs/cocaine: block NET reuptake → NE accumulates in the cleft (amphetamine: rides NET in, raids VMAT, reverses NET out)",
        answer:
          "Competitive reuptake blockade at NET: the 'Reuptake' step of the noradrenergic lane is blocked, so cleft NE persists at the 'Adrenoreceptors' 'α' 'β' — the diagram's own list ('Amphetamine, SNRIs, Cocaine, TCAs, MDMA'). The exam's fork, both arms printed on this page: amphetamine is on the SAME list but works differently — it is a SUBSTRATE of NET (enters the terminal), enters vesicles via VMAT, displaces NE, and at threshold REVERSES NET so NE is expelled; cocaine and TCAs are BLOCKERS that never enter by the pump and never expel anything (they only stop reuptake of what was already released). Orthostatic hypotension and dry mouth ride the α-blockade and the sympathetic flooding (KYP clinical layer).",
      },
    ],
    traps: [
      {
        a: "Amphetamine and cocaine raise synaptic NE the same way — both are listed together under the noradrenergic stimulant anchor, so both must simply block NET reuptake",
        b: "Reading the printed co-listing 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' as one mechanism instead of one TARGET with two mechanisms",
        whyConfused:
          "The diagram prints all five drugs at the same pump (NET), and both mechanisms DO end in ↑ cleft NE — the lists look like mechanism classes, not target classes; the page's rule 2 (the amphetamine sequence) sits far from the flowchart's NET label, so the connection is easy to miss",
        keyDifference:
          "Same target, two mechanisms (both printed): amphetamine is a NET SUBSTRATE — 'use[s] the NE transporter (NET) to enter', then VMAT, then displaces NE, then 'the action of NET is reversed, and NE is expelled into the synaptic cleft' (releases NEW NE); cocaine, TCAs, SNRIs, and MDMA are NET BLOCKERS — they park on the pump and stop reuptake of already-released NE (they expel nothing). The reversal step is amphetamine's fingerprint: a reuptake blocker by definition cannot reverse the pump. The exam's version: 'which drug causes NE RELEASE from the terminal?' — amphetamine (and ephedrine, the vesicle-side list); 'which blocks reuptake only?' — cocaine/TCA/SNRI/MDMA.",
        clue:
          "Sort by the drug's relationship to the pump: PASSES THROUGH and reverses = amphetamine/ephedrine (also displaces vesicular NE); PARKS ON = cocaine, TCAs, SNRIs, MDMA. Mnemonic: the Trojan horse enters by the gate; the blockade never opens it.",
      },
      {
        a: "Botulinum toxin and donepezil are both 'cholinergic drugs' printed on the same lane, so they must act in the same direction",
        b: "Confusing the lane's two anchors — the INHIBITOR at release and the STIMULANT at the breaker — because both labels say 'cholinergic'",
        whyConfused:
          "The diagram prints 'Cholinergic inhibitor' (Botulinum toxin) and 'Cholinergic stimulant' (AChE inhibitors eg, Donepezil) on the same lane, and both act on the SAME transmitter's synapse; students read the lane as one drug family rather than two opposite attacks on it",
        keyDifference:
          "Opposite directions, both printed with their slots: 'Cholinergic inhibitor' = 'Botulinum toxin' BLOCKS ACh RELEASE (nothing leaves the terminal → flaccid paralysis); 'Cholinergic stimulant' = 'AChE inhibitors eg, Donepezil' BLOCK THE BREAKER (AChE), so released ACh accumulates → glands, gut, and muscle overdrive. One drug silences the synapse at its source; the other amplifies it at its cleanup. The composite the exam draws: a botulinum-poisoned synapse cannot be rescued by an AChE inhibitor (there is no ACh in the cleft to preserve) — the two anchors' mechanisms must not be merged.",
        clue:
          "Locate the anchor's slot before answering: RELEASE (botulinum — the signal never leaves) vs BREAKER (donepezil/organophosphates — the signal never dies). If the stem says 'flaccid paralysis, dry everything,' it is release blockade; if it says 'DUMBBELSS' overdrive, it is breaker blockade.",
      },
      {
        a: "α2 is an adrenergic receptor, so agonizing it must raise sympathetic output — and the α2 agonist clonidine must therefore be a stimulant",
        b: "Reading the receptor's family name (adrenergic) as the direction of its effect, forgetting that the α2-autoreceptor is an INHIBITORY feedback sensor",
        whyConfused:
          "Every other adrenergic receptor on the postsynaptic plate ('α' 'β') transmits the sympathetic signal, so 'agonize an adrenergic receptor' pattern-matches to 'more sympathetic effect'; the presynaptic location is the only cue that flips the meaning",
        keyDifference:
          "The page's rule 1, printed: 'Release of norepinephrine ... is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' Agonizing the autoreceptor (clonidine, guanfacine — KYP drug layer) THROTTLES NE release → ↓ sympathetic outflow (the antihypertensive, the ADHD-adjacent sedative); blocking it (yohimbine, or the α2 blockade some TCAs carry) RELEASES the brake → outflow rises. The presynaptic/postsynaptic LOCATION decides the direction, not the receptor's family. The printed co-modulator flips the other way: 'AT II' (angiotensin II) FACILITATES release — the RAS's own way to raise tone.",
        clue:
          "Before answering any α2 stem, place the receptor: PRESYNAPTIC autoreceptor = the thermostat (agonize to calm, block to excite); POSTSYNAPTIC α2 (platelets, ciliary body — book 237's own row) = the classic effector story. The word 'autoreceptor' in the stem is the giveaway that agonism means LESS transmitter.",
      },
      {
        a: "Tetrabenazine and amphetamine both empty the NE vesicle, so both must increase noradrenergic transmission; and the synthesis enzymes (tyrosine hydroxylase, dopamine β-hydroxylase) are labeled on this page's arrows",
        b: "Merging the two vesicle attacks (VMAT inhibition vs displacement-plus-reversal) and assuming the enzyme names the figure never printed",
        whyConfused:
          "The diagram prints both drugs around the same vesicle ('Vesicular monoamine transporter (VMAT) inhibitor' / 'Tetrabenazine' and 'Amphetamine, Ephedrine'), so both read as 'vesicle drugs'; and the classic catecholamine-synthesis figure (with tyrosine hydroxylase and dopamine β-hydroxylase on the arrows) is so familiar that its labels feel present even where they are not",
        keyDifference:
          "Two different vesicle attacks, opposite outcomes (both printed): tetrabenazine INHIBITS VMAT → the vesicle cannot load → stores fall and transmission FALLS (the Huntington-chorea anchor, KYP); amphetamine/ephedrine DISPLACE NE from the vesicle and then — the step tetrabenazine lacks — 'the action of NET is reversed' so the displaced NE is EXPELLED → transmission RISES. And the enzyme layer: VLM render check on the printed page shows NO enzyme labels on the Tyrosine→DOPA or Dopamine→NE arrows — 'ChAT' is the ONLY printed enzyme; tyrosine hydroxylase (the RATE-LIMITING step) and dopamine β-hydroxylase (vesicular) belong to the biochem layer (KYP extension, flagged). The rate-limiting ask is the exam's classic: inhibit tyrosine hydroxylase and the whole lane slows.",
        clue:
          "Ask of any vesicle drug: does anything LEAVE the terminal? Tetrabenazine: no (depleted stores, cytosolic breakdown). Amphetamine: yes (NET reversal — the page's own five steps). And for any 'which enzyme' stem: if the answer is tyrosine hydroxylase, the question came from the synthesis-enzyme layer, not from this page's arrows.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any stem asking 'how does drug X raise transmitter Y in the synapse' — options mix reuptake blockade, enzyme inhibition, release blockade, vesicle depletion, and pump reversal across the ACh, NE, dopamine, and 5-HT lanes",
        differentiator:
          "Sort by the SLOT (KYP five-slots grid on the page's own lanes): MAKE (synthesis enzymes — not printed on this page), PACK (VMAT — tetrabenazine inhibits; amphetamine enters), RELEASE (Ca2+ exocytosis — botulinum blocks ACh; α2 agonism brakes NE; AT II facilitates), LISTEN (the plates: M1/M2/M3 vs α/β), TAKE BACK or BREAK (NET/DAT/SERT pumps vs the AChE breaker)",
        correctPath:
          "(1) Name the transmitter (the stem's drug or syndrome does it: Alzheimer → ACh; ADHD/amphetamine → NE+DA; neuropathic pain TCA → NE+5-HT; Huntington chorea → dopamine depletion). (2) Name the slot the drug hits: synthesis (α-methyltyrosine, KYP), vesicle (tetrabenazine, reserpine, amphetamine), release (botulinum for ACh; clonidine at the α2 brake), breaker (donepezil, organophosphates), pump (cocaine/TCAs/SNRIs/MDMA at NET; methylphenidate at DAT; SSRIs at SERT). (3) Check the direction: blocker of a CLEARANCE route (breaker or pump) → transmitter accumulates; blocker of a SUPPLY route (synthesis, vesicle, release) → transmitter falls. (4) The one reversal case: amphetamine — a substrate that turns the pump inside-out and expels NE (the page's rule 2, printed).",
      },
      {
        lookAlike: "Any stem that names a receptor or an organ effect and hides the synapse entirely — 'which receptor does NE act on at the target,' 'why does this cholinesterase inhibitor cause bradycardia,' 'which transporter does methylphenidate block' — asking you to connect this page's plates and pumps to the rest of the receptor block",
        differentiator:
          "Connect through the plates and pumps this page prints: ACh → 'Cholinoreceptors' 'M1 M2 M3'; NE → 'Adrenoreceptors' 'α' 'β'; DA → 'Dopamine receptor' (DAT); 5-HT → '5-HT receptor' (SERT) — then borrow the letters from book 237 (PH16: M2/i the vagal brake, α2/i the autoreceptor), the addresses from book 236 (PH15: which tissue carries α1 vs β1 vs β2), and the wiring from book 234 (PH11: which division reaches the organ)",
        correctPath:
          "(1) Name the transmitter from the drug class (AChE inhibitor → ACh; NET blocker → NE; SSRI → 5-HT; methylphenidate → dopamine). (2) Read this page's plate for the receptor set, then the earlier pages for the subtype: bradycardia after an AChE inhibitor is M2 on the heart (PH16's i lane); bronchodilation from a NET blocker's spillover is β2 (PH15's airway address). (3) For transporter questions, use the page's own three pumps (NET, DAT, SERT) and their printed lists — methylphenidate sits on the DAT list, SSRIs on the SERT list, TCAs/SNRIs on the NET list, amphetamine on all four. (4) The adrenal limb (Epi + NE into blood) is NOT on this page — book 234's own overview (PH11) carries it; route any 'epinephrine' stem there, and note the enzyme (PNMT, cortisol-induced) belongs to the biochem layer.",
      },
    ],
    miniCase: {
      vignette:
        "A 23-year-old college student with attention-deficit/hyperactivity disorder takes her prescribed amphetamine-based stimulant daily. During a pharmacology small-group session, her plasma and urine catecholamines are noted to be markedly elevated. The tutor asks the group to explain, step by step, how the medication raised norepinephrine concentrations at the sympathetic synapse — and why the same elevation is NOT produced by the patient's roommate's medication, a pure norepinephrine reuptake inhibitor.",
      question:
        "By what sequence does amphetamine raise synaptic norepinephrine, and which step most clearly distinguishes it from a reuptake inhibitor?",
      options: [
        {
          label:
            "Amphetamine is transported into the presynaptic terminal by NET, enters neurosecretory vesicles via VMAT, and displaces NE from the vesicles; once cytosolic NE reaches a concentration threshold, the action of NET is reversed and NE is expelled into the synaptic cleft. The NET-reversal step is the distinguishing feature — a reuptake inhibitor only blocks the pump, it never runs it backwards.",
          text: "NET entry → VMAT entry → displacement → NET reversal → NE expelled.",
          correct: true,
          why:
            "Correct on every count, and every step is the page's own print (book 238, intro rule 2): 'Amphetamines use the NE transporter (NET) to enter the presynaptic terminal', 'utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles', 'This displaces NE from the vesicles', 'Once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed, and NE is expelled into the synaptic cleft'. The reversal step is the fingerprint: the reuptake inhibitor (the roommate's drug — the printed list 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' shows both at the same pump) only stops re-entry of already-released NE; amphetamine converts NET into an exit route for vesicle-displaced NE. The same logic at DAT explains the dopamine half of her elevated catecholamines (the printed 'Amphetamine, Methylphenidate, Cocaine' list).",
        },
        {
          label:
            "Amphetamine competitively occupies the norepinephrine transporter at the presynaptic membrane, preventing reuptake of released NE into the terminal, so cleft NE accumulates by persistence alone. Rationale: amphetamine appears on the NET anchor list with cocaine and TCAs, so it must act as a conventional reuptake blocker.",
          text: "Competitive NET blockade — amphetamine as a pure reuptake inhibitor.",
          why:
            "The co-listing trap: the page prints amphetamine on the SAME anchor list as cocaine, TCAs, SNRIs, and MDMA (the NET-side 'Noradrenergic stimulant' list), but the page's own rule 2 separates its mechanism — amphetamine is a SUBSTRATE the pump carries IN, not a blocker parked ON. A reuptake inhibitor (the roommate's actual drug) has no access to VMAT, displaces nothing, and cannot expel anything: it only preserves what exocytosis already released. The urine catecholamine elevation is the tell — persistence of released NE (reuptake blockade) raises cleft NE, but the massive amphetamine rise comes from vesicular NE being pushed OUT through the reversed pump.",
        },
        {
          label:
            "Amphetamine inhibits the vesicular monoamine transporter, depleting NE from neurosecretory vesicles so that transmission falls — the same mechanism as tetrabenazine, which also empties the vesicle. Rationale: both drugs are printed at the vesicle, and both lower vesicular NE.",
          text: "VMAT inhibition — amphetamine as a vesicle-depleting tetrabenazine mimic.",
          why:
            "The vesicle-attack trap, half right: amphetamine DOES interact with VMAT ('utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles') and DOES displace NE from the vesicles — but the direction is wrong. Tetrabenazine (the printed 'Vesicular monoamine transporter (VMAT) inhibitor') DEPLETES stores so transmission FALLS (the Huntington-chorea use); amphetamine's displaced NE is not lost to cytosolic breakdown — 'the action of NET is reversed', and it is 'expelled into the synaptic cleft'. Depletion-without-reversal and displacement-with-reversal both empty the vesicle and produce OPPOSITE synaptic outcomes. The tutor's catecholamine finding (elevated, not depleted) excludes this option by itself.",
        },
        {
          label:
            "Amphetamine blocks the presynaptic α2-autoreceptors, removing the negative-feedback brake on the terminal, so exocytosis runs unchecked and NE release rises. Rationale: the page's first rule names the α2-autoreceptor as the governor of NE release, so removing it is the way to raise NE.",
          text: "α2-autoreceptor blockade — removing the negative-feedback brake.",
          why:
            "Rule-confusion trap: this page prints TWO rules, and this option substitutes rule 1's loop for rule 2's sequence. Blocking the α2 autoreceptor (yohimbine's mechanism, KYP anchor — not printed) would indeed raise NE release somewhat, but that is NOT amphetamine's mechanism, and it is not what the question's catecholamine magnitude shows. The printed contrast is exact: rule 1 is NE 'modulat[ing]' its own release via the autoreceptor (a graded thermostat); rule 2 is amphetamine's five-step NET-VMAT-displacement-threshold-reversal sequence. Note also that the clonidine family does the OPPOSITE (agonizes the autoreceptor, outflow falls) — the exam likes all three directions on this one receptor.",
        },
        {
          label:
            "Amphetamine is a direct-acting agonist at the postsynaptic α and β adrenoreceptors, mimicking NE at the target organ without changing transmitter release at all. Rationale: the elevated catecholamine effects look like adrenergic stimulation, and the postsynaptic plate is where α and β live.",
          text: "Direct α/β agonism — amphetamine as a NE mimic at the plate.",
          why:
            "Wrong site entirely: the postsynaptic 'Adrenoreceptors' 'α' 'β' plate is where NE (and epinephrine, and the direct agonists phenylephrine/isoproterenol — the sympathomimetic grid of books 240–243, the cross-linked topic) act. Amphetamine is an INDIRECT agent — the page's whole rule 2 is about the TERMINAL (NET, VMAT, vesicles, the reversed pump), and the elevated plasma/urine catecholamines prove real NE was expelled, not mimicked. The distinction the exam tests: direct agonists work on a denervated/empty synapse; amphetamine requires an intact terminal with loaded vesicles (why its effects wane as vesicles deplete, and why reserpine-pretreated animals blunt its response — KYP depth).",
        },
      ],
      reasoning:
        "The vignette is rule 2 played as a therapeutic case. (1) THE TRANSMITTER AND THE DRUG — an amphetamine-based stimulant, so the question is the printed five-step sequence, not a receptor question. (2) THE SEQUENCE — NET entry, VMAT entry, displacement, threshold, NET reversal, expulsion: recite it in the page's own order, because the ordering questions ('what happens immediately after cytosolic NE reaches threshold?') are built from the printed clauses. (3) THE DISTINGUISHING STEP — the NET REVERSAL: the reuptake inhibitor, the VMAT inhibitor, and the α2 blocker each share exactly one step with amphetamine (pump, vesicle, release control) and miss the others — the tutor's roommate question forces the pump-blockade vs pump-reversal fork. (4) THE DISTRACTORS each borrow a neighboring printed element: the co-listed NET blockers (same list, different mechanism), tetrabenazine (same vesicle, no reversal, opposite outcome), the α2 autoreceptor (rule 1 instead of rule 2), and direct agonism (the plate instead of the terminal — and the catecholamine data exclude mimicry). The discriminator to carry: amphetamine is the only drug on the page that both ENTERS by the terminal's machinery and turns that machinery against itself.",
    },
  },
  mnemonics: [
    {
      code: "THE FIVE SLOTS — MAKE, PACK, RELEASE, LISTEN, TAKE BACK (the cholinergic lane swaps the last slot for BREAK)",
      meaning:
        "The KYP compression of the page's two main lanes into one drug-target grid. MAKE: ChAT builds ACh from Choline + Acetyl-CoA (the only printed enzyme); Tyrosine → DOPA → Dopamine → NE builds the catecholamine chain (no enzymes printed). PACK: VMAT loads the vesicle (tetrabenazine inhibits; amphetamine enters). RELEASE: Ca2+ triggers exocytosis (botulinum toxin blocks ACh release; the α2 autoreceptor brakes NE; AT II facilitates). LISTEN: the plates — Cholinoreceptors M1 M2 M3, Adrenoreceptors α β. TAKE BACK vs BREAK: NE is reclaimed by NET (cocaine/TCAs/SNRIs/MDMA block it; amphetamine reverses it) while ACh is destroyed by AChE (donepezil blocks it) — the left lane's last slot is BREAK, not TAKE BACK.",
      memorizes: "Every drug anchor's slot on the two lanes — which step each printed drug class hits",
      whenToUse:
        "Any 'mechanism of action' stem in the autonomic family, and any 'which step does drug X block' question — name the slot first, then the direction (supply route blocked → transmitter falls; clearance route blocked → transmitter rises)",
      clinical:
        "One clinical story per slot (the page's own drugs, plus KYP-flagged anchors): MAKE — α-methyltyrosine (tyrosine hydroxylase inhibition, KYP); PACK — tetrabenazine (Huntington chorea), reserpine (KYP); RELEASE — botulinum toxin (flaccid paralysis), clonidine (the α2 brake); LISTEN — every agonist/antagonist of the receptor grid (books 236–243); TAKE BACK — cocaine/TCAs/SNRIs/MDMA at NET, methylphenidate at DAT, SSRIs at SERT; BREAK — donepezil (Alzheimer), organophosphates (DUMBBELSS, the cholinomimetic-agents page ahead).",
    },
    {
      code: "THE TROJAN HORSE — enters by the gate (NET), raids the store (VMAT), opens the gate backwards (NET reversed)",
      meaning:
        "The KYP frame for the page's rule 2, mapped clause for clause: the gate is NET ('Amphetamines use the NE transporter (NET) to enter the presynaptic terminal'), the store is the VMAT-loaded vesicle ('utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles. This displaces NE from the vesicles.'), and the backwards gate is the reversed pump ('the action of NET is reversed, and NE is expelled into the synaptic cleft'). The frame's value is the contrast: the reuptake blockers (cocaine, TCAs, SNRIs, MDMA — printed on the same NET list) never pass the gate; tetrabenazine (printed at the same vesicle) never opens the gate; only the Trojan horse does both.",
      memorizes: "The amphetamine sequence — entry, vesicle raid, pump reversal, NE expelled — and its two printed near-miss classes",
      whenToUse:
        "Any amphetamine/stimulant mechanism stem, any 'which drug releases NE from the terminal' option list, and any question contrasting amphetamine with cocaine, TCAs, or tetrabenazine",
      clinical:
        "The clinical footprint of the expelled NE: the sympathomimetic toxidrome (↑ HR, ↑ BP, mydriasis, diaphoresis, agitation), prescription-stimulant adverse effects, and — at DAT and SERT, the same sequence's dopamine and serotonin arms (the printed bottom-lane lists) — the ADHD/methylphenidate story, the MDMA serotonergic story, and amphetamine psychosis (KYP anchors; the page prints the lists, not the syndromes).",
    },
    {
      code: "α2 THE THERMOSTAT — NE turns ITSELF down; agonize it (clonidine) and the fire goes out, block it (yohimbine) and the fire roars, and AT II props the fire up",
      meaning:
        "The KYP frame for the page's rule 1: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' The thermostat image fixes the two directions students invert: AGONIZING an inhibitory autoreceptor LOWERS output (clonidine, guanfacine — hypotension, bradycardia, sedation, dry mouth), BLOCKING it RAISES output (yohimbine; also part of the TCA orthostatic story). The diagram's own bracket adds the third lever: 'AT II' beside 'α2' — angiotensin II facilitates release, the RAS's positive arm on the same terminal.",
      memorizes: "The α2-autoreceptor loop and its three levers (agonist, blocker, AT II) — and that agonizing an adrenergic receptor can LOWER sympathetic output",
      whenToUse:
        "Any clonidine/guanfacine/yohimbine stem, any 'which receptor does this antihypertensive act on at the nerve terminal' question, and any stem where an α2 agonist's effects (sedation, dry mouth, rebound hypertension on withdrawal) must be explained",
      clinical:
        "Clonidine and guanfacine (hypertension, ADHD-adjacent hyperarousal, opioid-withdrawal-adjacent uses); clonidine REBOUND hypertension on abrupt withdrawal (the thermostat slams); the imidazoline synergy story (KYP depth — central I1 receptors); methyldopa's converted-to-α-methylnorepinephrine trick (a fake NE that agonizes the same thermostat, KYP); and yohimbine as the diagnostic blocker.",
    },
    {
      code: "ACh HAS A BREAKER, NE HAS A PUMP — the left lane clears by an enzyme, the right lane clears by a transporter",
      meaning:
        "The KYP frame for the page's deepest asymmetry, both sides printed: the cholinergic lane ends at 'AChE' → 'Choline' + 'Acetate' (the transmitter is DESTROYED in the cleft, its choline half reclaimed for the next synthesis round), while the noradrenergic lane clears by 'NET' 'Reuptake' (the transmitter is RECLAIMED whole and repacked by VMAT), with 'Diffusion, metabolism' as the overflow route. The consequence the exam tests: the cholinergic drug class is an ENZYME inhibitor (AChE inhibitors — donepezil et al.), the noradrenergic drug class is a TRANSPORTER blocker (NET blockers — cocaine through the SSRIs' cousins), and there is no 'NE-ase' inhibitor to inhibit.",
      memorizes: "Which clearance route each lane uses — and therefore which drug class exists for each lane",
      whenToUse:
        "Any 'why is there no norepinephrine-equivalent of an AChE inhibitor' reasoning question, any stem pairing an AChE inhibitor with a NET blocker, and any question about choline recycling or NE repacking",
      clinical:
        "The AChE-inhibitor family in full (donepezil, rivastigmine, galantamine for Alzheimer; neostigmine/pyridostigmine for myasthenia; physostigmine as the anticholinergic antidote; organophosphates as the poisoning arm — the cholinomimetic-agents page ahead, book 239), and the NET-blocker family (the SNRIs, the TCAs' analgesic and antidepressant arms, cocaine's sympathomimetic toxidrome) — one class per lane, each named for the clearance route it blocks.",
    },
  ],
  rapidReview: {
    s30: [
      "'Autonomic drugs' — the section header; the whole page (book 238) is this one section: two intro rules + the four-lane flowchart.",
      "Rule 1, verbatim: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.'",
      "Rule 2, verbatim skeleton: amphetamines → NET entry → VMAT entry → NE displaced from the vesicles → concentration threshold → NET reversed → NE expelled into the synaptic cleft → ↑ NE effects.",
      "The cholinergic chain: Choline + Acetyl-CoA →(ChAT)→ ACh → Ca2+-triggered release → Cholinoreceptors M1 M2 M3 → AChE → Choline + Acetate.",
      "The noradrenergic chain: Tyrosine → DOPA → Dopamine → NE → VMAT vesicle → Ca2+-triggered release (α2/AT II-modulated) → Adrenoreceptors α β → NET reuptake (or Diffusion, metabolism).",
      "Cholinergic inhibitor: Botulinum toxin (blocks ACh release). Cholinergic stimulant: AChE inhibitors, eg, Donepezil (blocks the breaker).",
      "Vesicular monoamine transporter (VMAT) inhibitor: Tetrabenazine. Noradrenergic stimulant at the store: Amphetamine, Ephedrine (displace NE).",
      "Noradrenergic stimulant at the pump: Amphetamine, SNRIs, Cocaine, TCAs, MDMA (NET).",
      "Dopaminergic lane: Tyrosine → L-DOPA → Dopamine → DAT; Amphetamine, Methylphenidate, Cocaine. Serotonergic lane: Tryptophan → 5-Hydroxytryptophan → 5-HT → SERT; Amphetamine, SNRIs, Cocaine, SSRIs.",
      "The plates: Cholinoreceptors M1 M2 M3 and Adrenoreceptors α β, both on the POSTSYNAPTIC NEURON; the release-modulating bracket carries α2 (Negative feedback) + AT II.",
    ],
    m3: [
      "THE FIVE SLOTS — MAKE, PACK, RELEASE, LISTEN, TAKE BACK (the cholinergic lane swaps the last slot for BREAK).",
      "THE TROJAN HORSE — enters by the gate (NET), raids the store (VMAT), opens the gate backwards (NET reversed → NE expelled).",
      "α2 THE THERMOSTAT — NE turns itself down; agonize it (clonidine) and the fire goes out, block it (yohimbine) and the fire roars; AT II props the fire up.",
      "ACh HAS A BREAKER, NE HAS A PUMP — the left lane clears by AChE (enzyme-inhibitor drug class), the right lane clears by NET (transporter-blocker drug class).",
    ],
    m10: [
      "The whole page in one breath: two rules (α2 negative feedback; the amphetamine NET→VMAT→displacement→threshold→NET-reversal→expulsion sequence) + four lanes (CHOLINERGIC, NORADRENERGIC, DOPAMINERGIC, SEROTONERGIC), every lane running MAKE → PACK → RELEASE → LISTEN → TAKE BACK (or BREAK).",
      "The amphetamine sequence, the page's own clauses in order: 'use the NE transporter (NET) to enter the presynaptic terminal' → 'utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles' → 'displaces NE from the vesicles' → 'reaches a concentration threshold within the presynaptic terminal' → 'the action of NET is reversed' → 'NE is expelled into the synaptic cleft' → '↑ NE ... in patients taking amphetamines.'",
      "The NET-side fork the page prints as one list: 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' — amphetamine PASSES THROUGH the pump and reverses it; the other four PARK ON the pump and block reuptake. Both end in ↑ cleft NE; only amphetamine expels NEW NE from the terminal.",
      "The vesicle-side fork: tetrabenazine (the 'Vesicular monoamine transporter (VMAT) inhibitor') empties the store with NO expulsion (transmission falls — Huntington chorea); amphetamine/ephedrine displace NE AND reverse NET (transmission rises). Same vesicle, opposite outcomes — the reversal step decides.",
      "The α2 autoreceptor loop: presynaptic, inhibitory, self-targeting — agonize (clonidine, guanfacine) → ↓ NE release → ↓ sympathetic outflow; block (yohimbine) → outflow rises; AT II facilitates release (the printed positive arm). The word 'autoreceptor' means agonism LOWERS the transmitter.",
      "The two cholinergic anchors are opposite attacks on one lane: botulinum toxin BLOCKS RELEASE (flaccid paralysis — the signal never leaves); AChE inhibitors (donepezil) BLOCK THE BREAKER (the signal never dies — glands, gut, and muscle overdrive). An AChE inhibitor cannot rescue botulism: there is no ACh in the cleft to preserve.",
      "The clearance asymmetry: ACh is destroyed in the cleft (AChE → Choline + Acetate, choline reclaimed); NE is reclaimed whole (NET reuptake, repacked by VMAT; overflow by 'Diffusion, metabolism'). Hence the drug classes: AChE inhibitors (enzyme) vs NET blockers (transporter) — there is no 'NE-ase' to inhibit.",
      "The enzyme layer is NOT printed on this page (VLM-verified — ChAT is the only printed enzyme): tyrosine hydroxylase is the RATE-LIMITING step (Tyrosine → DOPA), dopa decarboxylase makes dopamine, dopamine β-hydroxylase (vesicular, ascorbate-dependent) makes NE, PNMT (adrenal medulla, cortisol-induced) makes epinephrine — the adrenal Epi branch is the book's OWN limb on book 234's overview (the PH11 topic), not on this page: the noradrenergic lane ends at NE.",
      "The postsynaptic plates and their lineage: M1/M2/M3 and α/β print here; their G-protein letters print on book 237 (M1 q, M2 i, M3 q; α and β split s/q/i), their tissue addresses on book 236, their organ wiring on book 234 — this page is the synapse those tables annotate.",
      "The bottom lanes repeat the noradrenergic architecture pump for pump: DOPAMINERGIC (Tyrosine → L-DOPA → Dopamine → DAT; 'Amphetamine, Methylphenidate, Cocaine'; 'Dopamine receptor') and SEROTONERGIC (Tryptophan → 5-Hydroxytryptophan → 5-HT → SERT; 'Amphetamine, SNRIs, Cocaine, SSRIs'; '5-HT receptor') — amphetamine appears on all four anchor lists, the only drug on the page that touches every monoamine lane.",
    ],
  },
  recall: [
    {
      q: "Recite the page's two intro rules verbatim (the section's whole prose layer in two answers).",
      a:
        "RULE 1: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' RULE 2: 'Amphetamines use the NE transporter (NET) to enter the presynaptic terminal, where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles. This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal, the action of NET is reversed, and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.'",
    },
    {
      q: "Walk the CHOLINERGIC lane from substrate to products, naming both drug anchors and their exact slots.",
      a:
        "'Choline' + 'Acetyl-CoA' → the enzyme 'ChAT' (choline acetyltransferase — the only enzyme name printed on the page) → 'ACh' → loaded into the vesicle → 'Ca2+'-triggered exocytosis into the cleft [ANCHOR 1: 'Cholinergic inhibitor' = 'Botulinum toxin' — blocks this release step] → the cleft ACh hits the 'Cholinoreceptors' 'M1' 'M2' 'M3' on the 'POSTSYNAPTIC NEURON' → 'AChE' splits it into 'Choline' + 'Acetate' (choline reclaimed for the next round) [ANCHOR 2: 'Cholinergic stimulant' = 'AChE inhibitors eg, Donepezil' — blocks this breaker, so ACh accumulates].",
    },
    {
      q: "Walk the NORADRENERGIC lane from substrate to clearance, naming all four drug anchors, the two release modulators, and both clearance routes.",
      a:
        "'Tyrosine' → 'DOPA' → 'Dopamine' → 'NE' (no enzyme labels print on these arrows — VLM-verified) → 'VMAT' packs the neurosecretory vesicle [ANCHOR 1: 'Vesicular monoamine transporter (VMAT) inhibitor' = 'Tetrabenazine'; ANCHOR 2: 'Noradrenergic stimulant' = 'Amphetamine, Ephedrine' — displace NE from the vesicle] → 'Ca2+'-triggered release, modulated by the 'Release-modulating receptors' ('α2' the autoreceptor with its 'Negative feedback' arrow; 'AT II' the facilitator) → the cleft NE hits the 'Adrenoreceptors' 'α' 'β' on the 'POSTSYNAPTIC NEURON' → clearance by 'NET' 'Reuptake' [ANCHOR 3: 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' at the pump] or 'Diffusion, metabolism' [the overflow route]. ANCHOR 4 is amphetamine itself as the Trojan horse — the rule-2 sequence that rides NET in and reverses it out.",
    },
    {
      q: "A patient on clonidine and a patient on yohimbine both act at the noradrenergic terminal — state what each does to the α2-autoreceptor loop and to sympathetic outflow, and name the printed co-modulator with the opposite sign.",
      a:
        "The loop (printed, rule 1): released NE spills onto the presynaptic α2-autoreceptors and throttles further NE release — negative feedback. CLONIDINE (KYP drug layer) AGONIZES the autoreceptor: the thermostat cranked down → ↓ NE release → ↓ sympathetic outflow (hypotension, bradycardia, sedation, dry mouth; rebound hypertension on abrupt withdrawal). YOHIMBINE BLOCKS the autoreceptor: the brake removed → NE release rises → outflow rises. The printed co-modulator with the OPPOSITE sign is 'AT II' — angiotensin II facilitates NE release (the RAS's positive arm on the same bracket).",
    },
    {
      q: "Name the page's four drug-anchor lists (all six anchor labels with their members), and state which single drug appears on the most lists — with why.",
      a:
        "(1) 'Cholinergic inhibitor' — 'Botulinum toxin' (blocks ACh release). (2) 'Cholinergic stimulant' — 'AChE inhibitors eg, Donepezil' (blocks the breaker). (3) The vesicle side of the noradrenergic lane: 'Vesicular monoamine transporter (VMAT) inhibitor' — 'Tetrabenazine'; and 'Noradrenergic stimulant' — 'Amphetamine, Ephedrine' (displace vesicular NE). (4) 'Noradrenergic stimulant' at the pump — 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' (NET). Plus the bottom lanes: 'Dopaminergic stimulant' — 'Amphetamine, Methylphenidate, Cocaine' (DAT); 'Serotonergic stimulant' — 'Amphetamine, SNRIs, Cocaine, SSRIs' (SERT). AMPHETAMINE appears on four lists (the vesicle side, NET, DAT, SERT) — the only drug on the page that touches every monoamine lane, and the only one that REVERSES a pump (rule 2).",
    },
    {
      q: "Which enzyme names are NOT printed on this page, what IS the only printed enzyme, and where do the missing enzymes (and the adrenal epinephrine branch) belong?",
      a:
        "VLM render check on the printed page (150 dpi): NO enzyme labels appear on the Tyrosine→DOPA or Dopamine→NE arrows — the ONLY printed enzyme is 'ChAT' (on the Choline + Acetyl-CoA → ACh arrow). The missing names are the catecholamine-synthesis layer (KYP extension, flagged): tyrosine hydroxylase (the RATE-LIMITING step: Tyrosine → DOPA), dopa decarboxylase (DOPA → Dopamine), dopamine β-hydroxylase (vesicular: Dopamine → NE), and PNMT (NE → Epinephrine, in the adrenal medulla, cortisol-induced). The adrenal Epi branch is NOT drawn on this page — the noradrenergic lane ends at NE; the adrenal limb (Epi + NE into the blood) is the book's own print on book 234's overview diagram (the completed autonomic-receptors topic, PH11).",
    },
  ],
  related: [
    {
      title: "G-Protein-Linked Second Messengers — the Page Directly Behind: This Page's Plates Get Their Letters There",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The facing page behind this one (PH16, book 237): the receptor × G-protein-class table and the three cascade diagrams. The two pages share their postsynaptic plates — this page prints the plates as art ('Cholinoreceptors' M1 M2 M3; 'Adrenoreceptors' α β), and PH16 prints what each plate's members DO inside the cell (M1 q, M2 i, M3 q; α1 q, α2 i, β1 s, β2 s). PH16's α2 row is THIS page's rule 1 made molecular: the presynaptic autoreceptor is the Gi-class brake ('↓ sympathetic [adrenergic] outflow'), which is why agonizing it (clonidine) lowers terminal cAMP and NE release. PH16 also pinned THIS section as its next-page boundary marker — the reciprocal anchor resolves here.",
    },
    {
      title: "Autonomic Receptors — the Overview Diagram This Synapse Map Zooms Into",
      topicId: "autonomic-receptors",
      note:
        "The page five before this one (PH11, book 234): the autonomic/somatic overview schematic — the divisions, the ganglia, the receptor plates at each organ, AND the adrenal limb: the adrenal medulla 'directly innervated by preganglionic sympathetic fibers', pouring 'Epi' and 'NE' into the blood. THIS page is that diagram's synapse under a magnifier — PH11 drew WHERE the wires go; this page draws WHAT THE TERMINAL DOES (make, pack, release, listen, take back). The Epi branch question resolves across the pair: book 234 prints the adrenal limb, book 238's noradrenergic lane ENDS at NE (VLM-verified) — so any 'where does epinephrine come from' stem routes to PH11 plus the PNMT enzyme layer (KYP, flagged here).",
    },
    {
      title: "Sympathomimetics — the Agonist Grid Ahead (Its sourceRef overlaps books 240–243; the cross-link holds)",
      topicId: "sympathomimetics",
      note:
        "The completed drug-grid topic four pages ahead (books 240–243 — its sourceRef overlaps that range; keep the cross-link): every adrenergic agonist scored by receptor activity. This page supplies the machinery that grid's drugs ride: the direct agonists (phenylephrine, albuterol) act at this page's 'Adrenoreceptors' plate; the indirect agents (amphetamine, ephedrine — printed HERE as the vesicle-side 'Noradrenergic stimulant') act at this page's terminal (the rule-2 sequence); and the mixed agents do both. Read together they answer the exam's favorite fork: DIRECT agonists work on the empty synapse; INDIRECT agents need this page's intact terminal with loaded vesicles.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors — the Address Book for This Page's α/β Plate",
      topicId: "tissue-distribution-of-adrenergic-receptors",
      note:
        "The page two before this one (PH15, book 236): the 13-row adrenergic tissue-distribution table — which tissue carries which receptor (α1 vessels and sphincters; β1 the heart; β2 the airways; β3 the bladder). This page's noradrenergic lane ends at the undifferentiated plate 'Adrenoreceptors' 'α' 'β'; PH15 splits that plate into addresses, PH16 (book 237) splits it into class letters, and the drug questions live at the intersection: an AChE inhibitor's bradycardia is M2 at the heart, a NET blocker's bronchodilation is β2 at the airway — both plates printed here, both addresses printed there. (The cholinomimetic-agents topic — the page directly ahead, book 239 — is pending; its AChE-inhibitor table will slot under this page's 'Cholinergic stimulant' anchor.)",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry (the stimulant axis: ADHD, methylphenidate at DAT, and amphetamine on all four lists)",
      connection:
        "This page's bottom lanes are the psychopharmacology syllabus in miniature: the DOPAMINERGIC lane's anchor list prints 'Amphetamine, Methylphenidate, Cocaine' at DAT — the ADHD first-line mechanism (methylphenidate blocks the dopamine pump in the prefrontal cortex/striatum) and the stimulant-use disorder mechanism (cocaine's euphoria is the same pump, faster); amphetamine salts (the same rule-2 Trojan-horse sequence, at NET and DAT both) are the other ADHD first line. The SEROTONERGIC lane's 'Amphetamine, SNRIs, Cocaine, SSRIs' at SERT is the antidepressant arm — and MDMA (printed on this page's NET list; its serotonergic action is the SERT arm, KYP flag) is the empathogenic story and the serotonin-syndrome/hyperthermia anchor. The α2 story crosses too: guanfacine (the α2 agonist, this page's rule-1 brake) is the ADHD hyperarousal adjunct.",
    },
    {
      subject: "Neurology (botulism and the vesicle-depleters: two opposite motor outcomes from two printed anchors)",
      connection:
        "This page's cholinergic and vesicular anchors ARE two neurology exams: BOTULINUM TOXIN (the 'Cholinergic inhibitor' — blocks ACh release) gives the descending flaccid paralysis of foodborne/Wound botulism (and the cosmetic/therapeutic uses: the same release blockade, deliberately, in dystonia, spasticity, and migraine); TETRABENAZINE (the 'Vesicular monoamine transporter (VMAT) inhibitor') depletes vesicular dopamine at the striatum for Huntington chorea — the movement-disorder exam's 'deplete the indirect-pathway transmitter' answer (KYP anchors; the page prints the labels, not the diseases). The NMJ sits just off this page's left lane: the 'Cholinergic stimulant' slot (AChE inhibitors) is where myasthenia gravis treatment lives (the cholinomimetic-agents page ahead carries the full table). And the autoreceptor rule crosses to sleep: REM-off noradrenergic neurons and the α2 story anchor narcolepsy pharmacology.",
    },
    {
      subject: "Biochemistry (the catecholamine synthesis pathway — the enzyme layer this page does not print)",
      connection:
        "The synthesis chain prints here as bare labels ('Tyrosine' → 'DOPA' → 'Dopamine' → 'NE'), and the enzyme layer is the biochem exam: TYROSINE HYDROXYLASE is the rate-limiting step (inhibited by α-methyltyrosine — the pheochromocytoma arm; needs tetrahydrobiopterin and O2), DOPA DECARBOXYLASE (pyridoxine/B6-dependent, also makes 5-HT from 5-Hydroxytryptophan — both printed substrates on this page) makes dopamine, DOPAMINE β-HYDROXYLASE (inside the vesicle, ascorbate-dependent — so even VMAT-packed dopamine is only half-processed until the vesicle's own enzyme acts) makes NE, and PNMT (in the adrenal medulla's chromaffin cells, induced by the locally-high cortisol from the zona fasciculata) makes epinephrine. The disease forks ride the same chain: Parkinson (dopamine loss — L-DOPA with carbidopa, the printed 'L-DOPA' label's own future), pheochromocytoma (the catecholamine-making tumor — this page's catecholamine overflow logic), and the disulfiram/DSH dopamine-β-hydroxylase deficiency story (orthostatic hypotension with elevated dopamine — KYP depth).",
    },
    {
      subject: "Toxicology (the synapse weaponized: organophosphates at the breaker, amphetamine and cocaine at the pump, botulinum at the release step)",
      connection:
        "Every autonomic toxidrome is one of this page's anchors pushed to overdose. The CHOLINERGIC STIMULANT slot weaponized: organophosphate insecticides irreversibly inhibit AChE → the printed 'AChE' → 'Choline' + 'Acetate' step stops → DUMBBELLS (the cholinomimetic-agents page ahead carries the full syndrome), treated with atropine (the receptor-side antidote) plus pralidoxime (the enzyme-regenerator, before aging). The NORADRENERGIC side: amphetamine toxicity is rule 2 at full tilt (hypertension, tachycardia, mydriasis, hyperthermia, agitation — treat with benzodiazepines; urine alkalinization enhances elimination — the weak-base trapping story), cocaine adds sodium-channel blockade to the same NET list, and the TCA overdose rides the NET/α blockade plus the cardiac Na channel (the wide-complex QRS). And the CHOLINERGIC INHIBITOR slot weaponized: botulinum toxin as the bioterrorism agent — the same flaccid-descending-paralysis mechanism, treated with the antitoxin. The α2 thermostat is the tox crossover: clonidine overdose mimics opioid overdose (coma, miosis, respiratory depression — and is naloxone-partially-responsive, the classic exam wrinkle).",
    },
  ],
};
