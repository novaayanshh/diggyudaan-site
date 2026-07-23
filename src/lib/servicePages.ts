import {
  Search,
  Megaphone,
  Facebook,
  Share2,
  Code2,
  Image,
  Palette,
  Crown,
  Target,
  Film,
  Radio,
  Sparkles,
  ShoppingBag,
  UserPlus,
  FileText,
  Mail,
  MapPin,
  Store,
  TrendingUp,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export type ServicePage = {
  /** URL path this page lives at, e.g. "/seo-services" */
  path: string;
  /** Nav / card label */
  navLabel: string;
  /** Big H1 on the page */
  h1: string;
  /** Short one-line tagline under the H1 */
  tagline: string;
  /** <title> tag */
  metaTitle: string;
  /** meta description */
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  icon: LucideIcon;
  image?: string;
  alt: string;
  /** Main body copy */
  description: string;
  /** What's included — bullet points */
  features: string[];
};

export const SERVICE_PAGES: Record<string, ServicePage> = {
  seo: {
    path: "/seo-services",
    navLabel: "SEO Services",
    h1: "SEO Services in Noida",
    tagline: "Rank higher, stay higher — organic growth that compounds.",
    metaTitle: "SEO Services in Noida | Best SEO Company | DigyUdaan Media House",
    metaDescription:
      "Improve your Google rankings with DigyUdaan's professional SEO services. Technical SEO, On-Page SEO, Local SEO & Link Building for long-term growth.",
    primaryKeyword: "SEO Services",
    secondaryKeywords: [
      "SEO Company",
      "Technical SEO",
      "Local SEO",
      "On-Page SEO",
      "Organic Traffic",
      "Search Engine Optimization",
    ],
    icon: Search,
    image: "/SEO.png",
    alt: "Professional SEO Services for Business Growth",
    description:
      "We build organic growth engines, not one-off audits. Our SEO team combines technical fixes, on-page optimization, content and authority link-building so your site ranks — and keeps ranking — for the searches that actually drive revenue.",
    features: [
      "Technical SEO audits & site-speed fixes",
      "On-page optimization (titles, metas, internal linking)",
      "Local SEO & Google Business Profile optimization",
      "White-hat link building & authority growth",
      "Keyword research mapped to buyer intent",
      "Monthly ranking & traffic reporting",
    ],
  },

  googleAds: {
    path: "/google-ads-services",
    navLabel: "Google Ads",
    h1: "Google Ads Agency",
    tagline: "PPC management that turns clicks into customers.",
    metaTitle: "Google Ads Agency | PPC Management Company | DigyUdaan Media House",
    metaDescription:
      "Maximize ROI with Google Ads management services including Search, Display, Shopping and Performance Max campaigns.",
    primaryKeyword: "Google Ads Services",
    secondaryKeywords: [
      "Google PPC",
      "Google Ads Agency",
      "Search Ads",
      "Shopping Ads",
      "PPC Management",
    ],
    icon: Megaphone,
    alt: "Google Ads Campaign Management Services",
    description:
      "From Search and Shopping to Display and Performance Max, we run Google Ads accounts like a P&L — not a spend target. Continuous testing, tight audience laddering and conversion tracking that's actually accurate.",
    features: [
      "Search, Shopping & Performance Max campaigns",
      "Conversion tracking & GA4/GTM setup",
      "Audience & keyword laddering",
      "Ad copy & creative testing",
      "Negative keyword & budget optimization",
      "Transparent ROAS reporting",
    ],
  },

  metaAds: {
    path: "/meta-ads-services",
    navLabel: "Meta Ads",
    h1: "Meta Ads Agency",
    tagline: "Facebook & Instagram ads built for D2C scale.",
    metaTitle: "Meta Ads Agency | Facebook & Instagram Ads | DigyUdaan Media House",
    metaDescription:
      "Increase leads and sales with Facebook & Instagram advertising managed by certified Meta Ads experts.",
    primaryKeyword: "Meta Ads",
    secondaryKeywords: [
      "Facebook Ads",
      "Instagram Ads",
      "Paid Social Media",
      "Meta Advertising",
    ],
    icon: Facebook,
    image: "/Performance Marketing.png",
    alt: "Facebook and Instagram Advertising Services",
    description:
      "Certified Meta Ads specialists running full-funnel campaigns across Facebook and Instagram — prospecting, retargeting and creative testing built to lift ROAS, not just impressions.",
    features: [
      "Full-funnel Facebook & Instagram campaigns",
      "Creative testing (static, video, UGC)",
      "Retargeting & lookalike audience builds",
      "Pixel & Conversions API setup",
      "Catalog & dynamic product ads",
      "Weekly performance optimization",
    ],
  },

  socialMediaMarketing: {
    path: "/social-media-marketing",
    navLabel: "Social Media Marketing",
    h1: "Social Media Marketing Agency",
    tagline: "Grow real audiences, not vanity followers.",
    metaTitle: "Social Media Marketing Agency | SMM Services | DigyUdaan Media House",
    metaDescription:
      "Grow your business through professional Social Media Marketing on Instagram, Facebook, LinkedIn and YouTube.",
    primaryKeyword: "Social Media Marketing",
    secondaryKeywords: [
      "Instagram Marketing",
      "Facebook Marketing",
      "LinkedIn Marketing",
      "Social Media Management",
    ],
    icon: Share2,
    image: "/Social Media Marketing.png",
    alt: "Social Media Marketing Services",
    description:
      "Editorial calendars, community management and platform-native storytelling across Instagram, Facebook, LinkedIn and YouTube — built to grow engaged audiences that actually convert.",
    features: [
      "Platform-native content calendars",
      "Community management & DMs",
      "Reels, carousels & short-form video",
      "LinkedIn thought-leadership content",
      "Hashtag & trend strategy",
      "Monthly growth & engagement reports",
    ],
  },

  websiteDevelopment: {
    path: "/website-development",
    navLabel: "Website Development",
    h1: "Website Development Company",
    tagline: "Responsive, fast, and built to convert.",
    metaTitle: "Website Development Company | Responsive Websites | DigyUdaan Media House",
    metaDescription:
      "Build responsive, SEO-friendly business websites that convert visitors into customers.",
    primaryKeyword: "Website Development",
    secondaryKeywords: [
      "Web Development",
      "Website Design",
      "Responsive Website",
      "Corporate Website",
    ],
    icon: Code2,
    image: "/Website Development.png",
    alt: "Professional Website Development Services",
    description:
      "High-converting Shopify stores and custom web builds. Blazing performance, a 2%+ conversion-rate baseline, and pixel-perfect execution across every device.",
    features: [
      "Custom & Shopify website builds",
      "Mobile-first, responsive design",
      "SEO-friendly site architecture",
      "Speed & Core Web Vitals optimization",
      "Conversion-focused landing pages",
      "Ongoing maintenance & support",
    ],
  },

  graphicDesign: {
    path: "/graphic-design-services",
    navLabel: "Graphic Design",
    h1: "Graphic Design Services",
    tagline: "Studio-grade creatives for every channel.",
    metaTitle: "Graphic Design Services | Creative Design Agency | DigyUdaan Media House",
    metaDescription:
      "Professional graphic design services for branding, marketing, packaging and social media creatives.",
    primaryKeyword: "Graphic Design Services",
    secondaryKeywords: [
      "Creative Design",
      "Social Media Creatives",
      "Marketing Design",
      "Brochure Design",
    ],
    icon: Image,
    image: "/Graphic Design.png",
    alt: "Creative Graphic Design Services",
    description:
      "Studio-grade ad creatives, product catalogues and PDP assets designed to lift click-through and conversion across every channel — social, web, print and packaging.",
    features: [
      "Ad & social media creatives",
      "Brand collateral & brochures",
      "Product catalogues & PDP assets",
      "Packaging & label design",
      "Presentation & pitch deck design",
      "Fast-turnaround revisions",
    ],
  },

  brandIdentity: {
    path: "/brand-identity-development",
    navLabel: "Brand Identity Development",
    h1: "Brand Identity Development",
    tagline: "A memorable brand, built from the ground up.",
    metaTitle: "Brand Identity Development | Branding Agency | DigyUdaan Media House",
    metaDescription:
      "Develop a memorable brand identity through logo design, branding strategy and visual identity.",
    primaryKeyword: "Brand Identity Development",
    secondaryKeywords: ["Branding Agency", "Logo Design", "Visual Identity", "Brand Guidelines"],
    icon: Palette,
    image: "/Brand Identity Develeopment.png",
    alt: "Brand Identity Development Services",
    description:
      "Develop a memorable brand with strategic logo design, typography, color systems, visual guidelines, and complete branding solutions that hold up across every touchpoint.",
    features: [
      "Logo design & brand mark",
      "Typography & color systems",
      "Brand guideline documentation",
      "Naming & positioning strategy",
      "Packaging & merchandise identity",
      "Brand voice & messaging framework",
    ],
  },

  brandManagement: {
    path: "/brand-management",
    navLabel: "Brand Management",
    h1: "Brand Management Services",
    tagline: "Consistent, governed, and always on-brand.",
    metaTitle: "Brand Management Services | Brand Strategy Agency | DigyUdaan Media House",
    metaDescription:
      "Strengthen your business with professional brand management, positioning, reputation management and brand consistency.",
    primaryKeyword: "Brand Management",
    secondaryKeywords: [
      "Brand Strategy",
      "Reputation Management",
      "Brand Positioning",
      "Brand Growth",
    ],
    icon: Crown,
    image: "/Brand Management.png",
    alt: "Professional Brand Management Services",
    description:
      "Positioning, identity systems, guidelines and the ongoing brand governance that keeps you consistent as you scale — across every campaign, channel and team.",
    features: [
      "Brand positioning & strategy",
      "Online reputation management",
      "Brand consistency audits",
      "Competitive brand analysis",
      "Crisis & reputation response planning",
      "Ongoing brand governance",
    ],
  },

  performanceMarketing: {
    path: "/performance-marketing",
    navLabel: "Performance Marketing",
    h1: "Performance Marketing Agency",
    tagline: "ROI-driven campaigns, full funnel.",
    metaTitle: "Performance Marketing Agency | ROI Driven Campaigns | DigyUdaan Media House",
    metaDescription:
      "Grow your business through data-driven performance marketing, Google Ads, Meta Ads and conversion optimization.",
    primaryKeyword: "Performance Marketing",
    secondaryKeywords: ["ROI Marketing", "Lead Generation", "Google Ads", "Meta Ads", "PPC Agency"],
    icon: Target,
    image: "/Performance Marketing.png",
    alt: "Performance Marketing Services",
    description:
      "ROAS-obsessed paid media across Meta, Google Search, Shopping and YouTube. Creative testing and audience laddering built to scale profitably, with reporting that ties spend to revenue.",
    features: [
      "Cross-channel paid media strategy",
      "Meta, Google Search, Shopping & YouTube",
      "Creative testing & audience laddering",
      "Conversion rate optimization",
      "Full-funnel attribution & reporting",
      "Weekly optimization cycles",
    ],
  },

  videoProduction: {
    path: "/video-production-services",
    navLabel: "Video Production",
    h1: "Professional Video Production Company",
    tagline: "Scroll-stopping video, made in-house.",
    metaTitle: "Professional Video Production Company | DigyUdaan Media House",
    metaDescription:
      "Corporate videos, product shoots, commercials, reels and promotional video production services.",
    primaryKeyword: "Video Production",
    secondaryKeywords: [
      "Corporate Videos",
      "Product Videos",
      "Video Marketing",
      "Commercial Production",
    ],
    icon: Film,
    image: "/Video Production.png",
    alt: "Professional Video Production Services",
    description:
      "Scroll-stopping video: performance UGC, brand films, product reels and hook-first ad creatives crafted in-house — from concept and shoot through edit and delivery.",
    features: [
      "Product & commercial shoots",
      "Brand films & corporate videos",
      "Performance UGC & ad reels",
      "Scriptwriting & storyboarding",
      "Professional editing & motion graphics",
      "Multi-format delivery (Reels, YouTube, Ads)",
    ],
  },

  offlineMarketing: {
    path: "/offline-marketing-services",
    navLabel: "Offline Marketing",
    h1: "Offline Marketing & Outdoor Advertising Agency",
    tagline: "Beyond the screen — real-world brand reach.",
    metaTitle: "Offline Marketing & Outdoor Advertising Agency | DigyUdaan Media House",
    metaDescription:
      "Billboards, exhibitions, print advertising, mall branding and offline marketing solutions.",
    primaryKeyword: "Offline Marketing",
    secondaryKeywords: [
      "Outdoor Advertising",
      "Billboard Advertising",
      "Print Marketing",
      "Exhibition Branding",
    ],
    icon: Radio,
    image: "/Offline Marketing.png",
    alt: "Offline Marketing Solutions",
    description:
      "Out-of-home, print and on-ground activations that extend your brand's reach beyond the screen and into the real world — billboards, exhibitions, mall branding and more.",
    features: [
      "Billboard & hoarding placements",
      "Mall & retail branding",
      "Exhibition & event branding",
      "Print advertising (newspaper, magazine)",
      "On-ground activations",
      "Vendor negotiation & placement planning",
    ],
  },

  aiMarketing: {
    path: "/ai-marketing-services",
    navLabel: "AI Marketing",
    h1: "AI Marketing Solutions",
    tagline: "Automate the busywork, scale what works.",
    metaTitle: "AI Marketing Solutions | AI Powered Digital Marketing | DigyUdaan Media House",
    metaDescription:
      "Automate your marketing using AI content generation, chatbots, personalization and predictive analytics.",
    primaryKeyword: "AI Marketing",
    secondaryKeywords: [
      "Artificial Intelligence Marketing",
      "Marketing Automation",
      "AI Chatbot",
      "AI Analytics",
    ],
    icon: Sparkles,
    alt: "Artificial Intelligence Marketing Solutions",
    description:
      "We layer AI into the marketing stack where it actually moves the needle — content generation, chatbot-led lead capture, on-site personalization and predictive analytics that sharpen targeting.",
    features: [
      "AI-assisted content generation",
      "Chatbot setup for lead capture",
      "Website & email personalization",
      "Predictive analytics & audience scoring",
      "Marketing automation workflows",
      "AI-powered ad creative testing",
    ],
  },

  ecommerceMarketing: {
    path: "/ecommerce-marketing-services",
    navLabel: "E-Commerce Marketing",
    h1: "E-Commerce Marketing Agency",
    tagline: "Turn store traffic into repeat revenue.",
    metaTitle: "E-Commerce Marketing Agency | Online Store Growth | DigyUdaan Media House",
    metaDescription:
      "Grow your online store with SEO, Google Shopping Ads, Meta Ads and marketplace marketing.",
    primaryKeyword: "E-Commerce Marketing",
    secondaryKeywords: [
      "Shopify Marketing",
      "WooCommerce SEO",
      "Amazon Marketing",
      "Online Store Marketing",
    ],
    icon: ShoppingBag,
    image: "/Ecommerce.png",
    alt: "E-Commerce Marketing Services",
    description:
      "Marketplace optimization, retention flows and conversion-focused campaigns across Shopify, WooCommerce and marketplaces — built to turn store traffic into repeat revenue.",
    features: [
      "Shopify & WooCommerce marketing",
      "Google Shopping & Meta catalog ads",
      "Email/SMS retention flows",
      "Amazon & marketplace optimization",
      "Conversion rate optimization",
      "Store SEO & product page optimization",
    ],
  },

  influencerMarketing: {
    path: "/influencer-marketing-services",
    navLabel: "Influencer Marketing",
    h1: "Influencer Marketing Agency",
    tagline: "Creators that actually sell.",
    metaTitle: "Influencer Marketing Agency | Creator Campaigns | DigyUdaan Media House",
    metaDescription:
      "Partner with top influencers to increase brand awareness, engagement and product sales.",
    primaryKeyword: "Influencer Marketing",
    secondaryKeywords: [
      "Creator Marketing",
      "Influencer Campaigns",
      "Social Influencers",
      "Brand Promotion",
    ],
    icon: UserPlus,
    image: "/Influencer Growth.png",
    alt: "Influencer Marketing Services",
    description:
      "Vetted creator networks, whitelisted ads and performance-tracked partnerships that turn reach into revenue — not just impressions and follower counts.",
    features: [
      "Creator sourcing & vetting",
      "Campaign briefing & negotiation",
      "Whitelisted/spark ads management",
      "Performance tracking per creator",
      "UGC content licensing",
      "Affiliate & commission-based programs",
    ],
  },

  contentMarketing: {
    path: "/content-marketing-services",
    navLabel: "Content Marketing",
    h1: "Content Marketing Services",
    tagline: "Content that ranks, reads well, and converts.",
    metaTitle: "Content Marketing Services | SEO Content Agency | DigyUdaan Media House",
    metaDescription:
      "Create engaging blogs, website content, social media copy and SEO articles that drive traffic.",
    primaryKeyword: "Content Marketing",
    secondaryKeywords: [
      "SEO Content",
      "Blog Writing",
      "Website Copywriting",
      "Content Strategy",
    ],
    icon: FileText,
    alt: "Content Marketing Services",
    description:
      "Blogs, website copy, and social content built around real search intent — written to bring organic traffic in and keep readers on the page long enough to convert.",
    features: [
      "SEO-driven blog writing",
      "Website & landing page copy",
      "Content calendars & strategy",
      "Social media copywriting",
      "Content audits & refreshes",
      "Topic & keyword research",
    ],
  },

  emailMarketing: {
    path: "/email-marketing-services",
    navLabel: "Email Marketing",
    h1: "Email Marketing Agency",
    tagline: "Automated campaigns that keep customers coming back.",
    metaTitle: "Email Marketing Agency | Customer Engagement | DigyUdaan Media House",
    metaDescription:
      "Generate more conversions through automated email campaigns, newsletters and customer retention.",
    primaryKeyword: "Email Marketing",
    secondaryKeywords: [
      "Email Automation",
      "Newsletter Marketing",
      "Lead Nurturing",
      "CRM Marketing",
    ],
    icon: Mail,
    alt: "Professional Email Marketing Services",
    description:
      "Automated email flows and newsletters designed for retention, not just broadcast — welcome series, abandoned cart, win-back and lifecycle campaigns that keep customers coming back.",
    features: [
      "Welcome & lifecycle email flows",
      "Abandoned cart & win-back campaigns",
      "Newsletter design & copywriting",
      "List segmentation & personalization",
      "A/B testing & deliverability optimization",
      "CRM integration & reporting",
    ],
  },

  localSeo: {
    path: "/local-seo-services",
    navLabel: "Local SEO",
    h1: "Local SEO Services",
    tagline: "Show up first when nearby customers search.",
    metaTitle: "Local SEO Services | Google Business Profile Optimization | DigyUdaan Media House",
    metaDescription:
      "Rank higher in local search results and attract nearby customers with Local SEO services.",
    primaryKeyword: "Local SEO",
    secondaryKeywords: ["Google Business Profile", "Local Search Optimization", "Maps SEO"],
    icon: MapPin,
    alt: "Local SEO Services",
    description:
      "Google Business Profile optimization, local citations and maps-focused SEO built to get your business found by nearby customers exactly when they're searching.",
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Google Maps ranking optimization",
      "Local keyword targeting",
      "Review generation & management",
      "NAP consistency audits",
    ],
  },

  marketplaceMarketing: {
    path: "/marketplace-marketing",
    navLabel: "Marketplace Marketing",
    h1: "Marketplace Marketing Services",
    tagline: "Grow sales on Amazon, Flipkart and beyond.",
    metaTitle: "Marketplace Marketing Services | Amazon & Flipkart | DigyUdaan Media House",
    metaDescription:
      "Grow sales on Amazon, Flipkart and online marketplaces through optimization and advertising.",
    primaryKeyword: "Marketplace Marketing",
    secondaryKeywords: ["Amazon Marketing", "Flipkart Marketing", "Marketplace SEO"],
    icon: Store,
    alt: "Marketplace Marketing Services",
    description:
      "Listing optimization, marketplace ads and catalog management across Amazon, Flipkart and other online marketplaces — built to grow sales where your customers already shop.",
    features: [
      "Amazon & Flipkart listing optimization",
      "Marketplace PPC (Sponsored Ads)",
      "Catalog & inventory management",
      "Marketplace SEO & keyword ranking",
      "Review & rating management",
      "Competitor benchmarking",
    ],
  },

  leadGeneration: {
    path: "/lead-generation-services",
    navLabel: "Lead Generation",
    h1: "Lead Generation Company",
    tagline: "Qualified leads, not just form fills.",
    metaTitle: "Lead Generation Company | Digital Lead Generation | DigyUdaan Media House",
    metaDescription:
      "Generate qualified business leads through SEO, PPC, Meta Ads and conversion optimization.",
    primaryKeyword: "Lead Generation",
    secondaryKeywords: [
      "Lead Generation Company",
      "B2B Leads",
      "Sales Leads",
      "Digital Lead Generation",
    ],
    icon: TrendingUp,
    alt: "Lead Generation Services",
    description:
      "SEO, PPC, Meta Ads and conversion-optimized landing pages working together as one system — built to generate qualified leads your sales team actually wants to talk to.",
    features: [
      "Lead-gen landing page design",
      "PPC & Meta Ads for lead capture",
      "Form & CTA conversion optimization",
      "Lead scoring & qualification",
      "B2B & B2C lead funnels",
      "CRM integration & lead tracking",
    ],
  },

  creativeStrategy: {
    path: "/creative-strategy",
    navLabel: "Creative Strategy",
    h1: "Creative Strategy & Campaign Planning Agency",
    tagline: "Campaigns built on insight, not guesswork.",
    metaTitle: "Creative Strategy & Campaign Planning Agency | DigyUdaan Media House",
    metaDescription:
      "Creative marketing campaigns, advertising strategy and branding solutions that drive business growth.",
    primaryKeyword: "Creative Strategy",
    secondaryKeywords: [
      "Creative Campaigns",
      "Marketing Strategy",
      "Advertising Strategy",
      "Brand Campaign",
    ],
    icon: Lightbulb,
    alt: "Creative Strategy Services",
    description:
      "Creative marketing campaigns, advertising strategy and branding solutions that drive business growth — from big-idea concepting to channel-by-channel campaign planning.",
    features: [
      "Campaign concepting & big ideas",
      "Advertising & messaging strategy",
      "Cross-channel campaign planning",
      "Creative briefs & asset direction",
      "Brand campaign development",
      "Post-campaign performance review",
    ],
  },
};

export const SERVICE_PAGE_LIST = Object.values(SERVICE_PAGES);
