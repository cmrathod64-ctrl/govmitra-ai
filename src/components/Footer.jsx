 import { Link } from "react-router-dom";
function Footer() {
 
  return (
        <footer className="bg-slate-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h2 className="text-3xl font-bold text-green-400">
          🏛️ GovMitra AI
        </h2>

        <p className="mt-3 text-gray-300 text-lg">
          AI Powered Government Resolution Assistant
        </p>

        <p className="mt-2 text-gray-400">
          Making Government Resolutions Smarter, Faster & Simpler.
        </p>
<div className="mt-6 bg-slate-800 rounded-xl p-4 text-sm text-gray-300">
  <p className="font-semibold text-yellow-300">
    ⚠️ Disclaimer
  </p>

  <p className="mt-2">
    GovMitra AI is an independent informational platform and is not an
    official website of the Government of Maharashtra or any government
    department.
  </p>

  <p className="mt-2">
    AI-generated summaries and answers are provided for informational
    purposes only. Users should always refer to the original Government
    Resolution (GR) and official government sources for authoritative
    information.
  </p>
</div>
        <div className="border-t border-gray-700 my-8"></div>

        <p className="text-gray-300 font-semibold">
          Founder & Developer
        </p>

        <h3 className="text-xl font-bold text-white mt-2">
          Chandrakant Madhukar Rathod
        </h3>
<div className="mt-6">
  <Link
    to="/privacy-policy"
    className="text-green-400 hover:text-green-300 underline"
  >
    Privacy Policy
  </Link><span className="mx-3 text-gray-500">|</span>

<Link
  to="/terms"
  className="text-green-400 hover:text-green-300 underline"
>
  Terms & Conditions
</Link>
</div>
        <p className="mt-5 text-gray-500 text-sm">
          © 2026 GovMitra AI. All Rights Reserved.
        </p>

        <p className="mt-2 text-gray-500 text-sm">
          Made with ❤️ in India 🇮🇳
        </p>

      </div>

    </footer>
  );
}

export default Footer;