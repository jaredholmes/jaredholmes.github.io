---
name: Jared Holmes Portfolio
description: Personal portfolio for a senior product designer targeting IC roles at US/EU startups. Restrained, content-first, editorial — with considered moments of warmth and motion.
version: alpha

colors:
  background: "#F2EFEA"
  primary: "#1A1816"
  secondary: "#6E75A8"
  accent: "#FC7753"
  surface: "#EAE6DF"
  border: "#DDD9D2"
  on-accent: "#FFFFFF"

typography:
  display:
    fontFamily: Futura, Jost
    fontSize: 4.25rem
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: -0.01em
  h1:
    fontFamily: Futura, Jost
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.005em
  h2:
    fontFamily: Futura, Jost
    fontSize: 1.625rem
    fontWeight: 400
    lineHeight: 1.2
  body-lg:
    fontFamily: EB Garamond
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.8
  body-md:
    fontFamily: EB Garamond
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: Futura, Jost
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.1em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    lineHeight: 1.6

rounded:
  sm: 2px
  md: 4px
  lg: 10px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  xxl: 120px

components:
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.accent}"
  case-study-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 0px
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: 3px 10px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.border}"
    textColorHover: "{colors.accent}"
    borderColorHover: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
    typography: "{typography.label}"
  image-block:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
---

## Overview

**Warm Editorial Precision.** Where the previous portfolio was utilitarian, this one has character. The parchment ground, geometric Futura headings, and Garamond body create a pairing that feels both considered and alive. Coral Glow drives all interaction — it's the only place colour "moves" on the page, so every hover and click feels intentional.

The typographic logic: Futura for headings/labels/navigation signals the building, systems-thinking side. EB Garamond for body copy signals the writing, reasoning, editorial side. Together: a designer who can both think and execute.

Motion is part of the brand, not decoration. Every animation is organic and brief — things that make the interface feel *inhabited* rather than static, without ever announcing themselves.

## Colors

A three-color chromatic palette over warm neutrals.

- **Background (`#F2EFEA` — Parchment):** The page lives here. Warm cream, softer than white, slightly antique without being aged. Sets the editorial tone from the first load.
- **Primary (`#1A1816`):** Near-black with a warm brown undertone. Never pure black — matches the parchment warmth.
- **Accent (`#FC7753` — Coral Glow):** The only "active" color. Used exclusively for: interactive hover states, underlines on active links, the site name on hover, call-to-action elements, and any inline highlighting. Because it appears only on interaction, every use feels earned. Secondary CTAs (ghost buttons) sit at rest in `primary` text on a `border`-stroked transparent fill, and only adopt Coral Glow on hover — preserving the rule that coral is *earned*, never decorative.
- **Secondary (`#6E75A8` — Glaucous):** A dusty blue-violet for metadata, captions, nav labels at rest, tags, and dates. Chromatic but muted — adds variety without competing with Coral Glow. Pairs well with parchment without reading as cold.
- **Surface (`#EAE6DF`):** Slightly darker parchment for image backgrounds, card fills, code blocks, blockquotes. Creates gentle depth.
- **Border (`#DDD9D2`):** Barely-there dividers. Used for ruled lines, table borders, image frames. Should feel like a natural shadow, not a decision.
- **On-accent (`#FFFFFF`):** Text on Coral Glow backgrounds (buttons, active tags).

## Typography

Two typefaces. No exceptions.

**Futura** (requires license; self-host via Adobe Fonts or a licensed foundry) — for all headings, display text, labels, navigation, and UI chrome. Geometric, confident, structurally precise. At display sizes the circular forms have genuine personality. At label sizes it reads as clean and architectural.

*Web fallback:* `Jost` (Google Fonts) — a free typeface purpose-built as a Futura homage. Indistinguishable at screen resolutions. Use Jost during development; swap to self-hosted Futura before launch.

**EB Garamond** (Google Fonts) — for all case study body copy, prose, blockquotes, and captions. Old-style serif that pairs beautifully with Futura's geometry. Warm and highly readable at body sizes. Signals: writing, depth, the patient thinking the case studies demonstrate.

**JetBrains Mono** — used sparingly inline in prose for dates, ship identifiers, or data references. A single mono token mid-paragraph is a quiet signal of technical fluency. Not used for decoration.

### Scale rationale

