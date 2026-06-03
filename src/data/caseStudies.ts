import logoNyshex from "../img/logos/logo-nyshex.svg";
import logoRentEngine from "../img/logos/logo-rentengine.svg";
import logoAbsa from "../img/logos/logo-absa.svg";

export interface ProblemCard {
  title: string;
  points: string[];
}

export interface TimelineStep {
  n: number;
  title: string;
  visual?: string;
  body: string;
}

export type VisualVariant =
  | "diagram"
  | "fragments"
  | "annotated"
  | "designmd"
  | "mobileSlider"
  | "ratesWalkthrough"
  | "creditCoachSlider"
  | "creditCoachDiagram";

export type Node =
  | { type: "prose"; md: string }
  | { type: "visual"; caption: string; variant: VisualVariant }
  | { type: "problemCards"; cards: ProblemCard[] }
  | { type: "timeline"; steps: TimelineStep[] };

export interface Section {
  id: string;
  heading?: string;
  nodes: Node[];
}

export interface CaseStudy {
  id: string;
  company: string;
  companyUrl: string;
  logo: string;
  logoHeight?: number;
  title: string;
  shortTitle: string;
  framing: string;
  meta: { role: string; team?: string };
  outcome: string;
  link?: { label: string; href: string };
  hero: { caption: string; variant?: VisualVariant; video?: string };
  sections: Section[];
}

