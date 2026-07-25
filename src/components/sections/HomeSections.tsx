import { CLIENTS, STATS, WHY, SERVICES, PROCESS, TESTIMONIALS, FAQS, SITE } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
    <section className="relative border-y border-border py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
          Trusted by ambitious D2C founders
        </p>
      </div>
      <div className="group flex overflow-hidden">
        <div className="flex animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {items.map((c, i) => (
            <div
              key={i}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-surface px-5"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
            The numbers
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Momentum you can <span className="text-gradient-gold">measure</span>.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {parsed.map((s) => (
            <motion.div key={s.label} variants={staggerItem}>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="font-display text-5xl font-bold text-gradient-brand">
                  <Counter value={s.num} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- About / Story Preview ---------------- */
export function AboutPreview() {
  return (
    <section className="relative bg-surface-2 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
            About us
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Meet your complete <span className="text-gradient-brand">D2C growth team</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            We don't just run ads or make empty guarantees. We have a consistent track record of
            helping D2C founders generate 100+ orders in their very first month. Our clients go
            from struggling with zero sales to scaling up to{" "}
            <span className="font-medium text-foreground">₹1 crore/month</span> and beyond.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Proven Results, Not Empty Promises",
              "Personalized, Hands-On Approach",
              "Complete Ecosystem, Not Fragmented",
              "Exclusive D2C Specialization",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary-dark">
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
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-surface p-6">
            {[
              { icon: Rocket, k: "3+", v: "Years of experience" },
              { icon: ShieldCheck, k: "12+", v: "In-house team" },
              { icon: Award, k: "188+", v: "Clients served" },
              { icon: Sparkles, k: "31+", v: "Student clubs" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-surface-2 p-5">
                <s.icon className="h-5 w-5 text-secondary-dark" />
                <div className="mt-3 font-display text-3xl font-bold text-gradient-brand">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
            Why choose us
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Why DigyUdaan must be your <span className="text-gradient-gold">growth partner</span>.
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <motion.div key={w.title} variants={staggerItem}>
              <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-2">
                <div className="idx-num mb-4 text-sm">0{i + 1}/</div>
                <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Services: numbered editorial list ---------------- */
export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? SERVICES.slice(0, 6) : SERVICES;
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
              Services
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Every capability your brand needs,{" "}
              <span className="text-gradient-brand">under one roof</span>.
            </h2>
          </div>
          {compact ? (
            <MagneticButton href="/services" variant="outline">
              Browse all services
            </MagneticButton>
          ) : (
            <p className="max-w-md text-sm text-muted-foreground">
              From brand identity to full-funnel performance: one integrated team, one shared
              north star: your revenue.
            </p>
          )}
        </Reveal>

        <div className="row-list">
          {items.map((s, i) => (
            <motion.div
              key={s.slug}
              id={s.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
            >
              <Link
                to={s.path ?? "/contact"}
                className="row-item row-item-hover group grid grid-cols-[56px_1fr_auto] items-center gap-4 py-7 sm:grid-cols-[70px_1fr_1.3fr_40px]"
              >
                <div className="idx-num text-sm">{String(i + 1).padStart(2, "0")}/</div>
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">
                  {s.description}
                </p>
                <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary-dark sm:block sm:justify-self-end" />
              </Link>
            </motion.div>
          ))}
        </div>

        {compact && (
          <div className="mt-10 text-center sm:hidden">
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
            The 6-D Process
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            How we take you from <span className="text-gradient-brand">zero to scale</span>.
          </h2>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <motion.div key={p.n} variants={staggerItem}>
              <div className="h-full rounded-2xl border border-border p-7">
                <div className="idx-num text-sm">{p.n}/</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative bg-surface-2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
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
              className="relative rounded-3xl border border-border bg-surface p-10 md:p-14"
            >
              <Quote className="h-10 w-10 text-secondary-dark" />
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
                <div className="ml-auto flex text-secondary-dark">
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
                  k === i ? "w-10 bg-secondary-dark" : "w-4 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case Studies: numbered work list ---------------- */
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
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
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

        <div className="row-list">
          {cases.map((c, i) => (
            <motion.div
              key={c.brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="row-item grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[50px_1fr_auto]"
            >
              <div className="idx-num text-sm">0{i + 1}/</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{c.brand}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <MetricPill label="Before" value={c.before} muted />
                  <MetricPill label="After" value={c.after} />
                  <MetricPill label={c.metricLabel} value={c.metric} accent />
                </div>
              </div>
              <Link
                to="/success-story"
                className="inline-flex items-center gap-1 whitespace-nowrap border-b border-secondary pb-0.5 text-sm font-semibold sm:justify-self-end"
              >
                See full project →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricPill({
  label,
  value,
  muted,
  accent,
}: {
  label: string;
  value: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs ${
        accent ? "bg-secondary/10" : "bg-surface-2"
      }`}
    >
      <span className="uppercase tracking-widest text-muted-foreground">{label}</span>
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Questions, <span className="text-gradient-brand">answered</span>.
          </h2>
        </Reveal>

        <div className="row-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="row-item"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary-dark transition-transform duration-300 ${
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
                      <div className="pb-5 text-sm leading-relaxed text-muted-foreground">
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

/* ---------------- Contact CTA: dark banded panel ---------------- */
export function ContactCTA() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="dark-panel rounded-[28px] p-10 text-center md:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-light">
              Ready to fly?
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Let's take your brand from{" "}
              <span className="text-secondary-light">0 to 100+ orders</span> in 30 days.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-background/70">
              Only 10 client seats per month. Book your free marketing audit and see if we're a
              fit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton href={SITE.whatsapp} variant="gold" size="lg">
                Free Marketing Audit
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline-dark" size="lg">
                Talk to us
              </MagneticButton>
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-dark">
            Industries we scale
          </p>
        </Reveal>
        <Stagger className="flex flex-wrap justify-center gap-2">
          {inds.map((i) => (
            <motion.span
              key={i}
              variants={staggerItem}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium"
            >
              {i}
            </motion.span>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
