import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            🏛️ GovMitra AI
          </h1>

          <p className="text-sm text-green-100">
            AI Powered Government Resolution Assistant
          </p>
        </div>

        {/* Navigation */}
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

        {/* Version Badge */}
        <div className="hidden lg:block">
          <span className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold text-sm shadow">
            Version 1.1
          </span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;