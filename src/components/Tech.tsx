import { technologies } from "../constant";
import { SectionWrapper } from "../hoc";
import { TechCard } from "./TechCard";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          {/* <BallCanvas icon={tech.icon} /> */}
          <TechCard icon={tech.icon} label={tech.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
