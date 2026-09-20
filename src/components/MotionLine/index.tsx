import { motion } from "motion/react";
import type { ReactNode } from "react";

type MotionLineProps = {
  children: ReactNode;
};

const MotionLine = ({ children }: MotionLineProps) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 10px" }}
      whileInView={{ backgroundSize: "100% 10px" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: "linear-gradient(var(--color-main-blue, )",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
      }}
      className="inline"
    >
      {children}
    </motion.span>
  );
};

export default MotionLine;
