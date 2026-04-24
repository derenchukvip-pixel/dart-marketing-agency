import { motion } from "framer-motion";
import { Target, TrendingUp, Activity } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-[520px] mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-primary/20 blur-3xl opacity-40" aria-hidden />

      {/* Main panel */}
      <div className="relative glass rounded-[2rem] p-6 h-full overflow-hidden">
        {/* Top metric row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Live Campaign · LT
          </div>
          <div className="text-xs font-mono text-muted-foreground">DART/01</div>
        </div>

        {/* Big metric */}
        <div className="mt-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Engagement Rate
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <div className="text-6xl font-bold font-display text-gradient-primary">8.5%</div>
            <div className="flex items-center gap-1 text-primary text-sm">
              <TrendingUp className="h-4 w-4" /> +212%
            </div>
          </div>
        </div>

        {/* Sparkline / bars */}
        <div className="mt-8 flex items-end gap-1.5 h-32">
          {[28, 42, 36, 58, 48, 72, 64, 88, 76, 96, 82, 100].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary"
            />
          ))}
        </div>

        {/* Bottom mini-cards */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Target className="h-3.5 w-3.5 text-primary" /> Reach
            </div>
            <div className="mt-1 font-display font-semibold">312,480</div>
          </div>
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Activity className="h-3.5 w-3.5 text-primary" /> CTR
            </div>
            <div className="mt-1 font-display font-semibold">4.2%</div>
          </div>
        </div>
      </div>

      {/* Floating dart icon */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="absolute -top-4 -right-4 glass rounded-2xl p-4 glow-ring"
      >
        <Target className="h-6 w-6 text-primary" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}
