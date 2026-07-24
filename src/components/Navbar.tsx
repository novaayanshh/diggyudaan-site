import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [path]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all",
          scrolled && "pt-3",
        )}
      >
        <nav
          className={cn(
            "flex w-full max-w-7xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
            "glass",
            scrolled && "glass-strong shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]",
          )}
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center px-2 py-1" aria-label="DigyUdaan home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              if (item.label === "Services") {
                return (
                  <li
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.to}
                      className={cn(
  "flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-semibold tracking-tight text-black/85 transition-all duration-300 hover:text-black",
  path.startsWith("/services") && "text-black",
)}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="absolute left-1/2 top-full z-50 mt-3 w-[720px] -translate-x-1/2"
                        >
                          <div className="glass-strong rounded-3xl p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                            <div className="grid grid-cols-2 gap-1">
                              {SERVICES.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  to="/services"
                                  hash={svc.slug}
                                  className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5"
                                >
                                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary/25 group-hover:rotate-6 group-hover:scale-110">
                                    <svc.icon className="h-5 w-5" />
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                                      {svc.title}
                                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                    </span>
                                    <span className="block text-xs text-muted-foreground line-clamp-1">
                                      {svc.short}
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 flex items-center justify-between rounded-2xl bg-primary/10 px-4 py-3">
                              <div>
                                <p className="text-sm font-semibold">Not sure where to start?</p>
                                <p className="text-xs text-muted-foreground">
                                  Get a free marketing audit, no strings.
                                </p>
                              </div>
                              <MagneticButton href={SITE.whatsapp} variant="gold" size="sm">
                                Free Audit
                              </MagneticButton>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              const active = path === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
  "relative rounded-full px-5 py-2.5 text-[15px] font-semibold tracking-tight transition-all duration-300",
  active
    ? "text-black"
    : "text-black/85 hover:text-black",
)}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-black/5"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href={SITE.whatsapp} variant="gold" size="sm">
              Free Marketing Audit
            </MagneticButton>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full glass lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28">
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block rounded-2xl glass px-5 py-4 text-lg font-semibold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-3xl glass p-5">
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  Services
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services"
                      hash={s.slug}
                      className="flex items-center gap-2 rounded-xl bg-white/5 p-2 text-xs"
                    >
                      <s.icon className="h-4 w-4 text-primary" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <MagneticButton href={SITE.whatsapp} variant="gold" className="w-full">
                  Get Free Marketing Audit
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}