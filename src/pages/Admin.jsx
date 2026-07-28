import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddGRForm from "../components/AddGRForm";
import ManageGRs from "../components/ManageGRs";
import BulkImportGR from "../components/BulkImportGR";
function Admin() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold text-green-700">
            🛠️ Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Manage GovMitra AI Government Resolutions
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl">📄</div>
              <h2 className="text-xl font-bold mt-3">
                Manage GRs
              </h2>
              <p className="text-gray-600 mt-2">
                View, edit and delete Government Resolutions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl">➕</div>
              <h2 className="text-xl font-bold mt-3">
                Add New GR
              </h2>
              <p className="text-gray-600 mt-2">
                Add a new Government Resolution to GovMitra AI.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl">📊</div>
              <h2 className="text-xl font-bold mt-3">
                Dashboard Stats
              </h2>
              <p className="text-gray-600 mt-2">
                View GR and department statistics.
              </p>
            </div>
             

          </div>
<AddGRForm />
<BulkImportGR />
<ManageGRs />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admin;