import { motion } from "motion/react";
import type { ReactNode } from "react";

type MotionTitleProps = {
  children: ReactNode;
};

const MotionTitle = ({ children }: MotionTitleProps) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100px" }}
      whileInView={{ backgroundSize: "100% 100px" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: "linear-gradient(var(--color-main-pink, )",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
      }}
      className="inline px-2"
    >
      {children}
    </motion.span>
  );
};

export default MotionTitle;
