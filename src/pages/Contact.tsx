import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { company, contactForm } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function Contact() {
  usePageMeta({
    title: "Contact KEMMAX",
    description:
      "Contact KEMMAX today for a free consultation and quote. Our team is ready to engineer the right controlled environment for your facility.",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        }
      } catch {
        window.location.href = `mailto:${company.email}?subject=KEMMAX Enquiry&body=${encodeURIComponent(
          `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone")}\nCompany: ${formData.get("company")}\nProduct: ${formData.get("product")}\nMessage: ${formData.get("message")}`,
        )}`;
      }
    } else {
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const companyName = formData.get("company");
      const product = formData.get("product");
      const message = formData.get("message");
      window.location.href = `mailto:${company.email}?subject=KEMMAX Enquiry from ${name}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${companyName}\nProduct Interest: ${product}\n\nMessage:\n${message}`,
      )}`;
      setSubmitted(true);
    }

    setLoading(false);
  };

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

                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-teal" />
                    <h3 className="mt-4 font-display text-xl font-bold text-navy">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-navy/60">
                      Your message has been sent. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-navy/70"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-navy/70"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-navy/70"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-sm font-medium text-navy/70"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="product"
                        className="mb-1.5 block text-sm font-medium text-navy/70"
                      >
                        Product Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                      >
                        <option value="">Select a product</option>
                        {contactForm.productOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-navy/70"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-none rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
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
