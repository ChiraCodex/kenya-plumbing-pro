import { Wrench, Droplets, ShowerHead, Building2, PipetteIcon, ThermometerSun } from "lucide-react";

const services = [
  { icon: Wrench, title: "Emergency Repairs", desc: "24/7 rapid response for burst pipes, leaks, and blocked drains across Nairobi." },
  { icon: Droplets, title: "Leak Detection", desc: "Advanced detection methods to find and fix hidden leaks before costly damage." },
  { icon: ShowerHead, title: "Bathroom & Kitchen", desc: "Complete installation and renovation of bathrooms, kitchens, and wet rooms." },
  { icon: Building2, title: "Commercial Plumbing", desc: "Full-scale plumbing for offices, apartments, hotels, and construction projects." },
  { icon: PipetteIcon, title: "Pipe Installation", desc: "New piping systems, replacements, and upgrades using quality materials." },
  { icon: ThermometerSun, title: "Water Heating", desc: "Solar and electric water heater installation, repair, and maintenance." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Plumbing Services</h2>
        <p className="text-muted-foreground mt-4">Professional solutions for every water and drainage challenge — residential or commercial.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
