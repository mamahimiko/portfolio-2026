import { contactList } from "../../data/data";
import MotionTitle from "../MotionTitle";
import SubtitleChip from "../SubtitleChip";
import ContactCard from "./contactCard";

const Contact = () => {
  return (
    <div className="flex justify-center section">
      <div className="relative w-90 md:w-150 lg:w-250">
        <div className="absolute top-3 left-3  w-full h-full bg-main-blue" />
        <div className="border-2 p-10 bg-white relative z-10">
          <div className="flex justify-center">
            <SubtitleChip subtitle={"Get in touch!"} />
          </div>
          <div className="p-4">
            <h2 className="text-center title">
              <MotionTitle>Contact</MotionTitle>
            </h2>
          </div>
          <div className="pb-6 text-center">
            <p className="font-text">
              Get in touch for opportunities or just to say hi!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:justify-around gap-5 items-center py-4">
            {contactList.map((item) => (
              <ContactCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
