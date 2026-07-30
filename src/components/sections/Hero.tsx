import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";

const STATS = [
  { value: "250+", label: "Projects Delivered", icon: TrendingUp },
  { value: "120+", label: "Happy Clients", icon: Users },
  { value: "8+", label: "Digital Services", icon: Zap },
  { value: "98%", label: "Client Satisfaction", icon: Sparkles },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-14">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark"
            >
              {SITE.tagline} — Greater Noida, India
            </motion.p>

            <h1 className="mt-4 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              Transform your brand.{" "}
              <span className="text-gradient-brand">Accelerate growth.</span>
            </h1>
          </div>

          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              We Design, Build, and Propel Brands to Reach New Heights of Success. From SEO
              and Performance Marketing to Creative Branding, Web Development, AI Marketing,
              and Video Production, we help ambitious businesses{" "}
              <span className="font-medium text-foreground">generate more leads</span>,{" "}
              <span className="font-semibold text-secondary-dark">increase conversions</span>,
              and achieve sustainable growth with data-driven digital strategies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticButton href={SITE.whatsapp} variant="gold" size="lg">
                Get Started Today
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline" size="lg" showArrow={false}>
                Talk to Our Experts <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Visual panel — Herosec1 showcase image replaces the floating-orb hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-white/10"
          style={{
            background: "var(--primary-dark)",
          }}
        >
          <img
            src="/Herosec1.png"
            alt="DigyUdaan Media House — analytics dashboards, campaign performance, and social growth showcase"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Stats strip — sits below the visual banner */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.6 }}
              className="rounded-2xl p-5 backdrop-blur-sm"
              style={{ background: "var(--primary-dark)" }}
            >
              <s.icon className="h-5 w-5 text-secondary-light" />
              <div className="mt-3 font-display text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
          Trusted by startups, local businesses, D2C brands, and growing enterprises across
          India to deliver measurable business growth through creative marketing and
          technology.
        </p>
      </div>
    </section>
  );
}