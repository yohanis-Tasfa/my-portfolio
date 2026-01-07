import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { selection, setSelection } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[color:var(--nav-bg)] border-b border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-400">Yohanis Tasfa</h1>

        {/* Desktop Menu + Theme */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-10 text-lg">
            <li
              className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>

          <select
            aria-label="Theme"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="text-sm rounded-lg px-3 py-2 bg-[color:var(--surface)] border border-[color:var(--border)] text-[color:var(--color-fg)]"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[color:var(--color-fg)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute  right-6 top-20 bg-[color:var(--surface-strong)] backdrop-blur-lg p-6 rounded-xl w-44 flex flex-col gap-4 md:hidden border border-[color:var(--border)]">
          <select
            aria-label="Theme"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="text-sm rounded-lg px-3 py-2 bg-[color:var(--surface)] border border-[color:var(--border)] text-[color:var(--color-fg)]"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <span
            className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
            onClick={() => scrollToSection("home")}
          >
            Home
          </span>

          <span
            className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
            onClick={() => scrollToSection("about")}
          >
            About
          </span>

          <span
            className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
            onClick={() => scrollToSection("skills")}
          >
            Skill
          </span>

          <span
            className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </span>

          <span
            className="cursor-pointer text-[color:var(--color-fg)] hover:text-amber-400"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </span>
        </div>
      )}
    </nav>
  );
}
