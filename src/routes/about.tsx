import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ProcessSection, WhyChooseUs, ContactCTA } from "@/components/sections/HomeSections";
import { SITE } from "@/lib/site";
import { Heart, Eye, Rocket, Users, Award, Clock, ShieldCheck, Zap, Cpu } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — DigyUdaan Media House" },
      {
        name: "description",
        content:
          "Meet the DigyUdaan team: a 12+ strong in-house D2C growth agency built for first-generation founders in India. Vision, values, 6-D process.",
      },
      { property: "og:title", content: "About DigyUdaan Media House" },
      {
        property: "og:description",
        content: "In-house D2C growth team. Strategy, brand, tech and performance under one roof.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              About DigyUdaan
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Digital magic that sparks{" "}
              <span className="text-gradient-brand">real connections</span> and drives{" "}
              <span className="text-gradient-gold">real results</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              At DigyUdaan Media House, we're obsessed with helping first-generation founders take
              their brands to the next level. Let's make some noise and change the game together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission / What we do */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Who We Are",
              body: "We're for brands who dare to dream big, crave creativity and want lasting impact online. If you're ready to elevate your presence and leave a mark, we're here.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              body: "Tell awesome digital stories and use smart marketing to build brands that rock. We mix creativity and tech to help clients stand out and crush their goals.",
            },
            {
              icon: Heart,
              title: "Our Mission",
              body: "Elevate first-generation D2C founders from zero sales to sustainable scale — with brand, tech and performance under one roof.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <GlassCard>
                <c.icon className="h-6 w-6 text-secondary" />
                <h3 className="mt-4 font-display text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Our journey
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              From a scrappy idea to a <span className="text-gradient-brand">300-founder movement</span>.
            </h2>
          </Reveal>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:left-1/2"
            />
            <Stagger className="space-y-10">
              {[
                { year: "2020", title: "The Beginning", body: "Founded to help Indian D2C founders bypass the agency BS." },
                { year: "2022", title: "Scaling In-House", body: "12+ strong team. Zero outsourcing. Every function internal." },
                { year: "2024", title: "The 100+ Framework", body: "Signature system delivering 100+ orders in 30 days." },
                { year: "2025", title: "300+ Founders", body: "Trusted growth partner across 9+ industries." },
              ].map((t, i) => (
                <motion.div
                  key={t.year}
                  variants={staggerItem}
                  className={`relative flex md:items-center ${
                    i % 2 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <GlassCard tilt={false}>
                      <div className="font-display text-3xl font-bold text-gradient-gold">{t.year}</div>
                      <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                    </GlassCard>
                  </div>
                  <span className="absolute left-5 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />

      {/* Culture */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Culture
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              How we work, <span className="text-gradient-gold">daily</span>.
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Rocket, t: "Personalized Service", d: "We tailor solutions to your unique needs. Dedicated attention, always." },
              { icon: Award, t: "Expert Team", d: "Years of experience, deep craft, and passion for results that exceed expectations." },
              { icon: Clock, t: "Timely Delivery", d: "We hit deadlines. Efficient execution, no compromise on quality." },
              { icon: ShieldCheck, t: "24/7 Support", d: "Always just a call or click away. Day or night, we've got your back." },
              { icon: Cpu, t: "Latest Technology", d: "Cutting-edge tools and platforms. Efficient, effective, future-ready." },
              { icon: Zap, t: "Fast & Reliable", d: "High-quality results shipped quickly, without cutting corners." },
            ].map((c) => (
              <motion.div key={c.t} variants={staggerItem}>
                <GlassCard>
                  <c.icon className="h-6 w-6 text-secondary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </GlassCard>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
