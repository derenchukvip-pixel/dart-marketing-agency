import { motion } from "framer-motion";

const stats = [
  { value: "300,000+", label: "Combined Monthly Reach" },
  { value: "20+", label: "Vetted Baltic Creators" },
  { value: "8%", label: "Avg. Engagement Rate" },
  { value: "100%", label: "Legal & Tax Compliant (LT)" },
];

export function Stats() {
  return (
    <section className="relative py-12 border-y border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:border-r last:border-r-0 border-border/50"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
