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
  portsniffer,
  threejs,
  fastapi,
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
    title: "Full Stack Web Developement",
    icon: web,
  },
  {
    title: "Cloud Solutions & Virtualization",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Configuration & IaC Automation",
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
    title: " Web Developer Intern",
    company_name: "WASHAPP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2022",
    points: [
"Designed, developed, and deployed a website using JavaScript, PHP, and Secure deployment methods.",
      "Collaborated with cross-functional teams to gather requirements for the website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created dynamic web experiences to enhance userinteractions.",
    ],
  },
  {
    title: "Symfony Web Developer",
    company_name: "SOFTODO",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - Aug 2021",
    points: [
      "Gained invaluable insights into the unique needs and expectations of the German market while working as a Symfony Developer",
      "Adhered to coding standards to ensure high-quality Symfony solutions",
    ],
  },
  {
    title: " Full Stack Developer Intern",
    company_name: "AMEN BANK",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2021 - June 2021",
    points: [
      "Involved in end-to-end development at Amen Bank, covering various aspects of the development process.",
      "Implemented front-end functionalities using Angular, Developed the back-end using Spring Boot and Deployed a PostgreSQL database to Azure..",
      "containerized the digital bank platform using docker.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Engineering degre in Computer Science specializing in Cloud Technologies and IT architecture.",
    name: "Esprit School Of Engineering",
    designation: "Present",
    company: "",
  },
  {
    testimonial:
      "Licence in Computer Science fundamentals & Multimedia",
    name: "ISAMM ",
    designation: "2021",
    company: "2018",
  },
  {
    testimonial:
      "Baccalauréate in Computer Science",
    name: "Hammam-Lif High School",
    designation: "2018",
    company: "",
  },
];

const projects = [
  {
    name: "END-TO-END DEPLOYMENT OF A SCALABLE APP",
    description:
    "I orchestrated the end-to-end deployment of a scalable Spring Boot and Angular app on OpenStack using Docker and Kubernetes. This involved designing a private cloud infrastructure and ensuring seamless management and scalability of the application."
    ,tags: [
      {
        name: "OpenStack",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
  
    ],
    image: carrent,
    source_code_link: "https://github.com/khalilrez/cloud9Front",
  },
  {
    name: "Virtualized Entreprise Network",
    description:
      "esigned secure virtual network using pfSense and LinuxVMs. Set up CentOS servers, SSH,OpenVPN.",
    tags: [
      {
        name: "SSH",
        color: "blue-text-gradient",
      },
      {
        name: "OpenVPN",
        color: "green-text-gradient",
      },
      {
        name: "CentOs",
        color: "pink-text-gradient",
      },
      {
        name: "Apache",
        color: "blue-text-gradient",
      },
      {
        name: "PfSense",
        color: "green-text-gradient",
      },
      {
        name: "IDS/IPS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "#",
  },
  {
    name: "CRYFTY: NFT & CRYPTO MARKETPLACE",
    description:
      "Cryfty is a platform emulating an NFT marketplace and cryptocurrency trading built for multiple platforms using Symfony , JavaFX and CodeNameOne.",
    tags: [
      {
        name: "Symfony",
        color: "blue-text-gradient",
      },
      {
        name: "Java FX",
        color: "green-text-gradient",
      },
      {
        name: "CodeNameOne",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/khalilrez/CryftyWeb",
  },

  {
    name: "  CLI PORT SNIFFER IN RUST",
    description:
      "command-line tool allows you to scan a host for open ports. It utilizes multithreading to enhance the scanning performance.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "IPv4",
        color: "green-text-gradient",
      },
      {
        name: "Multi-Threading",
        color: "pink-text-gradient",
      },
    ],
    image: portsniffer,
    source_code_link: "https://github.com/khalilrez/port_sniffer",
  },
  {
    name: "Food Log API",
    description:
      "This is a simple API that allows users to log their food entries and track their daily caloric intake. The API supports creating, updating, and deleting food entries, as well as retrieving a user's food log and displaying it in an HTML format.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: fastapi,
    source_code_link: "https://github.com/khalilrez/food-log-api",
  },
];

export { services, technologies, experiences, testimonials, projects };
