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
  bootstrap,
  firebase,
  // home,
  // dash,
  // teslas,
  // port
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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Science And Analytics ",
    icon: backend,
  },
  {
    title: "Software Design And Engineering",
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
    name: "Bootstrap",
    icon:   bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: firebase,
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
    title: "MERN Stack Intern",
    company_name: "FastDev Labs",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Full-fledged React Front End: I was tasked with crafting the complete front-end of a website using React JS. This project honed my skills in creating dynamic, responsive, and user-friendly web interfaces",
      "Tailored React Page: I had the opportunity to design and develop a custom page for a website using React. This project allowed me to showcase my creativity and fine-tune my React expertise.",
      "Blogging Platform: Collaborating on a blogging platform was a rewarding experience. It provided me with insights into content management and further enriched my knowledge of full-stack development. This project not only enhanced my technical skills but also deepened my appreciation for user-friendly content platforms.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Contract.PK ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Developed Landing Pages using React JS",
      "Learned About States,Props,Class and Functional Components and Conditionals",
      "Used MUI for Components",
      "Developed Weather App using Open Weather Map API",
      "Learned Tailwind CSS for Rapid Page Design",
      "Developed a Website for Law Firm and hosted the website"
    ],
  },
  {
    title: "Digital Systems Intern",
    company_name: "FFC MM PLANT SITE-III",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2022 - Aug 2022",
    points: [
"Week 1 :HTML , CSS ,Bootstrap and Tailwind",
"Week 2 :Networking including the working of Data Centers, Routers, Switches and Firewalls", 
"Week 3 :Project Managment Skills including Scope Schedule and Cost of a Development Project", 
"Week 4 :SAP Modules to Synchronize and Manage Business Operations and Customer Relations"


    ],
  },
  {
    title: "BS Computer Science",
    company_name: "FAST National University of Computer and Emerging Sciences",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - June-2024",
    points: [
     
      "Core Courses",
      "Programming Fundamental (PF)",
       "Object Oriented Programming (OOP)",
      
"Data Structures",

"Database Systems",


"Design and Analysis of Algorithms",


"Operating Systems",



"Parallel and Distributed Computing",
"Software Design and Analysis",

"Data Science",
"Software Engineering",  
"Software for Mobile Devices",
"Fundamentals of Software Project Management",
"Fundamentals of Computer Vision",

    ],
  },
];

const testimonials = [
  
  {
    testimonial:     
      "I  highly recommend Shahzaib based on his outstanding performance His ability to adapt to new challenges and learn quickly was particularly commendable",
    name: "Fazeel Khalid",
    designation: "Software Engineer",
    company: "Fast Dev",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Shahzaib Shafiq was working here as Internee in FFC. I found him very tenanted and focused. He has proved himself as a good software developer.",
    name: "Lisa Wang",
    designation: "Network Engineer",
    company: "FFC PlantSite-III",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Student Support And Navigation App(FYP)",
    description:
      "The App provides seamless operations by handling bus routes, faculty info, course data, University announcements, Upcoming events and senior guidance portal",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Data Analysis of Imtiaz Mall Electronics Sales",
    description:
      "Comprehensive Data Analysis of Imtiaz Mall electronics data which include data cleaning, data  transformation ,  data  analysis with k-means and DB Scan",
    tags: [
      {
        name: "Data Cleaning",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      {
        name: "K-means",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Airport Management System",
    description:
      "Airport Management System Used To Manage All the Airport Opreations including booking , flight Schedule ,Arrivals,Departures using C# with Oracle  Database(SQL)",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Oracle",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Airport Management System",
    description:
      "Airport Management System Used To Manage All the Airport Opreations including booking , flight Schedule ,Arrivals,Departures using C# with Oracle  Database(SQL)",
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
  {
    name: "Airport Management System",
    description:
      "Airport Management System Used To Manage All the Airport Opreations including booking , flight Schedule ,Arrivals,Departures using C# with Oracle  Database(SQL)",
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
  {
    name: "Airport Management System",
    description:
      "Airport Management System Used To Manage All the Airport Opreations including booking , flight Schedule ,Arrivals,Departures using C# with Oracle  Database(SQL)",
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