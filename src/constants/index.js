import {
  mobile,
  backend,
  creator,
  web,
  jenkins,
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
  calculator,
  medimmo,
  sysadmin,
  etl,
  utilities,
  cpp

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
    name: "Kubernetes",
    icon: html,
  },
  {
    name: "Linux",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Spring",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ELK Stack",
    icon: redux,
  },
  {
    name: "CI/CD",
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
    name: "PostgreSQL",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Angular",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software/Cloud Engineer",
    company_name: "Amen Bank",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Full-stack developement/re-modeling of an e-bank with Angular and Express.",
      "Containerization and deployment of the application with Docker and Kubernetes.",
      "Github Actions pipeline to automate the build and push process of the application.",
    ],
  },
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
    name: "Custom Linux System from the Ground Up ",
    description: "Installed and configured Arch Linux from scratch: Mastered the command-line installation process, partitioning, bootloader configuration, and package management with pacman.\
    Craft a personalized system: Chose and configured a desktop environment (GNOME) to match my workflow, set up essential services like web servers, databases, and mail servers, and implemented security hardening measures.\
    Troubleshoot and maintain: Developed problem-solving skills that address common issues and kept my system running smoothly."
    ,tags: [
      {
        name: "Arch Linux",
        color: "blue-text-gradient",
      },
      {
        name: "System Administration",
        color: "green-text-gradient",
      },
      {
        name: "Linux Kernel",
        color: "pink-text-gradient",
      },
      {
        name: "Package Management",
        color: "blue-text-gradient",
      },
      {
        name: "Network Configuration",
        color: "green-text-gradient",
      },
      {
        name: "Desktop Environment",
        color: "green-text-gradient",
      },
      {
        name: "Troubleshooting",
        color: "green-text-gradient",
      }
    ],
    image: sysadmin,
    source_code_link: "https://i.redd.it/52pbehnz61161.png",
  },
  {
    name: "Basic C++  Hashing Authentication System ",
    description: "Simple Console-Based Authentication System , basic user authentication program implemented in C++. This console application allows users to register new accounts, securely store hashed passwords, and log in using a straightforward text file-based authentication mechanism."
    ,tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Authentication",
        color: "green-text-gradient",
      },
      {
        name: "Hashing Algorithms",
        color: "pink-text-gradient",
      },
      {
        name: "File manipulation",
        color: "blue-text-gradient",
      },
      {
        name: "DJB2",
        color: "green-text-gradient",
      }
    ],
    image: cpp,
    source_code_link: "https://github.com/khalilrez/cpp-hashing-authentication-system",
  },
  {
    name: "Python Utility Scripts ",
    description: "This project consists of a collection of Python utility scripts designed to perform various tasks and functions to enhance efficiency and automate common activities. Each script focuses on a specific task and can be used independently or as part of a larger workflow.."
    ,tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: utilities,
    source_code_link: "https://github.com/khalilrez/python-utilities",
  },
  {
    name: "ETL to Data visualization dashboard & Container Monitoring ",
    description: "Streamlined Data Handling: Efficiently extracts, processes, and stores data for analysis.\
    Interactive Data Exploration: Enables visual exploration of data patterns and trends.\
    Comprehensive Container Monitoring: Tracks resource usage, performance, and health of containerized applications.\
    Customizable Dashboards: Provides flexibility to tailor visualizations to specific needs."
    ,tags: [
      {
        name: "ETL",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "cAdvisor",
        color: "blue-text-gradient",
      },
      {
        name: "Docker/docker-compose",
        color: "green-text-gradient",
      },
      {
        name: "Prometheus / Grafana",
        color: "green-text-gradient",
      },
      {
        name: "Bash",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: etl,
    source_code_link: "https://github.com/khalilrez/etl_devops",
  },
  {
    name: "DevOps Implementation ",
    description: "– Testing , containerizing and orchestrating a Spring boot / Angular app. A successful implementation of a comprehensive DevOps process utilizing industry-standard tools like Jenkins,SonarQube, Git and others."
    ,tags: [
      {
        name: "Jenkins",
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
        name: "Vagrant",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "SonarQube",
        color: "green-text-gradient",
      },
      {
        name: "Mockito/jUnit",
        color: "green-text-gradient",
      },
      {
        name: "Ansible",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
    ],
    image: jenkins,
    source_code_link: "https://github.com/khalilrez/devops-project",
  },
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
    source_code_link: "https://i.redd.it/52pbehnz61161.png",
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
  {
    name: "Python GUI Calculator",
    description:
      "One of my first python application. A GUI calculator.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tk GUI toolkit",
        color: "green-text-gradient",
      }
    ],
    image: calculator,
    source_code_link: "https://github.com/khalilrez/pythonGUICalculator",
  },
  {
    name: "MedImmo - Real Estate Agency",
    description:
      "A real estate agency website that I developed from scratch. This website serves as a comprehensive platform for property buyers .",
    tags: [
      {
        name: "HTML/CSS/JS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      }
    ],
    image: medimmo,
    source_code_link: "http://www.med-immo.tn/index.php",
  },
];

export { services, technologies, experiences, testimonials, projects };
