import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0120] to-black"></div>
      <div
        className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[200px] rounded-full 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>

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
          Skills <span className="text-purple-400">& Expertise</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"
        />

        {/* Skill Categories */}
        <motion.div
          variants={item}
          className="grid md:grid-cols-3 gap-14 mt-16"
        >
          {/* Frontend */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-48 h-48 bg-purple-500/10 border border-purple-500/40 rounded-full 
             flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.35)]"
            >
              <Code size={55} className="text-purple-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mt-5 text-purple-300">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 rounded-full border border-purple-400 text-purple-300 text-sm shadow-lg bg-purple-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-48 h-48 bg-blue-500/10 border border-blue-500/40 rounded-full 
             flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.35)]"
            >
              <Server size={55} className="text-blue-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mt-5 text-blue-300">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Firebase",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 rounded-full border border-blue-400 text-blue-300 text-sm bg-blue-500/10 shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-48 h-48 bg-purple-500/10 border border-purple-500/40 rounded-full 
             flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.35)]"
            >
              <Wrench size={55} className="text-purple-400" />
            </motion.div>

            <h3 className="text-xl font-semibold mt-5 text-purple-300">
              Tools
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {["Git", "GitHub", "VS Code", "Figma", "Vercel"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 rounded-full border border-purple-400 text-purple-300 text-sm bg-purple-500/10 shadow-lg"
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
