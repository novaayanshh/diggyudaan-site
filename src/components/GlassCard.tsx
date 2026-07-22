import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { type ReactNode, useRef, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  tilt = true,
  glow = "primary",
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: "primary" | "gold" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 15 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !tilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass p-6 transition-shadow duration-500",
        glow === "primary" &&
          "hover:shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_55%,transparent)]",
        glow === "gold" &&
          "hover:shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--secondary)_60%,transparent)]",
        className,
      )}
    >
      {/* gradient border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab,var(--primary) 40%,transparent), color-mix(in oklab,var(--secondary) 40%,transparent))",
          padding: 1,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* glow blob */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
