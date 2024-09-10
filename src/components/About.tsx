import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { services } from "../constant";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

type ServiceCardProps = {
  service: {
    title: string;

    icon: string;
  };
  index: number;
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient rounded-[20px] p-1 shadow-card "
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] text-center font-bold">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>OverView</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a self-motivated, responsible and quick learner, seeking for such a
        professional environment where have a dynamic and challenging task
        through which I can enhance my skills to prove the best of my ability in
        achieving the objective of the career. Try to lean new programming
        languages & Love to explore new tools & technologies.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
