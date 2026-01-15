import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import MyPhoto from "../assets/images/profile.png";

const _motion = motion;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Hero() {
  // function  scroll to project section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 relative overflow-hidden"
    >
      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute inset-0 bg-[color:var(--overlay)]"></div>

      {/* Motion Content */}
      <motion.div
        className="z-10 w-full max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }} //  makes animation rerun
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* LEFT — TEXT */}
          <div className="w-full md:max-w-3xl text-center md:text-left">
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold text-amber-200 mb-3 flex flex-col items-center md:items-start min-h-[120px]"
            >
              <span className="block w-full">
                <TypewriterText
                  className="inline-block"
                  options={{
                    strings: [
                      "Hi, I'm <span class='text-amber-400'>Yohanis Tasfa</span>",
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 60,
                    deleteSpeed: 0,
                    pauseFor: 9999999,
                    html: true,
                    cursor: "",
                  }}
                />
              </span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-7 min-h-[48px]"
            >
              <TypewriterText
                className="inline-block"
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "UI/UX Enthusiast",
                    "React & Node.js Specialist",
                    "Building Modern Web Experiences",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  pauseFor: 1200,
                }}
              />
            </motion.h2>

            <motion.p
              variants={item}
              className="text-[color:var(--color-muted)] text-xl max-w-2xl md:max-w-none leading-relaxed mb-12"
            >
              Turning ideas into seamless digital experiences. I craft clean,
              efficient code, design with intention, and build web solutions
              that leave a lasting impact shaping the web, one project at a
              time.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 
                text-[color:var(--color-fg)] font-semibold shadow-lg hover:opacity-90 transition"
              >
                View My Work ↓
              </button>

              <a
                href="/Ytcv.pdf"
                download
                className="px-6 py-3 rounded-full border border-amber-400 text-amber-300 
                  font-semibold hover:bg-amber-500/10 transition text-center"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* RIGHT — IMAGE */}
          <motion.div
            variants={item}
            className="w-full md:w-auto flex justify-center md:justify-end"
            whileHover={{ scale: 1.04, y: -10 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img
              src={MyPhoto}
              alt="Profile"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover shadow-[0_0_40px_rgba(245,158,11,0.45)] border-4 border-amber-500"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
