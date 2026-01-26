import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";

export default function Cipher() {
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
            CIPHER 2.0
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-4">
            Innovation • Hackathon
          </p>

          <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            February – March 2026
          </p>

          {/* Event Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/cipher2.0.png"
              alt="Cipher 2.0 – National Innovation & Hackathon Event"
              className="rounded-lg shadow-xl w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              <strong>Cipher 2.0</strong> is a flagship multi-day innovation
              initiative designed to empower undergraduate students across Sri
              Lanka to ideate, build, and pitch impactful technology-driven
              solutions.
            </p>

            <p className="mb-6">
              The event combines hands-on workshops, an intensive hackathon, and
              a competitive pitching phase guiding participants from problem
              identification to viable product concepts.
            </p>

            <p className="mb-6">
              Participants will receive mentorship from industry professionals
              and academics, gaining exposure to real-world product development,
              teamwork, and presentation skills.
            </p>

            <p>
              Cipher 2.0 aims to foster innovation, collaboration, and
              entrepreneurial thinking while creating a national platform for
              young engineers and technologists to showcase their ideas.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
