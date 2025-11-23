import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">Yohanis Tasfa</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col text-center text-white py-4 space-y-4">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-white transition cursor-pointer">
              Skill
            </li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
