import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Request a Free Quote</h2>
        <p className="text-muted-foreground mt-4">Describe your plumbing needs and we'll get back to you within the hour.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Your Name" className="bg-card" />
            <Input placeholder="Phone Number" type="tel" className="bg-card" />
          </div>
          <Input placeholder="Email Address" type="email" className="bg-card" />
          <Textarea placeholder="Describe your plumbing issue or project..." rows={5} className="bg-card resize-none" />
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base">
            Send Message
          </Button>
        </form>

        <div className="space-y-6">
          {[
            { icon: Phone, label: "Call Us", value: "+254 700 123 456", href: "tel:+254700123456" },
            { icon: Mail, label: "Email Us", value: "info@kingdavidplumbing.co.ke", href: "mailto:info@kingdavidplumbing.co.ke" },
            { icon: MapPin, label: "Location", value: "Westlands, Nairobi, Kenya" },
            { icon: Clock, label: "Working Hours", value: "Mon – Sat: 7AM – 7PM\nEmergencies: 24/7" },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
