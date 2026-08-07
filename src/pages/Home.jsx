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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/30">
      <Hero />

      {/* Departments */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8 flex items-center justify-between">
  <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
    Departments
  </h2>

  </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 xl:grid-cols-4">
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
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 bg-slate-50 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700">
                   Latest Government Resolutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {latestGRs.map((gr) => (
            <div
              key={gr.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]"
            >
              <h3 className="mb-4 line-clamp-2 text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-emerald-700">
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
                className="mt-5 inline-flex items-center rounded-xl bg-emerald-600 px-4 md:px-4 md:px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]"
              >
                📄 Read GR
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added Government Resolutions */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 rounded-3xl bg-slate-50/70">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700">
  Recently Added Government Resolutions
</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {recentGRs.map((gr) => (
            <div
              key={gr.id}
             className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]"
            >
              <h3 className="mb-4 line-clamp-2 text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-emerald-700">
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
                className="mt-5 inline-flex items-center rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]"
              >
                📄 Read GR
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why GovMitra AI */}
      <section className="max-w-7xl mx-auto px-6 py-16 rounded-3xl bg-slate-50/70 backdrop-blur-sm">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-slate-900">
          ⭐ Why GovMitra AI?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl">
            <div className="mb-6 text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110">⚡</div>

            <h3 className="mb-3 text-xl font-bold text-slate-800">
              Instant Search
            </h3>

            <p className="text-gray-600">
              Find Government Resolutions in seconds.
            </p>
          </div>

          <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl">
            <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">🤖</div>

            <h3 className="text-xl font-bold mb-2">
              AI Summary
            </h3>

            <p className="text-gray-600">
              Understand Government Resolutions quickly with AI.
            </p>
          </div>

          <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl">
            <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">📄</div>

            <h3 className="text-xl font-bold mb-2">
              Official PDFs
            </h3>

            <p className="text-gray-600">
              Open official Government Resolution PDFs instantly.
            </p>
          </div>

          <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl">
            <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">🏛️</div>

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