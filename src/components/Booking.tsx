import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Booking() {
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass rounded-[2.5rem] overflow-hidden p-10 md:p-16"
        >
          <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary">Book a Call</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
                Ready to hit the
                <br />
                <span className="text-gradient-primary">bullseye?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Schedule a 15-min discovery call to unlock our full roster, case studies, and
                pricing tiers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://calendly.com/derenchuk-vip" target="_blank" rel="noopener noreferrer">
                    Book Discovery Call <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outlineGlow" size="xl" asChild>
                  <a href="mailto:derenchuk.vip@gmail.com">Email Us</a>
                </Button>
              </div>
              <a
                href="mailto:derenchuk.vip@gmail.com"
                className="mt-4 inline-block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                derenchuk.vip@gmail.com
              </a>
            </div>

            {/* Calendly embed */}
            <div className="glass rounded-2xl p-3 border border-border overflow-hidden">
              <div className="flex items-center gap-3 px-3 pt-2 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">15-min Discovery</div>
                  <div className="text-xs text-muted-foreground">Live Calendly · Vilnius (EET)</div>
                </div>
              </div>
              <iframe
                src="https://calendly.com/derenchuk-vip?hide_gdpr_banner=1&background_color=1a1f2e&text_color=f5f7fa&primary_color=4ade80"
                title="Book a call with Dart Marketing"
                className="w-full rounded-xl bg-background"
                style={{ height: 520, border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
