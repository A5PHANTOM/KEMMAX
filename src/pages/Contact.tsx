import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { company, contactForm } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ContactForm } from "../components/ui/ContactForm";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function Contact() {
  usePageMeta({
    title: "Contact KEMMAX",
    description:
      "Contact KEMMAX today for a free consultation and quote. Our team is ready to engineer the right controlled environment for your facility.",
  });

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,158,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
          >
            {contactForm.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-2xl glass-light p-8 md:p-10">
                <SectionHeader
                  title={contactForm.title}
                  subtitle={contactForm.subtitle}
                  centered={false}
                />

                <ContactForm productOptions={contactForm.productOptions} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: company.phone,
                    href: `tel:${company.phone}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: company.email,
                    href: `mailto:${company.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: company.address,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl glass-light p-6 transition-all hover:glow-teal"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-teal/10 p-3">
                        <item.icon className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-navy/40">
                          {item.label}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-navy/80 transition-colors hover:text-teal"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-navy/80">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-6 text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <h3 className="font-display font-bold">WhatsApp Us</h3>
                    <p className="text-sm text-white/80">{company.phone}</p>
                  </div>
                </a>

              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="KEMMAX Office Location"
                src={company.mapEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
