import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiTypescript } from "react-icons/si";

const techStack = [
  { Icon: FaReact, color: "#61DBFB" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiNestjs, color: "#E0234E" },
  { Icon: FaNodeJs, color: "#3C873A" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: FaGithub, color: "#ffffff" },
];

export default function TechBubbles() {
  return (
    <div className="relative w-[400px] h-[400px] hidden md:block top-[50%]">
      {techStack.map((item, index) => (
        <motion.div
          key={index}
          className="absolute bg-white/5 backdrop-blur-md 
                     border border-white/10 
                     p-5 rounded-full 
                     shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4 + index,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + index * 50}px`,
            left: `${60 + (index % 3) * 100}px`,
          }}
        >
          <item.Icon size={34} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
}
