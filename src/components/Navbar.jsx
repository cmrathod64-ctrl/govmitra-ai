import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Building2,
  Search,
  Info,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">

        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden"
            >
              <Menu size={28} />
            </button>

            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png?v=2"
                alt="GovMitra AI"
               className="w-12 h-12 rounded-lg"
              />

              <div>
                <h1 className="text-lg md:text-2xl font-bold text-green-700">
                  GovMitra AI
                </h1>

                <p className="hidden md:block text-xs text-gray-500">
                  AI Powered Government Resolution Platform
                </p>
              </div>
            </Link>

          </div>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

  <Link
    to="/"
    className="flex items-center gap-2 hover:text-green-700 transition-all duration-200 hover:scale-105"
  >
    <Home size={18} />
    Home
  </Link>

  <Link
    to="/departments"
    className="flex items-center gap-2 hover:text-green-700 transition-all duration-200 hover:scale-105"
  >
    <Building2 size={18} />
    Departments
  </Link>

  <Link
    to="/search"
    className="flex items-center gap-2 hover:text-green-700 transition-all duration-200 hover:scale-105"
  >
    <Search size={18} />
    Search
  </Link>

  <Link
    to="/about"
    className="flex items-center gap-2 hover:text-green-700 transition-all duration-200 hover:scale-105"
  >
    <Info size={18} />
    About
  </Link>

</nav>

          {/* Right */}

          <Link
            to="/search"
            className="md:hidden text-green-700"
          >
            <Search size={24} />
          </Link>

          <div className="hidden lg:block">
            <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm">
              AI Powered
            </span>
          </div>

        </div>

      </header>

      {/* Overlay */}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png?v=2"
              className="h-30 w-30 rounded-lg object-contain"
            />

            <div>
              <h2 className="font-bold text-green-700">
                GovMitra AI
              </h2>

              <p className="text-xs text-gray-500">
                Government Resolution
              </p>
            </div>

          </div>

          <button onClick={closeMenu}>
            <X />
          </button>

        </div>

        <div className="p-4 space-y-2">

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50"
          >
            <Home size={20} />
            Home
          </Link>

          <Link
            to="/departments"
            onClick={closeMenu}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50"
          >
            <Building2 size={20} />
            Departments
          </Link>

          <Link
            to="/search"
            onClick={closeMenu}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50"
          >
            <Search size={20} />
            Search
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50"
          >
            <Info size={20} />
            About
          </Link>

        </div>
      </div>
    </>
  );
}

export default Navbar;