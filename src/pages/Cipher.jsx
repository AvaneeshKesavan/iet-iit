import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";

export default function Cipher() {
  const galleryImages = [
    "/event/cipher1.jpg",
    "/event/cipher2.jpg",
    "/event/cipher3.jpg",
    "/event/cipher4.jpg",
    "/event/cipher5.jpg",
    "/event/cipher6.jpg",
    "/event/cipher7.jpg",
    "/event/cipher8.jpg",
  ];

  return (
    <>
      <NavBar />
      <main
        className="pt-16 bg-gray-50"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1
            className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight"
            style={{ color: "#003A66" }}
          >
            CIPHER EVENT
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The IET Cipher Hackathon challenges students to decode, innovate,
            and excel through competitive programming and problem-solving.
          </p>

          {/* Event Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event2.jpg"
              alt="CIPHER Event"
              className="rounded-lg shadow-xl w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              This inclusive event welcomes participants of all skill levels,
              fostering collaboration, technical growth, and innovative thinking
              while strengthening our engineering community's problem-solving
              capabilities.
            </p>

            <p className="mb-6">
              Participants engaged in challenging coding problems, team-based
              hackathon tasks, and creative solution design. The event
              encouraged learning, experimentation, and peer-to-peer mentoring
              to enhance both individual and group performance.
            </p>

            <p>
              CIPHER Event provided a platform for students to sharpen their
              programming skills, connect with like-minded peers, and showcase
              innovative solutions in a competitive yet collaborative
              environment.
            </p>
          </div>

          {/* Gallery Section */}
          <section className="max-w-7xl mx-auto px-4 md:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight"
              style={{ color: "#003A66" }}
            >
              EVENT GALLERY
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer group border"
                  style={{ borderColor: "#E5E7EB" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
