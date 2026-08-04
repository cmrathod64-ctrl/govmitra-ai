import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">

  <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-3xl"></div>

  <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            AI Powered Government Platform
          </span>

          <h1 className="mt-6 text-6xl lg:text-7xl font-black">GovMitra AI</h1>
          <h2 className="mt-4 text-2xl font-semibold text-emerald-300">
            AI Powered Government Resolution Assistant
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Search Government Resolutions instantly, read AI summaries and access official documents from one place.
          </p>

          <div className="mt-8 flex items-center rounded-2xl border border-slate-700 bg-slate-900 p-2">
  <div className="flex flex-1 items-center px-4">
    <Search className="mr-3 text-slate-400" size={20} />
    <input
      type="text"
      placeholder="Search Government Resolution..."
      className="w-full bg-transparent text-white placeholder:text-slate-400 outline-none"
    />
  </div>

  <button
    onClick={() => navigate("/search")}
    className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600 transition-all"
  >
    Search
  </button>
</div>

          <div className="mt-5 flex flex-wrap gap-2">
            {['7th Pay','Leave Rules','Transfer','Forest'].map((tag)=>(
              <span key={tag} className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{tag}</span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[['10+','Departments'],['280+','GRs'],['AI','Search'],['24x7','Access']].map(([v,l])=>(
              <div key={l} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center hover:-translate-y-2 hover:border-emerald-500 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400">{v}</div>
                <div className="mt-1 text-sm text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/images/hero-building.png" alt="GovMitra AI" className="w-full max-w-4xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
