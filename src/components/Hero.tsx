import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "./HeroVisual";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <motion.div
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Baltic Influence × Performance Marketing
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-gradient"
            >
              Precision Influence
              <br />
              for the <span className="text-gradient-primary">Baltic Market.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              We bridge the gap between creative UGC and hard metrics. Scalable influencer
              campaigns in Lithuania driven by data, not just followers.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#book">
                  Get Media Kit <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outlineGlow" size="xl" asChild>
                <a href="#book">Book Strategy Call</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
