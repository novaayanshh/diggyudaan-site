import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/servicePages";

const data = SERVICE_PAGES.localSeo;

export const Route = createFileRoute("/local-seo-services")({
  component: () => <ServicePageTemplate data={data} />,
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      {
        name: "keywords",
        content: [data.primaryKeyword, ...data.secondaryKeywords].join(", "),
      },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:type", content: "website" },
    ],
  }),
});
