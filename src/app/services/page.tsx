import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Package, Plane, BarChart3, Wrench, ArrowRight, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Aeroman Aviation provides aircraft parts supply, charter flights, flight calibration tests, cabin & interior repair, and 24/7 AOG support.",
};

const services = [
  {
    icon: Package,
    title: "Aircraft Parts Supply",
    desc: "Supply of aircraft parts for both civil and military aircraft, including engines, avionics, ground support equipment, and consumables. Exchange, repair, overhaul, and calibration services.",
    href: "/services/aircraft-parts",
    features: ["Exchange & Overhaul", "Calibration", "Ground Support Equipment", "Engine Tooling"],
    image: "/images/pages/spare-parts.jpg",
  },
  {
    icon: Package,
    title: "Military Aircraft Parts",
    desc: "Specialized sourcing of hard-to-find military aircraft parts with full ITAR/EAR compliance and secure logistics handling.",
    href: "/services/aircraft-parts",
    features: ["Mil-spec Certified", "ITAR/EAR Compliant", "Full Traceability", "Secure Logistics"],
    image: "/images/pages/military-parts.png",
  },
  {
    icon: Plane,
    title: "Charter Flights",
    desc: "Private jet charters for business and leisure, group charters, cargo charters, and emergency response logistics worldwide.",
    href: "/services/charter-flights",
    features: ["Private Jet", "Group Charter", "Cargo Charter", "Emergency Response"],
    image: "/images/pages/charter-flights.jpg",
  },
  {
    icon: BarChart3,
    title: "Flight Calibration Tests",
    desc: "Flight inspection services with two Beechcraft King Air B200 aircraft equipped with AERODATA AeroFIS 120 system. In operation since the 1960s.",
    href: "/services/flight-calibration",
    features: ["Navigation Aid Calibration", "AeroFIS 120 System", "Beechcraft King Air B200", "ILS/VOR/DME Testing"],
    image: "/images/pages/flight-calibration.jpg",
  },
  {
    icon: Plane,
    title: "Helicopter Charters",
    desc: "Versatile rotary-wing solutions for VIP transport, offshore operations, medical evacuation, and aerial surveys.",
    href: "/services/helicopter-charters",
    features: ["VIP Transport", "Offshore Ops", "MEDEVAC", "Aerial Surveys"],
    image: "/images/pages/helicopter.jpg",
  },
  {
    icon: Wrench,
    title: "Cabin & Interior Repair",
    desc: "Complete aircraft interior management solution in partnership with Aero Cabin Solutions (ACS) and Tarmac Aerosave, an Airbus subsidiary.",
    href: "/services/cabin-repair",
    features: ["Engineering DOA PART21J", "145 Repair Station", "Cabin Inspection", "Trolley/Galley Repair"],
    image: "/images/cabin-interior.jpg",
  },
  {
    icon: Handshake,
    title: "Aircraft Sales & Acquisitions",
    desc: "Expert assistance with aircraft sourcing, pre-purchase inspections, sales advisory, and fleet transaction management.",
    href: "/services/aircraft-sales",
    features: ["Aircraft Sourcing", "Pre-buy Inspection", "Sales Advisory", "Fleet Transactions"],
    image: "/images/pages/aircraft-sales.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="We provide the services and support you need to keep your fleet operational."
        backgroundImage="/images/pages/hero-bg.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <svc.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">{svc.title}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{svc.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {svc.features.map((f) => (
                    <div key={f} className="glass rounded-lg px-4 py-2 text-sm text-white/80">
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`relative rounded-2xl h-72 overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
