import { useState } from "react";
import grs from "../data/grs";

function Search() {
  const [search, setSearch] = useState("");

  const filteredGRs = grs.filter((gr) =>
    gr.title.toLowerCase().includes(search.toLowerCase()) ||
    gr.department.toLowerCase().includes(search.toLowerCase()) ||
    gr.keywords.some((keyword) =>
      keyword.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        🔍 Search Government Resolutions
      </h1>

      <input
        type="text"
        placeholder="Search by Department, Title or Keyword..."
        className="w-full border rounded-lg p-3 mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-4">
        {filteredGRs.map((gr) => (
          <div
            key={gr.id}
            className="bg-white shadow rounded-lg p-5 border"
          >
            <h2 className="text-xl font-bold">{gr.title}</h2>

            <p className="text-gray-600">
              <strong>Department:</strong> {gr.department}
            </p>

            <p className="text-gray-600">
              <strong>Date:</strong> {gr.date}
            </p>

            <p className="mt-2">{gr.summary}</p>

          <div className="mt-4 flex gap-3">
  <a
  href={gr.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 inline-block"
>
  📄 Open PDF
</a>

  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    🤖 AI Summary
  </button>
</div></div>

        ))}
      </div>
    </div>
  );
}

export default Search;