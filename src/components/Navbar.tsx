"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/services/aircraft-parts", label: "Aircraft Parts Supply" },
      { href: "/services/charter-flights", label: "Charter Flights" },
      { href: "/services/flight-calibration", label: "Flight Calibration Tests" },
      { href: "/services/helicopter-charters", label: "Helicopter Charters" },
      { href: "/services/aircraft-sales", label: "Aircraft Sales & Acquisitions" },
      { href: "/services/cabin-repair", label: "Cabin & Interior Repair" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products", label: "All Products" },
      { href: "/products/aero-sense", label: "Aero-Sense Aviation Chemicals" },
      { href: "/products/arms", label: "Aviation Resource Management" },
    ],
  },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setActiveDropdown(null);
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-900 border-b border-white/5 py-2 px-4 text-sm text-white/70 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+96897766022" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone className="w-3 h-3" /> +968 9776 6022
            </a>
            <a href="mailto:Sales@aeromanaviation.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail className="w-3 h-3" /> Sales@aeromanaviation.com
            </a>
          </div>
          <p className="text-xs text-white/50">24/7 AOG Support Available</p>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-dark shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="Aeroman Aviation"
                width={52}
                height={52}
                className="h-12 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className="block font-heading font-bold text-lg leading-tight text-white">
                  Aeroman
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-gold-400">
                  Aviation
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "text-gold-400 bg-gold-500/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 glass-dark rounded-xl shadow-2xl shadow-black/40 overflow-hidden animate-fade-in-up">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-white/80 hover:text-gold-400 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+96897766022"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> AOG Hotline
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden glass-dark border-t border-white/5 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      pathname === link.href
                        ? "text-gold-400 bg-gold-500/10"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 border-l border-white/10 ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-gold-400 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 mt-4">
                <a
                  href="tel:+96897766022"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gold-500 text-navy-950 font-semibold"
                >
                  <Phone className="w-4 h-4" /> Call AOG Hotline
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
