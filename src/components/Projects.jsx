import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../assets/proInfo";

const _motion = motion;

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute w-[450px] h-[450px] bg-amber-500/15 blur-[200px] rounded-full 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-amber-400">Projects</span>
        </motion.h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-white/10 rounded-2xl p-5 shadow-xl 
              backdrop-blur-xl hover:shadow-amber-500/20 transition-all duration-300"
              whileHover={{ scale: 1.13, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <motion.div
                className="rounded-xl overflow-hidden"
                whileHover={{ scale: 1.13 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl h-40 object-cover w-full shadow-[0_0_20px_rgba(245,158,11,0.22)]"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="group px-3 py-1 rounded-full bg-black/40 border border-gray-600 
      text-gray-300 text-xs transition-all duration-300 cursor-default
      hover:bg-amber-500/15 hover:text-white hover:border-amber-400 hover:shadow-[0_0_10px_rgba(245,158,11,0.45)] hover:scale-105"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 bg-amber-500/90 text-black px-3 py-2 rounded-lg 
                  hover:bg-amber-500 transition shadow-[0_0_12px_rgba(245,158,11,0.35)] text-xs"
                >
                  <ExternalLink size={14} /> Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-lg 
                  text-gray-300 hover:border-gray-300 hover:bg-gray-800/40 transition text-xs"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
