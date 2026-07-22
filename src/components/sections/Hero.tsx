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
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="text-muted-foreground">
              Over <span className="text-foreground font-semibold">300+ founders</span> served in 5 years
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]">
            {"Your D2C".split(" ").map((w, i) => (
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
              transition={{ delay: 0.35, duration: 0.8 }}
              className="inline-block text-gradient-brand"
            >
              Growth Partner.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We help first-generation founders go from{" "}
            <span className="text-foreground font-medium">zero sales</span> to{" "}
            <span className="text-secondary font-semibold">100+ orders in 30 days</span> — brand
            strategy to performance marketing, all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={SITE.whatsapp} variant="gold" size="lg">
              Get FREE Marketing Audit
            </MagneticButton>
            <MagneticButton href="/services" variant="outline" size="lg" showArrow={false}>
              Explore Services <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg, var(--primary), var(--primary-light))"
                          : "linear-gradient(135deg, var(--secondary), var(--secondary-light))",
                    }}
                  />
                ))}
              </div>
              <span>
                <span className="text-foreground font-semibold">188+</span> founders trust us
              </span>
            </div>
            <div className="h-4 w-px bg-foreground/15" />
            <div className="flex items-center gap-1.5">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-secondary">
                  {s}
                </span>
              ))}
              <span className="ml-1">4.9 rating</span>
            </div>
          </motion.div>
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
            <div className="text-gradient-gold font-display text-5xl font-bold">100+</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Orders / 30 days
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <FloatCard
        className="left-0 top-6"
        delay={0.6}
        icon={<TrendingUp className="h-4 w-4" />}
        title="ROAS"
        value="4.8x"
        accent="primary"
      />
      <FloatCard
        className="right-0 top-24"
        delay={0.8}
        icon={<Zap className="h-4 w-4" />}
        title="Conv. Rate"
        value="3.4%"
        accent="gold"
      />
      <FloatCard
        className="right-4 bottom-16"
        delay={1.0}
        icon={<Users className="h-4 w-4" />}
        title="Founders"
        value="300+"
        accent="primary"
      />
      <FloatCard
        className="left-2 bottom-6"
        delay={1.2}
        icon={<Sparkles className="h-4 w-4" />}
        title="In-House"
        value="100%"
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