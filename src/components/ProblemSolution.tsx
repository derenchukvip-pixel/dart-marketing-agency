import { motion } from "framer-motion";
import { EyeOff, Wallet, Workflow, type LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  problem: string;
  solution: string;
  className?: string;
};

const items: Item[] = [
  {
    icon: EyeOff,
    problem: "Banner Blindness?",
    solution: "Our UGC content breaks through the noise with native, creator-first storytelling.",
    className: "md:col-span-2",
  },
  {
    icon: Wallet,
    problem: "Wasted Budget?",
    solution: "Data-driven creator selection ensures every euro pulls measurable ROI.",
  },
  {
    icon: Workflow,
    problem: "Management Headache?",
    solution: "One point of contact. Full-cycle execution from brief to reporting.",
    className: "md:col-span-3",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-widest text-primary">Why Dart</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Built to fix the broken
            <br />
            influencer playbook.
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.problem}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`glass rounded-3xl p-8 group relative overflow-hidden ${it.className ?? ""}`}
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{it.problem}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{it.solution}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
