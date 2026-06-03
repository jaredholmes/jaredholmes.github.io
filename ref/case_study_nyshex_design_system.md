---
title: "A design system that engineering actually wanted"
project: NYSHEX — Design System for AI-Assisted Development
role: Staff Product Designer (IC)
timeframe: 2026
team: Product, engineering, design
outcome: Concept-to-shipped-code time cut by more than half
status: Shipped, in use
---

# A design system that engineering actually wanted

Design systems often fail for organisational reasons rather than technical ones. Design and engineering drift apart, the system stops describing what's actually in production, and engineering quietly stops using it.

That was the situation at NYSHEX when I joined as the staff product designer. The design system existed, but it was a Figma file that no longer matched the shipped code. I rebuilt it as something both teams use, eventually shifting it from Figma-based to code-based, with a DESIGN.md as the source of truth. Concept-to-shipped-code time on complex features dropped by more than half.

[VISUAL: Hero — composite showing the DESIGN.md alongside a shipped component, or an abstracted view of the new workflow]

## What was there

Two themes ran through what was broken.

<div class="problem-cards">

**Out of sync with production**
- The Figma file no longer matched what was actually shipped
- Variants had accumulated over time, many unused or duplicated
- Tokens were inconsistent, with multiple names for the same value
- Documentation was thin and didn't reflect current standards

**Built for wireframes, not prototypes**
- Components were Figma-only and couldn't drive functional prototypes
- Interactions had to be re-explained to engineering for every project
- Nuance got lost in the handoff from static design to shipped code
- Designers and engineers were working from different artefacts

</div>

The deeper issue was organisational. Engineering had given up on the system because it didn't reflect reality. Design kept maintaining it because that's what designers do. Both teams ended up doing more work than they should have.

## The arc of the project

<div class="timeline">

### 1. Auditing the drift
[TIMELINE VISUAL: Annotated Figma file showing dead variants and inconsistent tokens]

Before designing anything new, I mapped the gap between the Figma system and the shipped code. There were variants for states that no longer existed, components named differently in design and code, and tokens duplicated across files.

### 2. Rebuilding Figma to match production
[TIMELINE VISUAL: Before/after of the component library, or a token consolidation diagram]

I did a once-off pass to bring the Figma system back into truth. This involved auditing components, removing dead variants, consolidating tokens, and writing the standards that had been implicit. Not a redesign, just a reset to make Figma trustworthy before deciding what to do with it longer-term.

### 3. Adding the missing patterns
[TIMELINE VISUAL: Pattern-library spread showing search, filter, data display patterns]

With the component layer truthful, I added the broader patterns that had been missing — standardised approaches to searching, filtering, downloading, data display, empty states, and loading. These tend to be treated as afterthoughts, but they determine whether a product feels consistent across features.

### 4. Watching the DESIGN.md pattern emerge
[TIMELINE VISUAL: A page from the eventual DESIGN.md, or a screenshot of the repo structure]

DESIGN.md was barely a pattern at this point. I'd seen it surface in a handful of tooling-forward companies, and I had reservations about adopting it too early. Early-adopting a workflow change is risky. But the case at NYSHEX was specific: heavy AI-assisted development, engineering already living in the repo, and a design system that needed to be readable by both humans and coding agents at the moment of building.

### 5. Shifting the source of truth to code
[TIMELINE VISUAL: The DESIGN.md alongside a corresponding component file, or a tokens-in-code snippet]

I moved the source of truth out of Figma and into the codebase. Tokens lived in code first, with Figma styles generated from them. Component documentation covered usage rules — when to use a component, when not to, what props it accepts — not just visual examples. The DESIGN.md captured the rationale behind tokens, patterns, and tradeoffs. This was the piece that made the system useful to engineers and to AI coding tools, rather than just to designers.

### 6. Redefining Figma's role
[TIMELINE VISUAL: A sketch or exploration view, deliberately rough]

Figma stopped being the source of truth, but it stayed in use. Designers used it for ideation, small visual changes, and exploration that would be inefficient to prompt for. The split was natural enough that it didn't take much internal selling — designers still had a place to design, it just wasn't where the system lived.

### 7. Embedding DESIGN.md in shipped code
[TIMELINE VISUAL: A prompt + AI-generated component output, or a PR showing DESIGN.md adherence]

The hardest part was making sure the DESIGN.md was actually informing the front-end code that shipped, not just sitting in the repo as documentation. This took time to land. It required engineering to reference it during implementation, and AI coding tools to pull from it when generating components. Once that loop was working, the system started reinforcing itself: the more code adhered to DESIGN.md, the more useful DESIGN.md became as context for the next thing built.

### 8. Proving it on a complex feature
[TIMELINE VISUAL: The document management hub, abstracted or in detail]

The first real test was a complex document management hub with multi-state documents, downloadable reports, charts, and micro-interactions across tooltips and modals. Under the old workflow, something this nuanced would have taken weeks of prototype creation, review, and rework. With the new system, I built functional prototypes that pulled from the same components engineering would ship, checked feasibility with engineers in real time, and AI coding tools generated implementation directly against the DESIGN.md. End-to-end time from concept to shipped code dropped by more than half. Quality went up at the same time, because the nuance that used to get lost in translation travelled with the prototype.

</div>

## The harder part was getting it into shipped code

The technical work of writing the DESIGN.md was the easy half. The harder half was making sure it actually informed what shipped.

A DESIGN.md sitting in a repo is just documentation. For it to change how product gets built, engineering had to reference it during implementation, and AI coding tools had to pull from it when generating new components. This took time to embed.

I spent meaningful time in engineering's space — sitting in on standups, asking what was painful, and treating the design system as a product I was building for them. The DESIGN.md format helped, because it lived where engineering already lived. But format alone wouldn't have done it. What did was making sure every change to the system solved a concrete problem engineering had named, and that the system bent to their workflow rather than asking them to bend to mine.

## What's in use now

The new system is in active use across the platform. Concept-to-shipped-code time on complex features is down by more than half. Design and engineering work from the same artefacts, which has reduced the small daily friction that used to add up to weeks of rework.

The AI codegen benefit has been the most surprising. Coding agents producing implementation against the DESIGN.md generate output that already adheres to the system. This means designers and engineers spend less time correcting trivial deviations, and more time on the parts of the work that need human judgement.

## Reflection

The thing I underestimated was how much of the work would be about adoption rather than design. The technical decisions were defensible quickly. Getting the DESIGN.md to actually inform shipped code took months of small adjustments and conversations. There isn't a shortcut for it.

The other thing this project clarified is when to adopt new approaches and when to wait. DESIGN.md was barely a pattern when I introduced it at NYSHEX. The case for adopting it early was specific to the situation: heavy AI-assisted development, drift between Figma and production, engineering already living in the repo. In a different context, the cost of being early would have outweighed the benefit. Adopting new approaches works best when the context calls for them, not when they're new.
