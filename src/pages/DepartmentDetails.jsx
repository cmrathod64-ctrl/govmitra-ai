import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import grs from "../data/grs";

function DepartmentDetails() {
  const { name } = useParams();
  const [search, setSearch] = useState("");

  const departmentGRs = grs.filter((gr) => {
    const departmentMatch =
      gr.department.toLowerCase().replace(/\s+/g, "-") ===
      name.toLowerCase();

    const searchMatch =
      gr.title.toLowerCase().includes(search.toLowerCase()) ||
      gr.summary.toLowerCase().includes(search.toLowerCase()) ||
      gr.keywords.some((keyword) =>
        keyword.toLowerCase().includes(search.toLowerCase())
      );

    return departmentMatch && searchMatch;
  });

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-green-700">
          🏛️{" "}
          {name
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(" ")}{" "}
          Department
        </h1>

        <p className="text-gray-600 mt-2">
          Browse Government Resolutions related to this department.
        </p>

        <div className="mt-3 mb-6">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            📄 Total GR : {departmentGRs.length}
          </span>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search Government Resolution..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {departmentGRs.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-8 text-center">

            <h2 className="text-2xl font-bold text-yellow-700">
              No Government Resolution Found
            </h2>

            <p className="mt-2 text-gray-600">
              Try another keyword or check another department.
            </p>

          </div>
        ) : (
          <div className="grid gap-6">

  {departmentGRs.map((gr) => (
              <div
                key={gr.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  {gr.title}
                </h2>

                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    🏛️ {gr.department}
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    📅 {gr.date}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 leading-7">
                  {gr.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {gr.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>

                <a
                  href={gr.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl transition"
                >
                  📄 Read Government Resolution
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

export default DepartmentDetails;