- **Display (4.25rem, Futura 400):** Homepage name + case study hero headline only. One use per page.
- **H1 (2.5rem, Futura 400):** Case study section headings within the reading column.
- **H2 (1.625rem, Futura 400):** Sub-sections in case studies. Use sparingly — prefer prose transitions over heading proliferation.
- **Body-lg (1.25rem / 20px, EB Garamond):** Primary case study prose. Garamond at 18px has excellent reading rhythm for long-form.
- **Body-md (1.125rem / 18px, EB Garamond):** Captions, card descriptions, blockquote supporting lines.
- **Label (0.6875rem, Futura 500, tracked 0.1em, uppercase):** Navigation, role tags, metadata rows, dates. The geometry of Futura at this size + tracking creates a crisp, architectural texture.

## Layout

Single-column reading experience. Content earns its width.

- **Max prose width:** `680px` — the editorial column. ~72–76 characters per line at body-lg in EB Garamond, optimal reading measure.
- **Max image width:** `880px` — images break gently out of the prose column for rhythm and visual relief.
- **Page max width:** `1200px`, centered.
- **Page horizontal padding:** `clamp(20px, 5vw, 48px)`.
- **Section vertical rhythm:** `80px` between major content sections. `48px` between body sections within a case study.

### Homepage grid

Two-column card grid at desktop (≥768px), single column below. Cards show: image thumbnail (aspect 4:3, surface background), company label, case study title, role tags.

### Case study page structure

```
[Nav — name left, links right]
[Hero — company label, display headline, metadata row]
[Hero image — max 880px, surface background, radius-md]
[Reading column — max 680px]
  [Section: Problem]
  [Image — 880px break-out]
  [Section: What I found]
  [Section: The decision]
  [Image — 880px break-out]
  [Section: What shipped]
  [Image — 880px break-out]
  [Section: Outcome + reflection]
[Case study footer — prev / next]
```

## Elevation & Depth

Minimal. Depth comes from surface-color layering, not shadows.

- **Cards:** No shadow at rest. On hover: `translateY(-3px)` + a 1px Coral Glow border appears. The lift and the color together make hover unmistakable.
- **Images:** No shadow. Placed on surface background with `rounded.md`. On hover within cards: image scales `1.03` with `overflow: hidden` on the container — a gentle reveal.
- **Navigation:** Flat. No blur backdrop, no border at rest. The type is the nav.

## Shapes

Minimal rounding. The geometry is mostly rectilinear, which matches Futura's architectural character. `rounded.md` (4px) on images and cards. `rounded.sm` (2px) on tags and inline elements. `rounded.lg` (10px) only on modals or overlays if any exist.

## Motion

Motion is **organic and understated**. The goal is an interface that feels inhabited — things respond, but they don't perform. All durations are short. All easings are decelerated or spring-like, never linear or bounce.

### Easing tokens

```css
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);   /* Entrances, hover-in — spring-like deceleration */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);    /* Transitions, hover-out — smooth material */
--ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1); /* Slight overshoot — used for card lift, link scale */
```

### Duration tokens

```css
--dur-micro:  120ms;   /* Color changes, underlines */
--dur-move:   260ms;   /* Spatial transitions — hover lift, card scale */
--dur-page:   420ms;   /* Page entrance animations */
--dur-long:   600ms;   /* Scroll-triggered reveals */
```

### Interaction catalogue

**Navigation links:**
- At rest: Futura label, Glaucous color.
- On hover: color transitions to Coral Glow (`--dur-micro`, `--ease-out`). A 1px underline slides in from left to right beneath the text over `180ms`.
- The sliding underline is achieved with a `::after` pseudo-element: `scaleX(0)` → `scaleX(1)`, `transform-origin: left`.

**Case study cards:**
- On hover: card lifts `translateY(-3px)` over `--dur-move` with `--ease-spring`. A 1px Coral Glow border fades in on the card container. The thumbnail image scales to `1.03` (overflow hidden on container) over the same duration.
- On mouse-leave: returns to rest over `--dur-move` with `--ease-in-out`. Slightly slower out than in — cards feel like they settle, not snap back.

**SPA page transitions:**
- Outgoing page: opacity fades to 0, translateY rises by `-8px` over `160ms` with `--ease-in-out`.
- Incoming page: starts opacity 0, translateY `+12px`, transitions to neutral over `--dur-page` with `--ease-out`. The slight asymmetry (content arrives from slightly below) gives directionality without drama.
- Route changes feel like turning a page — not a cut, not a slide.

**Case study section reveals (scroll-triggered):**
- Each `cs-section` div starts at `opacity: 0`, `translateY: 16px`.
- On intersection (threshold 0.15, no rootMargin), transitions to neutral over `--dur-long` with `--ease-out`.
- Sections stagger: each subsequent section adds `80ms` delay relative to the first visible one in a batch. Cap the stagger at 3 elements — after that, all reveal simultaneously. Stagger beyond 3 reads as a loading state, not a design.

