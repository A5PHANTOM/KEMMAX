import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "../../data/content";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})`, y: bgY }}
        role="img"
        aria-label="Clean room facility background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,158,0.15),transparent_60%)]" />

      <motion.div style={{ y: contentY }} className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-48 text-center md:px-8 md:pt-40 md:pb-52">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {hero.headline.split(". ").map((part, i) => (
            <span key={part} className={i === 1 ? "text-gradient-teal" : ""}>
              {part}
              {i < hero.headline.split(". ").length - 1 ? ". " : ""}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10"
        >
          <Link to="/contact">
            <Button variant="primary" className="px-8 py-4 text-base">
              {hero.cta}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {hero.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <GlassCard variant="dark" className="text-center">
                <div className="font-display text-2xl font-bold text-teal-light">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/60">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
