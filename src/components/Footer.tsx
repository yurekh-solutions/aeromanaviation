import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/aircraft-parts", label: "Aircraft Parts Supply" },
  { href: "/services/charter-flights", label: "Charter Flights" },
  { href: "/services/flight-calibration", label: "Flight Calibration Tests" },
  { href: "/products/arms", label: "Aviation Resource Management" },
  { href: "/certifications", label: "Certifications" },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900" />

      <div className="relative border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo/logo.png"
                  alt="Aeroman Aviation"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <div>
                  <span className="block font-heading font-bold text-lg leading-tight">Aeroman</span>
                  <span className="block text-[10px] uppercase tracking-widest text-gold-400">Aviation</span>
                </div>
              </Link>
              <p className="text-sm text-white/60 leading-relaxed">
                Specializing in the supply of aircraft parts for both civil and military aircraft worldwide.
                ISO 9001:2015 certified, ASA member, D-U-N-S registered.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/aeroman-aviation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.link/8iqhth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Our Company */}
            <div>
              <h4 className="font-heading font-bold text-gold-400 mb-4">Our Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-gold-400 mb-4">Services & Products</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-gold-400 mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+96897766022" className="flex items-start gap-2 text-sm text-white/60 hover:text-gold-400 transition-colors">
                    <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>+968 9776 6022</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+96892169955" className="flex items-start gap-2 text-sm text-white/60 hover:text-gold-400 transition-colors">
                    <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>+968 9216 9955</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Sales@aeromanaviation.com" className="flex items-start gap-2 text-sm text-white/60 hover:text-gold-400 transition-colors">
                    <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Sales@aeromanaviation.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Al Jury Co. LLC, Suite 201 & 202, 2nd Floor, Ghala Industrial, Muscat, Oman</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Aeroman Aviation. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
