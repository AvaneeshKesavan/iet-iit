import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eventsData from "../data/events.json";

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredEvents = eventsData.filter((event) => {
    if (filter === "Upcoming") return event.status === "Coming Soon";
    if (filter === "Past") return event.status === "Completed";
    return true;
  });

  return (
    <div
      className="pt-20 bg-gray-50 min-h-screen"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: "#003A66" }}
          >
            OUR WORK
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
          >
            Discover the range of impactful events and initiatives that foster
            creativity, innovation, and professional growth among students.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-14 flex-wrap">
            {["All", "Upcoming", "Past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-md font-bold transition-all duration-200 text-sm md:text-base uppercase tracking-wide ${
                  filter === f
                    ? "text-white shadow-md scale-105"
                    : "bg-white text-gray-800 border hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor: filter === f ? "#0058A2" : undefined,
                  borderColor: filter === f ? "#0058A2" : "#D1D5DB",
                }}
              >
                {f} Events
              </button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <AnimatePresence>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, idx) => (
                  <motion.div
                    key={event.title + idx}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border hover:-translate-y-2 flex flex-col h-full"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className="text-lg md:text-xl font-bold mb-2"
                        style={{ color: "#003A66" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base flex-1 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Status + Date */}
                      <div className="flex justify-between items-center mt-5">
                        <span
                          className={`px-3 py-1 rounded-md text-xs font-bold text-white uppercase ${
                            event.status === "Completed"
                              ? ""
                              : event.status === "Happening"
                              ? ""
                              : ""
                          }`}
                          style={{
                            backgroundColor:
                              event.status === "Completed"
                                ? "#10B981"
                                : event.status === "Happening"
                                ? "#0058A2"
                                : "#6B7280",
                          }}
                        >
                          {event.status}
                        </span>
                        <span
                          className="px-3 py-1 rounded-md border text-xs font-bold text-gray-700 uppercase"
                          style={{ borderColor: "#D1D5DB" }}
                        >
                          {event.date}
                        </span>
                      </div>

                      {/* View Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(event.link)}
                        className="mt-5 w-full py-2 rounded-md text-white font-bold hover:opacity-90 transition uppercase tracking-wide"
                        style={{ backgroundColor: "#0058A2" }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  key="no-events"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-gray-500 text-lg mt-8"
                >
                  No events found for this filter.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
