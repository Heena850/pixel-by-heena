export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 pt-16 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob-1" />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-blob-2" />
        <div className="absolute top-[30%] right-[25%] w-64 h-64 bg-gray-400/5 rounded-full blur-3xl animate-blob-3" />
        <div className="absolute bottom-[15%] left-[20%] w-80 h-80 bg-gray-800/40 rounded-full blur-3xl animate-blob-2" />

        {/* Sparkle dots */}
        <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-white/20 rounded-full animate-twinkle" />
        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-gray-400/30 rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[45%] left-[10%] w-1 h-1 bg-gray-300/20 rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[70%] right-[15%] w-2 h-2 bg-white/15 rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[55%] left-[30%] w-1.5 h-1.5 bg-gray-400/25 rounded-full animate-twinkle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[80%] left-[50%] w-1 h-1 bg-gray-300/20 rounded-full animate-twinkle" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[65%] left-[70%] w-1.5 h-1.5 bg-gray-400/15 rounded-full animate-twinkle" style={{ animationDelay: "1.8s" }} />

        {/* AI network nodes and connections */}
        <div className="absolute top-[20%] left-[18%] w-72 h-56 pointer-events-none opacity-80">
          <div className="absolute top-[12%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-ai-pulse" />
          <div className="absolute top-[18%] left-[35%] w-2.5 h-2.5 bg-violet-400 rounded-full animate-ai-pulse" style={{ animationDelay: "0.3s" }} />
          <div className="absolute top-[45%] left-[20%] w-2 h-2 bg-blue-300 rounded-full animate-ai-pulse" style={{ animationDelay: "0.6s" }} />
          <div className="absolute top-[38%] left-[58%] w-3 h-3 bg-sky-400 rounded-full animate-ai-pulse" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[62%] left-[44%] w-2.5 h-2.5 bg-indigo-300 rounded-full animate-ai-pulse" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-[68%] left-[24%] w-2 h-2 bg-cyan-300 rounded-full animate-ai-pulse" style={{ animationDelay: "1.5s" }} />

          <div className="absolute top-[13%] left-[12%] w-[45%] h-[1px] bg-cyan-300/45 animate-ai-network" style={{ transform: "rotate(15deg)" }} />
          <div className="absolute top-[21%] left-[32%] w-[45%] h-[1px] bg-violet-300/45 animate-ai-network" style={{ transform: "rotate(-8deg)" }} />
          <div className="absolute top-[45%] left-[22%] w-[38%] h-[1px] bg-blue-300/40 animate-ai-network" style={{ transform: "rotate(10deg)" }} />
          <div className="absolute top-[53%] left-[49%] w-[40%] h-[1px] bg-sky-300/40 animate-ai-network" style={{ transform: "rotate(-12deg)" }} />
          <div className="absolute top-[62%] left-[34%] w-[30%] h-[1px] bg-indigo-300/45 animate-ai-network" style={{ transform: "rotate(8deg)" }} />
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute top-[12%] right-[12%] w-16 h-16 border-2 border-white/10 rounded-xl rotate-12 animate-blob-3" />
        <div className="absolute bottom-[20%] left-[8%] w-12 h-12 border-2 border-gray-500/10 rounded-full animate-blob-1" />
        <div className="absolute top-[50%] right-[5%] w-10 h-10 border-2 border-gray-400/10 rounded-lg rotate-45 animate-blob-2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center z-10">
        {/* Greeting badge */}
        <div className="inline-block mb-6 px-5 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 shadow-sm" data-aos="fade-down" data-aos-delay="200">
          Front-End Developer. Vibe Coder. AI-Powered.
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight" data-aos="fade-up" data-aos-delay="400">
          <span className="animate-matrix-shimmer">Hey, I'm </span>
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-matrix-shimmer">
            Heena
          </span>
          <br />
          <span className="animate-matrix-shimmer">I code with the vibes & ship with AI.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
          Turning ideas into pixel-perfect interfaces at lightning speed —
          powered by Cursor, Claude, and a love for clean code.
        </p>

        {/* Data stream bars */}
        <div className="absolute inset-x-0 -bottom-3 flex justify-center gap-2 pointer-events-none">
          <div className="w-2 h-6 bg-cyan-400/40 rounded-md animate-data-stream" />
          <div className="w-2 h-8 bg-violet-300/40 rounded-md animate-data-stream" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-5 bg-indigo-300/40 rounded-md animate-data-stream" style={{ animationDelay: "0.4s" }} />
          <div className="w-2 h-7 bg-sky-300/40 rounded-md animate-data-stream" style={{ animationDelay: "0.6s" }} />
          <div className="w-2 h-9 bg-emerald-300/40 rounded-md animate-data-stream" style={{ animationDelay: "0.8s" }} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold rounded-full shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-gray-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-700"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator — points to robot section */}
        <a href="#robot" className="mt-6 inline-block animate-bounce hover:text-violet-400 transition-colors">
          <svg
            className="w-6 h-6 mx-auto text-gray-500 hover:text-violet-400 transition-colors"
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
        </a>
      </div>
    </section>
  );
}