**Links within prose:**
- Underline is always present on body-copy links (Coral Glow, 1px, offset 2px).
- On hover: underline thickens to 2px over `--dur-micro`. Text color shifts from primary to a slightly warmer Coral Glow.
- On click/mousedown: link scales very slightly to `1.02` over `80ms` then returns on mouseup. Barely perceptible — feels like pressing something rather than clicking it.

**Stat/metric reveals (outcome section):**
- Numeric stats animate from `0` to their final value when scrolled into view. Duration: `800ms`, easing: `--ease-out`.
- Only applies to percentage or numeric values, not to ratios like "3→1". Use a simple counter function.
- If JS is not available, stats display static. No layout shift.

**Image load:**
- Images load into a surface-colored placeholder that fades out as the image loads. `opacity: 0` → `1` over `240ms`. No cumulative layout shift — the placeholder holds the space with `aspect-ratio`.

### What motion is NOT

- No parallax scrolling on images or backgrounds. It reads dated and distracts from the content.
- No infinite loops or ambient animation. Nothing moves unless the user is moving.
- No skeleton loaders with pulsing gradients — a static surface-colored placeholder is enough.
- No entrance animation on the navigation — it should feel immediately stable on page load.
- No cursor customisation — the OS cursor is fine, and custom cursors are a liability on touch devices.

## Components

### Navigation

Horizontal. Site name (Futura 500, 1.1rem) left-anchored. Links right-aligned as Futura labels. Three links max: Work, About, Writing. On mobile: name left, three links inline right (they fit at the label size). No hamburger.

### Case study card (homepage index)

Thumbnail at 4:3 aspect ratio, surface background, radius-md. Below: company label in Glaucous label type, case study title in Futura h2, role tags. No border at rest. Coral Glow border + lift on hover.

### Tags

Small, Futura label, Glaucous text, surface background, radius-sm. Used for roles and tools. Sentence case (not all-caps) on tags to distinguish from navigation labels.

### Blockquote

Left border: 2px solid Coral Glow (not primary). Background: surface. Padding: 20px 24px. Quote text: EB Garamond 500 italic, 1.2rem. The Coral Glow border on a quote is the only use of the accent color on a non-interactive element — it signals "this mattered enough to quote."

### Decision table

Used in the "decision" section of case studies. Two columns: option considered / reason rejected or chosen. A subtle grid, border-color lines. The chosen row uses surface background to stand out from rejected rows.

## Hero Visuals (Case Study)

Each case study has a hero visual — an inline SVG illustration rendered inside a `Visual` component. These are stylised representations of the product work, not screenshots. They sit inside a `.block` container (`surface` background, `border`, `radius-md`, `aspect-ratio: 16/9`, `overflow: hidden`).

### Structure

A hero visual is a composition of **two panels** connected by a relationship indicator:

1. **Source panel** (left) — the system artefact: a DESIGN.md, a config file, a data schema, a workflow definition. Rendered as a miniature editor/document with a title bar (three bullet dots + filename), section headings, and token rows.
2. **Output panel** (right) — the shipped UI that the source produces: component canvases, screens, data views. Rendered as a **card deck** — stacked cards that cycle on hover to show multiple components.
3. **Connection** — a dashed accent-colored line between the two panels, with a dot terminus. Communicates "this produces that."

The layout uses `position: absolute; inset: 0` on a flex container (`designMdLayout`) so the composition fills the block edge-to-edge with only a thin padding ring.

### Card Deck Behaviour

- Cards stack with slight offset transforms (`translate` + `scale`) to create a physical deck effect.
- On **hover** over the entire `.block` container, cards cycle — the top card moves to the back and the next advances. This uses `setInterval` at **1600ms** cadence, with an immediate first flip on `mouseenter`.
- On `mouseleave`, the interval clears and cards freeze at their current position.
- Card transitions use `cubic-bezier(0.34, 1.4, 0.64, 1)` (spring overshoot) for transform and `ease` for opacity. Duration: `0.42s` transform, `0.34s` opacity.
- Back cards reduce opacity (0.72 for second, 0.4 for third) and shift right+down.
- Each card has a label strip at top (Futura label, uppercase, tracked) and a content area containing the SVG drawing.

### Component Drawings (Inside Cards)

These are hand-crafted SVGs that mimic a design system's component library canvas — the kind of thing a hiring manager recognises from Figma or Storybook. They must look **specific, not generic**.

**Required elements per drawing:**

