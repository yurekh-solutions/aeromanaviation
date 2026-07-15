import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Cpu, Cloud, CheckCircle2, Zap, Shield, BarChart3, Database, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviation Resource Management System",
  description: "Cloud-based aviation resource management platform with 13 integrated modules covering all airline operations.",
};

const modules = [
  { abbr: "CPSS", name: "Crew Planning & Scheduling System" },
  { abbr: "CMSS", name: "Crew Management & Support System" },
  { abbr: "FPDS", name: "Flight Planning & Dispatch System" },
  { abbr: "CWP", name: "Crew Web Portal" },
  { abbr: "FOSS", name: "Flight Operations Support System" },
  { abbr: "EMSS", name: "Engineering & Maintenance Support System" },
  { abbr: "LIMS", name: "Line Inventory Management System" },
  { abbr: "FDMA", name: "Flight Data Monitoring & Analysis" },
  { abbr: "FCAM", name: "Flight Crew Assessment Module" },
  { abbr: "SQMS", name: "Safety & Quality Management System" },
  { abbr: "HMRO", name: "Heavy Maintenance & Repair Oversight" },
  { abbr: "ITMS", name: "Integrated Training Management System" },
  { abbr: "TAB", name: "Tablet Enabled Operations" },
];

const benefits = [
  { icon: Cloud, title: "Fully Cloud Hosted", desc: "No on-premise infrastructure required. Accessible from anywhere with secure cloud hosting." },
  { icon: Cpu, title: "Modular Architecture", desc: "Deploy modules independently or as a complete suite. Scale as your operations grow." },
  { icon: Smartphone, title: "Mobile Enabled", desc: "Full mobile support with tablet-optimized interfaces for line operations." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption, role-based access control, and complete audit trails." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards and reporting for all operational metrics and KPIs." },
  { icon: Database, title: "Integrated Data", desc: "Single source of truth across all departments with seamless data integration." },
];

export default function ARMSPage() {
  return (
    <>
      <PageHero
        title="Aviation Resource Management System"
        subtitle="A cloud-based platform with 13 integrated modules covering all airline operations."
        backgroundImage="/images/products/arms-screenshot.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products" },
          { label: "Aviation Resource Management System" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Platform Overview
                </p>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Modular, Scalable & Fully Hosted
                </h2>
                <p className="text-white/70 leading-relaxed">
                  ARMS is a comprehensive aviation resource management platform designed to digitize
                  and streamline all airline operations. From crew planning and flight dispatch to
                  maintenance oversight and safety management, ARMS provides a unified solution
                  that connects every department in your organization.
                </p>
                <div className="mt-6 glass-gold rounded-xl p-4 inline-flex items-center gap-3">
                  <Zap className="w-6 h-6 text-gold-400" />
                  <span className="font-medium text-sm">13 Integrated Modules</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/products/arms-overview.jpg"
                  alt="ARMS Platform Overview"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="mb-16">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">
              System Modules
            </p>
            <h2 className="font-heading text-3xl font-bold text-center mb-10">13 Integrated Modules</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {modules.map((mod) => (
                <div key={mod.abbr} className="glass rounded-xl p-4 hover:border-gold-500/20 transition-colors">
                  <p className="font-heading font-bold text-gold-400 text-lg">{mod.abbr}</p>
                  <p className="text-sm text-white/70 mt-1">{mod.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 text-center">
              Key Benefits
            </p>
            <h2 className="font-heading text-3xl font-bold text-center mb-10">Why Choose ARMS</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="glass rounded-2xl p-6 hover:border-gold-500/20 transition-all">
                  <b.icon className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-white/60">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
