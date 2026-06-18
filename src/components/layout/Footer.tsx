import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, navLinks, socialLinks } from "../../data/content";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              className="mb-4 h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm font-semibold text-teal-light">
              {company.legalName}
            </p>
            <p className="mt-2 text-sm text-white/60">{company.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-teal">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-teal-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-teal">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {company.address}
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-teal-light"
                >
                  <Phone className="h-4 w-4 text-teal" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-teal-light"
                >
                  <Mail className="h-4 w-4 text-teal" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-teal">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:bg-teal hover:text-white"
                  aria-label={social.platform}
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {company.name} {company.legalName}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            {company.name} | Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
