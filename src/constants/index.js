import { p } from "maath/dist/misc-7d870b3c.esm";
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
    kadapt,
    blueprint,
    mcdonalds,
    cancer_research,
    whitewater,
    carrent,
    jobit,
    tripguide,
    threejs,
    cplusplus,
    python,
    java,
    csharp,
    postgresql,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "C++",
      icon: cplusplus,
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
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Software Developer",
      company_name: "Blueprint Subsea",
      icon: blueprint,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Present",
      points: [
        "Full-stack web development.",
        "Collaborative working in a software development team.",
        "Designing and developing intuitive user interfaces.",
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "Kadapt LTD",
      icon: kadapt,
      iconBg: "#FFFFFF",
      date: "Jun 2022 - Sept 2022",
      points: [
        "Refactoring older C# code to meet the company’s current coding standards",
        "Developing SQL queries for a backend API.",
        "Modifying the company website.",
      ],
    },
    {
      title: "Crew Member",
      company_name: "McDonald's",
      icon: mcdonalds,
      iconBg: "#E6DEDD",
      date: "July 2022 - Jun 2023",
      points: [
        "Working as a team in a high-intensity kitchen serving food.",
        "Interacting with a range of different people from all backgrounds.",
        "Solving any problems that are presented in a fast and logical manner.",
      ],
    },
    {
      title: "Volunteer",
      company_name: "Cancer Research",
      icon: cancer_research,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Present",
      points: [
        "Providing a friendly and welcoming experience for customers",
        "Maximising sales by maintaining well stocked shelves and fresh displays",
        "Working in the stock room sorting and pricing items.",
      ],
    },
    {
      title: "Maintenance Worker",
      company_name: "Whitewater Lakeland Village",
      icon: whitewater,
      iconBg: "#FFFFFF",
      date: "Sept 2019 - Aug 2021",
      points: [
        "Working as part of a closely knit team servicing holiday apartments.",
        "Communicating and building a friendly rapport with residents to maximise their experience",
        "Using my initiative to resolve problems.",
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
      name: "Portfolio Website",
      description:
        "A personal web portfolio built using React, enriched with engaging animations and 3D models crafted through the Three.js library. This project showcases a dynamic website where visitors can explore a collection of work in an interactive and visually appealing manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Jack-Camo/3d_portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };