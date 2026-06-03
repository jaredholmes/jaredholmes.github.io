---
title: "Rebuilding the rates platform around how shippers actually work"
project: NYSHEX — Rates Ingestion & Management
role: Staff Product Designer (IC)
timeframe: 2026
team: Product, engineering, sales, customer success
outcome: >150% revenue lift over three months
status: Shipped
---

# Rebuilding the rates platform around how shippers actually work

NYSHEX is the data and technology platform for ocean shipping. I joined as the staff product designer, responsible for NYSHEX's flagship products.

The first major project was an overhaul of the rates ingestion tool — an AI-based product that takes thousands of unstructured rate files from carriers and forwarders, parses them, and displays the contents in a uniform, searchable repository. After the redesign shipped, revenue on the product was up more than 150% over three months.

[VISUAL: Hero — wide abstracted shot of the redesigned rates view, or a before/after side-by-side]

## Who the product is for

The primary users are operators and logistics managers at shippers and NVOCCs, with executives occasionally dipping in for higher-level views. They're trying to do a few overlapping things: benchmark rates and carrier performance to decide who to commit volume to, plan freight allocations across lanes, manage exceptions as they happen, and walk into budget and negotiation conversations with full visibility of their costs.

These users don't have time for product theatre. They're often switching between four or five tools, copy-pasting rates into spreadsheets, and chasing carriers over email. The rates tool was meant to be the place that consolidated all of that.

## What was wrong

Two themes ran through the problems users were hitting.

<div class="problem-cards">

**Built around capabilities, not jobs**
- Features existed because they'd been built, not because they slotted into how operators move through their day
- Users were unaware of some of the platform's most important features
- The product was being used in isolation rather than as part of a broader workflow
- Adjacent features that could have completed a workflow went undiscovered

**Hierarchy and legibility**
- Operators scan first and read second; the UI didn't reward scanning
- Information was uniformly weighted, dense without being legible
- Decisions were hard to make at a glance
- The visual experience didn't carry well in sales demos

</div>

[VISUAL: Annotated screenshot of the legacy UI with hierarchy issues called out — can be abstracted]

## How I approached the research

Earlier in my time at NYSHEX I'd built a user research agent that pulled transcripts, sales calls, and customer feedback into structured persona and JTBD updates. It didn't replace talking to users, but it let me move quickly between the strategic level and the specific quote.

What surfaced was that users weren't asking for a better rates *viewer*. They were asking for a tool that respected how they think about lanes, carriers, and decisions. The clearest example: almost nobody thinks about a lane as a single origin-destination pair. They think about head hauls and backhauls together — the round-trip is the unit of economic decision-making, not the leg. The existing search reflected the database schema, not the mental model. That was the gap.

## The decisions that mattered

A redesign of this scope had a hundred small calls. Four were structural enough to be worth naming.

### Searching by multiple locations, not single pairs

The existing search asked users to specify one origin and one destination. To compare head hauls and backhauls, users had to run multiple searches and reconcile them mentally. The redesign let users specify multiple origins and destinations in a single search, with results grouped to show the round-trip economics. This sounds simple. It wasn't — the backend assumptions about how rates relate to lanes had to bend to accommodate it. But it matched how operators actually think, and once shipped, it became one of the most-used features in the tool.

### Search-then-filter, instead of filter-everywhere

The legacy product front-loaded filters. Users were asked to specify a lot before seeing anything. The redesign inverted that: a broad search up front, then progressive specificity through filters applied to the result set. This is a small interaction-design call but it changed how users approached the tool. Instead of "I need to know exactly what I'm looking for before I start," it became "let me see what's here and narrow in."

### An admin centre for ingestion transparency

Rate files often take 24+ hours to process. Customers were filing support tickets asking "where is my file" because they had no way to see. Adding an admin centre that showed the processing status of submitted documents was a small surface that quietly removed a lot of friction. It also reduced inbound support load measurably, which paid for the design work several times over on its own.

### Rate benchmarking in context

Users were leaving the rates tool to check benchmarks elsewhere, then coming back to make decisions. Surfacing benchmarks inline — alongside the rate they were already looking at — added context where the decision was actually being made, increased engagement with NYFI data, and opened legitimate upsell paths into NYSHEX's index products.

[VISUAL: Two or three of the above shown as small abstracted UI fragments — search bar with multiple locations, filter panel, admin centre status view]

## How we iterated

The design medium was prototypes, and most of them didn't ship.

Some variations were set aside for commercial reasons. A few directions, when prototyped, would have cannibalised features the company was actively selling as separate products. In a startup with a tight commercial roadmap, the design that's best for the user in isolation isn't always the design that ships — and the harder, more interesting work is finding the variant that does both.

Others were set aside for technical reasons. Some of the analytics I wanted to surface inline depended on backend services that would have introduced too much UI lag to be usable. We compromised with cached summaries and async loading patterns for the heavier data, which was less elegant than the original concept but actually shippable.

A third set got reshaped as new insights came in — from the research agent and from sales conversations. The head haul/backhaul requirement, for instance, surfaced late and quietly invalidated a few weeks of search-design work. That's the cost of moving fast with research running in parallel; you sometimes throw work away. It's a cost I'd choose again.

## What shipped, and what happened

The redesigned rates ingestion and management surface shipped, and three months later revenue on the product was up more than 150%. The lift wasn't from one mechanism — it came from three running in parallel:

- **Sales conversion improved.** Prospects had an aha moment during demos, often within the first minute. The product looked like something they wanted to use, and the workflow it implied was closer to how they actually worked.
- **Retention and renewals improved.** Existing customers got more out of the product, used it more frequently, and stopped going back to spreadsheets for the things the platform could now do.
- **Per-user revenue increased.** Cross-feature engagement — particularly the inline benchmarking — created natural paths into adjacent products that previously required a separate sales conversation.

A 150% lift over three months has contributing factors beyond design: a strong commercial team, a product that was already gaining traction, broader macro tailwinds in shipping. The redesign isn't the sole cause. But the changes showed up in user behaviour quickly, and the people closest to revenue pointed at them as a meaningful contributor.

## Reflection

Early on I over-indexed on one dominant use case. The rate-comparison flow for a specific lane decision was so frequent in research that I started optimising the whole product around it — which quietly alienated a long tail of users with smaller but equally important needs. Dialling that back meant rebuilding the IA to be less opinionated. The lesson stuck: frequency of a use case isn't the same as its importance to retention. Some quieter workflows are load-bearing for specific high-value customers.

The broader thing this project clarified is that research surfaces what users do, but design has to commit to a mental model. The user research agent gave me speed; the actual decisions were still about choosing which mental model the product would serve. Head hauls and backhauls together, not separately. Search then filter, not filter then search. Benchmarks beside rates, not benchmarks in another tab. None of those are findable in the transcripts directly. They're synthesis calls, and they're the part of the job that doesn't get automated any time soon.
