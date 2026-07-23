import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function AskAIModal({ gr, onClose }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
useEffect(() => {
  setQuestion("");
  setAnswer("");
  setError("");
}, [gr]);
  if (!gr) return null;

  const handleAsk = async () => {
  if (!question.trim()) {
    alert("Please enter your question.");
    return;
  }

  setLoading(true);
  setAnswer("");
  setError("");

  try {
    const { data, error: functionError } =
      await supabase.functions.invoke("ask-gr-ai", {
        body: {
          question: question.trim(),
          pdfUrl: gr.pdf_url,
        },
      });

    if (functionError) {
      throw functionError;
    }

    if (!data?.answer) {
      throw new Error("AI answer could not be generated.");
    }

    setAnswer(data.answer);
  } catch (err) {
    console.error("Ask AI Error:", err);
    setError(
      err?.message ||
        "AI कडून उत्तर मिळवताना समस्या आली. कृपया पुन्हा प्रयत्न करा."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">

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
{loading && (
  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
    <p className="text-blue-700 font-semibold">
      🤖 AI उत्तर तयार करत आहे...
    </p>
  </div>
)}

{error && (
  <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
    <p className="text-red-700">
      ❌ {error}
    </p>
  </div>
)}

{answer && (
  <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
    <h3 className="font-bold text-green-700 mb-2">
      🤖 AI Answer
    </h3>

    <p className="text-gray-700 whitespace-pre-wrap">
      {answer}
      {answer && (
  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
    <p className="text-sm text-yellow-800">
      ⚠️ This answer is AI-generated and is provided for informational
      purposes only. Please verify the information with the original
      Government Resolution (GR) and official government sources.
    </p>
  </div>
)}
    </p>
  </div>
)}
      </div>
    </div>
  );
}

export default AskAIModal;