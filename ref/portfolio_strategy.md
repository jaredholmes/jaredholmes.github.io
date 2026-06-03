# Portfolio Strategy & Structure

## Positioning

**Audience:** Senior IC product design hiring managers and recruiters at remote-friendly US/EU tech startups, primarily in B2B SaaS, AI-native products, and fintech. Goal is passive inbound — these people find Jared via LinkedIn, Google, referrals, or shared writing, and click through to a portfolio that closes the loop.

**Core narrative:** Senior IC product designer with 7+ years across fintech, financial inclusion, and B2B SaaS. Currently shipping AI-driven product at a NY logistics-tech company and freelancing for a US AI SaaS. Strong technical and systems thinking, comfortable with ambiguity, writes well, codes well enough to signal it quietly.

**What the portfolio must do:**
1. Show that work since 2023 exists, with currency through NYSHEX and RentEngine
2. Demonstrate senior IC craft — decisions, tradeoffs, outcomes, not just process
3. Surface writing as a primary differentiator (most senior PDs can't write essays)
4. Quietly signal technical/building fluency without making it the headline
5. Load fast, read well, be a pleasure to navigate

**What to avoid:**
- Awwwards-style theatrics (signals wrong audience, dates badly)
- Junior portfolio shapes (speculative redesigns, personal app concepts, e-commerce mockups)
- Strategist voice in case studies ("managing complexity," "consensus-building")
- More than 5 case studies (dilutes the strong ones)
- Hiding the writing

---

## Site Structure

```
/                          Home — name, one-line pitch, 3 flagship case studies, 3 recent essays
/work                      All case studies (3 flagships + selected earlier work grid)
/work/nyshex              Flagship 1 — current, AI, B2B SaaS, with metrics
/work/rentengine          Flagship 2 — current, US AI SaaS, can show some pixels
/work/absa-credit-coach   Flagship 3 — live product, financial inclusion, established work
/writing                   Own essays (newest first) + Medium archive listed below
/writing/[slug]            Individual essays on own domain (MDX)
/about                     Short, written like a person — not a CV restatement
/colophon (optional)       Site build/credit page, quiet "I code" signal
```

### Home layout (rough)
- Hero: name, one-line pitch ("Senior product designer working on AI products in fintech and B2B SaaS")
- Location/availability strip ("Cape Town · remote · open to senior IC roles")
- 3 flagship case studies, large cards, with one-line framings
- 3 most recent essays, smaller treatment
- Footer: contact, LinkedIn, GitHub, Medium archive link

### Selected earlier work (grid section on /work)
Compact entries with one-line descriptions, no full case studies:
- Absa MyMoney (personal financial management)
- Absa Buy (digital vouchers)
- Cosmo / Boost&Co (investment portfolio system)

Cut entirely: Superbalist concept, Luno Tap-to-Pay concept, WasteAway, Atmocast, e-commerce redesigns.

---

## Case Study Template

Every flagship follows this shape. Decisions, not phases.

```
HERO
  Project name
  One-sentence framing (what it is, who it's for)
  Role · Timeframe · Team shape
  One hero visual — can be abstracted, a diagram, or a wide shot

CONTEXT (2-3 short paragraphs)
  What was the business situation
  What was the user problem
  Why this was hard

THE WORK (3-5 sub-sections)
  Each sub-section is a *decision* or a *problem solved*
  Not "I did research, then I did wireframes, then I did high-fi"
  More like: "Designing the exception flow", "Why we abandoned the dropdown approach",
  "Making the AI agent's confidence visible"
  Each sub-section: 100-250 words + 1-2 visuals (real, abstracted, or diagrammatic)

OUTCOME
  What shipped, what it does, who uses it
  Numbers where available, scope language where not
  Honest about what's unfinished or what would be done differently

REFLECTION (optional, short)
  One thing learned, one thing to do differently
  This is what senior IC hiring managers screenshot
```

---

## Voice

Modeled on Jared's existing Medium writing — which is:

- Measured, slightly British cadence
- Confident but not preachy
- Patient with the reader; sets up context before making claims
- Builds arguments, not lists
- Willing to admit complexity and uncertainty

The case studies should sound like the Medium essays. Less "managing complexity" — more "this was harder than I expected, here's why." Specifically:

- Open with the situation, not the credentials
- Use first-person ("I decided to…") more than passive ("a decision was made…")
- Name the tradeoffs you considered and rejected
- Be honest about constraints, mistakes, and what you'd do differently
- Use technical vocabulary precisely (signals depth)

---

## Technical signaling (subtle)

Designer-who-codes is a useful but oversold positioning. Signal it through:
- Site built in [Astro / Next.js], deployed on Vercel
- Colophon or about-page mention, not homepage
- Case studies that show technical specificity when relevant (design tokens for AI codegen, etc.)
- One or two carefully chosen interactive moments per case study
- The Notes section itself (custom site, not Substack)

Avoid: a "Code" tab, a GitHub-style green-square graph, the phrase "designer + engineer."

---

## Writing strategy

Existing Medium archive is strong but suffers from:
- Hosted on Medium publication, surrounded by other content
- Profile shows 3 followers, which undercuts signal
- Generic in places — strong on ideas, light on personal experience

Going forward:
- New essays published on own domain at `/writing`
- Cross-post selected ones to Medium for distribution (canonical link back to own site)
- Old essays linked from `/writing` archive section, not migrated
- Pace: 4–6 substantive posts per year, story-grounded, drawing on real work
- Subjects: AI product design decisions, lessons from fintech/financial inclusion, design systems for AI-assisted dev, working remote from South Africa

---

## Build stack (recommendation, not locked)

- **Astro** (preferred) or Next.js
- MDX for case studies and essays
- Deployed on Vercel (free, fast, preview URLs)
- View Transitions API or Framer Motion for one or two intentional motion moments
- Lighthouse-perfect, accessible, mobile-first

To be built in a separate Claude Code project once content is locked.
