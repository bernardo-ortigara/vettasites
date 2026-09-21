
export type LogosItem = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
export const logos: LogosItem[] = [
    { height: "64", imgSrc: "/assets/media/images/911144d091cb.png", width: "246" },
    { height: "45", imgSrc: "/assets/media/images/e87a3d2783c3.png", width: "206" },
    { height: "90", imgSrc: "/assets/media/svg/d46969807239.svg", width: "524", sizes: "104px", srcSet: "/assets/media/svg/c353bbcb9492.svg 512w, /assets/media/svg/d46969807239.svg 524w" },
    { height: "64", imgSrc: "/assets/media/images/f365e588160f.png", width: "302" },
    { height: "52", imgSrc: "/assets/media/images/ac61b5b7dc60.png", width: "416" },
    { height: "64", imgSrc: "/assets/media/images/911144d091cb.png", width: "246" }
];

export type PlanFeatureItem = {
  description: string;
};
export const planFeaturesEssential: PlanFeatureItem[] = [
    { description: "Custom-crafted visual identity" },
    { description: "Responsive, modern website design" },
    { description: "High-quality imagery and production" }
];

export const planFeaturesStandard: PlanFeatureItem[] = [
    { description: "Custom-crafted visual identity" },
    { description: "Responsive, modern website design" },
    { description: "High-quality imagery and production" },
    { description: "Structured layouts with clean typography" },
    { description: "Conversion-focused page strategy" },
    { description: "Fast, optimized performance setup" }
];

export const planFeaturesComplete: PlanFeatureItem[] = [
    { description: "Custom-crafted visual identity" },
    { description: "Responsive, modern website design" },
    { description: "High-quality imagery and production" },
    { description: "Structured layouts with clean typography" },
    { description: "Conversion-focused page strategy" },
    { description: "Fast, optimized performance setup" },
    { description: "Seamless CMS and organization" },
    { description: "Dedicated support for revisions" }
];

export type TestimonialImage = {
  alt: string;
  src: string;
  srcSet: string;
};
export type TestimonialItem = {
  quote: string;
  quoteBase?: string;
  name: string;
  role: string;
  portrait: TestimonialImage & { width: string; height: string };
  logo: { src: string; width: string; height: string };
  avatar: TestimonialImage;
};
export const testimonials: TestimonialItem[] = [
    {
        quote: "                         “VETTA delivered with clarity. Their structured workflow and fast turnaround made our redesign launch seamless. They’ve become our trusted partner for every major creative push.”",
        quoteBase: "                         “VETTA delivers with clarity. Their structured workflow and fast turnaround made our redesign launch seamless. They’ve become our trusted partner for every major creative push.”",
        name: "Adrian Velasco",
        role: "NovaLabs / Creative Lead",
        portrait: { alt: "Man Hoodie", src: "/assets/media/images/7581dd9e5d6f.png", srcSet: "/assets/media/images/e3b5cac7489f.png 716w, /assets/media/images/7581dd9e5d6f.png 896w", width: "896", height: "1280" },
        logo: { src: "/assets/media/svg/68c38735cda3.svg", width: "76", height: "16" },
        avatar: { alt: "Women Side Pose", src: "/assets/media/images/beaaaddd3941.png", srcSet: "/assets/media/images/2f2d20acf0ee.png 512w, /assets/media/images/beaaaddd3941.png 1024w" }
    },
    {
        quote: "                         “The team understood our vision instantly. Clean replies, flexible timelines, and consistently refined work with punch. VETTA gave our brand the modern edge we were missing.”",
        name: "Gracia Michelle",
        role: "Apple Co. / Senior Lead Engineer",
        portrait: { alt: "Man Overshirt", src: "/assets/media/images/59ca2b54402e.png", srcSet: "/assets/media/images/48460b2bbd11.png 716w, /assets/media/images/59ca2b54402e.png 896w", width: "896", height: "1280" },
        logo: { src: "/assets/media/images/7606ec0e4371.png", width: "303", height: "67" },
        avatar: { alt: "Women Side Pose", src: "/assets/media/images/e6f70244dd17.png", srcSet: "/assets/media/images/322ebb0029ee.png 512w, /assets/media/images/e6f70244dd17.png 1024w" }
    },
    {
        quote: "                         “Professional, thoughtful, and incredibly detail-driven. VETTA supported us through multiple product rollouts with steady direction and polished execution. Highly dependable every time.”",
        name: "Kasandra, Leon, Miles",
        role: "Miro One / Team Lead Members",
        portrait: { alt: "Woman", src: "/assets/media/images/a8a049fba604.png", srcSet: "/assets/media/images/7292e9ec2814.png 761w, /assets/media/images/a8a049fba604.png 880w", width: "880", height: "1184" },
        logo: { src: "/assets/media/images/7129aba0969b.png", width: "258", height: "66" },
        avatar: { alt: "Team", src: "/assets/media/images/c80849aeff3f.png", srcSet: "/assets/media/images/6dcc2299a6ae.png 512w, /assets/media/images/c80849aeff3f.png 1024w" }
    },
]

