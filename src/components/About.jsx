export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-pastel-lavender rounded-full text-sm font-medium text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Get to know me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration side */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-sky to-pastel-purple rounded-3xl rotate-6 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue to-pastel-mint rounded-3xl -rotate-3" />
              <div className="relative w-full h-full bg-white rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">
                {/* Replace with your photo or illustration:
                    <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">
                    <span role="img" aria-label="developer">
                      {"</>"}
                    </span>
                  </div>
                  <div className="flex gap-3 justify-center text-3xl">
                    <span role="img" aria-label="web">
                      {"{ }"}
                    </span>
                    <span className="text-primary font-bold">+</span>
                    <span role="img" aria-label="ai">
                      AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Front-End Developer & AI Enthusiast
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi there! I'm a passionate developer who bridges the gap between
                beautiful user interfaces and intelligent AI systems. My journey
                started with crafting pixel-perfect websites and evolved into
                exploring the fascinating world of artificial intelligence.
              </p>
              <p>
                On the front-end side, I love building responsive, accessible,
                and delightful web experiences using modern frameworks like
                React. On the AI side, I work with machine learning models,
                neural networks, and prompt engineering to create smart
                solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new tech trends,
                contributing to open-source projects, or sipping coffee while
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
                  className="text-center p-4 bg-pastel-lavender/50 rounded-2xl hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 ease-out cursor-default"
                  data-aos="zoom-in"
                  data-aos-delay={600 + i * 100}
                >
                  <div className="text-2xl font-bold text-primary">
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
