import { Wrench, Droplets, ShowerHead, Building2, PipetteIcon, ThermometerSun, CircleDot, Waves, ArrowDownToLine } from "lucide-react";
import serviceBiodigester from "@/assets/service-biodigester.jpg";
import servicePump from "@/assets/service-pump.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";
import serviceLeak from "@/assets/service-leak.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import servicePipes from "@/assets/service-pipes.jpg";
import serviceHeating from "@/assets/service-heating.jpg";

const services = [
  { icon: CircleDot, title: "Biodigester Installation & Maintenance", desc: "Professional biodigester septic system installation, servicing, and maintenance for residential and commercial properties.", image: serviceBiodigester },
  { icon: Waves, title: "Pump Installation & Maintenance", desc: "Water pump installation, repair, and routine maintenance for boreholes, tanks, and pressure systems.", image: servicePump },
  { icon: ArrowDownToLine, title: "Drainage & Gutter Installation", desc: "Complete drainage systems and gutter installation to protect your property from water damage.", image: serviceDrainage },
  { icon: Wrench, title: "Emergency Repairs", desc: "24/7 rapid response for burst pipes, leaks, and blocked drains across Nairobi.", image: serviceEmergency },
  { icon: Droplets, title: "Leak Detection", desc: "Advanced detection methods to find and fix hidden leaks before costly damage.", image: serviceLeak },
  { icon: ShowerHead, title: "Bathroom & Kitchen", desc: "Complete installation and renovation of bathrooms, kitchens, and wet rooms.", image: serviceBathroom },
  { icon: Building2, title: "Commercial Plumbing", desc: "Full-scale plumbing for offices, apartments, hotels, and construction projects.", image: serviceCommercial },
  { icon: PipetteIcon, title: "Pipe Installation", desc: "New piping systems, replacements, and upgrades using quality materials.", image: servicePipes },
  { icon: ThermometerSun, title: "Water Heating", desc: "Solar and electric water heater installation, repair, and maintenance.", image: serviceHeating },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Plumbing Services</h2>
        <p className="text-muted-foreground mt-4">Professional solutions for every water and drainage challenge — residential or commercial.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative rounded-xl overflow-hidden h-64 border border-border hover:shadow-xl transition-all duration-300"
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-navy-foreground mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {s.title}
              </h3>
              <p className="text-sm text-navy-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
