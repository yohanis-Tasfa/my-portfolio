import { motion } from "framer-motion";

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
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Motion Content */}
      <motion.div
        className="z-10 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }} //  makes animation rerun
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-bold text-amber-200 mb-3"
        >
          Hi, I'm
        </motion.h1>

        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-bold text-amber-400 mb-3"
        >
          Yohanis <span className="text-amber-400">Tasfa</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-amber-200 to-amber-500 mb-7"
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Turning ideas into seamless digital experiences. I craft clean,
          efficient code, design with intention, and build web solutions that
          leave a lasting impact shaping the web, one project at a time.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex justify-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 
            text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            View My Work ↓
          </button>

          <a
            href="/Ytcv.pdf"
            download
            className="px-6 py-3 rounded-full border border-amber-400 text-amber-300 
              font-semibold hover:bg-amber-500/10 transition"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
