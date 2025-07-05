import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A] text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight hover:text-[#60A5FA] transition">
          WorkZen
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg text-[#BFDBFE]">
          <li>
            <Link to="/" className="hover:text-[#3B82F6] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-[#3B82F6] transition">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#3B82F6] transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#3B82F6] transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
  to="/contact"
  className="hidden md:inline-block bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-xl px-6 py-3 rounded-full transition duration-300 ease-in-out text-white text-sm font-semibold transform hover:scale-105"
>
  Book a Demo
</Link>

      </div>
    </nav>
  );
}
