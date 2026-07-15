import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Package, Wrench, Shield, Droplets, Settings, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "Aeroman Aviation products: aircraft parts, avionics, engines, consumables, lubricants, ground support equipment, and aviation chemicals.",
};

const categories = [
  {
    icon: Package,
    title: "Avionic Components",
    desc: "Navigation systems, communication equipment, flight instruments, and electronic components for all major aircraft types.",
  },
  {
    icon: Wrench,
    title: "Engines & Airframe",
    desc: "Complete engines, engine components, airframe structures, wings, fuselage sections, and empennage parts.",
  },
  {
    icon: Droplets,
    title: "Consumables, Lubricants & Tyres",
    desc: "Aero-Sense aviation chemicals, de-icing fluids, hydraulic fluids, lubricants, aviation tyres, and brake assemblies.",
  },
  {
    icon: Settings,
    title: "Ground Support Equipment",
    desc: "GPU, tugs, tow bars, jacks, test equipment, and specialized ground handling tools for all aircraft types.",
  },
  {
    icon: Shield,
    title: "Tools & Stands",
    desc: "Engine stands, propeller stands, maintenance platforms, specialized tooling, and calibrated equipment.",
  },
];

const gallery = [
  { src: "/images/product-gallery/brake-unit.jpg", alt: "Carbon Brake Unit A320neo" },
  { src: "/images/product-gallery/engine.png", alt: "Aircraft Engine" },
  { src: "/images/product-gallery/tires.jpg", alt: "Aviation Tyres" },
  { src: "/images/product-gallery/landing-gear.jpg", alt: "Airbus A318 Landing Gear" },
  { src: "/images/product-gallery/lg-unit.jpg", alt: "Landing Gear Unit" },
  { src: "/images/product-gallery/lubricants.jpg", alt: "Aviation Lubricants" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="Comprehensive aircraft parts, consumables, and ground support equipment for civil and military aviation."
        backgroundImage="/images/pages/warehouse.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="mb-16">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Product Range
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-10">What We Supply</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div key={cat.title} className="glass rounded-2xl p-6 hover:border-gold-500/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Gallery */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-10">Product Gallery</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((img) => (
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
                    <p className="text-sm font-medium text-white/80">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory */}
          <div className="glass rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Inventory
                </p>
                <h2 className="font-heading text-3xl font-bold mb-4">OEM Access & Global Network</h2>
                <p className="text-white/70 leading-relaxed">
                  We maintain direct access to OEM parts and a global network of certified suppliers.
                  Our inventory management ensures rapid turnaround for both standard and hard-to-find
                  components across all major aircraft manufacturers including Airbus, Boeing, Bombardier,
                  Embraer, and more.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm transition-colors"
                  >
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-72">
                <Image
                  src="/images/pages/spare-parts.jpg"
                  alt="Aircraft parts inventory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product sub-pages */}
          <div className="grid sm:grid-cols-2 gap-8">
            <Link
              href="/products/aero-sense"
              className="group glass rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all"
            >
              <div className="relative h-48">
                <Image src="/images/products/aerosense-family.png" alt="Aero-Sense Products" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-white group-hover:text-gold-400 transition-colors">
                  Aero-Sense Aviation Chemicals
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-white/60">Insecticides, cleaning products, de-icing fluids, and more.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-gold-400 text-sm font-medium">
                  View Products <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/products/arms"
              className="group glass rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all"
            >
              <div className="relative h-48">
                <Image src="/images/products/arms-screenshot.jpg" alt="ARMS Platform" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-white group-hover:text-gold-400 transition-colors">
                  Aviation Resource Management
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-white/60">Cloud-based platform with 13 integrated airline modules.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-gold-400 text-sm font-medium">
                  View Products <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
