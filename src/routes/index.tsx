import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { PromoBanner } from "@/components/sections/PromoBanner";
import {
  ClientMarquee,
  StatsSection,
  AboutPreview,
  WhyChooseUs,
  ServicesGrid,
  ProcessSection,
  IndustriesStrip,
  TestimonialsSection,
  CaseStudies,
  FAQSection,
  ContactCTA,
} from "@/components/sections/HomeSections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <ClientMarquee />
      <StatsSection />
      <AboutPreview />
      <WhyChooseUs />
      <ServicesGrid compact />
      <ProcessSection />
      <IndustriesStrip />
      <CaseStudies />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}