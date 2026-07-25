import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  /** Kept for backwards compatibility with existing call sites; no longer used. */
  tilt?: boolean;
  glow?: "primary" | "gold" | "none";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:bg-surface-2",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
