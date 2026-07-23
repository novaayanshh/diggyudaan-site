import { CLIENTS, STATS, WHY, SERVICES, PROCESS, TESTIMONIALS, FAQS, SITE } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { MagneticButton } from "@/components/MagneticButton";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronDown,
  Quote,
  ShieldCheck,
  Rocket,
  Award,
  Sparkles,
} from "lucide-react";

/* ---------------- Client Marquee ---------------- */
export function ClientMarquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative border-y border-white/10 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Trusted by ambitious D2C founders
        </p>
      </div>
      <div className="group flex overflow-hidden">
        <div className="flex animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {items.map((c, i) => (
            <div
              key={i}
              className="flex h-14 shrink-0 items-center gap-3 rounded-2xl glass px-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 font-display text-sm font-bold text-foreground">
                {c[0]}
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Client Logos Grid ---------------- */
export function ClientLogosGrid() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            Some of our esteemed clients
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            Brands that <span className="text-gradient-brand">trust us</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-lg shadow-black/10 sm:p-10">
            <img
              src="/Our Clients.png"
              alt="Our clients"
              className="h-auto w-full max-w-2xl object-contain"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
export function StatsSection() {
  const parsed = STATS.map((s) => {
    const num = parseInt(s.value.replace(/\D/g, ""), 10) || 0;
    const suffix = s.value.replace(/[\d,]/g, "");
    return { ...s, num, suffix };
  });
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            The numbers
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Momentum you can <span className="text-gradient-gold">measure</span>.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {parsed.map((s) => (
            <motion.div key={s.label} variants={staggerItem}>
              <GlassCard tilt={false} className="p-8">
                <div className="font-display text-5xl font-bold text-gradient-brand">
                  <Counter value={s.num} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- About Preview ---------------- */
export function AboutPreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            About us
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Meet your complete <span className="text-gradient-brand">D2C growth team</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We don't just run ads or make empty guarantees. We have a consistent track record of
            helping D2C founders generate 100+ orders in their very first month. Our clients go
            from struggling with zero sales to scaling up to{" "}
            <span className="text-foreground font-medium">₹1 crore/month</span> and beyond.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Proven Results, Not Empty Promises",
              "Personalized, Hands-On Approach",
              "Complete Ecosystem, Not Fragmented",
              "Exclusive D2C Specialization",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Sparkles className="h-3 w-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <MagneticButton href="/about" variant="outline">
              Read our story
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <GlassCard tilt className="p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Rocket, k: "3+", v: "Years of experience" },
                  { icon: ShieldCheck, k: "12+", v: "In-house team" },
                  { icon: Award, k: "188+", v: "Clients served" },
                  { icon: Sparkles, k: "31+", v: "Student clubs" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-white/5 p-5">
                    <s.icon className="h-5 w-5 text-secondary" />
                    <div className="mt-3 font-display text-3xl font-bold text-gradient-brand">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why Choose Us ---------------- */
export function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            Why choose us
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Why DigyUdaan must be your <span className="text-gradient-gold">growth partner</span>.
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <motion.div key={w.title} variants={staggerItem}>
              <GlassCard glow={i % 2 ? "gold" : "primary"}>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-secondary font-display font-bold">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Services Grid ---------------- */
export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? SERVICES.slice(0, 6) : SERVICES;
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Services
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Every capability your brand needs,{" "}
              <span className="text-gradient-brand">under one roof</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            From brand identity to full-funnel performance — one integrated team, one shared north
            star: your revenue.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <motion.div key={s.slug} variants={staggerItem} id={s.slug}>
              <GlassCard>
                {s.image && (
                  <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                    <img
                      src={s.image}
                      alt={s.alt ?? s.title}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/25 text-primary transition-all group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 min-h-[3.5rem] text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Link
                  to={s.path ?? "/contact"}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-secondary"
                >
                  {s.path ? "Learn more" : "Start a project"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>

        {compact && (
          <div className="mt-10 text-center">
            <MagneticButton href="/services" variant="outline">
              View all services
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function ProcessSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            The 6-D Process
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            How we take you from <span className="text-gradient-brand">zero to scale</span>.
          </h2>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent lg:block"
          />
          <Stagger className="grid gap-6 lg:grid-cols-2">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                variants={staggerItem}
                className={`relative ${i % 2 ? "lg:mt-16" : ""}`}
              >
                <GlassCard tilt={false}>
                  <div className="flex items-center gap-4">
                    <div className="font-display text-5xl font-bold text-gradient-gold">
                      {p.n}
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Founders. <span className="text-gradient-brand">Real ones.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-14"
            >
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
              <Quote className="h-10 w-10 text-secondary" />
              <p className="relative mt-6 font-display text-2xl leading-[1.35] md:text-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex text-secondary">
                  {"★★★★★".split("").map((s, k) => (
                    <span key={k}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Show testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-10 bg-secondary" : "w-4 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case Studies ---------------- */
export function CaseStudies() {
  const cases = [
    {
      brand: "Showshaa",
      tag: "Women's Designer Clothing",
      before: "0 orders / month",
      after: "180+ orders / month",
      metric: "+320%",
      metricLabel: "ROAS in 60 days",
    },
    {
      brand: "Agami",
      tag: "Lifestyle & Wellness",
      before: "1.2% CVR",
      after: "3.6% CVR",
      metric: "3x",
      metricLabel: "Conversion lift",
    },
    {
      brand: "Sumaya",
      tag: "Modest Fashion",
      before: "₹0 revenue",
      after: "₹42L / month",
      metric: "0→100+",
      metricLabel: "Orders in 30 days",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Case studies
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Marketing results that <span className="text-gradient-gold">compound</span>.
            </h2>
          </div>
          <MagneticButton href="/success-story" variant="outline">
            All success stories
          </MagneticButton>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <motion.div key={c.brand} variants={staggerItem}>
              <GlassCard>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{c.brand}</h3>
                <div className="mt-6 space-y-3">
                  <MetricRow label="Before" value={c.before} muted />
                  <MetricRow label="After" value={c.after} />
                </div>
                <div className="mt-6 rounded-2xl border border-secondary/30 bg-secondary/10 p-4">
                  <div className="font-display text-3xl font-bold text-gradient-gold">
                    {c.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">{c.metricLabel}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function MetricRow({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className={muted ? "text-muted-foreground" : "font-semibold text-foreground"}>
        {value}
      </span>
    </div>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Questions, <span className="text-gradient-brand">answered</span>.
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl glass"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */
export function ContactCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                  Ready to fly?
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Let's take your brand from{" "}
                  <span className="text-gradient-gold">0 to 100+ orders</span> in 30 days.
                </h2>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  Only 10 client seats per month. Book your free marketing audit and see if
                  we're a fit.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row">
                <MagneticButton href={SITE.whatsapp} variant="gold" size="lg">
                  Free Marketing Audit
                </MagneticButton>
                <MagneticButton href="/contact" variant="outline" size="lg">
                  Talk to us
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Industries strip ---------------- */
export function IndustriesStrip() {
  const inds = [
    "Fashion",
    "Beauty",
    "Wellness",
    "Home",
    "Food & Bev",
    "Jewellery",
    "Fitness",
    "Kids",
    "Accessories",
  ];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            Industries we scale
          </p>
        </Reveal>
        <Stagger className="flex flex-wrap justify-center gap-2">
          {inds.map((i) => (
            <motion.span
              key={i}
              variants={staggerItem}
              className="rounded-full glass px-5 py-2 text-sm font-medium"
            >
              {i}
            </motion.span>
          ))}
        </Stagger>
      </div>
    </section>
  );
}