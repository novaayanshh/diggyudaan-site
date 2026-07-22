import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ServicesGrid, ProcessSection, ContactCTA, FAQSection } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — DigyUdaan Media House" },
      {
        name: "description",
        content:
          "Every capability your D2C brand needs — Brand Identity, Performance Marketing, Social Media Management, Ecommerce Marketing, Graphic Design, Video Production  SEO, Website Development, influencer, brand management, Offline Marketing. All in-house.",
      },
      { property: "og:title", content: "DigyUdaan Services — Under One Roof" },
      { property: "og:description", content: "Performance marketing, brand and tech — 100% in-house." },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Our services
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              We craft compelling <span className="text-gradient-brand">digital stories</span> and{" "}
              <span className="text-gradient-gold">deliver innovative solutions</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We empower brands to soar in the digital landscape — creativity and strategy, hand
              in hand. Every function under one roof, one focused team.
            </p>
          </Reveal>
        </div>
      </section>
      <ServicesGrid />
      <ProcessSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
