import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function UOWContest() {
  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            UOW Contest
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our IET chapter successfully partnered with Westminster Business
            School to deliver an International App Creation & Brand Development
            Bootcamp, where students developed innovative solutions for Global
            South producers.
          </p>

          {/* Event Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event6.jpg"
              alt="UOW Contest"
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
            <p className="mb-6">
              This collaboration resulted in <strong>PureOrigin</strong>, a
              traceability platform connecting Sri Lankan farmers with UK
              consumers, demonstrating our commitment to international
              partnerships, entrepreneurial innovation, and ethical business
              practices.
            </p>

            <p className="mb-6">
              Participants gained hands-on experience in app creation, brand
              development, and market research, while collaborating across
              borders to solve real-world problems. The event fostered technical
              skills, business acumen, and global collaboration.
            </p>

            <p>
              UOW Contest showcased how innovation, teamwork, and ethical
              entrepreneurship can create meaningful solutions, empowering
              students to contribute to sustainable and impactful projects.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
