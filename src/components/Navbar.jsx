function Navbar() {
  return (
    <header className="bg-green-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">🏛️ GovMitra AI</h1>
          <p className="text-sm">
            Maharashtra Government Resolution Portal
          </p>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">Departments</a>
          <a href="#" className="hover:text-yellow-300">Latest GR</a>
          <a href="#" className="hover:text-yellow-300">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;