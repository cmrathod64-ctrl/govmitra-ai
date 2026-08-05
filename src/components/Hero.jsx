import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white">
      <div
        className="absolute inset-0 bg-right bg-no-repeat bg-contain opacity-90"
        style={{ backgroundImage: "url('/images/hero-building.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            AI Powered Government Platform
          </span>

          <h1 className="mt-6 text-6xl font-black lg:text-7xl">
            GovMitra <span className="text-emerald-400">AI</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-emerald-300">
            AI Powered Government Resolution Assistant
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Search Government Resolutions instantly, read AI summaries and access official Government Orders in one place.
          </p>

          <div className="mt-8 flex max-w-3xl rounded-2xl bg-white p-2 shadow-xl">
            <input className="flex-1 rounded-xl px-4 py-3 text-slate-800 outline-none" placeholder="GR क्रमांक, विषय, विभाग शोधा..." />
            <button onClick={() => navigate('/search')} className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700">
              <Search className="mr-2 inline" size={18} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
