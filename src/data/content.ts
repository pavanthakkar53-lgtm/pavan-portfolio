export const navLinks = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "work", label: "Work" },
  { id: "ai-creatives", label: "AI Creatives" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;

export const rotatingHeadlines = [
  "6 years. 3 brands built from scratch.",
  "₹1Cr+ in B2B revenue, closed personally.",
  "200,000+ dealer contacts scraped and shortlisted by AI — built by me.",
  "2 Best Stall Awards. 1 modular brick stall that made headlines.",
];

// ─── MEDIA TYPES ────────────────────────────────────────────────
// Every "screen" (timeline era, case study, gallery item) can now hold
// multiple media items instead of a single placeholder.
export type MediaItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "instagram"; permalink: string; caption?: string }
  | { kind: "youtube"; url: string; caption?: string }
  | { kind: "drive"; url: string; caption?: string; previewType?: "video" | "image" };

export type TimelineEntry = {
  period: string;
  title: string;
  role: string;
  badge: string;
  quote: string;
  media: MediaItem[];
  links?: { label: string; url: string }[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2014–2019",
    title: "Foundation",
    role: "B.Sc. Chemistry, MSU Baroda",
    badge: "Top 1% HSC Science · INSPIRE Scholar",
    quote:
      "Where I learned to observe, isolate variables, and not trust the first answer — turns out that's just marketing with different vocabulary.",
    media: [],
  },
  {
    period: "Dec 2019 – Aug 2020",
    title: "Kalarav School",
    role: "Teacher & Digital Content Strategist",
    badge: "COVID pivot",
    quote:
      "2,200 students needed online school overnight. I built the infrastructure, trained 75 teachers, and ran a YouTube channel that's still active today — now at 6.95k subscribers and 1,400+ videos. Also ran live events end-to-end, including a 3-day stage-hosted event covering planning, logistics, and on-the-ground management.",
    media: [
      {
        kind: "drive",
        url: "https://drive.google.com/file/d/1DOMPIL2_3dfcZz7vSg6fkkPXtl67kxC9/view",
        caption: "Kalarav School",
        previewType: "image",
      },
      {
        kind: "drive",
        url: "https://drive.google.com/file/d/1f4UwarLWugEWH8Jsr0pQ5MqFYPfJZv8f/view?usp=sharing",
        caption: "3-day stage-hosted event — planning & management",
        previewType: "video",
      },
    ],
    links: [
      { label: "YouTube channel (live)", url: "https://www.youtube.com/@KalravSchoolGodhra" },
    ],
  },
  {
    period: "Nov 2020 – Nov 2022",
    title: "The Brick Store / JJB",
    role: "Branding & Marketing Coordinator",
    badge: "First marketing hire",
    quote:
      "First marketing hire at a company that had never had one. Built a 300+ page website from nothing. Grew organic traffic to 62,000+ visitors, social following to 42,000+. Managed ₹2.5 Cr+ in budget.",
    media: [
      { kind: "youtube", url: "https://youtu.be/tXYYQMcPFgM", caption: "The Brick Store — experience center" },
      { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-f.webp", alt: "JJB brand visual" },
      { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-e.webp", alt: "JJB brand visual" },
      { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-d.webp", alt: "JJB brand visual" },
      { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-c.webp", alt: "JJB brand visual" },
      { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-h.webp", alt: "JJB brand visual" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/C_kNSx2I2qE/", caption: "Store execution — TBS Kolkata" },
    ],
    links: [{ label: "jjbricks.com", url: "https://jjbricks.com/" }],
  },
  {
    period: "Sep 2023 – Apr 2025",
    title: "The Brick Store / JJB",
    role: "Team Lead, Brand Strategy & Marketing",
    badge: "Promoted to lead",
    quote:
      "Promoted to lead a 10-person team. Took the product line to 570+ SKUs. Built India's first modular brick stall — 60 tons, 4,000 sq. ft., erected in 3 days — and won Best Stall Award two years running. Built an in-house inventory app that onboarded ₹30Cr+ of stock across a 720-acre operation. Launched The Brick Café — 10,000 sq. ft., concept to opening in 4 months — now heading to franchise.",
    media: [
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DBn4sLop-M1/", caption: "Brick Café — behind the scenes 1" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DCO86R-pcqX/", caption: "Brick Café — behind the scenes 2" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DR4u5NLDF8m/", caption: "Brick Café — finalised" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DSXtERODC_X/", caption: "Brick Café — finalised 2" },
      { kind: "youtube", url: "https://youtu.be/7NhJmPNyzEE", caption: "ACETECH Mumbai & Delhi" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DRZbisUinE-/", caption: "ACETECH — execution & coverage" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DOEAfjvDJe_/", caption: "IIID Ahmedabad" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DRl3tZejAse/", caption: "IIID Ahmedabad — stall design" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DErddcvIZRX/", caption: "IIID Ahmedabad — with people" },
      { kind: "instagram", permalink: "https://www.instagram.com/p/DUTOx2viT9c/", caption: "IIID Hyderabad — carousel 1" },
      { kind: "instagram", permalink: "https://www.instagram.com/p/DUYmyeQjHGJ/", caption: "IIID Hyderabad — carousel 2" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/C6um0ROIc9d/", caption: "International project documentation" },
      { kind: "image", src: "https://www.jjbricks.com/dashdesk/files/tip/thumb_img/e3ecfc10-7a65-4dc9-a510-e0006dbc7a58/1772890607_thumb.jpg", alt: "JJB brochure" },
      { kind: "image", src: "https://www.jjbricks.com/dashdesk/files/tip/thumb_img/d116d984-81f5-4be1-b358-1689b14e4c53/Screenshot%202023-11-29%20150720.png", alt: "JJB brochure" },
    ],
    links: [
      { label: "jjbricks.com", url: "https://jjbricks.com/" },
      { label: "@thebrickstore_india", url: "https://www.instagram.com/thebrickstore_india/" },
      { label: "JJB brochure (PDF)", url: "https://drive.google.com/file/d/1aGgLVhnRYIMOJFY-aIiFDnKMqWuSAvY9/view" },
    ],
  },
  {
    period: "May 2025 – Present",
    title: "Dwell Climate Technologies",
    role: "Strategy & Digital Marketing Manager",
    badge: "Current role",
    quote:
      "Leading a team of 10. Built an AI-powered B2B lead generation system — scraped 200,000+ dealer contacts, shortlisted 5,000 high-fit prospects, closed 100+ dealers for ₹1Cr+ in revenue. Influencer and celebrity campaigns drove ₹40L in e-commerce revenue in 5 months. Rebuilt CRM workflows with AI — quote turnaround dropped from 2+ hours to under 5 minutes.",
    media: [
      { kind: "image", src: "https://www.dwellventilation.com/web/image/product.image/231/image_1920/baby%20air%20banner.webp", alt: "Dwell Baby Air banner" },
      { kind: "image", src: "https://www.dwellventilation.com/web/image/product.image/230/image_1920/ChatGPT%20Image%20Jun%2022%2C%202026%2C%2005_54_44%20PM.webp", alt: "Dwell Baby Air product" },
      { kind: "image", src: "https://www.dwellventilation.com/web/image/product.image/234/image_1024/mobile%20banner%20hero.webp", alt: "Dwell mobile hero banner" },
      { kind: "instagram", permalink: "https://www.instagram.com/p/DZZxCLVCSyH/", caption: "Sophie Choudry collaboration" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DZSfgg7PeXx/", caption: "Influencer collaboration" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DZFc343B-Xu/", caption: "Influencer collaboration" },
      {
        kind: "drive",
        url: "https://drive.google.com/file/d/1yXb46_wI4XUU-Fkbo7XLqUye3lUxDLoz/view",
        caption: "Dwell Master Air 2026 brochure — cover",
        previewType: "image",
      },
    ],
    links: [
      { label: "dwellventilation.com", url: "https://dwellventilation.com/" },
      { label: "Master Air microsite", url: "https://masterair.dwellventilation.com/" },
      { label: "@dwell_air", url: "https://www.instagram.com/dwell_air/" },
      { label: "Dwell Master Air brochure (PDF)", url: "https://drive.google.com/file/d/1391Vd8Q4-2dFj4omyv5H6ZWGOUL8mrt2/view" },
      { label: "AI Marketing Platform (IVY)", url: "https://ivy-uni-drab.vercel.app/" },
      { label: "IVY Listing Platform", url: "https://collaboration-9.preview.emergentagent.com/" },
    ],
  },
];

export const caseStudies = [
  {
    id: "brand-blank-page",
    title: "Building a Brand From a Blank Page",
    challenge:
      "JJB was a 35-year-old, well-established company — that had never had a single person dedicated to marketing.",
    action:
      "Built everything from zero — product naming and categorization, a 300+ page custom website, packaging redesign, social media presence, print and digital collateral. Expanded the product range from 50 to 450+ variants.",
    result: "62,000+ organic website visitors. 42,000+ social followers. ₹2.5 Cr+ budget managed end-to-end.",
    tags: ["Branding", "Web", "GTM"],
    media: [
      { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-f.webp", alt: "JJB brand visual" },
      { kind: "youtube", url: "https://youtu.be/tXYYQMcPFgM", caption: "The Brick Store — experience center" },
    ] as MediaItem[],
  },
  {
    id: "modular-stall",
    title: "The 60-Ton Stall That Took 3 Days to Build",
    challenge:
      "Get a traditional brick brand noticed at Asia's largest trade exhibition — without looking like everyone else's booth.",
    action:
      "Conceptualized and led India's first modular brick stall — coordinated 15+ agencies, architects, and structural engineers to build a 4,000 sq. ft., 60-ton structure, assembled on-site in just 3 days.",
    result: "Best Stall Award, two years running. Became one of the most talked-about stalls at the show.",
    tags: ["Exhibitions", "Leadership", "Innovation"],
    media: [
      { kind: "youtube", url: "https://youtu.be/7NhJmPNyzEE", caption: "ACETECH Mumbai & Delhi" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DRZbisUinE-/", caption: "ACETECH — execution & coverage" },
    ] as MediaItem[],
  },
  {
    id: "brick-cafe",
    title: "From Concept to Café in 4 Months",
    challenge:
      "Extend a building-materials brand into something experiential — without it feeling like a gimmick.",
    action:
      "Conceptualized, designed, and launched The Brick Café — a 10,000 sq. ft. experiential brand extension — from idea to opening in 4 months.",
    result: "Now being scaled into a franchise model across India.",
    tags: ["Brand Extension", "Experiential"],
    media: [
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DBn4sLop-M1/", caption: "Behind the scenes 1" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DCO86R-pcqX/", caption: "Behind the scenes 2" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DR4u5NLDF8m/", caption: "Finalised" },
      { kind: "instagram", permalink: "https://www.instagram.com/reel/DSXtERODC_X/", caption: "Finalised 2" },
    ] as MediaItem[],
  },
  {
    id: "ai-leads",
    title: "I Built the Machine, Then Closed the Deals Myself",
    challenge:
      "Dwell needed B2B dealer revenue fast — but manually researching and cold-outreaching dealers pan-India doesn't scale with a small team.",
    action:
      "Built an AI-powered lead generation system from the ground up. Wrote Python scrapers that pulled 200,000+ dealer contacts. Used AI to shortlist 5,000 high-fit prospects. Then closed the first 100+ dealers personally.",
    result: "₹1Cr+ in B2B dealer revenue. A repeatable, AI-assisted pipeline the team still runs today.",
    tags: ["AI", "B2B", "Python"],
    media: [] as MediaItem[],
  },
  {
    id: "marketing-platform",
    title: "Turning a Marketing Role Into a Product Build",
    challenge:
      "After 3+ years stitching together 6 different marketing tools — each hitting its own ceiling — the real gap was a unified system that didn't exist yet.",
    action:
      "Started building an AI Marketing Intelligence Platform — combining website intelligence, SEO, social, content, WhatsApp automation, and campaign analytics into one system.",
    result: "UI and authentication are live; backend 60% complete. Commercial launch planned.",
    tags: ["Product", "AI Platform"],
    media: [] as MediaItem[],
    links: [
      { label: "Live app (create account to explore)", url: "https://ivy-uni-drab.vercel.app/" },
      { label: "Listing platform (in development)", url: "https://collaboration-9.preview.emergentagent.com/" },
    ],
  },
  {
    id: "inventory-app",
    title: "₹30 Crore of Inventory, Tracked With Near-Zero Errors",
    challenge:
      "JJB's field operations spanned 720 acres with 300+ SKUs — and no real-time way to track stock accurately.",
    action:
      "Built an in-house inventory management app designed for accuracy at scale across a sprawling physical footprint.",
    result: "₹30Cr+ worth of stock onboarded in 4 months, tracked with near-zero location or count errors.",
    tags: ["Systems", "Operations"],
    media: [] as MediaItem[],
  },
];

export const stats = [
  { value: "6+", label: "years in marketing & brand building" },
  { value: "₹1Cr+", label: "B2B dealer revenue, closed personally" },
  { value: "₹40L", label: "e-commerce revenue in 5 months" },
  { value: "₹30Cr+", label: "inventory onboarded via self-built app" },
  { value: "200K+", label: "dealer contacts scraped pan-India" },
  { value: "₹2.5Cr+", label: "ad & brand budgets managed" },
  { value: "42K+", label: "social followers grown organically" },
  { value: "62K+", label: "organic website visitors driven" },
  { value: "570+", label: "product portfolio built from 50" },
  { value: "10", label: "team members led" },
  { value: "2", label: "Best Stall Awards won" },
  { value: "5min", label: "quote turnaround (from 2+ hours)" },
  { value: "3 days", label: "to build a 60-ton, 4,000 sq. ft. stall" },
];

export const skillGroups = [
  {
    title: "Performance & Paid Media",
    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Programmatic",
      "ROAS Optimization",
      "A/B Testing",
      "Multi-touch Attribution",
    ],
  },
  {
    title: "SEO & Organic Growth",
    items: [
      "Semrush",
      "Ubersuggest",
      "Moz",
      "GSC (API)",
      "GA4",
      "Technical SEO",
      "AI Discoverability",
    ],
  },
  {
    title: "AI Tools & Automation",
    items: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Custom Python Scrapers",
      "Prompt Engineering",
      "API Integration",
      "WhatsApp Automation",
    ],
  },
  {
    title: "Social & Influencer",
    items: [
      "Multi-platform Strategy",
      "Celebrity & Influencer Campaigns",
      "Hootsuite",
      "Buffer",
      "Community Growth",
    ],
  },
  {
    title: "Brand & GTM",
    items: [
      "0→1 Brand Building",
      "GTM Planning",
      "Product Launch",
      "Exhibition Marketing",
      "Canva",
      "Adobe Photoshop",
    ],
  },
  {
    title: "Team Leadership & Systems",
    items: [
      "Team Management (10+)",
      "Hiring & Onboarding",
      "Odoo CRM/ERP",
      "Custom Dashboards",
      "Budget Management (₹2.5Cr+)",
    ],
  },
];

// ─── GALLERY ────────────────────────────────────────────────────
// Real assets, organized by category. Each item now carries actual media
// instead of a generated placeholder tile.
export const galleryItems: {
  title: string;
  category: string;
  media: MediaItem;
}[] = [
  { title: "Modular brick stall — ACETECH", category: "Exhibitions", media: { kind: "youtube", url: "https://youtu.be/7NhJmPNyzEE" } },
  { title: "ACETECH execution & coverage", category: "Exhibitions", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/DRZbisUinE-/" } },
  { title: "IIID Ahmedabad", category: "Exhibitions", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/DOEAfjvDJe_/" } },
  { title: "IIID Ahmedabad — stall design", category: "Exhibitions", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/DRl3tZejAse/" } },
  { title: "IIID Hyderabad — carousel", category: "Exhibitions", media: { kind: "instagram", permalink: "https://www.instagram.com/p/DUTOx2viT9c/" } },
  { title: "Store execution — TBS Kolkata", category: "Retail", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/C_kNSx2I2qE/" } },
  { title: "JJB brand visual", category: "Branding", media: { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-d.webp", alt: "JJB brand visual" } },
  { title: "JJB brand visual", category: "Branding", media: { kind: "image", src: "https://designworkgroup.in/wp-content/uploads/2025/10/jjb-c.webp", alt: "JJB brand visual" } },
  { title: "Brick Café — behind the scenes", category: "Experiential", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/DCO86R-pcqX/" } },
  { title: "Brick Café — finalised", category: "Experiential", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/DR4u5NLDF8m/" } },
  { title: "International project documentation", category: "Behind the scenes", media: { kind: "instagram", permalink: "https://www.instagram.com/reel/C6um0ROIc9d/" } },
  { title: "Dwell Baby Air banner", category: "Dwell", media: { kind: "image", src: "https://www.dwellventilation.com/web/image/product.image/231/image_1920/baby%20air%20banner.webp", alt: "Dwell Baby Air banner" } },
  { title: "Sophie Choudry collaboration", category: "Dwell", media: { kind: "instagram", permalink: "https://www.instagram.com/p/DZZxCLVCSyH/" } },
];

export const beyondWork = [
  "Directed a state-level drama on Beti Bachao, Beti Padhao, watched by the State Agriculture Minister",
  "Hosted a 10,000-person youth carnival",
  "Organized a Bhagavad Gita learning contest for 600+ students",
  "Still tend a small bonsai collection — turns out patience scales",
];

// ─── AI CREATIVES ───────────────────────────────────────────────
// Native MP4 tiles (Dwell Baby Air Shopify CDN) — autoplay muted in strip.
export const aiCreatives: {
  videoSrc: string;
  caption: string;
  permalink?: string;
}[] = [
  {
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/ff98f8f921794c84b0e2219c47ec2e41.mp4",
    caption: "AI-generated — Baby Air launch",
    permalink: "https://www.instagram.com/reel/DXrD_YqiRK1/",
  },
  {
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/a0e1ac85410e430aa5ee7ad0d100f1d2.mp4",
    caption: "AI-generated — Baby Air launch",
    permalink: "https://www.instagram.com/reel/DXoTgEhCVzn/",
  },
  {
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/0fc75c57abcd4c998ce777707739c23b.mp4",
    caption: "AI-generated — Baby Air launch",
    permalink: "https://www.instagram.com/reel/DXg9ClwCeLX/",
  },
  {
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/10732eae7ca8463d88d06a578d8a9728.mp4",
    caption: "AI-generated — Baby Air launch",
    permalink: "https://www.instagram.com/reel/DXg5_pkiXKJ/",
  },
  {
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/d5aaaf371f9b47e9b3cc814d6ae094c7.mp4",
    caption: "AI-generated — Baby Air launch",
    permalink: "https://www.instagram.com/reel/DSz4gFukmql/",
  },
];

export const contact = {
  email: "tpavan5399@gmail.com",
  phone: "+91 6354336542",
  location: "Godhra, Gujarat — open to relocation / remote",
  linkedin: "https://linkedin.com/in/pavan--thakkar",
};
