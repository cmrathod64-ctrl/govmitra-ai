import { useState } from "react";
import { supabase } from "../lib/supabase";
function AddGRForm() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    date: "",
    summary: "",
    keywords: "",
pdf: "",
officialSourceUrl: "",
  });
const [pdfFile, setPdfFile] = useState(null);
const [generatingSummary, setGeneratingSummary] = useState(false);
const [uploadedPdfUrl, setUploadedPdfUrl] = useState("");
const handleGenerateSummary = async () => {
  try {
    if (!pdfFile) {
      alert("Please select a GR PDF first.");
      return;
    }

    setGeneratingSummary(true);

    let pdfUrl = uploadedPdfUrl;

    // Upload PDF only if it has not already been uploaded
    if (!pdfUrl) {
      const fileName = `${Date.now()}-${pdfFile.name}`;

      const { error: uploadError } = await supabase.storage
        .from("gr-pdfs")
        .upload(fileName, pdfFile);

      if (uploadError) {
        console.error("PDF Upload Error:", uploadError);
        alert("Error uploading PDF: " + uploadError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("gr-pdfs")
        .getPublicUrl(fileName);

      pdfUrl = publicUrlData.publicUrl;

      setUploadedPdfUrl(pdfUrl);
    }

    // Send PDF URL to Edge Function
    const { data, error } = await supabase.functions.invoke(
      "generate-gr-summary",
      {
        body: {
          pdfUrl: pdfUrl,
        },
      }
    );

    if (error) {
      console.error("AI Summary Error:", error);
      alert("Error generating AI summary: " + error.message);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      summary: data.summary,
    }));

    alert("AI Summary Generated from PDF Successfully!");
  } catch (error) {
    console.error("AI Summary Error:", error);
    alert("Error generating AI summary.");
  } finally {
    setGeneratingSummary(false);
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("Current Session:", session);

  if (!session) {
    alert("Admin session not found. Please login again.");
    return;
  }

  const keywordArray = formData.keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
let pdfUrl = uploadedPdfUrl;

if (pdfFile && !pdfUrl) {
  const fileName = `${Date.now()}-${pdfFile.name}`;

  const { error: uploadError } = await supabase.storage
    .from("gr-pdfs")
    .upload(fileName, pdfFile);

  if (uploadError) {
    console.error("PDF Upload Error:", uploadError);
    alert("Error uploading PDF: " + uploadError.message);
    return;
  }

  const { data: publicUrlData } = supabase.storage
    .from("gr-pdfs")
    .getPublicUrl(fileName);

  pdfUrl = publicUrlData.publicUrl;
}
  const { error } = await supabase
      .from("grs")
    .insert([
      {
        title: formData.title,
        department: formData.department,
        gr_date: formData.date,
        summary: formData.summary,
        keywords: keywordArray,
        pdf_url: pdfUrl,
        official_source_url: formData.officialSourceUrl || null,
      },
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    alert("Error adding GR: " + error.message);
    return;
  }

  alert("GR Added Successfully!");

  setFormData({
        title: "",
    department: "",
    date: "",
    summary: "",
    keywords: "",
    pdf: "",
    officialSourceUrl: "",
      });
  setPdfFile(null);
setUploadedPdfUrl("");
};
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        ➕ Add New Government Resolution
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
  <label className="block font-semibold mb-2">
    GR Title
  </label>

  <input
    type="text"
    name="title"
    value={formData.title}
    onChange={handleChange}
    placeholder="Enter Government Resolution title"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Department
  </label>

  <input
    type="text"
    name="department"
    value={formData.department}
    onChange={handleChange}
    placeholder="Example: Finance"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

        <div>
          <label className="block font-semibold mb-2">
            GR Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Summary
          </label>

          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Enter GR summary"
            rows="4"
            className="w-full border rounded-xl p-3"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Keywords
          </label>

          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="Example: DA, Salary, Allowance"
            className="w-full border rounded-xl p-3"
          />
        </div>
<div>
  <label className="block font-semibold mb-2">
    🏛️ Official Government Source URL
  </label>

  <input
    type="url"
    name="officialSourceUrl"
    value={formData.officialSourceUrl}
    onChange={handleChange}
    placeholder="Paste official Maharashtra Government GR source URL"
    className="w-full border rounded-xl p-3"
  />

  <p className="text-sm text-gray-500 mt-1">
    Optional: Add the original official government source link for this GR.
  </p>
</div>
        <div>
  <label className="block font-semibold mb-2">
    Upload GR PDF
  </label>

  <input
    type="file"
    accept="application/pdf"
    onChange={(e) => setPdfFile(e.target.files[0])}
    className="w-full border rounded-xl p-3"
  />

  <button
    type="button"
    onClick={handleGenerateSummary}
    disabled={generatingSummary}
    className="mt-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-xl disabled:opacity-50"
  >
    {generatingSummary
      ? "✨ Generating AI Summary..."
      : "✨ Generate AI Summary"}
  </button>
</div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl"
        >
          ➕ Add Government Resolution
        </button>
      </form>
    </div>
  );
}

export default AddGRForm;