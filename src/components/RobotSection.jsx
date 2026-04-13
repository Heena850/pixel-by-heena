import { useState, useEffect, useRef } from "react";

const INTRO_TEXT =
  "Hi there! I'm Heena's robot assistant. She's a creative front-end developer who crafts pixel-perfect interfaces with React, Tailwind CSS, and AI-powered tools. Let me show you her amazing work!";

function InteractiveRobot({ speaking }) {
  const wrapperRef = useRef(null);
  const [headTilt, setHeadTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = Math.max(-8, Math.min(8, ((x - centerX) / centerX) * 8));
        const tiltY = Math.max(-5, Math.min(5, ((centerY - y) / centerY) * 5));
        setHeadTilt({ x: tiltX, y: tiltY });
      });
    };

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => {
      setHeadTilt({ x: 0, y: 0 });
      setIsHovered(false);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-44 h-52 sm:w-72 sm:h-80 lg:w-80 lg:h-[22rem] mx-auto cursor-pointer"
      style={{ perspective: "600px" }}
    >
      {/* Glow behind robot */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-500/15 to-cyan-500/10 blur-3xl animate-pulse-glow" />

      {/* Floating particles around robot */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[5%] w-2 h-2 bg-cyan-400/40 rounded-full animate-robot-particle-1" />
        <div className="absolute top-[18%] right-[8%] w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-robot-particle-2" />
        <div className="absolute bottom-[25%] left-[10%] w-1 h-1 bg-indigo-300/40 rounded-full animate-robot-particle-3" />
        <div className="absolute bottom-[15%] right-[5%] w-2 h-2 bg-sky-400/30 rounded-full animate-robot-particle-1" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[45%] left-[-2%] w-1.5 h-1.5 bg-fuchsia-400/35 rounded-full animate-robot-particle-2" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[35%] right-[-2%] w-1 h-1 bg-emerald-400/30 rounded-full animate-robot-particle-3" style={{ animationDelay: "1.5s" }} />
      </div>

      <svg
        viewBox="0 0 200 240"
        className="relative w-full h-full animate-float drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `rotateX(${isHovered ? headTilt.y * 0.5 : 0}deg) rotateY(${isHovered ? headTilt.x * 0.5 : 0}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: isHovered ? "transform 0.15s ease-out" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <defs>
          <linearGradient id="robotBodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
          <radialGradient id="robotCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.2" />
          </radialGradient>
          <filter id="robotGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === HEAD GROUP — follows mouse cursor === */}
        <g
          style={{
            transform: `translate(${headTilt.x}px, ${headTilt.y}px)`,
            transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          }}
        >
          {/* Antenna */}
          <line x1="100" y1="28" x2="100" y2="8" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="6" r="5" className="fill-violet-400 animate-ai-pulse" filter="url(#robotGlow)" />

          {/* Head */}
          <rect x="55" y="28" width="90" height="70" rx="18" ry="18" fill="url(#robotBodyGrad)" stroke="#7c3aed" strokeWidth="2.5" />

          {/* Visor screen */}
          <rect x="63" y="40" width="74" height="34" rx="10" fill="#0c0a1a" stroke="#4c1d95" strokeWidth="1" opacity="0.8" />

          {/* Eyes */}
          <g className="robot-eyes">
            <circle cx="80" cy="58" r="10" fill="#0c0a1a" stroke="#818cf8" strokeWidth="1.5" />
            <circle cx="80" cy="58" r="5" className="fill-cyan-400 animate-ai-pulse" filter="url(#robotGlow)" />
            <circle cx="80" cy="56" r="2" fill="white" opacity="0.5" />

            <circle cx="120" cy="58" r="10" fill="#0c0a1a" stroke="#818cf8" strokeWidth="1.5" />
            <circle cx="120" cy="58" r="5" className="fill-cyan-400 animate-ai-pulse" style={{ animationDelay: "0.3s" }} filter="url(#robotGlow)" />
            <circle cx="120" cy="56" r="2" fill="white" opacity="0.5" />
          </g>

          {/* Mouth — animated speaking */}
          <rect x="82" y="80" width="36" height="6" rx="3" className={`fill-violet-400 ${speaking ? "robot-mouth" : ""}`} />

          {/* Ear indicators */}
          <circle cx="55" cy="60" r="3.5" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
          <circle cx="55" cy="60" r="1.5" className="fill-fuchsia-400 animate-ai-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="145" cy="60" r="3.5" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
          <circle cx="145" cy="60" r="1.5" className="fill-fuchsia-400 animate-ai-pulse" style={{ animationDelay: "0.8s" }} />
        </g>

        {/* Neck */}
        <rect x="92" y="98" width="16" height="12" rx="4" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
        <line x1="95" y1="103" x2="105" y2="103" stroke="#4c1d95" strokeWidth="1" strokeLinecap="round" />

        {/* Body */}
        <rect x="45" y="110" width="110" height="75" rx="16" ry="16" fill="url(#robotBodyGrad)" stroke="#7c3aed" strokeWidth="2.5" />

        {/* Chest core — glowing */}
        <circle cx="100" cy="140" r="12" fill="#0c0a1a" stroke="#818cf8" strokeWidth="2" />
        <circle cx="100" cy="140" r="7" fill="url(#robotCoreGlow)" className="animate-ai-pulse" filter="url(#robotGlow)" />
        <circle cx="100" cy="137" r="2.5" fill="white" opacity="0.35" />

        {/* Chest panel lines */}
        <line x1="65" y1="158" x2="88" y2="158" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="158" x2="135" y2="158" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" />
        <line x1="68" y1="166" x2="85" y2="166" stroke="#4c1d95" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="115" y1="166" x2="132" y2="166" stroke="#4c1d95" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="72" y1="174" x2="88" y2="174" stroke="#4c1d95" strokeWidth="1" strokeLinecap="round" />
        <line x1="112" y1="174" x2="128" y2="174" stroke="#4c1d95" strokeWidth="1" strokeLinecap="round" />

        {/* Left arm */}
        <rect x="20" y="118" width="22" height="50" rx="11" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="2" />
        <line x1="26" y1="135" x2="36" y2="135" stroke="#4c1d95" strokeWidth="1.5" strokeLinecap="round" />
        {/* Left hand */}
        <circle cx="31" cy="174" r="8" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />

        {/* Right arm */}
        <rect x="158" y="118" width="22" height="50" rx="11" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="2" />
        <line x1="163" y1="135" x2="173" y2="135" stroke="#4c1d95" strokeWidth="1.5" strokeLinecap="round" />
        {/* Right hand */}
        <circle cx="169" cy="174" r="8" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />

        {/* Legs */}
        <rect x="72" y="185" width="18" height="32" rx="8" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="2" />
        <rect x="110" y="185" width="18" height="32" rx="8" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="2" />

        {/* Feet */}
        <rect x="65" y="214" width="30" height="12" rx="6" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="2" />
        <rect x="105" y="214" width="30" height="12" rx="6" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="2" />
      </svg>
    </div>
  );
}

const WORDS = INTRO_TEXT.split(" ");
const SPEECH_DURATION = 12000; // ~12s at rate 0.95
const WORD_INTERVAL = SPEECH_DURATION / WORDS.length;

export default function RobotSection() {
  const [speaking, setSpeaking] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const wordTimerRef = useRef(null);

  const startWordFill = () => {
    setActiveWordIndex(0);
    let i = 0;
    wordTimerRef.current = setInterval(() => {
      i++;
      if (i >= WORDS.length) {
        clearInterval(wordTimerRef.current);
        wordTimerRef.current = null;
        return;
      }
      setActiveWordIndex(i);
    }, WORD_INTERVAL);
  };

  const stopWordFill = () => {
    if (wordTimerRef.current) {
      clearInterval(wordTimerRef.current);
      wordTimerRef.current = null;
    }
    setActiveWordIndex(WORDS.length); // fill all
  };

  // Cancel speech on page reload/unmount
  useEffect(() => {
    const onBeforeUnload = () => window.speechSynthesis.cancel();
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.speechSynthesis.cancel();
      if (wordTimerRef.current) clearInterval(wordTimerRef.current);
    };
  }, []);

  const handleSpeak = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      stopWordFill();
      return;
    }

    setActiveWordIndex(-1);
    const utterance = new SpeechSynthesisUtterance(INTRO_TEXT);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.onend = () => { setSpeaking(false); stopWordFill(); };
    utterance.onerror = () => { setSpeaking(false); stopWordFill(); };
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
    startWordFill();
  };

  return (
    <section
      id="robot"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-[#0c0a1a] to-gray-950  py-10 md:py-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-violet-900/10 rounded-full blur-3xl animate-blob-1" />
        <div className="absolute bottom-[20%] right-[8%] w-96 h-96 bg-indigo-900/8 rounded-full blur-3xl animate-blob-2" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Sparkle dots */}
        <div className="absolute top-[12%] left-[20%] w-2 h-2 bg-cyan-400/20 rounded-full animate-twinkle" />
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-violet-400/30 rounded-full animate-twinkle" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-[60%] left-[8%] w-1 h-1 bg-indigo-300/25 rounded-full animate-twinkle" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-[75%] right-[20%] w-2 h-2 bg-fuchsia-400/20 rounded-full animate-twinkle" style={{ animationDelay: "1.8s" }} />
        <div className="absolute top-[45%] left-[80%] w-1.5 h-1.5 bg-sky-400/25 rounded-full animate-twinkle" style={{ animationDelay: "2.3s" }} />

        {/* Circuit lines */}
        <div className="absolute top-[25%] left-[10%] w-32 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-circuit-flow" />
        <div className="absolute top-[65%] right-[12%] w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-circuit-flow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] left-[60%] w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent animate-circuit-flow" style={{ animationDelay: "2s" }} />

        {/* Decorative shapes */}
        <div className="absolute top-[10%] right-[10%] w-14 h-14 border-2 border-violet-500/10 rounded-xl rotate-12 animate-blob-3" />
        <div className="absolute bottom-[15%] left-[6%] w-10 h-10 border-2 border-cyan-500/10 rounded-full animate-blob-1" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <span className="inline-block px-5 py-2 bg-violet-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full text-sm font-medium text-violet-300 mb-4">
            Say Hello
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Meet My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Robot Assistant
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Speech Bubble */}
          <div className="relative max-w-lg w-full" data-aos="fade-down" data-aos-delay="300">
            <div className="bg-gray-900/80 backdrop-blur-md border border-violet-500/20 rounded-2xl px-4 py-3 sm:px-6 sm:py-5 shadow-lg shadow-violet-500/5">
              <p className="text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed min-h-[2.5rem] sm:min-h-[3rem]">
                {WORDS.map((word, i) => (
                  <span
                    key={i}
                    className={`transition-colors duration-300 ${
                      i <= activeWordIndex ? "text-violet-300" : "text-gray-600"
                    }`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>
            {/* Bubble arrow pointing down */}
            <div className="flex justify-center">
              <div className="w-4 h-4 bg-gray-900/80 border-b border-r border-violet-500/20 rotate-45 -mt-2" />
            </div>
          </div>

          {/* Robot */}
          <div data-aos="zoom-in" data-aos-delay="500">
            <InteractiveRobot speaking={speaking} />
          </div>

          {/* Action buttons */}
          <div className="flex flex-row items-center gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="700">
            <button
              onClick={handleSpeak}
              className={`group flex items-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                speaking
                  ? "bg-gradient-to-r from-cyan-600 to-blue-500 text-white shadow-cyan-500/25"
                  : "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35"
              }`}
            >
              {speaking ? (
                <>
                  <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.999 3a1 1 0 0 0-1.707-.707L5.586 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.586l4.706 4.707A1 1 0 0 0 11.999 21V3Zm2.59 3.82a1 1 0 0 1 1.41-.09 6 6 0 0 1 0 8.54 1 1 0 1 1-1.32-1.5 4 4 0 0 0 0-5.44 1 1 0 0 1-.09-1.41Zm2.83-2.83a1 1 0 0 1 1.41 0 11 11 0 0 1 0 16.02 1 1 0 1 1-1.41-1.42 9 9 0 0 0 0-13.18 1 1 0 0 1 0-1.42Z" />
                  </svg>
                  Speaking...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.788v6.424a.5.5 0 00.757.429l4.964-3.212a.5.5 0 000-.858L7.257 8.36a.5.5 0 00-.757.429z" />
                  </svg>
                  Hear Me Speak
                </>
              )}
            </button>

            <a
              href="#projects"
              className="px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base bg-gray-800/60 backdrop-blur-sm text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-700 hover:border-violet-500/30"
            >
              See Her Work
            </a>
          </div>

          {/* Interaction hint */}
          <p className="text-xs text-gray-500 animate-pulse mt-2">
            Move your mouse over the robot to interact
          </p>
        </div>
      </div>
    </section>
  );
}
