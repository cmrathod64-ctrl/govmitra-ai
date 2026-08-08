import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-200 bg-slate-100 text-slate-800">
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600">🤖 GovMitra AI</h2>

        <p className="mt-3 text-base md:text-lg text-slate-600">
          AI Powered Maharashtra Government Resolution Search Platform
        </p>

        <p className="mt-2 text-slate-500">
          Making Government Resolutions Smarter, Faster & Simpler.
        </p>

        <div className="mt-6 rounded-xl border border-slate-300 bg-white p-4 md:p-6 text-xs md:text-sm text-slate-600 shadow-lg">
          <p className="font-semibold text-amber-600">⚠️ Disclaimer</p>

          <p className="mt-2">
            GovMitra AI is an independent informational platform and is not an official website of the Government of Maharashtra or any government department.
          </p>

          <p className="mt-2">
            AI-generated summaries and answers are provided for informational purposes only. Users should always refer to the original Government Resolution (GR) and official government sources for authoritative information.
          </p>
        </div>

        <div className="my-8 border-t border-slate-300"></div>

                <p className="mt-2 text-emerald-600">🌐 www.gov-mitra.com</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/privacy-policy" className="text-emerald-600 underline hover:text-emerald-700">🔒 Privacy Policy</Link>
          <span className="mx-3 text-slate-400">|</span>
          <Link to="/terms" className="text-emerald-600 underline hover:text-emerald-700">📜 Terms</Link>
          <span className="mx-3 text-slate-400">|</span>
          <Link to="/contact" className="text-emerald-600 underline hover:text-emerald-700">📞 Contact</Link>
        </div>

        <p className="mt-5 text-xs md:text-sm text-slate-500">© 2026 GovMitra AI. All Rights Reserved.</p>
        <p className="mt-2 text-xs md:text-sm text-slate-500">Made with ❤️ in India 🇮🇳</p>
        <p className="mt-1 text-xs text-slate-500">Version 1.0.0</p>
      </div>
    </footer>
  );
}

export default Footer;
