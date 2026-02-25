/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educations } from "../constant";

const EducationCard = ({ education }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.school}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.school}
        </p>
        {education?.studentId && (
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            StudentId: {education?.studentId}
          </p>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

function Education() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Study Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "tween", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've completed undergraduate in computer science
        </motion.p>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
export default SectionWrapper(Education, "education");
