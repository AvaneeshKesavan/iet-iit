import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";

export default function Installation() {
  const galleryImages = [
    "/event/installation1.jpg",
    "/event/installation2.jpg",
    "/event/installation3.jpg",
    "/event/installation4.jpg",
    "/event/installation5.jpg",
    "/event/installation6.jpg",
    "/event/installation7.jpg",
    "/event/installation8.jpg",
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            IET Installation Ceremony
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The IET On Campus IIT Term 24/25 Installation Ceremony exemplified
            our dedication to fostering future engineers.
          </p>

          {/* Event Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event5.jpg"
              alt="IET Installation Ceremony"
              className="rounded-2xl shadow-xl w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              Our installation event succeeded due to the collective effort of
              our IET chapter members, faculty support, and enthusiastic student
              participation.
            </p>

            <p className="mb-6">
              The ceremony celebrated leadership, dedication, and the spirit of
              innovation, formally inducting the new committee for the term
              24/25. It provided a platform for students to connect with peers,
              faculty, and industry professionals, reinforcing our chapter's
              commitment to excellence in engineering education.
            </p>

            <p>
              The event also highlighted achievements from the previous term and
              set the vision for upcoming initiatives, ensuring continuous
              growth and engagement within the IET community.
            </p>
          </div>

          {/* Gallery Section */}
          <section className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Event Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
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
