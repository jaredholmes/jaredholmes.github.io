export type Highlight =
  | { label: string; value: string }
  | { label: string; live: true; suffix: string; note?: string };

export const about = {
  name: "Jared Holmes",
  // Kept for the visually-hidden <h1> in App.tsx (SEO); no longer shown in the section.
  tagline: "Senior product designer working on AI products in fintech and B2B SaaS.",
  highlights: [
    { label: "Location", value: "Cape Town, South Africa" },
    { label: "Local Time", live: true, suffix: "GMT +2" },
    { label: "Design Experience", value: "7+ years" },
  ] as Highlight[],
  disciplines: [
    "Holistic product design and strategy",
    "Prototyping",
    "Service design",
    "Design systems",
    "User research",
    "Design ops and org building",
  ],
  intro: `Originally from a software development background, I’ve been designing experiences for the past seven years. I started at a design agency in the days of static screens in AdobeXD, when responsive mobile design and single-page web apps were commonplace. I then spent several years in the structured, system-intensive fintech and financial services space, before working senior design roles for B2B SaaS startups.

I’ve shipped products used by both niche teams and millions of users, set up high-performing startup design organisations, and coached several young designers towards rewarding design careers.

Through my various career chapters I’ve learned and taught a range of design disciplines, including:`,
  outro: `### 2026 and beyond: more than just screens

AI raised the ceiling for designers, and this has been particularly true for those with software development experience. My role has evolved from designer to builder: the design process these days often involves detailed functional prototypes and AI-ready design systems. This helps to communicate with product teams and engineers, helps spot edge cases and limitations before they become expensive post-development discoveries, and enables designs to be tested against their demands faster and more accurately.

This way of working is ideal for lean startups with multidisciplinary teams, as well as larger organisations looking to add efficiency and variety into their design processes.

### Let’s chat

Reach out if you’re looking to make your startup more user-focused, want to build a great product, or need help putting together future-proof design systems and processes.

If you’re interested in my thoughts on the industry, check out my [Medium](https://medium.com/@jared-holmes) articles.`,
};
