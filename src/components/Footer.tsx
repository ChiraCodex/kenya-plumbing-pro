const Footer = () => (
  <footer className="bg-navy text-navy-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            AquaFlow<span className="text-gold"> Plumbing</span>
          </h3>
          <p className="text-sm text-navy-foreground/60 leading-relaxed">
            Professional plumbing services across Kenya. Licensed, insured, and trusted by thousands.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 text-gold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Services</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/60">
            <li>Emergency Repairs</li>
            <li>Leak Detection</li>
            <li>Bathroom & Kitchen</li>
            <li>Commercial Plumbing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 text-gold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Areas Served</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/60">
            <li>Nairobi</li>
            <li>Mombasa</li>
            <li>Kisumu</li>
            <li>Nakuru</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 text-gold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Contact</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/60">
            <li>+254 700 123 456</li>
            <li>info@aquaflowplumbing.co.ke</li>
            <li>Westlands, Nairobi</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 pt-6 text-center text-xs text-navy-foreground/40">
        © {new Date().getFullYear()} AquaFlow Plumbing. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
