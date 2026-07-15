import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { ArrowRight, Search, FileCheck, Handshake, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Aircraft Sales & Acquisitions",
  description: "Expert assistance with aircraft acquisition, sales advisory, pre-purchase inspections, and fleet transactions.",
};

const services = [
  {
    icon: Search,
    title: "Aircraft Sourcing",
    desc: "We help identify and source the right aircraft for your operational needs — from turboprops to business jets, considering mission profile, budget, and maintenance status.",
  },
  {
    icon: FileCheck,
    title: "Pre-Purchase Inspection",
    desc: "Comprehensive pre-buy inspections covering airframe, engines, avionics, and records review. We ensure the aircraft meets your standards before any commitment.",
  },
  {
    icon: Handshake,
    title: "Sales Advisory",
    desc: "End-to-end sales support including market valuation, buyer matching, negotiation assistance, and closing coordination to maximize your asset value.",
  },
  {
    icon: Plane,
    title: "Fleet Transactions",
    desc: "Managing complex fleet transactions, lease returns, and portfolio optimization for airlines and operators looking to restructure their fleet.",
  },
];

export default function AircraftSalesPage() {
  return (
    <>
      <PageHero
        title="Aircraft Sales & Acquisitions"
        subtitle="Expert guidance for aircraft transactions — from sourcing to closing."
        backgroundImage="/images/pages/aircraft-sales.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Aircraft Sales & Acquisitions" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {services.map((svc) => (
              <div key={svc.title} className="glass rounded-2xl p-8 hover:border-gold-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-white/70 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-gold rounded-3xl p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <Plane className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Looking to Buy or Sell an Aircraft?</h2>
            <p className="text-white/70 mb-8">
              Contact our team for confidential consultation on aircraft acquisitions, sales, or fleet transactions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors"
            >
              <ArrowRight className="w-5 h-5" /> Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
