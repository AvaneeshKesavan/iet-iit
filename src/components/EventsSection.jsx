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
      className="relative py-20 text-black overflow-hidden"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322BBE0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
          style={{ color: "#003A66" }}
        >
          OUR WORKS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed text-gray-700"
        >
          Explore our diverse range of events and initiatives designed to
          inspire, educate, and empower students in engineering and technology.
        </motion.p>

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
                <div
                  className="relative group bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="p-6 flex flex-col gap-3 relative z-10 flex-1 text-left">
                    <h3
                      className="text-xl font-bold min-h-[2.5rem] transition-colors"
                      style={{ color: "#003A66" }}
                    >
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

        <div className="flex justify-center mt-10 space-x-3">
          {eventsData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "scale-125 shadow-sm"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                backgroundColor: currentIndex === idx ? "#0058A2" : undefined,
              }}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/events"
            className="inline-block px-8 py-3 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wide hover:opacity-90"
            style={{ backgroundColor: "#0058A2" }}
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
