import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "gold" | "ghost" | "outline";

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  showArrow = true,
  size = "md",
  type = "button",
  disabled,
  target,
  rel,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  }[size];

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:shadow-[0_18px_60px_-15px_color-mix(in_oklab,var(--primary)_80%,transparent)]",
    gold: "bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--secondary)_60%,transparent)] hover:shadow-[0_18px_60px_-15px_color-mix(in_oklab,var(--secondary)_80%,transparent)]",
    outline:
      "bg-transparent text-foreground border border-white/15 hover:border-primary/60 hover:bg-primary/5",
    ghost: "bg-white/5 text-foreground hover:bg-white/10 border border-white/10",
  };

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap font-medium">
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </span>
  );

  const cls = cn(
    "group relative inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none overflow-hidden",
    sizes,
    variants[variant],
    className,
  );

  const sheen = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
    />
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        whileTap={{ scale: 0.96 }}
        className={cls}
      >
        {sheen}
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className={cls}
    >
      {sheen}
      {inner}
    </motion.button>
  );
}
