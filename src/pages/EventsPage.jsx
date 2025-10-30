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
    <div className="pt-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            OUR WORK
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-700 mb-10 max-w-3xl mx-auto"
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
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${
                  filter === f
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-50"
                }`}
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
                    className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base flex-1 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Status + Date */}
                      <div className="flex justify-between items-center mt-5">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                            event.status === "Completed"
                              ? "bg-green-600"
                              : event.status === "Happening"
                              ? "bg-blue-600"
                              : "bg-gray-500"
                          }`}
                        >
                          {event.status}
                        </span>
                        <span className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-700">
                          {event.date}
                        </span>
                      </div>

                      {/* View Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(event.link)}
                        className="mt-5 w-full py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
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
