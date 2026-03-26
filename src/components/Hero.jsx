export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pastel-purple to-pastel-lavender pt-16 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob-1" />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob-2" />
        <div className="absolute top-[30%] right-[25%] w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-blob-3" />
        <div className="absolute bottom-[15%] left-[20%] w-80 h-80 bg-pastel-lavender/60 rounded-full blur-3xl animate-blob-2" />

        {/* Sparkle dots */}
        <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-primary/40 rounded-full animate-twinkle" />
        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-secondary/50 rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[45%] left-[10%] w-1 h-1 bg-accent/40 rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[70%] right-[15%] w-2 h-2 bg-primary/30 rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[55%] left-[30%] w-1.5 h-1.5 bg-accent/50 rounded-full animate-twinkle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[80%] left-[50%] w-1 h-1 bg-secondary/40 rounded-full animate-twinkle" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-primary-light/40 rounded-full animate-twinkle" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[65%] left-[70%] w-1.5 h-1.5 bg-accent/30 rounded-full animate-twinkle" style={{ animationDelay: "1.8s" }} />

        {/* Decorative geometric shapes */}
        <div className="absolute top-[12%] right-[12%] w-16 h-16 border-2 border-primary/15 rounded-xl rotate-12 animate-blob-3" />
        <div className="absolute bottom-[20%] left-[8%] w-12 h-12 border-2 border-secondary/15 rounded-full animate-blob-1" />
        <div className="absolute top-[50%] right-[5%] w-10 h-10 border-2 border-accent/15 rounded-lg rotate-45 animate-blob-2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        {/* Avatar / Illustration */}
        <div className="mb-8 flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
          <div className="relative animate-float">
            {/* Pulsing glow ring behind the avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-glow blur-xl" />

            {/* Spinning gradient border */}
            <div className="relative w-40 h-40 rounded-full p-1 shadow-lg shadow-primary/25">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary animate-spin-slow" />
              <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden z-10">
                {/* Replace the SVG below with your own avatar image:
                    <img src="/your-avatar.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <svg
                  className="w-24 h-24 text-primary/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Greeting badge */}
        <div className="inline-block mb-6 px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-primary shadow-sm" data-aos="fade-down" data-aos-delay="200">
          Hello, I'm a Front-End & AI Developer
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
          Building lovable
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            web & AI experiences.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
          I craft beautiful, responsive websites and intelligent AI solutions
          that make a difference. Let's build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white text-primary font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-primary/20"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
