export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-semibold text-blue-400">
          Yohanis <span className="text-blue-400">Tasfa</span>
        </h1>

        <ul className="hidden md:flex items-center space-x-10 text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">
            Projects
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
