import departments from "../data/departments";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Hero from "../components/Hero";
import DepartmentCard from "../components/DepartmentCard";

function Home() {
  const [recentGRs, setRecentGRs] = useState([]);
  const [latestGRs, setLatestGRs] = useState([]);

  useEffect(() => {
    const fetchGRs = async () => {
      const { data: recentData } = await supabase
        .from("grs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(2);

      setRecentGRs(recentData || []);

      const { data: latestData } = await supabase
        .from("grs")
        .select("*")
        .order("gr_date", { ascending: false })
        .limit(2);

      setLatestGRs(latestData || []);
    };

    fetchGRs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <Hero />

      {/* Departments */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Departments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              icon={department.icon}
              title={department.title}
              value={department.value}
            />
          ))}
        </div>
      </section>

      {/* Recently Added Government Resolutions */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-green-700">
          🆕 Recently Added Government Resolutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {recentGRs.map((gr) => (
            <div
              key={gr.id}
              className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {gr.title}
              </h3>

              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                🏛️ {gr.department}
              </span>

              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm ml-2">
                📅 {gr.gr_date}
              </span>

              <a
                href={gr.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                📄 Read GR
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Government Resolutions */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-green-700">
          📅 Latest Government Resolutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {latestGRs.map((gr) => (
            <div
              key={gr.id}
              className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {gr.title}
              </h3>

              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                🏛️ {gr.department}
              </span>

              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm ml-2">
                📅 {gr.gr_date}
              </span>

              <a
                href={gr.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                📄 Read GR
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why GovMitra AI */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          ⭐ Why GovMitra AI?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">⚡</div>

            <h3 className="text-xl font-bold mb-2">
              Instant Search
            </h3>

            <p className="text-gray-600">
              Find Government Resolutions in seconds.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🤖</div>

            <h3 className="text-xl font-bold mb-2">
              AI Summary
            </h3>

            <p className="text-gray-600">
              Understand Government Resolutions quickly with AI.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">📄</div>

            <h3 className="text-xl font-bold mb-2">
              Official PDFs
            </h3>

            <p className="text-gray-600">
              Open official Government Resolution PDFs instantly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🏛️</div>

            <h3 className="text-xl font-bold mb-2">
              Smart Search
            </h3>

            <p className="text-gray-600">
              Search by Department, Title and Keywords.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;