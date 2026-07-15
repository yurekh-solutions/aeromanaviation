import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the Aeroman Aviation leadership team — experienced professionals dedicated to aviation excellence.",
};

const team = [
  {
    name: "Capt. Ahmed Al Ansari",
    role: "Founder & CEO",
    image: "/images/pages/founder.jpg",
    bio: "A seasoned aviation professional with over four decades of experience and 11,000 flight hours. His vision drives Aeroman Aviation's commitment to excellence in every aspect of aviation services.",
  },
  {
    name: "Mr. Haitham Al Ansari",
    role: "Managing Director",
    image: "/images/team/haitham.jpg",
    bio: "Oversees day-to-day operations and strategic growth initiatives, ensuring Aeroman Aviation continues to expand its global reach while maintaining the highest quality standards.",
  },
  {
    name: "Mr. Prasath Shaju",
    role: "Procurement Manager",
    image: "/images/team/haitham.jpg",
    bio: "Manages the global procurement network for aircraft parts and components, leveraging deep supplier relationships to source hard-to-find parts for civil and military platforms.",
  },
  {
    name: "Mr. Faizal Ibrahim",
    role: "Sales Executive",
    image: "/images/team/haitham.jpg",
    bio: "Leads client engagement and sales operations, providing responsive 24/7 AOG support and building lasting relationships with airlines and operators worldwide.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The professionals behind Aeroman Aviation's commitment to excellence."
        backgroundImage="/images/pages/about-banner.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Leadership
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              A team of dedicated aviation professionals with deep expertise in aircraft parts supply,
              charter operations, and aviation resource management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-gold-400">{member.name}</h3>
                  <p className="text-sm text-white/50 mb-3">{member.role}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientCarousel />
    </>
  );
}
