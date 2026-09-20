import { motion } from "motion/react";
import type { contactListType } from "../../type/type";

const ContactCard = ({ id, title, contact, display }: contactListType) => {
  return (
    <motion.div
      whileHover={{ rotate: id % 2 === 0 ? -2 : 2 }}
      className="relative"
    >
      <div
        className={`absolute bg-main-pink w-70 h-40 -z-50 top-2 left-2 ${id % 2 == 0 ? "rotate-2" : "-rotate-2"}`}
      />
      <div
        className={`border-2 w-70 h-40 flex flex-col items-center justify-center gap-5 bg-bg-beige z-50 ${id % 2 == 0 ? "rotate-2" : "-rotate-2"}`}
      >
        <h3 className="font-title">{title}</h3>
        <a
          href={contact}
          target="_blank"
          className="text-main-blue font-bold hover:text-gray-500"
        >
          {display}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;
