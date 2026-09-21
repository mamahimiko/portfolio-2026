import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { projectType } from "../../type/type";
import { motion } from "motion/react";

const ProjectCard = ({
  image,
  date,
  name,
  description,
  skills,
  website,
  github,
}: projectType) => {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
        y: -2,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="text-text-main border-3 border-dashed border-accent-gray h-180 w-95 rounded-2xl bg-white hover:border-pink-500 hover:border hover:border-solid"
    >
      <div
        className="h-70 bg-cover bg-center  rounded-t-2xl"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "120%" }}
      ></div>
      <div className="bg-white p-5">
        <div className="py-3">
          <p className="text-text-muted uppercase font-bold text-sm">{date}</p>
          <h3 className="text-xl font-bold font-title">{name}</h3>
        </div>
        <div className="font-text">{description}</div>
        <div className="flex gap-3 py-5">
          <div className="group relative">
            <div className="absolute top-1 left-1 w-full h-full rounded-full bg-main-blue group-hover:bg-main-pink transition-colors duration-300 " />
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex p-2 border-2 border-main-blue rounded-full bg-white text-main-blue z-10 group-hover:bg-main-pink group-hover:text-white transition-colors duration-300 "
            >
              <FiExternalLink />
            </a>
          </div>

          <div className="group relative">
            <div className="absolute top-1 left-1 w-full h-full rounded-full bg-main-blue group-hover:bg-main-pink transition-colors duration-300 " />

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex p-2 border-2 border-main-blue rounded-full bg-white text-main-blue z-10 group-hover:bg-main-pink group-hover:text-white  transition-colors duration-300 "
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div className="relative">
              <div
                key={skill}
                className="rounded-3xl bg-muted-gray text-text-muted text-xs p-2 font-bold"
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