export type TestimonialStatColumn = {
  figures: string[];
  title: string;
  subtitle: string;
};
export const testimonialStats: TestimonialStatColumn[] = [
    { figures: ["122+", "257+", "315+"], title: "Success Rate", subtitle: "Reliable execution" },
    { figures: ["99%", "84%", "94%"], title: "Client Satisfaction", subtitle: "Seamless delivery" }
];



export type FaqItem = {
  question: string;
  answer: string;
};
export const faqs: FaqItem[] = [
    {
        question: "What distinguishes us from other agencies?",
        answer: "VETTA blends structured design with purposeful clarity, moving beyond surface visuals to create refined systems that shape brands with long-term impact."
    },
    {
        question: "Why not hire an in-house designer or freelancer?",
        answer: "You get senior-level consistency without overhead. VETTA delivers focused, high-quality output with the flexibility and precision solo designers often can’t match."
    },
    {
        question: "Are creative requests truly unlimited?",
        answer: "Yes—requests flow through a structured queue. VETTA handles each task with intention, ensuring every deliverable remains polished, thoughtful, and on-brand."
    },
    {
        question: "How fast will I receive my work?",
        answer: "VETTA adapts effortlessly. Whether it’s one campaign or a full system, the same clarity, craftsmanship, and refined design process applies from start to finish."
    },
    {
        question: "What if I have a single project?",
        answer: "Most tasks are delivered within a few days. VETTA’s streamlined workflow ensures each piece is crafted with balance, detail, and dependable turnaround."
    }
];

export type ProjectImage = {
  alt: string;
  src: string;
  srcSet?: string;
  width: string;
  height: string;
  aspect: string;
};
export type ProjectFact = {
  label: string;
  value: string;
};
export type ProjectChapter = {
  heading: string;
  body: string;
};
export type ProjectItem = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  liveUrl?: string;
  scope: string[];
  image: ProjectImage;
  span: "wide" | "tall";
  intro: string;
  facts: ProjectFact[];
  chapters: ProjectChapter[];
  stats: { figure: string; label: string }[];
  gallery: ProjectImage[];
};

