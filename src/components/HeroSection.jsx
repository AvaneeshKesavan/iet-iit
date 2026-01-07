import { useState, useEffect } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaHourglassHalf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroData from "../data/hero.json";

export default function HeroSection() {
  const navigate = useNavigate();
  const data = heroData?.[0] || {};
  const {
    title,
    subtitle,
    button1,
    button2,
    images = [],
    countdownEvent,
  } = data;

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    if (!countdownEvent?.dateTime) return;
    const updateCountdown = () => {
      const eventDate = new Date(countdownEvent.dateTime).getTime();
      const now = new Date().getTime();
      const diff = eventDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else setTimeLeft(null);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [countdownEvent?.dateTime]);

  const iconMap = {
    days: <FaCalendarAlt className="mx-auto text-xl mb-2" />,
    hours: <FaClock className="mx-auto text-xl mb-2" />,
    minutes: <FaClock className="mx-auto text-xl mb-2" />,
    seconds: <FaHourglassHalf className="mx-auto text-xl mb-2" />,
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        {images.map(
          (img, idx) =>
            currentImage === idx && (
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0 }}
              >
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.5)" }}
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Professional gradient overlay with IET blue */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 58, 102, 0.4) 0%, rgba(0, 58, 102, 0.3) 50%, rgba(0, 88, 162, 0.2) 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6 sm:space-y-7"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
              style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.4)" }}
            >
              {title || "Welcome to IET On Campus IIT"}
            </h1>
            {/* Accent line under title */}
            <div
              className="h-1 w-20 rounded-full mx-auto md:mx-0"
              style={{ backgroundColor: "#22BBE0" }}
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-light">
            {subtitle ||
              "Empowering the next generation of engineers and innovators."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            {button1 && (
              <motion.a
                href="https://forms.gle/13rS5iqqSHh3rWSv9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all text-white shadow-lg text-base uppercase tracking-wide rounded-md"
                style={{ backgroundColor: "#0058A2" }}
              >
                <FaUsers size={18} /> {button1}
              </motion.a>
            )}
            {button2 && (
              <motion.button
                onClick={() => navigate("/events")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 text-white font-bold transition-all shadow-lg text-base uppercase tracking-wide rounded-md hover:bg-white/10"
                style={{ borderColor: "#22BBE0" }}
              >
                <FaCalendarAlt size={18} /> {button2}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Right Countdown Box */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center backdrop-blur-xl p-8 sm:p-10 rounded-xl shadow-2xl space-y-6 w-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center space-y-3">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
            >
              {countdownEvent?.name || "Next Event"}
            </h2>

            {countdownEvent?.description && (
              <p className="text-sm sm:text-base text-gray-100 max-w-md leading-relaxed">
                {countdownEvent.description}
              </p>
            )}
          </div>

          {timeLeft ? (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center text-white w-full mt-4">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <motion.div
                  key={unit}
                  className="rounded-lg px-3 sm:px-4 py-4 sm:py-6 shadow-lg flex flex-col items-center justify-center transition-all"
                  style={{
                    backgroundColor: "rgba(0, 88, 162, 0.9)",
                    border: "1px solid rgba(34, 187, 224, 0.3)",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 6px 12px rgba(0, 88, 162, 0.4)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {iconMap[unit]}
                  <span className="block text-3xl sm:text-4xl font-bold mb-1">
                    {String(timeLeft[unit] || 0).padStart(2, "0")}
                  </span>
                  <span className="uppercase text-xs sm:text-sm font-bold tracking-wider opacity-90">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div
              className="w-full rounded-lg p-6 sm:p-8 shadow-xl text-center"
              style={{
                backgroundColor: "rgba(0, 88, 162, 0.9)",
                border: "1px solid rgba(34, 187, 224, 0.3)",
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Coming Soon
              </h2>
              <p className="text-base text-gray-100">
                Stay tuned for exciting updates
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            className="transition-all duration-300"
            onClick={() => setCurrentImage(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                currentImage === idx ? "w-10 h-3" : "w-3 h-3"
              }`}
              style={{
                backgroundColor:
                  currentImage === idx ? "#22BBE0" : "rgba(255, 255, 255, 0.4)",
                boxShadow:
                  currentImage === idx
                    ? "0 0 10px rgba(34, 187, 224, 0.6)"
                    : "none",
              }}
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
}
