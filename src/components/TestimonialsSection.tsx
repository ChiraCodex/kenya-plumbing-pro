import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const defaultTestimonials = [
  {
    name: "Grace Muthoni",
    role: "Homeowner, Nairobi",
    text: "King David Plumbing fixed a major leak in our kitchen within hours of calling. Very professional team and fair pricing. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Ochieng",
    role: "Property Manager",
    text: "We've used King David for all our apartment buildings. They're reliable, on time, and their work is always top quality.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiku",
    role: "Business Owner, Westlands",
    text: "They installed a full plumbing system for our new restaurant. The project was done on budget and ahead of schedule. Excellent service.",
    rating: 5,
  },
];

const StarRating = ({ rating, onRate, interactive = false }: { rating: number; onRate?: (r: number) => void; interactive?: boolean }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-colors ${i < rating ? "fill-gold text-gold" : "text-muted-foreground/30"} ${interactive ? "cursor-pointer hover:text-gold" : ""}`}
        onClick={() => interactive && onRate?.(i + 1)}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [formName, setFormName] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formText, setFormText] = useState("");
  const [formRating, setFormRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) {
      toast({ title: "Please fill in your name and review", variant: "destructive" });
      return;
    }
    setTestimonials([{ name: formName, role: formRole || "Client", text: formText, rating: formRating }, ...testimonials]);
    setFormName("");
    setFormRole("");
    setFormText("");
    setFormRating(5);
    toast({ title: "Thank you for your review!", description: "Your testimonial has been submitted." });
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((t, idx) => (
            <div key={`${t.name}-${idx}`} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <StarRating rating={t.rating} />
              <p className="text-sm text-muted-foreground leading-relaxed my-4">"{t.text}"</p>
              <div>
                <div className="font-semibold text-card-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial form */}
        <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-md">
          <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Leave a Review</h3>
          <p className="text-sm text-muted-foreground mb-6">Share your experience with King David Plumbing</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Your Rating:</span>
              <StarRating rating={formRating} onRate={setFormRating} interactive />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name *" value={formName} onChange={(e) => setFormName(e.target.value)} className="bg-background" />
              <Input placeholder="Role / Location" value={formRole} onChange={(e) => setFormRole(e.target.value)} className="bg-background" />
            </div>
            <Textarea
              placeholder="Tell us about your experience... *"
              rows={4}
              value={formText}
              onChange={(e) => setFormText(e.target.value)}
              className="bg-background resize-none"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Send className="w-4 h-4 mr-2" /> Submit Review
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
