import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { selection, setSelection, resolvedTheme } = useTheme();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeMenuDesktopRef = useRef(null);
  const themeMenuMobileRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (e) => {
      const inDesktop = themeMenuDesktopRef.current?.contains(e.target);
      const inMobile = themeMenuMobileRef.current?.contains(e.target);
      if (inDesktop || inMobile) return;
      setIsThemeOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const ThemeIcon =
    selection === "system" ? Monitor : resolvedTheme === "dark" ? Moon : Sun;

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

          <div className="relative" ref={themeMenuDesktopRef}>
            <button
              type="button"
              aria-label="Theme"
              aria-haspopup="menu"
              aria-expanded={isThemeOpen}
              onClick={() => setIsThemeOpen((v) => !v)}
              className="flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-[color:var(--surface)] border border-[color:var(--border)] text-[color:var(--color-fg)]"
            >
              <ThemeIcon size={18} />
              <ChevronDown size={16} className="opacity-70" />
            </button>

            {isThemeOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] backdrop-blur-lg p-2"
              >
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setSelection("dark");
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[color:var(--color-fg)] hover:bg-[color:var(--surface-hover)]"
                >
                  <Moon size={16} /> Dark
                </button>
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setSelection("light");
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[color:var(--color-fg)] hover:bg-[color:var(--surface-hover)]"
                >
                  <Sun size={16} /> Light
                </button>
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setSelection("system");
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[color:var(--color-fg)] hover:bg-[color:var(--surface-hover)]"
                >
                  <Monitor size={16} /> System
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <div className="relative" ref={themeMenuMobileRef}>
            <button
              type="button"
              aria-label="Theme"
              aria-haspopup="menu"
              aria-expanded={isThemeOpen}
              onClick={() => setIsThemeOpen((v) => !v)}
              className="flex items-center justify-center rounded-lg px-3 py-2 bg-[color:var(--surface)] border border-[color:var(--border)] text-[color:var(--color-fg)]"
            >
              <ThemeIcon size={18} />
            </button>

            {isThemeOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] backdrop-blur-lg p-2"
              >
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setSelection("dark");
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[color:var(--color-fg)] hover:bg-[color:var(--surface-hover)]"
                >
                  <Moon size={16} /> Dark
                </button>
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setSelection("light");
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[color:var(--color-fg)] hover:bg-[color:var(--surface-hover)]"
                >
                  <Sun size={16} /> Light
                </button>
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setSelection("system");
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[color:var(--color-fg)] hover:bg-[color:var(--surface-hover)]"
                >
                  <Monitor size={16} /> System
                </button>
              </div>
            )}
          </div>

          <button
            className="text-[color:var(--color-fg)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute  right-6 top-20 bg-[color:var(--surface-strong)] backdrop-blur-lg p-6 rounded-xl w-44 flex flex-col gap-4 md:hidden border border-[color:var(--border)]">
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
