import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-20%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-16"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/40 blur-[140px]"
        aria-hidden
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -right-32 top-40 h-[480px] w-[480px] rounded-full bg-secondary/30 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="text-muted-foreground">
              SEO • Performance Marketing • Branding • Web Development • Creative Solutions
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-secondary sm:text-base"
          >
            {SITE.tagline}
          </motion.p>

          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]">
            {"Transform Your".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mr-3 inline-block"
            >
              Brand.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="inline-block text-gradient-brand"
            >
              Accelerate Growth.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We Design, Build, and Propel Brands to Reach New Heights of Success. From SEO
            and Performance Marketing to Creative Branding, Web Development, AI Marketing,
            and Video Production, we help ambitious businesses{" "}
            <span className="text-foreground font-medium">generate more leads</span>,{" "}
            <span className="text-secondary font-semibold">increase conversions</span>, and
            achieve sustainable growth with data-driven digital strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={SITE.whatsapp} variant="gold" size="lg">
              Get Started Today
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline" size="lg" showArrow={false}>
              Talk to Our Experts <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"
          >
            {[
              { value: "250+", label: "Projects Delivered" },
              { value: "120+", label: "Happy Clients" },
              { value: "8+", label: "Digital Services" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-gradient-brand sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground/80"
          >
            Trusted by startups, local businesses, D2C brands, and growing enterprises across
            India to deliver measurable business growth through creative marketing and
            technology.
          </motion.p>
        </div>

        {/* Right visual */}
        <div className="relative h-[520px]">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-max flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-[2px] bg-gradient-to-b from-secondary to-transparent"
        />
      </motion.div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full w-full">
      {/* Central orb */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="animate-slow-spin absolute inset-0 rounded-full border border-primary/30" />
        <div
          className="animate-slow-spin absolute inset-4 rounded-full border border-secondary/30"
          style={{ animationDirection: "reverse", animationDuration: "28s" }}
        />
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary/30 via-primary-light/20 to-secondary/30 blur-2xl" />
        <div className="absolute inset-16 flex items-center justify-center rounded-full glass-strong">
          <div className="text-center">
            <div className="text-gradient-gold font-display text-3xl font-bold">DigyUdaan</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Let's Fly Together
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <FloatCard
        className="left-0 top-6"
        delay={0.6}
        icon={<TrendingUp className="h-4 w-4" />}
        title="Projects"
        value="250+"
        accent="primary"
      />
      <FloatCard
        className="right-0 top-24"
        delay={0.8}
        icon={<Users className="h-4 w-4" />}
        title="Happy Clients"
        value="120+"
        accent="gold"
      />
      <FloatCard
        className="right-4 bottom-16"
        delay={1.0}
        icon={<Zap className="h-4 w-4" />}
        title="Services"
        value="8+"
        accent="primary"
      />
      <FloatCard
        className="left-2 bottom-6"
        delay={1.2}
        icon={<Sparkles className="h-4 w-4" />}
        title="Satisfaction"
        value="98%"
        accent="gold"
      />
    </div>
  );
}

function FloatCard({
  className,
  delay,
  icon,
  title,
  value,
  accent,
}: {
  className: string;
  delay: number;
  icon: React.ReactNode;
  title: string;
  value: string;
  accent: "primary" | "gold";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7 }}
      className={`absolute ${className} animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-strong rounded-2xl px-4 py-3 min-w-[140px]">
        <div className="flex items-center gap-2">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-lg ${
              accent === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
            }`}
          >
            {icon}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {title}
          </span>
        </div>
        <div
          className={`mt-1.5 font-display text-2xl font-bold ${
            accent === "primary" ? "text-gradient-blue" : "text-gradient-gold"
          }`}
        >
          {value}
        </div>
      </div>
    </motion.div>
  );
}