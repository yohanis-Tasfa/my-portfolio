import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-400">Yohanis Tasfa</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute  right-6 top-20 bg-black/70 backdrop-blur-lg p-6 rounded-xl w-40 flex flex-col gap-4 md:hidden ">
          <span
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("home")}
          >
            Home
          </span>

          <span
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("about")}
          >
            About
          </span>

          <span
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("skills")}
          >
            Skill
          </span>

          <span
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </span>

          <span
            className="cursor-pointer text-white hover:text-amber-400"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </span>
        </div>
      )}
    </nav>
  );
}
