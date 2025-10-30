"use client";
import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function FusionNxt() {
  const bookingRefs = {
    finance: useRef(null),
    organising: useRef(null),
    outreach: useRef(null),
    pr: useRef(null),
    compering: useRef(null),
    photography: useRef(null),
  };

  // Separate links for each booking
  const bookingLinks = {
    organising: "https://calendar.app.google/iE3rCgPyYrvvcSNC8",
    finance: "https://calendar.app.google/wYWj6TDF7MxGCSNP6",
    outreach:
      "https://calendar.google.com/calendar/appointments/schedules/OUTREACH_LINK",
    pr: "https://calendar.google.com/calendar/appointments/schedules/PR_LINK",
    compering:
      "https://calendar.google.com/calendar/appointments/schedules/COMPERING_LINK",
    photography:
      "https://calendar.google.com/calendar/appointments/schedules/PHOTOGRAPHY_LINK",
  };

  useEffect(() => {
    // Load CSS
    if (!window.__calendarCSSLoaded) {
      const link = document.createElement("link");
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      window.__calendarCSSLoaded = true;
    }

    // Load script once
    if (!window.__calendarScriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = initializeButtons;
      document.body.appendChild(script);
      window.__calendarScriptLoaded = true;
    } else {
      // If script already loaded, try initializing
      initializeButtons();
    }

    function initializeButtons() {
      Object.entries(bookingRefs).forEach(([key, ref]) => {
        if (
          ref?.current &&
          !ref.current.dataset.loaded &&
          window.calendar?.schedulingButton
        ) {
          ref.current.innerHTML = "";
          window.calendar.schedulingButton.load({
            url: bookingLinks[key],
            color: "#039BE5",
            label: "Book an appointment",
            target: ref.current,
          });
          ref.current.dataset.loaded = "true";
        }
      });
    }
  }, []);

  return (
    <>
      <NavBar />
      <main className="pt-16 bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            FusioNxt
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
              className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
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

          <h2 className="text-2xl font-semibold text-center mb-16 text-gray-800">
            FusioNxt Volunteer Interviews
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Organising and Logistics</h3>
              <div ref={bookingRefs.organising}></div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Finance and Secretarial</h3>
              <div ref={bookingRefs.finance}></div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Industrial Outreach</h3>
              <div ref={bookingRefs.outreach}></div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">PR and Editorial</h3>
              <div ref={bookingRefs.pr}></div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Compering</h3>
              <div ref={bookingRefs.compering}></div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Photography</h3>
              <div ref={bookingRefs.photography}></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
