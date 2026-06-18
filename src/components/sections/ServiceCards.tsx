import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  PenTool,
  Cog,
  ClipboardCheck,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { services } from "../../data/content";

const serviceIconMap: Record<string, LucideIcon> = {
  Design: PenTool,
  Engineering: Cog,
  Commissioning: ClipboardCheck,
  HVAC: Thermometer,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function ServiceCards() {
  return (
    <section className="relative z-20 -mt-20 pb-12 md:-mt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = serviceIconMap[service.title] || Cog;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative h-full rounded-2xl glass-light p-8 transition-all duration-300 hover:glow-teal"
              >
                <div className="absolute top-0 left-8 h-1 w-14 rounded-full bg-teal" />
                <div className="mb-5 inline-flex rounded-xl bg-teal/10 p-3">
                  <Icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal">
                  {service.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">
                  {service.description}
                </p>
                <div className="mt-6 pt-4 border-t border-navy/5">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