const nyshexRates: CaseStudy = {
  id: "nyshex-rates",
  company: "NYSHEX",
  companyUrl: "https://nyshex.com/",
  logo: logoNyshex,
  title: "Rebuilding the rates platform around how shippers actually work",
  shortTitle: "Rates Platform",
  framing:
    "An AI-based rates ingestion tool that turns thousands of unstructured carrier rate files into a uniform, searchable repository.",
  meta: {
    role: "Staff Product Designer",
  },
  outcome: ">150% revenue lift over three months",
  hero: {
    caption:
      "The redesigned rates surface — search, filter, and the Document Hub that gives operators visibility into ingestion.",
    variant: "ratesWalkthrough",
  },
  sections: [
    {
      id: "nyshex-rates-intro",
      nodes: [
        {
          type: "prose",
          md: `NYSHEX is the data and technology platform for ocean shipping. I joined as the staff product designer, responsible for NYSHEX's flagship products.

The first major project was an overhaul of the rates ingestion tool — an AI-based product that takes thousands of unstructured rate files from carriers and forwarders, parses them, and displays the contents in a uniform, searchable repository. After the redesign shipped, revenue on the product was up more than 150% over three months.`,
        },
      ],
    },
    {
      id: "nyshex-rates-who",
      heading: "Who the product is for",
      nodes: [
        {
          type: "prose",
          md: `The primary users are operators and logistics managers at shippers and NVOCCs, with executives occasionally dipping in for higher-level views. They're trying to do a few overlapping things: benchmark rates and carrier performance to decide who to commit volume to, plan freight allocations across lanes, manage exceptions as they happen, and walk into budget and negotiation conversations with full visibility of their costs.

These users don't have time for product theatre. They're often switching between four or five tools, copy-pasting rates into spreadsheets, and chasing carriers over email. The rates tool was meant to be the place that consolidated all of that.`,
        },
      ],
    },
    {
      id: "nyshex-rates-wrong",
      heading: "What was wrong",
      nodes: [
        { type: "prose", md: `Two themes ran through the problems users were hitting.` },
        {
          type: "problemCards",
          cards: [
            {
              title: "Built around capabilities, not jobs",
              points: [
                "Features existed because they'd been built, not because they slotted into how operators move through their day",
                "Users were unaware of some of the platform's most important features",
                "The product was being used in isolation rather than as part of a broader workflow",
                "Adjacent features that could have completed a workflow went undiscovered",
              ],
            },
            {
              title: "Hierarchy and legibility",
              points: [
                "Operators scan first and read second; the UI didn't reward scanning",
                "Information was uniformly weighted, dense without being legible",
                "Decisions were hard to make at a glance",
                "The visual experience didn't carry well in sales demos",
              ],
            },
          ],
        },
        {
          type: "visual",
          variant: "annotated",
          caption:
            "Annotated view of the legacy UI, with the hierarchy and legibility problems called out.",
        },
      ],
    },
    {
      id: "nyshex-rates-research",
      heading: "How I approached the research",
      nodes: [
        {
          type: "prose",
          md: `Earlier in my time at NYSHEX I'd built a user research agent that pulled transcripts, sales calls, and customer feedback into structured persona and JTBD updates. It didn't replace talking to users, but it let me move quickly between the strategic level and the specific quote.

What surfaced was that users weren't asking for a better rates *viewer*. They were asking for a tool that respected how they think about lanes, carriers, and decisions. The clearest example: almost nobody thinks about a lane as a single origin-destination pair. They think about head hauls and backhauls together — the round-trip is the unit of economic decision-making, not the leg. The existing search reflected the database schema, not the mental model. That was the gap.`,
        },
      ],
    },
    {
      id: "nyshex-rates-decisions",
      heading: "The decisions that mattered",
      nodes: [
        {
          type: "prose",
          md: `A redesign of this scope had a hundred small calls. Four were structural enough to be worth naming.

### Searching by multiple locations, not single pairs

The existing search asked users to specify one origin and one destination. To compare head hauls and backhauls, users had to run multiple searches and reconcile them mentally. The redesign let users specify multiple origins and destinations in a single search, with results grouped to show the round-trip economics. This sounds simple. It wasn't — the backend assumptions about how rates relate to lanes had to bend to accommodate it. But it matched how operators actually think, and once shipped, it became one of the most-used features in the tool.

### Search-then-filter, instead of filter-everywhere

The legacy product front-loaded filters. Users were asked to specify a lot before seeing anything. The redesign inverted that: a broad search up front, then progressive specificity through filters applied to the result set. This is a small interaction-design call but it changed how users approached the tool. Instead of "I need to know exactly what I'm looking for before I start," it became "let me see what's here and narrow in."

### An admin centre for ingestion transparency

Rate files often take 24+ hours to process. Customers were filing support tickets asking "where is my file" because they had no way to see. Adding an admin centre that showed the processing status of submitted documents was a small surface that quietly removed a lot of friction. It also reduced inbound support load measurably, which paid for the design work several times over on its own.

### Rate benchmarking in context

Users were leaving the rates tool to check benchmarks elsewhere, then coming back to make decisions. Surfacing benchmarks inline — alongside the rate they were already looking at — added context where the decision was actually being made, increased engagement with NYFI data, and opened legitimate upsell paths into NYSHEX's index products.`,
        },
        {
          type: "visual",
          variant: "fragments",
          caption:
            "Abstracted UI fragments — multi-location search, the progressive filter panel, and the ingestion admin centre.",
        },
      ],
    },
    {
      id: "nyshex-rates-iterated",
      heading: "How we iterated",
      nodes: [
        {
          type: "prose",
          md: `The design medium was prototypes, and most of them didn't ship.

Some variations were set aside for commercial reasons. A few directions, when prototyped, would have cannibalised features the company was actively selling as separate products. In a startup with a tight commercial roadmap, the design that's best for the user in isolation isn't always the design that ships — and the harder, more interesting work is finding the variant that does both.

Others were set aside for technical reasons. Some of the analytics I wanted to surface inline depended on backend services that would have introduced too much UI lag to be usable. We compromised with cached summaries and async loading patterns for the heavier data, which was less elegant than the original concept but actually shippable.

A third set got reshaped as new insights came in — from the research agent and from sales conversations. The head haul/backhaul requirement, for instance, surfaced late and quietly invalidated a few weeks of search-design work. That's the cost of moving fast with research running in parallel; you sometimes throw work away. It's a cost I'd choose again.`,
        },
      ],
    },
    {
      id: "nyshex-rates-shipped",
      heading: "What shipped, and what happened",
      nodes: [
        {
          type: "prose",
          md: `The redesigned rates ingestion and management surface shipped, and three months later revenue on the product was up more than 150%. The lift wasn't from one mechanism — it came from three running in parallel:

- **Sales conversion improved.** Prospects had an aha moment during demos, often within the first minute. The product looked like something they wanted to use, and the workflow it implied was closer to how they actually worked.
- **Retention and renewals improved.** Existing customers got more out of the product, used it more frequently, and stopped going back to spreadsheets for the things the platform could now do.
- **Per-user revenue increased.** Cross-feature engagement — particularly the inline benchmarking — created natural paths into adjacent products that previously required a separate sales conversation.

A 150% lift over three months has contributing factors beyond design: a strong commercial team, a product that was already gaining traction, broader macro tailwinds in shipping. The redesign isn't the sole cause. But the changes showed up in user behaviour quickly, and the people closest to revenue pointed at them as a meaningful contributor.`,
        },
      ],
    },
    {
      id: "nyshex-rates-reflection",
      heading: "Reflection",
      nodes: [
        {
          type: "prose",
          md: `Early on I over-indexed on one dominant use case. The rate-comparison flow for a specific lane decision was so frequent in research that I started optimising the whole product around it — which quietly alienated a long tail of users with smaller but equally important needs. Dialling that back meant rebuilding the IA to be less opinionated. The lesson stuck: frequency of a use case isn't the same as its importance to retention. Some quieter workflows are load-bearing for specific high-value customers.

The broader thing this project clarified is that research surfaces what users do, but design has to commit to a mental model. The user research agent gave me speed; the actual decisions were still about choosing which mental model the product would serve. Head hauls and backhauls together, not separately. Search then filter, not filter then search. Benchmarks beside rates, not benchmarks in another tab. None of those are findable in the transcripts directly. They're synthesis calls, and they're the part of the job that doesn't get automated any time soon.`,
        },
      ],
    },
  ],
};

