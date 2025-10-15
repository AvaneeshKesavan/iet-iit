import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function SummerSchool() {
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

          {/* Event Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event1.jpg"
              alt="IET Summer School"
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
            <p className="mb-6">
              Through interactive sessions, hands-on activities, and industry
              exposure, the programme aims to build curiosity, enhance technical
              knowledge, and encourage innovation among the next generation of
              tech leaders.
            </p>

            <p className="mb-6">
              The course covered essential topics including Python basics, UI/UX
              design principles, front-end development, back-end development,
              and database integration. Participants also received an introduction
              to AI to gain a competitive view of modern computing.
            </p>

            <p>
              IET Summer School offered students a unique opportunity to learn,
              experiment, and collaborate, equipping them with skills and
              insights to excel in technology and innovation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
