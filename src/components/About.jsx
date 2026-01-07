// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import MyPhoto from "../assets/images/profile.png";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const _motion = motion;

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* BACKGROUND gradient layer */}
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Dark overlay to match black background */}
      <div className="absolute inset-0 bg-[color:var(--overlay)]"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.06, y: -10 }}
        >
          <div className="relative">
            <img
              src={MyPhoto}
              alt="Profile"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-[0_0_40px_rgba(245,158,11,0.45)] border-4 border-amber-500"
            />

            {/* Tech stack icons around the border */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[color:var(--surface-strong)] border border-[color:var(--border)] backdrop-blur flex items-center justify-center text-amber-400">
              <FaHtml5 size={20} />
            </span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[color:var(--surface-strong)] border border-[color:var(--border)] backdrop-blur flex items-center justify-center text-amber-400">
              <FaNodeJs size={20} />
            </span>
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[color:var(--surface-strong)] border border-[color:var(--border)] backdrop-blur flex items-center justify-center text-amber-400">
              <FaReact size={20} />
            </span>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[color:var(--surface-strong)] border border-[color:var(--border)] backdrop-blur flex items-center justify-center text-amber-400">
              <SiMongodb size={20} />
            </span>
          </div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-amber-400">About Me</span>
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed text-lg mb-6">
            I’m a full-stack developer with a deep interest in creating
            efficient, scalable, and visually appealing web solutions. I’ve
            built multiple hands-on projects that strengthened my understanding
            of both frontend and backend development. I'm constantly exploring
            new tools, frameworks, and best practices—eager to contribute to
            real-world projects and grow as a developer.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Beyond Code</h3>

          <p className="text-[color:var(--color-muted-2)] leading-relaxed text-lg">
            When I’m not coding, I explore design trends, contribute to open
            source, and share ideas with the developer community. I believe
            teamwork and creativity build the best products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
