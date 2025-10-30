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

  // Background carousel
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  // Countdown timer
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
    days: <FaCalendarAlt className="mx-auto text-lg mb-1 opacity-90" />,
    hours: <FaClock className="mx-auto text-lg mb-1 opacity-90" />,
    minutes: <FaClock className="mx-auto text-lg mb-1 opacity-90" />,
    seconds: <FaHourglassHalf className="mx-auto text-lg mb-1 opacity-90" />,
  };

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Carousel */}
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
                style={{ filter: "brightness(0.45)" }}
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              />
            )
        )}
      </AnimatePresence>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-5 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x drop-shadow-lg">
            {title || "Welcome to IET On Campus IIT"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200/90 leading-relaxed">
            {subtitle ||
              "Empowering the next generation of engineers and innovators."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            {button1 && (
              <motion.a
                href="https://forms.gle/13rS5iqqSHh3rWSv9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all text-white shadow-[0_4px_14px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.6)] text-base"
              >
                <FaUsers /> {button1}
              </motion.a>
            )}
            {button2 && (
              <motion.button
                onClick={() => navigate("/events")}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-300 hover:text-white hover:bg-blue-600 rounded-lg font-semibold transition-all shadow-[0_4px_14px_rgba(59,130,246,0.3)] text-base"
              >
                <FaCalendarAlt /> {button2}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Right Countdown Box */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5 w-full border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white drop-shadow-md">
            {countdownEvent?.name || "Next Event"}
          </h2>
          {countdownEvent?.heading && (
            <h3 className="text-lg sm:text-xl font-semibold text-blue-300 text-center">
              {countdownEvent.heading}
            </h3>
          )}
          {countdownEvent?.description && (
            <p className="text-sm sm:text-base text-gray-300 text-center max-w-md">
              {countdownEvent.description}
            </p>
          )}

          {/* Countdown */}
          {timeLeft ? (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center text-white w-full">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <motion.div
                  key={unit}
                  className="bg-gradient-to-b from-blue-700/80 to-blue-900/80 rounded-xl px-3 sm:px-4 py-3 sm:py-4 shadow-lg flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  {iconMap[unit]}
                  <span className="block text-3xl font-bold">
                    {timeLeft[unit] || 0}
                  </span>
                  <span className="uppercase text-xs sm:text-sm opacity-85 tracking-wide">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="w-full bg-blue-800/80 rounded-lg p-5 sm:p-6 shadow-xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Coming Soon
              </h2>
              <p className="text-base text-blue-200">
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
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentImage === idx
                ? "bg-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            onClick={() => setCurrentImage(idx)}
          ></button>
        ))}
      </div>

      {/* Gradient text animation */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% center; }
            50% { background-position: 100% center; }
            100% { background-position: 0% center; }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
