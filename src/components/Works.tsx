import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectT, projects } from "../constant";
import { Tilt } from "react-tilt";

import { eye, github } from "../assets";

type ProjectCardProps = {
  project: ProjectT;
  index: number;
};
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="relative w-full h-[350px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className=" absolute inset-0 flex justify-end m-3 card-image_hover gap-3">
            <div
              onClick={() => {
                window.open(project.source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(project.liveUrl, "_blank");
              }}
              className="bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={eye}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="text-secondary mt-2 text-[14px]">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "tween", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I work as a developer, mainly using ReactJS for the front-end and
          NestJS for the back-end. In my projects, I build interactive user
          interfaces and manage application states efficiently with React. On
          the server side, I use NestJS to create robust APIs, which help in
          connecting my applications with databases and other services. I often
          implement authentication, authorization, and real-time features. My
          projects focus on scalability and ensure high performance across both
          the front-end and back-end.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
