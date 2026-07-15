import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { BarChart3, Plane, FileText, CheckCircle2, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Flight Calibration Tests",
  description: "Flight inspection services with Beechcraft King Air B200 aircraft equipped with AERODATA AeroFIS 120 system. In operation since the 1960s.",
};

export default function FlightCalibrationPage() {
  return (
    <>
      <PageHero
        title="Flight Calibration Tests"
        subtitle="Precision flight inspection services with state-of-the-art AERODATA systems."
        backgroundImage="/images/pages/flight-calibration.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Flight Calibration Tests" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Our Heritage
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                Flight Inspection Unit
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Our Flight Inspection Unit has been in operation since the 1960s, providing
                  critical navigation aid calibration and flight inspection services across the
                  region. With decades of experience, we maintain the highest standards of
                  precision and reliability.
                </p>
                <p>
                  We operate two Beechcraft King Air B200 aircraft equipped with the state-of-the-art
                  AERODATA AeroFIS 120 flight inspection system, capable of calibrating all types
                  of navigation aids including ILS, VOR, DME, NDB, and more.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80">
              <Image
                src="/images/pages/flight-inspection.png"
                alt="Flight Inspection System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Calibration Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Instrument Landing System (ILS)",
              "VHF Omnidirectional Range (VOR)",
              "Distance Measuring Equipment (DME)",
              "Non-Directional Beacon (NDB)",
              "Tactical Air Navigation (TACAN)",
              "Precision Approach Radar (PAR)",
              "Approach Lighting Systems",
              "Microwave Landing System (MLS)",
              "GNSS/SBAS Procedures",
            ].map((cap) => (
              <div key={cap} className="flex items-center gap-3 glass rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-white/80">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-gold rounded-3xl p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Learn More About the Inspection System
            </h2>
            <p className="text-white/70 mb-8">
              Download our detailed brochure about the AERODATA AeroFIS 120 flight inspection system
              and our calibration capabilities.
            </p>
            <a
              href="/docs/AeroFIS-Automatic-Flight-Inspection-System.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors"
            >
              <Download className="w-5 h-5" /> Automatic Flight Inspection System (PDF)
            </a>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
