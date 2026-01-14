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

import profileImg from "../assets/images/profile.png";
import { ArrowDownCircle, Download } from "lucide-react";

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
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985]"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-amber-400 opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-500 opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute inset-0 bg-[color:var(--overlay)] z-0"></div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-8 mb-4"
      >
        <img
          src={profileImg}
          alt="Yohanis Tasfa profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-amber-400 shadow-xl mx-auto bg-[color:var(--surface)]"
          style={{ boxShadow: "0 8px 32px 0 rgba(212,175,55,0.25)" }}
        />
        <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
      </motion.div>

      {/* Motion Content */}
      <motion.div
        className="z-10 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-extrabold text-amber-300 mb-2 tracking-tight drop-shadow-lg"
        >
          Hi, I'm <span className="text-amber-400">Yohanis Tasfa</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-6"
        >
          MERN Stack Developer & UI Enthusiast
        </motion.h2>

        <motion.p
          variants={item}
          className="text-[color:var(--color-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I turn ideas into seamless digital experiences. Passionate about clean
          code, beautiful interfaces, and building web solutions that make an
          impact.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex justify-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-[color:var(--color-fg)] font-semibold shadow-xl hover:scale-105 hover:shadow-amber-400/30 transition-all duration-200 text-lg"
          >
            <ArrowDownCircle className="w-6 h-6" /> View My Work
          </button>

          <a
            href="/Ytcv.pdf"
            download
            className="flex items-center gap-2 px-7 py-3 rounded-full border-2 border-amber-400 text-amber-300 font-semibold hover:bg-amber-500/10 hover:scale-105 transition-all duration-200 text-lg"
          >
            <Download className="w-6 h-6" /> Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
