import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Node JS Developer",
    icon: backend,
  },
  {
    title: "Software Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "React JS",
    icon: reactjs,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Android",
    icon:mobile,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Creating Sustaining Mbile Applications for Android utilizing technologies such as Java/Kotlin.",
      "Working closely with  groups, including UX/UI designers, product managers, and fellow developers, to produce top-notch mobile solutions.",
      "Integrating adaptive layouts to guarantee seamless user experiences across various Android devices and screen sizes.",
      
    ],
  },
  {
    title: "Node JS Developer",
    company_name: "Node",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      
      "Crafting and nurturing web applications through the power of Node.js and Express.js, in conjunction with a suite of complementary technologies",
      "Fostering collaboration across teams, including creative designers,  and fellow dedicated developers, to forge remarkable end products.",
      "meticulously validating cross-browser and cross-device compatibility for a polished user experience.",
    ],
  },
  {
    title: "Software Design",
    company_name: "Software Design",
    icon:redux,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Shaping software solutions through meticulous design and architecture considerations that align with industry best practices and project requirements.",
      "Collaborating seamlessly with cross-disciplinary teams, including user experience experts, product visionaries, and development teams, to translate ideas into well-orchestrated software designs",
      "Evaluating design options critically and making informed decisions that optimize for performance, user experience, and long-term viability",
      "Documenting design principles, patterns, and decisions comprehensively, empowering developers and stakeholders to align their efforts and make informed contributions."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've rarely encountered a web developer who demonstrates a genuine commitment to their clients' success, quite like him",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rental Website",
    description:
      "A Website platform that allows users to search, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Website",
    description:
      "Online retail hub providing users with the capability to discover merchandise, access premier categories, ascertain price ranges for specific items",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Property Selling Platform",
    description:
    "An inclusive real estate selling platform enabling users to list properties for sale, connect with potential buyers with desirable  locations",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
