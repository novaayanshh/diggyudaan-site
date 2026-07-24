import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE } from "@/lib/site";
import { submitContactForm } from "@/lib/contact-server";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | DigyUdaan Media House" },
      {
        name: "description",
        content:
          "Contact DigyUdaan Media House. Free marketing audit, custom D2C growth proposals, phone, WhatsApp and Greater Noida office.",
      },
      { property: "og:title", content: "Contact DigyUdaan Media House" },
      {
        property: "og:description",
        content: "Free marketing audit. Only 10 seats per month. Let's fly together.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Contact
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Have a project in mind? <br />
              <span className="text-gradient-brand">Let's craft a tailored solution.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Get in touch: learn about our services, discuss your project, or ask any question.
              We reply within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <GlassCard tilt={false}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                  Reach us
                </p>
                <ul className="mt-4 space-y-4 text-sm">
                  <ContactRow icon={<MapPin className="h-4 w-4" />} label="Office">
                    {SITE.address}
                  </ContactRow>
                  <ContactRow icon={<Phone className="h-4 w-4" />} label="Call">
                    {SITE.phone.map((p, i) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-secondary">
                        {p}
                        {i === 0 && ", "}
                      </a>
                    ))}
                  </ContactRow>
                  <ContactRow icon={<Mail className="h-4 w-4" />} label="Email">
                    <a href={`mailto:${SITE.email}`} className="hover:text-secondary">
                      {SITE.email}
                    </a>
                  </ContactRow>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <MagneticButton href={SITE.whatsapp} variant="gold" size="sm">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </MagneticButton>
                  <MagneticButton href={`tel:${SITE.phone[0].replace(/\s/g, "")}`} variant="outline" size="sm" showArrow={false}>
                    <Phone className="h-4 w-4" /> Call now
                  </MagneticButton>
                </div>
              </GlassCard>

              <GlassCard tilt={false} className="overflow-hidden p-0">
                <iframe
                  title="DigyUdaan Office Map"
                  src="https://maps.google.com/maps?q=Gaur%20City%20Centre%20Greater%20Noida&t=m&z=14&output=embed"
                  className="h-64 w-full border-0 grayscale-[30%] contrast-110"
                  loading="lazy"
                />
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <div className="text-foreground/90">{children}</div>
      </div>
    </li>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Tell us a little more (10+ chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setState("loading");
    try {
      await submitContactForm({ data: form });
      setState("success");
    } catch (err) {
      console.error(err);
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setState("idle");
    }
  };

  return (
    <GlassCard tilt={false} className="p-8 md:p-10">
      {state === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center py-12 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold">Message received.</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            We'll get back to you within one business day. In the meantime, ping us on WhatsApp for
            an instant reply.
          </p>
          <div className="mt-6">
            <MagneticButton href={SITE.whatsapp} variant="gold">
              WhatsApp us
            </MagneticButton>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={submit} className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
            Request free consultation
          </p>
          <h3 className="font-display text-3xl font-semibold">
            Contact us and we'll give you a solution.
          </h3>

          <Field label="Name" error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              className="input"
              placeholder="Jane Founder"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className="input"
                placeholder="jane@brand.com"
              />
            </Field>
            <Field label="Contact number" error={errors.phone}>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="input"
                placeholder="+91"
              />
            </Field>
          </div>

          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                setErrors((prev) => ({ ...prev, message: "" }));
              }}
              className="input min-h-[120px] py-3"
              placeholder="Tell us about your brand, goals and current stage…"
            />
          </Field>

          {submitError && (
            <p className="text-sm text-destructive" role="alert">
              {submitError}
            </p>
          )}

          <MagneticButton
            type="submit"
            variant="gold"
            size="lg"
            disabled={state === "loading"}
            showArrow={state !== "loading"}
          >
            {state === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              "Send message"
            )}
          </MagneticButton>
        </form>
      )}
    </GlassCard>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
      <style>{`.input{width:100%;background:color-mix(in oklab,var(--surface) 40%,transparent);border:1px solid var(--border);border-radius:14px;padding:12px 16px;font-size:14px;color:var(--foreground);outline:none;transition:all .25s}.input:focus{border-color:color-mix(in oklab,var(--primary) 60%,transparent);background:color-mix(in oklab,var(--surface) 70%,transparent);box-shadow:0 0 0 4px color-mix(in oklab,var(--primary) 20%,transparent)}`}</style>
    </label>
  );
}