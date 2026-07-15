"use client";

import { useState, FormEvent } from "react";
import PageHero from "@/components/PageHero";
import ClientCarousel from "@/components/ClientCarousel";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contact-form",
          page: "/contact",
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We operate 24/7 for AOG support. Reach out anytime."
        backgroundImage="/images/office-building.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="font-heading text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Get In Touch
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">Contact Information</h2>
                <p className="text-white/70 leading-relaxed">
                  AEROMAN AVIATION operates 24 hours a day, 7 days a week for AOG support.
                  For general inquiries, our office hours are Monday to Saturday.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    items: [
                      { text: "+968 9776 6022", href: "tel:+96897766022" as string | undefined },
                      { text: "+968 9216 9955", href: "tel:+96892169955" as string | undefined },
                    ],
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    items: [
                      { text: "Sales@aeromanaviation.com", href: "mailto:Sales@aeromanaviation.com" as string | undefined },
                    ],
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    items: [
                      {
                        text: "Al Jury Co. LLC, Suite 201 & 202, 2nd Floor, Building #1472/1, Road 5026, Ghala Industrial, Block 250, Bowsher, Muscat, Oman",
                        href: undefined as string | undefined,
                      },
                    ],
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    items: [{ text: "Mon–Sat: 9:00 – 18:00 | AOG: 24/7", href: undefined as string | undefined }],
                  },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-gold-400 text-sm mb-1">{info.label}</p>
                      {info.items.map((item, i) =>
                        item.href ? (
                          <a
                            key={i}
                            href={item.href}
                            className="text-white/70 hover:text-gold-400 transition-colors text-sm block"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p key={i} className="text-white/70 text-sm">{item.text}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold mb-6">Send Us a Message</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                  <h4 className="font-heading text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-white/60 mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-gold-400 font-medium hover:text-gold-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-white/60 mb-1">Full Name *</label>
                      <input
                        id="name" required type="text" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-white/60 mb-1">Email *</label>
                      <input
                        id="email" required type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-white/60 mb-1">Phone</label>
                      <input
                        id="phone" type="tel" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="+968 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-white/60 mb-1">Company</label>
                      <input
                        id="company" type="text" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-white/60 mb-1">Subject *</label>
                    <select
                      id="subject" required value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    >
                      <option value="" className="bg-navy-900">Select a subject</option>
                      <option value="aircraft-parts" className="bg-navy-900">Aircraft Parts Inquiry</option>
                      <option value="charter-flights" className="bg-navy-900">Charter Flight Request</option>
                      <option value="flight-calibration" className="bg-navy-900">Flight Calibration Services</option>
                      <option value="cabin-repair" className="bg-navy-900">Cabin & Interior Repair</option>
                      <option value="aero-sense" className="bg-navy-900">Aero-Sense Chemicals</option>
                      <option value="arms" className="bg-navy-900">Aviation Resource Management</option>
                      <option value="aog" className="bg-navy-900">AOG Support</option>
                      <option value="general" className="bg-navy-900">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/60 mb-1">Message *</label>
                    <textarea
                      id="message" required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="relative">
        <div className="h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5!2d58.371601!3d23.587854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzE2LjMiTiA1OMKwMjInMTcuOCJF!5e0!3m2!1sen!2som!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aeroman Aviation Office Location"
          />
        </div>
      </section>
      {/* Client Carousel */}
      <ClientCarousel />
    </>
  );
}
