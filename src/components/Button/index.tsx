import { motion } from "motion/react";
import { MdFileDownload } from "react-icons/md";

const Button = () => {
  return (
    <motion.div
      whileHover="hover"
      className="relative inline-block font-title text-sm"
    >
      <motion.div
        variants={{
          hover: {
            scale: 0.97,
            rotate: -2,
          },
        }}
        className="absolute bg-black top-1 left-1 w-full h-full rounded-md rotate-2"
      />
      <motion.a
        whileHover={{ rotate: -2 }}
        href="/Resume_Maho_Kurauchi.pdf"
        target="_blank"
        className="relative bg-main-blue flex py-3 px-5 rounded-md text-navy-foreground border-2 border-black rotate-2"
      >
        <motion.div
          variants={{ hover: { y: 2 } }}
          className="flex items-center"
        >
          <MdFileDownload />
        </motion.div>
        <p className="uppercase border-r-2 border-dashed px-2 tracking-wider">
          download cv
        </p>
        <p className="px-2 text-muted-gray text-xs flex items-center">PDF</p>
      </motion.a>
    </motion.div>
  );
};

export default Button;
