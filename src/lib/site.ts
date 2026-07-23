import {
  Search,
  Code2,
  Film,
  Share2,
  UserPlus,
  Crown,
  Target,
  ShoppingBag,
  Palette,
  Image,
  Radio,
} from "lucide-react";

export const SITE = {
  name: "DigyUdaan Media House",
  tagline: "Let's Fly Together",
  phone: ["+91 99900 04195", "+91 80103 67031"],
  whatsapp: "https://wa.link/lf2h3r",
  address: "Gaur City Centre, Greater Noida, India",
  email: "hello@digyudaan.com",
  website: "www.digyudaan.com",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Successful Story", to: "/success-story" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: typeof Search;
};

export const SERVICES: Service[] = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    short: "Positioning, logo & guidelines",
    description:
      "Strategic brand foundations — positioning, naming, logo systems and guidelines that give your D2C brand a distinct, memorable identity from day one.",
    icon: Palette,
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Meta, Google & full-funnel ads",
    description:
      "ROAS-obsessed paid media across Meta, Google Search, Shopping and YouTube. Creative testing and audience laddering built to scale profitably.",
    icon: Target,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Community & content calendars",
    description:
      "Editorial calendars, community management and platform-native storytelling that grows real audiences — not vanity followers.",
    icon: Share2,
  },
  {
    slug: "ecommerce-marketing",
    title: "Ecommerce Marketing",
    short: "Marketplace & store growth",
    description:
      "Marketplace optimization, retention flows and conversion-focused campaigns that turn store traffic into repeat revenue.",
    icon: ShoppingBag,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Creatives, assets & catalogues",
    description:
      "Studio-grade ad creatives, product catalogues and PDP assets designed to lift click-through and conversion across every channel.",
    icon: Image,
  },
  {
    slug: "video-production",
    title: "Video Production",
    short: "Ads, reels, brand films",
    description:
      "Scroll-stopping video: performance UGC, brand films, product reels and hook-first ad creatives crafted in-house.",
    icon: Film,
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Organic growth engine",
    description:
      "Technical SEO, content clusters and link authority tuned for D2C search intent. Rank, convert, retain.",
    icon: Search,
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Shopify & custom stores",
    description:
      "High-converting Shopify stores and custom web builds. Blazing performance, 2%+ conversion rate baseline, and pixel-perfect execution.",
    icon: Code2,
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    short: "Creators that actually sell",
    description:
      "Vetted creator networks, whitelisted ads and performance-tracked partnerships that turn reach into revenue.",
    icon: UserPlus,
  },
  {
    slug: "brand-management",
    title: "Brand Management",
    short: "End-to-end brand ops",
    description:
      "Positioning, identity systems, guidelines and the ongoing brand governance that keeps you consistent as you scale.",
    icon: Crown,
  },
  {
    slug: "offline-marketing",
    title: "Offline Marketing",
    short: "OOH, print & on-ground",
    description:
      "Out-of-home, print and on-ground activations that extend your brand's reach beyond the screen and into the real world.",
    icon: Radio,
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Discover",
    body: "We dive deep to understand your brand's goals, audience, and unique needs. Research and analysis uncover insights that shape the strategy.",
  },
  {
    n: "02",
    title: "Define",
    body: "Clarity meets purpose. We craft a clear roadmap — vision, audience, precise goals — so every step is purposeful and impactful.",
  },
  {
    n: "03",
    title: "Design",
    body: "Creativity meets functionality. Visually stunning, user-friendly experiences that capture your brand's essence and drive results.",
  },
  {
    n: "04",
    title: "Develop",
    body: "Robust, scalable, user-friendly builds. Clean code, innovative tech, and a focus on seamless experience.",
  },
  {
    n: "05",
    title: "Deploy",
    body: "Smooth rollout, servers configured, analytics live. We make sure everything ships and runs perfectly.",
  },
  {
    n: "06",
    title: "Deliver",
    body: "Mission accomplished — with training, support and post-launch optimization so you keep compounding wins.",
  },
];

export const STATS = [
  { value: "300+", label: "Founders Served" },
  { value: "188+", label: "Clients Delivered" },
  { value: "100+", label: "Orders in First 30 Days" },
  { value: "₹1Cr+", label: "Monthly Client Revenue" },
];

export const WHY = [
  {
    title: "Proven Results, Not Empty Promises",
    body: "Real track record: zero to 100+ orders/month. Data over drama.",
  },
  {
    title: "Complete In-House Ecosystem",
    body: "Strategy to performance marketing — every function under one roof.",
  },
  {
    title: 'No "Practice" on Your Money',
    body: "Data-driven framework. No fake ROAS guarantees, ever.",
  },
  {
    title: "100% In-House Team",
    body: "No outsourcing. Quality control, faster execution, seamless comms.",
  },
  {
    title: "2%+ Website Conversion",
    body: "High-converting Shopify stores that turn visitors into buyers.",
  },
  {
    title: "Only 10 Clients / Month Max",
    body: "Exclusive attention, not a factory approach or diluted service.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "DigyUdaan took us from struggling for the first sale to consistent 100+ orders a month. Their in-house team just gets D2C.",
    name: "Ritika Sharma",
    role: "Founder, Showshaa",
  },
  {
    quote:
      "Finally an agency that treats our ad spend like their own. ROAS doubled inside 60 days, and creatives kept getting sharper.",
    name: "Aman Verma",
    role: "Founder, Agami",
  },
  {
    quote:
      "The 6-D process is real. Discover to Deliver — we always know what's shipping next and why. Rare in Indian agencies.",
    name: "Sumaya Khan",
    role: "Founder, Sumaya Studio",
  },
  {
    quote:
      "Their Shopify build converts at 3.4%. That alone paid for the engagement in the first month.",
    name: "Kabir Mehta",
    role: "Founder, D2C Beauty Brand",
  },
];

export const FAQS = [
  {
    q: "How quickly will I see results?",
    a: "Our signature D2C Launch System is designed to deliver 100+ orders in the first 30 days for founders who follow the playbook. Timelines vary by category, but most clients see measurable traction within weeks.",
  },
  {
    q: "Do you work with founders outside D2C?",
    a: "D2C is our specialization, but we also partner with service brands and creators where our performance + brand ecosystem is a genuine fit.",
  },
  {
    q: "What does the engagement look like?",
    a: "We work with a maximum of 10 new clients per month to guarantee focus. Every engagement gets a dedicated pod — strategy, creative, media, and web — all in-house.",
  },
  {
    q: "Do you guarantee ROAS?",
    a: "We don't sell fake ROAS guarantees. What we do guarantee: a data-driven framework, transparent reporting, and consistent shipping. That's what actually compounds.",
  },
  {
    q: "How is pricing structured?",
    a: "Custom retainers based on scope and scale. Book a free marketing audit and we'll share a clear proposal within 48 hours.",
  },
];

export const CLIENTS = [
  "Agami",
  "Sumaya",
  "Showshaa",
  "Mintree",
  "Skiniss",
  "Trulyganic",
  "Corcul",
  "Doselo Healthcare",
  "Ayurmacy",
  "Celestique",
  "Lilsy Professional",
  "Aumrit",
  "Alpspure Nutra",
  "Redo Herbs",
];