import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <section className="max-w-5xl mx-auto text-center py-12 px-4">
      <h2 className="text-4xl font-bold text-slate-800">
        Search Government Resolutions Instantly
      </h2>

      <p className="text-gray-600 mt-4">
        AI आधारित GR Search, Summary आणि सरकारी नियम एका ठिकाणी.
      </p>

      <div className="mt-8 flex justify-center gap-3">
        <input
          type="text"
          placeholder="🔍 Search Government Resolution..."
          className="w-full max-w-2xl p-4 rounded-xl border border-gray-300 shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          onClick={handleSearch}
          className="bg-green-700 text-white px-6 rounded-xl hover:bg-green-800"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;