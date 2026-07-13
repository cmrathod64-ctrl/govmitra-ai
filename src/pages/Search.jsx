import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import grs from "../data/grs";

function Search() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("query") || ""
  );

  const [selectedGR, setSelectedGR] = useState(null);
  const [department, setDepartment] = useState("All");
  const [year, setYear] = useState("All");

  // Dynamic Department List
  const departments = [
    "All",
    ...new Set(grs.map((gr) => gr.department)),
  ];

  // Dynamic Year List
  const years = [
    "All",
    ...new Set(
      grs.map((gr) => gr.date.split("-")[2])
    ),
  ].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return b - a;
  });

  // Search + Filters
  const filteredGRs = grs.filter((gr) => {
    const matchesSearch =
      gr.title.toLowerCase().includes(search.toLowerCase()) ||
      gr.department.toLowerCase().includes(search.toLowerCase()) ||
      gr.keywords.some((keyword) =>
        keyword.toLowerCase().includes(search.toLowerCase())
      );

    const matchesDepartment =
      department === "All" ||
      gr.department === department;

    const matchesYear =
      year === "All" ||
      gr.date.endsWith(year);

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesYear
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        🔍 Search Government Resolutions
      </h1>

      <input
        type="text"
        placeholder="Search by Department, Title or Keyword..."
        className="w-full border rounded-lg p-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-4 mt-5">

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-lg p-3"
        >
          {departments.map((dept) => (
            <option key={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-lg p-3"
        >
          {years.map((yr) => (
            <option key={yr}>
              {yr}
            </option>
          ))}
        </select>

      </div>

      <div className="mt-5 mb-6 text-gray-600 font-semibold">
        Found {filteredGRs.length} Government Resolution
        {filteredGRs.length !== 1 ? "s" : ""}
      </div>

      <div className="space-y-4">

        {filteredGRs.length === 0 ? (

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">

            <h2 className="text-2xl font-bold text-red-600">
              😔 No Government Resolution Found
            </h2>

            <p className="mt-3 text-gray-600">
              Try searching with another keyword,
              department or year.
            </p>

          </div>

        ) : (

          filteredGRs.map((gr) => (
            <div
              key={gr.id}
              className="bg-white shadow-lg rounded-xl p-5 border"
            >

              <h2 className="text-2xl font-bold">
                {gr.title}
              </h2>              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  🏛️ {gr.department}
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  📅 {gr.date}
                </span>
              </div>

              <p className="mt-4 text-gray-700">
                {gr.summary}
              </p>

              <div className="mt-5 flex gap-3 flex-wrap">

                <a
                  href={gr.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
                >
                  📄 Open PDF
                </a>

                <button
                  onClick={() => setSelectedGR(gr)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  🤖 AI Summary
                </button>

              </div>

            </div>
          ))

        )}

      </div>

      {selectedGR && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-2xl">

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🤖 AI Summary
            </h2>

            <p>
              <strong>📄 Title:</strong> {selectedGR.title}
            </p>

            <p className="mt-2">
              <strong>🏛️ Department:</strong> {selectedGR.department}
            </p>

            <p className="mt-2">
              <strong>📅 Date:</strong> {selectedGR.date}
            </p>

            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              {selectedGR.summary}
            </div>

            <button
              onClick={() => setSelectedGR(null)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg w-full"
            >
              ❌ Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Search;