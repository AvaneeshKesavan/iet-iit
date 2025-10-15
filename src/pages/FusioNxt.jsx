import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function FusionNxt() {
  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            FusioNxt
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            FusioNxt is an exciting gaming competition organized by IET On
            Campus IIT, designed to bring together gamers, coders, and tech
            enthusiasts for a fun and challenging event experience.
          </p>

          {/* Event Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event4.jpg"
              alt="FusioNxt"
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
            <p className="mb-6">
              FusioNxt aims to celebrate creativity, teamwork, and innovation in
              the field of gaming. The event features multiple categories,
              including competitive e-sports, coding challenges, and interactive
              tech exhibitions. Participants can showcase their technical and
              strategic skills while engaging with peers across various
              disciplines.
            </p>

            <p className="mb-6">
              Whether you're a passionate gamer or a developer fascinated by the
              mechanics of interactive entertainment, FusioNxt offers a platform
              to connect, compete, and learn. Prizes and recognition await top
              performers, along with valuable networking opportunities.
            </p>

            <p>
              Stay tuned for official dates and registration details —
              FusioNxt is coming soon!
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
