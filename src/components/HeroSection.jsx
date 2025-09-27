import { useState, useEffect } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaHourglassHalf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
    }, 5000);
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
    days: <FaCalendarAlt className="mx-auto text-xl mb-1" />,
    hours: <FaClock className="mx-auto text-xl mb-1" />,
    minutes: <FaHourglassHalf className="mx-auto text-xl mb-1" />,
    seconds: <FaUsers className="mx-auto text-xl mb-1" />,
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Carousel */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImage === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})`, filter: "brightness(0.4)" }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-32">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
            {title || "Welcome to IET on Campus"}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            {subtitle ||
              "Empowering the next generation of engineers and innovators."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {button1 && (
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition text-white shadow-lg">
                <FaUsers /> {button1}
              </button>
            )}
            {button2 && (
              <button
                onClick={() => navigate("/events")}
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded font-semibold transition text-blue-200 shadow-lg"
              >
                <FaCalendarAlt /> {button2}
              </button>
            )}
          </div>
        </div>

        {/* Right Countdown */}
        <div className="md:w-1/2 flex flex-col items-center bg-black/40 p-6 rounded-lg shadow-xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {countdownEvent?.name || "Next Event"}
          </h2>
          {countdownEvent?.heading && (
            <h3 className="text-xl md:text-2xl font-semibold text-blue-300 text-center">
              {countdownEvent.heading}
            </h3>
          )}
          {countdownEvent?.description && (
            <p className="text-sm md:text-base text-gray-300 text-center">
              {countdownEvent.description}
            </p>
          )}
          {timeLeft ? (
            <div className="grid grid-cols-4 gap-4 text-center text-white w-full">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div
                  key={unit}
                  className="bg-blue-800/70 rounded-lg px-4 py-3 shadow-md flex flex-col items-center justify-center"
                >
                  {iconMap[unit]}
                  <span className="block text-3xl font-bold">
                    {timeLeft[unit] || 0}
                  </span>
                  <span className="uppercase text-xs">{unit}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full bg-blue-700/80 rounded-lg p-6 shadow-xl flex flex-col items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Coming Soon
              </h2>
              <p className="text-sm md:text-base text-blue-200 text-center">
                Stay tuned! Exciting updates are on the way.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentImage === idx ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentImage(idx)}
          ></button>
        ))}
      </div>

      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% }
            50% { background-position: 100% }
            100% { background-position: 0% }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 5s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
