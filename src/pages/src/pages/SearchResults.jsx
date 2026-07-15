import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import grs from "../data/grs";

function SearchResults() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  const results = grs.filter((gr) => {
    const q = query.toLowerCase();

    return (
      gr.title.toLowerCase().includes(q) ||
      gr.department.toLowerCase().includes(q) ||
      gr.summary.toLowerCase().includes(q) ||
      gr.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-green-700">
          🔍 Search Results
        </h1>

        <p className="mt-2 text-gray-600">
          Keyword: <b>{query}</b>
        </p>

        <div className="mt-4 mb-8">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
            {results.length} Results Found
          </span>
        </div>

        {results.length === 0 ? (

          <div className="bg-yellow-50 border rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold">
              No Results Found
            </h2>
          </div>

        ) : (

          <div className="grid gap-6">

            {results.map((gr) => (

              <div
                key={gr.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >

                <h2 className="text-2xl font-bold">
                  {gr.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {gr.summary}
                </p>

                <div className="mt-4 flex gap-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    🏛️ {gr.department}
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    📅 {gr.date}
                  </span>

                </div>

                <a
                  href={gr.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  📄 Read GR
                </a>

              </div>

            ))}

          </div>

        )}

      </div>

      <Footer />

    </>
  );
}

export default SearchResults;