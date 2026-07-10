import departments from "../data/departments";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DepartmentCard from "../components/DepartmentCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Departments</h2>

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
    </div>
  );
}

export default Home;