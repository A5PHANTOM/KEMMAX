import {
  Scale,
  Crosshair,
  Lightbulb,
  Handshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { about, industries, company } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { CTABanner } from "../components/sections/CTABanner";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const valueIconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  handshake: Handshake,
  crosshair: Crosshair,
  scale: Scale,
  lightbulb: Lightbulb,
};

const springUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 18, delay: i * 0.12 },
  }),
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -4,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
};

export function About() {
  usePageMeta({
    title: "About KEMMAX",
    description:
      "KEMMAX is a specialist cleanroom solutions company dedicated to delivering controlled environments that meet the highest standards of cleanliness, safety, and regulatory compliance.",
  });

  const { scrollYProgress } = useScroll();
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <motion.div style={{ opacity: gradientOpacity }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,158,0.12),transparent_60%)]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,168,158,0.06),transparent_50%)]"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            About {company.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
          >
            Engineering controlled environments since{" "}
            {company.yearEstablished}.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader badge="Our Story" title="Company Overview" />
          <div className="mx-auto max-w-4xl space-y-6">
            {about.overview.map((paragraph, i) => (
              <motion.div
                key={i}
                variants={springUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true, margin: "-40px" }}
              >
                <p className="text-lg leading-relaxed text-navy/70">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {about.stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <AnimatedCounter
                  value={stat.value}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              whileHover="hover"
              variants={cardHover}
            >
              <div className="rounded-2xl glass-light p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal">
                  Our Vision
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                  Looking Forward
                </h3>
                <p className="mt-4 leading-relaxed text-navy/70">
                  {about.vision}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.15 }}
              whileHover="hover"
              variants={cardHover}
            >
              <div className="rounded-2xl bg-teal p-8 text-white md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Our Mission
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  What Drives Us
                </h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  {about.mission}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader
            badge="Values"
            title="Core Values"
            subtitle="The principles that guide every project we undertake."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {about.values.map((value) => {
              const Icon = valueIconMap[value.icon] || Scale;
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="h-full rounded-2xl bg-white p-6 text-center shadow-lg shadow-navy/5 transition-shadow hover:shadow-xl hover:shadow-teal/10">
                    <div className="mx-auto mb-4 inline-flex rounded-xl bg-teal/10 p-3">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy/60">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader
            badge="Expertise"
            title="Industry Expertise"
            subtitle="Specialized clean room solutions tailored to each sector's unique requirements."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={staggerItem}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="rounded-2xl glass-light p-6 transition-shadow hover:shadow-lg hover:shadow-teal/5">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
