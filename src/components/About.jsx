// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import MyPhoto from "../assets/images/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* BACKGROUND gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0120] to-black"></div>

      {/* PURPLE GLOW */}
      {/* <div
        className="
          absolute 
          w-[300px] h-[300px] 
          md:w-[500px] md:h-[500px]
          bg-purple-600/30 
          blur-[150px] md:blur-[200px]
          rounded-full
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none
        "
      ></div> */}

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={MyPhoto}
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-[0_0_40px_rgba(168,85,247,0.5)] border-4 border-purple-500"
          />
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-500">About Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I’m a full-stack developer with a deep interest in creating
            efficient, scalable, and visually appealing web solutions. I’ve
            built multiple hands-on projects that strengthened my understanding
            of both frontend and backend development. I'm constantly exploring
            new tools, frameworks, and best practices—eager to contribute to
            real-world projects and grow as a developer.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Beyond Code</h3>

          <p className="text-gray-400 leading-relaxed text-lg">
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
