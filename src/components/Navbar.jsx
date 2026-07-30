import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png?v=2"
            alt="GovMitra AI"
            className="w-14 h-14 object-contain rounded-lg"
          />

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              GovMitra AI
            </h1>

            <p className="text-sm text-green-100">
              AI Powered Government Resolution Platform
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            🏠 Home
          </Link>

          <Link
            to="/departments"
            className="hover:text-yellow-300 transition duration-300"
          >
            🏛️ Departments
          </Link>

          <Link
            to="/search"
            className="hover:text-yellow-300 transition duration-300"
          >
            🔍 Search
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            ℹ️ About
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* AI Badge */}
          <div className="hidden lg:block">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              ✨ AI Powered
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 px-6 py-4 space-y-3">

          <Link
            to="/"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            🏠 Home
          </Link>

          <Link
            to="/departments"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            🏛️ Departments
          </Link>

          <Link
            to="/search"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            🔍 Search
          </Link>

          <Link
            to="/about"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            ℹ️ About
          </Link>

        </div>
      )}
    </header>
  );
}

export default Navbar;