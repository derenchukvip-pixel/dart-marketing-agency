import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import heytolani from "@/assets/creators/heytolani.jpg";
import curly from "@/assets/creators/curly.jpg";
import artem from "@/assets/creators/artem.jpg";
import paprasta from "@/assets/creators/paprasta.jpg";
import darina from "@/assets/creators/darina.jpg";
import valerie from "@/assets/creators/valerie.jpg";

const creators = [
  { handle: "heytolani", category: "Beauty / Fashion", reach: "108k", img: heytolani },
  { handle: "curly.and.lithuania", category: "Lifestyle", reach: "75k", img: curly },
  { handle: "artem.derenchuk", category: "Street content", reach: "36k", img: artem },
  { handle: "paprasta_gaminti", category: "Food", reach: "48k", img: paprasta },
  { handle: "darina_provilnius", category: "Reviews", reach: "16k", img: darina },
  { handle: "valerie.leriee", category: "Beauty / Fashion", reach: "33k", img: valerie },
];

export function Creators() {
  return (
    <section id="creators" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-primary">The Roster</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
              Vetted Baltic creators.
              <br />
              Real audiences. Real engagement.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            A curated selection from our roster — each creator is briefed, contracted, and tracked end-to-end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {creators.map((c, i) => (
            <motion.a
              key={c.handle}
              href={`https://www.instagram.com/${c.handle}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 group block"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-accent to-card relative overflow-hidden">
                <img
                  src={c.img}
                  alt={`@${c.handle}`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-background/70 backdrop-blur border border-border">
                  {c.category}
                </div>
                <div className="absolute top-3 right-3 h-7 w-7 grid place-items-center rounded-full bg-background/70 backdrop-blur border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="h-3.5 w-3.5 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-mono text-muted-foreground truncate">@{c.handle}</div>
                <div className="text-sm font-semibold text-primary shrink-0 ml-2">{c.reach}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
