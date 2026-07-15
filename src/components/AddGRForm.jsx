import { useState } from "react";

function AddGRForm() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    date: "",
    summary: "",
    keywords: "",
    pdf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New GR:", formData);

    alert("GR Form Submitted Successfully!");
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

          <input
            type="text"
            name="pdf"
            value={formData.pdf}
            onChange={handleChange}
            placeholder="/pdfs/sample.pdf"
            className="w-full border rounded-xl p-3"
          />
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