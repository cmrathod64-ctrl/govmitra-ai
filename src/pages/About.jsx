import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="rounded-3xl shadow-2xl w-96 border-4 border-green-700"
            />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4">

  <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-green-700">
    <h3 className="text-xl font-bold text-green-700">🎯 Vision</h3>
    <p className="mt-2 text-gray-600">
      Smart access to Government Information for every citizen.
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-yellow-500">
    <h3 className="text-xl font-bold text-yellow-600">🚀 Mission</h3>
    <p className="mt-2 text-gray-600">
      Make Government Resolutions simple, searchable and AI Powered.
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-blue-600">
    <h3 className="text-xl font-bold text-blue-700">🛡 Goal</h3>
    <p className="mt-2 text-gray-600">
      Transparent governance through technology and innovation.
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-purple-600">
    <h3 className="text-xl font-bold text-purple-700">💡 Belief</h3>
    <p className="mt-2 text-gray-600">
      Technology becomes meaningful when it solves real problems.
    </p>
  </div>

</div>

          <div>

            <h2 className="text-4xl font-bold text-green-700">
              Founder
            </h2>

            <h1 className="text-5xl font-bold mt-3">
              Chandrakant Madhukar Rathod
            </h1>

            <p className="mt-6 text-xl font-semibold">
              Chief Accountant
            </p>

            <p className="text-lg text-gray-600">
              Forest Department, Maharashtra
            </p>

            <p className="mt-6 text-xl font-semibold text-green-700">
              Founder & Developer
            </p>

            <p className="text-lg">
              GovMitra AI
            </p>

            <div className="mt-8 bg-green-50 border-l-4 border-green-700 p-5 rounded">

              <p className="italic text-lg">
                "Making Government Resolutions
                Simple, Fast and AI Powered."
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;