const nyshexDesignSystem: CaseStudy = {
  id: "nyshex-design-system",
  company: "NYSHEX",
  companyUrl: "https://nyshex.com/",
  logo: logoNyshex,
  title: "A next-generation design system",
  shortTitle: "Design System",
  framing:
    "A design system that serves as a source of truth for AI-native teams.",
  meta: {
    role: "Staff Product Designer",
    team: "Product, engineering, design",
  },
  outcome:
    "50% reduction in concept-to-production time; improved overall front-end quality",
  hero: {
    caption:
      "Hero — the DESIGN.md alongside a shipped component, the source of truth living in the codebase.",
    variant: "designmd",
  },
  sections: [
    {
      id: "nyshex-ds-intro",
      nodes: [
        {
          type: "prose",
          md: `Design systems often fail for organisational reasons rather than technical ones. Design and engineering drift, the system stops describing what's actually in production, and engineering quietly stops using it.

This was the situation at NYSHEX when I joined as the staff product designer. The design system existed as outdated Figma components and variables that no longer matched the shipped code. This was understandable, since the design team was small and heavily focused on shipping new features during a period of growth. This hindered the handover process, and was also incompatible with more modern AI-native workflows that had been adopted by the product team.

In collaboration with the CTO, I rebuilt the design system as something that served product and engineering teams, shifting it from Figma-based to code-based, with a DESIGN.md as the source of truth. Concept-to-shipped-code time on complex features dropped by more than half, and consistency was built into the new handover process.`,
        },
      ],
    },
    {
      id: "nyshex-ds-start",
      heading: "Where and why we started",
      nodes: [
        { type: "prose", md: `Two themes ran through what was broken.` },
        {
          type: "problemCards",
          cards: [
            {
              title: "Out of sync with production",
              points: [
                "The Figma file no longer matched what was actually shipped",
                "Variants had accumulated over time, many unused or duplicated",
                "Tokens were inconsistent, with multiple names for the same value",
                "Documentation was thin and didn't reflect current standards",
              ],
            },
            {
              title: "Built for wireframes, not prototypes",
              points: [
                "Components were Figma-only and couldn't drive functional prototypes",
                "Interactions had to be re-explained to coding agents for every project",
                "Functional nuance got lost in the handoff from static design to shipped code",
                "Forced to choose between high-fidelity, accurate wireframes, or low-fidelity, concept-based functional prototypes",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "nyshex-ds-arc",
      heading: "The arc of the project",
      nodes: [
        {
          type: "timeline",
          steps: [
            {
              n: 1,
              title: "Auditing the drift",
              body: "Before designing anything new, I mapped the gap between the Figma system and the shipped code. There were variants for states that no longer existed, components named differently in design and code, and tokens duplicated across files. There were also new shipped components that didn't exist in Figma.",
            },
            {
              n: 2,
              title: "Rebuilding Figma to match production",
              body: "I did a once-off pass to bring the Figma system back into truth. This involved auditing components, creating new components, consolidating tokens, and writing the standards that had been used implicitly. Not a redesign, but a reset to ensure the design system overhaul was based on a solid foundation.",
            },
            {
              n: 3,
              title: "Adding the missing patterns",
              body: "With the Figma-based design system and documentation updated, I added the broader patterns that had been missing — standardised approaches to searching, filtering, downloading, data display, empty states, loading, and various other common interactions. These tend to be treated ad-hoc during design or development, but they determine whether a product feels consistent and trustworthy across features.",
            },
            {
              n: 4,
              title: "Watching the DESIGN.md pattern emerge",
              body: "During this time, DESIGN.md was a relatively new concept, not yet adopted by many design teams. Part of my role at the company was to stay up to date with the latest industry developments and assess whether they were worth adopting in our context. The DESIGN.md was an ideal solution for our use-case: heavy AI-assisted development, designers and product managers increasingly prototyping to explore and communicate ideas, and a design system that needed to be maintained and distributed in a single place.",
            },
            {
              n: 5,
              title: "Shifting the source of truth to code",
              body: "I moved the source of truth out of Figma and into the codebase. This involved extracting visual designs in Figma to make them explicit in markdown format, extracting tokens from front-end code repos, and integrating design patterns and principles. The DESIGN.md captured the rationale behind tokens, patterns, and tradeoffs. This was the piece that made the system useful to engineers and to AI coding tools, while also being legible and maintainable to designers.",
            },
            {
              n: 6,
              title: "Redefining Figma's role",
              body: "Figma stopped being the source of truth, but it stayed in use. Designers used it for ideation, small visual changes, and exploration that would be inefficient to prompt for. The split was natural enough that it was readily adopted internally — designers still had a place to design visual-heavy artefacts, while being able to shift to high-fidelity functional prototypes that left minimal handover ambiguity.",
            },
            {
              n: 7,
              title: "Embedding DESIGN.md in shipped code",
              body: "The hardest part was making sure the DESIGN.md was actually informing the front-end code that shipped, not just sitting in the repo as documentation. This took time and required engineering to reference it during implementation, and AI coding tools to pull from it when generating components. It required a proof of concept and organisational buy-in. Once that loop was working, the system started reinforcing itself: the more code adhered to DESIGN.md, the more useful DESIGN.md became as context for the next thing built.",
            },
            {
              n: 8,
              title: "Proving it on a complex feature",
              body: "The first real test was a complex document management hub with multi-state documents, downloadable reports, charts, and micro-interactions across tooltips and modals. Under the old workflow, something this nuanced would have taken weeks of prototype creation, review, and rework. With the new system, I built functional prototypes that pulled from the same components engineering would ship, checked feasibility with engineers in real time, and AI coding tools generated implementation directly against the DESIGN.md. Over the next several projects, end-to-end time from concept to shipped code dropped by more than half. Quality improved at the same time, because the nuance and consistency previously lost in translation travelled with the prototype.",
            },
          ],
        },
      ],
    },
    {
      id: "nyshex-ds-results",
      heading: "The results",
      nodes: [
        {
          type: "prose",
          md: `The new system is in active use across the platform. Concept-to-shipped-code time on complex features is down by more than half. Design and engineering work from the same artefacts, which has reduced the small daily friction that used to require regular rework.

The AI codegen benefit has been the most valuable result. Coding agents producing implementation against the DESIGN.md generate output that already adheres to the system. This means designers and engineers spend less time correcting trivial deviations, and more time on the parts of the work that need human judgement.`,
        },
      ],
    },
    {
      id: "nyshex-ds-reflection",
      heading: "Reflection",
      nodes: [
        {
          type: "prose",
          md: `The thing I underestimated was how much of the work would be about adoption rather than design. The technical decisions were defensible quickly. Getting the DESIGN.md to actually inform shipped code took months of consensus-building and negotiation.

This project proved that it can be worth taking a risk of adopting a technology early if it shows strong promise for a team's particular context. DESIGN.md was a niche pattern when the team started exploring it, but it was clearly a suitable approach for NYSHEX. In a different context, the cost of being early may have outweighed the benefit.`,
        },
      ],
    },
  ],
};

const rentEngine: CaseStudy = {
  id: "rentengine",
  company: "RentEngine",
  companyUrl: "https://www.rentengine.io/",
  logo: logoRentEngine,
  logoHeight: 36,
  title: "Designing rental applications for an AI-native leasing platform",
  shortTitle: "Rental Applications",
  framing:
    "An integrated leasing workflow that delivers meaningful value for property management teams.",
  meta: {
    role: "Founding Designer",
  },
  outcome: "Significant uptake by new and existing customers",
  link: {
    label: "See more",
    href: "https://www.rentengine.io/rental-applications",
  },
  hero: {
    video: "/rentengine-hero.mp4",
    caption:
      "The shipped Rental Applications surface — applicant list and detail view in motion.",
  },
  sections: [
    {
      id: "rentengine-intro",
      nodes: [
        {
          type: "prose",
          md: `RentEngine is a early-stage startup that helps rental agents and property managers lease their properties and manage their leads in one place. The company has proven product-market fit and considers great UX a competitive advantage.

As RentEngine's founding designer, I took equal parts in design strategy and execution — usually starting with the CEO to unpack the purpose and value of a product, and taking it all the way through to functional prototypes for engineering.

Rental Applications, a leasing and application management product that lets property managers review, approve, reject, and screen applicants for units currently on the market. It became a flagship product for the company, sold as an upsell over the core subscription, and drove a significant uptake in customer demos and new business.`,
        },
      ],
    },
    {
      id: "rentengine-who",
      heading: "Who the product is for",
      nodes: [
        {
          type: "prose",
          md: `RentEngine's users are property management teams. Most are smaller operators, although the company is expanding into the larger multifamily market. Rental Applications was partly designed to bridge that gap — to give smaller managers a product that scales with them, and to give larger ones a workflow they can adopt without changing the rest of their stack.

The user base shaped the design more than any other input. Property managers tend to be busy, managing many apps and channels in a given day, and operating under time pressure. The product needed clear signalling, high accessibility, and interactions that didn't require learning.`,
        },
      ],
    },
    {
      id: "rentengine-tradeoff",
      heading: "The core tradeoff: how much to show, when",
      nodes: [
        {
          type: "prose",
          md: `Striking a balance between RentEngine's cutting-edge, experimental design philosophy and known, learnable patterns was a key consideration in the overall design. The hardest design problem on this project was the question of information disclosure. How much to show at-a-glance versus behind progressive disclosure was a topic that went through multiple iterations before it felt right.

Some property managers want to see everything about an applicant upfront. Credit, employment, references, screening results, prior tenancy, and anything else that helps them make an instant judgement. They review applications in batches and scan for red flags. Other managers prefer to start with a summary and drill down only when something warrants attention. Some agents work in both ways, depending on the particular property and its demand. The same surface had to serve both.

Progressive disclosure was the obvious answer, but the version that works for one user often frustrates the other. Show too little upfront and users who scan get slowed down and frustrated. Show too much and landing on the page can feel overwhelming, especially when looking for crucial details like credit history and household income. Getting this right took several rounds of prototyping and a few rejected directions before we landed somewhere that worked.

The version that shipped uses a layered approach. The top of an applicant view shows the facts most managers said they needed to make a first-pass judgement — income-to-rent ratio, screening status, application completeness, key flags. Everything else is one click away rather than hidden.`,
        },
        {
          type: "visual",
          variant: "diagram",
          caption:
            "Applicant detail view showing the layered disclosure — first-pass facts up top, full depth one click away.",
        },
      ],
    },
    {
      id: "rentengine-stakes",
      heading: "Designing for high-stakes workflows",
      nodes: [
        {
          type: "prose",
          md: `A rental applications isn't a simple form submission. A single applicant review touches screening results, income verification, fraud detection, reference checks, identity verification, and custom qualifying questions. The property manager needs to understand the outcome of each before making a decision that has real financial and legal consequences. The design challenge was fitting all of that into one coherent feature without it feeling like six different tools stitched together.

Each of these checks has its own complexity. Credit, criminal, and eviction screening pull from multiple bureaus and return dense, sometimes contradictory results. Income verification cross-references three sources — payroll connections, bank connections, and uploaded documents — and the fraud detection layer flags tampered pay stubs before they reach a manager's review queue, surfacing where the issue is and what the applicant can do about it. References are collected and verified through actual calls to landlords and employers, with transcripts logged. ID verification matches a government ID scan against a selfie with liveness detection. Additionally, managers can configure custom questions and document uploads — pet info, vehicle details, proof of insurance, or anything they deem necessary to make an informed tenant decision.

The design problem was twofold. First, these checks run on different timelines — some resolve instantly, some take hours or days — so the interface had to communicate status clearly across every check without making incomplete applications look broken or untrustworthy. Second, the outcomes carry different weights and different levels of confidence. A clean credit record is definitive; a flagged pay stub is a prompt for further action, not a rejection. The visual hierarchy had to reflect that distinction so managers could act on what was conclusive and investigate signals, without the product making the decision for them.`,
        },
      ],
    },
    {
      id: "rentengine-ways",
      heading: "The ways of work",
      nodes: [
        {
          type: "prose",
          md: `Working in South Africa with a remote team based in the US was efficient and rewarding. The time difference can be used deliberately — meetings happen during overlapping hours, while focused work and feedback happens asynchronously. The cadence ends up favouring small, frequent deliveries over long check-ins, which suits the design work itself.`,
        },
      ],
    },
    {
      id: "rentengine-shipped",
      heading: "What shipped, and what happened",
      nodes: [
        {
          type: "prose",
          md: `Rental Applications shipped to customers and became one of RentEngine's flagship features, sold as an upsell over the core subscription. Beta testers saw 25% increased conversion rates, 14 hour faster application processing, and overall improved UX due to the eliminated need to switch between tabs for a single workflow.

The company saw a significant uptake in customer demos and new business as a direct result of the new feature — the upsell motion gave the sales team a fresh anchor for conversations, and the product itself was substantive enough to close them.`,
        },
        {
          type: "visual",
          variant: "mobileSlider",
          caption:
            "The shipped applicant experience on mobile — home, applications, housing, and other.",
        },
      ],
    },
    {
      id: "rentengine-reflection",
      heading: "Reflection",
      nodes: [
        {
          type: "prose",
          md: `This project was a reminder that in some high-stakes B2B products, the interface's job is to give the user confidence in their own judgement, and enable them to act on it. That means being precise about what's conclusive versus what needs investigation, making status legible at a glance without flattening nuance, and never letting the volume of information obscure the signals that actually matter. Achieving a great UX here was about understanding users' behaviours and mental models, so that the product wouldn't get in their way.`,
        },
      ],
    },
  ],
};

const absaCreditCoach: CaseStudy = {
  id: "absa-credit-coach",
  company: "Absa",
  companyUrl: "https://www.absa.co.za/personal/",
  logo: logoAbsa,
  logoHeight: 36,
  title: "A credit score tool built around behaviour change",
  shortTitle: "Credit Coach",
  framing:
    "A free credit tool in the Absa Banking App that helps customers see, understand, and improve their credit score.",
  meta: {
    role: "Lead Product & Service Designer",
  },
  outcome: "Used 2M+ times in first six months",
  link: {
    label: "Product page",
    href: "https://www.absa.co.za/personal/credit-coach/",
  },
  hero: {
    caption:
      "Credit Coach in the Absa Banking App — introduction, score overview, insights, and account detail.",
    variant: "creditCoachSlider",
  },
  sections: [
    {
      id: "absa-cc-intro",
      nodes: [
        {
          type: "prose",
          md: `Absa Credit Coach is a free tool in the Absa Banking App that helps customers see, understand, and improve their credit score. It was built to be more transparent than other credit tools about how scores are calculated, and to connect customers who need help with the means to get it.

I was the lead product and service designer, and I joined when there was nothing — no designs, no technical infrastructure, not even a partnership in place. I was involved early in the RFP and partnership process with the credit bureau, making sure that what they could provide and what we intended to ship stayed aligned. The product launched in April 2024 and had over two million views within its first six months. It's since become an increasingly important part of the bank's digital lending strategy.`,
        },
      ],
    },
    {
      id: "absa-cc-who",
      heading: "Who it's for",
      nodes: [
        {
          type: "prose",
          md: `Credit Coach has a broad user base, but it's aimed primarily at customers with lower credit scores — people who may need help understanding how to manage credit responsibly. In South Africa, where many people carry difficult debt, that's a large and underserved group. The tool sits inside the bank's primary channel, the mobile banking app, so it reaches customers where they already are.`,
        },
      ],
    },
    {
      id: "absa-cc-discovery",
      heading: "Driving discovery and engagement",
      nodes: [
        {
          type: "prose",
          md: `The business case for Credit Coach was clear. A tool that helps customers improve their credit health should, over time, reduce missed payments and loan collections. That's good for the customer and good for the bank.

The hard part was the customer side. Customer interviews told us something uncomfortable: people found the idea of a credit tool interesting and useful, but only in the abstract. They'd agree it was worth having, and then they'd never open it. A credit score is something most people would rather not look at. Building a tool that simply displayed one accurately would have produced a product nobody used.

The insight that reframed the project was in the name. Credit Coach couldn't be a calculator. It had to be a coach — something that notifies you when things change, tracks your progress over time, and makes your achievements tangible. The shift from *informative* to *motivational* changed what we were building. Instead of a place you go to check a number, it became something that comes to you, marks your progress, and gives you a reason to come back.`,
        },
        {
          type: "visual",
          variant: "creditCoachDiagram",
          caption:
            "Hierarchy of credit behaviours and the nudge engagement loop that drove the coaching model.",
        },
      ],
    },
    {
      id: "absa-cc-behaviour",
      heading: "Designing for behaviour change",
      nodes: [
        {
          type: "prose",
          md: `The behaviour the product was ultimately trying to support was better credit and loan repayment. That meant a degree of education — helping customers understand what actually moves a credit score — alongside a product designed to be habit-forming in a healthy way. The aim was for customers to check in regularly, understand the implications of what they saw, and feel motivated toward changes like more careful spending and prioritising debt repayment.

Designing for behaviour change inside a bank comes with constraints from every direction — technology, legacy systems, credit risk, compliance, and the business itself. Holding the coaching vision steady through all of that was a large part of the job. It was easy for the product to drift back toward being a data display, because a data display is simpler to build and easier to get signed off. Keeping it a coach took sustained effort.`,
        },
      ],
    },
    {
      id: "absa-cc-connecting",
      heading: "Connecting the score to the rest of the customer's banking",
      nodes: [
        {
          type: "prose",
          md: `One advantage Absa had that standalone credit apps don't: the score didn't have to live in isolation. Because Credit Coach sat inside the banking app, it could connect a customer's credit score to the actual credit products they held with the bank, and suggest next best actions — paying off an overdue account, or setting aside a buffer in a savings account.

On its own, each of these is a small thing. Together they removed a real friction. Customers didn't have to move between a separate credit-score app and their banking app to act on what they learned, and the recommendations gave them a concrete next step rather than just a number and a vague sense they should do better.`,
        },
      ],
    },
    {
      id: "absa-cc-constraints",
      heading: "Constraints",
      nodes: [
        {
          type: "prose",
          md: `Not everything we envisioned made it in. The product was slower to load than we'd hoped, and we weren't always able to surface a complete picture of a customer's credit position. Some of the originally planned functionality was cut or scaled back against technical realities.

These weren't design failures so much as the normal friction of shipping an ambitious product on top of existing bank infrastructure. But they did shape what launched, and they're part of why my reflection below is about ambition and delivery rather than craft.`,
        },
      ],
    },
    {
      id: "absa-cc-shipped",
      heading: "What shipped, and what happened",
      nodes: [
        {
          type: "prose",
          md: `Credit Coach launched in April 2024 and passed two million views within six months. What's most telling is *which* features customers gravitated to. The most-used parts of the product turned out to be the ones that supported the coaching model — credit score comparisons, the ability to dispute incorrect records directly from the app, and visibility into missed payments across all of a customer's accounts, not just their Absa ones. People didn't just want to see a number. They wanted to understand it, correct it, and act on it. That validated the core bet.

The product is live today and has become a growing part of how the bank approaches digital lending.`,
        },
      ],
    },
  ],
};

export const caseStudies: CaseStudy[] = [nyshexRates, nyshexDesignSystem, rentEngine, absaCreditCoach];
