import { useState } from "react";
import smartstocksImg from "../assets/smartstocks.webp";
import clgeaseImg from "../assets/clgease.webp";
import mukundImg from "../assets/mukund.webp";
import tutoracImg from "../assets/tutorac.webp";
import partspracticeImg from "../assets/partspractice.webp";
import modenxImg from "../assets/modenx.webp";

const projects = [
   {
    title: "Smart Stocks",
    image: smartstocksImg,
    description:
      "The Portfolio Management platform is a full-stack web application designed to help users efficiently manage stock portfolios, track real-time profit and loss, and analyze overall market performance.",
    tags: ["HTML5", "CSS3", "React", "MySQL", "Node.js"],
    category: "Lovabel, React",
    color: "from-gray-700 to-gray-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    github: "#",
    demo: "http://3.137.162.241/",
  },
  {
    title: "Collegeease",
    image: clgeaseImg,
    description:
      "Collegeease is a web-based platform designed to improve communication between parents, students, and educational institutions.",
    tags: ["HTML5", "CSS3", "React", "TypeScript", "Node.js"],
    category: "React",
    color: "from-gray-700 to-gray-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    github: "#",
    demo: "https://app.collegeease.com/",
  },
  {
    title: "Mukund",
    image: mukundImg,
    description:
      "Mukund is specialty steel manufacturer, we have built a robust digital platform that reflects our engineering excellence and industrial precision. Used AOS (Animate On Scroll) animations to create smooth, scroll-triggered transitions aligned with the steel manufacturing brand design",
    tags: ["HTML5", "CSS3", "JavaScript","Wordpress", "AOS animation"],
    category: "Wordpress",
    color: "from-gray-600 to-gray-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    github: "#",
    demo: "https://www.mukandsumi.com/",
  },
  {
    title: "Tutorac Academy",
    image: tutoracImg,
    description:
      "Built Tutor Academy, a scalable e-learning platform delivering structured, video-based education with integrated assessments and secure monetization.",
    tags: ["HTML5", "CSS3","Node.js", "Angular"],
    category: "Angular",
    color: "from-gray-800 to-gray-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    github: "#",
    demo: "https://tutorac.com//",
  },
  {
    title: "AI-Powered Psychological Practice & Training Platform",
    image: partspracticeImg,
    description:
      "Designed and developed PartsPractice, an AI-driven training platform that enables mental health professionals to simulate real-world patient interactions in a safe, controlled environment",
   tags: ["HTML5", "CSS3", "OpenAI (GPT-4o)","Node.js", "React.js"],
    category: "React",
    color: "from-gray-500 to-gray-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    github: "#",
    demo: "https://app.partspractice.org/",
  },
  {
    title: "ModenX",
    image: modenxImg,
    description:
      "modenX is a digital platform created to redefine the retail experience through immersive, customer-centric solutions.",
    tags: ["HTML5", "CSS3", "JavaScript","WordPress", "AOS"],
    category: "Wordpress  ",
    color: "from-gray-700 to-gray-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    github: "#",
    demo: "https://techuz.info/ModenX/",
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;
  const isLong = project.description.length > maxLength;

  return (
    <div
      className="group flex flex-col bg-gray-900 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-white/5 border border-gray-800 hover:border-gray-600 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02]"
      data-aos="fade-up"
      style={{ transition: "0.3s ease-in-out" }}
      data-aos-delay={index * 100}
    >
      {/* Card header with gradient */}
      <div
        className={`h-38 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className={`relative ${project.image ? 'w-full h-full' : 'p-4 bg-white/10 backdrop-blur-sm rounded-2xl'} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out`}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
          ) : (
            project.icon
          )}
        </div>
        {/* Category badge */}
        <span className="absolute top-4 right-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs font-medium text-white uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {isLong && !expanded
            ? project.description.slice(0, maxLength) + "..."
            : project.description}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200 cursor-pointer"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          )}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {/* <a
            href={project.github}          
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-xl transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a> */}
          <a
            href={project.demo}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-medium rounded-xl hover:shadow-md hover:shadow-violet-500/20 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium text-gray-300 mb-4">
            My Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Things I've built
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            A mix of web applications and AI-powered projects
          </p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
