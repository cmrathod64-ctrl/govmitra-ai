import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ManageGRs() {
  const [grs, setGrs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGRs();
  }, []);

  const fetchGRs = async () => {
    const { data, error } = await supabase
      .from("grs")
      .select("*")
      .order("gr_date", { ascending: false });
      
      <button
  onClick={() => handleDelete(gr.id)}
  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
>
  🗑️ Delete
</button>

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
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
        <p className="text-gray-600">Loading GRs...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
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
                <button
  onClick={() => handleDelete(gr.id)}
  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
>
  🗑️ Delete
</button>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageGRs;