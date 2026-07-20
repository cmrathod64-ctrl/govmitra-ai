import { useState } from "react";

function AskAIModal({ gr, onClose }) {
  const [question, setQuestion] = useState("");

  if (!gr) return null;

  const handleAsk = () => {
    if (!question.trim()) {
      alert("Please enter your question.");
      return;
    }

    alert(`Your Question: ${question}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-700">
            💬 Ask AI About This GR
          </h2>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 text-2xl"
          >
            ✕
          </button>
        </div>

        <h3 className="font-semibold text-gray-800 mb-4">
          📄 {gr.title}
        </h3>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="या GR बद्दल तुमचा प्रश्न विचारा..."
          className="w-full border rounded-lg p-3 min-h-28 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button
          onClick={handleAsk}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
        >
          🤖 Ask AI
        </button>

      </div>
    </div>
  );
}

export default AskAIModal;