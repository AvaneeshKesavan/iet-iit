import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";

export default function Dansala() {
  const galleryImages = [
    "/event/dansala1.jpg",
    "/event/dansala2.jpg",
    "/event/dansala3.jpg",
    "/event/dansala4.jpg",
    "/event/dansala5.jpg",
    "/event/dansala6.jpg",
    "/event/dansala7.jpg",
    "/event/dansala8.jpg",
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
            ICE CREAM DANSALA
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The IET on Campus IIT successfully conducted an ice cream dansala,
            demonstrating our chapter's commitment to community service and
            cultural engagement.
          </p>

          {/* Event Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event3.jpg"
              alt="Ice Cream Dansala"
              className="rounded-lg shadow-xl w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              This initiative strengthened community bonds and showcased our
              chapter's dedication to contributing positively to campus life
              beyond our technical activities.
            </p>

            <p className="mb-6">
              The event took place on 14th May 2025 and was successfully
              concluded with positive community feedback. Participants,
              volunteers, and attendees enjoyed engaging activities, fostering
              collaboration and camaraderie within the campus community.
            </p>

            <p>
              Ice Cream Dansala highlighted the value of service, inclusivity,
              and community spirit, reflecting the IET chapter's commitment to
              meaningful engagement beyond academic and technical pursuits.
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
