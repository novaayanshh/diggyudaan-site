import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X, MessageSquare, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string; typing?: boolean };

const CAPABILITIES = [
  { icon: Wand2, label: "Website Audit" },
  { icon: Sparkles, label: "SEO Audit" },
  { icon: Bot, label: "Marketing Strategy" },
  { icon: MessageSquare, label: "ROI Calculator" },
];

const CANNED: Record<string, string> = {
  audit:
    "I can run a **free website audit** covering conversion friction, page speed, on-page SEO and ad readiness. Share your URL and I'll draft findings in ~60 seconds.",
  seo:
    "For SEO I look at technical health, content clusters, backlinks and intent gaps. Want a **quick SEO diagnosis**? Paste your domain.",
  strategy:
    "For D2C growth I run our 6-D framework: **Discover → Define → Design → Develop → Deploy → Deliver**. Tell me your brand, price point and current MRR and I'll draft a 90-day plan.",
  roi:
    "Give me your average order value, current monthly ad spend, ROAS and gross margin, and I'll model a 90-day scale projection right here.",
  default:
    "I'm the DigyUdaan AI Assistant. I can audit sites, plan campaigns, calculate ROI and draft proposals. Ask me anything, or book a **free marketing audit** and a human takes over.",
};

function pickReply(q: string) {
  const s = q.toLowerCase();
  if (s.includes("seo")) return CANNED.seo;
  if (s.includes("audit") || s.includes("website")) return CANNED.audit;
  if (s.includes("strategy") || s.includes("plan") || s.includes("d2c")) return CANNED.strategy;
  if (s.includes("roi") || s.includes("roas") || s.includes("spend")) return CANNED.roi;
  return CANNED.default;
}

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey, I'm the **DigyUdaan AI Assistant**. Ask me for a website audit, SEO check, growth strategy, or ROI projection.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "", typing: true }]);

    const reply = pickReply(text);
    // Simulate streaming
    await new Promise((r) => setTimeout(r, 350));
    let acc = "";
    for (const ch of reply) {
      acc += ch;
      await new Promise((r) => setTimeout(r, 12));
      setMsgs((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", content: acc, typing: true };
        return copy;
      });
    }
    setMsgs((prev) => {
      const copy = [...prev];
      copy[copy.length - 1] = { role: "assistant", content: acc };
      return copy;
    });
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary-light to-secondary text-primary-foreground shadow-[0_20px_60px_-15px_color-mix(in_oklab,var(--primary)_70%,transparent)]",
        )}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </motion.span>
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" aria-hidden />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 flex h-[560px] w-[min(92vw,400px)] flex-col overflow-hidden rounded-3xl glass-strong shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="relative flex items-center gap-3 border-b border-white/10 bg-gradient-to-br from-primary/25 to-secondary/15 p-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <Bot className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">DigyUdaan AI Assistant</p>
                <p className="text-xs text-muted-foreground">Online • replies in seconds</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-gradient-to-br from-primary to-primary-light text-primary-foreground"
                        : "bg-white/8 text-foreground",
                    )}
                    dangerouslySetInnerHTML={{
                      __html: m.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                </motion.div>
              ))}
              {msgs.length <= 1 && (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {CAPABILITIES.map((c) => (
                    <button
                      key={c.label}
                      onClick={() => send(c.label)}
                      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs transition hover:border-primary/60 hover:bg-primary/10"
                    >
                      <c.icon className="h-4 w-4 text-secondary transition-transform group-hover:rotate-6" />
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-white/5 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about audits, ROI, strategy…"
                className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:bg-white/10"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}