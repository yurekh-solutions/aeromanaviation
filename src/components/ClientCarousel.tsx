"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clients = [
  { name: "Oman Air", logo: "/images/clients/oman-air.png" },
  { name: "Qatar Airways", logo: "/images/clients/qatar-airways.png" },
  { name: "Corendon Airlines", logo: "/images/clients/corendon.png" },
  { name: "Royal Oman Police", logo: "/images/clients/rop.png" },
  { name: "Ministry of Defence", logo: "/images/clients/mod.png" },
  { name: "Etihad", logo: "/images/clients/etihad.png" },
  { name: "Gulf Air", logo: "/images/clients/gulf-air.png" },
  { name: "Azul", logo: "/images/clients/azul.png" },
  { name: "Ethiopian Airlines", logo: "/images/clients/ethiopian-air.png" },
  { name: "Laminar", logo: "/images/clients/laminar.png" },
  { name: "Province", logo: "/images/clients/province.png" },
  { name: "Fortal", logo: "/images/clients/fortal.png" },
  { name: "Globaljet", logo: "/images/clients/globaljet.png" },
  { name: "NOK", logo: "/images/clients/nok-air.png" },
  { name: "RAFO", logo: "/images/clients/rafo.png" },
  { name: "Salam Air", logo: "/images/clients/salam-air.png" },
  { name: "Regent", logo: "/images/clients/regent.png" },
];

export default function ClientCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    const scroll = () => {
      if (!isPaused) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="py-16 lg:py-24 relative" suppressHydrationWarning>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-3">
              Trusted by Leading Airlines
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Proudly serving civil and military aviation clients across the globe.
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden px-8 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex-shrink-0 glass flex items-center justify-center px-8 py-6 hover:bg-white/10 transition-all duration-300 min-w-[180px] h-24"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={60}
                className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
