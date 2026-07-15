function SearchCard({ gr, onOpenSummary }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border">

      <h2 className="text-2xl font-bold">
        {gr.title}
      </h2>

      <div className="flex gap-2 mt-3 flex-wrap">

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
          onClick={() => onOpenSummary(gr)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          🤖 AI Summary
        </button>

      </div>

    </div>
  );
}

export default SearchCard;