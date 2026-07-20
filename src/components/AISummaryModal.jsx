function AISummaryModal({ gr, onClose }) {
  if (!gr) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          🤖 AI Summary
        </h2>

        <p>
          <strong>📄 Title:</strong> {gr.title}
        </p>

        <p className="mt-2">
          <strong>🏛️ Department:</strong> {gr.department}
        </p>

        <p className="mt-2">
          <strong>📅 Date:</strong> {gr.date}
        </p>

        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          {gr.summary}
        </div>
<div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
  <p className="text-sm text-yellow-800">
    ⚠️ This summary is AI-generated and is provided for informational
    purposes only. Please refer to the original Government Resolution (GR)
    and official government sources for authoritative information.
  </p>
</div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          ❌ Close
        </button>

      </div>

    </div>
  );
}

export default AISummaryModal;