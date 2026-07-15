import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Wrench, Shield, CheckCircle2, Download, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabin & Interior Repair",
  description: "One-stop solution for aircraft interior management. Partnership with Aero Cabin Solutions (ACS) and Tarmac Aerosave (Airbus subsidiary).",
};

const services = [
  { title: "Engineering DOA PART21J", desc: "Design Organisation Approval for cabin modifications and interior solutions." },
  { title: "145 Repair Station", desc: "FAA/EASA Part 145 certified repair station for cabin components and interiors." },
  { title: "Maintenance Programs", desc: "Comprehensive scheduled and unscheduled maintenance for aircraft interiors." },
  { title: "Consignment Stock", desc: "Managed consignment stock programs for cabin spares and components." },
  { title: "Cabin Inspection", desc: "Thorough cabin inspections with detailed reporting and recommendations." },
];

export default function CabinRepairPage() {
  return (
    <>
      <PageHero
        title="Cabin & Interior Repair"
        subtitle="Your one-stop solution for the management of aircraft interiors."
        backgroundImage="/images/pages/cabin-bg.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cabin & Interior Repair" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Strategic Partnership
              </p>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Aero Cabin Solutions & Tarmac Aerosave
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Through our strategic partnership with Aero Cabin Solutions (ACS) and Tarmac Aerosave,
                  a subsidiary of Airbus, we provide comprehensive aircraft interior management services.
                </p>
                <p>
                  Our combined expertise covers the full lifecycle of aircraft interiors — from design
                  and engineering to maintenance, repair, and overhaul. We ensure your cabin meets the
                  highest standards of safety, comfort, and compliance.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((svc) => (
                <div key={svc.title} className="glass rounded-xl p-5 hover:border-gold-500/20 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold">{svc.title}</h3>
                      <p className="text-sm text-white/60 mt-1">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trolley & Galley */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-gold rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Wrench className="w-12 h-12 text-gold-400 mb-6" />
                <h2 className="font-heading text-3xl font-bold mb-4">Trolley & Galley Repair</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  We provide specialized repair and overhaul services for aircraft trolleys, galley
                  equipment, and related cabin systems. Our certified technicians ensure all repairs
                  meet OEM specifications and regulatory requirements.
                </p>
                <ul className="space-y-3">
                  {[
                    "Trolley structural repairs",
                    "Galley oven and equipment overhaul",
                    "Coffee maker and water boiler service",
                    "Cart and container refurbishment",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl h-64 overflow-hidden">
                <Image src="/images/cabin-interior.jpg" alt="Aircraft cabin interior repair" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl font-bold">Cabin Repair Gallery</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/cabin-gallery/1.jpg", alt: "Cabin interior refurbishment" },
              { src: "/images/cabin-gallery/2.jpg", alt: "Seat repair and reupholstery" },
              { src: "/images/cabin-gallery/3.jpg", alt: "Galley renovation" },
              { src: "/images/cabin-gallery/4.jpg", alt: "Overhead bin replacement" },
              { src: "/images/cabin-gallery/5.jpg", alt: "Floor panel installation" },
              { src: "/images/cabin-gallery/6.jpg", alt: "Lavatory refurbishment" },
            ].map((img) => (
              <div key={img.alt} className="glass rounded-2xl overflow-hidden group">
                <div className="relative h-56">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm text-white/70">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/cabin-gallery/acs-logo.jpg"
              alt="ACS - Aero Cabin Solutions Partner"
              width={200}
              height={60}
              className="h-12 w-auto opacity-70"
            />
          </div>
        </div>
      </section>

      {/* Download Brochure */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/docs/AerOman-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors"
            >
              <Download className="w-5 h-5" /> Download Brochure
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-white/10 font-semibold transition-colors"
            >
              <Eye className="w-5 h-5" /> Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
