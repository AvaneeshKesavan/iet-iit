import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Cipher() {
  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CIPHER Event
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The IET Cipher Hackathon challenges students to decode, innovate,
            and excel through competitive programming and problem-solving.
          </p>

          {/* Event Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event2.jpg"
              alt="CIPHER Event"
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
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
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