- **Variant matrix** — show the component across its key dimensions (e.g., columns for variant=danger/success/warning, rows for size=sm/lg). Use column and row headers in mono type.
- **Real content** — use domain-specific labels and data, not "Lorem ipsum" or "Button". For NYSHEX: contract numbers, trade lane names, rate values, NYFI benchmarks. For RentEngine: applicant names, unit numbers, approval statuses.
- **Anatomy / spec section** — an exploded view of one instance with red-line spacing annotations (use `NX.danger` or equivalent at 0.3 stroke, 0.6 opacity). Show key internal dimensions (padding, gap, icon size).
- **Props table** — a small reference block (`surface` background, `border`) listing 3–6 props with types. Prop names in accent color, values in text color, both in mono. This is the detail that signals "this was a real system."
- **State annotations** — small dots, badges, or labels showing active/default/hover/disabled states where relevant.

**Drawing palette:** Each product has its own color namespace (e.g., `NX` for NYSHEX). These are the product's shipped colors, not the portfolio tokens. Keep them in a const object at the top of the component file.

**SVG conventions:**
- `viewBox` should be `"0 0 240 240"` for card content SVGs.
- Use `preserveAspectRatio="xMidYMid meet"` and `width="100%" height="100%"`.
- Font sizes in SVG are small (3–5px for body, 4.5–6px for headings). Use `var(--font-display)` for UI text and `var(--font-mono)` for code/props.
- Use `clipPath` for complex shape clipping (e.g., active button segment inside a rounded group).
- Keep `<defs>` containing `clipPath` elements inside the SVG that uses them.

### Source Panel (DESIGN.md / Config)

The left panel is an SVG rendered via a dedicated class (`designMdSvg`, `flex: 0 0 auto`, `height: 100%`). Structure:

- **Title bar**: 3 bullet circles (`.bullet`, `opacity: 0.4`) + centered filename in `.fileLabel` (mono, 6px).
- **Section headings**: `##` markers in `.hashMarkSm` (accent, mono, 7px) followed by `.sectionHead` (display font, 5.5px, primary fill).
- **Token rows**: key in `.tokenKey` (mono, 4.2px, secondary) and value in `.tokenVal` (mono, 4.2px, primary). Optional color swatches as small rects with `rx="1.2"`.
- **Inline comments**: `.codeComment` (mono, 3px, secondary, 0.5 opacity) placed to the right of swatches.
- **Visual scale bars**: for spacing tokens, show proportional-width rects in accent at 0.3 opacity.
- The panel should be dense — fill the vertical space with 4–5 sections (Colors, Typography, Spacing, Motion, Components).

### Stacking & Z-Index

The `.block` container sets `z-index: 0` to create an isolated stacking context. Card deck z-indices (1–3) are scoped inside it. The SideIndex sits at `z-index: 10`, TopBar at `20`, ContactButton at `40`. Cards must never paint above the SideIndex.

### Responsive

- On narrow viewports the visual scales down naturally (the SVGs use relative sizing and `preserveAspectRatio`).
- The `.designMdLayout` uses `padding: 24px 28px 24px 24px` at all sizes — the SVG content handles its own density.
- The `aspect-ratio: 16/9` on `.block` maintains proportions. No breakpoint overrides needed.

### Accessibility

- All decorative SVGs use `role="presentation"`.
- The `<figcaption>` below each visual provides the text description.
- Card cycling is hover-only (no auto-play, no keyboard trap). Respects `prefers-reduced-motion` via the existing CSS gate on transitions.

## Do's and Don'ts

**Do:**
- Let EB Garamond carry the weight of the case study writing. Don't interrupt it with bullets.
- Use Coral Glow only on interactive elements and blockquote borders. Those are its only two jobs.
- Use `font-feature-settings: "onum" 1` on EB Garamond for body copy — old-style figures sit better in prose.
- Write captions for every image. EB Garamond label, Glaucous color.
- Honour the motion timing. `--dur-micro` for color, `--dur-move` for space. Faster is not better.
- Use `--ease-spring` for elements that lift or grow. The slight overshoot is the difference between mechanical and alive.

**Don't:**
- Use Coral Glow for decorative backgrounds, section dividers, or text that isn't interactive.
- Use EB Garamond for headings, navigation, or labels. The typeface boundary is also a semantic boundary.
- Add motion to elements the user hasn't interacted with (no ambient animation).
- Stack more than 3 animated entrances in quick succession on scroll.
- Put a border on the nav. The nav does not need containment.
- Exceed 5 case studies on the index. Three is the floor. Five is the ceiling.
