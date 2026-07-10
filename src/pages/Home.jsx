import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DepartmentCard from "../components/DepartmentCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8">
          Departments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <DepartmentCard icon="🌳" title="Forest" />

          <DepartmentCard icon="💰" title="Finance" />

          <DepartmentCard icon="🏛️" title="General Administration" />

          <DepartmentCard icon="📚" title="Education" />

          <DepartmentCard icon="🌾" title="Agriculture" />

          <DepartmentCard icon="💧" title="Water Resources" />

          <DepartmentCard icon="🚔" title="Police" />

          <DepartmentCard icon="🏥" title="Health" />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;