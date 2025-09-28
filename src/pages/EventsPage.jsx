import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "../data/events.json";

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = eventsData.filter((event) => {
    if (filter === "Upcoming")
      return event.status === "Happening" || event.status === "Coming Soon";
    if (filter === "Past") return event.status === "Completed";
    return true;
  });

  return (
    <div className="pt-16 bg-gray-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            OUR WORK
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Explore our diverse range of events and initiatives designed to
            inspire, educate, and empower students in engineering and
            technology.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            {["All", "Upcoming", "Past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === f
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-50"
                }`}
              >
                {f} Events
              </button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <AnimatePresence>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, idx) => {
                  const randomDate =
                    event.date ||
                    `2025-${String(Math.floor(Math.random() * 12 + 1)).padStart(
                      2,
                      "0"
                    )}-${String(Math.floor(Math.random() * 28 + 1)).padStart(
                      2,
                      "0"
                    )}`;

                  return (
                    <motion.div
                      key={event.title + idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="relative bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
                    >
                      {/* Gradient Border */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>

                      {/* Event Image */}
                      <div className="relative z-10">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-52 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 relative z-10 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold mb-2 min-h-[2.5rem] text-black">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base flex-1">
                          {event.description}
                        </p>

                        {/* Bottom Flex: Badge + Date */}
                        <div className="flex justify-between items-center mt-4 min-h-[2.5rem]">
                          <span
                            className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                              event.status === "Completed"
                                ? "bg-green-600"
                                : event.status === "Happening"
                                ? "bg-blue-600"
                                : "bg-gray-500"
                            }`}
                          >
                            {event.status}
                          </span>
                          <span className="px-3 py-1 rounded-full border border-gray-400 text-sm font-medium text-gray-800">
                            {randomDate}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
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
