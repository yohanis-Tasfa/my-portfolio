import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-20 pb-32 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute inset-0 bg-black/55"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-200px" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Skills <span className="text-amber-400">& Expertise</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="w-24 h-1 bg-amber-500 mx-auto mt-3 rounded-full"
        />

        {/* Skill Categories */}
        <motion.div
          variants={item}
          className="grid md:grid-cols-3 gap-14 mt-16"
        >
          {/* Frontend */}
          <div className="flex flex-col items-center group">
            <motion.div
              whileHover={{ scale: 1.3 }}
              className="w-48 h-48 bg-amber-500/10 border border-amber-500/40 rounded-full 
                flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.35)]
                group-hover:bg-amber-500/20 group-hover:border-amber-500/60"
            >
              <Code
                size={55}
                className="text-amber-400 group-hover:text-amber-100"
              />
            </motion.div>
            <h3 className="text-xl font-semibold mt-5 text-amber-300">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 rounded-full border border-amber-400 text-amber-300 text-sm shadow-lg bg-amber-500/10 group-hover:bg-amber-500/20 group-hover:text-white"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center group">
            <motion.div
              whileHover={{ scale: 1.3 }}
              className="w-48 h-48 bg-amber-500/10 border border-amber-500/40 rounded-full 
                flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.28)]
                group-hover:bg-amber-500/20 group-hover:border-amber-500/60"
            >
              <Server
                size={55}
                className="text-amber-400 group-hover:text-amber-100"
              />
            </motion.div>
            <h3 className="text-xl font-semibold mt-5 text-amber-300">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 rounded-full border border-amber-400 text-amber-300 text-sm bg-amber-500/10 shadow-lg group-hover:bg-amber-500/20 group-hover:text-white"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center group">
            <motion.div
              whileHover={{ scale: 1.3 }}
              className="w-48 h-48 bg-amber-500/10 border border-amber-500/40 rounded-full 
                flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.35)]
                group-hover:bg-amber-500/20 group-hover:border-amber-500/60"
            >
              <Wrench
                size={55}
                className="text-amber-400 group-hover:text-amber-100"
              />
            </motion.div>
            <h3 className="text-xl font-semibold mt-5 text-amber-300">Tools</h3>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {["Git", "GitHub", "VS Code", "Render", "Vercel"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 rounded-full border border-amber-400 text-amber-300 text-sm bg-amber-500/10 shadow-lg group-hover:bg-amber-500/20 group-hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
