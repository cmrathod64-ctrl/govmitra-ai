function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          About GovMitra AI
        </h1>

        <p className="text-lg text-gray-700 text-center leading-8">
          GovMitra AI is an independent initiative designed to simplify
          Maharashtra Government Resolutions using modern technology and
          Artificial Intelligence.
        </p>

        <div className="border-t my-10"></div>

        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          👨‍💻 About the Founder
        </h2>

        <div className="text-center">

          <div className="w-36 h-36 rounded-full bg-green-100 flex items-center justify-center mx-auto text-6xl">
            👤
          </div>

          <h3 className="text-2xl font-bold mt-6">
            Chandrakant Madhukar Rathod
          </h3>

          <p className="text-green-700 font-semibold mt-2">
            Chief Accountant
          </p>

          <p className="text-gray-600">
            Forest Department, Maharashtra
          </p>

          <p className="text-gray-600 mt-2">
            Founder & Developer – GovMitra AI
          </p>

        </div>

        <div className="mt-12">

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🎯 Vision
          </h2>

          <p className="text-gray-700 leading-8">
            The vision of GovMitra AI is to make Government Resolutions
            easier to search, understand and access for Government
            Employees through Artificial Intelligence.
          </p>

        </div>

        <div className="mt-10 bg-green-50 border-l-4 border-green-700 p-6 rounded-lg">

          <h2 className="text-2xl font-bold text-green-700 mb-3">
            💚 Our Mission
          </h2>

          <p className="text-gray-700 leading-8">
            Technology should simplify Government information, not
            complicate it.
          </p>

        </div>

        <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">

          <h2 className="text-xl font-bold mb-3">
            Disclaimer
          </h2>

          <p className="text-gray-700 leading-8">
            GovMitra AI is an independent project developed for educational
            and informational purposes. It is not an official Government
            of Maharashtra website.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;