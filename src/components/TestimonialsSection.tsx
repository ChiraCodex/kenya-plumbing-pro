import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Grace Muthoni",
    role: "Homeowner, Nairobi",
    text: "AquaFlow fixed a major leak in our kitchen within hours of calling. Very professional team and fair pricing. Highly recommend!",
  },
  {
    name: "James Ochieng",
    role: "Property Manager",
    text: "We've used AquaFlow for all our apartment buildings. They're reliable, on time, and their work is always top quality.",
  },
  {
    name: "Sarah Wanjiku",
    role: "Business Owner, Westlands",
    text: "They installed a full plumbing system for our new restaurant. The project was done on budget and ahead of schedule. Excellent service.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Clients Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="font-semibold text-card-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
