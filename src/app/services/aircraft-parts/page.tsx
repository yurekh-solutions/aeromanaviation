import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { RefreshCw, Wrench, Ruler, Package, Settings, Cog, Truck, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Aircraft Parts Supply",
  description: "Supply of aircraft parts for civil and military aircraft including exchange, repair, overhaul, calibration, ground support equipment, and engine tooling.",
};

const capabilities = [
  { icon: RefreshCw, title: "Exchange", desc: "Serviceable exchange units with full traceability and certification." },
  { icon: Wrench, title: "Repair & Overhaul", desc: "Comprehensive repair and overhaul services for aircraft components." },
  { icon: Ruler, title: "Calibration", desc: "Precision calibration services meeting FAA and EASA standards." },
  { icon: Package, title: "Tools on Loan", desc: "Specialized aviation tools available on loan for maintenance operations." },
  { icon: Settings, title: "Inventory Management", desc: "Managed inventory programs for airlines and MRO facilities." },
];

const features = [
  { icon: Cog, title: "Ground Support Equipment", desc: "Full range of GSE including tow bars, jacks, and power units." },
  { icon: Wrench, title: "Engine Tooling", desc: "Specialized tooling for all major engine types and models." },
  { icon: Thermometer, title: "Engine Stand", desc: "Certified engine stands for transport and maintenance operations." },
  { icon: Truck, title: "Logistics", desc: "Worldwide logistics network for rapid parts delivery and AOG support." },
];

export default function AircraftPartsPage() {
  return (
    <>
      <PageHero
        title="Supply of Aircraft Parts"
        subtitle="Comprehensive aircraft parts supply for civil and military aircraft worldwide."
        backgroundImage="/images/pages/spare-parts.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Aircraft Parts Supply" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Capabilities
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Expansible, Consumables, Lubricants, Tyres, Brakes and Assemblies
            </h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">
              We provide a comprehensive range of aircraft parts and components, from rotatable and
              expendable parts to consumables, lubricants, tyres, brakes, and complete assemblies.
              Our supply chain spans all major aircraft manufacturers and types.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass rounded-2xl p-6 hover:border-gold-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{cap.title}</h3>
                <p className="text-sm text-white/60">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Features
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="glass-gold rounded-2xl p-6">
                <feat.icon className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="font-heading font-bold mb-2">{feat.title}</h3>
                <p className="text-sm text-white/60">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Military Parts */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Defense Sector
                </p>
                <h2 className="font-heading text-3xl font-bold mb-6">Military Aircraft Parts</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We specialize in sourcing hard-to-find military aircraft parts and components.
                  Our network enables us to supply parts for a wide range of military platforms
                  while maintaining strict compliance with defense procurement regulations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Mil-spec certified components",
                    "ITAR/EAR compliant sourcing",
                    "Full traceability documentation",
                    "Secure logistics and handling",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl h-64 overflow-hidden">
                <Image src="/images/pages/military-parts.png" alt="Military aircraft parts" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
