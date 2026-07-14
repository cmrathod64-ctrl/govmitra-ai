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
              className="rounded-3xl shadow-2xl w-80"
            />
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