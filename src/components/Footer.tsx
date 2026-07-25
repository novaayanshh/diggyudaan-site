import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Facebook, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative mt-20 border-t border-border pt-16">
      {/* Newsletter */}
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dark-panel relative -mt-28 mb-16 rounded-[28px] p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-light">
                Newsletter
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Growth playbooks, delivered monthly.
              </h3>
              <p className="mt-2 text-sm text-background/70">
                Real D2C teardowns, ad frameworks and case studies. No fluff.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setSubscribed(true);
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="nl-email">Email address</label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brand.com"
                className="flex-1 rounded-full border border-background/25 bg-background/10 px-5 py-3 text-sm text-background outline-none transition placeholder:text-background/50 focus:border-secondary/70 focus:bg-background/15"
              />
              <MagneticButton type="submit" variant="gold">
                {subscribed ? "Subscribed" : "Subscribe"}
              </MagneticButton>
            </form>
          </div>
        </motion.div>

        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Your D2C growth partner: from brand strategy to performance marketing, everything
              under one roof. Let's Fly Together.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3 text-foreground/80 hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone[0].replace(/\s/g, "")}`} className="group flex items-center gap-3 text-foreground/80 hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                {SITE.phone.join("  •  ")}
              </a>
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                {SITE.address}
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/digyudaan_media" },
                { Icon: Facebook, href: "https://www.facebook.com/digyudaan" },
                { Icon: Twitter, href: "https://x.com/digyudaan" },
                { Icon: Youtube, href: "https://www.youtube.com/@DigyUdaan-n9z" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/digy-udaan-media/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary/10 hover:text-secondary-dark"
                  aria-label={href}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={NAV.map((n) => ({ label: n.label, to: n.to }))} />
          <FooterCol
            title="Services"
            links={SERVICES.slice(0, 8).map((s) => ({ label: s.title, to: "/services", hash: s.slug }))}
          />
          <FooterCol
            title="Resources"
            links={[
              { label: "Case Studies", to: "/success-story" },
              { label: "Free Marketing Audit", href: SITE.whatsapp },
              { label: "Privacy Policy", to: "/" },
              { label: "Terms of Service", to: "/" },
            ]}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} DigyUdaan Media House. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Crafted with intent
            <span className="text-secondary-dark">•</span>
            Let's Fly Together
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to?: string; hash?: string; href?: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary-dark">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            {l.href ? (
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            ) : (
              <Link
                to={l.to!}
                hash={l.hash}
                className="group inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
