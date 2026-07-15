import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar() {

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    
    <header className="sticky top-0 z-50 bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="GovMitra AI"
    className="w-12 h-12 rounded-lg"
  />

  <div>
    <h1 className="text-2xl font-bold">GovMitra AI</h1>

    <p className="text-sm">
      Maharashtra Government Resolution Portal
    </p>
  </div>
</div>

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
<form
  onSubmit={handleSearch}
  className="hidden lg:flex items-center gap-2"
>
  <input
    type="text"
    placeholder="Search GR..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="px-3 py-2 rounded-lg text-black w-64 outline-none"
  />

  <button
    type="submit"
    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
  >
    🔍
  </button>
</form>
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