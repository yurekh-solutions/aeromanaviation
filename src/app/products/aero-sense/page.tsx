import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import { Droplets, Sparkles, Snowflake, Shield, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Aero-Sense Aviation Chemicals",
  description: "Aero-Sense aviation chemicals including aircraft insecticides, cabin cleaning products, de-icing and anti-icing fluids. Partnership with Aero-Sense NV/SA.",
};

const productCategories = [
  {
    icon: FlaskConical,
    title: "Aircraft Insecticides",
    desc: "WHO-approved insecticides for aircraft disinsection. Available in aerosol and residual treatment formulations, meeting all international health regulations.",
    products: ["Aerosol Insecticide", "Residual Treatment", "Pre-flight Spray", "Cargo Hold Treatment"],
    image: "/images/products/aerosense-asp-badge.png",
  },
  {
    icon: Sparkles,
    title: "Cabin & Exterior Cleaning",
    desc: "Professional-grade cleaning products for aircraft interiors and exteriors, formulated to meet strict aviation safety and environmental standards.",
    products: ["Cabin Cleaner", "Exterior Wash", "Carpet & Upholstery Cleaner", "Glass & Surface Cleaner"],
    image: "/images/products/aerosense-cabin-cleaner.jpg",
  },
  {
    icon: Snowflake,
    title: "De-icing & Anti-icing",
    desc: "Advanced de-icing and anti-icing fluids for ground operations, ensuring safe takeoff conditions in winter operations.",
    products: ["Type I De-icing Fluid", "Type IV Anti-icing", "Runway De-icer", "Propeller Treatment"],
    image: "/images/products/aerosense-ice.jpg",
  },
];

export default function AeroSensePage() {
  return (
    <>
      <PageHero
        title="Aero-Sense Aviation Chemicals"
        subtitle="Premium aviation chemicals through our partnership with Aero-Sense NV/SA, Belgium."
        backgroundImage="/images/products/aero-sense-banner.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products" },
          { label: "Aero-Sense Aviation Chemicals" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partnership section with product family image */}
          <div className="glass rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Partnership
                </p>
                <h2 className="font-heading text-3xl font-bold mb-4">Aero-Sense NV/SA</h2>
                <p className="text-white/70 leading-relaxed">
                  Through our exclusive partnership with Aero-Sense NV/SA, a leading Belgian manufacturer
                  of aviation chemicals, we supply a comprehensive range of aircraft maintenance chemicals
                  that meet the highest international standards for safety, efficacy, and environmental
                  compliance.
                </p>
                <div className="mt-6 glass-gold rounded-xl p-4 inline-flex items-center gap-3">
                  <Droplets className="w-6 h-6 text-gold-400" />
                  <span className="font-medium text-sm">WHO, IATA, and ICAO compliant formulations</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/products/aerosense-family.png"
                  alt="Aero-Sense Product Family"
                  width={600}
                  height={475}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Product categories with images */}
          <div className="space-y-12">
            {productCategories.map((cat) => (
              <div key={cat.title} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                      <cat.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold">{cat.title}</h2>
                  </div>
                  <p className="text-white/70 leading-relaxed">{cat.desc}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {cat.products.map((prod) => (
                      <div key={prod} className="glass rounded-xl p-4 text-center hover:border-gold-500/20 transition-colors">
                        <Shield className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                        <p className="text-sm font-medium">{prod}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional product images */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/products/aerosense-disinfectant.jpg" alt="Cabin Disinfectant" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="font-heading font-bold">Cabin Disinfectant</p>
              </div>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/products/aerosense-triple-action.jpg" alt="Triple Action Cleaner" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="font-heading font-bold">Triple Action Cleaner</p>
              </div>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/products/aerosense-asd-badge.jpg" alt="ASD Disinfectant" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="font-heading font-bold">ASD Disinfectant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
