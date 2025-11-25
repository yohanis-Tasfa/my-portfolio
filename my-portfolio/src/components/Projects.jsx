import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "../assets/proInfo";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0A0A12] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 && "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              {/* Project Text */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full bg-gray-800 text-gray-200 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-blue-500 text-black px-5 py-2 rounded-lg font-medium hover:bg-blue-400 transition"
                  >
                    <ExternalLink size={18} /> View Project
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 border border-gray-500 px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
