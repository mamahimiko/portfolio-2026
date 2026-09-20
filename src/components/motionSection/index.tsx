import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionMotionProps = {
  children: ReactNode;
};

const MotionSection = ({ children }: SectionMotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
