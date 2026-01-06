import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function FusionNxt() {
  return (
    <>
      <NavBar />
      <main
        className="pt-16 bg-gray-50"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1
            className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight"
            style={{ color: "#003A66" }}
          >
            FUSIONXT
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            FusioNxt is an exciting gaming competition organized by IET On
            Campus IIT, designed to bring together gamers, coders, and tech
            enthusiasts for a fun and challenging event experience.
          </p>

          <div className="flex justify-center mb-12">
            <img
              src="/event/event4.jpg"
              alt="FusioNxt"
              className="rounded-lg shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
            <p className="mb-6">
              FusioNxt aims to celebrate creativity, teamwork, and innovation in
              gaming. The event features multiple categories, including
              competitive e-sports, coding challenges, and interactive tech
              exhibitions.
            </p>
            <p className="mb-6">
              Whether you're a gamer or developer, FusioNxt offers a platform to
              connect, compete, and learn. Prizes and recognition await top
              performers.
            </p>
            <p>
              Stay tuned for official dates and registration details — FusioNxt
              is coming soon!
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
