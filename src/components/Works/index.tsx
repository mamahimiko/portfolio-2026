import { data } from "../../data/data";
import MotionTitle from "../MotionTitle";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <div id="project" className="section ">
      <div className="section-container">
        <h2 className="title">
          <MotionTitle>Projects</MotionTitle>
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {data &&
            data.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
