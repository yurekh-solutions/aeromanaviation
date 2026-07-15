import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Plane, Users, Package, Shield, Globe, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Charter Flights",
  description: "Private jet, group charter, and cargo charter services. Business, leisure, humanitarian relief, and emergency response worldwide.",
};

const charterTypes = [
  {
    icon: Plane,
    title: "Private Jet",
    subtitle: "Business and Leisure Purposes",
    desc: "Experience the pinnacle of air travel with our private jet charter services. Whether for corporate meetings, leisure travel, or special occasions, we provide bespoke aviation solutions tailored to your schedule and preferences.",
  },
  {
    icon: Users,
    title: "Group Charter",
    desc: "Whatever your need for group charter, we deliver. From sports teams to corporate events, our group charter solutions handle logistics seamlessly.",
    features: ["Series Charters", "Personnel Logistics", "Emergency Response", "Tours & Roadshows"],
  },
  {
    icon: Package,
    title: "Cargo Charter",
    desc: "Specialized cargo charter services for oversized, time-critical, and sensitive freight to any destination worldwide.",
    features: ["Humanitarian Relief", "Livestock Transport", "Dangerous Goods", "Heavy Outsized Cargo", "Remote Destinations"],
  },
];

export default function CharterFlightsPage() {
  return (
    <>
      <PageHero
        title="Charter Flights"
        subtitle="Private jet, group charter, and cargo charter services worldwide."
        backgroundImage="/images/pages/charter-flights.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Charter Flights" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {charterTypes.map((charter, i) => (
            <div key={charter.title} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                    <charter.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-heading text-gold-400 text-xs font-semibold tracking-widest uppercase">
                      {charter.title}
                    </p>
                    {charter.subtitle && (
                      <p className="text-sm text-white/50">{charter.subtitle}</p>
                    )}
                  </div>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">{charter.title}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{charter.desc}</p>
                {charter.features && (
                  <div className="grid grid-cols-2 gap-3">
                    {charter.features.map((f) => (
                      <div key={f} className="glass rounded-lg px-4 py-2 text-sm text-white/80">
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={`relative glass rounded-2xl h-72 flex items-center justify-center overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={charter.icon === Plane ? "/images/private-jet.jpg" : charter.icon === Users ? "/images/aviation-team.jpg" : "/images/cargo-plane.jpg"} alt={charter.title} fill className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950/60 to-transparent" />
                <charter.icon className="relative w-24 h-24 text-gold-400/30" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Choose Our Charter Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Global Reach", desc: "Access to airports and airfields worldwide, including remote and challenging destinations." },
              { icon: Shield, title: "Safety First", desc: "All operators vetted to the highest safety standards with full regulatory compliance." },
              { icon: Heart, title: "24/7 Support", desc: "Round-the-clock support for urgent charter requirements and AOG situations." },
            ].map((item) => (
              <div key={item.title} className="glass-gold rounded-2xl p-6">
                <item.icon className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
