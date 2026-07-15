import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, breadcrumb, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          quality={70}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-950/95" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 25% 50%, rgba(190, 150, 20, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(190, 150, 20, 0.1) 0%, transparent 50%)",
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-4" aria-label="Breadcrumb">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {item.href ? (
                  <a href={item.href} className="hover:text-gold-400 transition-colors">{item.label}</a>
                ) : (
                  <span className="text-white/70">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
