import { motion } from "framer-motion";

/**
 * Full-width promotional banner image.
 *
 * To change the image, replace the file at:
 *   public/digital-marketing-banner.png
 * (keep the same filename, or update the `src` below to match your new filename)
 */
export function PromoBanner() {
  return (
    <section className="relative w-full py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-foreground/10"
        >
        </motion.div>
      </div>
    </section>
  );
}