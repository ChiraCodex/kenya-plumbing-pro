import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Emergency Service" },
  { icon: Award, value: "2,500+", label: "Jobs Completed" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
];

const WhyUsSection = () => (
  <section id="about" className="py-20 md:py-28 bg-navy text-navy-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why King David</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Kenya's Trusted Plumbing Partner</h2>
        <p className="text-navy-foreground/70 mt-4">
          Licensed, insured, and committed to quality workmanship. We treat every project — big or small — with professionalism and care.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 rounded-xl bg-navy-foreground/5 border border-navy-foreground/10">
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
            <div className="text-sm text-navy-foreground/70 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
