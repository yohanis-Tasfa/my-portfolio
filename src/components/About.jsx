// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

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
      <div className="relative max-w-4xl mx-auto">
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
