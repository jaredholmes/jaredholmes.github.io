# NYSHEX — Design System for AI-Assisted Development

---

title: "A next-generation design system"
project: Design System for AI-Assisted Development
company: NYSHEX
role: Staff Product Designer
team: Product, engineering, design
intro: A design system that serves as a source of truth for AI-native teams.
outcome: 50% reduction in concept-to-production time; improved overall front-end quality

# A next-generation design system

Design systems often fail for organisational reasons rather than technical ones. Design and engineering drift, the system stops describing what's actually in production, and engineering quietly stops using it.

This was the situation at NYSHEX when I joined as the staff product designer. The design system existed as outdated Figma components and variables that no longer matched the shipped code. This was understandable, since the design team was small and heavily focused on shipping new features during a period of growth. This hindered the handover process, and was also incompatible with more modern AI-native workflows that had been adopted by the product team.

In collaboration with the CTO, I rebuilt the design system as something that served product and engineering teams, shifting it from Figma-based to code-based, with a DESIGN.md as the source of truth. Concept-to-shipped-code time on complex features dropped by more than half, and consistency was built into the new handover process.

## Where and why we started

Two themes ran through what was broken.

<div class="problem-cards">

**Out of sync with production**

- The Figma file no longer matched what was actually shipped
- Variants had accumulated over time, many unused or duplicated
- Tokens were inconsistent, with multiple names for the same value
- Documentation was thin and didn't reflect current standards

**Built for wireframes, not prototypes**

- Components were Figma-only and couldn't drive functional prototypes
- Interactions had to be re-explained to coding agents for every project
- Functional nuance got lost in the handoff from static design to shipped code
- Forced to choose between high-fidelity, accurate wireframes, or low-fidelity, concept-based functional prototypes

</div>

## The arc of the project

<div class="timeline">

### 1. Auditing the drift

Before designing anything new, I mapped the gap between the Figma system and the shipped code. There were variants for states that no longer existed, components named differently in design and code, and tokens duplicated across files. There were also new shipped components that didn't exist in Figma.

### 2. Rebuilding Figma to match production

I did a once-off pass to bring the Figma system back into truth. This involved auditing components, creating new components, consolidating tokens, and writing the standards that had been used implicitly. Not a redesign, but a reset to ensure the design system overhaul was based on a solid foundation.

### 3. Adding the missing patterns

With the Figma-based design system and documentation updated, I added the broader patterns that had been missing — standardised approaches to searching, filtering, downloading, data display, empty states, loading, and various other common interactions. These tend to be treated ad-hoc during design or development, but they determine whether a product feels consistent and trustworthy across features.

### 4. Watching the DESIGN.md pattern emerge

During this time, DESIGN.md was a relatively new concept, not yet adopted by many design teams. Part of my role at the company was to stay up to date with the latest industry developments and assess whether they were worth adopting in our context. The DESIGN.md was an ideal solution for our use-case: heavy AI-assisted development, designers and product managers increasingly prototyping to explore and communicate ideas, and a design system that needed to be maintained and distributed in a single place.

### 5. Shifting the source of truth to code

I moved the source of truth out of Figma and into the codebase. This involved extracting visual designs in Figma to make them explicit in markdown format, extracting tokens from front-end code repos, and integrating design patterns and principles. The DESIGN.md captured the rationale behind tokens, patterns, and tradeoffs. This was the piece that made the system useful to engineers and to AI coding tools, while also being legible and maintainable to designers.

### 6. Redefining Figma's role

Figma stopped being the source of truth, but it stayed in use. Designers used it for ideation, small visual changes, and exploration that would be inefficient to prompt for. The split was natural enough that it was readily adopted internally — designers still had a place to design visual-heavy artefacts, while being able to shift to high-fidelity functional prototypes that left minimal handover ambiguity.

### 7. Embedding DESIGN.md in shipped code

The hardest part was making sure the DESIGN.md was actually informing the front-end code that shipped, not just sitting in the repo as documentation. This took time and required engineering to reference it during implementation, and AI coding tools to pull from it when generating components. It required a proof of concept and organisational buy-in. Once that loop was working, the system started reinforcing itself: the more code adhered to DESIGN.md, the more useful DESIGN.md became as context for the next thing built.

### 8. Proving it on a complex feature

The first real test was a complex document management hub with multi-state documents, downloadable reports, charts, and micro-interactions across tooltips and modals. Under the old workflow, something this nuanced would have taken weeks of prototype creation, review, and rework. With the new system, I built functional prototypes that pulled from the same components engineering would ship, checked feasibility with engineers in real time, and AI coding tools generated implementation directly against the DESIGN.md. Over the next several projects, end-to-end time from concept to shipped code dropped by more than half. Quality improved at the same time, because the nuance and consistency previously lost in translation travelled with the prototype.

</div>

## The results

The new system is in active use across the platform. Concept-to-shipped-code time on complex features is down by more than half. Design and engineering work from the same artefacts, which has reduced the small daily friction that used to require regular rework.

The AI codegen benefit has been the most valuable result. Coding agents producing implementation against the DESIGN.md generate output that already adheres to the system. This means designers and engineers spend less time correcting trivial deviations, and more time on the parts of the work that need human judgement.

## Reflection

The thing I underestimated was how much of the work would be about adoption rather than design. The technical decisions were defensible quickly. Getting the DESIGN.md to actually inform shipped code took months of consensus-building and negotiation.

This project proved that it can be worth taking a risk of adopting a technology early if it shows strong promise for a team's particular context. DESIGN.md was a niche pattern when the team started exploring it, but it was clearly a suitable approach for NYSHEX. In a different context, the cost of being early may have outweighed the benefit.
