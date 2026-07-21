import { useState } from "react";
import { supabase } from "../lib/supabase";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { error } = await supabase
    .from("feedback")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

  if (error) {
    console.error("Feedback Error:", error);
    alert("❌ Feedback submit झाला नाही. कृपया पुन्हा प्रयत्न करा.");
    return;
  }

  alert("✅ Thank you! तुमचा Feedback successfully submit झाला.");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10">

        <h1 className="text-3xl font-bold text-green-700 mb-3">
          Contact & Feedback
        </h1>

        <p className="text-gray-600 mb-8">
          GovMitra AI बद्दल तुमच्या सूचना, अभिप्राय किंवा समस्या आम्हाला
          कळवा. तुमचा अभिप्राय GovMitra AI अधिक उपयुक्त बनवण्यासाठी मदत करेल.
        </p>

        {/* Contact Information */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-5">
          <h2 className="text-xl font-bold text-green-700 mb-3">
            Contact Information
          </h2>

          <p className="text-gray-700">
            <strong>Founder & Developer:</strong> Chandrakant Madhukar Rathod
          </p>

          <p className="text-gray-700 mt-2">
            <strong>Email:</strong> govmitraai@gmail.com
          </p>

          <p className="text-gray-700 mt-2">
            <strong>Contact:</strong> 9834839716
          </p>

          <p className="text-gray-700 mt-2">
            <strong>WhatsApp:</strong> Available on same number
          </p>
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              नाव
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="तुमचे नाव"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              संदेश / Feedback
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="तुमचा संदेश किंवा अभिप्राय येथे लिहा..."
              required
              rows="6"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl"
          >
            📩 Send Feedback
          </button>

        </form>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-sm text-gray-700">
            <strong>टीप:</strong> GovMitra AI हे महाराष्ट्र शासनाचे अधिकृत
            संकेतस्थळ नाही. अधिकृत शासकीय तक्रार, अर्ज किंवा सेवा-संबंधित
            विनंतीसाठी संबंधित अधिकृत शासकीय विभागाशी संपर्क साधावा.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;