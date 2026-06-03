# Portfolio — CLAUDE.md

## Design authority

**All visual and design decisions follow `ref/DESIGN.md` ("Warm Editorial Precision").**
Its token values (colors, type scale, spacing, radius, easing, durations), typographic rules,
motion guidelines, and explicit do's/don'ts are the single source of truth. When in doubt,
defer to the file — don't invent values.

Key rules to keep top-of-mind:
- **Coral Glow (`--color-accent`)** is used *only* on interactive elements (hover/active states,
  the contact FAB) and blockquote left borders. Never as a decorative color elsewhere.
- **Two-typeface boundary**: Jost/Futura (`--font-display`) is UI chrome — labels, nav, meta,
  headings. EB Garamond (`--font-prose`) is prose — body copy inside `.prose` only.
  Never swap them across that boundary.
- No blur backdrop on the top bar. No border on the top bar at rest.
- Motion stagger caps at 3 elements (80 ms increments). All motion gated by
  `prefers-reduced-motion`.

## Source / reference material

All case study content, CV, and strategy context lives in `ref/`:

```
ref/
  DESIGN.md              — visual system spec (source of truth)
  case_study_rates.md    — NYSHEX Rates Ingestion & Management
  case_study_ds.md       — NYSHEX Design System for AI-Assisted Development
  case_study_rentengine.md — RentEngine Rental Applications
  cv.md                  — Jared's CV
  strategy.md            — positioning / audience strategy
```

Typed content lifted from these files lives in `src/data/caseStudies.ts`.
Contact details are in `src/data/contact.ts`. About copy is in `src/data/about.ts`.

## Page structure

Single-page SPA, no router. Top to bottom:

1. **TopBar** — sticky, name only, flat parchment background (no blur, no border).
2. **CaseStudy × 3** — stacked vertically inside a two-column grid:
   - NYSHEX — Rates Ingestion & Management (`#nyshex-rates`)
   - NYSHEX — Design System for AI-Assisted Development (`#nyshex-design-system`)
   - RentEngine — Rental Applications (`#rentengine`)
3. **About** — short personal section (`#about`)
4. **SideIndex** — sticky right column (visible ≥ 1080 px), highlights active section.
5. **ContactButton** — fixed bottom-right FAB; popout with Email / LinkedIn / Medium rows,
   each with a copy-to-clipboard button.

## Stack

| Layer | Choice |
|---|---|
| Bundler | Vite 6 |
| UI | React 18 + TypeScript |
| Styling | Plain CSS custom properties + CSS Modules per component |
| Fonts | `@fontsource/jost` (400/500), `@fontsource/eb-garamond` (400/500/italic), `@fontsource/jetbrains-mono` (400) |
| Markdown | `react-markdown` v9 with custom element map |
| Motion | CSS transitions + `IntersectionObserver` + scroll events — no animation library |

## Commands

```bash
npm run dev        # Vite dev server → http://localhost:5173
npm run build      # tsc --noEmit && vite build
npm run typecheck  # tsc --noEmit only
```

## Key files

```
src/
  styles/tokens.css       — all CSS custom properties (from DESIGN.md)
  styles/base.css         — reset, font imports, body defaults, reduced-motion gate
  data/caseStudies.ts     — typed case study content (3 studies)
  data/contact.ts         — email, LinkedIn, Medium
  data/about.ts           — About section copy
  hooks/useReveal.ts      — shared IntersectionObserver; reveals sections on scroll
  hooks/useScrollSpy.ts   — scroll-event spy; drives SideIndex active state
  components/
    TopBar                — sticky name bar
    SideIndex             — sticky right nav, 4 entries (3 studies + About)
    CaseStudy             — hero header + ordered sections
    Section               — reveal-on-scroll wrapper (opacity + translateY)
    Prose                 — react-markdown with custom a/blockquote/code/ul renderers
    ProblemCards          — 2-col floating cards with hover lift
    Timeline              — vertical numbered steps (design-system arc)
    Visual                — abstracted SVG diagram block with caption
    Stat                  — static outcome metric display
    About                 — about section
    ContactButton         — fixed FAB + popout panel
    CopyButton            — clipboard copy with "copied" confirmation
```
