import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-navy">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      </div>

      <div className="container relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold tracking-wide">
            Trusted Across Kenya
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-foreground leading-tight text-balance">
            Expert Plumbing Solutions You Can{" "}
            <span className="text-primary-foreground/90">Rely On</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-foreground/80 max-w-xl">
            From emergency repairs to biodigester installations, King David Plumbing delivers fast, professional services for homes and businesses across Nairobi and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8"
            >
              Request a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a href="tel:+254700123456">
              <Button
                size="lg"
                variant="outline"
                className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10 font-semibold text-base px-8"
              >
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
