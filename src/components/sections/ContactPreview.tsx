import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { company } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function ContactPreview() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Contact Us"
          subtitle="Reach out to discuss your clean room project requirements."
        />

        <div className="grid gap-8 md:grid-cols-3">
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
              label: "Location",
              value: company.address,
              href: "/contact",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1} className="h-full">
              <a
                href={item.href}
                className="group flex h-full flex-col rounded-2xl glass-light p-8 transition-all duration-300 hover:scale-[1.02] hover:glow-teal"
              >
                <div className="mb-4 inline-flex self-start rounded-xl bg-teal/10 p-3">
                  <item.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-navy/40">
                  {item.label}
                </h3>
                <p className="mt-2 flex-grow text-navy/80">{item.value}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
          >
            View Full Contact Page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
