import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 via-slate-200 to-sky-100 text-slate-900">
      <div
        className="absolute inset-0 bg-right bg-no-repeat bg-cover opacity-100"
        style={{ backgroundImage: "url('/images/hero-building.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] md:min-h-[88vh] max-w-7xl items-center px-5 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl text-center md:text-left">
          <div className="mb-5 hidden md:block">
  <div className="inline-flex rounded-3xl border border-white/30 bg-white/15 p-4 backdrop-blur-md shadow-lg">
    <img
      src="/logo.png"
      alt="GovMitra AI Logo"
      className="h-20 md:h-28 w-auto opacity-90"
    />
  </div>

  <div className="mt-4">
    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-700">
      AI Powered Government Platform
    </span>
  </div>
</div>

          <h1 className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900">
            GovMitra <span className="text-emerald-400">AI</span>
          </h1>

         <h2 className="mt-3 md:mt-4 text-xl md:text-2xl font-semibold text-emerald-600">
            AI Powered Government Resolution Assistant
          </h2>

        <p className="mt-4 md:mt-6 max-w-md mx-auto md:mx-0 text-sm md:text-lg leading-7 text-slate-700">
            Search Government Resolutions instantly, read AI summaries and access official Government Orders in one place.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
  <button
    onClick={() => navigate("/search")}
    className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-2xl bg-emerald-600 px-6 md:px-10 text-base md:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-700 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] whitespace-nowrap"
  >
    <Search size={20} className="mr-2" />
    Search Government Resolutions
  </button>
  </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-15 w-full bg-gradient-to-b from-transparent to-slate-50"></div>
    </section>
  );
}
