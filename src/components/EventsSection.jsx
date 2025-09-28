import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "../data/events.json";

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsToShow = 3; // Number of events visible at a time

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get visible events for carousel
  const visibleEvents = [];
  for (let i = 0; i < eventsToShow; i++) {
    visibleEvents.push(eventsData[(currentIndex + i) % eventsData.length]);
  }

  return (
    <section id="ourwork" className="py-28 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            OUR WORKS
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-medium text-gray-700 mb-16 max-w-3xl mx-auto"
        >
          Explore our diverse range of events and initiatives designed to
          inspire, educate, and empower students in engineering and technology.
        </motion.p>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleEvents.map((event, idx) => (
              <motion.div
                key={event.id || idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="relative group bg-white border-2 border-blue-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col gap-2 relative z-10">
                    <h3 className="text-xl font-semibold text-black">
                      {event.title}
                    </h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {eventsData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === idx
                  ? "bg-blue-600 scale-110"
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
          className="text-center mt-24"
        >
          <Link
            to="/events"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors duration-300"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
