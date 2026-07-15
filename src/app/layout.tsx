import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AogBanner from "@/components/AogBanner";

const lato = Lato({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeromanaviation.com"),
  title: {
    default: "Aeroman Aviation | Aircraft Parts, Charter Flights & Aviation Services",
    template: "%s | Aeroman Aviation",
  },
  description:
    "Aeroman Aviation specializes in supplying aircraft parts for civil and military aircraft worldwide. 24/7 AOG support, charter flights, flight calibration, and aviation resource management.",
  keywords: [
    "aviation",
    "aircraft parts",
    "charter flights",
    "flight calibration",
    "AOG support",
    "MRO",
    "Oman aviation",
    "military aircraft parts",
    "aviation chemicals",
    "cabin interior repair",
  ],
  authors: [{ name: "Aeroman Aviation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aeromanaviation.com",
    siteName: "Aeroman Aviation",
    title: "Aeroman Aviation | Aircraft Parts, Charter Flights & Aviation Services",
    description:
      "Specializing in supplying aircraft parts for civil and military aircraft worldwide. 24/7 AOG support and niche aviation services.",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aeroman Aviation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeroman Aviation",
    description: "Specializing in aircraft parts supply and aviation services worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aeromanaviation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo/favicon.jpg" />
        <link rel="apple-touch-icon" href="/images/logo/favicon.jpg" />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-950 text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <AogBanner />
        <Footer />
      </body>
    </html>
  );
}
