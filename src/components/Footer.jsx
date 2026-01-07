import { Github, Linkedin, Send, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-[color:var(--border)] relative py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          {/* Left - Name + Role */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Yohanis Tasfa</h2>
            <p className="text-[color:var(--color-muted-2)] text-sm">
              MERN Stack Developer
            </p>
          </div>

          {/* Center - Navigation */}
          <nav className="flex gap-8 text-[color:var(--color-muted)] text-lg">
            <a href="#home" className="hover:text-amber-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-amber-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-amber-400 transition">
              Skill
            </a>
            <a href="#projects" className="hover:text-amber-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-amber-400 transition">
              Contact
            </a>
          </nav>

          {/* Right - Social Icons */}
          <div className="flex gap-5 mt-6 md:mt-0">
            <a
              href="https://github.com/yohanis-Tasfa"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] transition"
            >
              <Github className="text-[color:var(--color-muted)]" size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/yohanis-tasfa-93158b374"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] transition"
            >
              <Linkedin className="text-amber-400" size={22} />
            </a>

            <a
              href="https://t.me/jo_tesfa"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] transition"
            >
              <Send className="text-amber-400" size={22} />
            </a>

            <a
              href="mailto:yohanistesfa457@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] transition"
            >
              <Mail className="text-amber-400" size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[color:var(--border)] mt-6"></div>

        {/* Bottom Text */}
        <p className="text-center text-[color:var(--color-muted-2)] mt-6 text-sm">
          © {new Date().getFullYear()} Yohanis Tasfa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
