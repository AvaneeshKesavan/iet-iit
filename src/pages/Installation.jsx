import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Installation() {
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

          {/* Event Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event5.jpg"
              alt="IET Installation Ceremony"
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
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
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
