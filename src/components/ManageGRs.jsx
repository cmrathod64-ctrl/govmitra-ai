import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ManageGRs() {
  const [grs, setGrs] = useState([]);
  const [loading, setLoading] = useState(true);
const [editingGR, setEditingGR] = useState(null);
const [editPdfFile, setEditPdfFile] = useState(null);
  useEffect(() => {
    fetchGRs();
  }, []);

  const fetchGRs = async () => {
    const { data, error } = await supabase
      .from("grs")
      .select("*")
      .order("gr_date", { ascending: false });
      
          if (error) {
      console.error("Error fetching GRs:", error);
      setLoading(false);
      return;
    }

    setGrs(data || []);
    setLoading(false);
  };
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this GR?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("grs")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting GR:", error);
    alert("Error deleting GR: " + error.message);
    return;
  }

  alert("GR Deleted Successfully!");

 setGrs((currentGRs) =>
  currentGRs.filter((gr) => gr.id !== id)
);
};
const handleUpdate = async () => {
  if (!editingGR) return;

  let pdfUrl = editingGR.pdf_url;

  // नवीन PDF select केली असेल तर upload करा
  if (editPdfFile) {
    const fileName = `${Date.now()}-${editPdfFile.name}`;

    const { error: uploadError } = await supabase.storage
      .from("gr-pdfs")
      .upload(fileName, editPdfFile);

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
    .update({
      title: editingGR.title,
      department: editingGR.department,
      gr_date: editingGR.gr_date,
      pdf_url: pdfUrl,
      official_source_url: editingGR.official_source_url || null,
    })
    .eq("id", editingGR.id);

  if (error) {
    console.error("Error updating GR:", error);
    alert("Error updating GR: " + error.message);
    return;
  }

  alert("GR Updated Successfully!");

  setGrs((currentGRs) =>
    currentGRs.map((gr) =>
      gr.id === editingGR.id
        ? { ...gr, ...editingGR, pdf_url: pdfUrl }
        : gr
    )
  );

  setEditingGR(null);
  setEditPdfFile(null);
};
  if (loading) {
    
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
       
        <p className="text-gray-600">Loading GRs...</p>
      </div>
    );
  }

  return (
    
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
        {editingGR && (
  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
    <h3 className="text-xl font-bold text-blue-700 mb-4">
      ✏️ Edit Government Resolution
    </h3>

    <input
      type="text"
      value={editingGR.title || ""}
      onChange={(e) =>
        setEditingGR({
          ...editingGR,
          title: e.target.value,
        })
      }
      className="w-full border rounded-lg p-3 mb-3"
      placeholder="GR Title"
    />

    <input
      type="text"
      value={editingGR.department || ""}
      onChange={(e) =>
        setEditingGR({
          ...editingGR,
          department: e.target.value,
        })
      }
      className="w-full border rounded-lg p-3 mb-3"
      placeholder="Department"
    />

    <input
      type="date"
      value={editingGR.gr_date || ""}
      onChange={(e) =>
        setEditingGR({
          ...editingGR,
          gr_date: e.target.value,
        })
      }
      className="w-full border rounded-lg p-3 mb-3"
    />
    <input
  type="url"
  value={editingGR.official_source_url || ""}
  onChange={(e) =>
    setEditingGR({
      ...editingGR,
      official_source_url: e.target.value,
    })
  }
  className="w-full border rounded-lg p-3 mb-3"
  placeholder="Official Government Source URL"
/>
<div className="mb-3">
  <label className="block font-semibold mb-2">
    Replace GR PDF
  </label>

  <input
    type="file"
    accept="application/pdf"
    onChange={(e) => setEditPdfFile(e.target.files[0])}
    className="w-full border rounded-lg p-3"
  />
</div>

<button
  onClick={handleUpdate}
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg mr-3"
>
  💾 Save Changes
</button>
    <button
      onClick={() => setEditingGR(null)}
      className="bg-gray-500 text-white px-4 py-2 rounded-lg"
    >
      Cancel
    </button>
  </div>
)}
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        📄 Manage Government Resolutions
      </h2>

      <p className="text-gray-600 mb-6">
        Total GRs: {grs.length}
      </p>

      {grs.length === 0 ? (
        <p className="text-gray-500">
          No Government Resolutions found.
        </p>
      ) : (
        <div className="space-y-4">
          {grs.map((gr) => (
            <div
              key={gr.id}
              className="border rounded-xl p-4"
            >
              <h3 className="text-lg font-bold">
                {gr.title}
              </h3>

              <p className="text-gray-600 mt-1">
                Department: {gr.department}
              </p>

              <p className="text-gray-500 text-sm mt-1">
  Date: {gr.gr_date}
</p>

<button
  onClick={() => setEditingGR(gr)}
  className="mt-4 mr-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
>
  ✏️ Edit
</button>

<button
  onClick={() => handleDelete(gr.id)}
  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
>
  🗑️ Delete
</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageGRs;