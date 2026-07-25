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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "sticky inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-shadow",
          scrolled && "shadow-[0_1px_0_var(--border)]",
        )}
      >
        <nav
          className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6"
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center" aria-label="DigyUdaan home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
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
                        "flex items-center gap-1.5 text-[14.5px] font-medium text-black/80 transition-opacity hover:text-black hover:opacity-100",
                        path.startsWith("/services") && "text-black",
                      )}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 top-full z-50 mt-4 w-[720px] -translate-x-1/2"
                        >
                          <div className="glass rounded-2xl p-4 shadow-[0_20px_60px_-20px_rgba(18,32,63,0.18)]">
                            <div className="grid grid-cols-2 gap-1">
                              {SERVICES.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  to="/services"
                                  hash={svc.slug}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-2"
                                >
                                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
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
                            <div className="mt-3 flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3">
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
                      "text-[14.5px] font-medium transition-opacity",
                      active ? "text-black" : "text-black/80 hover:text-black",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href={SITE.whatsapp} variant="gold" size="sm" showArrow={false}>
              Get in touch
            </MagneticButton>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-black lg:hidden"
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
            className="glass-strong fixed inset-0 z-40 lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28">
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block rounded-xl border border-border bg-surface px-5 py-4 text-lg font-semibold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  Services
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services"
                      hash={s.slug}
                      className="flex items-center gap-2 rounded-lg bg-surface-2 p-2 text-xs"
                    >
                      <s.icon className="h-4 w-4 text-secondary-dark" />
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