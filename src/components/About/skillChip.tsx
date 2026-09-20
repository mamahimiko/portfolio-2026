import { motion } from "motion/react";
import type { skillType } from "../../type/type";

const SkillChip = ({ id, skill }: skillType) => {
  return (
    <motion.div
      whileHover={{ y: -4, rotate: id % 2 === 0 ? -2 : 2, scale: 1.1 }}
      className="relative inline-block"
    >
      <div
        className={`absolute bg-main-blue top-0.5 left-0.5 z-10 p-1 w-full h-full ${id % 2 == 0 ? "rotate-2" : "-rotate-2"}`}
      />
      <div
        className={`relative border-2 border-main-blue bg-white hover:bg-main-blue text-main-blue hover:text-navy-foreground font-bold p-1.25 z-50 ${id % 2 == 0 ? "rotate-2" : "-rotate-2"}`}
      >
        <div className="">
          <p className="text-sm">{skill}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillChip;
