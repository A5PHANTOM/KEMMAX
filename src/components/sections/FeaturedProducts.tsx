import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { featuredProducts } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export function FeaturedProducts() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge="Products"
          title="Featured Solutions"
          subtitle="Engineered products designed for critical clean room environments."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={staggerItem} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal/10">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
                    {product.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-teal px-8 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
