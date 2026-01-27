import { useState, useEffect } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "../data/events.json";

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (!eventsData || eventsData.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % eventsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % eventsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + eventsData.length) % eventsData.length,
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (!eventsData || eventsData.length === 0) return null;

  const currentEvent = eventsData[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        marginTop: "120px", // navbar (72px) + ticker (48px)
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background Image with Animation */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentEvent.image})`,
            }}
          >
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 51, 102, 0.85) 0%, rgba(0, 51, 102, 0.65) 40%, rgba(0, 88, 162, 0.4) 100%)",
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Event Information */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span
                  className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor:
                      currentEvent.status === "Coming Soon"
                        ? "#22BBE0"
                        : "rgba(255, 255, 255, 0.2)",
                    color:
                      currentEvent.status === "Coming Soon"
                        ? "#003366"
                        : "#fff",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {currentEvent.status}
                </span>
              </motion.div>

              {/* Event Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{
                  textShadow: "2px 4px 12px rgba(0, 0, 0, 0.5)",
                }}
              >
                {currentEvent.title}
              </motion.h1>

              {/* Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1.5 rounded-full"
                style={{ backgroundColor: "#22BBE0" }}
              />

              {/* Event Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl"
              >
                {currentEvent.description}
              </motion.p>

              {/* Event Date */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-3 text-lg"
              >
                <FaCalendarAlt size={20} style={{ color: "#22BBE0" }} />
                <span className="font-semibold">
                  {new Date(currentEvent.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  onClick={() => navigate(currentEvent.link)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(34, 187, 224, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base uppercase tracking-wide shadow-xl transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, #22BBE0 0%, #00A8CC 100%)",
                    color: "#fff",
                  }}
                >
                  <FaCalendarAlt size={18} />
                  Learn More
                </motion.button>

                <motion.a
                  href="https://forms.gle/13rS5iqqSHh3rWSv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base uppercase tracking-wide shadow-xl transition-all"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    color: "#fff",
                  }}
                >
                  <FaUsers size={18} />
                  Join Our Community
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Side - Navigation Info */}
          <div className="hidden md:flex flex-col items-end space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-right space-y-3"
            >
              <p className="text-sm uppercase tracking-widest text-gray-300 font-semibold">
                Showcasing Our Journey
              </p>
              <p className="text-6xl font-bold" style={{ color: "#22BBE0" }}>
                {String(currentIndex + 1).padStart(2, "0")}
              </p>
              <p className="text-2xl text-gray-300 font-light">
                of {String(eventsData.length).padStart(2, "0")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all hover:scale-110"
        style={{
          backgroundColor: "rgba(0, 88, 162, 0.8)",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(34, 187, 224, 0.4)",
        }}
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all hover:scale-110"
        style={{
          backgroundColor: "rgba(0, 88, 162, 0.8)",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(34, 187, 224, 0.4)",
        }}
        aria-label="Next slide"
      >
        <FaChevronRight size={24} className="text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
        {eventsData.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleDotClick(idx)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="transition-all duration-300 cursor-pointer"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-12 h-3" : "w-3 h-3"
              }`}
              style={{
                backgroundColor:
                  currentIndex === idx ? "#22BBE0" : "rgba(255, 255, 255, 0.4)",
                boxShadow:
                  currentIndex === idx
                    ? "0 0 15px rgba(34, 187, 224, 0.8)"
                    : "none",
              }}
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
}
