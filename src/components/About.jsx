export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium text-gray-300 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get to know me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration side */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-cyan-500/40 rounded-3xl rotate-6 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 rounded-3xl -rotate-3" />
              <div className="relative w-full h-full bg-gray-900 rounded-3xl shadow-lg shadow-violet-500/10 flex items-center justify-center overflow-hidden border border-gray-800">
                {/* Replace with your photo or illustration:
                    <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">
                    <span role="img" aria-label="developer" className="text-violet-400">
                      {"</>"}
                    </span>
                  </div>
                  <div className="flex gap-3 justify-center text-3xl">
                    <span role="img" aria-label="web" className="text-cyan-400">
                      {"{ }"}
                    </span>
                    <span className="text-fuchsia-400 font-bold">+</span>
                    <span role="img" aria-label="ai" className="text-violet-400">
                      AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div data-aos="fade-up" data-aos-delay="400">           
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                A front-end developer and vibe coder who turns ideas into
                beautiful, functional interfaces — fast. I pair my love for
                pixel-perfect design with AI-powered tools like Cursor, Claude,
                and Lovable to ship projects at lightning speed.
              </p>
              <p>
                I specialize in building responsive, accessible, and delightful
                web experiences using React and Tailwind CSS. On the AI side,
                I leverage prompt engineering and AI workflows to supercharge
                my development process and deliver smarter solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new AI tools,
                experimenting with creative workflows, or sipping coffee while
                brainstorming my next big idea.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "20+", label: "Projects" },
                { number: "8+", label: "Years Exp." },
                { number: "5+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-800 hover:border-violet-500/30 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-500 ease-out cursor-default"
                  data-aos="zoom-in"
                  data-aos-delay={600 + i * 100}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
