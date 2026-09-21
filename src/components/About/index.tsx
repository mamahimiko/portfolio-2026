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
      className="mt-10 flex flex-col lg:flex-row justify-center gap-2 lg:gap-15 text-text-main section section-container"
    >
      <div className="lg:hidden">
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
        <div className="hidden lg:block">
          <SubtitleChip subtitle="A bit of background" />
          <h2 className="title py-2">
            About <MotionTitle>Me</MotionTitle>
          </h2>
        </div>
        <article className="py-4">
          <h4 className="font-title text-lg text-main-blue">
            <span className="text-main-pink text-lg">✦</span> Hi, I'm Maho
            Kurauchi
          </h4>
          <p className="font-text">
            I spent about 10 years in Japan working in sales and business
            development at a fashion e-commerce company and a news agency.
            Throughout my career, I've been guided by one question: How can I
            create experiences that truly satisfy customers?
          </p>
        </article>
        <article>
          <h4 className="font-title text-lg text-main-blue">
            <span className="text-main-pink text-lg">✦</span> Currently
          </h4>
          <p className="font-text">
            I'm now based in Stockholm, studying frontend development at
            Futuregames since 2025, while also working as a freelance Shopify
            developer for a Japanese company. When building digital experiences,
            I always ask myself: "How can I present this so users find it fun?"
            I'm especially drawn to interactive experiences and enjoy exploring
            new technologies. In team projects, I take initiative, communicate
            with others, and focus on what needs to be done. I enjoy turning
            ideas into responsive, interactive web experiences using React,
            Next.js, and TypeScript.
          </p>
        </article>
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
