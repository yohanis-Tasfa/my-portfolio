import { Github, Linkedin, Send, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#050508] border-t border-white/10 relative py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          {/* Left - Name + Role */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">Yohanis Tasfa</h2>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Center - Navigation */}
          <nav className="flex gap-8 text-gray-300 text-lg">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skill
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* Right - Social Icons */}
          <div className="flex gap-5 mt-6 md:mt-0">
            <a
              href="https://github.com/yohanis-Tasfa"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <Github className="text-gray-300" size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/yohanis-tasfa-93158b374"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin className="text-sky-400" size={22} />
            </a>

            <a
              href="https://t.me/jo_tesfa"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <Send className="text-blue-400" size={22} />
            </a>

            <a
              href="mailto:yohanistesfa457@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <Mail className="text-red-400" size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-6"></div>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          © {new Date().getFullYear()} Yohanis Tasfa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
