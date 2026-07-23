export interface ServiceSEO {
  slug: string;
  title: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  image: string;
  alt: string;
}

export interface SEOData {
  homepage: {
    url: string;
    metaTitle: string;
    metaDescription: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  services: ServiceSEO[];
}

export const seoData: SEOData = {
  homepage: {
    url: "/",
    metaTitle: "Digital Marketing Agency in Noida | SEO, Google Ads & Branding | DiggyUdaan",
    metaDescription: "DiggyUdaan is a full-service digital marketing agency offering SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, Branding, Performance Marketing, AI Marketing, Video Production and E-Commerce Marketing to help businesses grow online.",
    primaryKeyword: "Digital Marketing Agency",
    secondaryKeywords: [
      "SEO Company", "Google Ads Agency", "Social Media Marketing",
      "Website Development", "Branding Agency", "Performance Marketing",
      "AI Marketing", "E-Commerce Marketing", "Video Production"
    ]
  },
  services: [
    {
      slug: "seo-services",
      title: "SEO Services",
      url: "/seo-services",
      metaTitle: "SEO Services in Noida | Best SEO Company | DiggyUdaan",
      metaDescription: "Improve your Google rankings with DiggyUdaan's professional SEO services. Technical SEO, On-Page SEO, Local SEO & Link Building for long-term growth.",
      primaryKeyword: "SEO Services",
      secondaryKeywords: ["SEO Company", "Technical SEO", "Local SEO", "On-Page SEO", "Organic Traffic", "Search Engine Optimization"],
      image: "seo-services.webp",
      alt: "Professional SEO Services for Business Growth"
    },
    {
      slug: "google-ads-services",
      title: "Google Ads",
      url: "/google-ads-services",
      metaTitle: "Google Ads Agency | PPC Management Company",
      metaDescription: "Maximize ROI with Google Ads management services including Search, Display, Shopping and Performance Max campaigns.",
      primaryKeyword: "Google Ads Services",
      secondaryKeywords: ["Google PPC", "Google Ads Agency", "Search Ads", "Shopping Ads", "PPC Management"],
      image: "google-ads.webp",
      alt: "Google Ads Campaign Management Services"
    },
    {
      slug: "meta-ads-services",
      title: "Meta Ads",
      url: "/meta-ads-services",
      metaTitle: "Meta Ads Agency | Facebook & Instagram Ads",
      metaDescription: "Increase leads and sales with Facebook & Instagram advertising managed by certified Meta Ads experts.",
      primaryKeyword: "Meta Ads",
      secondaryKeywords: ["Facebook Ads", "Instagram Ads", "Paid Social Media", "Meta Advertising"],
      image: "meta-ads.webp",
      alt: "Facebook and Instagram Advertising Services"
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      url: "/social-media-marketing",
      metaTitle: "Social Media Marketing Agency | SMM Services",
      metaDescription: "Grow your business through professional Social Media Marketing on Instagram, Facebook, LinkedIn and YouTube.",
      primaryKeyword: "Social Media Marketing",
      secondaryKeywords: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Social Media Management"],
      image: "social-media-marketing.webp",
      alt: "Social Media Marketing Services"
    },
    {
      slug: "website-development",
      title: "Website Development",
      url: "/website-development",
      metaTitle: "Website Development Company | Responsive Websites",
      metaDescription: "Build responsive, SEO-friendly business websites that convert visitors into customers.",
      primaryKeyword: "Website Development",
      secondaryKeywords: ["Web Development", "Website Design", "Responsive Website", "Corporate Website"],
      image: "website-development.webp",
      alt: "Professional Website Development Services"
    },
    {
      slug: "graphic-design-services",
      title: "Graphic Design",
      url: "/graphic-design-services",
      metaTitle: "Graphic Design Services | Creative Design Agency",
      metaDescription: "Professional graphic design services for branding, marketing, packaging and social media creatives.",
      primaryKeyword: "Graphic Design Services",
      secondaryKeywords: ["Creative Design", "Social Media Creatives", "Marketing Design", "Brochure Design"],
      image: "graphic-design.webp",
      alt: "Creative Graphic Design Services"
    },
    {
      slug: "brand-identity-development",
      title: "Brand Identity",
      url: "/brand-identity-development",
      metaTitle: "Brand Identity Development | Branding Agency",
      metaDescription: "Develop a memorable brand identity through logo design, branding strategy and visual identity.",
      primaryKeyword: "Brand Identity Development",
      secondaryKeywords: ["Branding Agency", "Logo Design", "Visual Identity", "Brand Guidelines"],
      image: "brand-identity.webp",
      alt: "Brand Identity Development Services"
    },
    {
      slug: "brand-management",
      title: "Brand Management",
      url: "/brand-management",
      metaTitle: "Brand Management Services | Brand Strategy Agency",
      metaDescription: "Strengthen your business with professional brand management, positioning, reputation management and brand consistency.",
      primaryKeyword: "Brand Management",
      secondaryKeywords: ["Brand Strategy", "Reputation Management", "Brand Positioning", "Brand Growth"],
      image: "brand-management.webp",
      alt: "Professional Brand Management Services"
    },
    {
      slug: "performance-marketing",
      title: "Performance Marketing",
      url: "/performance-marketing",
      metaTitle: "Performance Marketing Agency | ROI Driven Campaigns",
      metaDescription: "Grow your business through data-driven performance marketing, Google Ads, Meta Ads and conversion optimization.",
      primaryKeyword: "Performance Marketing",
      secondaryKeywords: ["ROI Marketing", "Lead Generation", "Google Ads", "Meta Ads", "PPC Agency"],
      image: "performance-marketing.webp",
      alt: "Performance Marketing Services"
    },
    {
      slug: "video-production-services",
      title: "Video Production",
      url: "/video-production-services",
      metaTitle: "Professional Video Production Company",
      metaDescription: "Corporate videos, product shoots, commercials, reels and promotional video production services.",
      primaryKeyword: "Video Production",
      secondaryKeywords: ["Corporate Videos", "Product Videos", "Video Marketing", "Commercial Production"],
      image: "video-production.webp",
      alt: "Professional Video Production Services"
    },
    {
      slug: "offline-marketing-services",
      title: "Offline Marketing",
      url: "/offline-marketing-services",
      metaTitle: "Offline Marketing & Outdoor Advertising Agency",
      metaDescription: "Billboards, exhibitions, print advertising, mall branding and offline marketing solutions.",
      primaryKeyword: "Offline Marketing",
      secondaryKeywords: ["Outdoor Advertising", "Billboard Advertising", "Print Marketing", "Exhibition Branding"],
      image: "offline-marketing.webp",
      alt: "Offline Marketing Solutions"
    },
    {
      slug: "ai-marketing-services",
      title: "AI Marketing",
      url: "/ai-marketing-services",
      metaTitle: "AI Marketing Solutions | AI Powered Digital Marketing",
      metaDescription: "Automate your marketing using AI content generation, chatbots, personalization and predictive analytics.",
      primaryKeyword: "AI Marketing",
      secondaryKeywords: ["Artificial Intelligence Marketing", "Marketing Automation", "AI Chatbot", "AI Analytics"],
      image: "ai-marketing.webp",
      alt: "Artificial Intelligence Marketing Solutions"
    },
    {
      slug: "ecommerce-marketing-services",
      title: "E-Commerce Marketing",
      url: "/ecommerce-marketing-services",
      metaTitle: "E-Commerce Marketing Agency | Online Store Growth",
      metaDescription: "Grow your online store with SEO, Google Shopping Ads, Meta Ads and marketplace marketing.",
      primaryKeyword: "E-Commerce Marketing",
      secondaryKeywords: ["Shopify Marketing", "WooCommerce SEO", "Amazon Marketing", "Online Store Marketing"],
      image: "ecommerce-marketing.webp",
      alt: "E-Commerce Marketing Services"
    },
    {
      slug: "influencer-marketing-services",
      title: "Influencer Marketing",
      url: "/influencer-marketing-services",
      metaTitle: "Influencer Marketing Agency | Creator Campaigns",
      metaDescription: "Partner with top influencers to increase brand awareness, engagement and product sales.",
      primaryKeyword: "Influencer Marketing",
      secondaryKeywords: ["Creator Marketing", "Influencer Campaigns", "Social Influencers", "Brand Promotion"],
      image: "influencer-marketing.webp",
      alt: "Influencer Marketing Services"
    },
    {
      slug: "content-marketing-services",
      title: "Content Marketing",
      url: "/content-marketing-services",
      metaTitle: "Content Marketing Services | SEO Content Agency",
      metaDescription: "Create engaging blogs, website content, social media copy and SEO articles that drive traffic.",
      primaryKeyword: "Content Marketing",
      secondaryKeywords: ["SEO Content", "Blog Writing", "Website Copywriting", "Content Strategy"],
      image: "content-marketing.webp",
      alt: "Content Marketing Services"
    },
    {
      slug: "email-marketing-services",
      title: "Email Marketing",
      url: "/email-marketing-services",
      metaTitle: "Email Marketing Agency | Customer Engagement",
      metaDescription: "Generate more conversions through automated email campaigns, newsletters and customer retention.",
      primaryKeyword: "Email Marketing",
      secondaryKeywords: ["Email Automation", "Newsletter Marketing", "Lead Nurturing", "CRM Marketing"],
      image: "email-marketing.webp",
      alt: "Professional Email Marketing Services"
    },
    {
      slug: "local-seo-services",
      title: "Local SEO",
      url: "/local-seo-services",
      metaTitle: "Local SEO Services | Google Business Profile Optimization",
      metaDescription: "Rank higher in local search results and attract nearby customers with Local SEO services.",
      primaryKeyword: "Local SEO",
      secondaryKeywords: ["Google Business Profile", "Local Search Optimization", "Maps SEO"],
      image: "local-seo.webp",
      alt: "Local SEO Services"
    },
    {
      slug: "marketplace-marketing",
      title: "Marketplace Marketing",
      url: "/marketplace-marketing",
      metaTitle: "Marketplace Marketing Services | Amazon & Flipkart",
      metaDescription: "Grow sales on Amazon, Flipkart and online marketplaces through optimization and advertising.",
      primaryKeyword: "Marketplace Marketing",
      secondaryKeywords: ["Amazon Marketing", "Flipkart Marketing", "Marketplace SEO"],
      image: "marketplace-marketing.webp",
      alt: "Marketplace Marketing Services"
    },
    {
      slug: "lead-generation-services",
      title: "Lead Generation",
      url: "/lead-generation-services",
      metaTitle: "Lead Generation Company | Digital Lead Generation",
      metaDescription: "Generate qualified business leads through SEO, PPC, Meta Ads and conversion optimization.",
      primaryKeyword: "Lead Generation",
      secondaryKeywords: ["Lead Generation Company", "B2B Leads", "Sales Leads", "Digital Lead Generation"],
      image: "lead-generation.webp",
      alt: "Lead Generation Services"
    },
    {
      slug: "creative-strategy",
      title: "Creative Strategy",
      url: "/creative-strategy",
      metaTitle: "Creative Strategy & Campaign Planning Agency",
      metaDescription: "Creative marketing campaigns, advertising strategy and branding solutions that drive business growth.",
      primaryKeyword: "Creative Strategy",
      secondaryKeywords: ["Creative Campaigns", "Marketing Strategy", "Advertising Strategy", "Brand Campaign"],
      image: "creative-strategy.webp",
      alt: "Creative Strategy Services"
    }
  ]
};