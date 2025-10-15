import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Dansala() {
  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        {/* Event Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ice Cream Dansala
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The IET on Campus IIT successfully conducted an ice cream dansala,
            demonstrating our chapter's commitment to community service and
            cultural engagement.
          </p>

          {/* Event Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/event/event3.jpg"
              alt="Ice Cream Dansala"
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-justify">
            <p className="mb-6">
              This initiative strengthened community bonds and showcased our
              chapter's dedication to contributing positively to campus life
              beyond our technical activities.
            </p>

            <p className="mb-6">
              The event took place on 14th May 2025 and was successfully
              concluded with positive community feedback. Participants, volunteers,
              and attendees enjoyed engaging activities, fostering collaboration
              and camaraderie within the campus community.
            </p>

            <p>
              Ice Cream Dansala highlighted the value of service, inclusivity,
              and community spirit, reflecting the IET chapter's commitment to
              meaningful engagement beyond academic and technical pursuits.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
