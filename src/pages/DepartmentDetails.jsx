import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import grs from "../data/grs";

function DepartmentDetails() {
  const { name } = useParams();

  const departmentGRs = grs.filter((gr) => {
    return (
      gr.department.toLowerCase().replace(/\s+/g, "-") ===
      name.toLowerCase()
    );
  });

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-green-700">
          🏛️ {name} Department
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Government Resolutions related to {name}.
        </p>

        {departmentGRs.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold">
              No Government Resolution Found
            </h2>

            <p className="mt-2 text-gray-600">
              This department currently has no GR available.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {departmentGRs.map((gr) => (
              <div
                key={gr.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold">{gr.title}</h2>

                <p className="text-gray-600 mt-2">{gr.summary}</p>

                <div className="mt-4 flex gap-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    📅 {gr.date}
                  </span>

                  <a
                    href={gr.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 text-white px-4 py-2 rounded"
                  >
                    📄 Read GR
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default DepartmentDetails;