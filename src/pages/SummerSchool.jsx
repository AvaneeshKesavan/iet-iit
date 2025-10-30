import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";

export default function SummerSchool() {
  const galleryImages = [
    "/event/Summer1.jpg",
    "/event/Summer2.jpg",
    "/event/Summer3.jpg",
    "/event/Summer4.jpg",
    "/event/Summer5.jpg",
    "/event/Summer6.jpg",
    "/event/Summer7.jpg",
    "/event/Summer8.jpg",
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            IET Summer School
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The IET Summer School is a 4-week technology awareness programme
            designed to inspire and empower students from schools and
            universities.
          </p>

          {/* Event Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event1.jpg"
              alt="IET Summer School"
              className="rounded-2xl shadow-xl w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              Through interactive sessions, hands-on activities, and industry
              exposure, the programme aims to build curiosity, enhance technical
              knowledge, and encourage innovation among the next generation of
              tech leaders.
            </p>

            <p className="mb-6">
              The course covered essential topics including Python basics, UI/UX
              design principles, front-end development, back-end development,
              and database integration. Participants also received an
              introduction to AI to gain a competitive view of modern computing.
            </p>

            <p>
              IET Summer School offered students a unique opportunity to learn,
              experiment, and collaborate, equipping them with skills and
              insights to excel in technology and innovation.
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
