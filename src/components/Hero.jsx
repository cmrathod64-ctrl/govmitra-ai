function Hero() {
  return (
    <section className="max-w-5xl mx-auto text-center py-12 px-4">
      <h2 className="text-4xl font-bold text-slate-800">
        Search Government Resolutions Instantly
      </h2>

      <p className="text-gray-600 mt-4">
        AI आधारित GR Search, Summary आणि सरकारी नियम एका ठिकाणी.
      </p>

      <input
        type="text"
        placeholder="🔍 Search Government Resolution..."
        className="mt-8 w-full max-w-2xl p-4 rounded-xl border border-gray-300 shadow"
      />
    </section>
  );
}

export default Hero;