export const projects: ProjectItem[] = [
    {
        slug: "vellfire-calibration",
        index: "(01)",
        title: "Vellfire Calibration",
        category: "Art Direction",
        year: "2025",
        summary: "A calibrated identity for a precision-instrument marque — one grid, one grey, nothing decorative.",
        scope: ["Art Direction", "Identity", "Print"],
        image: { alt: "Man", src: "/assets/media/images/3418d4c75efa.png", srcSet: "/assets/media/images/11c385d08bb3.png 512w, /assets/media/images/4bc49ee40f65.png 1024w, /assets/media/images/3418d4c75efa.png 1392w", width: "1392", height: "752", aspect: "aspect-[auto_1392/752]" },
        span: "wide",
        intro: "Vellfire builds calibration rigs for people who measure things to the micron. The old identity apologised for that — soft gradients, stock optimism. We took it back to the instrument.",
        facts: [
            { label: "Client", value: "Vellfire Instruments" },
            { label: "Role", value: "Art Direction, Identity" },
            { label: "Duration", value: "14 weeks" },
            { label: "Year", value: "2025" }
        ],
        chapters: [
            { heading: "The brief", body: "Vellfire sells to metrology labs, where every buyer already knows the spec sheet cold. The existing brand spoke to nobody in that room: it opened on lifestyle photography and buried the tolerances four clicks deep. The ask was to build something a technician would trust on sight." },
            { heading: "The approach", body: "One grid, derived from the 5mm graduation on their own rigs, and one grey drawn off the anodised housing. Every layout — catalogue, stand, spec sheet, site — sits on it. Type is set at two sizes and no more. The restraint is the argument: a company that measures precisely should look like it." },
            { heading: "The outcome", body: "The system shipped as a 60-page manual and a component library the in-house team runs without us. Nine months on, every new SKU has launched inside it with no exceptions requested." }
        ],
        stats: [
            { figure: "60", label: "Pages of system manual" },
            { figure: "14", label: "Weeks from brief to launch" },
            { figure: "0", label: "Exceptions since handover" }
        ],
        gallery: [
            { alt: "Instrument housing", src: "/assets/media/images/95d860ec3768.png", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
            { alt: "Catalogue spread", src: "/assets/media/images/6c6b19e154f4.png", width: "896", height: "1280", aspect: "aspect-[auto_896/1280]" },
            { alt: "Stand build", src: "/assets/media/images/29b003003242.png", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" }
        ]
    },
    {
        slug: "dunwill-lanson",
        index: "(02)",
        title: "Dunwill Lanson",
        category: "Photography",
        year: "2024",
        summary: "Two seasons shot back to back, colour-graded to a single stock so the campaign reads as one run.",
        scope: ["Photography", "Retouch", "Campaign"],
        image: { alt: "Man in Blue BG", src: "/assets/media/images/d429b442416a.png", srcSet: "/assets/media/images/ad9b2d2be81b.png 512w, /assets/media/images/27d11552e704.png 1024w, /assets/media/images/93c9d668a9d7.png 2048w, /assets/media/images/d429b442416a.png 2728w", width: "2728", height: "1536", aspect: "aspect-[auto_2728/1536]" },
        span: "tall",
        intro: "Dunwill Lanson had two collections landing eleven weeks apart and no budget for two shoots. We booked one studio block, shot both, and graded them to a single stock so nobody could tell where one season ended.",
        facts: [
            { label: "Client", value: "Dunwill Lanson" },
            { label: "Role", value: "Photography, Retouch" },
            { label: "Duration", value: "6 weeks" },
            { label: "Year", value: "2024" }
        ],
        chapters: [
            { heading: "The brief", body: "Autumn and the resort capsule were built by different design leads and looked it — one warm and matte, one cold and glossy. Merchandising wanted them on the same landing page in November. Shooting them separately would have made that impossible." },
            { heading: "The approach", body: "A five-day block with one lighting setup and one lens, both collections styled on the same call sheet. The grade was locked on day one against a printed reference and never touched again. Where the garments fought each other we changed the styling, not the light." },
            { heading: "The outcome", body: "412 finished frames from a single booking. The November page ran both capsules side by side and the seam is invisible — which was the whole point, and the reason the same setup shot the following spring." }
        ],
        stats: [
            { figure: "412", label: "Finished frames" },
            { figure: "5", label: "Days on the floor" },
            { figure: "2", label: "Seasons, one grade" }
        ],
        gallery: [
            { alt: "Studio portrait", src: "/assets/media/images/77c9bcc2e4b4.png", width: "896", height: "1280", aspect: "aspect-[auto_896/1280]" },
            { alt: "Campaign still", src: "/assets/media/images/2f4b7d061507.png", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
            { alt: "Look book page", src: "/assets/media/images/7e23205fe948.png", width: "768", height: "1408", aspect: "aspect-[auto_768/1408]" }
        ]
    },
    {
        slug: "noara-willis",
        index: "(03)",
        title: "Noara Willis",
        category: "Strategy",
        year: "2025",
        summary: "Positioning rebuilt from the buying decision backwards, then a site that says the one thing that mattered.",
        scope: ["Strategy", "Naming", "Web"],
        image: { alt: "Women on the Chair", src: "/assets/media/images/5185120aa8bd.png", srcSet: "/assets/media/images/c8180f2f6a1e.png 512w, /assets/media/images/84aa5eed3e6f.png 1024w, /assets/media/images/5185120aa8bd.png 1280w", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
        span: "tall",
        intro: "Noara Willis was winning the pitches it got into and losing the ones it never heard about. The problem was not the work. It was that nobody could repeat what the studio did after hearing it once.",
        facts: [
            { label: "Client", value: "Noara Willis" },
            { label: "Role", value: "Strategy, Naming, Web" },
            { label: "Duration", value: "9 weeks" },
            { label: "Year", value: "2025" }
        ],
        chapters: [
            { heading: "The brief", body: "Twenty-two interviews, split between clients who bought and prospects who didn't. The buyers all described the studio the same way, in words that appeared nowhere on its own site. The prospects couldn't describe it at all." },
            { heading: "The approach", body: "We started at the moment of the decision and worked backwards: what did the buyer need to believe, in what order, to sign. That produced a single claim and three proofs. Everything that did not serve one of the four came off the site — which was most of it." },
            { heading: "The outcome", body: "The homepage went from 2,100 words to 340. Inbound qualified leads roughly doubled over the two quarters that followed, and the sales team stopped writing bespoke decks because the site already made the argument." }
        ],
        stats: [
            { figure: "22", label: "Buyer interviews" },
            { figure: "340", label: "Words on the homepage" },
            { figure: "2×", label: "Qualified inbound" }
        ],
        gallery: [
            { alt: "Positioning board", src: "/assets/media/images/b2c0d66b9ce6.png", width: "832", height: "1248", aspect: "aspect-[auto_832/1248]" },
            { alt: "Site build", src: "/assets/media/images/a376f8cd1db2.png", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
            { alt: "Messaging card", src: "/assets/media/images/031d00a78b18.png", width: "1024", height: "1024", aspect: "aspect-[auto_1024/1024]" }
        ]
    },
    {
        slug: "nike-studios",
        index: "(04)",
        title: "Nike Studios",
        category: "Art Direction",
        year: "2025",
        summary: "A launch film and its stills built off one board, so motion and print never drifted apart.",
        scope: ["Art Direction", "Film", "Motion"],
        image: { alt: "Athletes", src: "/assets/media/images/d97fcf9ca982.png", srcSet: "/assets/media/images/c05999c1edde.png 512w, /assets/media/images/f2a42560e3d8.png 1024w, /assets/media/images/d97fcf9ca982.png 1408w", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
        span: "wide",
        intro: "A launch normally splits in two the moment it leaves the deck: the film team goes one way, the print team another, and by week six they are arguing about which one is right. We built one board and made both work from it.",
        facts: [
            { label: "Client", value: "Nike Studios" },
            { label: "Role", value: "Art Direction, Motion" },
            { label: "Duration", value: "11 weeks" },
            { label: "Year", value: "2025" }
        ],
        chapters: [
            { heading: "The brief", body: "Eight markets, one launch date, and a film that had to cut down to nine formats without losing the frame that made it work. The previous launch had produced two visually unrelated campaigns under one name." },
            { heading: "The approach", body: "Every frame was designed as a still first and animated second. The board carried the crop marks for all nine formats, so the shot that survived the 9:16 cut was chosen on the day rather than rescued in the edit. Print pulled its plates from the same frames." },
            { heading: "The outcome", body: "One shoot, one board, nine cutdowns, eight markets — and no market opened a request for local variants, which had never happened before." }
        ],
        stats: [
            { figure: "9", label: "Formats from one cut" },
            { figure: "8", label: "Markets, no variants" },
            { figure: "11", label: "Weeks end to end" }
        ],
        gallery: [
            { alt: "Film still", src: "/assets/media/images/0324a09ab65c.png", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
            { alt: "Athlete portrait", src: "/assets/media/images/68c91cf88797.png", width: "896", height: "1280", aspect: "aspect-[auto_896/1280]" },
            { alt: "Frame board", src: "/assets/media/images/411edd68feb0.png", width: "1420", height: "1422", aspect: "aspect-[auto_1420/1422]" }
        ]
    },
    {
        slug: "halden-type",
        index: "(05)",
        title: "Halden Type",
        category: "Branding",
        year: "2024",
        summary: "A foundry's first retail release — specimen, licence tiers and storefront shipped in one pass.",
        scope: ["Branding", "Specimen", "E-commerce"],
        image: { alt: "Studio Interior", src: "/assets/media/images/467b27e5dc07.png", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
        span: "wide",
        intro: "Halden had drawn type for other people's brands for nine years and never sold a licence of its own. The first retail release had to explain the foundry and the family at the same time.",
        facts: [
            { label: "Client", value: "Halden Type" },
            { label: "Role", value: "Branding, Web" },
            { label: "Duration", value: "16 weeks" },
            { label: "Year", value: "2024" }
        ],
        chapters: [
            { heading: "The brief", body: "Custom work pays per commission; retail pays per licence, and the two need opposite front doors. Halden needed a storefront that would sell a family to a designer who had never heard of them, without undercutting the commission business that still paid the rent." },
            { heading: "The approach", body: "The specimen is the storefront. Every page of it is a live tester, so the buying decision and the browsing experience are the same act. Licence tiers were cut from seven to three, priced off seats rather than usage, because the seven-tier grid was where every trial was abandoning." },
            { heading: "The outcome", body: "Retail licences covered the foundry's fixed costs inside two quarters, and the commission pipeline didn't move — which was the condition the whole project was built under." }
        ],
        stats: [
            { figure: "3", label: "Licence tiers, down from 7" },
            { figure: "2", label: "Quarters to break even" },
            { figure: "16", label: "Weeks to release" }
        ],
        gallery: [
            { alt: "Specimen spread", src: "/assets/media/images/32cb8dd9da14.png", width: "1024", height: "559", aspect: "aspect-[auto_1024/559]" },
            { alt: "Type detail", src: "/assets/media/images/79c2189f3af7.png", width: "1024", height: "1024", aspect: "aspect-[auto_1024/1024]" },
            { alt: "Printed sheet", src: "/assets/media/images/1b886de39cd8.png", width: "683", height: "1024", aspect: "aspect-[auto_683/1024]" }
        ]
    },
    {
        slug: "marchetti-atelier",
        index: "(06)",
        title: "Marchetti Atelier",
        category: "Photography",
        year: "2024",
        summary: "Room-by-room documentation of a workshop, framed so the process reads before the product does.",
        scope: ["Photography", "Editorial", "Print"],
        image: { alt: "Atelier", src: "/assets/media/images/02f3a7db3446.png", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
        span: "tall",
        intro: "Marchetti's finished pieces photograph beautifully and say nothing about why they cost what they cost. We spent nine days in the workshop instead, and shot the reason.",
        facts: [
            { label: "Client", value: "Marchetti Atelier" },
            { label: "Role", value: "Photography, Editorial" },
            { label: "Duration", value: "9 days on site" },
            { label: "Year", value: "2024" }
        ],
        chapters: [
            { heading: "The brief", body: "A archive full of product shots and a sales team fielding the same question on every call: why this and not the one at a third of the price. The answer lived in the building and had never been photographed." },
            { heading: "The approach", body: "Room by room, in working light, on the days the work actually happened — no styling, no staged hands. The edit runs in the order the material moves through the building, so the sequence itself is the argument. The finished piece appears once, on the last page." },
            { heading: "The outcome", body: "184 frames, cut to a 48-page book that now goes out ahead of every quote. The product shots stayed in the archive where they belong." }
        ],
        stats: [
            { figure: "184", label: "Frames delivered" },
            { figure: "48", label: "Pages in the book" },
            { figure: "9", label: "Days on site" }
        ],
        gallery: [
            { alt: "Workshop floor", src: "/assets/media/images/019a3df9011c.png", width: "1152", height: "2048", aspect: "aspect-[auto_1152/2048]" },
            { alt: "Bench detail", src: "/assets/media/images/b81b53b51d2f.png", width: "1024", height: "717", aspect: "aspect-[auto_1024/717]" },
            { alt: "Material store", src: "/assets/media/images/259e6dc735f5.png", width: "717", height: "1024", aspect: "aspect-[auto_717/1024]" }
        ]
    },
    {
        slug: "orbit-field",
        index: "(07)",
        title: "Orbit Field",
        category: "Strategy",
        year: "2023",
        summary: "Six product lines collapsed into three, with the messaging system that made the cut defensible.",
        scope: ["Strategy", "Messaging", "Design System"],
        image: { alt: "Field", src: "/assets/media/images/ce794bd8df42.png", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
        span: "tall",
        intro: "Orbit Field had six product lines, four of which were the same product with different logos. Cutting them was the easy part. Making the cut survive contact with six product owners was the work.",
        facts: [
            { label: "Client", value: "Orbit Field" },
            { label: "Role", value: "Strategy, Design System" },
            { label: "Duration", value: "20 weeks" },
            { label: "Year", value: "2023" }
        ],
        chapters: [
            { heading: "The brief", body: "Six lines built by acquisition, each with its own name, palette and roadmap. Sales was quoting against itself in live deals. Everyone agreed it had to be simplified and no one agreed on whose line should go." },
            { heading: "The approach", body: "We stopped arguing about the lines and mapped the jobs customers were hiring them for. Three jobs, cleanly separated; six lines, overlapping badly. Once the map was on the wall the merge picked itself, and the owners who lost a name could see why in a diagram rather than a memo." },
            { heading: "The outcome", body: "Three lines, one system, and a naming logic that has absorbed two further acquisitions since without reopening the question." }
        ],
        stats: [
            { figure: "6→3", label: "Product lines" },
            { figure: "20", label: "Weeks of alignment" },
            { figure: "2", label: "Acquisitions absorbed since" }
        ],
        gallery: [
            { alt: "Jobs map", src: "/assets/media/images/2172c7a38664.png", width: "1536", height: "960", aspect: "aspect-[auto_1536/960]" },
            { alt: "System token sheet", src: "/assets/media/images/9f04c30f9315.png", width: "1024", height: "1024", aspect: "aspect-[auto_1024/1024]" },
            { alt: "Line architecture", src: "/assets/media/images/25749aa0ee1f.png", width: "1024", height: "559", aspect: "aspect-[auto_1024/559]" }
        ]
    }
];

export const projectCategories: string[] = ["Art Direction", "Photography", "Strategy", "Branding"];

export function getProject(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): ProjectItem {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export function getNextProjects(slug: string, count = 2): ProjectItem[] {
  const i = projects.findIndex((p) => p.slug === slug);
  const start = i < 0 ? 0 : i;
  return Array.from({ length: Math.min(count, projects.length - 1) }, (_, n) => projects[(start + 1 + n) % projects.length]);
}
