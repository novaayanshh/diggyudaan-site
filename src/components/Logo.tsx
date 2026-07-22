import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/logo.png"
        alt="DigyUdaan Media House - Let's Fly Together"
        className="h-14 w-auto md:h-16 lg:h-20 object-contain"
      />
    </motion.div>
  );
}