import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollPageProps {
  children: ReactNode;
}

export function ScrollPage({ children }: ScrollPageProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track the scroll position of this section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth slide-up parallax translation
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [100, 0, 0, -80]);

  // Smooth scale-up for depth card/page look
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.92, 1, 1, 0.95]);

  // Smooth fade transition for entry and exit
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className="origin-center will-change-transform"
    >
      {children}
    </motion.div>
  );
}
