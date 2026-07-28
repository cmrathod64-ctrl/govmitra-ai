import { useNavigate } from "react-router-dom";
function Hero() {
   const navigate = useNavigate();

   return (
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-extrabold leading-tight">
          🏛️ GovMitra AI
        </h1>

        <h2 className="text-2xl mt-4 font-semibold">
          AI Powered Government Resolution Assistant
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Search Government Resolutions instantly,
          read AI summaries and access important
          Government Orders in one place.
        </p>

        <div className="mt-10 flex justify-center">

  <button
    onClick={() => navigate("/search")}
    className="bg-white text-green-700 px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-green-100 transition"
  >
    🔍 Start Search
  </button>

</div>
      </div>

    </section>
  );
}

export default Hero;