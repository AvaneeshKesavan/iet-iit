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
    days: <FaCalendarAlt className="mx-auto text-lg mb-1 opacity-90" />,
    hours: <FaClock className="mx-auto text-lg mb-1 opacity-90" />,
    minutes: <FaClock className="mx-auto text-lg mb-1 opacity-90" />,
    seconds: <FaHourglassHalf className="mx-auto text-lg mb-1 opacity-90" />,
  };

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
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
                style={{ filter: "brightness(0.35)" }}
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              />
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-5 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            {title || "Welcome to IET On Campus IIT"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
            {subtitle ||
              "Empowering the next generation of engineers and innovators."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            {button1 && (
              <motion.a
                href="https://forms.gle/13rS5iqqSHh3rWSv9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 font-bold transition-all text-white shadow-lg text-base uppercase tracking-wide hover:opacity-90"
                style={{ backgroundColor: "#0058A2" }}
              >
                <FaUsers /> {button1}
              </motion.a>
            )}
            {button2 && (
              <motion.button
                onClick={() => navigate("/events")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 text-white font-bold transition-all shadow-lg text-base uppercase tracking-wide hover:bg-white/10"
                style={{ borderColor: "#0058A2" }}
              >
                <FaCalendarAlt /> {button2}
              </motion.button>
            )}
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex flex-col items-center bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-2xl space-y-5 w-full border border-white/20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white drop-shadow-md">
            {countdownEvent?.name || "Next Event"}
          </h2>
          {countdownEvent?.heading && (
            <h3
              className="text-lg sm:text-xl font-semibold text-center"
              style={{ color: "#22BBE0" }}
            >
              {countdownEvent.heading}
            </h3>
          )}
          {countdownEvent?.description && (
            <p className="text-sm sm:text-base text-gray-200 text-center max-w-md">
              {countdownEvent.description}
            </p>
          )}

          {timeLeft ? (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center text-white w-full">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <motion.div
                  key={unit}
                  className="rounded-lg px-3 sm:px-4 py-3 sm:py-4 shadow-lg flex flex-col items-center justify-center transition-all hover:shadow-xl"
                  style={{ backgroundColor: "#0058A2" }}
                  whileHover={{ scale: 1.05 }}
                >
                  {iconMap[unit]}
                  <span className="block text-3xl font-bold">
                    {timeLeft[unit] || 0}
                  </span>
                  <span className="uppercase text-xs sm:text-sm opacity-90 tracking-wide">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div
              className="w-full rounded-lg p-5 sm:p-6 shadow-xl text-center"
              style={{ backgroundColor: "#0058A2" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Coming Soon
              </h2>
              <p className="text-base text-gray-100">
                Stay tuned! Exciting updates are on the way.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentImage === idx
                ? "scale-110 shadow-[0_0_8px_rgba(34,187,224,0.7)]"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: currentImage === idx ? "#22BBE0" : undefined,
            }}
            onClick={() => setCurrentImage(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
