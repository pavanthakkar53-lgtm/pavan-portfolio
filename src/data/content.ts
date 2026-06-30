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

export const timeline = [
  {
    period: "2014–2019",
    title: "Foundation",
    role: "B.Sc. Chemistry, MSU Baroda",
    badge: "Top 1% HSC Science · INSPIRE Scholar",
    quote:
      "Where I learned to observe, isolate variables, and not trust the first answer — turns out that's just marketing with different vocabulary.",
    imageLabel: "Graduation / certificate",
  },
  {
    period: "Dec 2019 – Aug 2020",
    title: "Kalarav School",
    role: "Teacher & Digital Content Strategist",
    badge: "COVID pivot",
    quote:
      "COVID hit. 2,200 students needed online school overnight. I built the infrastructure, trained 75 teachers, and helped grow a YouTube channel to 370,000+ views in 6 months — with zero budget.",
    imageLabel: "Classroom / YouTube channel",
  },
  {
    period: "Nov 2020 – Nov 2022",
    title: "The Brick Store / JJB",
    role: "Branding & Marketing Coordinator",
    badge: "First marketing hire",
    quote:
      "First marketing hire at a company that had never had one. Built a 300+ page website from nothing. Grew organic traffic to 62,000+ visitors, social following to 42,000+. Managed ₹2.5 Cr+ in budget.",
    imageLabel: "Website / packaging / store interior",
  },
  {
    period: "Sep 2023 – Apr 2025",
    title: "The Brick Store / JJB",
    role: "Team Lead, Brand Strategy & Marketing",
    badge: "Promoted to lead",
    quote:
      "Promoted to lead a 10-person team. Took the product line to 570+ SKUs. Built India's first modular brick stall — 60 tons, 4,000 sq. ft., erected in 3 days — and won Best Stall Award two years running.",
    imageLabel: "Modular brick stall at ACETECH",
  },
  {
    period: "May 2025 – Present",
    title: "Dwell Climate Technologies",
    role: "Strategy & Digital Marketing Manager",
    badge: "Current role",
    quote:
      "Leading a team of 10. Built an AI-powered B2B lead generation system — scraped 200,000+ dealer contacts, shortlisted 5,000 high-fit prospects, closed 100+ dealers for ₹1Cr+ in revenue.",
    imageLabel: "Dwell products / campaigns / CRM",
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

export const galleryItems = [
  { title: "Modular brick stall", category: "Exhibitions" },
  { title: "ACETECH Mumbai", category: "Exhibitions" },
  { title: "ARCHEX Delhi", category: "Exhibitions" },
  { title: "Flagship store interior", category: "Retail" },
  { title: "Factory outlet", category: "Retail" },
  { title: "The Brick Café", category: "Experiential" },
  { title: "Team on-site", category: "Behind the scenes" },
  { title: "Dwell product shot", category: "Dwell" },
  { title: "Influencer campaign", category: "Dwell" },
  { title: "Analytics dashboard", category: "Data" },
  { title: "SEO rankings", category: "Data" },
  { title: "Packaging redesign", category: "Branding" },
];

export const beyondWork = [
  "Directed a state-level drama on Beti Bachao, Beti Padhao, watched by the State Agriculture Minister",
  "Hosted a 10,000-person youth carnival",
  "Organized a Bhagavad Gita learning contest for 600+ students",
  "Still tend a small bonsai collection — turns out patience scales",
];

export const aiCreativesConfig = {
  instagramUrl: "" as string,
  items: [] as { type: "image" | "video"; src: string; alt: string }[],
};

export const contact = {
  email: "tpavan5399@gmail.com",
  phone: "+91 6354336542",
  location: "Godhra, Gujarat — open to relocation / remote",
  linkedin: "https://linkedin.com/in/pavan--thakkar",
};