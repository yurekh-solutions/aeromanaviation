import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Award, Users, Eye, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Aeroman Aviation — founded by Captain Ahmed Al Ansari with 4 decades of aviation experience. ISO 9001:2015 certified, ASA member.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="A team of professionals with a passion for aviation."
        backgroundImage="/images/pages/about-banner.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Founder */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/pages/founder.jpg"
                  alt="Captain Ahmed Al Ansari - Founder & CEO"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading text-xl font-bold text-gold-400">Captain Ahmed Al Ansari</h3>
                  <p className="text-white/60 text-sm">Founder & CEO</p>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="glass-gold rounded-xl p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-gold-400">40+</p>
                  <p className="text-xs text-white/50">Years in Aviation</p>
                </div>
                <div className="glass-gold rounded-xl p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-gold-400">11,000</p>
                  <p className="text-xs text-white/50">Flight Hours</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Our Founder
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                Captain Ahmed Al Ansari
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Captain Ahmed Al Ansari is a seasoned aviation professional with over four decades of
                  experience in the industry. With an impressive 11,000 flight hours, he brings unparalleled
                  expertise and leadership to Aeroman Aviation.
                </p>
                <p>
                  His vision of providing world-class aviation services and products has driven the company
                  to become a trusted name in aircraft parts supply, charter flights, and aviation resource
                  management across the region and beyond.
                </p>
                <p>
                  Under his leadership, Aeroman Aviation has established partnerships with leading aviation
                  companies worldwide, ensuring that clients receive only the highest quality products and
                  services backed by certified expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Banner */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/pages/about.jpg"
          alt="Aeroman Aviation team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Our Team</h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">
              We are a team of professional aviators, engineers, and logistics experts dedicated to
              providing exceptional aviation services.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be a leading aviation service providing company in the region and beyond. We aim to set the standard for excellence in aircraft parts supply, aviation services, and resource management solutions.",
                image: "/images/pages/about-banner.jpg",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To be cost effective and support clients with unique aviation experiences and solutions. We strive to deliver reliable, timely, and professional services that exceed industry standards.",
                image: "/images/pages/hero-slide.jpg",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl overflow-hidden hover:border-gold-500/20 transition-all">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 backdrop-blur-sm flex items-center justify-center border border-gold-500/30">
                      <item.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Trust & Quality
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Certifications & Memberships</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ISO 9001:2015", desc: "Quality Management System certified", image: "/images/certs/iso-cert.png" },
              { title: "ASA Member", desc: "Aviation Suppliers Association", image: "/images/certs/asa-badge.png" },
              { title: "D-U-N-S Registered", desc: "Dun & Bradstreet verified", image: "/images/certs/duns-badge.png" },
              { title: "FAA/EASA 145", desc: "Repair Station certified", image: "/images/certs/cert-badge3.png" },
            ].map((cert) => (
              <div key={cert.title} className="glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-colors">
                <div className="relative w-16 h-16 mx-auto mb-3 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image src={cert.image} alt={cert.title} width={60} height={60} className="object-contain p-1" />
                </div>
                <h4 className="font-heading font-bold text-lg">{cert.title}</h4>
                <p className="text-sm text-white/50 mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
