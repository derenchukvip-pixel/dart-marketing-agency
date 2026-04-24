import { motion } from "framer-motion";
import { User } from "lucide-react";

const creators = [
  { id: "Creator_01", category: "Tech", reach: "45k" },
  { id: "Creator_02", category: "Lifestyle", reach: "78k" },
  { id: "Creator_03", category: "Beauty", reach: "112k" },
  { id: "Creator_04", category: "Fitness", reach: "62k" },
  { id: "Creator_05", category: "Food", reach: "38k" },
  { id: "Creator_06", category: "Travel", reach: "94k" },
  { id: "Creator_07", category: "Finance", reach: "27k" },
  { id: "Creator_08", category: "Gaming", reach: "156k" },
];

export function Creators() {
  return (
    <section id="creators" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-primary">The Roster</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
              Vetted creators.
              <br />
              Anonymous until matched.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            We protect our roster. Full creator IDs unlock after a strategy call and signed brief.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {creators.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-accent to-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <User className="h-10 w-10 text-muted-foreground/40 relative" strokeWidth={1.5} />
                <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-background/60 backdrop-blur border border-border">
                  {c.category}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-mono text-muted-foreground">ID: {c.id}</div>
                <div className="text-sm font-semibold text-primary">{c.reach}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
