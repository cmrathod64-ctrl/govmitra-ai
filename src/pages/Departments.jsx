import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import departments from "../data/departments";
import DepartmentCard from "../components/DepartmentCard";

function Departments() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-green-700 mb-3">
          🏛️ All Government Departments
        </h1>

        <p className="text-gray-600 mb-8">
          Select a department to browse Government Resolutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              icon={department.icon}
              title={department.title}
            />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Departments;