import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";

export default function Installation() {
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
            ASCEND 2026
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-4">
            Installation Ceremony & Annual General Meeting
          </p>

          <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            February 11, 2026
          </p>

          {/* Event Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/hero/hero6.png"
              alt="Ascend 2026 – IET On Campus IIT Installation Ceremony"
              className="rounded-lg shadow-xl w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              <strong>Ascend 2026</strong> marks a significant milestone for the
              IET On Campus IIT community, bringing together the Installation
              Ceremony and the Annual General Meeting on a single distinguished
              occasion.
            </p>

            <p className="mb-6">
              This event will formally induct the new executive committee for
              the upcoming term, symbolizing leadership, responsibility, and a
              renewed commitment to advancing engineering excellence within the
              campus.
            </p>

            <p className="mb-6">
              The Annual General Meeting will reflect on the achievements of the
              previous year, present key reports, and outline the strategic
              vision and initiatives planned for the year ahead.
            </p>

            <p>
              Ascend 2026 is designed to inspire growth, collaboration, and
              innovation—strengthening the bond between students, faculty, and
              the wider engineering community as we step into a new chapter.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
