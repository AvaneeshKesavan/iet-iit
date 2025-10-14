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

  // Background carousel state
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  // Countdown state
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
    days: <FaCalendarAlt className="mx-auto text-xl mb-1" />,
    hours: <FaClock className="mx-auto text-xl mb-1" />,
    minutes: <FaHourglassHalf className="mx-auto text-xl mb-1" />,
    seconds: <FaUsers className="mx-auto text-xl mb-1" />,
  };

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Carousel with Smooth Fade */}
      <AnimatePresence>
        {images.map(
          (img, idx) =>
            currentImage === idx && (
              <motion.img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  isLoaded ? "blur-0 scale-100" : "blur-lg scale-105"
                }`}
                style={{ filter: "brightness(0.4)" }}
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              />
            )
        )}
      </AnimatePresence>

      {/* Overlay (kept for extra darkening) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
            {title || "Welcome to IET On Campus IIT"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            {subtitle ||
              "Empowering the next generation of engineers and innovators."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 justify-center md:justify-start">
            {button1 && (
              <motion.a
                href="https://forms.gle/13rS5iqqSHh3rWSv9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition text-white shadow-lg text-sm sm:text-base"
              >
                <FaUsers /> {button1}
              </motion.a>
            )}
            {button2 && (
              <motion.button
                onClick={() => navigate("/events")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded font-semibold transition text-blue-200 shadow-lg text-sm sm:text-base"
              >
                <FaCalendarAlt /> {button2}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Right Countdown */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center bg-black/40 p-4 sm:p-6 rounded-lg shadow-xl space-y-4 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-center">
            {countdownEvent?.name || "Next Event"}
          </h2>
          {countdownEvent?.heading && (
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 text-center">
              {countdownEvent.heading}
            </h3>
          )}
          {countdownEvent?.description && (
            <p className="text-sm sm:text-base md:text-base text-gray-300 text-center">
              {countdownEvent.description}
            </p>
          )}
          {timeLeft ? (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center text-white w-full">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <motion.div
                  key={unit}
                  className="bg-blue-800/70 rounded-lg px-2 sm:px-4 py-2 sm:py-3 shadow-md flex flex-col items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  {iconMap[unit]}
                  <span className="block text-2xl sm:text-3xl font-bold">
                    {timeLeft[unit] || 0}
                  </span>
                  <span className="uppercase text-xs sm:text-sm">{unit}</span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="w-full bg-blue-700/80 rounded-lg p-4 sm:p-6 shadow-xl flex flex-col items-center justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 text-center">
                Coming Soon
              </h2>
              <p className="text-sm sm:text-base md:text-base text-blue-200 text-center">
                Stay tuned! Exciting updates are on the way.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentImage === idx
                ? "bg-white scale-110"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentImage(idx)}
          ></button>
        ))}
      </div>

      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% }
            50% { background-position: 100% }
            100% { background-position: 0% }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
