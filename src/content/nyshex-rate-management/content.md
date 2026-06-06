# NYSHEX — Rates Ingestion & Management

---

title: "Building a rate management system around daily workflows"
project: NYSHEX — Rates Ingestion & Management
role: Staff Product Designer
link: https://nyshex.com/product/rate-management
link label: See More
outcome: >150% sales conversion increase over three months
disclaimer: To respect NDA constraints, images are abstracted. Get in touch to learn more about this project

# An AI-based rate management system built around daily workflows

NYSHEX is a data and technology platform for ocean shipping.

I was the staff product designer responsible for an overhaul of the rates ingestion tool — an AI product that takes thousands of unstructured rate files from carriers and forwarders, parses them, and displays the contents in a uniform, searchable repository. After the redesign shipped product sales more than 150% over three months.

[VISUAL]

## Who the product is for

The primary users are operators and logistics managers at shippers and NVOCCs, with executives occasionally scanning for higher-level views. The users have overlapping goals: benchmark rates and carrier performance to decide who to commit volume to, plan freight allocations across lanes, and prepare for budget and negotiation conversations with full visibility of their costs.

These users are often switching between four or five tools, copy-pasting rates into spreadsheets, and liaising with carriers over email. Rate Management was meant to consolidate the majority of these tasks.

## What was wrong

User research revealed two themes of pain points with the first version of the product.

<div class="problem-cards">

**Built around capabilities, not jobs**

- Features existed because the engineering capability been built, not because they addressed user problems and real-world context
- Users were unaware of some of the platform's most important features
- The product was being used in isolation, rather than as part of a broader end-to-end journey
- Adjacent features that could have completed a workflow went undiscovered

**Hierarchy and legibility**

- Operators scan first and read second; the UI didn't reward scanning
- Information was uniformly weighted, dense without being legible
- Decisions were hard to make at a glance
- The visual experience struggled to communicate value in sales demos

</div>

[VISUAL]

## How I approached the research

Being part of a small team that lacked dedicated researchers, I built an AI user research agent that pulled customer support transcripts, sales calls, and customer feedback into structured persona and pain point updates. It didn't replace talking to users, but it helped design to move quickly between to validate design directions.

What surfaced was that users weren't asking for a better rates *viewer*. They were asking for a tool that matched how they worked with lanes, carriers, and decisions. For example, many users didn’t consider a lane as a single origin-destination pair. They factored in head hauls and backhauls together — the round-trip is the unit of economic decision-making, not the leg. The existing search reflected the database schema instead of the primary mental model.

## Key design decisions

A redesign of this scope involved dozens of detailed changes. Four were structural enough to highlight here.

### Searching by multiple locations, not single pairs

The existing search asked users to specify one origin and one destination. To compare head hauls and backhauls, users had to run multiple searches and reconcile them mentally. The redesign let users specify multiple origins and destinations in a single search, with results grouped to show the round-trip economics. Delivering this required architectural changes led by the design, which was informed by how operators actually think. Once shipped, it became one of the most-used features in the tool.

### Search-then-filter, instead of filter-everywhere

The legacy product front-loaded filters. Users were asked to specify a lot before seeing anything. The redesign inverted this by using a broad search up front, and progressive specificity through filters applied to the result set. This is a small interaction-design detail, but it changed how users approached the tool, allowing them to start broad and focus only when necessary.

### An admin centre for ingestion transparency

Rate files often take several hours to process. Customers were filing support tickets asking for status updates because they had no visibility. Adding an admin centre that showed the processing status of submitted documents was a small surface that instantly improved customer experience while reducing operational support costs.

### Rate benchmarking in context

Users were leaving the rates tool to check benchmarks elsewhere, then coming back to make decisions. Surfacing benchmarks inline — alongside the rate they were already looking at — added context where the decision was actually being made, increased engagement with NYFI (NYSHEX Freight Indices) data, and opened legitimate upsell paths into NYSHEX's index products.

## How we iterated

Design artefacts were delivered as prototypes, refactored several times.

Some variations were set aside for commercial reasons. A few directions, when prototyped, would have cannibalised features the company was actively selling as separate products.

Others were set aside for technical reasons. Some of the analytics initially required depended on backend services that would have introduced front-end lag.

We also refactored based on new insights — from the research agent and from sales conversations. The head haul/backhaul requirement, for instance, surfaced late and required an information architecture pivot.

## What shipped, and what happened

The redesigned rates ingestion and management surface shipped, and three months later revenue product sales increased over 150%. Outcomes included:

- **Sales conversion improved.** Prospects had an “aha moment” during demos, often within the first few minutes. The product looked desirable, and the workflow it implied was closer to how they actually worked.
- **Retention and renewals improved.** Existing customers benefitted, used the product more frequently, and stopped reverting to spreadsheets for tasks they could perform in the platform.
- **Per-user revenue increased.** Cross-feature engagement — particularly the inline benchmarking — created natural paths into adjacent products that previously required a separate sales conversation.

That said, the sales increase had contributing factors beyond design: a strong commercial team, a product that was already gaining traction, broader macro tailwinds in shipping.