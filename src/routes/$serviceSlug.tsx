import { createFileRoute, notFound } from "@tanstack/react-router";
import { seoData } from "@/data/seoData";
import { Reveal } from "@/components/Reveal";
import { ContactCTA, FAQSection } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/$serviceSlug")({
  loader: ({ params }) => {
    // 1. Check if slug matches any service slug (e.g., 'seo-services') OR exact url (e.g., '/seo-services')
    const service = seoData.services.find(
      (s) => s.slug === params.serviceSlug || s.url === `/${params.serviceSlug}`
    );

    // Agar match nahi milta to 404 trigger hoga
    if (!service) {
      throw notFound();
    }

    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.service) return {};

    const { metaTitle, metaDescription, primaryKeyword, secondaryKeywords, image } =
      loaderData.service;
    const keywordsList = [primaryKeyword, ...secondaryKeywords].join(", ");

    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { name: "keywords", content: keywordsList },

        // Open Graph Meta Tags (Social Media Links)
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:image", content: `/images/${image}` },
        { property: "og:type", content: "article" },

        // Twitter Card Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaTitle },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: `/images/${image}` },
      ],
    };
  },
  component: SingleServicePage,
});

function SingleServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      {/* Service Hero Section */}
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Service Overview
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {service.metaDescription}
            </p>
          </Reveal>

          {/* Service Image Banner */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <img
              src={`/images/${service.image}`}
              alt={service.alt}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      <FAQSection />
      <ContactCTA />
    </>
  );
}