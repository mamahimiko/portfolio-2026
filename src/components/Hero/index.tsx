import { motion } from "motion/react";
import MotionLine from "../MotionLine";

const Hero = () => {
  return (
    <div className="h-[85vh] flex flex-col justify-center md:p-20 ">
      <div className="">
        <p className="text-main-blue text-sm font-bold tracking-widest uppercase font-title underline decoration-accent-gray decoration-3">
          <span className="text-main-pink text-lg">✦</span>Portfolio - 2026
        </p>
      </div>
      <div className="text-text-main text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold p-2 tracking-tighter leading-[1.1] max-w-300 font-title">
        Hi, Hej, こんにちは! <br />
        <motion.a
          whileHover={{ scale: 1.1, rotate: -5 }}
          href="#about"
          className="inline-block bg-main-pink text-white hover:bg-main-blue"
        >
          I'm Maho
        </motion.a>
        , <MotionLine>a frontend engineer</MotionLine><span className="px-1.5"> with a </span>
        <MotionLine>full-stack perspective</MotionLine><span className="px-1.5"> and a background in </span>
        <MotionLine>EC sales</MotionLine>. <br /><span className="pr-1.5">I make ideas</span>
        <motion.a
          whileHover={{ scale: 1.1, rotate: -5 }}
          href="#project"
          className="inline-block bg-main-pink text-white hover:bg-main-blue"
        >
          work on the web
        </motion.a>
        <span className="text-main-blue text-xl md:text-3xl"> ✦ </span>
      </div>
    </div>
  );
};
export default Hero;
