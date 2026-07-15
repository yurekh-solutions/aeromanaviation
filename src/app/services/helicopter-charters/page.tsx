import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Helicopter Charters",
  description: "Helicopter charter services for VIP transport, offshore operations, medical evacuation, and aerial surveys worldwide.",
};

const capabilities = [
  {
    title: "VIP & Executive Transport",
    desc: "Luxury helicopter transfers for executives, dignitaries, and high-net-worth individuals. Point-to-point transfers with maximum comfort and flexibility.",
  },
  {
    title: "Offshore & Industrial Operations",
    desc: "Helicopter support for oil & gas platforms, wind farms, mining operations, and remote industrial sites with experienced crews.",
  },
  {
    title: "Medical Evacuation (MEDEVAC)",
    desc: "Emergency medical helicopter transport with trained medical crews, equipped for critical care and rapid response in remote locations.",
  },
  {
    title: "Aerial Surveys & Photography",
    desc: "Professional aerial survey, photography, and videography services for mapping, real estate, construction monitoring, and media production.",
  },
];

export default function HelicopterChartersPage() {
  return (
    <>
      <PageHero
        title="Helicopter Charters"
        subtitle="Versatile rotary-wing solutions for executive transport, offshore operations, and specialized missions."
        backgroundImage="/images/pages/helicopter.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Helicopter Charters" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, label: "Safety First", value: "EASA/FAA Certified" },
              { icon: Clock, label: "Response Time", value: "24/7 Available" },
              { icon: MapPin, label: "Coverage", value: "Global Operations" },
              { icon: ArrowRight, label: "Fleet Types", value: "Light to Heavy" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
                <p className="font-heading font-bold text-lg text-gold-400 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass rounded-2xl p-8 hover:border-gold-500/20 transition-all">
                <h3 className="font-heading text-xl font-bold mb-3 text-gold-400">{cap.title}</h3>
                <p className="text-white/70 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors"
            >
              Request a Charter Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
