import { skillList } from "../../data/data";
import Button from "../Button";
import MotionTitle from "../MotionTitle";
import SubtitleChip from "../SubtitleChip";
import PhotoFrame from "./photoFrame";
import SkillChip from "./skillChip";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row justify-center gap-2 lg:gap-15 text-text-main section section-container"
    >
      <div className="md:hidden">
        <SubtitleChip subtitle="A little about me" />
        <h2 className="title">
          About <MotionTitle>Me</MotionTitle>
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <PhotoFrame />
        <div className="py-10 md:py-20">
          <Button />
        </div>
      </div>
      <div className="max-w-150">
        <div className="hidden md:block">
          <SubtitleChip subtitle="A little about me" />
          <h2 className="title">
            About <MotionTitle>Me</MotionTitle>
          </h2>
        </div>
        <p className="">
          I’m a frontend engineer currently studying frontend development at
          Futuregames. I’m highly motivated and passionate about TypeScript,
          JavaScript, React, and Next.js. With a background in marketing, I
          enjoy bridging the gap between design and development — turning ideas
          into interactive, meaningful user experiences.
        </p>
        <div className="py-10">
          <div className="flex  items-center gap-3 py-3">
            <p className="uppercase whitespace-nowrap tracking-wide text-main-blue font-bold font-title">
              Tech Stuck
            </p>
            <span className="flex-1 border border-dashed border-main-blue"></span>
            <span className="text-main-pink text-lg rotate-15">✦</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillList.map((item) => (
              <SkillChip key={item.id} skill={item.skill} id={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
