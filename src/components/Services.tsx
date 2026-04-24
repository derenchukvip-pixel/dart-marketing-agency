import { motion } from "framer-motion";
import { Zap, Film, Rocket, Check, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tier = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    icon: Zap,
    name: "Influence Start",
    tagline: "Story-sets and brand mentions for immediate reach.",
    features: ["Creator matching", "Story + reel placements", "Basic reporting"],
  },
  {
    icon: Film,
    name: "UGC Production",
    tagline: "High-quality video assets with full usage rights for your ads.",
    features: ["Scripted UGC videos", "Full commercial rights", "Multi-format delivery"],
    highlight: true,
  },
  {
    icon: Rocket,
    name: "Performance Scale",
    tagline: "The ultimate combo: Influencers + Meta/TikTok paid ads management.",
    features: ["Influencer + paid hybrid", "Meta & TikTok ad ops", "Weekly performance dashboards"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-widest text-primary">Services</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Three tiers. One bullseye.
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`glass rounded-3xl p-8 flex flex-col relative overflow-hidden ${
                  t.highlight ? "border-primary/40 glow-ring" : ""
                }`}
              >
                {t.highlight && (
                  <div className="absolute top-5 right-5 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-muted-foreground">{t.tagline}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={t.highlight ? "hero" : "outlineGlow"}
                  size="lg"
                  className="mt-8 w-full"
                  asChild
                >
                  <a href="#book">Get Started</a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
