import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Rocket,
  HeartHandshake,
  Layers,
  ShieldCheck,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, duration: 0.7, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function InfoCard({ icon: Icon, title, children }) {
  return (
    <motion.div
      variants={item}
      className="group relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-xl shadow-xl overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shadow-[0_0_22px_rgba(245,158,11,0.20)]">
            <Icon size={20} className="text-amber-300" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-2 text-[color:var(--color-muted)] leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const About = () => {
  const highlights = [
    "MERN Stack",
    "Clean Architecture",
    "Responsive UI",
    "Performance",
    "Accessibility",
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-amber-500/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-28 -right-24 w-[520px] h-[520px] bg-emerald-500/10 blur-[190px] rounded-full" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[color:var(--overlay)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="relative max-w-6xl mx-auto z-10"
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-xl text-[color:var(--color-muted)]">
            <Sparkles size={16} className="text-amber-300" />
            A little introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            About <span className="text-amber-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-14 items-start">
          {/* Left */}
          <motion.div variants={item} className="space-y-7">
            <p className="text-[color:var(--color-muted)] leading-relaxed text-lg">
              I’m a full-stack developer focused on building fast, scalable, and
              modern web applications. I enjoy turning ideas into polished
              products—balancing clean code, great UX, and reliable backend
              logic.
            </p>

            <p className="text-[color:var(--color-muted-2)] leading-relaxed text-lg">
              I’m constantly improving my craft by shipping projects,
              experimenting with new tools, and learning best practices that
              make apps easier to maintain and evolve.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm hover:bg-amber-500/15 transition"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <motion.dl
              variants={item}
              className="grid sm:grid-cols-3 gap-4"
            >
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-xl p-5">
                <dt className="text-sm text-[color:var(--color-muted)]">Focus</dt>
                <dd className="mt-2 text-xl font-semibold">MERN + UI</dd>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-xl p-5">
                <dt className="text-sm text-[color:var(--color-muted)]">What I optimize</dt>
                <dd className="mt-2 text-xl font-semibold">Speed & DX</dd>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-xl p-5">
                <dt className="text-sm text-[color:var(--color-muted)]">Collaboration</dt>
                <dd className="mt-2 text-xl font-semibold">Team-first</dd>
              </div>
            </motion.dl>

            {/* CTA */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold shadow-lg hover:opacity-95 transition"
              >
                <Rocket size={18} /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-400 text-amber-200 font-semibold hover:bg-amber-500/10 transition"
              >
                <HeartHandshake size={18} /> Let’s Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div variants={item} className="grid gap-5">
            <InfoCard icon={Code2} title="What I build">
              Full-stack web apps with thoughtful UI, smooth interactions, and
              solid backend foundations.
            </InfoCard>
            <InfoCard icon={Layers} title="How I work">
              I like reusable components, consistent patterns, and small,
              testable pieces that make teams move faster.
            </InfoCard>
            <InfoCard icon={ShieldCheck} title="What I care about">
              Maintainability, security basics, and performance—so your product
              stays reliable as it grows.
            </InfoCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
