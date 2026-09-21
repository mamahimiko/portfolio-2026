import ProfileImg from "/public/profile-color.jpeg";
import tape from "/public/tape.png";
import { motion } from "motion/react";

const PhotoFrame = () => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={{ hover: { rotate: 2 } }}
      transition={{ duration: 0.3 }}
      className="relative -rotate-2"
    >
      <img
        src={tape}
        alt="tape"
        className="absolute w-30 -top-13 left-16 sm:left-30 rotate-100 z-60"
      ></img>
      <div className="relative border-2 border-black w-60 h-80 sm:w-90 sm:h-110 p-4 bg-white z-50">
        <div className="w-50 h-60 sm:w-80 sm:h-90  overflow-hidden">
          <motion.img
            variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
            transition={{ duration: 0.5 }}
            src={ProfileImg}
            alt="Maho profile"
            className="w-full h-full object-cover border-2"
          ></motion.img>
        </div>
      </div>
      <div className="absolute h-80 w-60 sm:h-110 sm:w-89 bg-main-pink top-3 left-3 z-10"></div>
    </motion.div>
  );
};

export default PhotoFrame;
