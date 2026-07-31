function About() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <img
              src="/founder.jpg"
              alt="Developer"
              className="rounded-3xl shadow-2xl w-80 md:w-96 border-4 border-green-700"
            />
          </div>

          {/* Right */}
          <div>

            <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT THE DEVELOPER
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
              Chandrakant Madhukar Rathod
            </h1>

            <p className="mt-4 text-xl text-green-700 font-semibold">
              Developer – GovMitra AI
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-8">
              GovMitra AI was created to make Government Resolutions
              easy to search, understand and access using Artificial
              Intelligence.
            </p>

            <div className="mt-8 bg-green-50 border-l-4 border-green-700 p-5 rounded-xl">

              <h3 className="text-xl font-bold text-green-700 mb-2">
                🎯 Mission
              </h3>

              <p className="text-gray-700">
                To simplify Government Resolution search and provide
                faster access to official information for everyone.
              </p>

            </div>

          </div>

        </div>

        {/* Vision Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="text-5xl mb-3">
              🎯
            </div>

            <h3 className="text-xl font-bold text-green-700">
              Vision
            </h3>

            <p className="mt-3 text-gray-600">
              Smart access to Government information for everyone.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="text-5xl mb-3">
              🚀
            </div>

            <h3 className="text-xl font-bold text-blue-700">
              Mission
            </h3>

            <p className="mt-3 text-gray-600">
              Fast, AI Powered and user-friendly Government Resolution
              Search.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="text-5xl mb-3">
              🤖
            </div>

            <h3 className="text-xl font-bold text-purple-700">
              AI Powered
            </h3>

            <p className="mt-3 text-gray-600">
              Smart Search, AI Summary and intelligent information
              retrieval.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="text-5xl mb-3">
              🛡️
            </div>

            <h3 className="text-xl font-bold text-orange-600">
              Transparency
            </h3>

            <p className="mt-3 text-gray-600">
              Making Government information easier to access.
            </p>

          </div>

        </div>

        {/* Disclaimer */}

        <div className="mt-14 bg-yellow-50 border border-yellow-300 rounded-xl p-6">

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