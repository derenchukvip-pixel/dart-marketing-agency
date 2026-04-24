import { Target, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
            <Target className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold tracking-tight">DART</span>
          <span className="text-xs text-muted-foreground ml-3">© {new Date().getFullYear()} Dart Marketing Agency</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#creators" className="hover:text-foreground transition-colors">Creators</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#book" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <span className="text-xs text-muted-foreground">Built by Dart Tech</span>
        </div>
      </div>
    </footer>
  );
}
