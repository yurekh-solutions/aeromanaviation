import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Award, Download, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Aeroman Aviation certifications: ISO 9001:2015, ASA Member, D-U-N-S Registered, FAA/EASA 145 Repair Station.",
};

const certifications = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management System certification demonstrating our commitment to consistent quality and continuous improvement in all aviation services.",
    issuer: "International Organization for Standardization",
    image: "/images/certs/iso-cert.png",
  },
  {
    title: "ASA Member",
    desc: "Active member of the Aviation Suppliers Association, ensuring adherence to industry best practices and ethical standards.",
    issuer: "Aviation Suppliers Association",
    image: "/images/certs/asa-badge.png",
  },
  {
    title: "D-U-N-S Registered",
    desc: "Dun & Bradstreet verified business entity with a unique D-U-N-S Number for global business identification and credibility.",
    issuer: "Dun & Bradstreet",
    image: "/images/certs/duns-badge.png",
  },
  {
    title: "FAA/EASA Part 145",
    desc: "Certified Repair Station under FAA and EASA Part 145 regulations for aircraft component repair and overhaul.",
    issuer: "Federal Aviation Administration / European Union Aviation Safety Agency",
    image: "/images/certs/cert-badge3.png",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certifications & Approvals"
        subtitle="Our certifications demonstrate our commitment to the highest standards in aviation."
        backgroundImage="/images/certs/certified-banner.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Certifications" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cert cards with images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert) => (
              <div key={cert.title} className="glass rounded-2xl p-8 hover:border-gold-500/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-white/5 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={80}
                      height={80}
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-gold-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gold-400/70 mb-3">{cert.issuer}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ASA Membership Screenshot */}
          <div className="glass rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="font-heading text-2xl font-bold mb-8 text-center">Our Certifications in Detail</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/certs/certified.jpg"
                  alt="Aeroman Aviation certifications"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/certs/asa-membership.png"
                  alt="ASA Membership"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional Standards */}
          <div className="glass rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="font-heading text-2xl font-bold mb-8 text-center">Quality Standards We Follow</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "ATA SPEC 106 - Parts & Material",
                "AC 00-56B - Voluntary Industry Standards",
                "ASA-100 - Quality System Standard",
                "FAA Advisory Circulars",
                "EASA Part 145 Requirements",
                "ICAO Standards & Practices",
              ].map((std) => (
                <div key={std} className="flex items-center gap-3 glass rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-sm text-white/80">{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Brochure */}
          <div className="glass-gold rounded-3xl p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <Download className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Download Company Brochure</h2>
            <p className="text-white/70 mb-8">
              Get a comprehensive overview of our services, capabilities, and certifications.
            </p>
            <a
              href="/docs/AerOman-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors"
            >
              <Download className="w-5 h-5" /> Download Brochure (PDF)
            </a>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
