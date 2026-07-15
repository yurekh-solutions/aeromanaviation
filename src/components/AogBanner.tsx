import { Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function AogBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-navy-950/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-navy-950" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-navy-950 text-lg">
                24/7 AOG Support Services
              </h3>
              <p className="text-navy-950/70 text-sm">
                Aircraft on Ground? We respond around the clock.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+96897766022"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 text-gold-400 font-semibold hover:bg-navy-900 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              +968 9776 6022
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-6 py-3 rounded-xl border-2 border-navy-950/30 text-navy-950 font-semibold hover:bg-navy-950/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
