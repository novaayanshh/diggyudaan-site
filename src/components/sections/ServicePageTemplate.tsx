import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import type { ServicePage } from "@/lib/servicePages";
import { SERVICES } from "@/lib/site";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ProcessSection, FAQSection, ContactCTA } from "@/components/sections/HomeSections";
import { motion } from "framer-motion";

export function ServicePageTemplate({ data }: { data: ServicePage }) {
  const Icon = data.icon;
  const related = SERVICES.filter((s) => s.title !== data.navLabel).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.28em] text-secondary"
            >
              Services
            </Link>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              {data.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-foreground/80">{data.tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {data.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <MagneticButton variant="gold">Get a Free Audit</MagneticButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image + Features */}
      <section className="relative pb-8">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-start">
          {data.image ? (
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={data.image}
                  alt={data.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="flex h-full min-h-[280px] items-center justify-center rounded-3xl border border-border bg-surface-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <Icon className="h-10 w-10" />
                </div>
              </div>
            </Reveal>
          )}

          <Reveal>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              What's included in {data.primaryKeyword}
            </h2>
            <Stagger className="mt-6 space-y-3">
              {data.features.map((f) => (
                <motion.div
                  key={f}
                  variants={staggerItem}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {f}
                </motion.div>
              ))}
            </Stagger>

            <div className="mt-8 flex flex-wrap gap-2">
              {data.secondaryKeywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted-foreground"
                >
                  {k}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessSection />

      {/* Related services */}
      {related.length > 0 && (
        <section className="relative py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                Explore more
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Related services
              </h2>
            </Reveal>
            <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((s) => (
                <motion.div key={s.slug} variants={staggerItem}>
                  <Link to="/services" hash={s.slug}>
                    <GlassCard>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/25 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{s.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">
                        Learn more
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <FAQSection />
      <ContactCTA />
    </>
  );
}
