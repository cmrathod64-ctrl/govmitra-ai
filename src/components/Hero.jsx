import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-extrabold leading-tight">
          🏛️ GovMitra AI
        </h1>

        <h2 className="text-2xl mt-4 font-semibold">
          AI Powered Government Resolution Assistant
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Search Government Resolutions instantly,
          read AI summaries and access important
          Government Orders in one place.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="text"
            placeholder="🔍 Search Government Resolution..."
            className="w-full md:w-[500px] rounded-xl p-4 text-black shadow-lg outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <button
            onClick={handleSearch}
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-100 transition"
          >
            Search
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;