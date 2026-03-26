const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard built with React and Tailwind CSS, featuring real-time analytics, interactive charts, and dark mode support.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    category: "web",
    color: "from-sky-400 to-blue-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    github: "#",
    demo: "#",
  },
  {
    title: "AI Image Classifier",
    description:
      "A deep learning model built with TensorFlow that classifies images into 50+ categories with 95% accuracy. Includes a web-based demo interface.",
    tags: ["Python", "TensorFlow", "Flask"],
    category: "ai",
    color: "from-violet-400 to-purple-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    github: "#",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application with location-based forecasts, animated weather icons, and a 7-day forecast powered by a REST API.",
    tags: ["React", "API", "CSS Animations"],
    category: "web",
    color: "from-cyan-400 to-blue-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    github: "#",
    demo: "#",
  },
  {
    title: "Chatbot with NLP",
    description:
      "An intelligent chatbot powered by PyTorch and transformer models. Supports multi-turn conversations and context-aware responses.",
    tags: ["Python", "PyTorch", "NLP"],
    category: "ai",
    color: "from-amber-400 to-orange-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "A drag-and-drop portfolio builder that lets users create stunning personal websites without writing code. Features template customization.",
    tags: ["React", "DnD", "Node.js"],
    category: "web",
    color: "from-emerald-400 to-teal-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analyzer",
    description:
      "A real-time sentiment analysis tool that processes text and social media posts to determine emotional tone using prompt engineering techniques.",
    tags: ["Python", "Prompt Eng.", "API"],
    category: "ai",
    color: "from-teal-400 to-cyan-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    github: "#",
    demo: "#",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 hover:border-primary/10 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Card header with gradient */}
      <div
        className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="relative p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
          {project.icon}
        </div>
        {/* Category badge */}
        <span className="absolute top-4 right-4 px-3 py-1 bg-white/25 backdrop-blur-sm rounded-full text-xs font-medium text-white uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-pastel-lavender/50 text-primary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-xl transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
          <a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-xl hover:shadow-md transition-all duration-200"
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-pastel-peach rounded-full text-sm font-medium text-orange-700 mb-4">
            My Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
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
