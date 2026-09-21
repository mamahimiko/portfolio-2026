import { motion } from "framer-motion";
import { textAnimation } from "../../data/data";
import { Fragment } from "react/jsx-runtime";

export const MarqueeText = () => {
  const items = [
    ...textAnimation,
    ...textAnimation,
    ...textAnimation,
    ...textAnimation,
    ...textAnimation,
    ...textAnimation,
  ];
  return (
    <div className="relative -rotate-1">
      <div className="absolute h-15 lg:h-20 bg-main-pink w-full top-1 " />
      <div className="relative flex items-center h-15 lg:h-20 bg-main-blue  overflow-hidden border-y-2">
        <motion.div
          animate={{ x: ["0%", "-10%"] }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max items-center whitespace-nowrap"
        >
          <div className="items-center">
            {items.map((text, i) => (
              <Fragment key={i}>
                <span className="text-navy-foreground px-10 font-bold text-xl font-title uppercase tracking-widest">
                  {text}
                </span>
                {i % textAnimation.length === textAnimation.length - 1 ? (
                  <span>🍣</span>
                ) : (
                  <span className="text-lg text-main-pink">✦</span>
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeText;
