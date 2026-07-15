import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Plane, Wrench, Shield, BarChart3, Package, Cpu,
  ArrowRight, Phone, CheckCircle2, Star
} from "lucide-react";
import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "Aeroman Aviation | Aircraft Parts, Charter Flights & Aviation Services",
  description:
    "Aeroman Aviation specializes in supplying aircraft parts for civil and military aircraft worldwide. 24/7 AOG support, charter flights, flight calibration, and aviation resource management.",
};

const services = [
  {
    icon: Package,
    title: "Aircraft Parts Supply",
    desc: "Comprehensive supply of aircraft parts for civil and military aircraft, including engines, avionics, and consumables.",
    href: "/services/aircraft-parts",
    image: "/images/pages/spare-parts.jpg",
    features: ["Exchange & Overhaul", "Calibration", "Ground Support Equipment"],
  },
  {
    icon: Plane,
    title: "Charter Flights",
    desc: "Private jet, group charter, and cargo charter services for business, humanitarian, and emergency response.",
    href: "/services/charter-flights",
    image: "/images/pages/charter-flights.jpg",
    features: ["Private Jet", "Group Charter", "Cargo Charter"],
  },
  {
    icon: BarChart3,
    title: "Flight Calibration Tests",
    desc: "Flight inspection services with Beechcraft King Air B200 equipped with AERODATA AeroFIS 120 system.",
    href: "/services/flight-calibration",
    image: "/images/pages/flight-calibration.jpg",
    features: ["Navigation Aid Calibration", "AeroFIS 120 System", "ILS/VOR/DME"],
  },
  {
    icon: Wrench,
    title: "Cabin & Interior Repair",
    desc: "One-stop solution for aircraft interior management in partnership with Tarmac Aerosave (Airbus subsidiary).",
    href: "/services/cabin-repair",
    image: "/images/cabin-interior.jpg",
    features: ["Engineering DOA PART21J", "145 Repair Station", "Trolley Repair"],
  },
];

const capabilities = [
  "Aircraft support & maintenance logistics",
  "Airline Resource Management System",
  "Charter Flights & Personnel Logistics",
  "Flight Calibration Tests & Inspections",
];

const featuredProducts = [
  {
    title: "Aircraft Spares & Engines",
    desc: "OEM and aftermarket aircraft parts, engines, and components for all major aircraft types.",
    icon: Wrench,
    href: "/services/aircraft-parts",
    image: "/images/pages/spare-parts.jpg",
    highlights: ["Civil & Military", "Exchange & Overhaul", "Full Traceability"],
  },
  {
    title: "Aero-Sense Aviation Chemicals",
    desc: "Aero-Sense aviation chemicals, de-icing fluids, cabin cleaning products, and insecticides.",
    icon: Shield,
    href: "/products/aero-sense",
    image: "/images/products/aerosense-family.png",
    highlights: ["WHO Approved", "De-icing & Anti-icing", "Cabin Cleaning"],
  },
  {
    title: "Aviation Resource Management",
    desc: "Cloud-based platform with 13 modules covering all airline operations and resource management.",
    icon: Cpu,
    href: "/products/arms",
    image: "/images/products/arms-screenshot.jpg",
    highlights: ["13 Integrated Modules", "Cloud Hosted", "Mobile Enabled"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/pages/hero-bg.jpg"
          alt="Aircraft in flight"
          fill
          className="object-cover object-center"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-950/50" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(190,150,20,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(190,150,20,0.1) 0%, transparent 50%)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800" fill="none">
          <path d="M0 400 Q300 200 600 400 T1200 400" stroke="#be9614" strokeWidth="1" />
          <path d="M0 500 Q300 300 600 500 T1200 500" stroke="#be9614" strokeWidth="0.5" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-sm text-gold-400 font-medium">24/7 AOG Support Available</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]">
                <span className="text-white">Aeroman</span>
                <br />
                <span className="text-gradient">Aviation</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
                Specializing in the supply of aircraft parts for both civil and military aircraft worldwide.
              </p>
              <p className="mt-4 text-base text-white/50 max-w-lg">
                Providing niche aviation services and products to clients worldwide — ISO 9001:2015 certified,
                ASA member, D-U-N-S registered.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-all hover:shadow-lg hover:shadow-gold-500/20"
                >
                  Our Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" /> Contact Us
                </Link>
              </div>
            </div>

            {/* Glass stats card */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-8 space-y-6 animate-float">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Years Experience", value: "40+" },
                    { label: "Flight Hours", value: "11,000" },
                    { label: "Airlines Served", value: "15+" },
                    { label: "AOG Response", value: "24/7" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-gold rounded-2xl p-5 text-center">
                      <p className="font-heading text-3xl font-black text-gold-400">{stat.value}</p>
                      <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 px-2">
                  <Star className="w-5 h-5 text-gold-400" />
                  <p className="text-sm text-white/70">
                    Founded by <span className="text-gold-400 font-semibold">Captain Ahmed Al Ansari</span> —
                    4 decades of aviation excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
                About Aeroman Aviation
              </h2>
              <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
                <p>
                  Aeroman Aviation, a subsidiary of Al Jury Co. LLC based in Muscat, Oman, is an ISO 9001:2015
                  certified company specializing in the supply of aircraft parts for both civil and military
                  aircraft worldwide.
                </p>
                <p>
                  As an active member of the Aviation Suppliers Association (ASA) and D-U-N-S registered,
                  we maintain the highest standards in aviation supply chain management.
                </p>
                <p>
                  Founded by Captain Ahmed Al Ansari, who brings over four decades of aviation experience and
                  11,000 flight hours, our company combines deep industry expertise with a commitment to
                  excellence in every transaction.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/pages/about-banner.jpg"
                  alt="Aeroman Aviation operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-4 glass rounded-xl p-5 hover:border-gold-500/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-white/90">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group glass rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-gold-500/5"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                      <svc.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <h3 className="font-heading font-bold text-base group-hover:text-gold-400 transition-colors">
                      {svc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-3">{svc.desc}</p>
                  <ul className="space-y-1 mb-4">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-gold-400 text-sm font-medium">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Products
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Products</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((prod) => (
              <Link
                key={prod.title}
                href={prod.href}
                className="group glass rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all hover:shadow-xl hover:shadow-gold-500/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-gold-400 transition-colors">
                      {prod.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{prod.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prod.highlights.map((h) => (
                      <span key={h} className="glass-gold rounded-full px-3 py-1 text-xs text-gold-400 font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-gold-400 text-sm font-medium">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Carousel */}
      <ClientCarousel />
    </>
  );
}
