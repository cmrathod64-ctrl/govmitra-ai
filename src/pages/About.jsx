function About() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <img
              src="/founder.jpg"
              alt="Developer"
             className="rounded-3xl w-70 md:w-70 border border-emerald-400/40 bg-white p-2 shadow-xl shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.30)]"
            />
          </div>

          {/* Right */}
          <div>

            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700">
              ABOUT THE DEVELOPER
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
              Chandrakant Madhukar Rathod
            </h1>
<div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"></div>
            <p className="mt-4 text-xl text-slate-900 group-hover:text-emerald-700 transition-colors duration-300 font-semibold">
              Developer – GovMitra AI
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-8">
              GovMitra AI was created to make Government Resolutions
              easy to search, understand and access using Artificial
              Intelligence.
            </p>

            <div className="group mt-8 rounded-3xl border border-emerald-300 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-lg shadow-emerald-500/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]">

              <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                🎯 Mission
              </h3>

              <p className="text-gray-700 transition-colors duration-300 group-hover:text-slate-900">
                To simplify Government Resolution search and provide
                faster access to official information for everyone.
              </p>

            </div>

          </div>

        </div>

        {/* Vision Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.20)]">

            <div className="mb-3 text-5xl transition-transform duration-300 group-hover:scale-110">
              🎯
            </div>

            <h3 className="text-xl font-group-hover:text-emerald-700 text-slate-900 transition-colors duration-300">
              Vision
            </h3>

            <p className="mt-3 text-gray-600">
              Smart access to Government information for everyone.
            </p>

          </div>

          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.20)]">

            <div className="text-5xl mb-3">
              🚀
            </div>

            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
              Mission
            </h3>

            <p className="mt-3 text-gray-600">
              Fast, AI Powered and user-friendly Government Resolution
              Search.
            </p>

          </div>

          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.20)]">

            <div className="text-5xl mb-3">
              🤖
            </div>

            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
              AI Powered
            </h3>

            <p className="mt-3 text-gray-600">
              Smart Search, AI Summary and intelligent information
              retrieval.
            </p>

          </div>

          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.20)]">

            <div className="text-5xl mb-3">
              🛡️
            </div>

            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
              Transparency
            </h3>

            <p className="mt-3 text-gray-600">
              Making Government information easier to access.
            </p>

          </div>

        </div>

        {/* Disclaimer */}

        <div className="mt-14 rounded-3xl border border-amber-300 bg-white p-6 shadow-lg">

          <h3 className="text-xl font-bold text-yellow-700 mb-3">
            ⚠️ Disclaimer
          </h3>

          <p className="text-gray-700 leading-8">
            GovMitra AI is an independent initiative developed to help
            users search and understand Government Resolutions easily.
            This is <strong>not an official Government website</strong>.
            For official Government Resolutions, please refer to the
            official website of the Government of Maharashtra.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;