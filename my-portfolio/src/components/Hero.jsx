import { motion } from "framer-motion";

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
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0120] to-black"></div>
      <div
        className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[200px] rounded-full 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Motion Content */}
      <motion.div
        className="z-10 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // 👈 makes animation rerun
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-bold text-blue-300 mb-3"
        >
          Hi, I'm
        </motion.h1>

        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-3"
        >
          Yohanis <span className="text-purple-400">Tasfa</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-300 to-blue-400 mb-7"
        >
          Fullstack Web Developer
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
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 
            text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            View My Work ↓
          </button>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full border border-purple-400 text-purple-300 
              font-semibold hover:bg-purple-600/20 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
