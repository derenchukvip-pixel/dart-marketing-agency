import { motion } from "framer-motion";
import { Search, Lightbulb, Film, Megaphone, BarChart3, type LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; title: string; desc: string };

const steps: Step[] = [
  { icon: Search, title: "Discovery", desc: "Audit your brand, audience, and objectives." },
  { icon: Lightbulb, title: "Strategy", desc: "Match creators and channels to your KPIs." },
  { icon: Film, title: "Content Creation", desc: "Brief, produce and review on-brand UGC." },
  { icon: Megaphone, title: "Amplification", desc: "Organic launch + paid scale on Meta & TikTok." },
  { icon: BarChart3, title: "Detailed Reporting", desc: "Transparent dashboards with iteration notes." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-widest text-primary">Process</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Five steps from
            <br />
            brief to bullseye.
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <ol className="space-y-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="h-3 w-3 rounded-full bg-primary glow-ring" />
                  </div>

                  <div className={`pl-14 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div className="glass rounded-2xl p-6 inline-block text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-xs font-mono text-muted-foreground">
                          STEP {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
