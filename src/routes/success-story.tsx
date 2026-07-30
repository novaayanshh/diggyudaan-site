import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { Counter } from "@/components/Counter";
import { CaseStudies, TestimonialsSection, ContactCTA } from "@/components/sections/HomeSections";
import { TrendingUp, ShoppingBag, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/success-story")({
  component: SuccessPage,
  head: () => ({
    meta: [
      { title: "Our Successful Story | DigyUdaan Media House" },
      {
        name: "description",
        content:
          "Real D2C case studies from DigyUdaan Media House: zero to 100+ orders in 30 days, ₹1Cr+ monthly revenue, 2%+ conversion rates.",
      },
      { property: "og:title", content: "DigyUdaan Success Stories" },
      { property: "og:description", content: "Real brands. Real results. Real founders." },
    ],
  }),
});

function SuccessPage() {
  return (
    <>
      <section className="relative pt-16 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Our successful story
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Real founders. <span className="text-gradient-brand">Real revenue.</span>{" "}
              <span className="text-gradient-gold">Real proof.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We help first-generation founders go from zero sales to 100+ orders in 30 days and
              beyond. Here's the receipts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Built to give every business a{" "}
              <span className="text-gradient-brand">strategy of its own</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded with a vision to empower businesses in the digital era, DiggyUdaan combines
              creativity, technology, and performance marketing to deliver impactful solutions. We
              understand that every business has unique goals, challenges, and audiences. That's
              why we don't believe in one-size-fits-all strategies.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Instead, we take the time to understand your business, analyze your market, and
              craft personalized digital marketing campaigns that align with your objectives. From
              increasing brand awareness to driving conversions, every strategy we build is
              focused on delivering real business outcomes.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-10 overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/OurStory.png"
              alt="DigyUdaan Media House's story — from founding vision to a strategy built for every business"
              className="w-full h-auto object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Big metrics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, n: 320, s: "%", l: "Avg ROAS lift in 60 days" },
              { icon: ShoppingBag, n: 100, s: "+", l: "Orders in first 30 days" },
              { icon: Users, n: 300, s: "+", l: "Founders served" },
              { icon: Sparkles, n: 34, s: "‰", l: "Avg store conversion" },
            ].map((s) => (
              <motion.div key={s.l} variants={staggerItem}>
                <GlassCard tilt={false}>
                  <s.icon className="h-5 w-5 text-secondary" />
                  <div className="mt-4 font-display text-5xl font-bold text-gradient-brand">
                    <Counter value={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </GlassCard>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <CaseStudies />

      {/* Story spotlight */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="glass-strong overflow-hidden rounded-3xl p-10 md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                Spotlight
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                Showshaa: from <span className="text-gradient-gold">0 to ₹42L/month</span>.
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {[
                  { k: "Challenge", v: "Struggling women's designer brand with zero online sales and no brand system." },
                  { k: "What we did", v: "Full brand refresh, high-converting Shopify build, Meta + Google performance stack, UGC + creator engine." },
                  { k: "Outcome", v: "180+ orders/month by month two. 3.4% CVR baseline. ₹42L monthly revenue and climbing." },
                ].map((b) => (
                  <div key={b.k}>
                    <p className="text-xs uppercase tracking-widest text-secondary">{b.k}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}