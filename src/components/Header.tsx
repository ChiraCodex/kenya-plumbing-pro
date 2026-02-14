import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["Services", "About", "Testimonials", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>A</span>
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            AquaFlow<span className="text-primary"> Plumbing</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+254700123456" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            +254 700 123 456
          </a>
          <Button onClick={() => scrollTo("contact")} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full text-left py-2 text-foreground font-medium"
            >
              {item}
            </button>
          ))}
          <a href="tel:+254700123456" className="flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            +254 700 123 456
          </a>
          <Button onClick={() => scrollTo("contact")} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
