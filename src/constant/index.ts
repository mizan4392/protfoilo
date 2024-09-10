import {
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  reactJs,
  nestJs,
  rokkhi,
  sciTech,
  mySql,
  postgressSql,
  firBase,
  graphQl,
  easyfood,
  x,
  diu,
  saclg,
} from "../assets";

export type Tag = {
  name: string;
  color: string;
};

export type ProjectT = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-stack Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: reactJs,
  },
  {
    title: "NestJS Developer",
    icon: nestJs,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nestJs,
  },
  {
    name: "MySql",
    icon: mySql,
  },
  {
    name: "PstgressSql",
    icon: postgressSql,
  },
  {
    name: "Firebase",
    icon: firBase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphQl,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "SciTech Academy",
    icon: sciTech,
    iconBg: "#E6DEDD",
    date: "June 2020 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing APIs for the frontend data and integrating with frontend.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Rokkhi It Solutions Ltd.",
    icon: rokkhi,
    iconBg: "#383E56",
    date: "December 2019 - May 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EasyFood",
    description:
      "Web-based platform that allows users to search, Order or book restaurant from various providers, providing a convenient and efficient solutions",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Auth0",
        color: "pink-text-gradient",
      },

      {
        name: "NestJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: easyfood,
    source_code_link: "https://github.com/mizan4392/easyfood",
    liveUrl: "https://easyfood-7iwa.onrender.com",
  },
  {
    name: "X.com",
    description:
      "Basic X clone(twitter clone) with basic functionality like post, like, comment, follow, unfollow, etc.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: x,
    source_code_link: "https://github.com/mizan4392/x.com",
    liveUrl: "https://x-8ecanwetm-mizans-projects-6ebeed28.vercel.app/",
  },
];

const educations = [
  {
    degree: "Bachelor of  Computer Science",
    school: "Daffodil International University",
    date: "2016 - 2020",
    icon: diu,
    iconBg: "#E6DEDD",
    studentId: "164-15-8164",
  },
  {
    degree: "Higher Secondary  Certificate",
    school: "Chowmuhani govt. S A college",
    date: "2013 - 2015",
    icon: saclg,
    iconBg: "#E6DEDD",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
};
