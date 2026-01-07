import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mykzrero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          message: formData.message,
          _replyto: formData.email,
          _subject: formData.subject || "New Contact Form Submission",
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Error sending message. Please try again.",
      });

      // Hide error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="pt-16 bg-gray-50"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ color: "#003A66" }}
          >
            CONTACT US
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Have a question, suggestion, or want to collaborate with us? Send us
            a message — we'd love to hear from you!
          </motion.p>

          {/* Status Messages */}
          {status.type === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center gap-2"
            >
              <FaCheckCircle />
              <span className="font-medium">{status.message}</span>
            </motion.div>
          )}

          {status.type === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center justify-center gap-2"
            >
              <FaExclamationCircle />
              <span className="font-medium">{status.message}</span>
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-10 text-left border"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  className="block font-bold mb-2"
                  style={{ color: "#003A66" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                  style={{
                    focusRing: "2px solid #0058A2",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0058A2")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block font-bold mb-2"
                  style={{ color: "#003A66" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                  onFocus={(e) => (e.target.style.borderColor = "#0058A2")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                className="block font-bold mb-2"
                style={{ color: "#003A66" }}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                onFocus={(e) => (e.target.style.borderColor = "#0058A2")}
                onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                placeholder="Subject (optional)"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                className="block font-bold mb-2"
                style={{ color: "#003A66" }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none resize-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                onFocus={(e) => (e.target.style.borderColor = "#0058A2")}
                onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 text-white font-bold rounded-md shadow-md hover:opacity-90 transition uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                style={{ backgroundColor: "#0058A2" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaEnvelope />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
