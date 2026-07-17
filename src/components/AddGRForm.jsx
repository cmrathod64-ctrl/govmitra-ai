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
  });
const [pdfFile, setPdfFile] = useState(null);
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
let pdfUrl = "";

if (pdfFile) {
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
      });
  setPdfFile(null);
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
            PDF URL
          </label>

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
</div>
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