import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate sending email
    setTimeout(() => {
      console.log("Email sent to:", "kesavan.avaneesh@gmail.com", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reload page after 1.5s
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 1500);
  };

  return (
    <div className="pt-16 bg-gray-50">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CONTACT US
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Have a question, suggestion, or want to collaborate with us? Send us
            a message — we’d love to hear from you!
          </motion.p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label className="block text-gray-800 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
              >
                <FaEnvelope className="inline mr-2" />
                Send Message
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <p className="text-center mt-4 text-gray-700 font-medium">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
