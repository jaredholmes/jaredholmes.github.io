# RentEngine — Rental Applications

---

title: "Designing rental applications for an AI-native leasing platform"
project: Rental Applications
company: RentEngine
role: Founding Designer
intro: An integrated leasing workflow that delivers meaningful value for property management teams.
link: [https://www.rentengine.io/rental-applications](https://www.rentengine.io/rental-applications)
outcome: Significant uptake by new and existing customers

# Designing rental applications for an AI-native leasing platform

RentEngine is a early-stage startup that helps rental agents and property managers lease their properties and manage their leads in one place. The company has proven product-market fit and considers great UX a competitive advantage.

As RentEngine’s founding designer, I took equal parts in design strategy and execution — usually starting with the CEO to unpack the purpose and value of a product, and taking it all the way through to functional prototypes for engineering.

Rental Applications, a leasing and application management product that lets property managers review, approve, reject, and screen applicants for units currently on the market. It became a flagship product for the company, sold as an upsell over the core subscription, and drove a significant uptake in customer demos and new business.

[VISUAL]

## Who the product is for

RentEngine's users are property management teams. Most are smaller operators, although the company is expanding into the larger multifamily market. Rental Applications was partly designed to bridge that gap — to give smaller managers a product that scales with them, and to give larger ones a workflow they can adopt without changing the rest of their stack.

The user base shaped the design more than any other input. Property managers tend to be busy, managing many apps and channels in a given day, and operating under time pressure. The product needed clear signalling, high accessibility, and interactions that didn't require learning. 

## The core tradeoff: how much to show, when

Striking a balance between RentEngine’s cutting-edge, experimental design philosophy and known, learnable patterns was a key consideration in the overall design. The hardest design problem on this project was the question of information disclosure. How much to show at-a-glance versus behind progressive disclosure was a topic that went through multiple iterations before it felt right.

Some property managers want to see everything about an applicant upfront. Credit, employment, references, screening results, prior tenancy, and anything else that helps them make an instant judgement. They review applications in batches and scan for red flags. Other managers prefer to start with a summary and drill down only when something warrants attention. Some agents work in both ways, depending on the particular property and its demand. The same surface had to serve both.

Progressive disclosure was the obvious answer, but the version that works for one user often frustrates the other. Show too little upfront and users who scan get slowed down and frustrated. Show too much and landing on the page can feel overwhelming, especially when looking for crucial details like credit history and household income. Getting this right took several rounds of prototyping and a few rejected directions before we landed somewhere that worked.

The version that shipped uses a layered approach. The top of an applicant view shows the facts most managers said they needed to make a first-pass judgement — income-to-rent ratio, screening status, application completeness, key flags. Everything else is one click away rather than hidden.

[VISUAL]

## Designing for high-stakes workflows

A rental applications isn’t a simple form submission. A single applicant review touches screening results, income verification, fraud detection, reference checks, identity verification, and custom qualifying questions. The property manager needs to understand the outcome of each before making a decision that has real financial and legal consequences. The design challenge was fitting all of that into one coherent feature without it feeling like six different tools stitched together.

Each of these checks has its own complexity. Credit, criminal, and eviction screening pull from multiple bureaus and return dense, sometimes contradictory results. Income verification cross-references three sources — payroll connections, bank connections, and uploaded documents — and the fraud detection layer flags tampered pay stubs before they reach a manager's review queue, surfacing where the issue is and what the applicant can do about it. References are collected and verified through actual calls to landlords and employers, with transcripts logged. ID verification matches a government ID scan against a selfie with liveness detection. Additionally, managers can configure custom questions and document uploads — pet info, vehicle details, proof of insurance, or anything they deem necessary to make an informed tenant decision.

The design problem was twofold. First, these checks run on different timelines — some resolve instantly, some take hours or days — so the interface had to communicate status clearly across every check without making incomplete applications look broken or untrustworthy. Second, the outcomes carry different weights and different levels of confidence. A clean credit record is definitive; a flagged pay stub is a prompt for further action, not a rejection. The visual hierarchy had to reflect that distinction so managers could act on what was conclusive and investigate signals, without the product making the decision for them.

## The ways of work

Working in South Africa with a remote team based in the US was efficient and rewarding. The time difference can be used deliberately — meetings happen during overlapping hours, while focused work and feedback happens asynchronously. The cadence ends up favouring small, frequent deliveries over long check-ins, which suits the design work itself.

## What shipped, and what happened

Rental Applications shipped to customers and became one of RentEngine's flagship features, sold as an upsell over the core subscription. Beta testers saw 25% increased conversion rates, 14 hour faster application processing, and overall improved UX due to the eliminated need to switch between tabs for a single workflow.

The company saw a significant uptake in customer demos and new business as a direct result of the new feature — the upsell motion gave the sales team a fresh anchor for conversations, and the product itself was substantive enough to close them.

[VISUAL]

## Reflection

This project was a reminder that in some high-stakes B2B products, the interface's job is to give the user confidence in their own judgement, and enable them to act on it. That means being precise about what's conclusive versus what needs investigation, making status legible at a glance without flattening nuance, and never letting the volume of information obscure the signals that actually matter. Achieving a great UX here was about understanding users’ behaviours and mental models, so that the product wouldn’t get in their way.