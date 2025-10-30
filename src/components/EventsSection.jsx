import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import eventsData from "../data/events.json";

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleEvents = [];
  for (let i = 0; i < eventsToShow; i++) {
    visibleEvents.push(eventsData[(currentIndex + i) % eventsData.length]);
  }

  return (
    <section
      id="ourwork"
      className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white text-black overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            OUR WORKS
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-medium text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Explore our diverse range of events and initiatives designed to
          inspire, educate, and empower students in engineering and technology.
        </motion.p>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {visibleEvents.map((event, idx) => (
              <motion.div
                key={event.id || idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                  {/* Accent Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="p-6 flex flex-col gap-3 relative z-10 flex-1 text-left">
                    <h3 className="text-xl font-semibold text-gray-900 min-h-[2.5rem] group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 flex-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {eventsData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-blue-600 scale-125 shadow-sm"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            to="/events"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
